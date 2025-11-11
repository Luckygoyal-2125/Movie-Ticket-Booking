import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets";

const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex justify-between items-center pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-lg text-gray-300 font-medium">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-ms text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="size-4.5 group-hover:translate-x-0.5 transition " />
        </button>
      </div>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm hover:bg-primary-dull transition bg-primary rounded-md font-medium cursor-pointer "
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
