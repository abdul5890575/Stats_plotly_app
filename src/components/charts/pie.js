import React from "react";
import Plot from "react-plotly.js";
import Form from "../Forms/forms";
import { useState } from "react";
import { connect } from "react-redux";

function Pie(props) {
  const [formData, setformData] = useState("");
  console.log("rrr", formData);
  return (
    <div>
      <Form setformData={setformData} />
      <Plot
        data={[
          {
            values: props.dataUploaded.x,
            labels: formData.labelText ? formData.labelText.split(",") : "",
            type: "pie",
          },
        ]}
        layout={{ width: 600, height: 550, title: formData.title }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Pie);
