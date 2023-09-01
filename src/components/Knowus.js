import React from 'react'
import styled from "styled-components"
import Header from './Header'
function Knowus() {
    
  return (
    <div>
        <Header />
    <Container>
        <Container1>
            <h1>India's Beloved <br/><b>Vehicle Rental Service</b></h1>
            <One>
                <h3><b>What makes us different ?</b></h3>
                <p>Our neighborhood vehicle rental service stands out through a combination of factors. Firstly, we prioritize customer convenience by strategically locating our vehicles within residential areas, ensuring quick and easy access for our community members</p>
            </One>
            <Two>
                <h3>We are not an option,we are choice</h3>
                <p>We are not merely an option; we are the choice for neighborhood vehicle rental services. Our strategic locations, community-focused approach, and flexible rental options make us the preferred and trusted solution for local transportation needs.</p>
            </Two>
        </Container1>
        <Container2>
            <Image src="images1/newcar.jpeg"/>
        </Container2>
    </Container>
    </div>
  )
}

export default Knowus
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    h1{
        font-size: 3em;
    }
    h3{
        font-size:2em;
    }
`
const Container1=styled.div`
    text-align: left;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:550px;
`
const Container2=styled.div`
    height:550px;
    width:700px;
`
const One=styled.div`
`
const Two=styled.div`

`
const Image=styled.img`
    height:100%;
    width:100%;
`