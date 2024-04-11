// Get all movie
export async function getAllMovies() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
  const data = res.json();
  return data;
}
// Get all movie by id
export async function getMoviesById(movie_id) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`);
    const data = res.json();
    return data;
  }

export async function getBygenre(genre) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
    const data = res.json();
    return data;
  }