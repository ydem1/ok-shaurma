import React, { FC, useRef } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { InputFile } from "src/components/FormField/InputFile";
import { useCreateMenuItemMutation } from "src/store/menu";
import { NotificationService } from "src/helpers/notifications";
import { PreviewProductItem } from "../PreviewProductItem";
import { ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA, INITIAL_ADD_MENU_ITEM_FORM_VALUES } from "./constants";
import { IAddIMenuItemFormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";

export const AddIMenuItemForm: FC = () => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const [createMenuItem, { isLoading: isLoadingCreateMenuItem }] =
    useCreateMenuItemMutation();

  const methods = useForm<IAddIMenuItemFormValues>({
    defaultValues: INITIAL_ADD_MENU_ITEM_FORM_VALUES,
    resolver: yupResolver(ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA),
  });

  const watchedFields = useWatch({ control: methods.control });

  const handleReset = () => {
    methods.reset({
      ...INITIAL_ADD_MENU_ITEM_FORM_VALUES,
    });

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const onSubmit = async (menuItemData: IAddIMenuItemFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", menuItemData.name);
      formData.append("description", menuItemData.description);
      formData.append("price", menuItemData.price.toString());
      formData.append("weight", menuItemData.weight.toString());

      if (menuItemData.image) {
        formData.append("image", menuItemData.image);
      }

      await createMenuItem(formData).unwrap();
      NotificationService.success("Створено успішно!");

      handleReset();
    } catch {
      NotificationService.error("Помилка при cтворені");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input name="name" type="text" placeholder="Назва" />
          <Input name="description" type="text" placeholder="Опис" />
          <Input name="price" type="number" placeholder="Прайс" />
          <Input name="weight" type="number" placeholder="Вага" />
          <InputFile name="image" placeholder="Фото" ref={imageInputRef} />

          <PreviewProductItem
            key={
              typeof watchedFields.image === "string"
                ? watchedFields.image
                : watchedFields.image instanceof File
                  ? watchedFields.image.name + watchedFields.image.lastModified // або просто `.name`
                  : "no-image"
            }
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
              isLoading={isLoadingCreateMenuItem}
              isDisabled={isLoadingCreateMenuItem}
            >
              Додати
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
