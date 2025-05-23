import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { useUpdateMenuItemMutation } from "src/store/menu";
import { NotificationService } from "src/helpers/notifications";
import { IMenuItem } from "src/@types/menu-item";
import {
  EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA,
  INITIAL_EDIT_MENU_ITEM_FORM_VALUES,
} from "./constants";
import { PreviewProductItem } from "../PreviewProductItem";
import { IEditIMenuItemFormValues, IEditMenuItemFormSchema } from "./types";

interface Props {
  editItem: IMenuItem;
  clearEditItem: () => void;
}

export const EditMenuItemForm: FC<Props> = ({
  editItem,
  clearEditItem = () => {},
}) => {
  const [updateMenuItem, { isLoading: isLoadingUpdateMenuItem }] =
    useUpdateMenuItemMutation();

  const methods = useForm<IEditMenuItemFormSchema>({
    defaultValues: INITIAL_EDIT_MENU_ITEM_FORM_VALUES,
    resolver: zodResolver(EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA),
  });

  const watchedFields = methods.watch();

  const handleReset = () => {
    methods.reset(INITIAL_EDIT_MENU_ITEM_FORM_VALUES);
    clearEditItem();
  };

  const onSubmit = async (menuItemData: IEditIMenuItemFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", menuItemData.name);
      formData.append("description", menuItemData.description);
      formData.append("price", menuItemData.price.toString());
      formData.append("weight", menuItemData.weight.toString());

      if (menuItemData.image) {
        formData.append("image", menuItemData.image);
      }
      await updateMenuItem({ _id: editItem._id, data: formData }).unwrap();
      NotificationService.success("Оновлено успішно!");

      clearEditItem();

      methods.reset(INITIAL_EDIT_MENU_ITEM_FORM_VALUES);
    } catch {
      NotificationService.error("Помилка при збереженні");
    }
  };

  useEffect(() => {
    methods.reset({
      ...editItem,
      price: `${editItem.price}`,
      weight: `${editItem.weight}`,
    });
  }, [editItem, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input name="name" type="text" placeholder="Назва" />
          <Input name="description" type="text" placeholder="Опис" />
          <Input name="price" type="number" placeholder="Прайс" />
          <Input name="weight" type="number" placeholder="Вага" />
          <Input name="image" type="file" placeholder="Фото" />

          <PreviewProductItem
            name={watchedFields.name}
            description={watchedFields.description}
            price={+watchedFields.price}
            weight={+watchedFields.weight}
            image={watchedFields.image}
          />

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              isLoading={isLoadingUpdateMenuItem}
              isDisabled={isLoadingUpdateMenuItem}
            >
              Редагувати
            </Button>

            <Button
              className="w-full"
              type="reset"
              variant={ButtonVariants.SECONDARY}
              onClick={handleReset}
            >
              Очистити
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
