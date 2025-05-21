import React, { FC, useEffect, useState } from "react";
import { AddIMenuItemForm } from "src/page-components/admin/AddIMenuItemForm";
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
import { IMenuItem } from "src/@types/menu-item";
import { Sizes } from "src/@types/sizes";

const Admin: FC = () => {
  const [editItem, setEditItem] = useState<IMenuItem | undefined>();

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
      <section className="container py-20">
        {isAuthorized ? (
          <div className="space-y-20">
            <div className="flex items-center justify-between">
              <h1 className="text-6xl">Адмін панель</h1>
              <Button
                className="text-xl"
                variant={ButtonVariants.SECONDARY}
                onClick={() => dispatch(logout())}
              >
                Вийти
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <div className="space-y-5">
                <h2 className="mb-2 text-xl font-semibold">Управління меню</h2>
                <ListMenu handleEditItem={setEditItem} />
              </div>

              <div className="space-y-5">
                <p className="mb-2 text-xl font-semibold">
                  {editItem ? (
                    <span>
                      Редагувати позицію:{" "}
                      <span className="text-bold underline">
                        {editItem.name}
                      </span>
                    </span>
                  ) : (
                    "Додати позицію"
                  )}
                </p>

                <AddIMenuItemForm
                  editItem={editItem}
                  clearEditItem={() => setEditItem(undefined)}
                />
              </div>
            </div>
          </div>
        ) : (
          <LoginForm />
        )}
      </section>
    </PageWrapper>
  );
};

export default Admin;
