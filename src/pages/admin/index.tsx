import React, { FC } from "react";
import { LoginForm } from "src/page-components/admin/LoginForm";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { logout } from "src/store/admin/actions";
import { selectIsAuthorized } from "src/store/admin/selectors";

const Admin: FC = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  const dispatch = useAppDispatch();

  return (
    <div className="container">
      {isAuthorized ? (
        <div>
          <p>Авторизований</p>

          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Admin;
