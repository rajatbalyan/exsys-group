import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import carbon from "../images/Product Images/carbon.png";
import chemicals from "../images/Product Images/chemicals.png";
import dosingPumps from "../images/Product Images/dosingPump.jpeg";
import housings from "../images/Product Images/housing.png";
import filters from "../images/Product Images/filter1.jpg";
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
import coconutShell from "../images/Product Images/coconut_shell.jpg";
import charcoalShell from "../images/Product Images/charcoal-shell.png";
import edose from "../images/Product Images/edose.jpg";
import edose1 from "../images/Product Images/edose2.jpg";
import edose2 from "../images/Product Images/edose3.jpg";
import edose3 from "../images/Product Images/edose4.jpg";
import idose from "../images/Product Images/i-dose.jpeg";
import idose1 from "../images/Product Images/idose1.jpg";
import anadose from "../images/Product Images/anadose.jpg";
import bagFilterHosuing from "../images/Product Images/bad_filter_housing.jpg";
import filterHosuing from "../images/Product Images/filter_housing.jpg";
import slimHousing from "../images/Product Images/slim_housing.jpg";
import ppSpunFilter from "../images/Product Images/pp_spun_filter.jpg";
import stringWoundCartridge from "../images/Product Images/string_wound_cartridge.jpg";
import stringWoundCartridge1 from "../images/Product Images/string_wound_cartridge1.jpg";
import frpVessel from "../images/Product Images/frp_vessels.png";
import frpVessel1 from "../images/Product Images/frp_vessel1.png";
import polyglassVessel from "../images/Product Images/polyglass_vessels.jpg";
import polyglassVessel1 from "../images/Product Images/polyglass_vessel1.jpeg";
import anthraciteMedia from "../images/Product Images/anthracite_media.jpg";
import birmMedia from "../images/Product Images/birm_media.jpg";
import grabbels from "../images/Product Images/grabbels.jpeg";
import pebbels from "../images/Product Images/pebbels.jpg";
import sand from "../images/Product Images/sand.jpeg";
import roMembrane from "../images/Product Images/ro_membrane.jpg";
import ufMembrane from "../images/Product Images/uf_membrane.jpg";
import roPanel from "../images/Product Images/ro_panel.jpg";
import softnerPanel from "../images/Product Images/softner_panel.jpg";
import ufPanel from "../images/Product Images/uf_panel.jpg";
import etp_stp_panel from "../images/Product Images/etp_stp_panel.jpg";
import backConnection from "../images/Product Images/back_connection.png";
import bottomConnection from "../images/Product Images/bottom_connection.png";
import hpSwitch from "../images/Product Images/high_pressure_switch.jpg";
import lpSwitch from "../images/Product Images/low_pressure_switch.jpg";
import hpPump from "../images/Product Images/high-pressure-pump.jpg";
import monoblocPump from "../images/Product Images/monobloc-pump.jpg";
import anion from "../images/Product Images/anion.jpeg";
import cation from "../images/Product Images/cation.jpg";
import phMeter from "../images/Product Images/ph-meter.jpg";
import tdsMeter from "../images/Product Images/tds-meter.jpg";
import conductivityMeter from "../images/Product Images/conductivity-meter.jpg";

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
          imagePath: coconutShell,
          images: [coconutShell],
          details: { size: "", modelNo: "" },
        },
        {
          id: "carbon+type=charcoal+shell",
          name: "Charcoal Shell",
          imagePath: charcoalShell,
          images: [charcoalShell],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "chemicals",
      name: "Chemicals",
      imagePath: chemicals,
      types: [
        {
          id: "chemical+type=anti+scalent+chemical",
          name: "Anti-Scalent Chemical",
          imagePath: chemicals,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "chemical+type=alkaline+chemical",
          name: "Alkaline Chemical",
          imagePath: chemicals,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "chemical+type=acidic+chemical",
          name: "Acidic Chemical",
          imagePath: chemicals,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "dosing+pumps",
      name: "Dosing Pumps",
      imagePath: dosingPumps,
      types: [
        {
          id: "dosing+pump+type=e-dose",
          name: "e-dose",
          imagePath: edose,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "dosing+pump+type=i-dose",
          name: "i-dose",
          imagePath: idose,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "dosing+pump+type=anadose",
          name: "Anadose",
          imagePath: anadose,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "housings",
      name: "Housings",
      imagePath: housings,
      types: [
        {
          id: "housing+type=bag+filter+housing",
          name: "Bag Filter Housing",
          imagePath: bagFilterHosuing,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "housing+type=filter+housing",
          name: "Filter Housing",
          imagePath: filterHosuing,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "housing+type=slim+housing",
          name: "Slim Housing",
          imagePath: slimHousing,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "filters",
      name: "Filters",
      imagePath: filters,
      types: [
        {
          id: "filter+type=pp+spun+filter",
          name: "PP Spun Filter",
          imagePath: ppSpunFilter,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "filter+type=string+wound+cartridge",
          name: "String Wound Cartridge",
          imagePath: stringWoundCartridge,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "vessels",
      name: "Vessels",
      imagePath: vessels,
      types: [
        {
          id: "vessel+type=frp+vessel",
          name: "FRP Vessel",
          imagePath: frpVessel,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "vessel+type=polyglass+vessel",
          name: "Polyglass Vessel",
          imagePath: polyglassVessel,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "filter+media",
      name: "Filter Media",
      imagePath: filterMedia,
      types: [
        {
          id: "filter+media+type=anthracite+media",
          name: "Anthracite Media",
          imagePath: anthraciteMedia,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "filter+media+type=birm+media",
          name: "Birm Media",
          imagePath: birmMedia,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "filter+media+type=grabbels",
          name: "Grabbels",
          imagePath: grabbels,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "filter+media+type=pebbels",
          name: "Pebbels",
          imagePath: pebbels,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "filter+media+type=sand",
          name: "Sand",
          imagePath: sand,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      //issue
      id: "membrane+housing",
      name: "Membrane Housing",
      imagePath: membraneHousings,
      types: [
        {
          id: "membrane+housing=membrane%housing",
          name: "Membrane Housing",
          imagePath: membraneHousings,
          images: [],
          details: { size: "a", modelNo: "b" },
        },
      ],
    },
    {
      id: "membranes",
      name: "Membranes",
      imagePath: membranes,
      types: [
        {
          id: "membrane+type=ro+membrane",
          name: "RO Membrane",
          imagePath: roMembrane,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "membrane+type=uf+membrane",
          name: "UF Membrane",
          imagePath: ufMembrane,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "panels",
      name: "Panels",
      imagePath: panels,
      types: [
        {
          id: "panel+type=ro+panel",
          name: "RO Panels",
          imagePath: roPanel,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "panel+type=softner+panel",
          name: "Softner Panels",
          imagePath: softnerPanel,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "panel+type=uf+panel",
          name: "UF Panels",
          imagePath: ufPanel,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "panel+type=etp+stp+panel",
          name: "ETP/STP Panels",
          imagePath: etp_stp_panel,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "pressure+gauge",
      name: "Pressure Gauge",
      imagePath: pressureGauge,
      types: [
        {
          id: "pressure+gauge+type=back+connection",
          name: "Back Connection",
          imagePath: backConnection,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "pressure+gauge+type=bottom+connection",
          name: "Bottom Connection",
          imagePath: bottomConnection,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "pressure+switch",
      name: "Pressure Switch",
      imagePath: pressureSwitch,
      types: [
        {
          id: "pressure+switch+type=high+pressure+switch",
          name: "High Pressure Switch",
          imagePath: hpSwitch,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "pressure+switch+type=low+pressure+switch",
          name: "Low Pressure Switch",
          imagePath: lpSwitch,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "pumps",
      name: "Pumps",
      imagePath: pumps,
      types: [
        {
          id: "pump+type=high+pressure+pump",
          name: "High Pressure Pump",
          imagePath: hpPump,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "pump+type=monobloc+pump",
          name: "Monobloc Pump",
          imagePath: monoblocPump,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "resins",
      name: "Resins",
      imagePath: resins,
      types: [
        {
          id: "resin+type=anion",
          name: "Anion",
          imagePath: anion,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "resin+type=cation",
          name: "Cation",
          imagePath: cation,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
    {
      id: "rotameter",
      name: "Rotameter",
      imagePath: rotameter,
      types: [],
    },
    {
      id: "",
      name: "Hardness Testing Kit",
      imagePath: hardnessTestingKit,
      types: [],
    },
    {
      id: "uv+system",
      name: "UV System",
      imagePath: uvSystem,
      types: [],
    },
    {
      id: "instruments",
      name: "Instruments",
      imagePath: instruments,
      types: [
        {
          id: "instrument+type=pH+meter",
          name: "pH Meter",
          imagePath: phMeter,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "instrument+type=tds+meter",
          name: "TDS Meter",
          imagePath: tdsMeter,
          images: [],
          details: { size: "", modelNo: "" },
        },
        {
          id: "instrument+type=conductivity+meter",
          name: "Conductivity Meter",
          imagePath: conductivityMeter,
          images: [],
          details: { size: "", modelNo: "" },
        },
      ],
    },
  ]);

  const [expandedProductId, setExpandedProductId] = useState(null);
  const [expandedTypeId, setExpandedTypeId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const { productId, typeId } = useParams();

  const { name, details: { size, modelNo } = {} } = selectedType || {};

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
        <div className={styles.itemListDiv} id="product-list">
          {products.map((product) => (
            <div key={product.id}>
              <a onClick={() => handleProductClick(product.id)}>
                {Card(`${product.imagePath}`, `${product.name}`)}
              </a>
            </div>
          ))}
        </div>
      ) : expandedTypeId === null ? ( //Product Types
        <div className={styles.itemListDiv} id="product-types">
          {products
            .find((p) => p.id === expandedProductId)
            .types.map((type) => (
              <div key={type.id}>
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
                    {size && (
                      <p>
                        <b>Size:</b> {size}
                      </p>
                    )}
                    {modelNo && (
                      <p>
                        <b>Model No:</b> {modelNo}
                      </p>
                    )}
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