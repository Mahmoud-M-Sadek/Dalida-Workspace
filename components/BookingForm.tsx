import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';
import { RoomType, BookingDetails } from '../types';

const BookingForm: React.FC = () => {
  const [details, setDetails] = useState<BookingDetails>({
    name: '',
    phone: '',
    date: '',
    time: '',
    type: RoomType.SHARED,
    guests: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `
      *حجز جديد في داليدا ورك سبيس* 📅
      
      *الاسم:* ${details.name}
      *رقم الهاتف:* ${details.phone}
      *التاريخ:* ${details.date}
      *الوقت:* ${details.time}
      *النوع:* ${details.type}
      *عدد الأفراد:* ${details.guests}
      
      يرجى تأكيد الحجز. شكراً!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201004294818?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-zinc-950 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">احجز مكانك الآن</h2>
            <p className="text-zinc-400">املأ البيانات وسيتم تحويلك للواتساب لتأكيد الحجز فوراً</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <User size={16} /> الاسم بالكامل
                </label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  placeholder="أحمد محمد"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Phone size={16} /> رقم الهاتف
                </label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={details.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  placeholder="010xxxxxxxxx"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Calendar size={16} /> تاريخ الحجز
                </label>
                <input 
                  required
                  type="date" 
                  name="date"
                  value={details.date}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Clock size={16} /> وقت الوصول
                </label>
                <input 
                  required
                  type="time" 
                  name="time"
                  value={details.time}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                />
              </div>

              {/* Type */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <MessageSquare size={16} /> نوع الحجز
                </label>
                <select 
                  name="type"
                  value={details.type}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all appearance-none cursor-pointer"
                >
                  {Object.values(RoomType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
            >
              تأكيد الحجز عبر واتساب
              <MessageSquare className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;