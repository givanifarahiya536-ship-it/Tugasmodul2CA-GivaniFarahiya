import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import StudentCard from './components/studentCard';
import Kalkulator from './components/kalkulator';

// Komponen Home berisi tampilan kartu mahasiswa dan tombol ke kalkulator
function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center arial-center min-h-screen bg-pink-100 p-8">
      <h1 className="text-4xl font-bold text-green-900 mb-8">
        Kartu Nama Mahasiswa
      </h1>
      <div className="flex flex-wrap arial-center">
        <StudentCard name="Budi Santoso" nim="25102021" dob="10 Januari 2004" hobby="Bermain Futsal" />
        <StudentCard name="Sara Wijaya" nim="25102022" dob="15 Maret 2003" hobby="Membaca Novel dan Melukis" />
        <StudentCard name="Aji Perdana" nim="25102023" dob="22 September 2005" hobby="Coding dan Main Game" />
      </div>
      <button
        className="mt-8 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => navigate('/kalkulator')}
      >
        Lanjut ke Kalkulator
      </button>
    </div>
     );
}

// Routing utama
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;