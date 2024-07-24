import React from "react";
import ContactBar from "../../Components/Contact-bar/ContactBar";
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import AboutMePageComponent from "../AboutMePage/AboutMePageComponent";
import FadeInOutComponent from "../../utils/FadeInComponent/FadeInOutComponent";
import IndexComponent from "../../Components/Index/IndexComponent";
import SkillsPageComponent from "../SkillsPage/SkillsPageComponent";
import ProjectsPageComponent from "../ProjectsPage/ProjectsPageComponent";

const IndexPageComponent = () => {
  return (
    <div>
      {/* COMPONENTES FIJOS */}
      <ContactBar />
      <NavBarComponent />
      {/* COMPONENTES SECCIONES */}
      <FadeInOutComponent>
        <IndexComponent />
      </FadeInOutComponent>
      <FadeInOutComponent>
        <AboutMePageComponent />
      </FadeInOutComponent>
      <FadeInOutComponent>
        <SkillsPageComponent />
      </FadeInOutComponent>
      <FadeInOutComponent>
        <ProjectsPageComponent />
      </FadeInOutComponent>
    </div>
  );
};

export default IndexPageComponent;
