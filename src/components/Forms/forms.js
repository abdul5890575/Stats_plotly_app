import React from "react";
import { useState } from "react";

export default function Forms(props) {
  const [labels, setLabels] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setformData(labels.split(","));
    console.log("form state", labels);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Enter Labels</label>
      <br />
      <input
        name="label"
        type="text"
        value={labels}
        placeholder="label1,label2.."
        onChange={(e) => setLabels(e.target.value)}
      />

      <br />
      <input type="submit" value="Add options" />
    </form>
  );
}
