import React from "react";

const TopsInfo = (props) => {
  const { topColor } = props;
  const { topStyle } = props;

  return (
    <div className="tops-popup-info">
      {topColor ? (
        <img src={topColor.imageUrl} />
      ) : (
        <img src={topStyle.imageUrl} />
      )}
      <p>{topColor ? topColor.name : topStyle.name}</p>
      <div className="tops-description">
        If you find this for sale, you can buy it for{" "}
        {topColor ? topColor.price : topStyle.price} bells. You should be able
        to get one from {topColor ? topColor.source : topStyle.source}, and it
        has {topColor ? topColor.season : topStyle.season} availability.
      </div>
    </div>
  );
};

export default TopsInfo;
