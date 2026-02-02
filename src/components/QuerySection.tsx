import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const QuerySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-bronze mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-cream-foreground mb-6">
              Have a Query?
            </h2>
            <div className="divider-gold-wide mb-8" />
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Our team of experts is here to help you find the perfect surface solution for your project. 
              Reach out to us for consultations, samples, or any questions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h3 className="font-medium text-cream-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 7677181818</p>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h3 className="font-medium text-cream-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@plywoodhome.com</p>
                  <p className="text-muted-foreground">sales@plywoodhome.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h3 className="font-medium text-cream-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">Opposite Gargee Grand,</p>
                  <p className="text-muted-foreground">NEar Mohini Market,</p>
                  <p className="text-muted-foreground">Exhibition Rd, Patna,</p>
                  <p className="text-muted-foreground">Bihar 800001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-bronze" />
                </div>
                <div>
                  <h3 className="font-medium text-cream-foreground mb-1">Follow Us</h3>
                  <a 
                    href="https://www.instagram.com/plywoodhome4?utm_source=qr&igsh=cmlrd2RqbXNobHV2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-bronze transition-colors"
                  >
                    @plywoodhome4
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-background p-8 lg:p-10 rounded-lg shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name *
                </label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                  className="bg-cream border-bronze/20 focus:border-bronze"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address *
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="bg-cream border-bronze/20 focus:border-bronze"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="bg-cream border-bronze/20 focus:border-bronze"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject *
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this regarding?" 
                  required 
                  className="bg-cream border-bronze/20 focus:border-bronze"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or query..." 
                  rows={5} 
                  required 
                  className="bg-cream border-bronze/20 focus:border-bronze resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-luxury-solid text-base py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuerySection;
