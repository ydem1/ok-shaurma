import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import {
  CONTACT_FORM_VALIDATION_SCHEMA,
  INITIAL_CONTACT_FORM_VALUES,
} from "./constants";
import { ContactFormValuesSchema, IContactFormValues } from "./types";

export const ContactForm: FC = () => {
  const methods = useForm<ContactFormValuesSchema>({
    defaultValues: INITIAL_CONTACT_FORM_VALUES,
    resolver: zodResolver(CONTACT_FORM_VALIDATION_SCHEMA),
  });

  const handleReset = () => {
    methods.reset(INITIAL_CONTACT_FORM_VALUES);
  };

  const onSubmit = async (contactData: IContactFormValues) => {
    console.log(contactData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <Input
              name="tik_tok_link"
              type="text"
              placeholder="Посилання на Тік Ток"
              label="Посилання на Тік Ток"
            />

            <Input
              name="instagram_link"
              type="text"
              placeholder="Посилання на Інстаграм"
              label="Посилання на Інстаграм"
            />

            <Input
              name="phone_first_label"
              type="text"
              placeholder="Назва заклада для першого телефона"
              label="Назва заклада для першого телефона"
            />

            <Input
              name="phone_first_number"
              type="text"
              placeholder="Номер першого телефона "
              label="Номер першого телефона "
            />

            <Input
              name="phone_second_label"
              type="text"
              placeholder="Назва заклада для другого телефона"
              label="Назва заклада для другого телефона"
            />

            <Input
              name="phone_second_number"
              type="text"
              placeholder="Номер другого телефона "
              label="Номер другого телефона "
            />

            <Input
              name="schedule"
              type="text"
              placeholder="Розклад"
              label="Розклад"
            />

            <Input
              name="address"
              type="text"
              placeholder="Адреса"
              label="Адреса"
            />
          </div>

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              // isLoading={isLoadingCreateMenuItem || isLoadingUpdateMenuItem}
              // isDisabled={isLoadingCreateMenuItem || isLoadingUpdateMenuItem}
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
