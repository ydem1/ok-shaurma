import React, { FC, useState } from "react";
import { getImageUrl } from "src/utils/getImageUrl";
import { IMenuItem } from "src/@types/menu-item";
import imageTemp from "./temp.jpg";

export const ProductItem: FC<Omit<IMenuItem, "_id">> = ({
  name,
  image,
  price,
  weight,
  description,
}) => {
  const [previewSrc, setPreviewSrc] = useState<string>(getImageUrl(image));

  const handleError = () => {
    setPreviewSrc(imageTemp);
  };

  return (
    <article className="rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom">
      <div className="h-60">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={previewSrc}
          alt={name}
          onError={handleError}
        />
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
