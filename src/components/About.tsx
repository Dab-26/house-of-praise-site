import member1 from '../assets/_S6C9830-Edit copy.jpg';
import member2 from '../assets/HOPs-29 copy copy copy.jpg';
import member3 from '../assets/HOPs-30 copy copy copy.jpg';
import member4 from '../assets/HOPs-26 copy copy copy.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed">
              <p className="text-lg md:text-xl">
                House of Praise is more than a worship band—we're a movement of young believers
                passionate about creating space for authentic encounter with God.
              </p>
              <p className="text-base md:text-lg">
                Our sound blends contemporary worship with cinematic production, crafting
                atmospheres where the presence of God meets the heart of a generation. We believe
                that worship is both intimate and powerful, personal and collective.
              </p>
              <p className="text-base md:text-lg">
                From local church gatherings to regional conferences, we've seen God move in
                extraordinary ways. Our mission is simple: to lead this generation into wholehearted
                worship that transforms lives and awakens faith.
              </p>
              <div className="pt-6">
                <div className="inline-block">
                  <div className="h-px w-12 bg-gold mb-4" />
                  <p className="text-sm tracking-widest uppercase text-gold font-medium">
                    Leading Worship Since 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member1}
                    alt="Band member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member2}
                    alt="Worship team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member3}
                    alt="Band member with guitar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member4}
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Original Music</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Creating fresh sounds that resonate with today's generation
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Community Impact</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Building authentic relationships through worship and ministry
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Kingdom Vision</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Advancing God's kingdom through excellence and authenticity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
