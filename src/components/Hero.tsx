import member1 from '../assets/_S6C0122 copy copy copy.jpg';
import member2 from '../assets/HOPs-57 copy copy.jpg';
import member3 from '../assets/HOPs-26 copy copy.jpg';
import member4 from '../assets/HOPs-29 copy copy.jpg';
import member5 from '../assets/HOPs-30 copy copy.jpg';
import member6 from '../assets/HOPs-02 copy copy.jpg';
import member7 from '../assets/HOPs-18 copy.jpg';
import member8 from '../assets/HOPs-12 copy.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F8F5F2] to-[#EADFD6]"
    >

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-8 pt-32 md:pt-0">
            <div className="space-y-4 text-center md:text-left">
              <div className="hidden md:flex items-center gap-3 justify-center md:justify-start">
                <div className="w-16 h-[2px] bg-[#D8B36F]" />
                <span className="text-sm tracking-[0.3em] uppercase text-[#3B3B3B]/70 font-medium">Contemporary Worship</span>
              </div>

              <h1
                className="text-8xl md:text-8xl lg:text-9xl font-bold text-[#3B3B3B] leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                House<br /><span className="text-4xl md:text-8xl lg:text-9xl md:font-bold of-word">of</span> Praise
              </h1>

              <p className="text-3xl md:text-3xl text-[#3B3B3B]/80 font-light leading-relaxed max-w-lg mx-auto md:mx-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                Praise That Awakens a Generation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('music')}
                className="group relative px-10 py-5 text-base font-bold tracking-widest uppercase transition-all duration-500 bg-[#D8B36F] text-white hover:bg-[#3B3B3B] overflow-hidden"
              >
                <span className="relative z-10">Watch & Listen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B3B3B] to-[#1A1A1A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button
                onClick={() => scrollToSection('booking')}
                className="px-10 py-5 text-base font-bold tracking-widest uppercase transition-all duration-300 border-2 border-[#3B3B3B] text-[#3B3B3B] hover:bg-[#3B3B3B] hover:text-white"
              >
                Book Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative grid grid-cols-8 gap-3 md:gap-4">
              <div className="col-span-2 space-y-3 md:space-y-4">
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member1}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member2}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-12">
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member3}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member4}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-6">
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member5}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member6}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-3">
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member7}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member8}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[#D8B36F]/20 rounded-full blur-3xl" />
            <div className="absolute -left-8 top-1/3 w-48 h-48 bg-[#EADFD6]/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D8B36F] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
