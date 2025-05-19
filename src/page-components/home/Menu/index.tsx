import React, { FC } from "react";
import { ProductItem } from "./ProductItem";
import imageTemp from "./temp.jpg";

const products = [
  {
    _id: "Корисна",
    name: "Корисна",
    image: imageTemp,
    price: 80,
    weight: 250,
    description: "Шаурма з овочами без м’яса, для тих, хто цінує легкість.",
  },
  {
    _id: "Дитяча",
    name: "Дитяча",
    image: imageTemp,
    price: 100,
    weight: 280,
    description: "Легка шаурма для дітей — смачно та поживно.",
  },
  {
    _id: "Класична куряча",
    name: "Класична куряча",
    image: imageTemp,
    price: 140,
    weight: 320,
    description: "Класична шаурма з куркою та овочами.",
  },
  {
    _id: "Класична теляча",
    name: "Класична теляча",
    image: imageTemp,
    price: 160,
    weight: 330,
    description: "Шаурма з ніжною телятиною та свіжими інгредієнтами.",
  },
  {
    _id: "Сирна",
    name: "Сирна",
    image: imageTemp,
    price: 110,
    weight: 280,
    description: "Шаурма з додаванням сиру — ніжно та ароматно.",
  },
  {
    _id: "М’ясна",
    name: "М’ясна",
    image: imageTemp,
    price: 200,
    weight: 320,
    description: "Ситна шаурма з міксом м’яса — для справжніх поціновувачів.",
  },
  {
    _id: "Морська",
    name: "Морська",
    image: imageTemp,
    price: 220,
    weight: 330,
    description: "Оригінальна шаурма з морепродуктами — спробуй щось нове!",
  },
  {
    _id: "Ваша фантазія",
    name: "Ваша фантазія",
    image: imageTemp,
    price: 180,
    weight: 310,
    description: "Комбінуй інгредієнти на свій смак — шаурма без обмежень.",
  },
  {
    _id: "Супер ситна",
    name: "Супер ситна",
    image: imageTemp,
    price: 250,
    weight: 400,
    description: "Максимум начинки, максимум смаку — для справжнього голоду.",
  },
];

export const Menu: FC = () => (
  <section className="container">
    <h2 className="text-2xl font-bold">Шаурма</h2>

    <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((item) => (
        <ProductItem key={item._id} {...item} />
      ))}
    </div>
  </section>
);
