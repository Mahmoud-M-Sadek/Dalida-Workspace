import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, Facebook } from 'lucide-react';

// TikTok Icon SVG component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const logoUrl = "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/420486948_122135900438085116_5791087745974560455_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AgdaVoM5geEQ7kNvwEE6fgB&_nc_oc=Admq3OGb9lq3K0rK7ba6s9d4vfRKYsy-WUgn1bQrhSU4FMZ0wmZ1O-YqQ2NFhglmJRw&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=Enc1Km_zV-OiS1vc33H48w&oh=00_AfgCBsjEygktQ63tXj3nwzILRb7wUQYIdYEJxcuV4jaioA&oe=6927679A";

  return (
    <footer id="location" className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About */}
          <div>
            <div className="mb-6">
               <img 
                  src={logoUrl}
                  alt="Dalida Co-working Space" 
                  className="h-32 w-auto object-contain mix-blend-screen"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
               />
               <div className="hidden flex items-center gap-2">
                 <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">D</div>
                 <span className="text-xl font-bold text-yellow-400">داليدا ورك سبيس</span>
               </div>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              مكانك المفضل للعمل والمذاكرة في المنصورة. بيئة هادية ومجهزة بالكامل عشان تساعدك تنجز وتحقق أهدافك.
            </p>
            <div className="flex gap-4">
               <a 
                href="https://www.facebook.com/dalidacoworkspace/?locale=ar_AR" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:bg-zinc-800 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/dalidacoworkspace" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:bg-zinc-800 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@dalidacoworkspace" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <TikTokIcon size={20} />
              </a>
              <a 
                href="https://wa.me/201004294818" 
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-green-500 hover:bg-zinc-800 transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                <span>
                  المنصورة - شارع الترعة
                  <br />
                  تقسيم السمنودي ٣
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <a href="tel:01004294818" className="hover:text-yellow-400 transition-colors">01004294818</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-64 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            {/* Embedding a map centered on Mansoura - El Teraa St area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.8694727480125!2d31.3784704!3d31.0424776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Dalida Workspace Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dalida Co-working Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;