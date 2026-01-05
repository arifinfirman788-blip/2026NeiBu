
import React from 'react';
import { ShoppingBag, CalendarDays, Map } from 'lucide-react';

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6 h-48">
      
      {/* Left Card: Quick Booking (Tall) */}
      <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-sm group cursor-pointer">
        <img 
           src="https://picsum.photos/id/164/300/400" 
           alt="Hotel" 
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
        
        {/* Top Tag */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white">
           <ShoppingBag size={18} />
        </div>
        <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm animate-pulse">
           <span className="text-white">✨</span> HOT
        </div>

        {/* Bottom Label */}
        <div className="absolute bottom-4 left-4">
           <span className="text-xl font-bold text-white tracking-wide">快捷订购</span>
        </div>
      </div>

      {/* Right Top: Activity Calendar */}
      <div className="relative rounded-3xl overflow-hidden shadow-sm group cursor-pointer bg-blue-50">
        <img 
           src="https://picsum.photos/id/58/300/200" 
           alt="Calendar" 
           className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
        
        <div className="absolute top-3 left-3 w-9 h-9 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40 text-white">
           <CalendarDays size={16} />
        </div>
        
        <div className="absolute bottom-3 left-3">
           <span className="text-base font-bold text-white shadow-black/10 drop-shadow-md">活动日历</span>
        </div>
      </div>

      {/* Right Bottom: Travel Record */}
      <div className="relative rounded-3xl overflow-hidden shadow-sm group cursor-pointer bg-amber-50">
        <img 
           src="https://picsum.photos/id/1036/300/200" 
           alt="Record" 
           className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent"></div>

        <div className="absolute top-3 left-3 w-9 h-9 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40 text-white">
           <Map size={16} />
        </div>

        <div className="absolute bottom-3 left-3">
           <span className="text-base font-bold text-white shadow-black/10 drop-shadow-md">旅行记录</span>
        </div>
      </div>

    </div>
  );
};

export default DashboardGrid;
