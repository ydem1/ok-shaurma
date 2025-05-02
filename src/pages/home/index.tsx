import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper>
    <section className="container flex h-full flex-col items-center justify-center py-10">
      <p className="max-w-160 mt-10 rounded-x p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor libero
        corporis sapiente eveniet dolores repudiandae odit natus ipsam mollitia
        voluptatum obcaecati porro omnis earum cumque, reiciendis ut perferendis
        possimus excepturi.
      </p>
    </section>
  </PageWrapper>
);

export default Home;
