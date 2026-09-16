import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';           // เอา /pages ออก
import Footer from './Footer';           // เอา /pages ออก
import Home from './pages/Home';
import Movies from './pages/Movies';     // แก้ papes เป็น pages
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import MovieGallery from './MovieGallery';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* นำ MovieGallery มาแสดงร่วมกับ Home ในหน้าแรก */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <MovieGallery />
              </>
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;