function ArrayCOmponent() {
  let names = ["ravi", "ankit", "ronal", "harvik"];
  return (
    <>
      <h3>This is Array Component</h3>
      {names.map((value) => 
        <p>{value}</p>
      )}
    </>
  );
}

export default ArrayCOmponent;
