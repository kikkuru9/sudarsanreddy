function AboutComponent(){
    return(
        <div data-aos="fade-up" id='about'><br></br>
         <h3 style={{color: "blueviolet"}}><u>About Me</u></h3><br></br>
            <div class=" mb-3" data-aos="fade-up" style={{maxWidth:"1540px",marginTop:'-20%',margin:'5%'}} >
           
                <div class="row g-0">
                
                  
                  <div data-aos="fade-up" class="col-md-4">
                    <img src='img.png' class="img-fluid  float" style={{width: "500px",padding:"10px", height: "500px",marginTop:'-35%'}} alt="..."/>
                  </div>
                  <br></br>
                  <div data-aos="zoom-in-up" class="col-md-8 " style={{textAlign: "left",marginTop:'-9%',fontSize:'18px',padding:'5%'}}>
                  
                          
                          <p class="card-text" style={{textAlign: "left",color:'white',fontSize:'20px'}}><small class="text-body-light">Frontend developer involes Building responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.
                            Collaborating with design teams to translate wireframes and mockups into functional web pages.
                            Learning and implementing frontend frameworks like React.js, Angular, or Vue.js.<br></br>
                            
                            Testing and debugging code to identify and fix issues for optimal performance.
                            Incorporating UI/UX design principles to create intuitive and user-friendly experiences.
                            Participating in code reviews and seeking feedback to improve coding skills.
                            Working with version control systems like Git for code management and collaboration.
                            Demonstrating eagerness to learn new technologies and stay updated with industry trends.
                            Contributing to a collaborative and innovative team environment while continuously improving coding proficiency.</small></p><br></br>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default AboutComponent;