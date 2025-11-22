import React from 'react';
import { Wifi, Coffee, Monitor, Users, Zap, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-8 h-8 text-yellow-400" />,
    title: "إنترنت فائق السرعة",
    description: "فايبر انترنت سريع وثابت يضمن لك مكالمات فيديو بدون تقطيع وتحميل ملفات كبيره في ثواني."
  },
  {
    icon: <Coffee className="w-8 h-8 text-yellow-400" />,
    title: "مشروبات وسناكس",
    description: "ميني بار متكامل فيه كل اللي محتاجه عشان تفصل وتشحن طاقتك من تاني."
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "غرف اجتماعات",
    description: "غرف مجهزة بشاشات عرض وتكييف للاجتماعات والكورسات والمحاضرات."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "تكييف مركزي",
    description: "جو منعش ومثالي للعمل والمذاكرة طول السنة، صيف وشتا."
  },
  {
    icon: <Monitor className="w-8 h-8 text-yellow-400" />,
    title: "مساحات متنوعة",
    description: "منطقة هادئة للمذاكرة، منطقة مشتركة للعمل الجماعي، ومكاتب خاصة للخصوصية."
  },
  {
    icon: <MapPin className="w-8 h-8 text-yellow-400" />,
    title: "موقع متميز",
    description: "في قلب المنصورة، شارع الترعة، سهل الوصول ليه من أي مكان."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ليه تختار <span className="text-yellow-400">داليدا؟</span></h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            وفرنالك كل الإمكانيات اللي ممكن تحتاجها عشان تركز في شغلك أو دراستك وبس.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;