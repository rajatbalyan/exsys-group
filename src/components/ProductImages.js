import React, { useState } from "react";
import styles from "./blocks.module.css";

function ProductImages({ images, selectedImage, onImageChange }) {
  const [mainImage, setMainImage] = useState(selectedImage); // Use prop as initial state

  const handleThumbnailClick = (imagePath) => {
    setMainImage(imagePath);
    onImageChange(imagePath); // Notify parent component
  };

  return (
    <div className={styles.product-images-container}>
      <div className="thumbnails">
        {images.map((imagePath) => (
          <img
            key={imagePath}
            src={imagePath}
            alt="Product Thumbnail"
            onClick={() => handleThumbnailClick(imagePath)}
            className={mainImage === imagePath ? "selected" : ""}
            onError={(e) => console.error("Image loading error:", e.target.src)} // Log errors
          />
        ))}
      </div>
      <div className="main-image">
        <img
          src={mainImage}
          alt="Main Product Image"
          onError={(e) => console.error("Image loading error:", e.target.src)}
        />
      </div>
    </div>
  );
}

export default ProductImages;
