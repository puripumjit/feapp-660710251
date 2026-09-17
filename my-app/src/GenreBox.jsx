function GenreBox({ genre, OnGenreChange, genres }) {
  return (
    <select
      value={genre} onChange={(e) => OnGenreChange(e.target.value)}
      className="rounded-lg border border-slate-300 px-3 py-2"
    >
      <option value="all">ทุกประเภท</option>
      {genres.map((g) => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
  );
}

export default GenreBox;