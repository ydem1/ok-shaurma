import React, { FC, useEffect } from "react";
import { ListMenu } from "src/page-components/admin/ListMenu";
import { LoginForm } from "src/page-components/admin/LoginForm";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
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
    <PageWrapper isShownHeader={false} isShownFooter={false}>
      <section className="container">
        {isAuthorized ? (
          <div>
            <p>Авторизований</p>

            <div className="flex">
              <div className="flex-1">ІНША ІНФОРМАЦІЯ</div>
              <ListMenu className="flex-1" />
            </div>

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
      </section>
    </PageWrapper>
  );
};

export default Admin;
