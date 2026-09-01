function MovieCart({ data }) {
  return (
    <>
      <h1>Movie Cart</h1>

      {data.map((value, index) => (
        <div key={index}>
          <h2>{value.name}</h2>
          <h3>Price: ₹{value.price}</h3>
        </div>
      ))}
    </>
  );
}
export default MovieCart;
