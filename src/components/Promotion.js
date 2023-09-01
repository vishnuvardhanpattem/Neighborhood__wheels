import React from 'react'
import "./Promotion.css"


function Promotion() {
    return (
        <div>
            <div className='promotion__container'>
                <div className='promotion__container-sub'>
                    <img src="images1/affordable1.png" alt='imagesLogo' />
                    <div className='promotion__container-content'>
                        <h2 className='h2'>Affordable Local and Non-Local Rentals</h2>
                        <p className='p'>Explore our selection of Budget-friendly vehicles available for rent within your Neighborhood</p>
                    </div>
                </div>
                <div className='promotion__container-sub'>
                    <img src="images1/easy.png" alt='imagesLogo' />
                    <div className='Promotion__container-content'>
                        <h2>Community Sharing</h2>
                        <p>Join Our Network to share and rent vehicles among fellow residents,promoting sustainibility and saving you money.</p>
                    </div>
                </div>
                <div className='promotion__container-sub'>
                    <img src="images1/community2.png" alt='imagesLogo' />
                    <div className='Promotion__container-content'>
                        <h2>Easy Neighborhood Wheels</h2>
                        <p>Access a variety of vehicles for  short-term rentals,perfect for running errands,quick trips,and more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// function Promotion() {
//     return (
//         <Container >
//             <Main>
//                 <center>
//                     <h1>There's an Neighborhood wheel for everyone</h1>
//                 </center>
//             </Main>
//             <div className='main-container'>
//                 <Container2>
//                     <Contents>
//                         <Image src="images1/affordable1.png" />
//                         <Matter>
//                             <h2>Affordable Local and Non-Local Rentals</h2>
//                             <p>Explore our selection of Budget-friendly vehicles available for rent within your Neighborhood</p>
//                         </Matter>
//                     </Contents>
//                     <Contents>
//                         <Image src="images1/easy.png"></Image>
//                         <Matter>
//                             <h2>Community Sharing</h2>
//                             <p>Join Our Network to share and rent vehicles among fellow residents,promoting sustainibility and saving you money.</p>
//                         </Matter>
//                     </Contents>
//                     <Contents>
//                         <Image src="images1/community2.png"></Image>
//                         <Matter>
//                             <h2>Easy Neighborhood Wheels</h2>
//                             <p>Access a variety of vehicles for  short-term rentals,perfect for running errands,quick trips,and more</p>
//                         </Matter>
//                     </Contents>
//                 </Container2>
//             </div>
//         </Container>
//     )
// }
// const Contents = styled.div`
//     height:200px;
//     width:400px;
//     align-items:center;
//     margin-bottom:0;
// `
// const Container = styled.div`
//     width:100%;
//     height:100vh;
//     display:flex;
//     flex-direction:column;
// `
// const Main = styled.div`

// `
// const Image = styled.img`
//     height:250px;
//     border:hidden;
// `
// const Matter = styled.div`
//     text-align:left;
// `
// const Container2 = styled.div`
//     display: flex;
//     justify-content:space-around;
// `
// const Container3 = styled.div`
//      width:100%;
//     height:40px;
//     background-color:black;
//     color:blue;    
// `
export default Promotion
