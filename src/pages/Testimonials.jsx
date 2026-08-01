import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEOHead } from '../components/common/SEOHead';
import { testimonialsData } from '../data/testimonialsData';
import { Star, Quote, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Testimonials = () => {
  return (
    <>
      <SEOHead 
        title="Client Testimonials & Reviews | Viva Construct"
        description="Read what global developers, institutional investors, and municipal authorities say about Viva Construct's engineering execution."
      />

      <Breadcrumbs 
        currentPage="Client Endorsements" 
        subtitle="Verifiable reviews from institutional partners, real estate developers, and municipal authorities."
      />

      {/* Swiper Slider Section */}
      <section className="py-16 bg-[#000000] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#B22222] font-bold text-xs uppercase tracking-widest block mb-2 font-['Montserrat']">
              Featured Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat'] text-white">
              Exceeding Expectations on Landmark Builds
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-16"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="glass-card-dark p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-3xl mx-auto relative">
                  <Quote className="w-12 h-12 text-[#B22222]/30 mx-auto mb-4" />
                  
                  <div className="flex justify-center text-[#B22222] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#B22222]" />
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg md:text-xl italic leading-relaxed mb-8">
                    "{item.quote}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#B22222] mb-2"
                    />
                    <h4 className="font-bold text-lg text-white font-['Montserrat']">{item.name}</h4>
                    <p className="text-xs text-[#B22222] font-semibold">{item.title}, {item.company}</p>
                    <span className="text-[11px] text-gray-400 mt-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Project: {item.project}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#000000] font-['Montserrat']">
              Complete Client Case Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-[#B22222]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#B22222]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-md">
                      Verified Corporate Partner
                    </span>
                  </div>

                  <p className="text-gray-700 text-base italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#000000]" />
                    <div>
                      <h4 className="font-bold text-sm text-[#000000] font-['Montserrat']">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.title}, {item.company}</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#B22222]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
