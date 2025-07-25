  import React from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
import { projectData } from "../data/Data";
  function Homes(){
  return(
      <React.Fragment>
          <div className="sticky top-0 z-50">
              <Navbar/>
          </div>
          <div className="min-h-screen flex flex-col">
              <div className="flex-grow">
                  <h1 className="text-red-800">Home Page</h1>
              </div>
              <Footer/>
          </div>
          <div>
      <span>Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
       {projectData.map((data)=> (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
                        <img
                            src={data.image}
                            alt={data.projectName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                projectname
                            </h3>
                            <p className="text-gray-600">
                                project type
                            </p>
                        </div>
                    </div>
       ))} 
      </div>
      </div>
      </React.Fragment>
       
  )
  }
  export default Homes;