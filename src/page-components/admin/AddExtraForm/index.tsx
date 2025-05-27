import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { useCreateExtraMutation } from "src/store/extras";
import { NotificationService } from "src/helpers/notifications";
import {
  ADD_EXTRA_FORM_VALIDATION_SCHEMA,
  INITIAL_ADD_EXTRA_FORM_VALUES,
} from "./constants";
import { IAddExtraFormValues } from "./types";

export const AddExtraForm: FC = () => {
  const [createExtra, { isLoading: isLoadingCreateExtra }] =
    useCreateExtraMutation();

  const methods = useForm<IAddExtraFormValues>({
    defaultValues: INITIAL_ADD_EXTRA_FORM_VALUES,
    resolver: yupResolver(ADD_EXTRA_FORM_VALIDATION_SCHEMA),
  });

  const handleReset = () => {
    methods.reset({
      ...INITIAL_ADD_EXTRA_FORM_VALUES,
    });
  };

  const onSubmit = async (extraData: IAddExtraFormValues) => {
    try {
      await createExtra({
        name: extraData.name,
        price: +extraData.price,
      }).unwrap();

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
          <Input name="price" type="number" placeholder="Ціна" />

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              isLoading={isLoadingCreateExtra}
              isDisabled={isLoadingCreateExtra}
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
