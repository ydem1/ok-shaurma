import React, { FC } from "react";
import { Extras } from "src/page-components/home/Extras";
import { Menu } from "src/page-components/home/Menu";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper>
    <Menu />
    <Extras />
  </PageWrapper>
);

export default Home;
