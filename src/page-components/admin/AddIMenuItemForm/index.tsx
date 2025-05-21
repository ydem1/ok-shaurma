import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductItem } from "src/page-components/home/Menu/ProductItem";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import {
  useCreateMenuItemMutation,
  useUpdateMenuItemMutation,
} from "src/store/menu";
import { NotificationService } from "src/helpers/notifications";
import { IMenuItem } from "src/@types/menu-item";
import {
  ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA,
  INITIAL_ADD_MENU_ITEM_FORM_VALUES,
} from "./constants";
import { AddIMenuItemFormSchema, IAddIMenuItemFormValues } from "./types";

interface Props {
  editItem?: IMenuItem;
  clearEditItem: () => void;
}

export const AddIMenuItemForm: FC<Props> = ({
  editItem,
  clearEditItem = () => {},
}) => {
  const [createMenuItem, { isLoading: isLoadingCreateMenuItem }] =
    useCreateMenuItemMutation();
  const [updateMenuItem, { isLoading: isLoadingUpdateMenuItem }] =
    useUpdateMenuItemMutation();

  const methods = useForm<AddIMenuItemFormSchema>({
    defaultValues: INITIAL_ADD_MENU_ITEM_FORM_VALUES,
    resolver: zodResolver(ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA),
  });

  const watchedFields = methods.watch();

  const handleReset = () => {
    methods.reset(INITIAL_ADD_MENU_ITEM_FORM_VALUES);
    clearEditItem();
  };

  const onSubmit = async (menuItemData: IAddIMenuItemFormValues) => {
    try {
      if (editItem) {
        await updateMenuItem({
          _id: editItem._id,
          ...menuItemData,
          price: +menuItemData.price,
          weight: +menuItemData.weight,
        }).unwrap();

        NotificationService.success("Оновлено успішно!");

        clearEditItem();
      } else {
        await createMenuItem({
          ...menuItemData,
          price: +menuItemData.price,
          weight: +menuItemData.weight,
        }).unwrap();

        NotificationService.success("Створено успішно!");
      }

      methods.reset(INITIAL_ADD_MENU_ITEM_FORM_VALUES);
    } catch {
      NotificationService.error("Помилка при збереженні");
    }
  };

  useEffect(() => {
    if (editItem) {
      methods.reset({
        ...editItem,
        price: `${editItem.price}`,
        weight: `${editItem.weight}`,
      });
    }
  }, [editItem]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input name="name" type="text" placeholder="Назва" />
          <Input name="description" type="text" placeholder="Опис" />
          <Input name="price" type="number" placeholder="Прайс" />
          <Input name="weight" type="number" placeholder="Вага" />
          <Input name="image" type="text" placeholder="Фото" />

          <ProductItem
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
              isLoading={isLoadingCreateMenuItem || isLoadingUpdateMenuItem}
              isDisabled={isLoadingCreateMenuItem || isLoadingUpdateMenuItem}
            >
              {editItem ? "Редагувати" : "Додати"}
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
