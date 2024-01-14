import React from "react";

function ProductDetails({ expandedProductId, expandedTypeId, products, currentId }) {
    const selectedProduct = products[expandedProductId];
    const selectedType = expandedTypeId !== null && selectedProduct.types[expandedTypeId];
  
    return (
      <div className="product-details">
        {/* General product details (always visible) */}
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.imagePath} alt={selectedProduct.name} />
        <p>Description: {selectedProduct.description}</p>
  
        {/* Conditional rendering based on expandedTypeId */}
        {expandedTypeId !== null && (
          <div>
            <p>Current ID: {currentId}</p> {/* Display the correct ID */}
            <h3>{selectedType.name}</h3>
            <img src={selectedType.imagePath} alt={selectedType.name} />
            <p>Details: {selectedType.details}</p>
            {/* Other type-specific content */}
          </div>
        )}
      </div>
    );
  }

// function ProductDetails({ expandedProductId, expandedTypeId, products }) {
//   if (!expandedProductId) {
//     return <div>Please select a product to view details.</div>;
//   }

//   console.log("Accessing product with ID:", expandedProductId);
//   console.log("products:", products);

//   //   const selectedProduct = products[expandedProductId];
//   const selectedProduct = products.find(
//     (product) => product.id.toLowerCase() === expandedProductId.toLowerCase()
//   );
//   console.log("selectedProduct:", selectedProduct);

//   if (!selectedProduct) {
//     return <div>Invalid product ID.</div>;
//   }

//   const selectedType = selectedProduct.types[expandedTypeId];
//   console.log("selectedType:", selectedType);

//   return (
//     <div className="product-details">
//       <h2>{selectedProduct.name}</h2>
//       <img src={selectedProduct.imagePath} alt={selectedProduct.name} />
//       <p>Description: {selectedProduct.description}</p>
//       <ul>
//         {selectedProduct.types.map((type, index) => (
//           <li key={index}>
//             {index + 1 === expandedTypeId ? ( // Highlight selected type
//               <strong>{type.name}</strong>
//             ) : (
//               type.name
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>

//     // <div className="product-details">
//     //   <h2>{selectedProduct.name}</h2>
//     //   <p>Type: {selectedType.name}</p>
//     //   <p>Model No.: {selectedType.details.modelNo}</p>
//     //   <p>Size: {selectedType.details.size}</p>
//     //   <img src={selectedProduct.imagePath} alt={selectedProduct.name} />
//     // </div>
//   );
// }

// function ProductDetails(props) {
//   const { expandedProductId, expandedTypeId, products } = props;
//   const selectedProduct = products[expandedProductId - 1];
//   const selectedType = selectedProduct.types[expandedTypeId - 1];

//   return (
// <div className="product-details">
//   <h2>{selectedProduct.name}</h2>
//   <p>Type: {selectedType.name}</p>
//   <p>Model No.: {selectedType.details.modelNo}</p>
//   <p>Size: {selectedType.details.size}</p>
//   <img src={selectedProduct.imagePath} alt={selectedProduct.name} />
// </div>
//   );
// }

export default ProductDetails;
