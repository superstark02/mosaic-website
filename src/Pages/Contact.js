import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"

export class Contact extends Component {
    render() {
        return (
            <div style={{backgroundColor:"white"}} >
                <MyAppBar/>
                <div style={{height:"5px", backgroundColor:"black"}} ></div>
                
                <Footer/>
            </div>
        )
    }
}

export default Contact
