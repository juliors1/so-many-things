import React from "react";

const Tyler = (props) => {
  return (
    <>
      <h3>Tyler</h3>
      <div>
        {props.tylersThings.map((thing) => (
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
export default Tyler;
