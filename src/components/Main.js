import React from 'react'
import styled from 'styled-components'
import ImageSlider from './Imageslider'
import { Link } from 'react-router-dom'
import "./Main.css"
function Main() {
    return (
        <Container className='main-container'>
            <Content>
                <h1>Unlock the Journey: <br/>Neighborhood Wheels Await</h1>
                <p>Explore your Neighborhood with ease ! Our Neighborhood vehicle rental Service offers you keys to Convenience. From errands to adventures, we have got the perfect ride for every Occasion Join Us.</p>
                <div className='mainLink'>
                <Link to="/gbike" className='rg-btn' >Rent Bike</Link>
                <Link to="/rentgetbike" className='rg-btn' >GET  Bike</Link>
                </div>
            </Content>
            <Image>
                <ImageSlider/>   
            </Image>

        </Container>
        // <div className="main-container">
        //     <div className='container'>
        //         <h1>Unlock the Journey: <br />Neighborhood Wheels Await</h1>
        //         <p>Explore your Neighborhood with ease ! Our Neighborhood vehicle rental Service offers you keys to Convenience. From errands to adventures, we have got the perfect ride for every Occasion Join Us.</p>
        //         <div className='mainLink'>
        //             <Link to="/gbike" className='rg-btn' >Rent Bike</Link>
        //             <Link to="/rentgetbike" className='rg-btn' >GET  Bike</Link>
        //         </div>
        //     </div>
        //     <div className='main-imageSlider'>
        //          <ImageSlider/>   
        //     </div>
        // </div>
    )
}
const Container = styled.div`
    background-color:black;
    color:white;
    height:500px;
    width:100%;
    border:2px solid black;
    display: flex;
    justify-content:space-around;
`
const Content = styled.div`
    text-align:left;
    width:450px;
    margin-top:50px;
    overflow: hidden;
`
const Image = styled.div`
    width:400px;
    margin-top:50px;
`

export default Main;

