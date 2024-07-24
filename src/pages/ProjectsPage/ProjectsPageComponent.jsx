import React from "react";
import filmin from "/src/assets/Imagenes/filmin.webp" 
import filmin2 from "/src/assets/Imagenes/filmin2.webp" 
import nexiad from "/src/assets/Imagenes/nexiad.webp" 



const ProjectsPageComponent = () => {
  return (
    <div id="projects-container">
 
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        >
        <h3>PROJECTS</h3>
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            < img className="w-100 foto"  src={filmin} alt="First slide" />
            <div class="carousel-caption  d-md-block">
              <h5>Filmax </h5>
              <p>
              replica of page layout about cinema</p>
              <a href="https://github.com/josemessa/proyecto-filmax">Watch my code!</a>

            </div>
          </div>
          <div class="carousel-item">
            < img className="w-100 foto"
             src={nexiad} 
              
              alt="Second slide"
            />
            <div class="carousel-caption  d-md-block">
              <h5>NEXIAD WEBADMIN</h5>
              <p>User management dashboard</p>
              <a href="https://github.com/josemessa/proyecto-filmax">Watch my code!</a>


            </div>
          </div>
          <div class="carousel-item">
            < img className="w-100 foto" src={filmin2} alt="Third slide" />
            <div class="carousel-caption  d-md-block">
              <h5>BILLBOARD</h5>
              <p>your favourite cinema billboard</p>
              <a href="https://github.com/josemessa/proyecto-filmax">Watch my code!</a>

            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPageComponent;
