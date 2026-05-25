import Link from 'next/link';
import { FaHeart, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
         
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="text-white text-3xl font-bold tracking-tight">FURHOME</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting loving pets with caring families across Bangladesh.
            </p>
            <div className="flex gap-4 mt-6">
            <FaHeart className="text-purple-500" size={24} />
            </div>
          </div>

      
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/all-pets" className="hover:text-white transition-colors">All Pets</Link></li>
              <li><Link href="/add-pet" className="hover:text-white transition-colors">List Your Pet</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Pet Care Tips</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Adoption Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <IoIosMail size={20} />
                <span>hello@furhome.bd</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone size={20} />
                <span>+880 1712-345678</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={20} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 FurHome. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>Made with ❤️ for Bangladesh’s pets</p>
        </div>
      </div>
    </footer>
  );
}