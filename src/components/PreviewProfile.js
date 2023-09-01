// import Dropdown from 'react-bootstrap/Dropdown';

// function PreviewProfile() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default PreviewProfile;
import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from "./firebase-config.js"
import { signOut } from "firebase/auth";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function PreviewProfile() {

    const SignOut = async ()=>{
        try{
          alert("Are you sure to logout from existed account");
          await signOut(auth);
        }
        catch(error){
          console.log(error.message)
        }
      }

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' >
                <a className="header-link" to="/previewprofile"><img src="images1/avatar1.jpg" style={{ width: '40px', height: '40px', borderRadius: '50%' }} /></a>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                <Link onClick={SignOut}><MDBDropdownItem link>SignOut</MDBDropdownItem></Link>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}