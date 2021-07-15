import React, {Component} from 'react'
import Axios from 'axios'

class Projects extends Component{

  constructor(props){
    super(props);

    this.state={
      data:[]
    }
  }

  componentDidMount(){

    Axios.get("projects.json")
    //Axios.get("data.json")
    .then(result=>{
      this.setState({
        data:result.data
      })
    })


  }

    render(){
      
      console.log(this.state.data.projects)
        return(
            <React.Fragment>
                  <div className="bg-primary mt-3 page-headings">
                    Projects
                </div>
                <div className="row mt-3" style={{display:'none'}}>
                <div className="col">
                    <a href="#" className="btn btn-info btn-radius btn-block">Web Projects</a>
                </div>
                <div className="col">
                        <a href="#" className="btn btn-info btn-radius btn-block">Mobile Projects</a>
                    </div>
                </div>
                    <div className="mt-4">
                     
                      
                    {
                   


                      this.state.data.map(data => {
                        let url3="";
                        if (data.url=="") {
                          url3="offline";
                         
                        } else {
                          //console.log(document.getElementById("alink").getAttributeNode());
                          url3=data.url;
                         
                        }
                        return(
                     
                            <div className="card mb-3" key={data.id}>
                                    <div className="row no-gutters">
                                      <div className="col-md-4">
                                    
                                      <a href={data.url} target="_blank">
                                        <img src={data.img} className="card-img" alt={data.imgAlt}/>
                                        </a>
                                      </div>
                                      <div className="col-md-8">
                                        <div className="card-body">
                                          <h5 className="card-title text-primary display-8"><span className="font-weight-bolder text-dark display-8">Project</span>:<a id="alink" href={url3} target="_blank" className="text-info font-weight-bolder">{url3}</a></h5>
                                           
                                         <a href={data.url2} target="_blank" className="text-info font-weight-bolder"> {data.name2}</a>
                                          <div className="text-primary display-8"><span className="font-weight-bolder text-dark display-8">Name</span>:  {data.name}</div>
                                          <p className="display-8"><span className="font-weight-bolder text-dark display-8">Details</span>:{data.details}</p>
                                          <div className="display-8"><span className="font-weight-bolder text-dark display-8">Company</span>:  {data.company}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  // <div className="card mb-3">
                                  //       <div className="row no-gutters">
                                  //         <div className="col-md-4">
                                  //           <img src="images/download.jpg" className="card-img" alt="..."/>
                                  //         </div>
                                  //         <div className="col-md-8">
                                  //           <div className="card-body">
                                  //             <h5 className="card-title text-primary display-8"><span className="font-weight-bolder text-dark display-8">Project</span>: King Abdulaziz Public Library Web Application</h5>
                                  //             <p className="display-8"><span className="font-weight-bolder text-dark display-8">Details</span>:Project description Project descriptionProject descriptionProject descriptionProject description</p>
                                  //             <a href="#" target="_blank" className="text-info">http://www.google.com</a>
                                  //           </div> 
                                  //         </div>
                                  //       </div>
                                  //     </div>

                                  //     <div className="card mb-3">
                                  //           <div className="row no-gutters">
                                  //             <div className="col-md-4">
                                  //               <img src="images/download.jpg" className="card-img" alt="..."/>
                                  //             </div>
                                  //             <div className="col-md-8">
                                  //               <div className="card-body">
                                  //                 <h5 className="card-title text-primary display-8"><span className="font-weight-bolder text-dark display-8">Project</span>: King Abdulaziz Public Library Web Application</h5>
                                  //                 <p className="display-8"><span className="font-weight-bolder text-dark display-8">Details</span>:Project description Project descriptionProject descriptionProject descriptionProject description</p>
                                  //                 <a href="#" target="_blank" className="text-info">http://www.google.com</a>
                                  //               </div>
                                  //             </div>
                                  //           </div>
                                  //         </div>

                                  //         <div className="card mb-3">
                                  //               <div className="row no-gutters">
                                  //                 <div className="col-md-4">
                                  //                   <img src="images/download.jpg" className="card-img" alt="..."/>
                                  //                 </div>
                                  //                 <div className="col-md-8">
                                  //                   <div className="card-body">
                                  //                     <h5 className="card-title text-primary display-8"><span className="font-weight-bolder text-dark display-8">Project</span>: King Abdulaziz Public Library Web Application</h5>
                                  //                     <p className="display-8"><span className="font-weight-bolder text-dark display-8">Details</span>:Project description Project descriptionProject descriptionProject descriptionProject description</p>
                                  //                     <a href="#" target="_blank" className="text-info">http://www.google.com</a>
                                  //                   </div>
                                  //                 </div>
                                  //               </div>
                                  //             </div>

                                  //             <div className="card mb-3">
                                  //                   <div className="row no-gutters">
                                  //                     <div className="col-md-4">
                                  //                       <img src="images/download.jpg" className="card-img" alt="..."/>
                                  //                     </div>
                                  //                     <div className="col-md-8">
                                  //                       <div className="card-body">
                                  //                         <h5 className="card-title text-primary display-8"><span className="font-weight-bolder text-dark display-8">Project</span>: King Abdulaziz Public Library Web Application</h5>
                                  //                         <p className="display-8"><span className="font-weight-bolder text-dark display-8">Details</span>:Project description Project descriptionProject descriptionProject descriptionProject description</p>
                                  //                         <a href="#" target="_blank" className="text-info">http://www.google.com</a>
                                  //                       </div>
                                  //                     </div>
                                  //                   </div>
                                  //                 </div>  
                                                  ) 
                                                   })
                                                  } 
                    </div>
                
            
            </React.Fragment>
        )
    }

}

export default Projects