
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Register from './components/Register.js';
// import SignIn from './components/SignIn';
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Promotion from "./components/Promotion";
// import Footer0 from "./components/Footer0";
// import Footer1 from "./components/Footer1";
// import Terms from './components/Terms';
// import Privacypolicy from './components/Privacypolicy';
// import Profile1 from './components/Profile1';
// import Profile from './components/Profile';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path='/' element={<div>
//             <Header />
//             <Main />
//             <Promotion />
//             <Footer0 />
//             <Footer1 />
//           </div>} />
//           <Route path="/signup" element={<Register />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path='/terms' element={<Terms />} />
//           <Route path='/privacypolicy' element={<Privacypolicy />} />  
//           <Route path="/profile1"  element={<Profile1 />} />
//           <Route path="/profile"  element={<Profile />} />
//         </Routes>
      
//       </div>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register.js';
import SignIn from './components/SignIn';
import Header from "./components/Header";
import Main from "./components/Main";
import Promotion from "./components/Promotion";

import Footer1 from "./components/Footer1";
import Terms from './components/Terms';
import Privacypolicy from './components/Privacypolicy';
import Profile from './components/Profile';
import Bikerb from './components/Bikerb';
import RentGetBike from './components/RentGetBike';
import GBike from './components/GBike';
import ContactUs from './components/ContactUs';
import Knows from './components/Knows';
import Video from './components/Video';
import Knowus from './components/Knowus';


export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<div>
                        <Header />
                        <Main />
                        <Promotion />
                        <Video />
                        <Knows />
                        <Footer1 />
                        
                    </div>} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/knowus' element={<Knowus />} />
                    <Route path='/privacypolicy' element={<Privacypolicy />} /> 
                    <Route path='/contactus' element={<ContactUs />}  />
                    <Route path="/profile" element={<Profile />} />
                    <Route path='/bikerb' element={<Bikerb />} /> 
                    <Route path='rentgetbike' element={<RentGetBike />} />
                    <Route path='/gbike' element={<GBike />} />
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
}
