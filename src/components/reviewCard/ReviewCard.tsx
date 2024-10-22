import ReviewType from "../../types/reviewType/ReviewType"

const ratings = new Array(5)
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
})

const ReviewCard = (reviewType: ReviewType) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-1 mb-3">
                {ratings.map((rate, key) => {
                    return (
                        <span key={key} className="material-symbols-rounded text-yellow-300 text-[18px]">
                            {rate.icon}
                        </span>
                    )
                })}
            </div>
            <p className="text-zinc-400 mb-8">
                {reviewType.content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className="">
                    <img src={reviewType.imgSrc} alt={reviewType.name} width={44} height={44} loading='lazy'className="rounded-lg" />
                </figure>
                <div>
                    <p>
                        {reviewType.name}
                    </p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {reviewType.company}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard