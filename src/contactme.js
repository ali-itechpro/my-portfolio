import React, {Component} from 'react'

class ContactMe extends Component{

    render(){
        return(
            <React.Fragment>
                    <div className="bg-primary mt-3 page-headings">
                   Contact
                </div>

                <div className="page-content mt-3 mb-3">
                        <p className="mt-3 display-6">
                            Contact
                          
                        </p>
                        <hr />
                        <div className="display-8">
                               <ul>
                                    <li>Contact: <a href="tel:+61 04310 75716">+61 04310 75716</a></li>
                                   <li>Email: <a href="mailto:ali.itechpro@gmail.com">ali.itechpro@gmail.com</a></li>
                                   <li><i className="fab fa-linkedin"></i>Profile: <a href="http://www.linkedin.com/in/ali-webmobile" target="_blank">LinkedIn Profile</a></li>
                               </ul>
                            </div>
                    </div>
            
            </React.Fragment>
        )
    }
}

export default ContactMe