import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { useUpdateExtraMutation } from "src/store/extras";
import { NotificationService } from "src/helpers/notifications";
import { IExtra } from "src/@types/extra";
import {
  EDIT_EXTRA_FORM_VALIDATION_SCHEMA,
  INITIAL_EDIT_EXTRA_FORM_VALUES,
} from "./constants";
import { IEditExtraFormValues } from "./types";

interface Props {
  editItem: IExtra;
  clearEditItem: () => void;
}

export const EditExtraForm: FC<Props> = ({
  editItem,
  clearEditItem = () => {},
}) => {
  const [updateExtra, { isLoading: isLoadingUpdateExtra }] =
    useUpdateExtraMutation();

  const methods = useForm<IEditExtraFormValues>({
    defaultValues: INITIAL_EDIT_EXTRA_FORM_VALUES,
    resolver: yupResolver(EDIT_EXTRA_FORM_VALIDATION_SCHEMA),
  });

  const handleReset = () => {
    methods.reset(INITIAL_EDIT_EXTRA_FORM_VALUES);
    clearEditItem();
  };

  const onSubmit = async (extraData: IEditExtraFormValues) => {
    try {
      await updateExtra({
        id: editItem._id,
        data: {
          name: extraData.name,
          price: +extraData.price,
        },
      }).unwrap();

      NotificationService.success("Оновлено успішно!");

      clearEditItem();

      methods.reset(INITIAL_EDIT_EXTRA_FORM_VALUES);
    } catch {
      NotificationService.error("Помилка при збереженні");
    }
  };

  useEffect(() => {
    const { name, price } = editItem;

    methods.reset({
      name,
      price: price ? `${price}` : "",
    });
  }, [editItem, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input name="name" type="text" placeholder="Назва" />
          <Input name="price" type="number" placeholder="Ціна" />

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              isLoading={isLoadingUpdateExtra}
              isDisabled={isLoadingUpdateExtra}
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
