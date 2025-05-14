import React, { FC } from "react";
import { ProductItem } from "./ProductItem";

export const Menu: FC = () => (
  <section className="container">
    <h2 className="text-2xl font-bold">Шаурма</h2>

    <div className="mt-9 grid grid-cols-4 gap-4">
      {[1, 2, 4, 5, 6, 7, 8, 9].map((item) => (
        <ProductItem key={item} />
      ))}
    </div>
  </section>
);
