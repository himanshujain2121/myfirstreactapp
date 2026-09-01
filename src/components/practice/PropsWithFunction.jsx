import React from "react";

const PropsWithFunction = ({ employee, hr }) => {
  return (
    <>
      <div>****** PropsWithFunction ******</div>

      // --------- single object
      <p>Employee name = {employee.name}</p>
      <p>Employee name = {employee.age}</p>
      
      // ------------ Array object
      {hr.map((val) => (
        <p key={val.id}>
          HR Department = {val.name} - with id - {val.id}
        </p>
      ))}
    </>
  );
};

export default PropsWithFunction;
