import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

import carbon from "../images/Product Images/carbon.png";

function ProductsPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      types: [
        { id: 11, name: "Type A" },
        { id: 12, name: "Type B" },
      ],
    },
  ]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [expandedTypeId, setExpandedTypeId] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
// const location = useLocation();

  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
  
  useEffect(() => {
    const initialTypeId = searchParams.get('typeId');
    if (initialTypeId) {
      setExpandedTypeId(initialTypeId);
    }
  }, [searchParams]);

  const handleBackButton = () => {
    setExpandedTypeId(null);
    if (expandedProductId !== null) {
    //   navigate(-1);
      setExpandedProductId(null);
    }
  };

  const handleProductClick = (productId) => {
    setExpandedProductId(productId);
    setExpandedTypeId(null);
    navigate(`#product-${productId}`);
  };

  const handleTypeClick = (typeId) => {
    setExpandedTypeId(typeId);
    searchParams.set("typeId", typeId);
    navigate(`#product-${expandedProductId}-type-${typeId}`);
  };

// useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const productId = params.get('productId');
//     const typeId = params.get('typeId');

//     if (productId) {
//       setExpandedProductId(parseInt(productId, 10));
//     }

//     if (typeId) {
//       setExpandedTypeId(parseInt(typeId, 10));
//     }
//   }, [location.search]);

//   const handleBackButton = () => {
//     if (expandedTypeId !== null) {
//       setExpandedTypeId(null);
//       const urlParams = new URLSearchParams(location.search);
//       urlParams.delete('typeId');
//       navigate(`?${urlParams.toString()}`);
//     } else if (expandedProductId !== null) {
//       setExpandedProductId(null);
//       navigate(-1);
//     }
//   };

//   const handleProductClick = (productId) => {
//     setExpandedProductId(productId);
//     setExpandedTypeId(null);
//     navigate(`?productId=${productId}`);
//   };

//   const handleTypeClick = (typeId) => {
//     setExpandedTypeId(typeId);
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('typeId', typeId);
//     navigate(`?productId=${expandedProductId}&${urlParams.toString()}`);
//   };

  return (
    <div>
      {expandedProductId === null ? (
        <div>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <button onClick={() => handleProductClick(product.id)}>
                  Show Types
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : expandedTypeId === null ? (
        <div className="product-types">
          {products
            .find((p) => p.id === expandedProductId)
            .types.map((type) => (
              <div key={type.id} className="product-type">
                <h3>{type.name}</h3>
                <button onClick={() => handleTypeClick(type.id)}>
                  Show Details
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div className="product-details">
          <h2>
            Details for Product {expandedProductId}, Type {expandedTypeId}
          </h2>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
