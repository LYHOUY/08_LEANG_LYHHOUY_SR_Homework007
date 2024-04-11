import Image from "next/image";
import banner from "../../public/image/banner.webp";
import CardComponent from "@/components/ui/CardComponent";
import { getAllMovies, getBygenre } from "@/services/movie.service";
export default async function Home() {
  const movieData = await getAllMovies();
  const movieFilter = [
    ...new Set(movieData.payload.map((movie) => movie.genre)),
  ];
  console.log(movieData.payload);

  //   const getGenre = movieFilter.map(async (dataGenre)=>{
  //     const data = await getBygenre(dataGenre)
  //     console.log(data);
  //  })

  return (
    <main>
      <div className="w-full h-screen ">
        {/* Baner */}
        <Image className="-z-50 brightness-50" fill={true} src={banner} />
      </div>
     
      <div className="w-full h-screen  mt-[-6%] overflow-auto">

      <div>
        <h1 className="text-2xl px-12 mt-16 font-semibold text-white ">
          All Movies &gt;
        </h1>
        <div className="flex flex-row w-[99%] ">
          <CardComponent className="h-auto mt-8 " dynamicData={movieData.payload} />
        </div>
     </div>
     
        {movieFilter.map(async (data) => (
          <div>
            <h1 className="text-2xl px-12 mt-16 font-semibold text-white">
              {data} Movies &gt;
            </h1>

            <div className="flex flex-row w-fit">
            <CardComponent className="h-auto mt-8 " dynamicData={movieData.payload.filter(movie=>movie.genre===data)} />
            </div>

          </div>
        ))}
        
      </div>
    </main>
  );
}
