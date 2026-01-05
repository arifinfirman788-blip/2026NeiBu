
import React from 'react';
import { Menu, Globe, Laptop, Smartphone, RefreshCw } from 'lucide-react';
import { UserRole } from '../types';

interface Props {
  userRole?: UserRole;
  onToggleRole?: () => void;
}

const Header: React.FC<Props> = ({ userRole = 'tourist', onToggleRole }) => {
  const isAgency = userRole === 'agency';
  const isGuide = userRole === 'guide';

  const getRoleLabel = () => {
    if (isAgency) return 'B端 · 旅行社管理 (PC)';
    if (isGuide) return '员工端 · 导游/车队 (APP)';
    return 'C端 · 旅游AI助手';
  };

  const getRoleIcon = () => {
    if (isAgency) return <Laptop size={12} />;
    if (isGuide) return <Smartphone size={12} />;
    return <RefreshCw size={10} />;
  };

  const getNextRoleName = () => {
    if (userRole === 'tourist') return '切换到 B端(PC)';
    if (userRole === 'agency') return '切换到 员工端(App)';
    return '切换到 C端(游客)';
  };

  // Agency PC Header is handled inside AgencyApp layout usually, but we keep a minimal top bar for consistency or hide it.
  // We'll keep it simple for now.

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm transition-colors duration-500 
      ${isAgency ? 'bg-indigo-900 text-white' : ''}
      ${isGuide ? 'bg-teal-600 text-white' : ''}
      ${!isAgency && !isGuide ? 'bg-white/80 text-black' : ''}
    `}>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-black italic tracking-tighter flex items-center gap-2">
          <span className={`px-1 mr-1 rounded-sm transition-colors ${!isAgency && !isGuide ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {isAgency ? '天逸' : '黄小西'}
          </span>
          <span className={`font-normal not-italic text-sm opacity-80`}>
            {getRoleLabel()}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {onToggleRole && (
          <button 
            onClick={onToggleRole}
            className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-full border transition-all hover:bg-white/10 ${!isAgency && !isGuide ? 'border-gray-200 text-gray-500 hover:bg-gray-100' : 'border-white/30 text-white'}`}
          >
            {getRoleIcon()}
            <span>{getNextRoleName()}</span>
          </button>
        )}
        
        <div className={`flex flex-col items-end text-xs opacity-70`}>
          <div className="flex items-center gap-1">
             <Globe size={12} />
             <span>CN/EN</span>
          </div>
        </div>
        <Menu className={`w-6 h-6 opacity-90`} />
      </div>
    </header>
  );
};

export default Header;
