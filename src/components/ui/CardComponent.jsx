
import React from "react";

const CardComponent = async ({dynamicData}) => {
   
  return(
    <>
    <div className="flex flex-no-wrap overflow-x-scroll scroll-smooth gap-6 scroll-hiden scrollbar-hide px-5 overflow-hidden w-[99%]  ">
        {dynamicData.map((e)=>(   
           <div
              class="p-5 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex-none  items-center mt-14  overflow-x-auto  max-w-96 bg-white "
              href="#"
            >
              <a
                key={e.movie_id}
                href={`/view-movie-detail/${e.movie_id}`}
              >
                <div>
                  <img
                    src={`${
                      e.image == ""
                        ? "https://occ-0-2186-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd2-XDlasIH5QCc9l0I3lsQL2lw2rXQ_MVbWF2NibFfs6LvO1gzfiZhU23emHKJitcpMei22P6UnvBZkv0_p_3_sc_25.jpg?r=c80"
                        : e.image
                    }`}
                    class="shadow rounded-lg overflow-hidden border w-[100%] h-[100%] "
                  />
                  <div class="mt-8">
                    <h4 class="font-bold text-xl line-clamp-1">
                      {e.movie_title}
                    </h4>
                    <p class="mt-2 text-gray-600 line-clamp-2">
                      {e.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

    </>
  )
};

export default CardComponent;
