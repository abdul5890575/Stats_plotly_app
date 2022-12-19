import React from "react";
import Papa from "papaparse";
import { useState, setState } from "react";
import { selectChart, uploadData } from "../actions";
import { connect } from "react-redux";
import Chart from "./chartcomponent"

const ChartService = (props) => {
  let [dataUploadedCheck,setDataUploadedCheck] = useState(false)
  
  let handleChart = (e) => {
    props.selectChart(e.target.value);
  };

  let generateChart = (e) => {
    e.preventDefault()
    setDataUploadedCheck(Object.keys(props.dataUploaded).length !== 0)
    console.log('clicked',dataUploadedCheck)
  };

  console.log('sssss',dataUploadedCheck)
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
          if (d[2]) {
            z.push(d[2]);
          }
        });
        let result = { x: x, y: y, z: z };
        props.uploadData(result);
        return result;
      },
    });
  };

  return (
    <div>
      <h1>chartService</h1>
      <div>
        <h1>REACTJS CSV IMPORT EXAMPLE </h1>
        <form>
          <input
            id="csvfile"
            type={"file"}
            accept={".csv"}
            onChange={parseCSV}
          />
          <button onClick={generateChart}>Generate Chart</button>
        </form>
      </div>

      <label>

       Select type of chart
       <select onChange={handleChart}>
         <option value="line">Line</option>
         <option value="scatter">Scatter</option>
         <option value="pie">Pie</option>
         <option value="boxplot">BoxPlot</option>
         <option value="3Daxis">3D Axis</option>
         <option value="3Dline">3D Line</option>
         <option value="3Dsurface">3D surface</option>
         <option value="Histograms">Histograms</option>
         <option value="countourplots">Countour Plots</option>
       </select>
      </label>

      {dataUploadedCheck && <Chart/> }
      
      <div>
        <a href="/">Back to main page</a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('statee',state)
  return state
}

export default connect(mapStateToProps, {
  uploadData,
  selectChart,
})(ChartService);


