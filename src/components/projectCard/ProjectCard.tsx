import ProjectCardType from "../../types/projectCardType/ProjectCardType"

const ProjectCard = (projectCard: ProjectCardType) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg:zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + projectCard.classes}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img src={projectCard.imgSrc} alt={projectCard.title} className="img-cover" />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div className="">
                    <h3 className="title-1 mb-3">
                        {projectCard.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2">
                        {projectCard.tags?.map((tag, key) => {
                            return (
                                <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                    {tag}
                                </span>
                            )
                        })}

                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text text-zinc-950 shrink-0">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        arrow_outward_
                    </span>
                </div>
            </div>
            <a href={projectCard.projectLink} target="_blank" className=" absolute inset-0">
            </a>
        </div>
    )
}

export default ProjectCard