import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import homepage from "./components/homepage";
import chartService from "./components/chartService";

function App(props) {

  return (

    <div>
      <BrowserRouter>
        <Route path="/" exact component={homepage} />
        <Route path="/chartservices" exact component={chartService} />
      </BrowserRouter>
    </div>

  );
}

export default App