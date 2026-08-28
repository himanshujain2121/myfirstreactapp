function ObjectValues() {
  let employee = {
    name: "rakesh",
    id: 123456,
  };

  return (
    <>
      <h1>************Object Component Start**************</h1>
      <h2>Employee name = {employee.name}</h2>
      <h2>Employee id = {employee.id}</h2>
    </>
  );
}
export default ObjectValues;
