import React from "react";

const PropsWithCallingFunction = ({ run }) => {
  return (
    <>
      <div>****** PropsWithCallingFunction ******</div>
      <p>{run()}</p>
    </>
  );
};

export default PropsWithCallingFunction;
