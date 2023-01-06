import "./AboutUs.css"
import "./Sections.css"


import Airport from '../../Assets/icons/Airport.png'
import Bar from '../../Assets/icons/Bar.png'
import BarangayHall from '../../Assets/icons/BarangayHall.png'
import BusStation from '../../Assets/icons/BusStation.png'

import Cemetery from '../../Assets/icons/Cemetery.png'
import Church from '../../Assets/icons/Church.png'
import CityHall from '../../Assets/icons/CityHall.png'
import FireStation from '../../Assets/icons/FireStation.png'

import HealthCenter from '../../Assets/icons/HealthCenter.png'
import Hospital from '../../Assets/icons/Hospital.png'
import MallDepartment from '../../Assets/icons/MallDepartment.png'
import MunicipalHall from '../../Assets/icons/MunicipalHall.png'

import Port from '../../Assets/icons/Port.png'
import PublicMarket from '../../Assets/icons/PublicMarket.png'
import Restaurant from '../../Assets/icons/Restaurant.png'
import School from '../../Assets/icons/School.png'

import Temple from '../../Assets/icons/Temple.png'
import TouristSpot from '../../Assets/icons/TouristSpot.png'



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
        </div>
      </div>
      
      <div className = "IndicatorSection">

        <div className = "LookingHeader">
          LOOKING FOR YOUR WAY AROUND?
        </div>

        <div className = "LookingDescription">
          Easily navigate the Queen City of the South through these indicators:

        </div>

        {/* Row #1 */}
        <div className = "FirstRow">

          {/* Airport */}
          <div className = "Column">

            <img class = "logo" src = {Airport} alt = "Airport Logo"/>
          
            <div className = "IndicatorTitle">Airport</div>

            <div className = "IndicatorDescription">
              Got a flight? Pin the nearest airport and locate the most
              efficient route for you.
            </div>

          </div>

          {/* Bar */}
          <div className = "Column">

            <img class = "logo" src = {Bar} alt = "Bar Logo"/>
          
            <div className = "IndicatorTitle">Bar</div>

            <div className = "IndicatorDescription">
              Want to have fun? Go wild and meet new people.
            </div>

          </div>

          {/* Barangay Hall */}
          <div className = "Column">

            <img class = "logo" src = {BarangayHall} alt = "BarangayHall Logo"/>
          
            <div className = "IndicatorTitle">Barangay Hall</div>

            <div className = "IndicatorDescription">
              Easily navigate to find Barangay authorities near you.
            </div>

          </div>

          {/* Bus Station */}
          <div className = "Column">

            <img class = "logo" src = {BusStation} alt = "BusStation Logo"/>
          
            <div className = "IndicatorTitle">Bus Station</div>

            <div className = "IndicatorDescription">
              Want to explore the city? take the bus for a journey.
            </div>

          </div>
         

        </div>

        {/* Row #2 */}
        <div className = "SecondRow">


          {/* Cemetery */}
          <div className = "Column">

            <img class = "logo" src = {Cemetery} alt = "Cemetery Logo"/>
          
            <div className = "IndicatorTitle">Cemetery</div>

            <div className = "IndicatorDescription">
              Visit departed loved ones.
            </div>

          </div>

          {/* Church */}
          <div className = "Column">

            <img class = "logo" src = {Church} alt = "Church Logo"/>
          
            <div className = "IndicatorTitle">Church</div>

            <div className = "IndicatorDescription">
              Visit religious sites and experience the passionate Cebuano religious spirits.
            </div>

          </div>

          {/* City Hall */}
          <div className = "Column">

            <img class = "logo" src = {CityHall} alt = "CityHall Logo"/>
          
            <div className = "IndicatorTitle">City Hall</div>

            <div className = "IndicatorDescription">
              Visit LGU offices responsible for implementing government services.
            </div>

          </div>

          {/* Fire Station */}
          <div className = "Column">

            <img class = "logo" src = {FireStation} alt = "FireStation Logo"/>
          
            <div className = "IndicatorTitle">Fire Station</div>

            <div className = "IndicatorDescription">
              Fire emergencies? Don't hesitate to contact and go to the nearest fire station.
            </div>

          </div>


        </div>

        {/* Row #3 */}
        <div className = "ThirdRow">

          {/* Health Center */}
          <div className = "Column">

            <img class = "logo" src = {HealthCenter} alt = "HealthCenter Logo"/>
          
            <div className = "IndicatorTitle">Health Center</div>

            <div className = "IndicatorDescription">
              Want to do a health check? Go to the nearest health center.
            </div>

          </div>

          {/* Hospital */}
          <div className = "Column">

            <img class = "logo" src = {Hospital} alt = "Hospital Logo"/>
          
            <div className = "IndicatorTitle">Hospital</div>

            <div className = "IndicatorDescription">
              Got a health emergency? Visit the hospital near you.
            </div>

          </div>

          {/* Mall Department Store */}
          <div className = "Column">

            <img class = "logo" src = {MallDepartment} alt = "MallDepartment Logo"/>
          
            <div className = "IndicatorTitleVersion2 IndicatorTitle">Mall Department Store</div>

            <div className = "IndicatorDescription">
              Shopping spree? Go all out and buy everything you need.
            </div>

          </div>

          {/* Municipal Hall*/}
          <div className = "Column">

            <img class = "logo" src = {MunicipalHall} alt = "MunicipalHall Logo"/>
          
            <div className = "IndicatorTitle">Municipal Hall</div>

            <div className = "IndicatorDescription">
              Visit LGU offices near you.
            </div>

          </div>
        </div>

        {/* Row #4 */}
        <div className = "FourthRow">

          {/* Port */}
          <div className = "Column">

            <img class = "logo" src = {Port} alt = "Port Logo"/>
          
            <div className = "IndicatorTitle">Port</div>

            <div className = "IndicatorDescription">
              Any sea travels in mind? Visit the nearest Port near you.
            </div>

          </div>

          {/* Public Market */}
          <div className = "Column">

            <img class = "logo" src = {PublicMarket} alt = "PublicMarket Logo"/>
          
            <div className = "IndicatorTitle">Public Market</div>

            <div className = "IndicatorDescription">
             Experience local tradings by visiting the nearest public market near you.
            </div>

          </div>

          {/* Restaurant */}
          <div className = "Column">

            <img class = "logo" src = {Restaurant} alt = "Restaurant Logo"/>
          
            <div className = "IndicatorTitle">Restaurant</div>

            <div className = "IndicatorDescription">
              Experience the locale culture through food.
            </div>

          </div>

          {/* School */}
          <div className = "Column">

            <img class = "logo" src = {School} alt = "School Logo"/>
          
            <div className = "IndicatorTitle">School</div>

            <div className = "IndicatorDescription">
              Visit educational institution near you.
            </div>

          </div>
        </div>

        {/* Row #5 */}
        <div className = "FifthRow">

          {/* Temple */}
          <div className = "Column">

            <img class = "logo" src = {Temple} alt = "Temple Logo"/>

            <div className = "IndicatorTitle">Temple</div>

            <div className = "IndicatorDescription">
              Indulge into breathtaking views and spiritual journey.
            </div>

          </div>

          {/* Tourist Spot */}
          <div className = "Column">

            <img class = "logo" src = {TouristSpot} alt = "TouristSpot Logo"/>

            <div className = "IndicatorTitle">Tourist Spot</div>

            <div className = "IndicatorDescription">
              Experience the Queen City of the South through its majestic places.
            </div>

          </div>

        </div>

      </div>


      <div className = "Footer">

        <div className = "BlueRectangle"></div>
        <div className = "LandscapeBackground"></div>
        
        <div className = "RectangleContainer">
          <div className = "GrayRectangle">
            <div className = "WhiteRectangle"></div>
          </div>
        </div>

        <div className = "GroupText">
          
          <span className = "Text">

            <span>&quot;FIND YOUR WAY</span>
            <br></br>
            <span>AROUND THE</span>
            <br></br>
            <span>QUEEN CITY OF THE</span>
            <br></br>
            <span>SOUTH&quot;</span>
            <br></br>
    
          </span>
          
        </div>

        <div className = "CeboomLogo"></div>

        <div className = "BottomPart">
          <div className = "BottomLine"></div>
          <div className = "EndText"> ALL RIGHTS RESERVED - CEBOOM </div>
        </div>

        
      </div>

    </div>    
  )
}

export default AboutUs;