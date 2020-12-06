import React, { Component } from 'react'
import "../Pages/Home.css"

export class Footer extends Component {
    render() {
        return (
            <div className="wrap" style={{color:"#6A7375", padding:"30px 0px", marginTop:"90px", backgroundColor:"black"}} >
                <div className="width-change" >
                    <div style={{display:"flex", padding:"20px 0px"}} >
                        <div style={{marginRight:"20px"}} >
                            About
                        </div>
                        <div>
                            Contact
                        </div>
                    </div>
                    <div style={{padding:"20px 0px"}} >
                        Mosaic India
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
