import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../modules/dash/Dashboard'
import TabelNav from '../modules/pinjam/tabel/TabelNav'
import Pinjam from '../modules/pinjam/Pinjam'
import FormPinjam from '../modules/pinjam/tabel/FormPinjam'
import Koleksi from '../modules/koleksi/Koleksi'
import Login from '../modules/login/Login'


export default function BasePages() {
  return (
    <Routes>
            <Route index element={<Pinjam/>} />
            <Route path='/koleksi-buku' element={<Koleksi/>} />
            <Route path='/data-peminjaman' element={<Pinjam/>} />
            <Route path='/formPinjam' element={<FormPinjam/>}/>
            {/* <Route path='/logout' element={<Login/>} /> */}
            
            
        </Routes>
  )
}
