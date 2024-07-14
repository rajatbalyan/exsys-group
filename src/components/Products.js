import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import carbon from "../images/Product Images/carbon.png";
import chemicals from "../images/Product Images/chemicals.png";
import dosingPumps from "../images/Product Images/dosingPump.jpeg";
import housings from "../images/Product Images/housing.png";
import filters from "../images/Product Images/filter1.jpg";
import filters1 from "../images/Product Images/filters.jpg";
import vessels from "../images/Product Images/vessels.jpg";
import filterMedia from "../images/Product Images/filter_media.jpeg";
import mh from "../images/Product Images/membraneHousing.jpg";
import mh1 from "../images/Product Images/membraneHousing1.jpg";
import membraneHousings from "../images/Product Images/membraneHousing3.png";
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
import ukl from "../images/Product Images/ukl.png";
import bagFilterHosuing from "../images/Product Images/bad_filter_housing.jpg";
import filterHosuing from "../images/Product Images/filter_housing.jpg";
import slimHousing from "../images/Product Images/slim_housing.jpg";
import ppSpunFilter from "../images/Product Images/pp_spun_filter.jpg";
import stringWoundCartridge from "../images/Product Images/string_wound_cartridge.jpg";
import stringWoundCartridge1 from "../images/Product Images/stringWoundCartridge1.jpg";
import swc2 from "../images/Product Images/stringWoundCartridge2.png";
import frpVessel from "../images/Product Images/frp_vessels.png";
import frpVessel1 from "../images/Product Images/frp_vessel1.png";
import polyglassVessel from "../images/Product Images/polyglass_vessels.jpg";
import polyglassVessel1 from "../images/Product Images/polyglass_vessel1.jpeg";
import anthraciteMedia from "../images/Product Images/anthracite_media.jpg";
import birmMedia from "../images/Product Images/birm_media.jpg";
import bm1 from "../images/Product Images/BirmMedia.jpg";
import grabbels from "../images/Product Images/grabbels.jpeg";
import grabbels1 from "../images/Product Images/grabbels1.png";
import pebbels from "../images/Product Images/pebbels.jpg";
import pebbels1 from "../images/Product Images/pebbels1.jpg";
import sand from "../images/Product Images/sand.jpeg";
import sand1 from "../images/Product Images/sand1.png";
import roMembrane from "../images/Product Images/ro_membrane.jpg";
import ufMembrane from "../images/Product Images/uf_membrane.jpg";
import roPanel from "../images/Product Images/ro_panel.jpg";
import softnerPanel from "../images/Product Images/softner_panel.jpg";
import ufPanel from "../images/Product Images/uf_panel.jpg";
import etp_stp_panel from "../images/Product Images/etp_stp_panel.jpg";
import backConnection from "../images/Product Images/back_connection.png";
import hpSwitch from "../images/Product Images/high_pressure_switch.jpg";
import lpSwitch from "../images/Product Images/low_pressure_switch.jpg";
import hpPump from "../images/Product Images/highPressurePump.jpg";
import hpPump1 from "../images/Product Images/highPressurePump1.jpg";
import monoblocPump from "../images/Product Images/monoblocPump.jpg";
import monoblocPump1 from "../images/Product Images/monoblocPump1.png";
import monoblocPump2 from "../images/Product Images/monoblocPump2.png";
import monoblocPump3 from "../images/Product Images/monoblocPump3.jpg";
import anion from "../images/Product Images/anion.jpeg";
import anion1 from "../images/Product Images/anion1.jpg";
import anion2 from "../images/Product Images/anion2.jpg";
import cation from "../images/Product Images/cation.jpg";
import cation2 from "../images/Product Images/cation2.jpg"
import cation3 from "../images/Product Images/cation3.jpg"
import phMeter1 from "../images/Product Images/phMeter1.png";
import tdsMeter from "../images/Product Images/tds-meter.jpg";
import conductivityMeter from "../images/Product Images/conductivity-meter.jpg";
import distributionSystem from "../images/Product Images/distribution_system_1.png";
import mpv from "../images/Product Images/multiport_valve_1.png";
import mpvFilter1 from "../images/Product Images/mpvFilter1.png";
import mpvFilter2 from "../images/Product Images/mpvFilter2.png";
import mpvFilter3 from "../images/Product Images/mpvFilter3.jpg";
import singleStainer from "../images/Product Images/singleStainer.png";
import ss1 from "../images/Product Images/singleStainer1.png";
import ss2 from "../images/Product Images/singleStainer2.png";
import ss3 from "../images/Product Images/singleStainer3.png";
import ss4 from "../images/Product Images/singleStainer4.png";
import hal1 from "../images/Product Images/hubAndLateral.png";
import hal2 from "../images/Product Images/hubAndLateral2.png";
import hal3 from "../images/Product Images/hubAndLateral3.png";
import hal4 from "../images/Product Images/hubAndLateral4.png";
import uvSystem1 from "../images/Product Images/uvSystem1.png";
import uvSystem2 from "../images/Product Images/uvSystem2.png";
import htk from "../images/Product Images/hardnessTestingKit.png";
import cutting1 from "../images/Product Images/cutting1.png";
import cutting2 from "../images/Product Images/cutting2.png";
import mpvSoftner1 from "../images/Product Images/mpvSoftner1.jpg";
import roPanel1 from "../images/Product Images/roPanel1.png";
import roPanel2 from "../images/Product Images/roPanel2.png";
import lps1 from "../images/Product Images/lps1.png";
import hps1 from "../images/Product Images/hps1.png";
import onlineRotameter1 from "../images/Product Images/onlineRotameter1.png";
import pmRotameter1 from "../images/Product Images/pmRotameter1.png";
import rotameter1 from "../images/Product Images/rotameter1.png";
import flench1 from "../images/Product Images/flenchRotameter1.png";
import flench2 from "../images/Product Images/flenchRotameter2.png";
import flench3 from "../images/Product Images/flenchRotameter3.png";
import wwSystem from "../images/Product Images/wwSystem.jpg";
import flowMeter1 from "../images/Product Images/flowMeter1.jpg";
import flowMeter2 from "../images/Product Images/flowMeter2.png";

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
              alt="Not available"
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
  // eslint-disable-next-line
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
          details: {
            description:
              "Activated Carbon - Coconut Shell is a premium filtration media crafted from renewable coconut shells. This activated carbon undergoes a high-temperature activation process, resulting in a highly porous material with exceptional adsorption capacity.  It effectively removes impurities, contaminants, and odors from water, making it ideal for various water treatment applications.",
            make: "Exsys",
            size: "16x32",
            packaging: "25 Kg",
          },
        },
        {
          id: "carbon+type=charcoal+shell",
          name: "Charcoal Shell",
          imagePath: charcoalShell,
          images: [charcoalShell],
          details: {
            description:
              "Activated Carbon - Charcoal Shell provides a reliable and cost-effective solution for water treatment.  This activated carbon is produced from high-quality charcoal, processed to create a highly porous structure with excellent adsorption capabilities.  It effectively removes impurities, contaminants, and unpleasant tastes and odors from water.",
            make: "",
            size: "8x16",
            packaging: "25 Kg",
          },
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
          images: [chemicals],
          details: {
            description:
              "Anti-Scalant Chemical is a scientifically formulated solution designed to prevent scaling and membrane fouling in your water treatment system.  This advanced formula effectively inhibits the precipitation of mineral salts, ensuring optimal performance and extending the life of your membranes.",
            make: "",
            size: "",
            packaging: "10 kgs & 20 Kgs",
          },
        },
        {
          id: "chemical+type=alkaline+chemical",
          name: "Alkaline Chemical",
          imagePath: chemicals,
          images: [chemicals],
          details: {
            description:
              "Alkaline Chemicals offer a versatile solution for various water treatment applications.  These formulated solutions increase water's pH level, making it more basic and enhancing the effectiveness of specific treatment processes.",
            make: "",
            size: "",
            packaging: "10 kgs",
          },
        },
        {
          id: "chemical+type=acidic+chemical",
          name: "Acidic Chemical",
          imagePath: chemicals,
          images: [chemicals],
          details: {
            description:
              "Acidic Chemicals provide a controlled and powerful approach for various water treatment applications. These formulated solutions decrease water's pH level, making it more acidic, which can be beneficial for specific treatment processes.",
            make: "",
            size: "",
            packaging: "10 kgs",
          },
        },
      ],
    },
    {
      id: "distribution+system",
      name: "Distribution System",
      imagePath: distributionSystem,
      types: [
        {
          id: "distribution+system=single%stainer",
          name: "Single Stainer",
          imagePath: singleStainer,
          images: [singleStainer, ss2, ss1, ss3, ss4],
          details: {
            description:
              "The Single Strainer Distribution System is a reliable and compact solution for pre-filtration in various water treatment applications.  This system features a single, high-performance strainer that removes unwanted particles from your water supply, protecting downstream equipment and improving overall water quality.",
            make: "Initiative, UKL, Guddy Plastico",
            size: "1M3 to 10 M3/Hr",
            packaging: "1 No.",
          },
        },
        {
          id: "distribution+system=hub%&%lateral",
          name: "Hub & Lateral",
          imagePath: hal1,
          images: [hal1, hal2, hal3, hal4],
          details: {
            description:
              "The Hub and Lateral Distribution System is a robust and versatile solution designed for optimal performance in large-scale water treatment applications. This system utilizes a central hub that efficiently channels water to multiple lateral tubes, ensuring even distribution throughout your treatment vessel.",
            make: "Initiative, UKL, Guddy Plastico",
            size: "6 M3 to 35 M3/Hr",
            packaging: "1 No.",
          },
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
          images: [edose, edose1, edose2, edose3],
          details: {
            description:
              "The E-dose Dosing Pump is a high-performance solution for precise and automated dosing of liquids in various applications.  This versatile pump offers accurate control over small volumes, making it ideal for tasks where consistent and reliable dosing is crucial.",
            make: "Iniative Engineering",
            size: "6 LPH & 100 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "dosing+pump+type=i-dose",
          name: "i-dose",
          imagePath: idose,
          images: [idose, idose1],
          details: {
            description:
              "The I-dose Dosing Pump is a reliable and versatile solution for accurate and controlled dosing of liquids in various applications, particularly excelling in water treatment.  This pump boasts a range of features that make it a compelling choice for precise and efficient dosing.",
            make: "Iniative",
            size: "6 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "dosing+pump+type=anadose",
          name: "Anadose",
          imagePath: anadose,
          images: [anadose],
          details: {
            description:
              "The Idose Dosing Pump is a reliable and versatile solution for accurate and controlled dosing of liquids in various applications, particularly excelling in water treatment.  This pump boasts a range of features that make it a compelling choice for precise and efficient dosing.",
            make: "Iniative",
            size: "6 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "dosing+pump+type=ukl",
          name: "UKL",
          imagePath: ukl,
          images: [ukl],
          details: {
            description:
              "The UKL Dosing Pump ensures precise and reliable chemical dosing for various water treatment applications. This compact unit features adjustable stroke frequency for accurate control over dosing volume, optimizing treatment processes. Its space-saving design incorporates a durable build with a solid PTFE diaphragm, ensuring long-lasting performance and compatibility with a wide range of chemicals.",
            make: "UKL Instrumentation",
            size: "6 LPH & 10 LPH",
            packaging: "1 No.",
          },
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
          images: [bagFilterHosuing],
          details: {
            description:
              "The Bag Filter Housing System tackles tough water filtration challenges with ease.  This high-flow system effectively removes large particles like sand, sediment, and debris, safeguarding your equipment and ensuring cleaner water.  The easy-to-replace filter bags minimize downtime during maintenance, making it ideal for various applications in industrial, municipal, and commercial settings.",
            make: "",
            size: `20" (I/o 1" & 1.5")`,
            packaging: "1 No.",
          },
        },
        {
          id: "housing+type=filter+housing",
          name: "Filter Housing",
          imagePath: filterHosuing,
          images: [filterHosuing],
          details: {
            description:
              "The Filter Housing is a durable and versatile component designed to house various filter cartridges for effective water filtration. It ensures a secure and leak-free environment, accommodating different filtration needs by providing easy access for cartridge replacement. This robust housing is ideal for both residential and industrial water treatment systems, offering reliable protection and improved water quality.",
            make: "",
            size: `20" (I/o 1" & 1.5")`,
            packaging: "1 No.",
          },
        },
        {
          id: "housing+type=slim+housing",
          name: "Slim Housing",
          imagePath: slimHousing,
          images: [slimHousing],
          details: {
            description:
              "The Slim Housing is an efficient and space-saving solution designed for compact water filtration systems. It accommodates slim filter cartridges, providing the same reliable performance in a smaller footprint. Ideal for residential and commercial applications with limited space, this housing ensures easy installation and maintenance while delivering high-quality filtration and improved water clarity.",
            make: "",
            size: `20' (I/o 1" & 3/4", 1/2")`,
            packaging: "1 No.",
          },
        },
      ],
    },
    {
      id: "filters",
      name: "Filters",
      imagePath: filters1,
      types: [
        {
          id: "filter+type=pp+spun+filter",
          name: "PP Spun Filter",
          imagePath: ppSpunFilter,
          images: [ppSpunFilter, filters],
          details: {
            description:
              "The PP Spun Filter is a highly effective filtration component made from 100% polypropylene fibers. Designed for sediment removal, it efficiently captures and retains particulate contaminants such as sand, rust, and silt. Ideal for various water treatment applications, this filter provides consistent performance and extends the lifespan of downstream equipment by ensuring cleaner water and enhanced protection.",
            make: "",
            size: `4.5"x20"`,
            packaging: "15 Nos.",
          },
        },
        {
          id: "filter+type=string+wound+cartridge",
          name: "String Wound Cartridge",
          imagePath: stringWoundCartridge,
          images: [stringWoundCartridge, stringWoundCartridge1, swc2],
          details: {
            description:
              "The String Wound Cartridge is a durable and efficient filtration solution, ideal for removing sediment, rust, and other particulate impurities from water. Made from tightly wound, high-quality yarn around a central core, this filter offers exceptional dirt-holding capacity and long service life. Suitable for a variety of water treatment applications, it ensures superior performance and consistent water quality by trapping contaminants throughout its depth.",
            make: "",
            size: `4.5" x 20" & 4" x 20"`,
            packaging: "20 Nos.",
          },
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
          images: [frpVessel, frpVessel1],
          details: {
            description:
              "The FRP Vessel is a lightweight and corrosion-resistant solution designed for storing and treating water in various industrial and residential applications. Made from high-quality fiberglass reinforced plastic, this vessel offers superior strength and durability, ensuring long-term reliability and performance in harsh environments.",
            make: "Exsys, Pentair, TATA",
            size: "14*65 To 48*72",
            packaging: "1 No.",
          },
        },
        {
          id: "vessel+type=polyglass+vessel",
          name: "Polyglass Vessel",
          imagePath: polyglassVessel,
          images: [polyglassVessel, polyglassVessel1],
          details: {
            description:
              "The Polyglass Vessel is an advanced water storage and treatment solution, featuring a composite construction of polyethylene and fiberglass. This vessel provides excellent chemical resistance and structural integrity, making it ideal for a wide range of water treatment processes.",
            make: "Exsys, Pentair, TATA",
            size: "8*44 To 16*65",
            packaging: "1 No.",
          },
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
          images: [anthraciteMedia],
          details: {
            description:
              "Anthracite Media is a durable and effective filtration material used in water treatment to remove turbidity, suspended solids, and organic contaminants. Made from high-grade coal, this media has a high carbon content and unique irregular shape, providing excellent filtration efficiency and extended service life. It is commonly used in dual or multi-media filters to enhance water clarity and quality.",
            make: "",
            size: "",
            packaging: "40 Kgs",
          },
        },
        {
          id: "filter+media+type=birm+media",
          name: "Birm Media",
          imagePath: birmMedia,
          images: [birmMedia, bm1],
          details: {
            description:
              "Birm Media is a specialized filtration material designed to remove iron and manganese from water. It acts as a catalyst, promoting the oxidation of dissolved iron and manganese, which are then filtered out. This media is known for its long lifespan, low maintenance requirements, and efficiency in improving water quality without the need for chemical additives.",
            make: "",
            size: "",
            packaging: "1CU. ft",
          },
        },
        {
          id: "filter+media+type=cutting",
          name: "Cutting",
          imagePath: cutting1,
          images: [cutting1, cutting2],
          details: {
            description:
              "Cutting Media is used in water treatment systems to provide a robust filtration solution. It typically consists of coarser materials that aid in the initial stages of filtration by removing larger particles and debris. This media is essential for protecting finer filtration stages and ensuring the overall efficiency and longevity of the water treatment process.",
            make: "",
            size: "",
            packaging: "50 kgs",
          },
        },
        {
          id: "filter+media+type=grabbels",
          name: "Grabbels",
          imagePath: grabbels,
          images: [grabbels, grabbels1],
          details: {
            description:
              "Grabbels Media, also known as gravel media, is used as a support layer in water filtration systems. It provides a stable base for finer filtration media and helps to evenly distribute water flow. This media is crucial for maintaining the structural integrity of the filter bed and enhancing the performance of the filtration system.",
            make: "",
            size: "",
            packaging: "50 Kgs",
          },
        },
        {
          id: "filter+media+type=pebbels",
          name: "Pebbels",
          imagePath: pebbels,
          images: [pebbels, pebbels1],
          details: {
            description:
              "Pebbels Media, or pebble media, serves as an effective support layer in multi-media filtration systems. It helps in the even distribution of water and provides a solid foundation for finer filtration media. This media enhances the overall efficiency of the filtration process by ensuring uniform flow and preventing channeling.",
            make: "",
            size: "",
            packaging: "50 Kgs",
          },
        },
        {
          id: "filter+media+type=sand",
          name: "Sand",
          imagePath: sand,
          images: [sand, sand1],
          details: {
            description:
              "Sand Media is one of the most common and versatile filtration materials used in water treatment. It effectively removes suspended solids, turbidity, and particulate matter from water. Sand filters are widely used in residential, commercial, and industrial applications due to their simplicity, reliability, and cost-effectiveness. The uniform size and shape of sand grains ensure consistent and efficient filtration performance.",
            make: "",
            size: "",
            packaging: "50 Kgs",
          },
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
          images: [membraneHousings, mh, mh1],
          details: {
            description:
              "The Membrane Housing is a robust and secure enclosure designed to protect and support reverse osmosis membranes. Constructed from high-quality materials, it ensures optimal performance and longevity of the membranes, facilitating efficient water filtration and purification.",
            make: "EXFLO, UKL",
            size: "40 x 21 to 80 x 240",
            packaging: "1 No.",
          },
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
          imagePath: membranes,
          images: [membranes, roMembrane],
          details: {
            description:
              "The RO Membrane is a high-performance filtration component used in reverse osmosis systems to remove dissolved solids, contaminants, and impurities from water. This membrane ensures superior water quality, making it suitable for both residential and industrial water treatment applications.",
            make: "Ovay, Dupont, Toray, LG, Hydranautics",
            size: "4040 & 8040",
            packaging: "1 No.",
          },
        },
        {
          id: "membrane+type=uf+membrane",
          name: "UF Membrane",
          imagePath: ufMembrane,
          images: [ufMembrane],
          details: {
            description:
              "The UF Membrane is an advanced ultrafiltration solution designed to remove suspended solids, bacteria, and viruses from water. With its high permeability and low fouling characteristics, this membrane ensures reliable and efficient water treatment in various applications.",
            make: "Deerfos, Toray",
            size: "4040 & 8080",
            packaging: "1 No.",
          },
        },
      ],
    },
    {
      id: "mpv",
      name: "Multi-Port Valve (MPV)",
      imagePath: mpv,
      types: [
        {
          id: "mpv=filter",
          name: "MPV - Filter",
          imagePath: mpvFilter1,
          images: [mpvFilter1, mpvFilter2, mpvFilter3],
          details: {
            description:
              "The Multi-port Valve (MPV) - Filter is a versatile and user-friendly valve designed to control the flow and direction of water in filtration systems. Its multiple settings allow for easy operation and maintenance, ensuring efficient filtration and prolonged system life.",
            make: "Initiative, UKL",
            size: "20 NB to 65 NB",
            packaging: "1 No.",
          },
        },
        {
          id: "mpv=softner",
          name: "MPV - Softener",
          imagePath: mpv,
          images: [mpv, mpvSoftner1],
          details: {
            description:
              "The Multi-port Valve (MPV) - Softener is a specialized valve designed for water softening systems. With its easy-to-use controls and multiple operation modes, it simplifies the process of softening water, enhancing system performance and longevity.",
            make: "Initiative, UKL",
            size: "20 NB to 65 NB",
            packaging: "1 No.",
          },
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
          images: [roPanel, roPanel1, roPanel2],
          details: {
            description:
              "The RO Panels are comprehensive control systems designed to manage and monitor reverse osmosis processes. Featuring advanced automation and user-friendly interfaces, these panels ensure efficient operation and optimal performance of RO systems.",
            make: "Initiative, Aster",
            size: "1.5 HP to 10.0 HP",
            packaging: "1 No.",
          },
        },
        {
          id: "panel+type=softner+panel",
          name: "Softner Panels",
          imagePath: softnerPanel,
          images: [softnerPanel],
          details: {
            description:
              "The Softener Panels are advanced control systems designed to automate and manage water softening processes. With their intuitive interfaces and reliable performance, these panels ensure consistent and efficient water softening, protecting your plumbing and appliances.",
            make: "Initiative",
            size: "0.5 HP to 3 HP",
            packaging: "1 No.",
          },
        },
        {
          id: "panel+type=uf+panel",
          name: "UF Panels",
          imagePath: ufPanel,
          images: [ufPanel],
          details: {
            description:
              "The UF Panels are sophisticated control units designed to oversee and optimize ultrafiltration processes. These panels offer advanced monitoring and automation features, ensuring reliable and efficient operation of UF systems.",
            make: "Aster",
            size: "NG & NG+",
            packaging: "1 No.",
          },
        },
        {
          id: "panel+type=etp+stp+panel",
          name: "ETP/STP Panels",
          imagePath: etp_stp_panel,
          images: [etp_stp_panel],
          details: {
            description:
              "The ETP/STP Panels are state-of-the-art control systems for managing Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP). With their robust design and advanced automation features, these panels ensure efficient and compliant treatment of industrial and municipal wastewater.",
            make: "Aster",
            size: "1 HP to 5 HP",
            packaging: "1 No.",
          },
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
          images: [backConnection],
          details: {
            description:
              "The Back Connection Pressure Gauge is a precision instrument designed to measure and display the pressure in various water treatment systems. Its back connection design allows for easy installation and accurate readings, ensuring optimal system performance.",
            make: "EXFLO",
            size: "7 kg/cm2 & 21 Kg/cm2",
            packaging: "1 No.",
          },
        },
        {
          id: "pressure+gauge+type=bottom+connection",
          name: "Bottom Connection",
          imagePath: pressureGauge,
          images: [pressureGauge],
          details: {
            description:
              "The Bottom Connection Pressure Gauge is a reliable pressure measurement device featuring a bottom connection for easy mounting. It provides accurate pressure readings, helping to maintain and monitor the performance of water treatment systems.",
            make: "EXFLO",
            size: "7 kg/cm2 & 21 Kg/cm2",
            packaging: "1 No.",
          },
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
          images: [hpSwitch, hps1],
          details: {
            description:
              "The High Pressure Switch is a safety device designed to monitor and control high-pressure conditions in water treatment systems. It automatically shuts down the system when pressure exceeds safe levels, preventing damage and ensuring safe operation.",
            make: "Aster, Danfoss",
            size: "2.0 kg to 25.0 Kg",
            packaging: "1 No.",
          },
        },
        {
          id: "pressure+switch+type=low+pressure+switch",
          name: "Low Pressure Switch",
          imagePath: lpSwitch,
          images: [lpSwitch, lps1],
          details: {
            description:
              "The Low Pressure Switch is a protective device that monitors low-pressure conditions in water treatment systems. It helps prevent damage by shutting down the system when pressure drops below safe levels, ensuring reliable and safe operation.",
            make: "Aster, Danfoss",
            size: "0.5 Kg to 5.0 Kg",
            packaging: "1 No.",
          },
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
          images: [hpPump, hpPump1],
          details: {
            description:
              "The High Pressure Pump is a powerful and efficient pump designed to handle high-pressure water transfer and boosting applications. It ensures consistent and reliable water flow, making it ideal for various industrial and residential water treatment processes.",
            make: "CRI",
            size: "1.5 HP to 40.0 HP",
            packaging: "1 No.",
          },
        },
        {
          id: "pump+type=monobloc+pump",
          name: "Monobloc Pump",
          imagePath: monoblocPump,
          images: [monoblocPump, monoblocPump1, monoblocPump2, monoblocPump3],
          details: {
            description:
              "The Monobloc Pump is a compact and efficient pumping solution, ideal for low to medium pressure water transfer applications. Its robust design and reliable performance make it suitable for a wide range of water treatment systems.",
            make: "Crompton, Kirloskar, CRI",
            size: "0.5 HP to 5.0 HP",
            packaging: "1 No.",
          },
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
          images: [anion, anion1, anion2],
          details: {
            description:
              "The Anion Resin is a high-capacity ion exchange resin used to remove negatively charged ions (anions) such as nitrates, sulfates, and bicarbonates from water. It enhances water quality and is essential for various deionization and water softening processes.",
            make: "Ion Exchange",
            size: "FFIP/ NIP",
            packaging: "50 Ltrs.",
          },
        },
        {
          id: "resin+type=cation",
          name: "Cation",
          imagePath: cation,
          images: [cation, cation2, cation3],
          details: {
            description:
              "The Cation Resin is a high-performance ion exchange resin designed to remove positively charged ions (cations) like calcium, magnesium, and iron from water. It is crucial for water softening and deionization, improving water quality and preventing scale buildup.",
            make: "Ion Exchange",
            size: "220 Na/ 225H",
            packaging: "50 Ltrs.",
          },
        },
      ],
    },
    {
      id: "rotameter",
      name: "Rotameter",
      imagePath: rotameter1,
      types: [
        {
          id: "rotameter+type=online+rotameter",
          name: "Online",
          imagePath: onlineRotameter1,
          images: [onlineRotameter1],
          details: {
            description:
              "The Online Rotameter is a flow measurement device used to monitor and display the flow rate of water in treatment systems. Its online configuration allows for real-time monitoring, ensuring accurate and efficient flow control.",
            make: "EXFLO, Aster",
            size: "100 LPH to 50000 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "rotameter+type=panel+mount+rotameter",
          name: "Panel Mount",
          imagePath: rotameter,
          images: [rotameter, pmRotameter1],
          details: {
            description:
              "The Panel Mount Rotameter is a flow measurement instrument designed for easy installation on control panels. It provides accurate flow readings, helping to monitor and manage water flow in various treatment processes.",
            make: "EXFLO, Aster",
            size: "100 LPH to 50000 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "rotameter+type=flench+rotameter",
          name: "Flench",
          imagePath: flench1,
          images: [flench1, flench2, flench3],
          details: {
            description:
              "The Flench Rotameter is a high-precision flow measurement device that uses a flanged connection for secure and easy installation. It ensures accurate flow rate readings, making it ideal for various water treatment applications.",
            make: "EXFLO, Aster",
            size: "5000 LPH to 50000 LPH",
            packaging: "1 No.",
          },
        },
      ],
    },
    {
      id: "hardness+testing+kit",
      name: "Hardness Testing Kit",
      imagePath: hardnessTestingKit,
      types: [
        {
          id: "hardness+testing+kit=hardness%testing%kit",
          name: "Hardness Testing Kit",
          imagePath: hardnessTestingKit,
          images: [hardnessTestingKit, htk],
          details: {
            description:
              "The Hardness Testing Kit is a simple and effective tool for measuring the hardness of water. It helps determine the concentration of calcium and magnesium ions, providing valuable information for water treatment and softening processes.",
            make: "Prerna",
            size: "4 Bottles",
            packaging: "1 No.",
          },
        },
      ],
    },
    {
      id: "uv+system",
      name: "UV System",
      imagePath: uvSystem,
      types: [
        {
          id: "uv+system=drinking%water",
          name: "Drinking Water",
          imagePath: uvSystem,
          images: [uvSystem, uvSystem1, uvSystem2],
          details: {
            description:
              "The UV System for Drinking Water is an advanced disinfection solution that uses ultraviolet light to eliminate bacteria, viruses, and other pathogens from drinking water. It ensures safe and clean water, free from harmful microorganisms.",
            make: "Alfa",
            size: "200 LPH to 10000 LPH",
            packaging: "1 No.",
          },
        },
        {
          id: "uv+system=waste%water",
          name: "Waste Water",
          imagePath: wwSystem,
          images: [wwSystem],
          details: {
            description:
              "The UV System for Waste Water is a powerful disinfection technology designed to treat and purify wastewater. By using ultraviolet light, it effectively reduces microbial contamination, ensuring safe and environmentally friendly wastewater discharge.",
            make: "Alfa",
            size: "5KLD to 50 KLD",
            packaging: "1 No.",
          },
        },
      ],
    },
    {
      id: "instruments",
      name: "Instruments",
      imagePath: instruments,
      types: [
        {
          id: "instrument+type=pH+meter",
          name: "pH Meter",
          imagePath: phMeter1,
          images: [phMeter1],
          details: {
            description:
              "The pH Meter is a precision instrument used to measure the acidity or alkalinity of water. It provides accurate pH readings, essential for monitoring and maintaining the optimal chemical balance in water treatment processes.",
            make: "Aster",
            size: "Pan Type/ Online",
            packaging: "1 No.",
          },
        },
        {
          id: "instrument+type=tds+meter",
          name: "TDS Meter",
          imagePath: tdsMeter,
          images: [tdsMeter],
          details: {
            description:
              "The TDS Meter is a handy device for measuring the Total Dissolved Solids (TDS) in water. It provides valuable information about water quality by indicating the concentration of dissolved ions, helping to ensure effective water treatment and purification.",
            make: "Aster, HM",
            size: "Pan Type/ Online",
            packaging: "1 No.",
          },
        },
        {
          id: "instrument+type=flow+meter",
          name: "Flow Meter",
          imagePath: flowMeter1,
          images: [flowMeter1, flowMeter2],
          details: {
            description:
              "The Flow Meter is an essential instrument for measuring the flow rate of water in treatment systems. It provides accurate and real-time flow data, enabling efficient monitoring and management of water distribution and usage.",
            make: "Aster",
            size: "Online",
            packaging: "1 No.",
          },
        },
        {
          id: "instrument+type=conductivity+meter",
          name: "Conductivity Meter",
          imagePath: conductivityMeter,
          images: [conductivityMeter],
          details: {
            description:
              "The Conductivity Meter is a reliable tool for measuring the electrical conductivity of water, which indicates the concentration of dissolved salts and minerals. It helps assess water quality and is crucial for various water treatment applications.",
            make: "Aster",
            size: "Pan Type/ Online",
            packaging: "1 No.",
          },
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
  // eslint-disable-next-line
  const { productId, typeId } = useParams();

  const { name, details: { description, make, size, packaging } = {} } =
    selectedType || {};

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

  // eslint-disable-next-line
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
              {/* eslint-disable-next-line */}
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
                {/* eslint-disable-next-line */}
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
                    {description !== "" && (
                      <p className={styles.descText}>
                        <b>Description:</b> {description}
                      </p>
                    )}
                    {make !== "" && (
                      <p>
                        <b>Make:</b> {make}
                      </p>
                    )}
                    {size !== "" && (
                      <p>
                        <b>Size:</b> {size}
                      </p>
                    )}
                    {packaging && (
                      <p>
                        <b>Packaging:</b> {packaging}
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
