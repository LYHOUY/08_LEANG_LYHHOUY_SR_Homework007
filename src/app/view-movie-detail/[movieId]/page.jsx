import { getMoviesById } from "@/services/movie.service";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { format } from "date-fns";

const viewMoviewPage = async ({ params }) => {
  //   console.log(params.movieId);
  let movie = await getMoviesById(params.movieId);
  const rating = movie.payload.rating;
  const star = Math.ceil(rating / 2);
  const st = [];
  for (let i = 0; i < star; i++) {
    st.push(i);
  }
  const dateString = "2024-04-09T00:00:00.000Z";
  const formattedDate = format(
    new Date(dateString),
    "MMMM dd ',' yyyy ',' HH:mm:ss a"
  );
 
  return (
    <div className=" dark:bg-gray-800 py-8 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[600px] rounded-lg dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover rounded-xl shadow-lg shadow-pink-800"
                 src={`${
                    movie.payload.image == ""
                      ? "https://occ-0-2186-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd2-XDlasIH5QCc9l0I3lsQL2lw2rXQ_MVbWF2NibFfs6LvO1gzfiZhU23emHKJitcpMei22P6UnvBZkv0_p_3_sc_25.jpg?r=c80"
                      : movie.payload.image
                  }`}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-4xl font-bold  dark:text-white mb-2">
              {movie.payload.movie_title}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <p className="font-bold  dark:text-gray-300">
                  {movie.payload.runtime} minutes
                </p>
                <div>
                  <p className=" dark:text-gray-300 font-bold py-4 text-lg">
                    {movie.payload.genre}
                  </p>
                  <span className="text-yellow-400 text-xl flex ">
                    {st.map((s) => (
                      <AiFillStar />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold  dark:text-gray-300">
                {movie.payload.movie_title}({movie.payload.released_year})
              </span>
            </div>
            <div>
              <p className=" dark:text-gray-300 text-sm mt-2">
                {movie.payload.description}
              </p>
            </div>
            <div>
              <p className=" dark:text-gray-300 text-sm mt-28">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewMoviewPage;
