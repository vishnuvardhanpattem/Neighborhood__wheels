
import React from 'react'
import styled from "styled-components"
import "./Header.css"
import { useRef,useEffect } from 'react';
function Video() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
  return (
    <Container>
        <video className='video' src={"images1/nw2.mp4"}width="100%" height="400px" muted controls ref={videoEl}  autoplay={true}  loop />
    </Container>
  )
}
const Container=styled.div`
height:"400px";
margin-top:0;
`

export default Video;