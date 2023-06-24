import React, { Component } from 'react'
import TabelNav from './tabel/TabelNav'
import './pinjam.css'

export default class Pinjam extends Component {
    render() {
        return (
            <div className='container'>
            

                <div className="mt-10">
                     <div className="row">
                        <div className='col-lg-12 text-center'>
                            <TabelNav/>
                            <h1>Pinjam</h1>
                        </div>
                     </div>
                </div>
                </div>
        )
    }
}