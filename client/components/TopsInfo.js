import React from "react";

const TopsInfo = (props) => {
  const { topColor } = props;
  const { topStyle } = props;
  let imageUrl, name, price, source, season;

  if (topColor) {
    imageUrl = topColor.imageUrl;
    name = topColor.name;
    price = topColor.price;
    source = topColor.source;
    season = topColor.season;
  } else {
    imageUrl = topStyle.imageUrl;
    name = topStyle.name;
    price = topStyle.price;
    source = topStyle.source;
    season = topStyle.season;
  }

  name = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="tops-popup-info">
      <img src={imageUrl} />
      <p>{name}</p>
      <div className="tops-description">
        If you find this for sale, you can buy it for <b>{price}</b> bells. You
        can get one from <b>{source}</b>, and it has <b>{season}</b>{" "}
        availability.
      </div>
    </div>
  );
};

export default TopsInfo;
