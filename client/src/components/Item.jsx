import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const Item = ({ item }) => {
  const { id, offender, victim, time, country, city, evidence, level } = item;

  return (
    <>
      <ReactPlayer url={evidence} />
    </>
  );
};

Item.propTypes = {};

export default Item;
