import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import "./Promotion.css";
function Knows() {
    return (
        <div className='knowus__container'>
            <div className='knowus__container-gif'>
                <Video autoplay loop src="images1/gif.mp4" />
            </div>
            <div className='knowus__container-content'>
                <h1>Know Us Better</h1>
                <p>Neighborhood vehicle rental services are preferred for their unparalleled convenience, offering easy access to vehicles right in one's community, saving customers time and effort in travel to distant rental locations.They also foster a sense of trust and community, as renters often deal with familiar faces and local businesses, enhancing the overall rental experience</p>
                <p><Link to="/knowus" className="knowbutton">Read More Here</Link></p>
            </div>
        </div>
    )
}

const Video = styled.video`
margin-top:20px;
height:60%;
width:80%;
`


export default Knows;
