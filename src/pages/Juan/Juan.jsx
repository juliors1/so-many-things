import React from "react";

const Juan = (props) => {
  return (
    <>
      <h3>Juan</h3>
      <div>
        {props.juansThings.map((thing) => (
          <div>
            {thing.name}
            <img src={thing.image} alt="" height="50" width="50" />
            {thing.attributes}
          </div>
        ))}
      </div>
    </>
  );
};
export default Juan;
