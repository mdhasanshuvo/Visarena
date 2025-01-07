import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Ali Ibrahim',
      country: 'Egypt',
      feedback: 'Visarena made my travel visa application process seamless. I couldn’t believe how easy it was!',
      image: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
    },
    {
      name: 'Sara Al-Mansoori',
      country: 'UAE',
      feedback: 'The platform helped me check visa requirements and track my application with ease. Highly recommend!',
      image: 'https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=',
    },
    {
      name: 'Mohammed Khan',
      country: 'Pakistan',
      feedback: 'I loved how user-friendly and fast the platform is. Visarena saved me so much time!',
      image: 'https://i.redd.it/6u8idpt040m51.jpg',
    },
    {
      name: 'Aisha Noor',
      country: 'Saudi Arabia',
      feedback: 'I tracked my visa application from start to finish with Visarena. Great experience!',
      image: 'https://t4.ftcdn.net/jpg/06/25/09/07/360_F_625090798_8gkjy4oGeEYM7gqHNDXoObtwMKx3Ry42.jpg',
    },
  ];

  return (
    <section className="bg-base-100 py-16 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">What Our Users Say</h2>
        <p className="text-lg text-gray-500 mb-12">
          Discover how Visarena has helped travelers like you streamline their visa applications and make travel hassle-free.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white h-[380px] p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <div className="flex justify-center mb-6">
                  <img
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <p className="text-base text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-right mt-4">
          <p className="text-sm text-gray-500 font-medium italic">Swipe to see more testimonials ➡️</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
