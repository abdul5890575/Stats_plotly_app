import React from "react";
import Plot from "react-plotly.js";
import Form from "../Forms/forms";
import { useState } from "react";
import { connect } from "react-redux";

function Boxplot(props) {
  const [formData, setformData] = useState("");
  return (
    <div>
      <Form setformData={setformData} />
      <Plot
        data={[
          {
            values: [19, 26, 55],
            labels: formData,
            type: "pie",
          },
        ]}
        layout={{ width: 600, height: 550, title: "3D" }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Chart);
