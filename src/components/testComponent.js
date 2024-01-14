import React from "react";
import ProductDetails from "./ProductDetails"; // Adjust the path if needed

import carbon from "../images/Product Images/carbon.png";
import rotameter from "../images/Product Images/rotamtr.jpg";

function testComponent() {
  const testProductData = [
    {
      id: 1,
      name: "Carbon",
      imagePath: carbon,
      types: [
        {
          id: "carbon+type=coconut+shell",
          name: "Coconut Shell",
          imagePath: carbon,
          images: [{ rotameter }, { rotameter }, { rotameter }, { rotameter }],
          details: {
            size: "Large",
            modelNo: "ABC123",
          },
        },
        {
          id: 2,
          name: "Charcoal Shell",
          imagePath: carbon,
          images: [{ rotameter }, { rotameter }, { rotameter }, { rotameter }],
          details: {
            size: "Large",
            modelNo: "ABC123",
          },
        },
      ],
    },
  ];

  const testProductId = 1; // ID of a valid product in the test data
  const testTypeId = 2; // ID of a valid type within the chosen product
  return (
    <div>
        <h1>OK</h1>
      <ProductDetails
        expandedProductId={testProductId}
        expandedTypeId={testTypeId}
        products={testProductData}
      />
    </div>
  );
}

export default testComponent;
