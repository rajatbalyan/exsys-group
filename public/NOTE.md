# During "development": -

### App.js: -

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

### Index.js: -

<React.StrictMode>
    {/* <HashRouter> */}
      <App />
    {/* </HashRouter> */}
  </React.StrictMode>



# During Production/ Deployment
### App.js: -

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


### Index.js: -

<React.StrictMode>
  <HashRouter>
      <App />
  </HashRouter>
</React.StrictMode>