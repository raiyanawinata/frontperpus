import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../modules/dash/Dashboard'
import TabelNav from '../modules/pinjam/tabel/TabelNav'
import Pinjam from '../modules/pinjam/Pinjam'
import FormPinjam from '../modules/pinjam/tabel/FormPinjam'


export default function BasePages() {
  return (
    <Routes>
            <Route index element={< Dashboard/>} />
            <Route path='/dasboard' element={<Dashboard />} />
            <Route path='/koleksi-buku' element={<Dashboard/>} />
            <Route path='/data-peminjaman' element={<Pinjam/>} />
            <Route path='/formPinjam' element={<FormPinjam/>}/>
            
                
                {/* <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} /> */}
            {/* </Route> */}
            {/* <Route path='master-data' element={<MasterData />} >
                <Route path="products" element={<Products />} />
                <Route path="users" element={<Users />} />
            </Route>
            <Route path='messages' element={<Messages />} />
            <Route path='profile' element={<Profiles />} />
            <Route path='*' element={<Error404 />} /> */}
        </Routes>
  )
}
