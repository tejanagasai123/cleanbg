import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonils = () => {
      return (
        <div className="mt-6 md:mt-10 p-4 md:p-6 drop-shadow-md">
        <h2 className=" text-center text-2xl md:text-3xl font-bold  bg-clip-text text-transparent  bg-gradient-to-r from-zinc-800  to-zinc-500">
          Customer Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-4 md:mt-8">
          {testimonialsData.map((testimonial,index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left"
            >
              <span className="text-blue-700 text-3xl font-bold">,,</span>
              <p className="text-gray-600 mt-2 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-zinc-600">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-blue-700">{testimonial.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )
}

export default Testimonils