import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Input } from "src/components/FormField/Input";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { chechAdminAsync, loginAdminAsync } from "src/store/admin/actions";
import { selectIsLoadingLogin } from "src/store/admin/selectors";
import {
  INITIAL_LOGIN_FORM_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "./constants";
import { ILoginFormValues, LoginFormSchema } from "./types";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoadingLogin);

  const methods = useForm<LoginFormSchema>({
    defaultValues: INITIAL_LOGIN_FORM_VALUES,
    resolver: zodResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const onSuccess = () => {
    dispatch(chechAdminAsync());
  };

  const onSubmit = (loginData: ILoginFormValues) => {
    dispatch(
      loginAdminAsync({
        ...loginData,
        onSuccess,
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

          <Button
            className="w-full"
            variant={ButtonVariants.PRIMARY}
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Увійти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
