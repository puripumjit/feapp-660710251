import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data";
import MovieCard from "../MovieCard";
import MovieGallery from "../MovieGallery";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <div className="mx-auto mt-8 max-w-5xl">
        {movies.slice(0,3).map(m =>(
          <MovieCard key={m.id}
            title={m.title}
            year={m.year}/>
        ))}
        
      </div>
    </div>
  );
}

export default Home;