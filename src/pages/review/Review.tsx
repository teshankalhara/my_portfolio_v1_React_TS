import ReviewCard from "../../components/reviewCard/ReviewCard"
import imgPro from '../../assets/img/imgPro.jpg'

import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

const reviews = [
  {
    content: 'Web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Tesh Kal',
    imgSrc: imgPro,
    company: 'RAW'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Tesh Kal 1',
    imgSrc: imgPro,
    company: 'WWE'
  }, {
    content: 'Web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Tesh Kal',
    imgSrc: imgPro,
    company: 'RAW'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Tesh Kal 1',
    imgSrc: imgPro,
    company: 'WWE'
  }, {
    content: 'Web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Tesh Kal',
    imgSrc: imgPro,
    company: 'RAW'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Tesh Kal 1',
    imgSrc: imgPro,
    company: 'WWE'
  }, {
    content: 'Web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Tesh Kal',
    imgSrc: imgPro,
    company: 'RAW'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Tesh Kal 1',
    imgSrc: imgPro,
    company: 'WWE'
  },
]

const Review = () => {
  useGSAP(()=>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
      },
      x:'-1000'
    })
  })
  return (
    <div id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 capitalize reveal-up">
          our customers say
        </h2>
        <div className="reveal-up scrub-slide flex items-stretch gap-3 w-fit">
          {reviews && reviews.map((item, key) => {
            return (
              <ReviewCard name={item.name} content={item.content} imgSrc={item.imgSrc} company={item.company} key={key} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Review
