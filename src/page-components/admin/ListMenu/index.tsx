import React, { FC } from "react";
import cn from "classnames";
import imageTemp from "src/page-components/home/Menu/temp.jpg";
import { Loader } from "src/components/Loader";
import { useGetMenuQuery } from "src/store/menu";
import { Sizes } from "src/@types/sizes";

interface Props {
  className?: string;
}

export const ListMenu: FC<Props> = ({ className }) => {
  const { data: menu, isFetching: isLoadingMenu } = useGetMenuQuery({});

  return (
    <div className={cn("rounded-2xl border bg-white-base", className)}>
      {isLoadingMenu && (
        <div className="p-5">
          <Loader size={Sizes.M} />
        </div>
      )}

      <ul className="grid grid-cols-1">
        <li className="grid grid-cols-[80px_1fr_1fr_2fr_auto] gap-4 rounded-t-2xl border-b bg-gray-50 p-5 font-semibold text-gray-700">
          <div>Фото</div>
          <div>Вага</div>
          <div>Назва</div>
          <div>Опис</div>
          <div className="text-right">Ціна</div>
        </li>

        {menu &&
          menu.map(({ _id, name, price, weight, description }) => (
            <li
              key={_id}
              className="grid grid-cols-[80px_1fr_1fr_2fr_auto] items-center gap-4 border-b p-5 last:border-none"
            >
              <div className="h-20 w-20">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={imageTemp}
                  alt={name}
                />
              </div>
              <div>{weight}г</div>
              <div>{name}</div>
              <div>{description}</div>
              <div className="text-right">{price}&#8372;</div>
            </li>
          ))}
      </ul>
    </div>
  );
};
