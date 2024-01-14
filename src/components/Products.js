import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import ProductDetails from "./ProductDetails";
// import classNames from 'classnames';

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
import ProductsPage from "./ProductsPage";

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
          images: [{ rotameter }, { rotameter }, { rotameter }, { rotameter }],
          details: {
            size: "Large",
            modelNo: "ABC123",
          },
        },
        {
          id: "carbon+type=charcoal+shell",
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
  const [currentId, setCurrentId] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  useEffect(() => {
    const initialTypeId = searchParams.get("typeId");
    if (initialTypeId) {
      setExpandedTypeId(initialTypeId);
    }
  }, [searchParams]);

  useEffect(() => {
    setProducts(products); // or update products based on fetched data
  }, []);

  const handleBackButton = () => {
    setExpandedTypeId(null);
    if (expandedProductId !== null) {
      //   navigate(-1);
      setExpandedProductId(null);
    }
  };

  const handleProductClick = (productId) => {
    console.log("expandedProductId set to:", productId);
    setExpandedProductId(productId);
    setExpandedTypeId(null); // Reset type selection
    setCurrentId(productId); // Update ID to product ID initially
    navigate(`#product-${productId}`);
  };

  const handleTypeClick = (typeId) => {
    setExpandedTypeId(typeId);
    const selectedType = products[expandedProductId].types[typeId];
    const correctId = selectedType.id;
    setCurrentId(correctId); // Update ID to type ID
    navigate(`#product-${expandedProductId}-type-${typeId}`);
  };

  const handleImageChange = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const EnlargedImage = (selectedImage) => {
    return (
      <div className="enlarged-image">
        <img src={selectedImage} alt="Selected Product Image" />
      </div>
    );
  };

  const ThumbnailPanel = ({ images, onImageChange }) => {
    return (
      <div className="thumbnail-panel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            onClick={() => onImageChange(index)}
          />
        ))}
      </div>
    );
  };

  console.log("expandedProductId:", expandedProductId); // Log the value

  if (!products.length) {
    // Check for empty products array
    return (
      <div>
        <h1>Loading products...</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        {expandedProductId === null ? (
          <div>
            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className={styles.itemListDiv}>
                  <a onClick={() => handleProductClick(product.id)}>
                    {Card(
                      `${product.imagePath}`,
                      `${product.name}`
                      // `${() => handleProductClick(product.id)}`
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : expandedTypeId === null ? (
          <div className="product-types">
            {products
              .find((p) => p.id === expandedProductId)
              .types.map((type) => (
                <div key={type.id} className={styles.itemListDiv}>
                  <a onClick={() => handleTypeClick(type.id)}>
                    {Card(
                      `${type.imagePath}`,
                      `${type.name}`
                      // `${() => handleTypeClick(type.id)}`
                    )}
                  </a>
                </div>
              ))}
          </div>
        ) : (

          // expandedProductId !== null && expandedProductId < products.length && (
          //   <ProductDetails
          //     key={expandedProductId}
          //     expandedProductId={expandedProductId}
          //     expandedTypeId={expandedTypeId}
          //     products={products}
          //   />
          // )

          <ProductDetails
            key={expandedProductId}
            expandedProductId={expandedProductId}
            expandedTypeId={expandedTypeId}
            products={products} // Pass the entire products array if needed
            currentId={currentId}
          />

          // <h1>Hello</h1>

          // expandedProductId &&
          // expandedTypeId &&
          // products[expandedProductId - 1] && (

          // First comment
          //     expandedProductId !== null &&
          //     expandedTypeId !== null && (
          //       <div className="product-details">
          //         {products[expandedProductId - 1] &&
          //           products[expandedProductId - 1].images && (
          //             <div className="image-container">
          //               {products[expandedProductId - 1] &&
          //                 ThumbnailPanel({
          //                   images: products[expandedProductId - 1].images,
          //                   onImageChange: handleImageChange,
          //                 })}

          //               {EnlargedImage(
          //                 products[expandedProductId - 1].images[selectedImage]
          //               )}
          //             </div>
          //           )}
          //         {expandedTypeId !== null && (
          //           <div className="product-info">
          //             <h3>Product Information</h3>
          //             <ul>
          //               {products[expandedProductId - 1] && (
          //                 <React.Fragment>
          //                   {products[expandedProductId - 1].types.map(
          //                     (type, index) => {
          //                       if (type.id === expandedTypeId) {
          //                         return (
          //                           <li key={index}>
          //                             {type.name}: {type.details.size}
          //                           </li>
          //                         );
          //                       }
          //                       return null;
          //                     }
          //                   )}
          //                   <li>
          //                     Model No.:{" "}
          //                     {products[expandedProductId - 1].details.modelNo}
          //                   </li>
          //                 </React.Fragment>
          //               )}
          //             </ul>
          //           </div>
          //         )}
          //       </div>
          // )

          // Second comment
          // <div className="product-details">
          //   <h2>{products[expandedProductId - 1].name}</h2>
          //   <p>
          //     Type:
          //     {products[expandedProductId - 1].types[expandedTypeId - 1].name}
          //   </p>
          //   <p>
          //     Model No.:
          //     {
          //       products[expandedProductId - 1].types[expandedTypeId - 1]
          //         .details.modelNo
          //     }
          //   </p>
          //   <p>
          //     Size:
          //     {
          //       products[expandedProductId - 1].types[expandedTypeId - 1]
          //         .details.size
          //     }
          //   </p>
          // </div>
          // )
        )}
      </div>
    </div>
  );
}

export default Products;
