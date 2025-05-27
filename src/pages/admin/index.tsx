import React, { FC, useEffect, useRef, useState } from "react";
import { AddIMenuItemForm } from "src/page-components/admin/AddIMenuItemForm";
import { ContactForm } from "src/page-components/admin/ContactForm";
import { EditMenuItemForm } from "src/page-components/admin/EditMenuItemForm";
import { ListExtras } from "src/page-components/admin/ListExtras";
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
import { scrollToComponent } from "src/utils/scrollToComponent";
import { IMenuItem } from "src/@types/menu-item";
import { Sizes } from "src/@types/sizes";

const Admin: FC = () => {
  const [editMenuItem, setMenuEditItem] = useState<IMenuItem | undefined>();
  const editMenuForm = useRef();

  const handleMenuEdit = (item: IMenuItem) => {
    setMenuEditItem(item);
    scrollToComponent(editMenuForm);
  };

  const handleCloseMenuEdit = () => {
    setMenuEditItem(undefined);
  };

  const dispatch = useAppDispatch();

  const isAuthorized = useAppSelector(selectIsAuthorized);
  const isLoading = useAppSelector(selectIsLoadingAuthorized);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(chechAdminAsync());
  };

  useEffect(() => {
    dispatch(chechAdminAsync());
  }, [dispatch]);

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
              <h1 className="text-6xl font-semibold">Адмін панель</h1>
              <Button
                className="text-xl"
                variant={ButtonVariants.SECONDARY}
                onClick={handleLogout}
              >
                Вийти
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-y-20 xl:grid-cols-4">
              <div className="space-y-5 xl:col-span-2">
                <p className="mb-2 text-xl font-semibold">Управління меню</p>
                <ListMenu
                  handleEditItem={handleMenuEdit}
                  onDelete={handleCloseMenuEdit}
                />
              </div>

              <div className="space-y-5 xl:col-span-2" ref={editMenuForm}>
                <div className="mb-2 text-xl font-semibold">
                  {editMenuItem ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <span>Редагувати позицію: </span>
                        <span className="text-bold underline">
                          {editMenuItem.name}
                        </span>
                      </div>

                      <Button
                        className="text-xl"
                        variant={ButtonVariants.SECONDARY}
                        onClick={handleCloseMenuEdit}
                      >
                        Додати нову позицію
                      </Button>
                    </div>
                  ) : (
                    <p>Додати позицію</p>
                  )}
                </div>

                {!editMenuItem ? (
                  <AddIMenuItemForm />
                ) : (
                  <EditMenuItemForm
                    editItem={editMenuItem}
                    clearEditItem={handleCloseMenuEdit}
                  />
                )}
              </div>

              <div className="space-y-5 xl:col-span-3">
                <p className="mb-2 text-xl font-semibold">Добавки</p>
                <ListExtras />
              </div>

              <div className="space-y-5">
                <p className="mb-2 text-xl font-semibold">Додати добавку</p>
              </div>

              <div className="col-span-full space-y-5">
                <p className="mb-2 text-xl font-semibold">
                  Управління Контактною інформацією
                </p>

                <ContactForm />
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
