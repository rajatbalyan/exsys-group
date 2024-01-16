import React, { createContext, useState } from "react";

export const ProductsContext = createContext();
export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [expandedTypeId, setExpandedTypeId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  return (
    <ProductsContext.Provider
      value={{
        expandedProductId,
        expandedTypeId,
        selectedProduct,
        selectedType,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
