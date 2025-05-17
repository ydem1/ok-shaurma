import React, { FC } from "react";
import { IMenuItem } from "src/@types/menu-item";
// TODO delete temp image
import imageTemp from "./temp.jpg";

export const ProductItem: FC<IMenuItem> = ({
  name,
  // image,
  price,
  weight,
  description,
}) => {
  return (
    <article className="rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom">
      <div>
        <img className="w-full rounded-xl" src={imageTemp} alt={name} />
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <span className="text-xs text-gray-dark">{`${weight}г.`}</span>
        <span className="text-lg font-bold">{name}</span>
        <span className="text-xs text-gray-dark">{description}</span>

        <div>
          <span className="text-2xl font-bold">{price}&#8372;</span>
        </div>
      </div>
    </article>
  );
};
