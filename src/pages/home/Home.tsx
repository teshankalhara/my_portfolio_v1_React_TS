import imgPro from '../../assets/img/imgPro.jpg'
import coverPic from '../../assets/img/coverPic.png'
import PrimaryButton from '../../components/button/PrimaryButton'
import OutlineButton from '../../components/button/OutlineButton'

const Home = () => {
    return (
        <>
            <div id="home" className="pt-28 lg:pt-4">
                <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                    <div data-aos='fade-up' data-aos-delay='600'>
                        <div className="flex items-center gap-3">
                            <figure className="img-box w-9 h-9 rounded-lg">
                                <img src={imgPro} width={40} height={40} alt="teshan_kalhara" className="img-cover" />
                            </figure>
                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                </span>
                                Available for work
                            </div>
                        </div>
                        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Building Modern Website Using Latest Technologies
                        </h2>
                        <div className="flex items-center gap-3">
                            <PrimaryButton label='Download CV' icon='download' />
                            <OutlineButton label='Scroll down' href='#about' icon='arrow_downward' />
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-delay='600' className="hidden lg:block">
                        <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden">
                            <img src={coverPic} alt="teshan_kalhara" width={656} height={800} className="w-full" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
