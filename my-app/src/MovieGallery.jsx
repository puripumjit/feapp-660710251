import { useState } from "react";
import { movies } from "./data";

function MovieGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < movies.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }

    setShowMore(false);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const movie = movies[index];

  return (
    <div className="mt-8">
      {/* เพิ่ม text-center ตรงนี้ */}
      <h2 className="mb-4 text-center text-2xl font-bold text-slate-800">
        ดูหนังเพิ่มเติม
      </h2>

      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-md">
        {/* เพิ่ม block mx-auto ตรงนี้เพื่อให้ปุ่มอยู่ตรงกลาง */}
        <button
          onClick={handleNextClick}
          className="mx-auto block rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white"
        >
          เรื่องถัดไป
        </button>

        <img
          src={movie.poster}
          alt={movie.title}
          className="mx-auto mt-6 h-64 w-44 rounded-lg object-cover"
        />

        <h3 className="mt-4 text-2xl font-bold text-slate-800">
          {movie.title}{" "}
          <span className="text-slate-400">({movie.year})</span>
        </h3>

        <p className="text-sm text-slate-500">
          เรื่องที่ {index + 1} จาก {movies.length} | {movie.genre}
        </p>

        <button
          onClick={handleMoreClick}
          className="mt-2 text-sm text-cyan-600"
        >
          {showMore ? "ซ่อนเรื่องย่อ" : "อ่านเรื่องย่อ"}
        </button>

        {showMore && (
          <p className="mt-2 text-slate-700">
            {movie.detail}
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieGallery;