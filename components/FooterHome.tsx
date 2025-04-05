import { Facebook, Instagram, Twitter, Youtube, HelpCircle, Shield, Phone, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10 text-sm">
          <div>
            <h4 className="font-semibold mb-2">COURSE CATEGORIES</h4>
            <ul className="space-y-1">
              <li>Artificial Intelligence</li>
              <li>Data</li>
              <li>Cloud</li>
              <li>Programming</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">LEARN ABOUT LushAITech</h4>
            <ul className="space-y-1">
              <li>Learning on LushAITech</li>
              <li>About LushAITech Courses</li>
              <li>Our Stories</li>
              <li>Our Teams</li>
              <li>LushAITech Programmes</li>
              <li>Our Course Creators</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">CERTIFICATIONS</h4>
            <ul className="space-y-1">
              <li>All Certificates</li>
              <li>Programme Outcomes</li>
              <li>LushAITech Testimonials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">EARN ON LushAITech</h4>
            <ul className="space-y-1">
              <li>Create Courses on LushAITech</li>
              <li>Empower Us</li>
              <li>Refer a Friend</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">DISCOVER MORE</h4>
            <ul className="space-y-1">
              <li>Download App</li>
              <li>Discover Careers</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-1">
              <Info className="w-4 h-4" /> About Us
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> Contact Us
            </div>
            <div className="flex items-center gap-1">
              <HelpCircle className="w-4 h-4" /> Help and Support
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" /> Privacy
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" /> Terms and Policies
            </div>
          </div>

          <div className="flex gap-3 text-gray-500">
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}