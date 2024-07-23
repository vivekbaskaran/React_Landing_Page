import React from 'react'

export const Testimonials = () => {
    const data = [{
        imglink: "img/testimonials-1.jpg",
        name: "Margaret E.",
        desc: "This is fantastic! Thanks so much guys!"
    },
      {
        imglink: "img/testimonials-2.jpg",
        name: "Fred S.",
        desc: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
      {
        imglink: "img/testimonials-3.jpg",
        name: "Sarah W.",
        desc: "Thanks so much for making these free resources available to us!"
    }]
  return (
    <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
          {data.map(
            (data) => (< div className="col-lg-4" >
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={data.imglink} alt="..." />
                <h5>{data.name}</h5>
                <p className="font-weight-light mb-0">{data.desc}</p>
              </div>
            </div>
            ))}
           </div>
            </div>
        </section>
  )
}
