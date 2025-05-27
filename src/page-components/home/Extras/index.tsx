import React, { FC } from "react";
import { Loader } from "src/components/Loader";
import { useGetExtrasQuery } from "src/store/extras";
import { Sizes } from "src/@types/sizes";

export const Extras: FC = () => {
  const { data: extras, isFetching: isLoadingExtras } = useGetExtrasQuery();

  return (
    <section className="container py-12">
      <h2 className="text-center text-2xl font-bold">Добавки</h2>

      <div className="mx-auto mt-9 grid max-w-[1024px] grid-cols-1 gap-4 rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom lg:grid-cols-2 xl:grid-cols-3">
        {isLoadingExtras && (
          <div className="col-span-full flex h-[50vh] items-center justify-center">
            <Loader size={Sizes.XXL} />
          </div>
        )}

        {extras &&
          extras.map(({ _id, name, price }) => (
            <div key={_id} className="flex items-center justify-between gap-5">
              <span className="text-lg font-bold">{name}</span>

              {!!price && (
                <span className="text-lg text-gray-dark">{price}&#8372;</span>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};
