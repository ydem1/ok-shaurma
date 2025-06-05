import React, { FC, useState } from "react";
import LazyLoad from "react-lazyload";
import cn from "classnames";
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
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setPreviewSrc(imageTemp);
  };

  return (
    <article className="rounded-2xl bg-white-base px-4 pb-9 pt-4 shadow-custom">
      <div className="h-60">
        <LazyLoad>
          <div className="relative h-60 overflow-hidden">
            <img
              className={cn(
                "transition-filter h-full w-full rounded-xl object-cover duration-500",
                {
                  "blur-0": isLoaded,
                  "blur-md": !isLoaded,
                }
              )}
              src={previewSrc}
              alt={name}
              onLoad={() => setIsLoaded(true)}
              onError={handleError}
            />
          </div>
        </LazyLoad>
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
