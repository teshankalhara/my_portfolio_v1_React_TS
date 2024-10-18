import { useEffect, useRef } from "react"
import PropTypes from "prop-types"

interface NavbarProps {
    navOpen: boolean
}

const Navbar = ({ navOpen }: NavbarProps) => {
    const lastActiveLink = useRef<HTMLAnchorElement | null>(null)
    const activeBox = useRef<HTMLDivElement | null>(null)

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = lastActiveLink.current;
            activeBox.current.style.top = `${offsetTop}px`;
            activeBox.current.style.left = `${offsetLeft}px`;
            activeBox.current.style.width = `${offsetWidth}px`;
            activeBox.current.style.height = `${offsetHeight}px`;
        }
    }

    useEffect(initActiveBox, [])
    window.addEventListener('resize',initActiveBox)

    const activeCurrentLink = (event: any) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove('active')
        }

        event.currentTarget.classList.add('active')
        lastActiveLink.current = event.currentTarget

        if (activeBox.current) {
            const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = event.currentTarget
            activeBox.current.style.top = `${offsetTop}px`
            activeBox.current.style.left = `${offsetLeft}px`
            activeBox.current.style.width = `${offsetWidth}px`
            activeBox.current.style.height = `${offsetHeight}px`
        }
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ]

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => {
                return (
                    <a onClick={activeCurrentLink} href={link} key={key} ref={ref} className={className}>
                        {label}
                    </a>
                )
            })}
            <div className="active-box" ref={activeBox}> </div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar