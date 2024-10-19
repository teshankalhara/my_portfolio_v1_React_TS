import imgPro from '../../assets/img/picPro.jpg'

const Hero = () => {
    return (
        <>
            <section id="home" className="pt-28 lg:pt-36">
                <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <figure className="img-box w-9 h-9 rounded-lg">
                                <img src={imgPro} width={40} height={40} alt="teshan_kalhara" className="img-cover" />
                            </figure>
                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400"></span>
                                </span>
                                Available for work
                            </div>
                        </div>
                        <h2 className="">
                            Building Modern Website Using Latest Technologies
                        </h2>
                        <div className="">
                            ButtonPrimary
                        </div>
                    </div>

                    <div className="">
                        <figure className="">
                            <img src="/img/" alt="teshan_kalhara" width={656} height={800} className="w-full" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
