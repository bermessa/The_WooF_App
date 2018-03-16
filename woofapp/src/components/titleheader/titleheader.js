import React from 'react';
import "../assets/css/compstyle.css";

const TitleHeader = props =>
    <div className="titleheader font-effect-outline">
    {props.children}
  </div>;

export default TitleHeader;
