import React, { useState } from "react";
import "./MultiForm.css";
import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allegies from "./SubForms/Allergies";
import HateLove from "./SubForms/HateLove";

export default function Multiform() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      const newdata = {...allFormData};
      const firstPropNewData = Object.keys(data)[0];

      newdata[firstPropNewData] = data[firstPropNewData];
      setAllFormData(newdata);
    }
  };

  console.log(allFormData);

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allegies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,        
    <CardEnd modifyIndex={modifyIndex} />
  ]

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex}/>

      {elements.map((item, index) => {
        if ((index + 1) === formIndex) {
          return elements[index];
        }
      })}

      {/* {formIndex === 1 ? (
        <CardBegin modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DietForm modifyIndex={modifyIndex} />
      ) : formIndex === 3 ? (
        <FoodStyle modifyIndex={modifyIndex} />
      ):  formIndex === 4 ? (
        <Allegies modifyIndex={modifyIndex} />
      ):  formIndex === 5 ? (
        <HateLove modifyIndex={modifyIndex} />
      ):  formIndex === 6 ? (
        <CardEnd modifyIndex={modifyIndex} />
      ): (
        ""
      )} */}

    </div>
  );
}
