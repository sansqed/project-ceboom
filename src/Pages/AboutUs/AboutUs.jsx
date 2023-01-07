import "./AboutUs.css"


const AboutUs = ({ children }) => {

  return(

    <div className="AboutUs">
      
      <div className="Header">
        <div className="nav-bar" align="right">
          <a href="/">Home</a>
          <a1 href="/about">About</a1>
          <a href="/login">Login</a>
        </div>
        <div className="nav-logo"></div>
        
        <h1 align="left">ABOUT</h1>
          <p align="left">
            Insert what project CEBOOM is about.
          </p>
      </div>

      <div className="TeamSection">
        <div className="team-pic"></div>
        <div className="team-content">
          <h4 align="left">WHO WE ARE</h4>
          <h2 align="left">
            THEORY TO ‘REAL WORLD’: 3RD-
            YEAR BSCS STUDENTS OF UP CEBU 
            TRAVELS OUT OF THEIR COMFORT 
            ZONE, DEVELOPS CEBOOM
          </h2>
            <p align="left">
            As part of their CMSC-142 course requirement, third year Blocks A and B 
            of computer science students applied their theory-rich minds to a more 
            real-world applicable software solution, CEBOOM. 
            </p>
            <p align="left">
            Insert more... 
            </p>
          
          {/*insert fast&furious thingy*/}
          <div className=""></div>
        </div>
      </div>
      
    {/*insert 2nd half of page*/}   
     
    </div>
    
  )
}

export default AboutUs;