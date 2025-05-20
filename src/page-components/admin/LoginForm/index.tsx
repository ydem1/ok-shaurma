import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "src/components/FormField/Input";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { loginAdminAsync } from "src/store/admin/actions";
import { selectIsLoading } from "src/store/admin/selectors";
import {
  INITIAL_LOGIN_FORM_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "./constants";
import { ILoginFormValues, LoginFormSchema } from "./types";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const methods = useForm<LoginFormSchema>({
    defaultValues: INITIAL_LOGIN_FORM_VALUES,
    resolver: zodResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = (loginData: ILoginFormValues) => {
    console.log(loginData);

    dispatch(
      loginAdminAsync({
        ...loginData,
        onSuccess: () => {
          console.log("onSuccess");
        },
      })
    );
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
          <button disabled={isLoading}>send</button>
        </div>
      </form>
    </FormProvider>
  );
};
