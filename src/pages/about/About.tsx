import imgPro from '../../assets/img/imgPro.jpg'

const aboutItems = [
    {
        title: 'Project done',
        count: '11'
    },
    {
        title: 'Years of experience',
        count: '3'
    }
];

const About = () => {
    return (
        <div id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m <b>Teshan</b>, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map((item, key) => {
                            return (
                                <div key={key}>
                                    <div className="flex items-center justify-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">
                                            {item.count}
                                        </span>
                                        <span className="text-sky-400 font-semibold md:text-4xl ml-1">
                                            +
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-400">
                                        {item.title}
                                    </p>
                                </div>
                            )
                        })}
                        <img src={imgPro} alt='logo' width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px] rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
