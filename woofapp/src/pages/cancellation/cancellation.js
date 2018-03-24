import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class CancellationPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>

    			    <TitleHeader>Terms</TitleHeader>
    			        <TextContainer>
            			    <div className="cancelDiv">
                                <h3><strong>Cancellation Policy</strong></h3>
                			    <h4>Effective Date: December 1, 2017</h4>
                			    <br/>
                			    
                			    
                			    <p>WooF!’s cancellation policy for specific Services is as follows:

                                <br/><br/>
                			    
                			    <strong>Cancellation by Pet Owner:</strong><br/>
                			    
                			    As a Pet Owner, you may cancel your scheduled Service appointments through the App at any time, subject to the following:

                                <br/><br/>

                                <i>Services Booked 24 Hours in Advance:</i>

                                <br/><br/>

                                <ul>
                                    <li>If you cancel more than 24 hours before a scheduled Service appointment, there is no cancellation fee.</li>
                                    <li>If you cancel between 2-24 hours before a scheduled Service appointment, you will be charged a $10.00 cancellation fee.</li>
                                    <li>If you cancel less than 2 hours before a Service appointment, you will be charged a $25.00 cancellation fee.</li>
                                </ul>
                                
                                <i>Services Booked Less 24 Hours in Advance:</i>
                                
                                <ul>
                                    <li>For Services that were booked between 2-24 hours before the scheduled Service appointment, you will be charged a $10 cancellation fee if you cancel less than 2 hours before a Service appointment.</li>
                                    <li>For Services that were booked less than 2 hours before the scheduled Service appointment, including Services scheduled as “Instant" appointments, you will only be charged a $10 cancellation fee if you fail to cancel such appointment within 5 minutes after it you booked your job.</li>
                                </ul>
                			    <br/>
                			    
                			    <strong>Cancellation by Pet Specialist (Pet Care Specialist):</strong><br/>
                			    
                			    As a Pet Specialist, you may cancel your scheduled Service appointments through the App. If you are more than 15 minutes late for a scheduled appointment (note: the scheduled time for an “Instant Walk” appointment is 1 hour from the time you are selected by your Customer) or fail to complete a scheduled Service, you shall be deemed to have cancelled such appointment. When you cancel a scheduled Service appointment, the WooF! Platform generally notifies your Customer to resubmit the request for Service. WooF! cannot guarantee that a cancelled Service appointment will be selected by another Pet Specialist and rescheduled or that the Service request will be completed. Thus, your cancellation or failure to timely show up to perform a scheduled appointment could negatively impact your Customer and the Platform. As a result, such conduct may adversely impact your rating among Customers. PLEASE BE ADVISED THAT YOUR CANCELLATION OF (A) ANY “INSTANT” APPOINTMENTS, (B) ANY SCHEDULED APPOINTMENTS ON LESS THAN 24 HOURS NOTICE, OR (C) TWO OR MORE SCHEDULED APPOINTMENTS WITHIN A 30-DAY PERIOD IS A VIOLATION OF THE TERMS OF THIS AGREEMENT, WHICH MAY RESULT IN THE SUSPENSION OR DEACTIVATION YOUR PET SPECIALISTS ACCOUNT.
                			    
                			    
                			    </p>
                			    </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default CancellationPage;
