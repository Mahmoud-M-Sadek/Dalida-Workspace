import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold animate-pulse">
          مساحة العمل الأولى في المنصورة
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          ركز في <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">شغلك</span><br />
          وسيب الباقي علينا
        </h1>
        
        <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          داليدا ورك سبيس بتوفرلك الجو المثالي للإنتاجية. انترنت سريع، قهوة مظبوطة، وهدوء يفصلك عن دوشة العالم.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#booking" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            احجز مكانك الآن
          </a>
          <a 
            href="#features" 
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors border border-zinc-700"
          >
            استكشف المكان
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
};

export default Hero;