import React from "react";
import { useState } from "react";

export default function Forms(props) {
  const [data, setData] = useState({
    labelText: "",
    title: "Chart",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setformData(data);
    console.log("form state", data);
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
        name="labelText"
        type="text"
        value={data.labelText}
        placeholder="label1,label2.."
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            labelText: e.target.value,
          }))
        }
      />
      <br />
      <label>Enter Title</label>
      <br />
      <input
        name="title"
        type="text"
        value={data.title}
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            title: e.target.value,
          }))
        }
      />

      <br />
      <input type="submit" value="Add options" />
    </form>
  );
}
