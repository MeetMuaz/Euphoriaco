"use client"
import React, { useState, useEffect } from 'react'

// NavBar Component
const NavBar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-20">
    <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-serif font-bold text-white tracking-wider">EUPHORIA & CO.</span>
        <span className="text-rose-300 text-sm font-light tracking-widest">LIFESTYLE • ACCESSORIES • ESSENTIALS</span>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-white">
        <li><a href="#about" className="hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">About</a></li>
        <li><a href="#menu" className="hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">Collection</a></li>
        <li><a href="#testimonials" className="hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">Reviews</a></li>
        <li><a href="#contact" className="hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10">Contact</a></li>
        <li>
          <a href="https://maps.google.com/?q=No.5+Olives+Court,+Cooperative+Villa+Estate,+Badore,+Ajah" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-red-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
            Get Directions
          </a>
        </li>
      </ul>
      <button className="md:hidden text-white text-2xl">
        ☰
      </button>
    </div>
  </nav>
);

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-rose-950 to-black bg-opacity-70"></div>
      {/* NavBar */}
      <NavBar />
      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-wide">
          EUPHORIA & CO.
        </h1>
        <p className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto font-light tracking-wide">
          A lifestyle collection of charming, trendy accessories and cozy must-haves.
          <br/>
          <span className="text-rose-300 italic">Made to bring a little euphoria to your everyday.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:09039658792" className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-rose-500 transition inline-block text-center tracking-wider shadow-2xl">
            Shop Now
          </a>
          <a href="#menu" className="border-2 border-rose-400 text-rose-200 px-10 py-4 rounded-full font-semibold hover:bg-rose-400 hover:text-white transition inline-block text-center tracking-wider">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 mb-6 tracking-wide">
            Your Go-To Spot
          </h2>
          <p className="text-2xl text-rose-700 max-w-4xl mx-auto mb-6 font-light leading-relaxed">
            Euphoria & Co. is a lifestyle collection of charming, trendy accessories and cozy must-haves. From everyday pieces that make life a little prettier to feel-good things that bring joy.
          </p>
          <p className="text-xl text-rose-600 max-w-3xl mx-auto italic">
            Think of us as your online shelf of feel-good things.
          </p>
        </div>
      </div>
    </section>
  );
};

// Featured Menu Section Component
const FeaturedMenuSection = () => {
  const menuItems = [
    {
      name: "Luxury Accessories",
      description: "Curated selection of trendy bags, jewelry, and statement pieces",
      price: "From ₦5,000",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cozy Essentials",
      description: "Soft blankets, plush pillows, and comfort items for your space",
      price: "From ₦8,000",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Home Decor",
      description: "Elegant candles, vases, and decorative pieces to elevate your home",
      price: "From ₦3,500",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fashion Jewelry",
      description: "Delicate necklaces, earrings, and bracelets for everyday elegance",
      price: "From ₦4,000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Lifestyle Gifts",
      description: "Thoughtfully curated gift sets perfect for any occasion",
      price: "From ₦6,500",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Beauty & Wellness",
      description: "Premium skincare, aromatherapy, and self-care essentials",
      price: "From ₦7,000",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 mb-6 tracking-wide">
            Our Collection
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto font-light">
            Discover charming pieces that make life a little prettier.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-rose-50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-rose-200 transition-all duration-300 transform hover:-translate-y-2 border border-rose-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-bold text-rose-900 mb-4 tracking-wide">{item.name}</h3>
                  <p className="text-rose-700 font-light leading-relaxed mb-4">{item.description}</p>
                  <span className="text-2xl font-bold text-rose-600 bg-rose-100 px-4 py-2 rounded-full self-start mb-3">{item.price}</span>
                  <a href="tel:09039658792" className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition self-start shadow-lg text-center">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="tel:09039658792" className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-rose-700 transition shadow-xl tracking-wider inline-block">
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Blessing",
      rating: 5,
      comment: "Euphoria & Co. has the most beautiful accessories! Every piece brings joy to my day.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Chioma",
      rating: 5,
      comment: "Love the cozy essentials! My home feels so much more inviting now.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Tunde",
      rating: 5,
      comment: "Perfect gifts for my loved ones. Quality products and excellent service!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 mb-6 tracking-wide">
            What Our Customers Say
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto font-light">
            Hear from our happy customers who found their feel-good things
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-rose-100">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-serif font-semibold text-rose-900">{testimonial.name}</h4>
                  <div className="flex text-rose-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-rose-700 font-light italic leading-relaxed">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-4 max-w-6xl z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-wide">
            Visit Us
          </h2>
          <p className="text-xl text-rose-200 max-w-2xl mx-auto font-light">
            Your go-to spot for feel-good things.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-rose-200">
            <h3 className="text-2xl font-serif font-bold text-rose-900 mb-6 tracking-wide">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-rose-600 font-bold text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-rose-900">Address</p>
                  <p className="text-rose-700">No.5 Olives Court, Cooperative Villa Estate<br />Badore, Ajah</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-rose-600 font-bold text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-rose-900">Phone</p>
                  <a href="tel:09039658792" className="text-rose-700 hover:text-rose-900 transition">09039658792</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-rose-200">
            <h3 className="text-2xl font-serif font-bold text-rose-900 mb-6 tracking-wide">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-rose-800 font-medium">Monday - Thursday</span>
                <span className="text-rose-700">10:00AM - 8:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-rose-800 font-medium">Friday - Saturday</span>
                <span className="text-rose-700">10:00AM - 9:00PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-rose-800 font-medium">Sunday</span>
                <span className="text-rose-700">11:00AM - 6:00PM</span>
              </div>
              <div className="mt-4 p-3 bg-rose-100 rounded-lg">
                <p className="text-rose-800 font-semibold text-center">Open Daily - Visit Us!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:09039658792" className="bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-500 transition transform hover:scale-105 shadow-2xl tracking-wider inline-block text-center">
              Shop Online
            </a>
            <a href="https://maps.google.com/?q=No.5+Olives+Court,+Cooperative+Villa+Estate,+Badore,+Ajah" target="_blank" rel="noopener noreferrer" className="border-3 border-rose-400 text-rose-200 bg-white bg-opacity-20 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-400 hover:text-white transition transform hover:scale-105 shadow-2xl tracking-wider inline-block text-center">
              Get Directions
            </a>
          </div>
          
          <div className="pt-8 border-t border-rose-400 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-8">
                <a href="#" className="text-rose-300 hover:text-rose-100 transition text-lg font-medium tracking-wider">
                  Facebook
                </a>
                <a href="#" className="text-rose-300 hover:text-rose-100 transition text-lg font-medium tracking-wider">
                  Instagram
                </a>
              </div>
              <p className="text-rose-300 text-sm tracking-wider">
                © 2025 Euphoria & Co. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedMenuSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

export default App