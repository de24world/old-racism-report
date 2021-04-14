import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as d3 from "d3";
import { select } from "d3";

const d3 = (props) => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("class", "new")
            .attr("r", (value) => value)
            .attr("cx", (value) => value + 2)
            .attr("cy", (value) => value * 2)
            .attr("stroke", "red"),
        (update) =>
          update
            .attr("class", "updated")
            .attr("r", (value) => value)
            .attr("cx", (value) => value + 2)
            .attr("cy", (value) => value * 2),
        (exit) => exit.remove()
      );
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}>Sample SVG</svg>
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Updata Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter Data
      </button>
    </div>
  );
};

d3.propTypes = {};

export default d3;
