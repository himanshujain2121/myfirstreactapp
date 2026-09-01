import MovieCart from "./movieCart";


function Movie() {
    let moviearr = [
        {
          name:"krantiveer",
          price:200
        },
        {
          name:"yuva",
          price:100
        },
        {
          name:"dhurandar",
          price:300
        }
      ]
  return (
    <>
      <h1>Movie</h1>
        <MovieCart data={moviearr}></MovieCart>

      {/* {moviearr.map((val, index) => {
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

export default Movie;
