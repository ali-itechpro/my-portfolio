import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import Axios from 'axios'
import { isRejected } from 'q';


class Home extends Component{

    constructor(props){
        super(props);

        this.state={
            data:[]
        }
    }

    // componentDidMount(){

    //     //Axios.get("data.json")
    //     Axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((result)=>{
    //         this.setState({
    //             data:result.data
    //         })
           
    //     } )

    // }

    render(){
       // console.log(this.state.data)
        return (
          <React.Fragment>
           
            <div className="bg-primary mt-3 page-headings">Home</div>

            <div className="page-content mt-3 mb-2">
              <p className="mt-3 display-6 text-center text-primary">Frontend Developer & UI Designer</p>
             
              <p className="display-8"></p>
              </div>

            <div className="page-content mt-3 mb-4">
              <p className="mt-3 display-6">About Me</p>
              <hr />
              <p className="display-8">
                Hi,
                <br />
                <br />I am Asghar Ali Mohammed,
                <span className="text-primary font-weight-bolder">
                  {" "}
                  Frontend Developer and UI Designer
                </span>
               
                <ul>
                  <li><strong>Frontend Development:</strong> Html/Html5, Css/Css3, Bootstrap, Javascript, Jquery, Ajax, React </li>
                  <li><strong>Backend Development:</strong> Asp Net MVC, .Net core, SQL Server, Entity Frameworks</li>
                  <li><strong>UI/UX:</strong> Adobe Photoshop, Adobe XD, Adobe Illustrator</li>
                 <NavLink exact
                        to="/skills" 
                        className="btn btn-link">
                      More details
                      </NavLink>
                </ul>
              </p>
              <p>
              <span className="text-primary font-weight-bolder">Last company: </span> <br/>
              <img src="images/icon-apod.png" alt="King Abdulaziz Public Library" style={{width: "110px", float: "left", height: "40px", margin: "20px 20px 0px 0px"}}></img>
                APOD(Australian Partners of Defence) at Adelaide, Australia. Contract from Sept 2019 to Nov 2019. <NavLink exact
                        to="/experience" 
                        className="btn btn-link">
                      More details...
                      </NavLink>
              </p>
              <br />
            </div>

            <div className="page-content mt-1 mb-4">
              <p className="mt-3 display-6">Achievements</p>
              <hr />
              <p className="display-8">
                <ul>
                  <li>  
                <span >
                Received Ibtekar award from assistant education Minister of Saudi Arabia, event year 2010. <a href="https://www.dropbox.com/s/kfjrabwti4amfz5/Ibtikar%20Award.jpg?dl=0" target="_blank" rel="noopener noreferrer">Click Here</a>
                
                </span></li>
                <li>  
                <span >
                Received farewell Award in Mawhiba company, year 2011. 
                </span></li>
                <li>Received appreciation/applause for working Non-stop 26 hours at Mawhiba company, year 2009.</li>
                </ul>
            
              </p>
            </div>


            <div className="page-content mt-1 mb-4">
              <p className="mt-3 display-6">Education</p>
              <hr />
              <p className="display-8">
                <ul>
                  <li>  
                <span className="text-primary font-weight-bolder">
                  Masters in Computer Application
                </span>{" "}
                from sikkim manipal University Distance Education.</li>
                <li>  
                <span className="text-primary font-weight-bolder">
                  Bachelors of Commerce (Computers)
                </span>{" "}
                from Osmania University.</li>
                </ul>
            
              </p>
            </div>
            <div className="page-content mt-1 mb-4">
              <p className="mt-3 display-6">Diploma's</p>
              <hr />
              <div className="display-8">
                <ul>
                  <li>Diploma in Web Designing</li>
                  <li>
                    Post Graduation Diploma in Computer Application
                    (PGDCA)
                  </li>
                  <li>Diploma in Dotnet Technologies</li>
                </ul>
              </div>
            </div>
            <div className="page-content mt-1 mb-4">
              <p className="mt-3 display-6">Certification</p>
              <hr />
              <div className="display-8">
                <ul>
                  <li>
                    MCP - Microsoft Certified Professional, Exam 528
                    Client Development. Year 2008
                    <br /> Access:{" "}
                    <a
                      href="https://mcp.microsoft.com/Anonymous//Transcript/Validate"
                      target="_blank"
                    >
                      Certificate
                    </a>
                    <br />
                    <span>
                      <em>
                        Transcript ID: 793067, access code: asgharali
                      </em>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Home