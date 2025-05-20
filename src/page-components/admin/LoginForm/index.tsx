import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "src/components/FormField/Input";
import {
  INITIAL_LOGIN_FORM_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "./constants";
import { ILoginFormValues, LoginFormSchema } from "./types";

export const LoginForm: FC = () => {
  const methods = useForm<LoginFormSchema>({
    defaultValues: INITIAL_LOGIN_FORM_VALUES,
    resolver: zodResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = (feedbackData: ILoginFormValues) => {
    console.log(feedbackData);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex h-screen items-center justify-center"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="space-y-5">
          <Input name="email" type="text" placeholder="Логін" />
          <Input name="password" type="password" placeholder="Пароль" />
          <button>send</button>
        </div>
      </form>
    </FormProvider>
  );
};
