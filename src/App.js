import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";

import styles from "./App.module.css";
import Logo from "./images/exsys_tp.png";

import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import UnderService from "./components/UnderService";

function App() {
  return (
    <Container fluid>
      {/* Navigation Bar */}
      <Router>
        <Navbar className={styles.navbar}>
          <div className={styles.logodiv}>
            <a href="/">
              <img src={Logo} className={styles.logo} alt="" />
              <h3>Exsys Components</h3>
              <p>We Promise to Serve You Better!</p>
            </a>
          </div>
          <div className={styles.listdiv}>
            <ul className={styles.navbarlist}>
              <li>
                <Nav.Link href="/">Home</Nav.Link>
              </li>
              {/* <li>
                <Nav.Link href="/products">Products</Nav.Link>
              </li> */}
              <li>
                <Nav.Link href="/under+development">Products</Nav.Link>
              </li>
              {/* <li>
                <Nav.Link href="/team">Team</Nav.Link>
              </li> */}
              <li>
                <Nav.Link href="/contact_us">Contact Us</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/about_us">About Us</Nav.Link>
              </li>
            </ul>
          </div>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/under+development" element={<UnderService />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
