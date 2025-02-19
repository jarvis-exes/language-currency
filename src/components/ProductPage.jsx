import Price from "./Price";
import { useTranslation } from "react-i18next";

const ProductPage = ({ product }) => {
  const { t } = useTranslation("products");

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4 text-2xl">
            <Price value={product.price} />
          </div>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-bold">{t("recommended_products")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {product.recommended.map((p) => (
          <div key={p.id} className="border p-4 rounded-lg">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
            <Price value={p.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
