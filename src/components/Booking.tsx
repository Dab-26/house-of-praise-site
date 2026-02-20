import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const formPayload = new URLSearchParams({
        'form-name': 'booking',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        eventType: formData.eventType,
        message: formData.message,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload.toString(),
      });

      if (!response.ok) throw new Error('Submission failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', eventDate: '', eventType: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us at info@thehop.net.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-6">
            Booking House of Praise
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Let's create an unforgettable worship experience for your event
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-cream rounded-sm shadow-elegant p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gold/10">
              <CheckCircle2 className="text-gold" size={40} />
            </div>
            <h3 className="font-serif text-3xl text-charcoal mb-4">Thank You!</h3>
            <p className="text-charcoal/70 font-light text-lg">
              We've received your booking request and will get back to you within 24-48 hours.
            </p>
          </div>
        ) : (
          <form
              name="booking"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-cream rounded-sm shadow-elegant p-8 md:p-12"
            >
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              {submitError && (
                <p className="text-red-500 text-sm mb-6">{submitError}</p>
              )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.name ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.email ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.phone ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.eventDate ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                />
                {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-2">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-light-gray border ${
                  errors.eventType ? 'border-red-400' : 'border-transparent'
                } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
              >
                <option value="">Select an event type</option>
                <option value="church-service">Church Service</option>
                <option value="youth-conference">Youth Conference</option>
                <option value="worship-night">Worship Night</option>
                <option value="retreat">Retreat</option>
                <option value="festival">Festival</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                Additional Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-light-gray border ${
                  errors.message ? 'border-red-400' : 'border-transparent'
                } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal resize-none`}
                placeholder="Tell us about your event, expected attendance, venue details, and any special requirements..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-300 bg-charcoal text-cream hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Booking Request
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-12 text-center">
          <p className="text-charcoal/60 text-sm font-light">
            Prefer to reach out directly? Email us at{' '}
            <a href="mailto:info@thehop.net" className="text-gold hover:underline">
              info@thehop.net
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
