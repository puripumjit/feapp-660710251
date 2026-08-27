// function Button({ children, variant = "primary" }) {
//   const styles = {
//     primary: "bg-cyan-600 text-white hover:bg-cyan-700",
//     danger: "bg-red-600 text-white hover:bg-red-700",
//     ghost: "bg-transparent text-slate-600 hover:bg-slate-200",
//   };

//   return (
//     <button
//       className={`rounded-lg px-4 py-2 font-semibold ${styles[variant]}`}
//     >
//       {children}
//     </button>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 text-center">

//       {/* Navbar */}
//       <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
//         <span className="text-xl font-bold text-white">
//           🎬 MovieHub
//         </span>

//         <div className="flex gap-6 text-slate-300">
//           <a href="#">หน้าแรก</a>
//           <a href="#">หนังใหม่</a>
//           <a href="#">รายการโปรด</a>
//         </div>
//       </nav>

//       {/* Header */}
//       <h1 className="mt-10 text-4xl font-bold text-slate-800">
//         MovieHub
//       </h1>

//       <p className="text-lg text-slate-500">
//         รวมหนังดีที่คุณห้ามพลาด
//       </p>

//       <p className="text-sm font-semibold uppercase text-cyan-600">
//         since 2026
//       </p>

//       {/* Movie Card */}
//       <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
//         <h2 className="text-xl font-bold text-slate-800">
//           Interstellar
//         </h2>

//         <p className="mt-2 text-slate-500">
//           การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ
//         </p>

//         <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
//           Sci-Fi
//         </span>
//       </div>

//       {/* Responsive Cards */}
//       {/* มือถือ: 1 | แท็บเล็ต: 2 | โน้ตบุ๊กขึ้นไป: 3 */}
//       <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">

//         <div className="rounded-xl bg-white p-4 shadow">
//           การ์ด 1
//         </div>

//         <div className="rounded-xl bg-white p-4 shadow">
//           การ์ด 2
//         </div>

//         <div className="rounded-xl bg-white p-4 shadow">
//           การ์ด 3
//         </div>

//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 p-6">
//         <Button>บันทึก</Button>
//         <Button variant="danger">ลบ</Button>
//         <Button variant="ghost">ยกเลิก</Button>
//       </div>

//     </div>
//   );
// }

// export default App;

//   import Navbar from './Navbar';
// import Footer from './Footer';

// const movies = [
//   { id: 1, title: 'Interstellar', genre: 'Sci-Fi',    year: 2014 },
//   { id: 2, title: 'Your Name',    genre: 'Animation', year: 2016 },
//   { id: 3, title: 'Parasite',     genre: 'Thriller',  year: 2019 },
// ];

// function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-slate-50">
//       <Navbar />

//       {/* Hero — ส่วนต้อนรับ */}
//       <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
//         <h1 className="text-3xl font-bold text-white md:text-5xl">
//           ดูหนังดี ๆ ไปด้วยกัน
//         </h1>
//         <p className="mx-auto mt-4 max-w-xl text-slate-400">
//           รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
//         </p>
//       </header>

//       {/* เนื้อหาหลัก — การ์ดหนัง responsive */}
//       <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
//         <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {movies.map((m) => (
//             <div key={m.id}
//                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
//                             transition hover:-translate-y-1 hover:shadow-xl">
//               <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
//               <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
//               <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
//                                text-xs font-medium text-cyan-700">{m.genre}</span>
//             </div>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import About from './pages/About';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movies" element={<Movies />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
  );
}

export default App;