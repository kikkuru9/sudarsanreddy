function HomeComponent(){
    return(
        <div data-aos="zoom-in-up" id='home'>
            <div class=" mb-3" style={{maxWidth:"1540px",marginTop:'3%'}} >
                <div class="row g-0">
                  
                  
                  <div class="col-md-6" data-aos="fade-up"  >
                    <img src='pic.jpg' class="img-fluid  float" id="himg" style={{width: "450px",borderRadius: "50%",padding:"10%", height: "390px"}} alt="..."/>
                  </div>
                  <div class="col-md-6" style={{textAlign: "center"}}>
                    <div class="card-body" style={{color:'white',marginTop:'15%'}}>
                      <h4 class="card-title">Hi,</h4>
                      <h4 class="card-text">I'am<span style={{color: "blueviolet"}}> Sudarsan Reddy</span></h4>
                      <marquee behavior="scroll" width="30%" direction="left" scrollamount="5">
                      <h4 class="card-text">Frontend Developer, Web Designer, Ui Developer</h4><br></br>
</marquee><br></br>
                      <a href="venkatasudarsanreddy.pdf" style={{backgroundColor: "black", borderRadius: "25px", color: "aliceblue", textDecoration: "none", padding: "10px",border:'solid white 2px',fontWeight:'600',marginLeft:'-5%'}}>Resume</a><br></br>
                    </div>
                  </div>
                </div>
              </div>

        </div>
    )
}
export default HomeComponent;