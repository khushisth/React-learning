  import React from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
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
      </React.Fragment>
  )
  }
  export default Home;