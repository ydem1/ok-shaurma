import React, { FC, useEffect } from "react";
import { LoginForm } from "src/page-components/admin/LoginForm";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { Loader } from "src/components/Loader";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { chechAdminAsync, logout } from "src/store/admin/actions";
import {
  selectIsAuthorized,
  selectIsLoadingAuthorized,
} from "src/store/admin/selectors";
import { Sizes } from "src/@types/sizes";

const Admin: FC = () => {
  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isLoading = useAppSelector(selectIsLoadingAuthorized);

  useEffect(() => {
    dispatch(chechAdminAsync());
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size={Sizes.XXL} />
      </div>
    );
  }

  return (
    <div className="container">
      {isAuthorized ? (
        <div>
          <p>Авторизований</p>

          <Button
            variant={ButtonVariants.SECONDARY}
            onClick={() => {
              dispatch(logout());
            }}
          >
            Вийти
          </Button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Admin;
