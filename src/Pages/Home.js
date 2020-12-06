import React, { Component } from 'react'
import Footer from '../Components/Footer'
import MyAppBar from "../Components/MyAppBar"
import Typical from "../Components/Typical"
import otts from "../Images/otts.png"
import video from "../Images/video.jpeg"
import search from "../Images/search.png"
import "./Home.css"

export class Home extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div>
                    <div className="image" style={{ marginBottom: "30px" }} >
                        <div className="overlay wrap" >
                            <div className="width-change" >
                                <div style={{ fontFamily: "mosaic", fontSize: "60px" }} >
                                    MOSAIC
                                </div>
                                <div className="cover-para" >
                                    is an online video streaming platform which offers over 100,000 hours of TV content
                                    and movies across 9 languages, and every major sport covered live.
                                    Highly evolved video streaming technology and a high attention to quality of experience
                                    across devices and platforms, make MOSAIC the most complete video destination for
                                    Over The Top (OTT) video consumers.
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap" }} className="typical" >
                                    <p style={{ marginRight: "20px" }} >
                                        Unlimited
                                    </p>
                                    <Typical />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="width-change" >
                            <div className="h1" >
                                Download the app now
                            </div>
                            <p style={{ fontSize: "20px" }} >
                                Watch anywhere. Cancel anytime. <br />
                                Save your favourites easily and always have something to watch.
                            </p>
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="width-change" >
                            <div className="img-container wrap" >
                                <img className="a-image" alt="i" src={video} width="100%" />
                            </div>
                            <div className="img-container" >
                                <div className="h1" >
                                    A Video Experience Like No Other
                                </div>
                                <p style={{ fontSize: "20px" }} >
                                    Adaptive video streaming technology ensuring best possible
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="width-change" >
                            <div className="img-container wrap" >
                                <img className="a-image" alt="i" src={search} width="50%" />
                            </div>
                            <div>
                                <div className="h1" >
                                    Smart Search
                                </div>
                                <p style={{ fontSize: "20px" }} >
                                    Optimized content to reduce complexity and delay in accessing content.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="wrap" style={{flexWrap:"wrap"}} >
                        <div className="width-change" >
                            <div className="img-container" >
                                <img className="a-image" alt="i" src={otts} width="100%" />
                            </div>
                            <div>
                                <div className="h1" >
                                    Unlimited movies, TV shows and more.
                                </div>
                                <p style={{ fontSize: "20px" }} >
                                    We offer popular TV, movies and knowledge-based content from India and the world.
                                    With content in 8 languages, spanning 15 productions.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
