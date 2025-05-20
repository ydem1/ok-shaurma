import React, { FC, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Admin, Home, NotFound } from "src/pages";
import { useAppDispatch } from "src/hooks/redux";
import { chechAdminAsync } from "src/store/admin/actions";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
  {
    element: <Admin />,
    path: PATHNAMES.ADMIN,
  },
];

const AppRoutes: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(chechAdminAsync());
  }, []);

  return useRoutes(ROUTES);
};

export default AppRoutes;
