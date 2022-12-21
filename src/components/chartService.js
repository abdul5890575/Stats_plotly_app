import React from "react";
import { useState } from "react";
import { selectChart, uploadData,selectedMode } from "../actions";
import { connect } from "react-redux";
import Chart from "./chartcomponent"
import {parseCsvHelper} from "../helpers/chartService"

const ChartService = (props) => {
  let [dataUploadedCheck,setDataUploadedCheck] = useState(false)
  
  let handleChart = (e) => {
    props.selectChart(e.target.value);
    props.selectedMode(e.target.value);
  };

  let generateChart = (e) => {
    e.preventDefault()
    setDataUploadedCheck(Object.keys(props.dataUploaded).length !== 0)
  };

  let parseCSV = (e) => {
    parseCsvHelper(e).then((body)=>{
      props.uploadData(body);
    })
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
         <option value="bar">Bar</option>
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
  selectedMode
})(ChartService);


