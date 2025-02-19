import React from "react";
import { useTranslation } from "react-i18next";
import Price from "../components/Price";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    price: 100,
    image: "https://via.placeholder.com/400",
    recommended: [
      {
        id: 2,
        name: "Recommended Product 1",
        price: 50,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 3,
        name: "Recommended Product 2",
        price: 75,
        image: "https://via.placeholder.com/200",
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    price: 150,
    image: "https://via.placeholder.com/400",
    recommended: [
      {
        id: 4,
        name: "Recommended Product 3",
        price: 60,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 5,
        name: "Recommended Product 4",
        price: 85,
        image: "https://via.placeholder.com/200",
      },
    ],
  },
];

const Products = () => {
  const { t } = useTranslation("products");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">{t("products")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 text-2xl font-bold">
              <Price value={product.price} />
            </div>

            <h3 className="mt-6 text-lg font-bold">
              {t("recommended_products")}
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-2">
              {product.recommended.map((recommendedProduct) => (
                <div
                  key={recommendedProduct.id}
                  className="flex items-center gap-4"
                >
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      {recommendedProduct.name}
                    </h4>
                    <Price value={recommendedProduct.price} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
