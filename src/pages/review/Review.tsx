import ReviewCard from "../../components/reviewCard/ReviewCard"
import imgPro from '../../assets/img/imgPro.jpg'

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
  return (
    <div id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 capitalize">
          our customers say
        </h2>
        <div className="flex items-stretch gap-3 w-fit">
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
