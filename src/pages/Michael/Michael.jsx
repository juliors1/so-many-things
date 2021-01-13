import React from "react";

const Michael = (props) => {
  return (
    <>
      <h3>Michael</h3>
      <div>
        {props.michaelsThings.map((thing) => (
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
export default Michael;
