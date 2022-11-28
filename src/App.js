import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import { selectChart, uploadData } from './actions'
import { connect } from 'react-redux'
import Papa from 'papaparse';

function App(props) {


  let parseCSV = (e) => {
    e.preventDefault()
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
        let data = {"x":x,"y":y,"z":z}
        return data
      },
    });
   }
   let data1 = {"x":[2],"y":[3],"z":[4]}

  return (
    <div>
      <div>
       <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            <form>
                <input type={"file"} accept={".csv"} />
                <button onClick={()=> props.uploadData([2,3,4])} >IMPORT CSV</button>
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
