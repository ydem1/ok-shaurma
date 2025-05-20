import React, { FC } from "react";
import { LoginForm } from "src/page-components/admin/LoginForm";
import { useAppSelector } from "src/hooks/redux";
import { selectIsAuthorized } from "src/store/admin/selectors";

const Admin: FC = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized);

  return (
    <div className="container">
      {isAuthorized ? <>Авторизований</> : <LoginForm />}
    </div>
  );
};

export default Admin;
