import React, { Component } from 'react'
import './koleksi.css'
import TabelCol from './tabel/TabelCol'

export default class Koleksi extends Component {
    
    render() {
        return (
            <div className='container'>
            

                
                        <div className='col-lg-12 text-center'>
                            {/* <TabelNav data={this.state.data} addNewData={this.addNewData}/> */}
                            <TabelCol/>
                            {/* <h1>Pinjam</h1> */}
                        </div>
                     </div>
              
        )
    }
}