import MovieCart from "./movieCart";

function Food() {
  let foodarr = [
    {
      name: "samosa",
      price: 50,
    },
    {
      name: "water",
      price: 30,
    },
    {
      name: "popcorn",
      price: 300,
    },
  ];
  return (
    <>
      <h1>Food</h1>
      <MovieCart data={foodarr}></MovieCart>

      {/* {foodarr.map((val, index) => {
        return (
          <>
            <h2 key={index}>{val.name}</h2>
            <h3>Price: ₹{val.price}</h3>
          </>
        );
      })} */}
    </>
  );
}

export default Food;
