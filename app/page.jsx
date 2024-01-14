import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData, ProjectData} from "../data/page-data";
import ProfessionalExperience from "./component/professional-experience";
import Projects from "./component/projects";

const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
            <Projects data={ProjectData}/>
		</div>
	);
};

export default page;