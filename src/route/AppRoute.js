import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts';
import BasePages from './BasePages'
import Login from '../modules/login/Login';
export default function AppRoute() {
    return (
        <Routes>
            {/* <Route index element={<Navigate to='/dashboard' />} /> */}
            {/* <Route path="signin" element={<Signin />} /> */}
            <Route index element={<Navigate to='/login'/>}/>
            <Route path='logout' element={<Login/>}/>
            <Route path="*" element={<Layouts> <BasePages/> </Layouts>} />
        </Routes>
    )
}