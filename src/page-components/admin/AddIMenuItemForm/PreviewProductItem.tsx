import React, { FC, useEffect, useState } from "react";
import { getImageUrl } from "src/utils/getImageUrl";
import { IMenuItem } from "src/@types/menu-item";

interface ProductItemProps extends Omit<IMenuItem, "_id" | "image"> {
  image: File | string | null;
}

export const PreviewProductItem: FC<ProductItemProps> = ({
  name,
  image,
  price,
  weight,
  description,
}) => {
  const [previewSrc, setPreviewSrc] = useState<string>();

  useEffect(() => {
    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewSrc(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof image === "string" && image.length > 0) {
      setPreviewSrc(getImageUrl(image));
    }
  }, [image]);

  return (
    <article className="rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom">
      <div className="h-60">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={previewSrc}
          alt={name}
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
