import React, { FC } from "react";
import { Menu } from "src/page-components/home/Menu";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="pt-12.5 pb-9">
    <Menu />
  </PageWrapper>
);

export default Home;
