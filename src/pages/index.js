import React from "react"

import {createMemoryHistory} from "history";
import {Route,Router,Switch} from "react-router-dom";


import 'typeface-roboto';
import 'typeface-roboto-slab';
import "assets/scss/material-kit-react.scss?v=1.4.0";

//importing pages
import Components from "components/Components.jsx";


let hist = createMemoryHistory();

const App = () => (
  <Router history = {hist}>
    <Switch>
      <Route path="/" component={Components} />
    </Switch>
  </Router>
);

export default App;