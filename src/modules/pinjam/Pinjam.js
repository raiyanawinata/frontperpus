import React, { Component } from 'react'
import TabelNav from './tabel/TabelNav'
import './pinjam.css'

export default class Pinjam extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data:[]
    //     };
    // }
    // addNewData = (newData) =>{
    //     this.setState((prevState)=>({
    //         data:[...prevState.data, newData]
    //     }));
    // }
    render() {
        return (
            <div className='container'>
            

                <div className="mt-10">
                     <div className="row">
                        <div className='col-lg-12 text-center'>
                            {/* <TabelNav data={this.state.data} addNewData={this.addNewData}/> */}
                            <TabelNav/>
                            {/* <h1>Pinjam</h1> */}
                        </div>
                     </div>
                </div>
                </div>
        )
    }
}