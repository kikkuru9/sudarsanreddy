import AboutComponent from "./about";
import ContactComponent from "./contact";
import FooterComponent from "./footer";
import HomeComponent from "./home";
import SkillComponent from "./skills";
import WorkComponent from "./work";

function Menucomponent(){
    return(
        <div data-aos="fade-down"  style={{backgroundColor:'black'}} id='menu'>
<nav  class="navbar navbar-expand-lg bg-body-dark" style={{color: "white",padding:'1%'}}>
                <div class="container-fluid">
                  <a class="navbar-brand" style={{color: "white",fontFamily:"monospace",fontWeight: "bold",fontSize:'20px'}} href="#footer">Sudarsan Reddy</a>
                  <button class="navbar-toggler" style={{backgroundColor:'white',margin:"10px"}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav nav-underline">
                      <li class="nav-item">
                        <a class="nav-link" style={{color: "white", fontWeight: "500",fontSize:'20px',display:'inline-block'}} href="#home">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" style={{color: "white", fontWeight: "500",fontSize:'20px',display:'inline-block'}} href="#about">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" style={{color: "white", fontWeight: "500",fontSize:'20px',display:'inline-block'}} href="#skills">Skills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" style={{color: "white", fontWeight: "500",fontSize:'20px',display:'inline-block'}} href="#work">Work</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" style={{color: "white", fontWeight: "500",fontSize:'20px',display:'inline-block'}} href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <HomeComponent/>
              <AboutComponent/>
              <SkillComponent/>
              <WorkComponent/>
              <ContactComponent/>
              <FooterComponent/>
        </div>
    )
}
export default Menucomponent;