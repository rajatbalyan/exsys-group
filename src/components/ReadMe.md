                                                                                _
import carbon from "../images/Product Images/carbon.png";                        |
import chemicals from "../images/Product Images/chemicals.png";                  |
import dosingPumps from "../images/Product Images/dosingPump.jpeg";              |
import housings from "../images/Product Images/housing.png";                     |       
import filters from "../images/Product Images/filters.jpg";                      |  
import vessels from "../images/Product Images/vessels.jpg";                      |   
import filterMedia from "../images/Product Images/filter_media.jpeg";            |               
import membraneHousings from "../images/Product Images/membrane_housing.png";    |                       
import membranes from "../images/Product Images/membrane.png";                   | ----> Imported Images       
import panels from "../images/Product Images/panel.jpg";                         |   
import pressureGauge from "../images/Product Images/pressure_gauge.png";         |                   
import pressureSwitch from "../images/Product Images/pressure-switch.jpg";       |                   
import pumps from "../images/Product Images/pumps.jpeg";                         |   
import resins from "../images/Product Images/resins.jpg";                        |   
import rotameter from "../images/Product Images/rotamtr.jpg";                    |       
import hardnessTestingKit from "../images/Product Images/hardnessTestKit.jpg";   |                       
import uvSystem from "../images/Product Images/uvSystem.jpg";                    |       
import instruments from "../images/Product Images/instruments.jpg";             _|           



const [products, setProducts] = useState([                                             ---> Stores all products and their information
    {
      id: "carbon",                                                                  -|                 
      name: "Carbon",                                                                 |---> Information for Products page
      imagePath: carbon,                                                             _|
      types: [                                                                         ---> this stores details of all the types of the product
        {
          id: "carbon+type=coconut+shell",
          name: "Coconut Shell",
          imagePath: carbon,
          images: [{ rotameter }, { rotameter }, { rotameter }, { rotameter }],
          details: {                                                                ---------> This stores technical specification and other details of particular product-type
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
    }
  ]
)

//You can ignore comments below this part, they are just information of different products


//Different Functions


return (
    {expandedProductId === null ? (

        //Renders Products Page               ----> Works Perfectly
    
    ) : expandedTypeId === null ? (
    
        //Renders Products-type Page          ----> Works Perfectly
    
    ) : (
    
        //Render Products-details Page        ----> All issue here - Details not rendering
    
    )}
)

Additonal Problem: -
Product page renders perfectly, then when I click on any product type, product-types page renders. Then when I click on any particular product-type, product-details page opens, but details not render. AND now when I'll click back button, it goes back to product-types page, that's totally perfect. but now when I'll click back button again, it'll either stay on product-types page or go back to the home page. 

NOTE: I want that the user uses browser back button instead of any <button> on page to go back, that's why I used the function handleBackButton() and Event Listeners.