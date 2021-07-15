import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import "./css/bootstrap.css";
import "./css/custom.css";

import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import ContactMe from "./contactme";
import NotFound from "./notfound";
import ProfilePic from './images/mypic2.jpg'

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 bg-left-pnl pnl-left">
                <div className="img-portfolio-frame mt-4 mb-3">
                  <img src={ProfilePic} className="img-portfolio" alt="Profile"></img>
                </div>
                <div className="display-6 text-center">Asghar Ali Mohammed</div>
                <hr />

                <div className="main-menu mb-5">
                  <ul>
                    <li>
                      <NavLink exact to="/" className="btn btn-primary btn-left-menu" activeClassName="btn-primary-active">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/experience" 
                        className="btn btn-primary btn-left-menu" activeClassName="btn-primary-active">
                        Experience
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact
                        to="/projects" 
                        className="btn btn-primary btn-left-menu" activeClassName="btn-primary-active">
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/skills"
                        className="btn btn-primary btn-left-menu" activeClassName="btn-primary-active">
                        Skills
                      </NavLink>
                    </li>
                   
                    <li>
                      <a 
                        href="download/profile.pdf" target="_blank"
                        className="btn btn-primary btn-left-menu">
                        Download Resume
                      </a>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="btn btn-primary btn-left-menu" activeClassName="btn-primary-active">
                        Contact Me
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* right panel starts from here  */}
              <div className="col-md-9 col-sm-6 bg-right-pnl">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/contact" component={ContactMe} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
