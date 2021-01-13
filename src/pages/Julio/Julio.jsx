import React from "react";

const Julio = (props) => {
  return (
    <>
      <h3>Julio</h3>
      <div>
        {props.juliosThings.map((thing) => (
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
export default Julio;
