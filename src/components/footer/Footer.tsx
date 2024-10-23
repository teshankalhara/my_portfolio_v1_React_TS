import PrimaryButton from "../button/PrimaryButton";
import imgPro from '../../assets/img/imgPro.jpg'

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/teshankalhara'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/teshankalhara'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/teshankalhara'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/teshankalhara'
    },
    {
        label: 'Facebook',
        href: 'https://codepen.io/codewithsadee'
    }
]

const Footer = () => {
    return (
        <footer className="section lg:pb-5">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>
                        <PrimaryButton href="mailto:teshan054@gmail.com" label="start project" icon="chevron_right" classes="reveal-up"/>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20 items-center">
                        <div className="">
                            <p className="mb-2 uppercase reveal-up">sitemap</p>
                            <ul>
                                {sitemap&&sitemap.map((item,key)=>{
                                    return(
                                        <li key={key}>
                                            <a href={item.href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <p className="mb-2 uppercase reveal-up">social media</p>
                            <ul>
                                {socials&&socials.map((item,key)=>{
                                    return(
                                        <li key={key}>
                                            <a href={item.href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img src={imgPro} alt="logo" width={40} height={40} className="rounded-lg" />
                    </a>
                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-500">Teshan Kalhara</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer