
import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, Calendar, CheckCircle2, MessageSquare, Bell, Navigation, ShieldCheck, 
  LayoutGrid, User, Settings, Wallet, Camera, Languages, FileText, CreditCard, 
  BookOpen, ChevronRight, LogOut, Search, Mic, Send, AlertTriangle, CloudRain, 
  Users, Bot, ArrowLeft, Flag, Map, CircleDollarSign, QrCode, Award, Edit3, X, 
  CheckSquare, Square, Utensils, Phone, AlertCircle, Database
} from 'lucide-react';
import GuideResourceLibrary from './GuideResourceLibrary';

// --- Types & Mock Data ---

type GuideTab = 'itinerary' | 'apps' | 'message' | 'mine';

const tools = [
  { id: 'resource', label: '合作资源库', icon: Database, color: 'text-indigo-600 bg-indigo-50' },
  { id: 'fund', label: '备用金管理', icon: CircleDollarSign, color: 'text-orange-600 bg-orange-50' },
  { id: 'bill', label: '报销记账', icon: FileText, color: 'text-blue-600 bg-blue-50' },
  { id: 'photo', label: '拍照助手', icon: Camera, color: 'text-pink-600 bg-pink-50' },
  { id: 'trans', label: '多语种翻译', icon: Languages, color: 'text-purple-600 bg-purple-50' },
  { id: 'contract', label: '合同管理', icon: FileText, color: 'text-teal-600 bg-teal-50' },
  { id: 'idcard', label: '电子证件', icon: CreditCard, color: 'text-cyan-600 bg-cyan-50' },
  { id: 'nav', label: '大巴定位', icon: Navigation, color: 'text-slate-600 bg-slate-50' },
];

const chatList = [
  { id: 'ai', name: '小西 - 导游AI助手', lastMsg: '[风险预警] 发现行程与游客习惯冲突...', time: '刚刚', isTop: true, avatar: 'https://picsum.photos/id/10/100/100' },
  { id: 'g1', name: 'GZ-231215-A (当前团)', lastMsg: '张建国: 导游，我们大概几点集合？', time: '5分钟前', isTop: false, avatar: 'https://picsum.photos/id/11/100/100' },
  { id: 'g2', name: 'GZ-231220-B (下期预备)', lastMsg: '计调-王姐: 接机车辆已经安排好了。', time: '昨天', isTop: false, avatar: 'https://picsum.photos/id/12/100/100' },
  { id: 'company', name: '天逸旅行社-导游群', lastMsg: '通知：下周一开始统一更换新制服...', time: '昨天', isTop: false, avatar: 'https://picsum.photos/id/13/100/100' },
];

// Mock Schedule Items for Selection
const mockScheduleItems = [
  { id: 's1', time: "08:00", title: "酒店集合出发", status: "completed" },
  { id: 's2', time: "10:00", title: "抵达黄果树景区", status: "pending", isNext: true },
  { id: 's3', time: "12:30", title: "午餐: 瀑布轩餐厅", status: "pending" },
  { id: 's4', time: "14:00", title: "天星桥景区游览", status: "pending" },
  { id: 's5', time: "18:00", title: "晚餐: 苗家酸汤鱼", status: "pending" },
];

const GuideApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GuideTab>('itinerary');
  const [currentView, setCurrentView] = useState<'main' | 'chat_detail' | 'resource_lib'>('main');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  // Modification Modal State
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]);
  const [modifyReason, setModifyReason] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleToggleEvent = (id: string) => {
    setSelectedEventIds(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSubmitModification = () => {
    if (selectedEventIds.length === 0 || !modifyReason.trim()) return;
    setIsModifyModalOpen(false);
    setShowToast(true);
    setModifyReason('');
    setSelectedEventIds([]);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleToolClick = (toolId: string) => {
     if (toolId === 'resource') {
        setCurrentView('resource_lib');
     }
  };

  // --- Views ---

  // 1. Itinerary View (Current Mission)
  const ItineraryView = () => (
    <div className="space-y-4 p-4 pb-24 relative">
       {/* Top Status Card */}
       <div className="bg-teal-600 rounded-2xl p-5 text-white shadow-lg shadow-teal-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Navigation size={80} />
          </div>
          <div className="relative z-10">
             <div className="flex justify-between items-start mb-4">
                <div>
                   <div className="text-teal-100 text-xs font-medium mb-1 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      当前执行任务
                   </div>
                   <h2 className="text-xl font-bold">黄果树+苗寨5日深度游</h2>
                   <div className="flex items-center gap-2 mt-1 opacity-90">
                      <span className="text-xs font-mono bg-white/20 px-1.5 rounded">GZ-231215-A</span>
                      <span className="text-xs bg-orange-500 px-1.5 rounded font-bold">Day 2</span>
                   </div>
                </div>
             </div>
             
             <div className="grid grid-cols-3 gap-2 border-t border-teal-500/50 pt-3">
                <div className="text-center">
                   <div className="text-xl font-bold">24</div>
                   <div className="text-[10px] text-teal-100">游客(人)</div>
                </div>
                {/* Risk/Alert Block */}
                <div 
                   onClick={() => {
                      setSelectedChatId('ai');
                      setCurrentView('chat_detail');
                   }}
                   className="text-center border-l border-teal-500/50 cursor-pointer hover:bg-white/10 rounded transition-colors group"
                >
                   <div className="text-xl font-bold text-orange-300 group-hover:scale-110 transition-transform">4</div>
                   <div className="text-[10px] text-orange-200 font-bold flex items-center justify-center gap-0.5">
                      <AlertTriangle size={10} /> 风险
                   </div>
                </div>
                <div className="text-center border-l border-teal-500/50">
                   <div className="text-xl font-bold">98%</div>
                   <div className="text-[10px] text-teal-100">满意度</div>
                </div>
             </div>
          </div>
       </div>

       {/* Action: Next Check-in */}
       <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden animate-in slide-in-from-bottom-2">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
          <div className="flex justify-between items-center mb-2">
             <span className="text-xs font-bold text-slate-400 uppercase">下一步操作</span>
             <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">待打卡</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
             <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <MapPin size={24} />
             </div>
             <div>
                <h3 className="font-bold text-slate-800 text-lg">抵达黄果树景区入口</h3>
                <p className="text-xs text-slate-500">计划时间: 10:00 · 剩余 25分钟</p>
             </div>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200 active:scale-95 transition-all flex items-center justify-center gap-2">
             <CheckCircle2 size={18} />
             立即打卡
          </button>
       </div>

       {/* Timeline */}
       <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
             <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-800">今日行程</h3>
                <span className="text-xs text-slate-400">12月12日</span>
             </div>
             {/* Modify Button */}
             <button 
                onClick={() => setIsModifyModalOpen(true)}
                className="flex items-center gap-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg active:scale-95 transition-transform"
             >
                <Edit3 size={14} /> 申请调整
             </button>
          </div>
          
          {mockScheduleItems.map((item, idx) => (
             <ScheduleItem 
               key={idx} 
               time={item.time} 
               title={item.title} 
               status={item.status as any} 
               isNext={item.isNext} 
             />
          ))}
       </div>

       {/* Toast Notification */}
       {showToast && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-3 rounded-xl shadow-lg z-[100] flex items-center gap-2 text-sm animate-in fade-in zoom-in-95 slide-in-from-top-5">
             <CheckCircle2 size={18} className="text-green-400" />
             <span>调整申请已提交，等待计调确认</span>
          </div>
       )}
    </div>
  );

  // 2. Apps View (Tools)
  const AppsView = () => (
    <div className="p-4 space-y-6 pb-24">
       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <h2 className="text-lg font-bold mb-1">导游工具箱</h2>
          <p className="text-xs text-blue-100 opacity-80">提升带团效率，管理更轻松</p>
       </div>

       <div>
          <h3 className="font-bold text-slate-800 mb-3 px-1">常用应用</h3>
          <div className="grid grid-cols-4 gap-4">
             {tools.map(tool => (
                <div 
                  key={tool.id} 
                  onClick={() => handleToolClick(tool.id)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tool.color} shadow-sm group-active:scale-95 transition-transform`}>
                      <tool.icon size={24} />
                   </div>
                   <span className="text-xs font-medium text-slate-600 text-center">{tool.label}</span>
                </div>
             ))}
          </div>
       </div>

       <div>
         <h3 className="font-bold text-slate-800 mb-3 px-1">数据看板</h3>
         <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <div className="text-slate-400 text-xs mb-1">本月带团天数</div>
               <div className="text-2xl font-black text-slate-800">18 <span className="text-xs font-normal">天</span></div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <div className="text-slate-400 text-xs mb-1">游客好评率</div>
               <div className="text-2xl font-black text-slate-800">99.2%</div>
            </div>
         </div>
       </div>
    </div>
  );

  // 3. Message View
  const MessageView = () => (
     <div className="flex flex-col h-full bg-white pb-20">
        <div className="px-4 py-3 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-10">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="搜索消息..." className="w-full bg-slate-50 h-10 rounded-xl pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-teal-100" />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto">
           {chatList.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => {
                  if (chat.id === 'ai') {
                    setSelectedChatId('ai');
                    setCurrentView('chat_detail');
                  }
                }}
                className={`flex items-center gap-3 p-4 border-b border-slate-50 active:bg-slate-50 transition-colors ${chat.isTop ? 'bg-slate-50/50' : ''}`}
              >
                 <div className="relative shrink-0">
                    {chat.id === 'ai' ? (
                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                          <Bot size={24} />
                       </div>
                    ) : (
                       <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover border border-slate-100" alt={chat.name} />
                    )}
                    {chat.isTop && <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full"><div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div></div>}
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <h3 className={`font-bold text-sm truncate ${chat.id === 'ai' ? 'text-indigo-600' : 'text-slate-800'}`}>{chat.name}</h3>
                       <span className="text-[10px] text-slate-400 shrink-0">{chat.time}</span>
                    </div>
                    <p className={`text-xs truncate ${chat.isTop ? 'text-slate-600 font-medium' : 'text-slate-500'}`}>{chat.lastMsg}</p>
                 </div>
              </div>
           ))}
        </div>
     </div>
  );

  // 3.1 AI Chat Detail View
  const AiChatDetail = () => {
    // Mock Context-Aware Alerts based on "Huangguoshu" itinerary
    const [messages, setMessages] = useState<any[]>([
       { id: '1', role: 'ai', type: 'text', content: '小李你好！检测到你正在执行「黄果树+苗寨」Day 2 行程。以下是为您生成的今日风险预警与建议：' },
       
       // --- NEW RISK CARD START ---
       { 
         id: 'risk_1', 
         role: 'ai', 
         type: 'risk_card', 
         data: {
            title: '行程资源冲突预警',
            level: 'high',
            tourist: { name: '张建国', label: '素食主义' },
            conflict: { 
               item: '晚餐: 苗家全牛宴', 
               detail: '餐厅提供的固定菜单为全荤宴，无法满足该游客素食需求，极易引发投诉。',
               location: 'Day 2 · 18:00'
            }
         }
       },
       // --- NEW RISK CARD END ---

       { id: '2', role: 'ai', type: 'alert', data: {
          weather: { title: '天气变化', desc: '下午14:00预计有阵雨，建议提醒游客携带雨具。', level: 'warning' },
          crowd: { title: '景区舒适度', desc: '黄果树大瀑布当前人流较多，舒适度低。', level: 'error' },
          traffic: { title: '道路状况', desc: '前往天星桥路段预计拥堵15分钟。', level: 'warning' }
       }},
       { id: '3', role: 'ai', type: 'suggestion', title: '下一站：天星桥 · 重点讲解建议', content: '重点讲解“数生步”的含义，引导游客寻找自己的生日石，增加互动趣味性。注意提醒路面湿滑。' }
    ]);

    return (
       <div className="flex flex-col h-full bg-[#f5f7fa] absolute inset-0 z-50">
          <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10">
             <button onClick={() => setCurrentView('main')}><ArrowLeft size={22} className="text-slate-700" /></button>
             <div className="flex flex-col items-center">
                <span className="font-bold text-slate-800">小西-导游AI助手</span>
                <span className="text-[10px] text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 实时联网中</span>
             </div>
             <div className="w-6"></div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
             {messages.map(msg => (
                <div key={msg.id} className="animate-in slide-in-from-bottom-2 fade-in">
                   {/* Normal Text */}
                   {msg.type === 'text' && (
                      <div className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0"><Bot size={16}/></div>
                         <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm border border-slate-100 max-w-[85%]">
                            {msg.content}
                         </div>
                      </div>
                   )}

                   {/* Risk Warning Card */}
                   {msg.type === 'risk_card' && (
                      <div className="ml-11 bg-white rounded-2xl shadow-lg border border-red-100 overflow-hidden mb-2 max-w-[90%]">
                         {/* Card Header */}
                         <div className="bg-red-50 p-3 border-b border-red-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <AlertTriangle size={16} className="text-red-600" />
                               <span className="text-sm font-bold text-red-800">{msg.data.title}</span>
                            </div>
                            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">高风险</span>
                         </div>
                         
                         {/* Card Content */}
                         <div className="p-4 space-y-4">
                            {/* Tourist Info */}
                            <div className="flex items-start gap-3">
                               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                                  <User size={20} className="text-slate-500"/>
                               </div>
                               <div>
                                  <div className="text-sm font-bold text-slate-800">{msg.data.tourist.name}</div>
                                  <div className="flex items-center gap-2 mt-1">
                                     <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-medium">{msg.data.tourist.label}</span>
                                     <span className="text-[10px] text-slate-400">需重点关注</span>
                                  </div>
                               </div>
                            </div>

                            {/* Conflict Detail Box */}
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 relative">
                               <div className="absolute left-4 top-[-6px] w-3 h-3 bg-slate-50 border-t border-l border-slate-100 transform rotate-45"></div>
                               
                               <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs text-slate-500 font-bold">冲突行程节点</span>
                                  <span className="text-[10px] text-slate-400 font-mono">{msg.data.conflict.location}</span>
                               </div>
                               
                               <div className="flex items-center gap-2 mb-2">
                                  <Utensils size={14} className="text-indigo-500"/>
                                  <span className="text-sm font-bold text-slate-800">{msg.data.conflict.item}</span>
                               </div>
                               
                               <div className="flex items-start gap-1.5 text-xs text-red-600 bg-red-50/50 p-2 rounded">
                                  <AlertCircle size={12} className="shrink-0 mt-0.5" />
                                  <span className="leading-tight">{msg.data.conflict.detail}</span>
                               </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-1">
                               <button className="flex-1 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-1.5">
                                  <Phone size={14} /> 联系游客
                                </button>
                               <button className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-colors flex items-center justify-center gap-1.5">
                                  <Phone size={14} /> 联系计调
                               </button>
                            </div>
                         </div>
                      </div>
                   )}

                   {/* Rich Alerts */}
                   {msg.type === 'alert' && msg.data && (
                      <div className="ml-11 space-y-2 max-w-[85%]">
                         <AlertCard icon={CloudRain} title={msg.data.weather.title} desc={msg.data.weather.desc} level={msg.data.weather.level as any} />
                         <AlertCard icon={Users} title={msg.data.crowd.title} desc={msg.data.crowd.desc} level={msg.data.crowd.level as any} />
                         <AlertCard icon={Navigation} title={msg.data.traffic.title} desc={msg.data.traffic.desc} level={msg.data.traffic.level as any} />
                      </div>
                   )}

                   {/* Suggestion Card */}
                   {msg.type === 'suggestion' && (
                      <div className="ml-11 bg-white p-4 rounded-2xl shadow-sm border border-indigo-100">
                         <div className="flex items-center gap-2 mb-2 text-indigo-700 font-bold text-sm">
                            <Mic size={16} /> {msg.title}
                         </div>
                         <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2 rounded-lg">
                            {msg.content}
                         </p>
                      </div>
                   )}
                </div>
             ))}
          </div>

          <div className="bg-white p-3 border-t border-slate-200 flex gap-2 items-center">
             <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full"><Mic size={20}/></button>
             <input className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-100" placeholder="问问关于当前行程的问题..." />
             <button className="p-2 bg-indigo-600 text-white rounded-full"><Send size={18}/></button>
          </div>
       </div>
    );
  }

  // 4. Mine View (Profile) - Design Matching Image
  const MineView = () => (
    <div className="min-h-full bg-[#f5f7fa] pb-24 relative">
       {/* Green Header */}
       <div className="h-48 bg-[#009b62] relative rounded-b-[3rem] shadow-sm">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute top-6 right-6 text-white cursor-pointer hover:opacity-80">
             <Settings size={22} />
          </div>
       </div>
       
       {/* Profile Card */}
       <div className="px-4 -mt-24 relative z-10">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm mb-4">
             {/* Top Row: Avatar + Info + QR */}
             <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                   <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden -mt-10 bg-white">
                      <img src="https://picsum.photos/id/64/200/200" className="w-full h-full object-cover" alt="Li Ming" />
                   </div>
                   <div className="pt-1">
                      <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                         李明 
                         <Award size={20} className="text-yellow-500 fill-yellow-500" />
                      </h2>
                      <p className="text-sm text-slate-400 mt-1 font-mono tracking-wide">ID: 52010029</p>
                      <div className="flex gap-2 mt-2">
                         <span className="text-[10px] bg-[#fff8e1] text-[#b78103] px-2 py-1 rounded-lg font-bold">高级导游</span>
                         <span className="text-[10px] bg-[#e3f9e5] text-[#1f8c35] px-2 py-1 rounded-lg font-bold">金牌服务</span>
                      </div>
                   </div>
                </div>
                <div className="text-slate-400 mt-1 cursor-pointer hover:text-slate-600">
                    <QrCode size={24} />
                </div>
             </div>

             {/* Advantages */}
             <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-400 mb-3">个人优势</h3>
                <div className="flex flex-wrap gap-2">
                   {['#幽默风趣', '#历史通', '#摄影达人', '#英语流利'].map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-bold">
                         {tag}
                      </span>
                   ))}
                </div>
             </div>

             {/* Stats */}
             <div className="grid grid-cols-3 gap-4 bg-[#fafafa] rounded-2xl p-4">
                <div className="text-center border-r border-slate-100">
                   <div className="text-xl font-black text-slate-800">8<span className="text-xs font-medium ml-0.5">年</span></div>
                   <div className="text-xs text-slate-400 mt-1">从业经验</div>
                </div>
                <div className="text-center border-r border-slate-100">
                   <div className="text-xl font-black text-slate-800">1200+</div>
                   <div className="text-xs text-slate-400 mt-1">带团数量</div>
                </div>
                <div className="text-center">
                   <div className="text-xl font-black text-[#009b62]">4.9</div>
                   <div className="text-xs text-slate-400 mt-1">游客评分</div>
                </div>
             </div>
          </div>

          {/* 3 Core Blocks */}
          <div className="grid grid-cols-3 gap-3 mb-4">
             <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm h-28 cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2">
                   <Flag size={20} />
                </div>
                <div className="text-sm font-bold text-slate-800">我的旅行团</div>
                <div className="text-xs text-slate-400 mt-0.5">1,204 团</div>
             </div>
             <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm h-28 cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-2">
                   <Map size={20} />
                </div>
                <div className="text-sm font-bold text-slate-800">我的足迹</div>
                <div className="text-xs text-slate-400 mt-0.5">32 城市</div>
             </div>
             <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm h-28 cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-2">
                   <Wallet size={20} />
                </div>
                <div className="text-sm font-bold text-slate-800">我的钱包</div>
                <div className="text-xs text-slate-400 mt-0.5">¥ 12,880</div>
             </div>
          </div>

          {/* Settings List */}
          <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
             <ListItem icon={ShieldCheck} label="账号与安全" />
             <ListItem icon={FileText} label="服务协议" />
             <ListItem icon={MessageSquare} label="帮助与反馈" />
             <ListItem icon={BookOpen} label="关于我们" value="v1.2.0" isLast />
          </div>

          <button className="w-full bg-white text-red-500 font-bold py-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
             <LogOut size={18} /> 退出登录
          </button>
       </div>
    </div>
  );

  // --- Main Render ---

  if (currentView === 'chat_detail') {
    return <AiChatDetail />;
  }

  if (currentView === 'resource_lib') {
    return <GuideResourceLibrary onBack={() => setCurrentView('main')} />;
  }

  return (
    <div className="flex flex-col h-full bg-slate-50">
      
      {/* Dynamic Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
         {activeTab === 'itinerary' && <ItineraryView />}
         {activeTab === 'apps' && <AppsView />}
         {activeTab === 'message' && <MessageView />}
         {activeTab === 'mine' && <MineView />}
      </main>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-slate-200 pb-safe z-40 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-4 h-16">
          <NavButton 
             active={activeTab === 'itinerary'} 
             onClick={() => setActiveTab('itinerary')} 
             icon={Calendar} 
             label="行程" 
          />
          <NavButton 
             active={activeTab === 'apps'} 
             onClick={() => setActiveTab('apps')} 
             icon={LayoutGrid} 
             label="应用" 
          />
          <NavButton 
             active={activeTab === 'message'} 
             onClick={() => setActiveTab('message')} 
             icon={MessageSquare} 
             label="消息" 
             badge={3}
          />
          <NavButton 
             active={activeTab === 'mine'} 
             onClick={() => setActiveTab('mine')} 
             icon={User} 
             label="我的" 
          />
        </div>
      </div>

      {/* Modify Itinerary Modal */}
      {isModifyModalOpen && (
         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModifyModalOpen(false)}></div>
            <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl relative z-10 flex flex-col max-h-[85vh] animate-in slide-in-from-bottom-10">
               {/* Modal Header */}
               <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                     <Edit3 className="text-indigo-600" size={20} />
                     申请调整行程
                  </h3>
                  <button onClick={() => setIsModifyModalOpen(false)} className="bg-slate-100 p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors">
                     <X size={20} />
                  </button>
               </div>

               {/* Modal Content */}
               <div className="flex-1 overflow-y-auto p-5 space-y-5">
                  <div>
                     <h4 className="text-sm font-bold text-slate-600 mb-3">1. 选择需调整的行程节点 (仅限未完成)</h4>
                     <div className="space-y-2">
                        {mockScheduleItems.filter(i => i.status !== 'completed').map(item => {
                           const isSelected = selectedEventIds.includes(item.id);
                           return (
                              <div 
                                 key={item.id} 
                                 onClick={() => handleToggleEvent(item.id)}
                                 className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${isSelected ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
                              >
                                 <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-transparent'}`}>
                                       <CheckCircle2 size={14} />
                                    </div>
                                    <div>
                                       <div className={`text-sm font-bold ${isSelected ? 'text-indigo-700' : 'text-slate-700'}`}>{item.title}</div>
                                       <div className="text-xs text-slate-400 font-mono">{item.time}</div>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>

                  <div>
                     <h4 className="text-sm font-bold text-slate-600 mb-2">2. 填写调整原因</h4>
                     <textarea 
                        value={modifyReason}
                        onChange={(e) => setModifyReason(e.target.value)}
                        placeholder="例如：游客集体要求更换为火锅；因堵车预计延误1小时..."
                        className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 resize-none"
                     />
                  </div>
               </div>

               {/* Modal Footer */}
               <div className="p-5 border-t border-slate-100 bg-slate-50 rounded-b-3xl">
                  <button 
                     onClick={handleSubmitModification}
                     disabled={selectedEventIds.length === 0 || !modifyReason.trim()}
                     className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                     提交给计调审核
                  </button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

// --- Sub-components ---

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ElementType; label: string; badge?: number }> = ({ active, onClick, icon: Icon, label, badge }) => (
   <button onClick={onClick} className="flex flex-col items-center justify-center gap-1 relative">
      <div className={`transition-colors ${active ? 'text-teal-600' : 'text-slate-400'}`}>
         <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      </div>
      <span className={`text-[10px] font-medium transition-colors ${active ? 'text-teal-600' : 'text-slate-400'}`}>
         {label}
      </span>
      {badge && (
         <span className="absolute top-2 right-6 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full border border-white">
            {badge}
         </span>
      )}
   </button>
);

const ScheduleItem: React.FC<{ time: string; title: string; status: 'completed' | 'pending'; isNext?: boolean }> = ({ time, title, status, isNext }) => (
   <div className={`flex items-center gap-4 p-3 rounded-xl border ${isNext ? 'bg-orange-50 border-orange-200' : 'bg-white border-slate-100'}`}>
      <div className={`font-mono text-sm font-bold ${isNext ? 'text-orange-600' : 'text-slate-500'}`}>{time}</div>
      <div className={`w-3 h-3 rounded-full border-2 ${status === 'completed' ? 'bg-teal-500 border-teal-500' : isNext ? 'bg-white border-orange-500' : 'bg-slate-200 border-slate-200'}`}></div>
      <div className={`flex-1 text-sm font-medium ${status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{title}</div>
      {status === 'completed' && <CheckCircle2 size={16} className="text-teal-500" />}
   </div>
);

const AlertCard: React.FC<{ icon: React.ElementType; title: string; desc: string; level: 'warning' | 'error' }> = ({ icon: Icon, title, desc, level }) => (
   <div className={`p-3 rounded-xl border flex items-start gap-3 ${level === 'warning' ? 'bg-orange-50 border-orange-100' : 'bg-red-50 border-red-100'}`}>
      <div className={`p-1.5 rounded-full ${level === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
         <Icon size={16} />
      </div>
      <div>
         <div className={`text-xs font-bold mb-0.5 ${level === 'warning' ? 'text-orange-800' : 'text-red-800'}`}>{title}</div>
         <div className={`text-xs ${level === 'warning' ? 'text-orange-600' : 'text-red-600'}`}>{desc}</div>
      </div>
   </div>
);

const BigMenuCard: React.FC<{ title: string; sub: string; icon: React.ElementType; color: string }> = ({ title, sub, icon: Icon, color }) => (
   <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm h-32 cursor-pointer active:scale-95 transition-transform">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${color}`}>
         <Icon size={20} />
      </div>
      <div className="text-sm font-bold text-slate-800">{title}</div>
      <div className="text-xs text-slate-400 mt-1">{sub}</div>
   </div>
);

const ListItem: React.FC<{ icon: React.ElementType; label: string; value?: string; isLast?: boolean }> = ({ icon: Icon, label, value, isLast }) => (
   <div className={`flex items-center justify-between p-4 ${!isLast ? 'border-b border-slate-50' : ''} cursor-pointer hover:bg-slate-50 transition-colors`}>
      <div className="flex items-center gap-3">
         <Icon size={18} className="text-slate-400" />
         <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      <div className="flex items-center gap-2">
         {value && <span className="text-xs text-slate-400">{value}</span>}
         <ChevronRight size={16} className="text-slate-300" />
      </div>
   </div>
);

export default GuideApp;
