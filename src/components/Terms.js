import React, { Component } from 'react'
import styled from "styled-components"
function Terms() {
  return (
    <Container>
        <h1>Terms And Conditions</h1>
        <Part>
            <h3>Eligibility:</h3>
            <ul>
                <li>Renters must be atleast 18  years old and possesses a valid driver's license.</li>
                <li>Renters must reside within the specified Neighborhood covered by our service.</li>
            </ul>
        </Part>
        <Part>
            <h3>Vehicle Usage:</h3>
            <ul>
                <li>Vehiclea are intended for local use and non local use within the covered places</li>
                <li>The rented vehicles should not be used for commercial purposes,ridesharing.</li>
            </ul>
        </Part>
        <Part>
            <h3>Booking and Payment:</h3>
            <ul>
                <li>Rentals can be booked through our mobile app or website.</li>
                <li>Rental rates will be clearly displayed and may vary based on vehicle type and duration.</li>
            </ul>
        </Part>
        <Part>
            <h3>Rental Period:</h3>
            <ul>
                <li>Renatls are available on an hourly or daily basis, as indicated during booking.</li>
                <li>Late returns may incur additional charges.Prompt communication is recommended for extensions</li>
            </ul>
        </Part>
        <Part>
            <h3>Vehicle Condition:</h3>
            <ul>
                <li>Vehicles will be inspected for damage before and after each rental</li>
                <li>Renters are responsible for returning the vehicle in the same condition as recieved,with resonable wear and tear expected.</li>
            </ul>
        </Part>
        <Part>
            <h3>Insurance</h3>
            <ul>
                <li>Each rental includes basic insurance coverage. Renters can choose to purchase additional coverage if desired.</li>
                <li>In case of an accident, renters are required to follow the provided accident reporting procedures.Refueling:Vehicles must be returned with the same fuel level as at the start of the rental. A refueling fee will apply if not complied with.</li>
            </ul>
        </Part>
        <Part>
            <h3>Cancellations</h3>
            <li>Cancellations can be made with a certain notice period before the start of the rental.Late cancellations may result in a cancellation fee.</li>
        </Part>
        <Part>
            <h3>Privacy</h3>
            <ul>
                <li>Personal information collected during the rental process will be used solely for the purpose of the rental service and will be kept confidential.</li>
            </ul>
        </Part>
        <Part>
            <h3>Code of Conduct</h3>
            <ul>
                <li>Renters are expected to treat the vehicles and fellow renters with respect.Any misuse, reckless driving, or violations of traffic rules will result in penalties and potential suspension from the service.</li>
            </ul>
        </Part>
        <Part>
            <h3>Liabilities</h3>
            <ul>
                <li>The company holds no liability for any loss, injury, or damage incurred during the rental period, except as covered by the insurance policy.</li>
            </ul>
        </Part>
        <Part>
            <h3>Termination</h3>
            <ul>
                <li>The company reserves the right to terminate the rental agreement in case of violation of terms or inappropriate conduct. </li>
            </ul>
        </Part>
    </Container>
  )
}
const Container=styled.div`

`
const Part=styled.div`


`

export default Terms;
