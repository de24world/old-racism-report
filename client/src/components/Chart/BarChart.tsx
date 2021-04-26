import React, { useState, useEffect, useRef } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

interface Props {}

const BarChart = (props: Props) => {
  // const data = props.data;
  // console.log(data, 'this data is in Barchart')
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  // console.log(data, "data in Barchart");

  return (
    <div>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
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

// https://youtu.be/D17-8tEImFU
