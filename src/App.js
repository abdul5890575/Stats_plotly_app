import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import { selectChart, uploadData } from './actions'
import { connect } from 'react-redux'
import {useDispatch} from 'react-redux'
import Papa from 'papaparse';
import { BrowserRouter, Route } from 'react-router-dom'
import homepage from './components/homepage';
import chartService  from './components/chartService'

function App(props) {
  const [data,setData]= useState({})


  let parseCSV = (e) => {
    Papa.parse(e.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        let x = [];
        let y = [];
        let z = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          x.push(d[0]);
          y.push(d[1]);
          if(d[2]){
            z.push(d[2])
          }
        });
        let result = {"x":x,"y":y,"z":z}
        console.log('rrr',result)
        props.uploadData(result)
        return result
      },
    });
  }

  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={homepage}/>
        <Route path="/chartservices" exact component={chartService}/>
      </BrowserRouter>
      <div>
       <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            <form>
                <input id="csvfile" type={"file"} accept={".csv"} onChange={parseCSV} />
                <button >IMPORT CSV</button>
            </form>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('statee',state)
  return {}
}

export default connect(mapStateToProps,{
  uploadData
})(App);
