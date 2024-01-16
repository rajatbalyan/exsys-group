import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from './ProductsContext';


const ProductDetails = ({ match }) => {
  const { productId, typeId } = useParams();
  const { expandedProductId, expandedTypeId, selectedProduct, selectedType } =
    useContext(ProductsContext);

    // Access necessary data from context:
  const { name, imagePath, size, modelNo } = selectedType;

  return (
    <div className="product-details">
      {selectedProduct &&
        selectedProduct.id === productId &&
        selectedType &&
        selectedType.id === typeId &&
        selectedProduct &&
        expandedTypeId && (
          <div className="product-details">
            {selectedType ? (
              <>
                <h2>{name}</h2>
                <img src={imagePath} alt={name} />
                {size && <p>Size: {size}</p>}{" "}
                {/* Conditional rendering for size */}
                {modelNo && <p>Model No: {modelNo}</p>}{" "}
                {/* Consider for modelNo too */}
              </>
            ) : (
              <p>Loading product details...</p>
            )}
          </div>
        )}
    </div>
  );
};

export default ProductDetails;
