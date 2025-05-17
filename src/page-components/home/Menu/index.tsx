import React, { FC } from "react";
import { useGetMenuQuery } from "src/store/menu";
import { ProductItem } from "./ProductItem";

export const Menu: FC = () => {
  const { data } = useGetMenuQuery({});

  console.log(data)

  return (
    <section className="container">
      <h2 className="text-2xl font-bold">Шаурма</h2>

      <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};
