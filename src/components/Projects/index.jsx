import { projects } from "../../data/projects";
import style from "./style.module.scss";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className="container" id="projects">
            <div className={style.bigBox}>
                <div className={style.info}>
                    <p className="specialText">Projects</p>
                    <h2 className="title-2">My Projects</h2>
                </div>
                <div className={style.boxProjects}>
                    <ul>
                        <div className={style.project}>
                            {projects.map(project => {
                                return (
                                    <ProjectCard
                                        key={project.id}
                                        name={project.name}
                                        description={project.description}
                                        site={project.site}
                                        img={project.img}
                                        technologies={project.technologies}
                                    />)
                            }
                            )}
                        </div>
                    </ul>
                </div>
            </div >
        </section >
    )
}