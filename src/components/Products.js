import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import carbon from "../images/Product Images/carbon.png";
import chemicals from "../images/Product Images/chemicals.png";
import dosingPumps from "../images/Product Images/dosingPump.jpeg";
import housings from "../images/Product Images/housing.png";
import filters from "../images/Product Images/filters.jpg";
import vessels from "../images/Product Images/vessels.jpg";
import filterMedia from "../images/Product Images/filter_media.jpeg";
import membraneHousings from "../images/Product Images/membrane_housing.png";
import membranes from "../images/Product Images/membrane.png";
import panels from "../images/Product Images/panel.jpg";
import pressureGauge from "../images/Product Images/pressure_gauge.png";
import pressureSwitch from "../images/Product Images/pressure-switch.jpg";
import pumps from "../images/Product Images/pumps.jpeg";
import resins from "../images/Product Images/resins.jpg";
import rotameter from "../images/Product Images/rotamtr.jpg";
import hardnessTestingKit from "../images/Product Images/hardnessTestKit.jpg";
import uvSystem from "../images/Product Images/uvSystem.jpg";
import instruments from "../images/Product Images/instruments.jpg";

import cstyle from "./card.module.css";
import styles from "./blocks.module.css";
import ProductImages from "./ProductImages";

function Products() {
  // Card Variable
  const Card = (img, name) => {
    return (
      <div className={cstyle.container}>
        <div className={cstyle.canvas}>
          <div className={`${cstyle.tracker} ${cstyle.tr1}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr2}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr3}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr4}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr5}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr6}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr7}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr8}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr9}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr10}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr11}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr12}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr13}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr14}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr15}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr16}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr17}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr18}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr19}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr20}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr21}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr22}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr23}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr24}`}></div>
          <div className={`${cstyle.tracker} ${cstyle.tr25}`}></div>
          <div id={cstyle.card}>
            <img
              className={cstyle.imgFit}
              src={img}
              alt="Image"
              // onClick={onClick}
            />
            <div className={cstyle.title}>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Products Chain Setup

  const [products, setProducts] = useState([
    {
      id: "carbon",
      name: "Carbon",
      imagePath: carbon,
      types: [
        {
          id: "carbon+type=coconut+shell",
          name: "Coconut Shell",
          imagePath: carbon,
          images: [rotameter, panels, membranes, pumps],
          details: {
            size: "Large",
            modelNo: "ABC123",
          },
        },
        {
          id: "carbon+type=charcoal+shell",
          name: "Charcoal Shell",
          imagePath: carbon,
          images: [rotameter, panels, membranes, pumps],
          details: {
            size: "Large",
            modelNo: "ABC123",
          },
        },
      ],
    },
    // {
    //   id: "chemicals",
    //   name: "Chemicals",
    //   imagePath: chemicals,
    //   types: [
    //     {
    //       id: "chemical+type=anti+scalent+chemical",
    //       name: "Anti-Scalent Chemical",
    //       imagePath: chemicals,
    //     },
    //     {
    //       id: "chemical+type=membrane+cleaning+chemical",
    //       name: "Membrane Cleaning Chemical",
    //       imagePath: chemicals,
    //     },
    //   ],
    // },
    // {
    //   id: "dosing+pumps",
    //   name: "Dosing Pumps",
    //   imagePath: dosingPumps,
    //   types: [
    //     {id: "dosing+pump+type=e-dose", name: "e-dose", imagePath: }
    //     {id: "dosing+pump+type=i-dose", name: "i-dose", imagePath: }
    //   ]
    // },
    // {
    //   id: "housings",
    //   name: "Housings",
    //   imagePath: housings,
    //   types: [
    //     {id: "housing+type=bag+filter+housing", name: "Bag Filter Housing", imagePath: }
    //     {id: "housing+type=filter+housing", name: "Filter Housing", imagePath: }
    //   ]
    // },
    // {
    //   id: "filters",
    //   name: "Filters",
    //   imagePath: filters,
    //   types: [
    //     {id: "filter+type=pp+spun+filter", name: "PP Spun Filter", imagePath: }
    //     {id: "filter+type=spring+wound+cartridge", name: "Spring Wound Cartridge", imagePath: }
    //   ]
    // },
    // {
    //   id: "vessels",
    //   name: "Vessels",
    //   imagePath: vessels,
    //   types: [
    //     {id: "vessel+type=composite+vessel", name: "Composite Vessel", imagePath: }
    //     {id: "vessel+type=frp+vessel", name: "FRP Vessel", imagePath: }
    //   ]
    // },
    // {
    //   id: "filter+media",
    //   name: "Filter Media",
    //   imagePath: filterMedia,
    //   types: [
    //     {id: "filter+media+type=anthracite+media", name: "Anthracite Media", imagePath: }
    //     {id: "filter+media+type=brim+media", name: "Brim Media", imagePath: }
    //     {id: "filter+media+type=grabbels", name: "Grabbels", imagePath: }
    //     {id: "filter+media+type=pebbels", name: "Pebbels", imagePath: }
    //     {id: "filter+media+type=sand", name: "Sand", imagePath: }
    //   ]
    // },
    // {
    //   id: "membrane+housing",
    //   name: "Membrane Housing",
    //   imagePath: membraneHousings,
    //   types: []
    // },
    // {
    //   id: "membranes",
    //   name: "Membranes",
    //   imagePath: membranes,
    //   types: [
    //     {id: "membrane+type=ro+membrane", name: "RO Membrane", imagePath: }
    //     {id: "membrane+type=uf+membrane", name: "UF Membrane", imagePath: }
    //   ]
    // },
    // {
    //   id: "panels",
    //   name: "Panels",
    //   imagePath: panels,
    //   types: [
    //     {id: "panel+type=etp+stp+panel", name: "ETP/STP Panels", imagePath: }
    //     {id: "panel+type=ro+panel", name: "RO Panels", imagePath: }
    //     {id: "panel+type=softner+panel", name: "Softner Panels", imagePath: }
    //     {id: "panel+type=uf+panel", name: "UF Panels", imagePath: }
    //   ]
    // },
    // {
    //   id: "pressure+gauge",
    //   name: "Pressure Gauge",
    //   imagePath: pressureGauge,
    //   types: [
    //     {id: "pressure+gauge+type=back+connection", name: "Back Connection", imagePath: }
    //     {id: "pressure+gauge+type=bottom+connection", name: "Bottom Connection", imagePath: }
    //   ]
    // },
    // {
    //   id: "pressure+switch",
    //   name: "Pressure Switch",
    //   imagePath: pressureSwitch,
    //   types: [
    //     {id: "pressure+switch+type=high+pressure+switch", name: "High Pressure Switch", imagePath: }
    //     {id: "pressure+switch+type=low+pressure+switch", name: "Low Pressure Switch", imagePath: }
    //   ]
    // },
    // {
    //   id: "pumps",
    //   name: "Pumps",
    //   imagePath: pumps,
    //   types: [
    //     {id: "pump+type=high+pressure+pump", name: "High Pressure Pump", imagePath: }
    //     {id: "pump+type=monobloc+pump", name: "Monobloc Pump", imagePath: }
    //   ]
    // },
    // {
    //   id: "resins",
    //   name: "Resins",
    //   imagePath: resins,
    //   types: [
    //     {id: "resin+type=anion", name: "Anion", imagePath: }
    //     {id: "resin+type=cation", name: "Cation", imagePath: }
    //   ]
    // },
    // {
    //   id: "rotameter",
    //   name: "Rotameter",
    //   imagePath: rotameter,
    //   types: []
    // },
    // {
    //   id: "",
    //   name: "Hardness Testing Kit",
    //   imagePath: hardnessTestingKit,
    //   types: []
    // },
    // {
    //   id: "uv+system",
    //   name: "UV System",
    //   imagePath: uvSystem,
    //   types: []
    // },
    // {
    //   id: "instruments",
    //   name: "Instruments",
    //   imagePath: instruments,
    //   types: [
    //     {id: "instrument+type=pH+meter", name: "pH Meter", imagePath: }
    //     {id: "instrument+type=tds+meter", name: "TDS Meter", imagePath: }
    //     {id: "instrument+type=conductivity+meter", name: "Conductivity Meter", imagePath: }
    //   ]
    // }
  ]);

  const [expandedProductId, setExpandedProductId] = useState(null);
  const [expandedTypeId, setExpandedTypeId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const { productId, typeId } = useParams();

  const {
    name,
    details: { size, modelNo } = {},
  } = selectedType || {};

  // Arpit Method with modification from Bard
  useEffect(() => {
    if (expandedProductId) {
      const updatedSelectedProduct = products.find(
        (product) => product.id === expandedProductId
      );
      setSelectedProduct(updatedSelectedProduct);
    }
  }, [expandedProductId, products]);
  
  useEffect(() => {
    if (expandedTypeId && selectedProduct && selectedProduct.types) {
      const updatedSelectedType = selectedProduct.types.find(
        (type) => type.id === expandedTypeId
      );
      setSelectedType(updatedSelectedType);
    } else {
      // If the conditions are not met, set selectedType to null or handle it accordingly
      setSelectedType(null);
    }
  }, [expandedTypeId, selectedProduct]);
  
  useEffect(() => {
    // Check if selectedType and selectedType.images are defined before setting selectedImage
    if (selectedType && selectedType.images && selectedType.images.length > 0) {
      setSelectedImage(selectedType.images[0]);
    } else {
      // If the conditions are not met, set selectedImage to null or handle it accordingly
      setSelectedImage(null);
    }
  }, [selectedType]);

  useEffect(() => {
  const handleLocationChange = () => {
    const currentHash = window.location.hash;
    const productIdMatch = currentHash.match(/^#product-(.+)$/);
    const typeIdMatch = currentHash.match(/^#product-(.+)-type-(.+)$/);

    if (productIdMatch) {
      const productId = productIdMatch[1];
      setExpandedProductId(productId);
      setExpandedTypeId(null);
    } else if (typeIdMatch) {
      const productId = typeIdMatch[1];
      const typeId = typeIdMatch[2];
      setExpandedProductId(productId);
      setExpandedTypeId(typeId);
    } else {
      setExpandedProductId(null);
      setExpandedTypeId(null);
    }
  };

  window.addEventListener("hashchange", handleLocationChange);

  return () => {
    window.removeEventListener("hashchange", handleLocationChange);
  };
}, []);

  const handleBackButton = () => {
    if (expandedTypeId) {
      // If in product-details, go back to product-types
      setExpandedTypeId(null);
    } else if (expandedProductId) {
      // If in product-types, go back to product-list
      setExpandedProductId(null);
    }
  };

  const handleProductClick = (productId) => {
    setExpandedProductId(productId); // Set expandedProductId
    setExpandedTypeId(null); // Only reset expandedTypeId
    console.log("Updated state:", { expandedProductId, expandedTypeId });
    navigate(`#product-${productId}`);
  };

  const handleTypeClick = (typeId) => {
    setExpandedProductId(productId); // Use productId from useParams
    setExpandedTypeId(typeId);
    setSelectedImage(
      selectedProduct.types.find((t) => t.id === typeId).images[0]
    );
    navigate(`#product-${expandedProductId}-type-${typeId}`);
  };

  return (
    <div>
      {expandedProductId === null ? ( //Products List
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className={styles.itemListDiv}>
              <a onClick={() => handleProductClick(product.id)}>
                {Card(`${product.imagePath}`, `${product.name}`)}
              </a>
            </div>
          ))}
        </div>
      ) : expandedTypeId === null ? ( //Product Types
        <div className="product-types">
          {products
            .find((p) => p.id === expandedProductId)
            .types.map((type) => (
              <div key={type.id} className={styles.itemListDiv}>
                <a onClick={() => handleTypeClick(type.id)}>
                  {Card(`${type.imagePath}`, `${type.name}`)}
                </a>
              </div>
            ))}
        </div>
      ) : (
        //Product Details
        selectedProduct &&
        expandedTypeId && (
          <div className={styles.productDetails}>
            <div className={styles.productInfo}>
              {selectedType ? (
                <>
                  <div className={styles.productName}>
                    <p>{name}</p>
                  </div>
                  <div className={styles.productSpecs}>
                    {size && <p><b>Size:</b> {size}</p>}
                    {modelNo && <p><b>Model No:</b> {modelNo}</p>}
                  </div>
                </>
              ) : (
                <p>Loading product details...</p>
              )}
            </div>
            <div className={styles.productImages}>
              {selectedType && (
                <ProductImages
                  images={selectedType.images}
                  selectedImage={selectedImage}
                  onImageChange={setSelectedImage}
                />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Products;
