  function Navbar(){
      return(
          <nav className="flex w-[100%]">
              <div className="w-[20%]">
                  <span className="font-bold">khushi</span>
                  </div>
                  <div className="w-[50%]">
                      <ul className="flex gap-x-10 items-end">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                      </ul>
                  </div>
                  <div className="w-[30%]">
                    <button className="px-4 py-2 bg-primary rounded-md text-white">React</button>

                  </div>
             
          </nav>
      )
  }

  export default Navbar;