import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { InputFile } from "src/components/FormField/InputFile";
import { useUpdateMenuItemMutation } from "src/store/menu";
import { NotificationService } from "src/helpers/notifications";
import { IMenuItem } from "src/@types/menu-item";
import { PreviewProductItem } from "../PreviewProductItem";
import { INITIAL_EDIT_MENU_ITEM_FORM_VALUES } from "./constants";
import { IEditIMenuItemFormValues } from "./types";

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

  const methods = useForm<IEditIMenuItemFormValues>({
    defaultValues: INITIAL_EDIT_MENU_ITEM_FORM_VALUES,
    // resolver: yupResolver(EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA),
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
    const { name, description, price, weight } = editItem;

    methods.reset({
      name,
      description,
      price: price ? `${price}` : "",
      weight: weight ? `${weight}` : "",
    });
  }, [editItem, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input name="name" type="text" placeholder="Назва" />
          <Input name="description" type="text" placeholder="Опис" />
          <Input name="price" type="number" placeholder="Ціна" />
          <Input name="weight" type="number" placeholder="Вага" />
          <InputFile name="image" placeholder="Фото" />

          <PreviewProductItem
            key={
              typeof watchedFields.image === "string"
                ? watchedFields.image
                : watchedFields.image instanceof File
                  ? watchedFields.image.name + watchedFields.image.lastModified
                  : "no-image"
            }
            name={watchedFields.name}
            description={watchedFields.description}
            price={+watchedFields.price}
            weight={+watchedFields.weight}
            image={watchedFields.image || editItem.image}
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
