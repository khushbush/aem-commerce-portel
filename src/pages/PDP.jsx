import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../aem/services/aemApi";

export default function PDP() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
  <div className="pdp">
    <div className="pdp-image">Image</div>

    <div className="pdp-info">
      <h2 className="pdp-title">{product.title}</h2>

      <p className="pdp-description">
        {product.description}
      </p>

      <div className="pdp-price">₹ {product.price}</div>

      <div className="pdp-actions">
        <button className="btn">Add to Cart</button>
        <button className="btn btn-buy">Buy Now</button>
      </div>
    </div>
  </div>
);

}
