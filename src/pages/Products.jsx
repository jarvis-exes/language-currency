import React from "react";
import { useTranslation } from "react-i18next";
import Price from "../components/Price";

const products = [
  {
    key: "product_1",
    price: 100,
    image:
      "https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?t=st=1740063400~exp=1740067000~hmac=e6b3d865d9f27d7bc0262cb42676f6dfc0f4544ce7adc3c7bdf88eba4bf1a84c&w=740",
    recommended: [
      {
        key: "recommended_product_1",
        price: 50,
        image:
          "https://img.freepik.com/free-vector/sports-car-concept-illustration_114360-16457.jpg?t=st=1740063563~exp=1740067163~hmac=3eb8fb76152375108d2f7fc1741c0735251b2f8ae44db7e7368072f63f193e3e&w=740",
      },
      {
        key: "recommended_product_2",
        price: 75,
        image:
          "https://img.freepik.com/free-vector/london-taxi-concept-illustration_114360-24754.jpg?t=st=1740063585~exp=1740067185~hmac=7dda98bd47cc2c6db760d04aa2e86ff90f636918c90041b684164df9f80a2d4d&w=740",
      },
    ],
  },
  {
    key: "product_2",
    price: 150,
    image:
      "https://img.freepik.com/free-vector/car-dealer-showing-new-red-sports-auto_3446-654.jpg?t=st=1740063469~exp=1740067069~hmac=b01f63f20ac63dcda4b7a48a1640b926989ce36339d3df8553e1ef5b04984556&w=740",
    recommended: [
      {
        key: "recommended_product_3",
        price: 60,
        image:
          "https://img.freepik.com/free-vector/fast-car-concept-illustration_114360-3352.jpg?ga=GA1.1.1322922137.1740063337&semt=ais_hybrid",
      },
      {
        key: "recommended_product_4",
        price: 85,
        image:
          "https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?t=st=1740063400~exp=1740067000~hmac=e6b3d865d9f27d7bc0262cb42676f6dfc0f4544ce7adc3c7bdf88eba4bf1a84c&w=740",
      },
    ],
  },
];

const Products = () => {
  const { t } = useTranslation("common");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">{t("products.Products")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.key} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={t(`products.${product.key}.name`)}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">
              {t(`products.${product.key}.name`)}
            </h2>
            <p className="text-gray-600 mt-2">
              {t(`products.${product.key}.description`)}
            </p>
            <div className="mt-4 text-2xl font-bold">
              <Price value={product.price} />
            </div>

            <h3 className="mt-6 text-lg font-bold">
              {t("products.recommended_products")}
            </h3>
            <div className="grid grid-cols-1 gap-4 mt-2">
              {product.recommended.map((recommendedProduct) => (
                <div
                  key={recommendedProduct.key}
                  className="flex items-center gap-4"
                >
                  <img
                    src={recommendedProduct.image}
                    alt={t(`products.${recommendedProduct.key}.name`)}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-md font-semibold">
                      {t(`products.${recommendedProduct.key}.name`)}
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
