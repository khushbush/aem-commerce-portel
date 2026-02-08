import { useEffect,useState } from "react";
import { fetchProducts } from "../aem/services/aemApi";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchPlpProductsFromAEM } from "../aem/services/aemGraphqlService";

export default function PLP(){

    const [products,setProducts] = useState([]);
    const [searchParam] = useSearchParams();
    const category = searchParam.get("category");
    const segment = searchParam.get("segment")
    const navigate = useNavigate();

    const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;
    
    // useEffect(()=>{
    //     fetchProducts().then(setProducts);

    // },[]);

    useEffect(() =>{
        fetchPlpProductsFromAEM({category,segment})
        .then(setProducts)
        .catch(console.error);
    },[category,segment])

 return (
  <div className="store-page">
    <div className="store-center">
      <div className="plp-container">
        <h2 className="plp-title">
          {category ? category.toUpperCase() : "ALL PRODUCTS"}
        </h2>

        <div className="plp-grid">
          {filteredProducts.map((product) => (
            <div key={product.sku} className="product-card" onClick={() => navigate(`/product/${product.sku}`)}>
              <div className="product-image">Image</div>

              <div className="product-title">{product.title}</div>
              <div className="product-price">₹ {product.sku}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}