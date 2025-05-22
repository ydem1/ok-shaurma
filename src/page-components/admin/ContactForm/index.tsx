import React, { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import {
  useGetContactQuery,
  useUpdateContactMutation,
} from "src/store/contact";
import { NotificationService } from "src/helpers/notifications";
import {
  CONTACT_FORM_VALIDATION_SCHEMA,
  INITIAL_CONTACT_FORM_VALUES,
} from "./constants";
import { ContactFormValuesSchema, IContactFormValues } from "./types";

export const ContactForm: FC = () => {
  const { data: contact } = useGetContactQuery();

  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const [isEditable, setIsEditable] = useState(false);

  const methods = useForm<ContactFormValuesSchema>({
    defaultValues: INITIAL_CONTACT_FORM_VALUES,
    resolver: zodResolver(CONTACT_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = async (contactData: IContactFormValues) => {
    try {
      await updateContact(contactData).unwrap();
      NotificationService.success("Зміни збережено успішно!");
    } catch {
      NotificationService.error("Помилка при збереженні");
    } finally {
      setIsEditable(false);
    }
  };

  useEffect(() => {
    if (contact) {
      methods.reset(contact);
    }
  }, [contact, methods]);

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
              readOnly={!isEditable}
            />

            <Input
              name="instagram_link"
              type="text"
              placeholder="Посилання на Інстаграм"
              label="Посилання на Інстаграм"
              readOnly={!isEditable}
            />

            <Input
              name="phone_first_label"
              type="text"
              placeholder="Назва заклада для першого телефона"
              label="Назва заклада для першого телефона"
              readOnly={!isEditable}
            />

            <Input
              name="phone_first_number"
              type="text"
              placeholder="Номер першого телефона"
              label="Номер першого телефона"
              readOnly={!isEditable}
            />

            <Input
              name="phone_second_label"
              type="text"
              placeholder="Назва заклада для другого телефона"
              label="Назва заклада для другого телефона"
              readOnly={!isEditable}
            />

            <Input
              name="phone_second_number"
              type="text"
              placeholder="Номер другого телефона"
              label="Номер другого телефона"
              readOnly={!isEditable}
            />

            <Input
              name="schedule"
              type="text"
              placeholder="Розклад"
              label="Розклад"
              readOnly={!isEditable}
            />

            <Input
              name="address"
              type="text"
              placeholder="Адреса"
              label="Адреса"
              readOnly={!isEditable}
            />
          </div>

          <div className="flex gap-10">
            <Button
              className="w-full"
              variant={ButtonVariants.PRIMARY}
              type="submit"
              isDisabled={!isEditable || isLoading}
              isLoading={isLoading}
            >
              Зберегти
            </Button>

            <Button
              className="w-full"
              type="button"
              variant={ButtonVariants.SECONDARY}
              onClick={() => setIsEditable(true)}
              isDisabled={isEditable}
            >
              Редагувати
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
