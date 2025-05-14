import React, { FC } from "react";
import imageTemp from "./temp.jpg";

const temp_product = {
  name: "М'ясна",
  image: imageTemp,
  price: 200,
  weight: 320,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vo",
};

export const ProductItem: FC = () => {
  const { name, image, price, weight, description } = temp_product;

  return (
    <article className="shadow-custom bg-white-base px-4 pb-9 pt-4 rounded-2xl">
      <div>
        <img className="w-full rounded-xl" src={image} alt={name} />
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <span className="text-gray-dark text-xs">{`${weight}г.`}</span>
        <span className="text-lg font-bold">{name}</span>
        <span className="text-gray-dark text-xs">{description}</span>

        <div>
          <span className="text-2xl font-bold">{price}&#8372;</span>
        </div>
      </div>
    </article>
  );
};
