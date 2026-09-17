import { useState } from "react";
import { Link } from 'react-router-dom';
import { movies } from '../data';
import SearchBox from '../SearchBox';
import GenreBox from "../GenreBox";

const GENRES = [...new Set(movies.map(m => m.genre))] //ดึง genre ที่ไม่ซ้ำ
function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const q = query.trim().toLowerCase();
  const shown = movies.filter(m => m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && genre === 'all' || m.genre === genre); //กรณีที่ไม่จำเป็นต้องพิมเล็กหรือใหญ่เสมอไป ไม่ต้องตรงเป๊ะ
  
  
  //react ตาม component search
  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <GenreBox genre={genre} OnGenreChange={setGenre} genres={GENRES}/>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                           transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
            <p className="mt-1 text-sm text-slate-500">ปี {m.year} · {m.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;