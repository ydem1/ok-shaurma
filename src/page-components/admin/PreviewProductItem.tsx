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

  console.log({ price, weight });


  return (
    <article className="rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom">
      <div className="h-60">
        {previewSrc ? (
          <img
            className="h-full w-full rounded-xl object-cover"
            src={previewSrc}
            alt={name}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
            Попередній перегляд відсутній
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {!!weight && (
          <span className="text-xs text-gray-dark">{`${weight}г.`}</span>
        )}

        {!!name && <span className="text-lg font-bold">{name}</span>}

        {!!description && (
          <span className="text-xs text-gray-dark">{description}</span>
        )}

        {!!price && (
          <div>
            <span className="text-2xl font-bold">{price}&#8372;</span>
          </div>
        )}
      </div>
    </article>
  );
};
