import React, { FC } from "react";
import { Loader } from "src/components/Loader";
import { useGetMenuQuery } from "src/store/menu";
import { Sizes } from "src/@types/sizes";
import { ProductItem } from "./ProductItem";

export const Menu: FC = () => {
  const { data: menu, isFetching: isLoadingMenu } = useGetMenuQuery();

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold">Шаурма</h2>

      <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoadingMenu && (
          <div className="col-span-full flex h-[50vh] items-center justify-center">
            <Loader size={Sizes.XXL} />
          </div>
        )}

        {menu && menu.map((item) => <ProductItem key={item._id} {...item} />)}
      </div>
    </section>
  );
};
