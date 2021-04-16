import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { select } from "d3";

interface Props {}

const BarChart = (props: Props) => {
  const data = props.data;
  // const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  console.log(data, "data in Barchart");

  return (
    <div>
      <svg ref={svgRef}>Sample SVG</svg>
    </div>
  );
};

export default BarChart;

// Basic Bar Chart
// https://observablehq.com/@d3/bar-chart

// Sortable Bar Chart
// https://observablehq.com/@d3/sortable-bar-chart

// 리액트 d3 설명 잘된 영어 블로그
// https://observablehq.com/@d3/bar-chart
