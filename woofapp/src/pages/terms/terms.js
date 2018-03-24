import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class TermsPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>

    			    <TitleHeader>Terms</TitleHeader>
    			        <TextContainer>
            			    <div className="termsDiv">
                			    <h3><strong>Terms of Use</strong></h3>
                                <h4>Effective Date: December 1, 2017</h4>
                                <h5>Acceptance of the Terms of Use</h5>
                                <br/>

                                <p>These Terms of Use ("Terms of Use") constitute a legally binding agreement between you ("User" or "you" or "your") and WooF! Inc. ("WooF!" or "we" or "us"). The following terms and conditions, govern your access to and use of WooF!'s mobile application for iOS and Android devices (the "App"), and your access to and use of WooF!'s website located at www.thewoofapp.com (the "Website") including any content, functionality and services offered on or through the Website (the "Internet Services") (the Website, the Internet Services, and the App, are collectively referred to as the "WooF! Platform"), whether as a guest or a registered user.
                                
                                <br/><br/>
                                
                                PLEASE BE ADVISED: THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW CLAIMS YOU AND WOOF! HAVE AGAINST EACH OTHER CAN BE BROUGHT (SEE SECTION 30 BELOW). THESE PROVISIONS WILL, WITH LIMITED EXCEPTION, REQUIRE YOU TO SUBMIT CLAIMS YOU HAVE AGAINST WOOF! TO BINDING AND FINAL ARBITRATION ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, GROUP OR REPRESENTATIVE ACTION OR PROCEEDING. AS A PET SPECIALIST YOU HAVE AN OPPORTUNITY TO OPT OUT OF ARBITRATION WITH RESPECT TO CERTAIN CLAIMS AS PROVIDED IN SECTION 30.
                                
                                <br/><br/>
                                
                                Please read these Terms of Use carefully before you start to use the WooF! Platform. By installing the App, by otherwise accessing or using any aspect of the WooF! Platform, or by clicking to accept or agree to these Terms of Use when this option is made available to you, you accept and agree that you have read, understood, and agree to be bound and abide by these Terms of Use (including the dispute resolution and arbitration provisions in Section 30) and our privacy policy, found at www.thewoofapp.com ("Privacy Policy"), incorporated herein by reference (together herein referred to as this "Agreement"). If you do not agree to this Agreement, you may not access or use the WooF! Platform.

                                <br/><br/>
                                
                                By installing the App, clicking to accept or agree to these Terms of Use, or by otherwise accessing and using any aspect of the WooF! Platform, you represent and warrant that: (a) you are at least 21 years old, are of legal age to form a binding contract with WooF! in the jurisdiction in which you reside, and are otherwise capable of entering into binding contracts; (b) you have the right, authority and capacity to enter into this Agreement; and (c) if you are using the WooF! Platform on behalf of a company, entity, or other organization, then you represent and warrant that you are an authorized representative of that entity with the authority to bind that entity to these Terms of Use, and agree to be bound by these Terms of Use on behalf of that entity. If you do not meet all of these requirements or agree to be bound by the terms and conditions of these Terms of Use you must not use or access the WooF! Platform or the Services.</p>
                                
                                <h5>MATERIAL TERMS AND NOTICES</h5>
                                
                                <p>As provided in greater detail in these Terms of Use (and without limiting the express language of these Terms of Use), you acknowledge the following:

                                <br/><br/>
                                
                                The WooF! Platform connects you to other users of the App. You are neither an employee or subcontractor of WooF!.

                                <br/><br/>
                                
                                The WooF! Platform and App is licensed to you, not sold to you, and you may use the WooF! Platform and App only as set forth in these Terms of Use;

                                <br/><br/>

                                The use of the WooF! Platform and App may be subject to separate third-party terms of service and fees, including, without limitation, such terms of service and fees imposed by your mobile network operator (the “Carrier”), including fees charged for data usage and overage, which are your sole responsibility;

                                <br/><br/>

                                You consent to the collection, use, and disclosure of your personally identifiable information in accordance with the Privacy Policy;

                                <br/><br/>

                                The App is provided “as is” without warranties of any kind and WooF!’s liability to you is limited; We will resolve disputes arising under these Terms of Use through binding arbitration. By accepting this Agreement, as provided in greater detail in Section 30 of the Terms of Use, you and WooF! are each waiving the right to a trial by jury or to participate in a class action; Access to certain features of the WooF! Platform may require access to information about the location of your device, such as GPS coordinates;

                                <br/><br/>

                                We may, without further notice or warning and in our discretion, access, store, use, and disclose the messages, call transcripts, and data about the calls/messages between and among Users (as defined in Section 2) that occur through the WooF! Platform for our business purposes, including to provide and improve customer service and the WooF! Platform, fraud prevention, and to identify violations of this Agreement;

                                <br/><br/>

                                You agree not to circumvent the WooF! Platform by scheduling and/or paying for services outside the App; and, You agree to and acknowledge the “Notice Regarding Apple” in Section 38 below.</p>
                                
                                <p><strong>1. Changes to the Terms of Use </strong></p>
                                
                                <p>We may revise and update these Terms of Use from time to time in our sole discretion. Please check these Terms of Use periodically for changes. If a change to these Terms of Use materially modifies your rights or obligations, you will be required to accept the modified Terms of Use to continue to use the WooF! Platform. Material modifications are effective upon your acceptance of the modified Terms of Use. Immaterial modifications are effective upon publication. Disputes arising under the Terms of Use will be resolved in accordance with the version of the Terms of Use that was in effect at the time the dispute arose.</p>
                                
                                <p><strong>2. WooF! Platform Connects Users</strong></p>
                                
                                <p>The WooF! Platform provides a marketplace or communication platform where independent, self-employed individuals and/or businesses ("Pet Specialists") can locate potential customers, both individuals and businesses that reside in the United States ("Customers"), that are seeking to obtain assistance with the performance of pet care services around their homes or places of business. The WooF! Platform further offers Pet Specialists digital marketing assistance, payment processing, and other digital services. Each Pet Specialist and Customer is a "User" for purposes of these Terms of Use. Each User shall create an account that enable such User to access the WooF! Platform. In addition to a User account, Pet Specialists must have their Pet Specialist account approved prior to accessing the Pet Specialist functions through their User account. For purposes of this Agreement, the services provided by Pet Specialists to their Customers that are scheduled through the WooF! Platform shall be referred to as the "Services". It is up to the Pet Specialists to decide whether to provide Services to Customers contacted through the WooF! Platform.

                                <br/><br/>
                                
                                Unless otherwise disclosed, Pet Specialists are deemed to be unlicensed. Please note that in certain markets Pet Specialist may be required to have a license to perform certain Services that will exceed a monetary threshold. For example, regulations applicable in certain markets require a license for work that will total more than $500.00. Accordingly, Customers must determine for themselves whether a Pet Specialist is qualified to perform the requested Service. Customers should consult their state or local requirements to determine whether certain Services are required to be performed by a licensed professional.

                                <br/><br/>

                                ANY DECISION BY USERS TO OFFER OR ACCEPT SERVICES THROUGH THE WOOF! PLATFORM IS A DECISION MADE IN SUCH USER'S SOLE DISCRETION. EACH SERVICE PROVIDED BY A PET SPECIALISTS TO ITS CUSTOMER SHALL CONSTITUTE A SEPARATE AGREEMENT BETWEEN THAT PET SPECIALISTS AND CUSTOMER. PET SPECIALISTS ARE INDEPENDENT CONTRACTS AND NOT EMPLOYEES OR SUBCONTRACTORS OF WOOF!. WOOF! MAKES NO REPRESENTATION AND IS NOT RESPONSIBLE FOR THE PERFORMANCE OF USERS, NOR DOES IT HAVE CONTROL OVER OR MAKE REPRESENTATIONS REGARDING THE QUALITY, TIMING, LEGALITY, FAILURE TO PROVIDE, OR ANY OTHER ASPECT WHATSOEVER RELATING TO ANY SERVICES. WOOF! DOES NOT HAVE CONTROL OVER THE QUALITY, TIMING OR LEGALITY OF SERVICES DELIVERED BY PET SPECIALISTS.

                                <br/><br/>
                                    
                                WOOF! HAS NO RESPONSIBILITY OR LIABILITY FOR ANY SERVICES PROVIDED TO CUSTOMERS BY PET SPECIALISTS, INCLUDING, BUT NOT LIMITED TO, A WARRANTY OR CONDITION OF GOOD AND WORKMANLIKE SERVICES, WARRANT OF FITNESS FOR A PARTICULAR PURPOSE OR COMPLIANCE WITH ANY LAW, REGULATION OR CODE. EXCEPT AS OTHERWISE SET FORTH HEREIN, WOOF! IS NOT AFFILIATED WITH, ENDORSED OR SPONSORED BY ANY PET SPECIALIST.</p>
                                        
                                <p><strong>3. Pet Specialist Background and Identity Check Process</strong></p>
                                
                                <p>WooF! checks the backgrounds of each Pet Specialist using a third-party background check service that includes, but is not limited to, a sex offenders registry check, county, state, federal and national criminal records check, and domestic and international terrorist watchlist check. Although WooF! performs background and identity checks on each Pet Specialist, WooF! cannot confirm that each Pet Specialist is who they claim to be and therefore, WooF! cannot and does not assume any responsibility for the accuracy or reliability identity or background check information or any information provided through the Service.

                                <br/><br/>
                                
                                YOU ACKNOWLEDGE AND AGREE THAT WOOF! IS NOT LIABLE FOR DAMAGE THAT MIGHT ARISE OUT OF THE SERVICES. WOOF! IS NOT RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER INCLUDING PET SPECIALISTS, AND WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH ANY SERVICES. Each User should exercise caution and common sense to protect their personal safety and property, just as you would when interacting with any person with whom you do not know.</p>
                                
                                <p><strong>4. Job Fees for Services and Additional Services</strong></p>
                                
                                <p>a. Job Fee. Customers shall be charged pursuant to the rates quoted via the WooF! Platform at the time the Service is scheduled, which shall be based either on (i) the stated parameters of the Services and the location where such Services are to be performed or (ii) a counter-bid price proposed directly from a Pet Specialist (the "Job Fee"). WooF! has the authority and reserves the right to determine and modify pricing by posting revised applicable Job Fees to your market through the App or by applying advertised sales or promotional discounts to the posted Job Fees, which will be disclosed to you prior to your submission as a Customer or acceptance as a Pet Specialist of a Service request. You are responsible for reviewing the applicable Job Fee prior to the submission or acceptance of a Service. As a Customer, you shall be responsible for all incurred Job Fees charged under your User account regardless of your awareness of such Job Fees or the amounts thereof. Similarly, as a Pet Specialist, you agree that the Job Fees for the Services that you perform shall be the amount disclosed to you prior to your acceptance of a Service regardless of your awareness of such Job Fees or the amount thereof.

                                <br/><br/>
                                
                                b. Additional Services. When all pre-scheduled Services are completed, the Users may agree to the performance of one or more additional Services (each, an "Additional Service" or “While You’re at It”) before a Pet Specialist departs the Customer's location. Users may only schedule and accept an Additional Service if (i) the performance and completion thereof does not conflict with a Pet Specialist's existing appointments; (ii) it is not an Excluded Service (as defined below); and (iii) does not violate these Terms of Use. The Job Fee for Additional Services shall be the rate agreed to by the Users as confirmed by both parties through the WooF! Platform, which Job Fee shall not exceed $400 for any single Additional Service.

                                <br/><br/>
                                
                                Additional Services that are not confirmed and paid for through the WooF! Platform will not be covered by the WooF! Guarantee and is violation of the terms of this Agreement, which may result in the suspension or deactivation the User's account(s).

                                <br/><br/>
                            
                                c. Excluded Services. Users hereby agree not to schedule or perform any of the following as Services or Additional Services through the WooF! Platform (collectively, the "Excluded Services"):

                                <br/><br/>
                                
                                Services that are professional services, including, but not limited to, services performed by lawyers, actuaries, accountants, architects, engineers, health professionals, medical professionals, financial advisers, management consultants, or investment advisors; Services that make the User unsafe or uncomfortable;

                                <br/><br/>
                                
                                Services that involve the handling of weapons, explosives or hazardous materials; <br/>
                                Services that involve the transportation of and ridesharing among our Users and Pets in any type of motor vehicle, aircraft or watercraft; <br/>
                                Services that involve the moving of items from the User’s property;<br/>
                                Any Service that is illegal or criminal in nature in the state or locality in which it is posted or takes place.</p>
                                    
                                <p><strong>5. Payments</strong></p>

                                <p>Users of the WooF! Platform contract for the Services directly with other Users. Except as set forth in Section 33 below, WooF! is not a party to any contracts for the Services. The WooF! Platform facilitates these contracts by supplying a medium through which Customers can connect with Pet Specialists, schedule the Services, and make payments for the Services directly from the Customer to the Pet Specialist. Notwithstanding the foregoing, Customers may not circumvent the WooF! Platform by using the WooF! Platform to connect with Pet Specialists and then engage those Pet Specialists for Services outside of the WooF! Platform.

                                <br/><br/>

                                a. Payment Processing Service. To facilitate payment for the Services, each User is required to register a credit card or Charitable Voucher and each Pet Specialist is required to register using the Pet Specialist's bank account details. You authorize us and the payment processing service retained by us (currently, Stripe) to facilitate the transaction of the Services and the payment remittance of all applicable charges and fees between you and other Users and between you and us. All payments transacted through Stripe shall be subject to the Stripe Connected Account Agreement, located at https://stripe.com/connect/account-terms, which includes the Stripe Terms of Service, located at https://stripe.com/us/terms (collectively, the "Stripe Services Agreement"). By agreeing to this Agreement, you agree to be bound by the Stripe Services Agreement, as the same may be modified by Stripe from time to time. As a condition of WooF! facilitating payment processing services through Stripe, you agree to provide WooF! accurate and complete information about you and, if applicable, your business, and you authorize WooF! to share it and transaction information related to your use of the payment processing services provided by Stripe.

                                <br/><br/>
                                
                                b. Customer Payments. As a Customer, we will charge your credit card or Charitable Voucher according to the amount of all Services and Additional Services, if any, you scheduled through the WooF! Platform, which amount will include: (i) the Job Fee applicable to the Services or Additional Services that were provided to you by your Pet Specialist; (ii) any out of pocket expenses that were published in connection with the Services; (iii) any out of pocket expenses for materials and related delivery fee, if any, agreed to by and between you and your Pet Specialist through the WooF! Platform; (iv) any tip or gratuity you elect to give to your Pet Specialist; and (v) a platform fee of up to nine percent (9%), which is used, in part, to offset the expense of providing you the WooF! Guarantee set forth in Section 6. You hereby authorize us to charge the credit card on file in your account for such amounts upon the earlier of your verification of the completion of the scheduled Services or as soon as two (2) hours after a Service is completed, if there is no filed complaint with respect to such Service or if such complaint has been otherwise resolved as determined by WooF! in its sole discretion. We retain the right, in our sole discretion, to place a hold on your credit card for an ordered or completed Service transaction. Any payments paid outside of the WooF! Platform are not subject to the WooF! Guarantee and is a violation of the terms of this Agreement.

                                <br/><br/>
                                
                                Except for the WooF! Guarantee, no refunds or credits will be provided once the Customer's credit card has been charged or Charitable Voucher has been used. While we will use commercially reasonable efforts to protect all credit card and all other personal information, we expressly disclaim any liability for any damage that may result should any information be released to any third parties, and you agree to hold us harmless for any damages that may result therefrom. The Job Fee quoted is exclusive of taxes. WooF! is not responsible or liable for any taxes incurred in connection with the Service excluding taxes on WooF!'s income. Customers will be liable for all transaction taxes on the Service(s) provided (other than taxes based on WooF!'s income).

                                <br/><br/>
                                
                                c. Pet Specialist Payments. As a Pet Specialist, upon your satisfactory performance a Service and any Additional Services for your Customers as an self employed service Pet Specialist through the WooF! Platform, and upon your Customer’s payment for such Services, you will receive the following: (i) the applicable Job Fee for the Service and any Additional Services (net of the applicable Use Fee, as discussed below); (ii) any out of pocket expenses that were published in connection with a Service; (iii) any out of pocket expenses for materials and related delivery fee, if any, as agreed to by you and your Customer through the WooF! Platform; and (iv) any tip or gratuity provided to you by your Customer. WooF! will process all payments due to you through its third-party payments processor. You acknowledge and agree that such amounts shall not include any interest and will be net of any amounts that we are required to withhold by law. You expressly authorize WooF! to pre-set the prices on your behalf for all Job Fees that apply to the provision of Services that you provide through the WooF! Platform.

                                <br/><br/>
                                
                                Notwithstanding the above, Pet Specialists may request an adjustment of their applicable Job Fees upon written notice to the attention of WooF!’s General Counsel. Nothing set forth herein shall prohibit or otherwise restrict Pet Specialists from negotiating Additional Services with their Customer. WooF! reserves the right to withhold all or a portion of Job Fees if it believes that you have attempted to defraud or abuse WooF! or WooF!'s payment systems.

                                <br/><br/>
                                
                                i. Use Fee. As a Pet Specialist, in exchange for permitting you to offer your services through the WooF! Platform, you agree to pay WooF! (and permit WooF! to retain) a fee of up to twenty percent (20%) based on each transaction in which you provide Services and, if any, Additional Services (the "Use Fee"). The amount of the applicable Use Fee will be communicated to you in the online Pet Specialist orientation and/or on the Website. WooF! reserves the right to change the Use Fee at any time in WooF!'s discretion and WooF! will provide you with notice in the event of such change. Continued use of the WooF! Platform after any such change in the Use Fee calculation shall constitute your consent to such change.

                                <br/><br/>
                                
                                d. Promotions. WooF!, at its sole discretion, may make available promotions with different features to any of our Users or prospective Users. These promotions, unless made to you, shall have no bearing whatsoever on your Agreement or relationship with WooF!. You are not required to participate in promotions. BY PARTICIPATING IN ANY PROMOTIONAL ACTIVITY VIA THE WOOF! PLATFORM, YOU ARE AGREEING TO ANY ADDITIONAL TERMS AND CONDITIONS APPLICABLE TO THE PROMOTIONAL ACTIVITY, including the following:

                                <br/><br/>
                                
                                i. WooF! Promo Codes. From time to time, WooF! will distribute unique alphanumeric codes (“Promo Codes”) that can be redeemed by Users for a set percentage or value off a Service (such percentage and value amount may be changed by WooF! without notice prior to redemption). Promo Codes are only redeemable for use on the WooF! Platform to be applied towards Services and are non-transferable or redeemable for cash value. Promo Codes must be applied prior to the submission of a request for a Service and cannot be applied to previously completed Services. Only one Promo Code can be used per Service and each unique Promo Code can only be used once per User and any balance remaining on the Promo Code will be forfeited, unless otherwise agreed to by WooF! in its sole discretion. Promo Codes and other discounts cannot be combined with any other offers or promotions. Promo Codes are subject to expiration and must be used within the amount of time stated by WooF! at the time the Promo Code is provided to you, but in no event later than (30) days from the date thereof; provided, however, that WooF! reserves the right in its sole discretion to extend the validity of a Promo Code beyond the stated expiration date. WooF! further reserves the right to withhold or deduct credits or other features or benefits obtained using a Promo Code by a User if WooF! determines or believes that the use or redemption of a Promo Code was in error, fraudulent, illegal, or in violation of the applicable Promo Code terms or these Terms of Use. Users must enter each Promo Code into their account for its appropriate value before a User can use that value on the WooF! Platform.

                                <br/><br/>
                                
                                ii. Charitable Vouchers. From time to time, WooF! may issue charity-related Promo Codes (“Charitable Vouchers”) to charitable organizations for use by such organizations’ designated recipients that are Users of the WooF! Platform. Charitable Vouchers can be used for all Services and fees approved by the issuing charitable organization and in accordance these Terms of Use and WooF!’s agreement with the issuing charitable organization.

                                <br/><br/>
                                
                                User Contributions submitted in connection with any promotional activity may be retained by WooF! after conclusion of the promotion. WooF! may collect personal information from you when you enter a promotional activity. WooF! will use any information collected in accordance with the Privacy Policy. All participants must observe commercial standards of fair dealing and honesty in fact in participating in promotional activities. WOOF! MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING ANY PRIZE OR YOUR PARTICIPATION IN ANY PROMOTIONAL ACTIVITY. BY ENTERING THE PROMOTIONAL ACTIVITY OR BY RECEIVING ANY PRIZE, YOU AGREE TO RELEASE AND HOLD HARMLESS WOOF!, AND ITS SUBSIDIARIES, AFFILIATES, SUPPLIERS, DISTRIBUTORS, ADVERTISING/PROMOTION AGENCIES, ALL SOCIAL MEDIA NETWORKS (INCLUDING FACEBOOK AND INSTAGRAM ), AND PRIZE SUPPLIERS, AND EACH OF THEIR RESPECTIVE PARENT COMPANIES AND EACH OF THOSE COMPANY'S OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS (COLLECTIVELY, THE "RELEASED PARTIES") FROM AND AGAINST ANY CLAIM OR CAUSE OF ACTION, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, DEATH, OR DAMAGE TO OR LOSS OF PROPERTY, ARISING OUT OF PARTICIPATION IN THE PROMOTIONAL ACTIVITY, OR RECEIPT OR USE OR MISUSE OF ANY PRIZE.

                                <br/><br/>
                                
                                THE RELEASED PARTIES ARE NOT RESPONSIBLE FOR: (a) ANY INCORRECT OR INACCURATE INFORMATION, WHETHER CAUSED BY ENTRANTS, PRINTING ERRORS OR BY ANY OF THE EQUIPMENT OR PROGRAMMING ASSOCIATED WITH OR USED IN THE PROMOTION; (b) TECHNICAL FAILURES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO MALFUNCTIONS, INTERRUPTIONS, OR DISCONNECTIONS IN PHONE LINES OR NETWORK HARDWARE OR SOFTWARE; (c) UNAUTHORIZED HUMAN INTERVENTION IN ANY PART OF THE ENTRY PROCESS OR THE PROMOTIONAL ACTIVITY; (d) TECHNICAL OR HUMAN ERROR THAT MAY OCCUR IN THE ADMINISTRATION OF THE PROMOTIONAL ACTIVITY OR THE PROCESSING OF ENTRIES; OR (e) ANY INJURY OR DAMAGE TO PERSONS OR PROPERTY THAT MAY BE CAUSED, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, FROM YOUR (OR ANY OTHER ENTRANT'S) PARTICIPATION IN THE PROMOTIONAL ACTIVITY OR RECEIPT OR USE OR MISUSE OF ANY PRIZE.</p>

                                <p><strong>6. WooF! Guarantee</strong></p>

                                <p>Our WooF! Guarantee is that the Service you order and pay for will be performed as described in the description of the Service when you ordered it. If you have ordered and paid for a Service but you believe the Service was not performed in accordance with the WooF! Guarantee you must report the issue within twenty-four (24) hours of the Service appointment to our Support Center at support@thewoofapp.com and respond to all follow up questions requested of you from the Support Center and you may be eligible for the WooF! Guarantee Remedies. The "WooF! Guarantee Remedies" are as follows: if we determine, in our sole discretion, that a Service does not meet the WooF! Guarantee we will, either refund the payment you actually made for such Service, or have the applicable Service re-performed. If the Service is re-performed but we determine, in our sole discretion, the re-performance still does not meet the WooF! Guarantee, we will refund the payment actually made for such Service. The amount of the WooF! Guarantee is limited to any payment you made for the Service. The WooF! Guarantee does not apply to any other cost, liability, damage, injury, or claim arising from or in connection with the Services. To be clear, the WooF! Guarantee does not apply to any payments made for Services not scheduled and paid for through the WooF! Platform. THIS SECTION 6 STATES WOOF!'S SOLE AND EXCLUSIVE LIABILITY, AND CUSTOMER'S SOLE AND EXCLUSIVE REMEDY, FOR ANY DAMAGES OR CLAIMS ARISING OUT OF OR IN CONNECTION WITH THE SERVICES.</p>

                                <p><strong>7. Cancellation Policy</strong></p>

                                <p>WooF!’s cancellation policy for specific Services is as follows:

                                <br/><br/>

                                <i>Cancellation by Pet Owner:</i><br/>
                                
                                As a Pet Owner, you may cancel your scheduled Service appointments through the App at any time, subject to the following:

                                <br/><br/>
                                
                                Services Booked 24 Hours in Advance:

                                <br/>
                                
                                <ul>                                
                                    <li>If you cancel more than 24 hours before a scheduled Service appointment, there is no cancellation fee.</li>
                                    
                                    <li>If you cancel between 2-24 hours before a scheduled Service appointment, you will be charged a $10.00 cancellation fee.</li>
                                    
                                    <li>If you cancel less than 2 hours before a Service appointment, you will be charged a $25.00 cancellation fee.</li>
                                    
                                    <li>Services Booked Less 24 Hours in Advance: </li>
                                    
                                    <li>For Services that were booked between 2-24 hours before the scheduled Service appointment, you will be charged a $10 cancellation fee if you cancel less than 2 hours before a Service appointment.</li>
                                    
                                    <li>For Services that were booked less than 2 hours before the scheduled Service appointment, including Services scheduled as “Instant" appointments, you will only be charged a $10 cancellation fee if you fail to cancel such appointment within 5 minutes after it you booked your job.</li>
                                </ul>
                                
                                <i>Cancellation by Pet Specialist (Pet Care Specialist):</i>

                                <br/>
                                
                                As a Pet Specialist, you may cancel your scheduled Service appointments through the App. If you are more than 15 minutes late for a scheduled appointment (note: the scheduled time for an “Instant Walk” appointment is 1 hour from the time you are selected by your Customer) or fail to complete a scheduled Service, you shall be deemed to have cancelled such appointment. When you cancel a scheduled Service appointment, the WooF! Platform generally notifies your Customer to resubmit the request for Service. WooF! cannot guarantee that a cancelled Service appointment will be selected by another Pet Specialist and rescheduled or that the Service request will be completed. Thus, your cancellation or failure to timely show up to perform a scheduled appointment could negatively impact your Customer and the Platform. As a result, such conduct may adversely impact your rating among Customers. PLEASE BE ADVISED THAT YOUR CANCELLATION OF (A) ANY “INSTANT” APPOINTMENTS, (B) ANY SCHEDULED APPOINTMENTS ON LESS THAN 24 HOURS NOTICE, OR (C) TWO OR MORE SCHEDULED APPOINTMENTS WITHIN A 30-DAY PERIOD IS A VIOLATION OF THE TERMS OF THIS AGREEMENT, WHICH MAY RESULT IN THE SUSPENSION OR DEACTIVATION YOUR PET SPECIALISTS ACCOUNT.

                                <br/><br/>
                                
                                *Instant services represent “on-demand” services.</p>

                                <p><strong>8. Pet Specialist Access Fee</strong></p>

                                <p>As a Pet Specialist, you are required to pay a monthly access fee during any calendar month in which you complete a Service. The access fee shall be $2.99 per month (the "Access Fee"). You instruct and authorize WooF! to deduct the Access Fee from the Job Fee of the first job(s) you complete in a calendar month. You acknowledge that WooF! reserves the right, at any time, to modify its Access Fees and billing methods.</p>

                                <p><strong>9. Ratings</strong></p>

                                <p>To help maintain the quality of the WooF! Platform, Users (both Pet Specialists and Customers) will have the opportunity to rate each other after the completion of Services. If you rate your Pet Specialist or Customer with an average of less than 3 stars, such User will be excluded from your future Service requests. Customers will see Pet Specialist ratings before selecting a Pet Specialist for a job so each rating a Customer gives can have an impact on that Pet Specialist's future on the WooF! Platform. In addition, Customers with a low star rating may not have their requests accepted.</p>

                                <p><strong>10. Communications</strong></p>

                                <p>By becoming a User, you expressly consent and agree to accept and receive electronic and other communications from us, including via e-mail, text message, calls, and push notifications to the telephone number or email address you provided to us, as further described in our Privacy Policy. If you wish to opt out of promotional emails, text messages, or other communications, you may opt out by following the unsubscribe options provided to you in such promotional communications. You may opt-out of receiving non-promotional communications from us at any time by deactivating your account. You may continue to receive text messages for a period of time while we work to de-activate your account, and you may also receive text messages confirming the de-activation of your account. You consent to receive autodialed or prerecorded calls from us at the telephone number that you have provided to us to: (a) facilitate communications among users; or (b) otherwise provide our services or enforce these Terms of Use. You are not required to provide your consent to these calls as a condition of purchase on the WooF! Platform. Your wireless service carriers standard charges, data rates, and other fees may apply.

                                <br/><br/>
                                
                                We may, without further notice or warning and in our discretion, monitor or record telephone conversations that we have with you or anyone acting on your behalf for quality control and training purposes or to protect our rights. We may, without further notice or warning, and in our discretion, access, store, use, and disclose the messages, call transcripts, and data about the calls/messages between and among Users that occur through the WooF! Platform for our business purposes, including to provide and improve customer service and the WooF! Platform, fraud prevention, and to identify violations of this Agreement.</p>

                                <p><strong>11. Location Coordinates</strong></p>

                                <p>To schedule and accept Services, you must possess an iOS or Android smartphone capable of accessing the WooF! Platform (the "Mobile Device"). As a Pet Care Specialists, you hereby acknowledge and consent to WooF!'s collection of the latitude and longitude location ("Location Coordinates") of your Mobile Device so that we can provide our services to you and your Customers. For example, we may collect Location Coordinates when you select "Start Navigation to Site" or equivalent on the App for the purpose of providing support in case you and your Customer cannot find each other and ending upon your notification to your Customer and WooF! that you arrived at the Service location by selecting "I'm Here!" or the equivalent on the App (the "Tracking Period"). In addition, while in Pet Specialist mode, WooF! collects the Location Coordinates of the Mobile Device on which the WooF! Platform is installed for other purposes, including for the purpose of referring Services to you from potential Customers in your vicinity, protecting the safety of Customers and Pet Specialists and for legal purposes (such as to enforce our agreements). WooF! does not collect or use Location Coordinates data for the purpose of controlling or monitoring the manner and means by which you provide the Services contemplated by this Agreement, or the frequency with which you use the WooF! Platform to book Services. By executing this Agreement, you agree to the use and disclosure of Location Coordinates information as described above.</p>

                                <p><strong>12. Accessing the WooF! Platform and Account Security</strong></p>

                                <p>We reserve the right to withdraw or amend the WooF! Platform, and any service we provide on the WooF! Platform, in our sole discretion without notice. We will not be liable if for any reason that all or any part of the WooF! Platform is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the WooF! Platform, or the entire WooF! Platform, to Users for any reason or no reason.

                                <br/><br/>

                                You are responsible for:

                                <ul>
                                    <li>Making all arrangements necessary for you to have access to the WooF! Platform.</li>
                                    <li>Ensuring that all persons who access the WooF! Platform through your account are aware of this Agreement and comply with them.</li>
                                </ul>
                                
                                To access the WooF! Platform or some of the resources it offers, you may be asked to provide certain registration details or other information. You may register to use the WooF! Platform by using your existing Facebook or Google account and log-in credentials (your “Third-Party Site Password”). It is a condition of your use of the WooF! Platform that all the information you provide on the WooF! Platform is correct, current and complete. You agree that all information you provide to register with the WooF! Platform or otherwise, including but not limited to through the use of any interactive features on the WooF! Platform, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.

                                <br/><br/>
                                
                                If you choose, or are provided with, a user name, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to the WooF! Platform or portions of it using your user name, password or other security information, including Third-Party Site Password. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.

                                <br/><br/>
                                
                                We have the right to disable any user name, password or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of this Agreement.</p>

                                <p><strong>13. Release</strong></p>

                                <p>THE SERVICE IS ONLY A VENUE FOR CONNECTING USERS. EXCEPT AS OTHERWISE SET FORTH HEREIN, WOOF! IS NOT AFFILIATED WITH ANY CARRIER, PET SPECIALISTS OR THIRD PARTY SERVICE, AND ANY DISPUTE YOU HAVE WITH ANY CARRIER, PET SPECIALISTS OR THIRD PARTY SERVICE, OR OTHER THIRD PARTY, INCLUDING, WITHOUT LIMITATION, ANY OTHER USER OF THE SERVICE, IS DIRECTLY BETWEEN YOU AND THAT THIRD PARTY, AND YOU IRREVOCABLY RELEASE WOOF! (AND OUR OFFICERS, DIRECTORS, AGENTS, INVESTORS, SUBSIDIARIES, AND EMPLOYEES) FROM ANY AND ALL CLAIMS, DEMANDS, OR DAMAGES (ACTUAL OR CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, SUSPECTED AND UNSUSPECTED, DISCLOSED AND UNDISCLOSED, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.</p>

                                <p><strong>14. Limited License; Intellectual Property Rights</strong></p>

                                <p>The WooF! Platform is licensed, not sold, to you for use only under these Terms of Use. Subject to your complete and ongoing compliance with the terms and conditions of these Terms of Use, WooF! hereby grants you a personal, limited, revocable, non-transferable, non-exclusive, non-commercial, non-sublicensable license to: (a) use the Apps on compatible, authorized devices that you own or control; and (b) access and use the Website and Internet Services; in each case solely for your own use or for the entity on whose behalf you are authorized to act.

                                <br/><br/>

                                You may not modify, alter, reproduce, or distribute the WooF! Platform. You may not directly rent, lease, lend, sell, redistribute, or sublicense the WooF! Platform. You must not decompile, reverse engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of any portion of the WooF! Platform, any updates, or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law or the terms of any Third Party Service), nor attempt to disable or circumvent any security or other technological measure designed to protect the WooF! Platform or any content available through the WooF! Platform.

                                <br/><br/>

                                The WooF! Platform and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by WooF!, its licensors or other Pet Specialists of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.

                                <br/><br/>

                                You must not:

                                <br/><br/>
                                
                                - Modify copies of any materials from this site.<br/>
                                - Use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.<br/>
                                - Delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.<br/>
                                - You must not access or use for any commercial purposes any part of the WooF! Platform or any services or materials available through the WooF! Platform.

                                <br/><br/>
                                
                                If you breach these license restrictions or otherwise exceed the scope of the licenses granted in these Terms of Use, then you may be subject to prosecution and damages, as well as liability for infringement of intellectual property rights, your right to use the WooF! Platform will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title or interest in or to the WooF! Platform or any content on the WooF! Platform is transferred to you, and WooF! reserves all rights not expressly granted. Any use of the WooF! Platform not expressly permitted by this Agreement is a breach of this Agreement and may violate copyright, trademark and other laws.</p>

                                <p><strong>15. Prohibited Uses</strong></p>

                                <p>You may use the WooF! Platform only for lawful purposes and in accordance with this Agreement. You agree not to use the WooF! Platform:

                                <br/><br/>

                                - In any way that violates any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).<br/>
                                - For the purpose of exploiting, harming or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise.<br/>
                                - To impersonate or attempt to impersonate WooF!, a WooF! employee, another user or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing).<br/>
                                - To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the WooF! Platform, or which, as determined by us, may harm WooF! or users of the WooF! Platform or expose them to liability.

                                <br/><br/>
                                
                                Additionally, you agree not to:

                                <br/><br/>
                                
                                - Use the WooF! Platform in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the WooF! Platform, including their ability to engage in real time activities through the WooF! Platform.<br/>
                                - Use any robot, spider or other automatic device, process or means to access the WooF! Platform for any purpose, including monitoring or copying any of the material on the WooF! Platform.<br/>
                                - Use any manual process to monitor or copy any of the material on the WooF! Platform or for any other unauthorized purpose without our prior written consent.<br/>
                                - Use any device, software or routine that interferes with the proper working of the WooF! Platform.<br/>
                                - Introduce any viruses, trojan horses, worms, logic bombs or other material which is malicious or technologically harmful.<br/>
                                - Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the WooF! Platform, the server on which the WooF! Platform is stored, or any server, computer or database connected to the WooF! Platform.<br/>
                                - Attack the WooF! Platform via a denial-of-service attack or a distributed denial-of-service attack. Otherwise attempt to interfere with the proper working of the WooF! Platform.</p>

                                <p><strong>16. Digital Millennium Copyright Act</strong></p>

                                <p>We comply with the provisions of the Digital Millennium Copyright Act applicable to Internet services (17 U.S.C. §512, as amended). If you have an intellectual property rights-related complaint about material posted on the WooF! Platform, you may contact our Designated Agent at WooF! Inc - support@thewoofapp.com

                                <br/><br/>

                                Any notice alleging that materials hosted by or distributed through the WooF! Platform infringe intellectual property rights must include the following information: an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other right being infringed; a description of the copyright-protected work or other intellectual property right that you claim has been infringed; a description of the material that you claim is infringing and where it is located on the WooF! Platform; your address, telephone number, and email address; a statement by you that you have a good faith belief that the use of those materials on the WooF! Platform is not authorized by the copyright owner, its agent, or the law; and a statement by you that the above information in your notice is accurate and that, under penalty of perjury, you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.

                                <br/><br/>
                                
                                Repeat Infringers. WooF! will promptly terminate without notice the accounts of users that are determined by WooF! to be "Repeat Infringers" to the fullest extent permitted under applicable law. A Repeat Infringer is a user who has been notified of infringing activity or has had User Contributions (as defined in Section 17 below) removed from the WooF! Platform at least twice.</p>

                                <p><strong>17. User Contributions</strong></p>

                                <p>The WooF! Platform may contain profiles and other interactive features (collectively, "Interactive Services") that allow Users to post, submit, publish, display or transmit to other Users (hereinafter, "post") content, photographs, images, or other related materials (collectively, "User Contributions") on or through the WooF! Platform, including User-supplied profile pictures and job/service-related photos.

                                <br/><br/>

                                Any User Contribution you post to the site is subject to the governing provisions set forth in our Privacy Policy. User Contributions will be considered non-confidential and non-proprietary. By providing any User Contribution on the WooF! Platform, you hereby grant us and our licensees, successors and assigns the right to use, reproduce, modify, perform, display, distribute and otherwise disclose to third parties any such material for any purpose. By posting or sharing User Contributions with other Users, to the fullest extent permitted under applicable law, you grant those Users a non-exclusive license to access and use those User Contributions as permitted by these Terms of Use and the functionality of the WooF! Platform.

                                <br/><br/>

                                You represent and warrant that:

                                <br/><br/>
                                
                                You own or control all rights in and to the User Contributions and have the right to grant the licenses granted above to us and our licensees, successors and assigns and other Users.

                                <br/><br/>
                                
                                Your User Contributions, and the use of your User Contributions as contemplated by these Terms of Use, do not and will not: (i) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right; (ii) slander, defame, libel, or invade the right of privacy, publicity or other property rights of any other person; (iii) be obscene, contain nudity, be harmful to minors, infected with viruses that are intended to detrimentally interfere with any date, or liability inducing to WooF!; or (iv) cause WooF! to violate any law or regulation.

                                <br/><br/>
                                
                                All of your User Contributions do and will comply with this Agreement.

                                <br/><br/>
                                
                                You understand and acknowledge that you are responsible for any User Contributions you submit or contribute, and you, not WooF!, are fully responsibility for such content, including its legality, reliability, accuracy and appropriateness.

                                <br/><br/>
                                
                                We are not responsible, or liable to any third party, for the content or accuracy of any User Contributions posted by you or any other user of the WooF! Platform.

                                <br/><br/>
                                
                                In exchange for the right to use the WooF! Platform, Users who post their User Contributions hereby irrevocably grant to WooF! the following rights in connection with the display, distribution, transmission, or broadcasting on any media, including the internet, of their User Contributions in connection with the WooF! Platform: the right to use Photos in the advertising, marketing, and/or publicizing of the WooF! Platform to perform and improve upon the WooF! Platform; or the right to exercise all copyright, publicity rights, and any other rights therein.

                                <br/><br/>
                                
                                Such right applies in any media now known or not currently known, and such right is hereby deemed to be perpetual, non-exclusive, unrestricted, royalty-free, worldwide, irrevocable, transferable, and sub-licensable (through multiple tiers). User hereby releases WooF! from (and shall not bring any) proceeding, whether now known or unknown, for defamation, invasion of right to privacy, publicity or personality or any similar matter, or based upon the use of your Photo(s).</p>

                                <p><strong>18. Monitoring and Enforcement</strong></p>

                                <p>We have the right to:

                                <br/><br/>

                                Remove or refuse to post any User Contributions for any or no reason in our sole discretion. Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion, including if we believe that such User Contribution violates the Terms of Use, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the WooF! Platform or the public or could create liability for WooF! Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.

                                <br/><br/>
                                
                                Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the WooF! Platform.

                                <br/><br/>

                                Terminate or suspend your access to all or part of the WooF! Platform for any or no reason, including without limitation, any violation of this Agreement.

                                <br/><br/>
                                
                                Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the WooF! Platform. YOU WAIVE AND HOLD HARMLESS WOOF! AND ITS AFFILIATES, LICENSEES AND SERVICE PET SPECIALISTS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.

                                <br/><br/>
                                
                                To the fullest extent permitted under applicable law, we are under no obligation to edit or control User Contributions that you or other Users post or publish, and we expressly disclaim any and all liability in connection with User Contributions. WooF! may, at any time and without prior notice, screen, remove, edit, or block any User Contributions that in our sole judgment violates these Terms of Use or is otherwise objectionable. You understand that when using the WooF! Platform you will be exposed to User Contributions from a variety of sources and acknowledge that User Contributions may be inaccurate, offensive, indecent, or objectionable. You agree to waive, and do waive, any legal or equitable right or remedy you have or may have against WooF! with respect to User Contributions.</p>

                                <p><strong>19. User Disputes</strong></p>

                                <p>We understand that occasionally disputes may arise between or among our Users. In the event a dispute initiated by either a Pet Specialist or a Customer cannot be resolved independently, you hereby agree, at WooF!’s request, to participate with good faith, to the extent you are reasonably able to do so, in a neutral resolution, mediation, or arbitration process conducted by WooF! or a neutral third-party mediator or arbitrator selected by WooF!. Notwithstanding the foregoing, you acknowledge and agree that WooF! is under no obligation to become involved in or impose resolution in any dispute between or among Users or any third-party.</p>

                                <p><strong>20. Pet Specialist Provisions</strong></p>

                                <p>a. Insurance. As a Pet Specialist, you acknowledge and agree that it is your responsibility to maintain in full force and effect adequate workers' compensation (or, if permitted by law, occupational accident insurance), unemployment, liability, and other forms of insurance with policy limits sufficient to protect and indemnify WooF! and its affiliates, and each of their officers, directors, agents, employees, subsidiaries, partners, members, controlling persons, and successors and assigns, from any losses resulting from the conduct, acts, or omissions of you or your assistants, agents, contractors, servants, or employees.

                                <br/><br/>

                                b. Pet Specialist Assistants. Before any Services are performed by any assistants, helpers, subcontractors or other personnel engaged by a Pet Specialist, the Pet Specialist shall require any such individuals to become a registered, approved Pet Specialist on the WooF! Platform. Each Pet Specialist assumes full and sole responsibility for the payment of all compensation, benefits and expenses of helpers, assistants, subcontractors and/or other personnel, if any, and for all required and applicable state and federal income tax withholdings as to the Pet Specialist and all persons engaged by the Pet Specialist in the performance of the Services.

                                <br/><br/>
                                
                                c. Equipment. As a Pet Specialist, you are solely responsible for any costs or expenses incurred by you in connection with the performance of the Services, and in no event shall WooF! reimburse, or be required to reimburse, you for any tools, materials, costs or expenses used in connection with the Services. You shall furnish and maintain, at your own expense, the tools, equipment, supplies, and other materials used to perform the Services. You, at your sole discretion, shall determine what equipment, supplies, and materials are necessary to perform the Services, and where, when, and at what cost, to purchase or maintain any necessary equipment, supplies, tools, and materials. At your request, WooF! may offer to you certain equipment, supplies, and materials for purchase. You are not required to purchase any equipment, tools, supplies, or materials from WooF! at any time.

                                <br/><br/>
                                
                                d. Representations. By providing Services as a Pet Specialist on the WooF! Platform, you represent, warrant, and agree that: (i) you are solely responsible for obtaining the necessary licenses and/or certifications for performance of the Services or Additional Services; (ii) you will not transfer or sell your User account, password and/or identification to any other party; (iii) you will be solely responsible for any and all liability that results from or is alleged as a result of your provision of Services, including, but not limited to personal injuries, death and property damages; (iv) you will comply with all applicable laws, rules and regulations while providing Services, and you will be solely responsible for any violations of such provisions; (v) you will pay all applicable federal, state and local taxes based on your provision of Services and any payments received by you; and (vi) you will not attempt to defraud WooF! in connection with your provision of Services or Additional Services.

                                <br/><br/>
                                
                                e. Reimbursement of Resolution Costs. Notwithstanding anything set forth herein to the contrary, you further represent, warrant, and agree (i) to pay all reasonable out-of-pocket expenses incurred by WooF! in connection with the resolution of any property damage or other claims resulting from a Service you performed for a Customer, and (ii) that WooF! shall reserve the right to suspend your Pet Specialist account until it has received payment in full for all such reimbursable amounts.

                                <br/><br/>
                                
                                f. Non-Circumvention. Within six (6) months after the last time Pet Specialist provides services to a Customer as arranged through the WooF! Platform Pet Specialist, Pet Specialist agrees not to provide any services to the same Customer other than as arranged through the WooF! Platform. Pet Specialist shall be liable for the fees set forth in Section 4 for all services provided to Customers in breach of the previous sentence, in addition to all other remedies provided by this Agreement and applicable law, including injunctive relief. Pet Specialist agrees to indemnify WooF! from any attorneys’ fees and costs it incurs in collecting its fees from a Pet Specialist that breaches this non-circumvention provision.</p>

                                <p><strong>21. Third-Party Services, Charitable Organization Programs, Third-Party Fees, and Linked Websites</strong></p>

                                <p>a. Access to Third-Party Services. The WooF! Platform may provide you with access to third party websites, databases, networks, servers, information, software, programs, systems, directories, applications, products or services, or charitable donation programs (collectively, "Third Party Services"). WooF! does not have or maintain any control over Third Party Services, and is not and cannot be responsible for their content, operation, or use. By linking or otherwise displaying information from or providing access to any Third-Party Services, WooF! does not give any representation, warranty, or endorsement, express or implied, with respect to the legality, accuracy, quality, or authenticity of content, information, or services provided by those Third-Party Services.
                                
                                <br/><br/>

                                b. Charitable Donation Programs. From time to time, WooF! may authorize one or more charitable organizations (each a “Charity”) to post a fundraising campaign ("Champaign") to the WooF! Platform to accept monetary donations ("Donations") from Users wishing to contribute funds to the Campaign ("Donors"). For purposes hereof, the term "Charity" shall also be deemed to include any individual(s) designated as a beneficiary of a Campaign. You understand and acknowledge, however, that WooF! is not a charity or a party to any agreement between a Charity and a Donor, or between any User and a Charity. We are not a broker, agent, financial institution, creditor or insurer for any User or Charity. Furthermore, we do not personally endorse any Campaign or Charity.

                                <br/><br/>
                                
                                You agree that a certain minimum Donation amount may apply, and that all Donation payments are final and will not be refunded unless the Charity, in its sole discretion, agrees to issue a refund. You acknowledge that contributions to Campaigns are may not be deductible under your jurisdiction’s applicable tax laws and regulations.

                                <br/><br/>
                                
                                i. Third-Party Fees related to Donations. WooF! may, in its sole discretion, deduct a payment process fee from each Donation to off-set any out-of-pocket costs of hosting a Campaign on the WooF! Platform. Donors acknowledge that by contributing a Donation to a Campaign, the Donor is agreeing to any and all applicable terms and conditions set forth by our payment partners, in addition to these Terms of Use, including Stripe's terms of service.

                                <br/><br/>
                                
                                c. Disclaimer of Liability for Third-Party Services. Third-Party Services may have their own terms of use and privacy policy, and your use of the WooF! Platform may incur third party fees, such as fees charged by your mobile carrier for data usage. You are solely responsible for reviewing and complying with any terms of use, privacy policy or other terms governing your use of Third Party Services, and you are solely responsible for all of Third Party Services fees incurred by you for use of the WooF! Platform. You are solely responsible for taking the precautions necessary to protect yourself from fraud when using Third Party Services, and to protect your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content that may be included on or with any Third-Party Services. WooF! disclaims any and all responsibility or liability for any harm resulting from your use of Third Party Services, and you hereby irrevocably waive any claim against WooF! with respect to any Third-Party Services.

                                <br/><br/>
                                
                                d. Additional Notices and Disclaimers for Charitable Programs. We have no control over the conduct of, or any information provided by, a Charity, and we hereby disclaim all liability in this regard to the fullest extent permitted by applicable law. You, as a Donor, must make the final determination as to the value and appropriateness of contributing to any Campaign or Charity. We do not and cannot verify the information that a Charity supplies, nor do we guarantee that the Donations will be used in accordance with any fundraising purpose prescribed by a Charity. We assume no responsibility to verify whether the Donations are used in accordance with any applicable laws; such responsibility rests solely with the Charity. While we have no obligation to verify that the use of any funds raised is in accordance with applicable law and these Terms of Use, we take possible fraudulent activity and the misuse of funds raised very seriously. If you have reason to believe that a Charity is not raising or using the funds for their stated purpose, please alert our team of this potential issue by emailing support@thewoofapp.com and we will investigate.</p>

                                <p><strong>22. Third Party Software</strong></p>

                                <p>Software you download in connection with the WooF! Platform consists of a package of components that may include certain third party software ("Third Party Software") provided under separate license terms (the "Third Party Terms"). Your use of the Third-Party Software in conjunction with the WooF! Platform in a manner consistent with these Terms of Use is permitted, however, you may have broader rights under the applicable Third Party Terms, and nothing in these Terms of Use is intended to impose further restrictions on your use of the Third-Party Software.</p>

                                <p><strong>23. Terms and Termination</strong></p>

                                <p>This Agreement is effective upon your creation of a User account, as amended by any modifications made pursuant to Section 1. You may discontinue your use of the WooF! Platform or participation in the Services at any time, for any reason. We may suspend or deactivate your User account (either as a Pet Specialist and/or Customer), or revoke your permission to access the WooF! Platform, at any time, for any reason, upon notice to you. We reserve the right to refuse access to the WooF! Platform to any User for any reason not prohibited by law. Either party may terminate the Agreement for any reason upon written notice to the other party. The terms of this Agreement, and any subsequent modifications of this Agreement, shall remain in effect at all times after you or WooF! terminate your participation or access to the WooF! Platform or Services.</p>

                                <p><strong>24. Changes to the WooF! Platform</strong></p>

                                <p>We may update the content on this WooF! Platform from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the WooF! Platform may be out of date at any given time, and we are under no obligation to update such material.</p>

                                <p><strong>25. Information About You and Your Visits to the WooF! Platform</strong></p>

                                <p>All information we collect on this WooF! Platform is subject to our Privacy Policy. By using the WooF! Platform, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.</p>

                                <p><strong>26. Confidential Information</strong></p>

                                <p>a. WooF!'s Confidential Information. You acknowledge that Confidential Information (as hereinafter defined) is a valuable, special and unique asset of WooF! and agree that you will not disclose, transfer, use (or seek to induce others to disclose, transfer or use) any Confidential Information for any purpose other than disclosure to your authorized employees and agents who are bound to maintain the confidentiality of Confidential Information. You shall promptly notify WooF! in writing of any circumstances which may constitute unauthorized disclosure, transfer, or use of Confidential Information. You shall use best efforts to protect Confidential Information from unauthorized disclosure, transfer or use. You shall return all originals and any copies of any and all materials containing Confidential Information to WooF! upon termination of this Agreement for any reason whatsoever. The term "Confidential Information" shall mean any and all of WooF!'s trade secrets, confidential and proprietary information and all other information and data of WooF! that is not generally known to the public or other third parties who could derive value, economic or otherwise, from its use or disclosure. Confidential Information shall be deemed to include technical data, know-how, research, product plans, products, services, customers, markets, software, developments, inventions, processes, formulas, technology, designs, drawings, engineering, hardware configuration information, marketing, finances or other business information disclosed directly or indirectly in writing, orally or by drawings or observation.

                                <br/><br/>

                                b. Customer's Confidential Information. As a Pet Specialist, you understand that in performing the Services, you will receive certain private and/or confidential information regarding your Customer and will have access to their homes and personal belongings. Except upon order of government authority (e.g., court, administrative agency) having jurisdiction, or upon written consent by your Customer, you agree that you shall not publish, disseminate or disclose, for your own benefit or the benefit of any third party, any confidential information regarding your Customer, including addresses, telephone numbers and/or financial information. You further agree not to engage in any activity which violates the privacy of any Customers, including, but not limited to, taking unauthorized photographs or making unauthorized audio or video recordings of your Customers or his or her homes or personal belongings, or publishing, disseminating or disclosing any such photographs or recordings. You acknowledge that your failure to comply with the foregoing shall constitute a material breach of this Agreement.</p>

                                <p><strong>27. Disclaimer of Warranties</strong></p>

                                <p>You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the WooF! Platform will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT (INCLUDING MOBILE DEVICES), COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WOOF! PLATFORM OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WOOF! PLATFORM LINKED TO IT.

                                <br/><br/>

                                YOUR USE OF THE WOOF! PLATFORM, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM IS AT YOUR OWN RISK. THE WOOF! PLATFORM, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER WOOF! NOR ANY PERSON ASSOCIATED WITH WOOF! MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WOOF! PLATFORM. WITHOUT LIMITING THE FOREGOING, NEITHER WOOF! NOR ANYONE ASSOCIATED WITH WOOF! REPRESENTS OR WARRANTS THAT THE WOOF! PLATFORM, ITS CONTENT OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WOOF! PLATFORM OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.

                                <br/><br/>
                                
                                WOOF! HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR PARTICULAR PURPOSE.

                                <br/><br/>
                                
                                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

                                <p><strong>28. Limitation on Liability</strong></p>

                                <p>IN NO EVENT WILL WOOF!, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PET SPECIALISTS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WOOF! PLATFORM, ANY WOOF! PLATFORMS LINKED TO IT, ANY CONTENT ON THE WOOF! PLATFORM OR SUCH OTHER WOOF! PLATFORMS OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WOOF! PLATFORM OR SUCH OTHER WOOF! PLATFORMS, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.

                                <br/><br/>

                                THE AGGREGATE LIABILITY OF WOOF!, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PET SPECIALISTS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE WOOF! PLATFORM OR OTHERWISE UNDER THESE TERMS OF USE, WHETHER IN CONTRACT, TORT, OR OTHERWISE, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, IS LIMITED TO THE GREATER OF: (A) THE AMOUNT YOU PAID TO WOOF! FOR ACCESS TO AND USE OF WOOF! PLATFORM IN THE 12 MONTHS PRIOR TO THE EVENT(S) GIVING RISE TO CLAIM; OR (B) $100.

                                <br/><br/>
                                
                                THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW. EACH PROVISION OF THESE TERMS OF USE THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS OF USE. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS OF USE. THE LIMITATIONS IN THIS SECTION 28 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>

                                <p><strong>29. Indemnification</strong></p>

                                <p>You agree to defend, indemnify and hold harmless WooF!, its affiliates, licensors and service Pet Specialists, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising out of or relating to your violation of this Agreement or your use of the WooF! Platform, including, but not limited to, any use of the WooF! Platform's content, services and products other than as expressly authorized in this Agreement or your use of any information obtained from the WooF! Platform.</p>

                                <p><strong>30. Dispute Resolution; Arbitration of Claims</strong></p>

                                <p>Generally, in the interest of resolving disputes between you and WooF! in the most expedient and cost effective manner, YOU AND WOOF! MUTUALLY AGREE THAT EVERY DISPUTE ARISING IN CONNECTION WITH THIS AGREEMENT WILL BE RESOLVED BY BINDING ARBITRATION. Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. This agreement to arbitrate disputes includes all claims arising out of or relating to any aspect of this Agreement, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of this Agreement. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND WOOF! ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.

                                <br/><br/>

                                a. Exceptions. Nothing in this Agreement will be deemed to waive, preclude, or otherwise limit the right of either party to: (i) bring an individual action in small claims court; (ii) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (iii) seek injunctive relief in a court of law; or (iv) to file suit in a court of law to address an intellectual property infringement claim.

                                <br/><br/>
                                
                                b. Arbitrator. Any arbitration between you and WooF! will be settled under the Federal Arbitration Act, and governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, "AAA Rules") of the American Arbitration Association ("AAA"), as modified by this Agreement, and will be administered by the AAA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting WooF!.

                                <br/><br/>
                                
                                c. Notice; Process. A party who intends to seek arbitration must first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal Express (signature required) or, only if that other party has not provided a current physical address, then by electronic mail ("Notice"). WooF!'s address for Notice is: WooF! Inc. 5701 E 8th Ave Apt 121 Denver, Colorado 80220, Attn: Legal Department. The Notice must: (i) describe the nature and basis of the claim or dispute; and (ii) set forth the specific relief sought ("Demand"). The parties will make good faith efforts to resolve the claim directly, but if the parties do not reach an agreement to do so within 30 days after the Notice is received, you or WooF! may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or WooF! must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. If the dispute is finally resolved through arbitration in your favor, WooF! will pay you the highest of the following: (i) the amount awarded by the arbitrator, if any; (ii) the last written settlement amount offered by WooF! in settlement of the dispute prior to the arbitrator's award; or (iii) $1,000.

                                <br/><br/>
                                
                                d. Fees. If you commence arbitration in accordance with this Agreement, WooF! will reimburse you for your payment of the filing fee, unless your claim is for more than $10,000, in which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearing will take place at a location to be agreed upon in Denver County Colorado, but if the claim is for $10,000 or less, you may choose whether the arbitration will be conducted: (i) solely based on documents submitted to the arbitrator; (ii) through a non-appearance based telephone hearing; or (iii) by an in-person hearing as established by the AAA Rules in the county (or parish) of your billing address. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In that case, you agree to reimburse WooF! for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator's ruling on the merits.

                                <br/><br/>
                                
                                e. No Class Actions. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, YOU AND WOOF! AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and WooF! agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding, to the fullest extent permitted under applicable law.

                                <br/><br/>
                                
                                f. Modifications to this Arbitration Provision. If WooF! makes any future change to this arbitration provision, other than a change to WooF!'s address for Notice, you may reject the change by sending us written notice within 30 days of the change to WooF!'s address for Notice, in which case your account with WooF! will be immediately terminated and this arbitration provision, as in effect immediately prior to the changes you rejected will survive.

                                <br/><br/>
                                
                                g. Enforceability. If any part of this section is found to be unenforceable, then the entirety of this section will be null and void and, in that case, the parties agree that the exclusive jurisdiction and venue described in this Agreement will govern any action arising out of or related to this Agreement. The arbitrator has exclusive authority to resolve any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement.

                                <br/><br/>
                                
                                h. Pet Specialist Opt-Out of Arbitration. For Pet Specialists, arbitration is not a mandatory condition of this Agreement with respect to any dispute or claims brought by WooF! against a Pet Specialist, or for disputes or claims brought by a Pet Specialist against WooF! that: (i) are based on an alleged employment relationship between WooF! and a Pet Specialist; (ii) arise out of, or relate to, WooF!’s actual deactivation or suspension of a Pet Specialist account or a threat by WooF! to deactivate or suspend a Pet Specialist account; (iii) arise out of, or relate to, WooF!’s actual termination of a Pet Specialist’s Agreement with WooF! ,or a threat by WooF! to terminate a Pet Specialist’s Agreement; or (iv) arise out of, or relate to, Job Fees (as defined in this Agreement, including WooF!’s Use Fee or tips, other than disputes relating to referral bonuses, other WooF! promotions, or consumer-type disputes (the subset of Claims in subsections (i)-(iv) shall be collectively referred to as “Pet Specialist Claims”).

                                <br/><br/>
                                
                                If you do not want to be subject to this Dispute Resolution provision with respect to Pet Specialist Claims, you may opt out by notifying the Company in writing of your decision, either by sending, within thirty (30) days of the date you receive this Agreement, (1) an electronic mail to support@thewoofapp.com, stating clearly your name and intent to opt out of this Dispute Resolution provision or (2) by sending a letter by U.S. Mail, or by any nationally recognized delivery service (e.g., UPS, Federal Express, etc.), or by hand delivery to: Legal Department, WooF! Inc. 5701 E 8th Ave Apt 121 Denver, Colorado 80220. To be effective, the letter under option (2) must clearly indicate your intent to opt out of this Dispute Resolution Provision, and must be dated and signed. If hand delivered, the signed letter must be received within thirty (30) days of your receipt of this Agreement. If sent my mail, the letter must be post-marked with a date less than thirty (30) days from the date you receive this Agreement. Should you choose not to opt out of this Dispute Resolution Provision within the 30-day period, you and the Company will be bound by the terms of this Dispute Resolution Provision. You have the right to consult with counsel of your choice concerning this Dispute Resolution Provision. You understand that you will not be subject to retaliation if you exercise your right to opt out of coverage under this Dispute Resolution Provision.</p>

                                <p><strong>31. Governing Law; Jurisdiction</strong></p>

                                <p>Except as set forth in Section 30 entitled "Dispute Resolution; Arbitration of Claims", this Agreement is governed and interpreted pursuant to the laws of the State of Colorado, United States of America, notwithstanding any principles of conflict of law. For all disputes, not subject to arbitration under Section 30 hereof, you agree to submit to the personal jurisdiction and venue of the courts located within Denver County, Colorado, and waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</p>

                                <p><strong>32. Waiver and Severability</strong></p>

                                <p>No waiver by WooF! of any term or condition set forth in this Agreement shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of WooF! to assert a right or provision under this Agreement shall not constitute a waiver of such right or provision.

                                <br/><br/>

                                If any provision of this Agreement is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of this Agreement will continue in full force and effect.</p>

                                <p><strong>33. Development and Testing</strong></p>

                                <p>For purposes of developing and testing the WooF! Platform, on occasion a WooF! representative may schedule or perform Services on the WooF! Platform within the Denver market. On such occasions, the contract for such Service shall between WooF! and such User and shall be governed by the applicable terms of this Agreement, including, but not limited, to Section 30 above.</p>

                                <p><strong>34. Entire Agreement</strong></p>

                                <p>These Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and WooF! with respect to the WooF! Platform and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to the WooF! Platform.</p>

                                <p><strong>35. Assignment</strong></p>

                                <p>This Agreement may not be assigned or transferred by you without WooF!'s prior written consent. You agree that this Agreement and all incorporated agreements may be automatically assigned by WooF!, in our sole discretion, in accordance with the "Notice" section of this Agreement.</p>

                                <p><strong>36. No Agency</strong></p>

                                <p>You and WooF! are independent contractors, and no agency, partnership, joint venture, employer-employee, contractor-subcontractor, or franchisor-franchisee relationship is intended or created by this Agreement.</p>

                                <p><strong>37. Comments and Concerns</strong></p>

                                <p>All other feedback, comments, requests for technical support and other communications relating to the WooF! Platform should be directed to: support@thewoofapp.com.</p>

                                <p><strong>38. Notice Regarding Apple</strong></p>

                                <p>If you are using our mobile applications on an iOS device, the terms of this Section 38 apply. You acknowledge that these Terms of Use are between you and WooF! only, not with Apple, and Apple is not responsible for the WooF! Platform or its content. Apple has no obligation to furnish any maintenance or support services with respect to the WooF! Platform. If the WooF! Platform fails to conform to any applicable warranty, you may notify Apple and Apple will refund any applicable purchase price for the mobile application to you; and, to the maximum extent permitted by applicable law, Apple has no other warranty obligation with respect to the WooF! Platform. Apple is not responsible for addressing any claim by you or any third party relating to the Service or your possession or use of the WooF! Platform, including: (a) product liability claims; (b) any claim that the WooF! Platform fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection or similar legislation.

                                <br/><br/>

                                Apple is not responsible for the investigation, defense, settlement, or discharge of any third party claim that the WooF! Platform or your possession and use of the mobile application infringe that third party's intellectual property rights. You agree to comply with any applicable third party terms when using the WooF! Platform. Apple and Apple's subsidiaries are third party beneficiaries of Section 38 of these Terms of Use, and upon your acceptance of these Terms of Use, Apple will have the right (and will be deemed to have accepted the right) to enforce this Section 38 of these Terms of Use against you. You hereby represent and warrant that: (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.</p>

                                <p><strong>39. Notices</strong></p>

                                <p>Except as explicitly stated otherwise, any notice to WooF! shall be given by certified mail, postage prepaid and return receipt requested to:

                                <br/><br/>

                                WooF! Inc.<br/>
                                5701 E 8th Ave Apt. 121 Denver, Colorado 80220 Attn: Legal

                                <br/><br/>
                                
                                Such notices shall be deemed given three days after the date of mailing. Any notices to you shall be provided to you through the WooF! Platform or given to you via the email address you provided to WooF! during the registration process or as otherwise listed in your User or Pet Specialist account, and such notice shall be deemed given immediately upon sending. Alternatively, we may give you notice by certified mail, postage prepaid and return receipt requested, to the address provided to WooF! during the registration process. In such case, notice shall be deemed given three days after the date of mailing.

                                <br/><br/>
                                
                                I HEREBY ACKNOWLEDGE THAT I HAVE READ AND UNDERSTAND THE FOREGOING TERMS OF USE AND PRIVACY POLICY, AND AGREE THAT MY USE OF THE WOOF! PLATFORM IS AN ACKNOWLEDGMENT OF MY AGREEMENT TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>
                                
            			    </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default TermsPage;
