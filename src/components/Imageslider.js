import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    return (
        <Carousel{...settings}>
            <Wrap>
                <img src="images1/image.bmp" alt='logo'/>
            </Wrap>
            <Wrap>
                <img src="images1/images (1).jpeg" alt='logos2'/>
            </Wrap>
            <Wrap>
                <img src="images1/images (2)-modified.jpeg" height={"40px"} alt='logos3'/>
            </Wrap>  
            
        </Carousel>
    )
}

export default ImageSlider
const Carousel=styled(Slider)`
    margin-top:20px;
    ul li button{
        &:before{
            font-size:10px;
            color:white;
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:hidden;
    }
    button{
        z-index:1;
    }

`
const Wrap=styled.div`
    cursor:pointer;
    img{
        border:4px solid transparent;
        border-radius:4px;
        width:400px;
        height:100%;
        box-shadow:rgb(0 0 0/69%)0px 20px 30px -10px,
        rgb(0 0 0/73%),0px 16px 10px -10px;    
        &:hover{
            border:2px solid rgba(249,249,249,0.8);
        }
    }
`
// import SimpleImageSlider from "react-simple-image-slider";
// const images = [
//     { url: "images1/image.bmp" },
//     { url: "images1/images (1).jpeg" },
//     { url: "images1/images (2)-modified.jpeg" },
//     // { url: "images/4.jpg" },
//     // { url: "images/5.jpg" },
//     // { url: "images/6.jpg" },
//     // { url: "images/7.jpg" },
//   ];
  
//   const Imageslider = () => {
//     return (
//       <div>
//         <SimpleImageSlider
//           width={400}
//           height={200}
//           images={images}
//           showBullets={true}
//           showNavs={true}
//         />
//       </div>
//     );
//   }

//   export default Imageslider;