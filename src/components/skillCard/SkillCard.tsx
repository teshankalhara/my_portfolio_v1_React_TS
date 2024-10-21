import SkillCardType from "../../types/skillCardType/SkillCardType"

const SkillCard = (skillCard: SkillCardType) => {
    return (
        <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group "+skillCard.classes}>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <img src={skillCard.imgSrc} width={32} height={32} alt={skillCard.label} />
            </figure>
            <div className="">
                <h3>
                    {skillCard.label}
                </h3>
                <p className="text-zinc-400 text-sm">
                    {skillCard.desc}
                </p>
            </div>
        </div>
    )
}

export default SkillCard
