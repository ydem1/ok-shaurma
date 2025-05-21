import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { useCreateMenuItemMutation } from "src/store/menu";
import { NotificationService } from "src/helpers/notifications";
import {
  ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA,
  INITIAL_ADD_MENU_ITEM_FORM_VALUES,
} from "./constants";
import { AddIMenuItemFormSchema, IAddIMenuItemFormValues } from "./types";

export const AddIMenuItemForm: FC = () => {
  const [createMenuItem, { isLoading }] = useCreateMenuItemMutation();

  const methods = useForm<AddIMenuItemFormSchema>({
    defaultValues: INITIAL_ADD_MENU_ITEM_FORM_VALUES,
    resolver: zodResolver(ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = async (menuItemData: IAddIMenuItemFormValues) => {
    try {
      await createMenuItem({
        name: menuItemData.name,
        description: menuItemData.description,
        price: +menuItemData.price,
        weight: +menuItemData.weight,
        image: menuItemData.image,
      }).unwrap();

      methods.reset(INITIAL_ADD_MENU_ITEM_FORM_VALUES);

      NotificationService.success("Створено успішно!");
    } catch {
      NotificationService.error("Помилка при створенні");
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
          <Input name="image" type="text" placeholder="Фото" />

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Додати
            </Button>

            <Button
              className="w-full"
              type="reset"
              variant={ButtonVariants.SECONDARY}
            >
              Очистити
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
