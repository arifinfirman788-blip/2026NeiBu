
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, MoreHorizontal, Phone, Mic, Send, Plus, MapPin, Globe, ChevronRight, Sparkles, X, Medal, Menu } from 'lucide-react';
import { ServiceItem, Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface Props {
  agent: ServiceItem;
  onBack: () => void;
}

const AgentChatView: React.FC<Props> = ({ agent, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false); // Track if user has started chatting
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, hasStartedChat]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    if (!hasStartedChat) setHasStartedChat(true);

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: text
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      console.error(e);
      setIsTyping(false);
    } finally {
      setIsTyping(false);
    }
  };

  // --- Components for the "Home" State ---

  const AgentHomeHeader = () => (
    <div className="flex items-center justify-between px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-3">
         {/* Using Menu icon style from design, but keeps back functionality */}
        <button onClick={onBack} className="p-1 hover:bg-black/5 rounded-full transition-colors">
           <Menu size={24} className="text-slate-800" />
        </button>
        <h1 className="text-lg font-black text-slate-900 tracking-tight">贵州天悦旅行</h1>
      </div>
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-indigo-50">
            <div className="w-4 h-4 bg-[#7c3aed] rounded-full flex items-center justify-center text-[10px] font-bold text-white">
               88
            </div>
            <span className="text-[10px] font-bold text-slate-700">金牌导游</span>
         </div>
         <button className="w-8 h-8 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm flex items-center justify-center text-slate-600">
            <Plus size={18} />
         </button>
         <button className="w-8 h-8 rounded-full text-slate-600 flex items-center justify-center">
            <MoreHorizontal size={20} />
         </button>
      </div>
    </div>
  );

  const AgentHomeContent = () => (
     <div className="px-5 pt-4 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
        
        {/* Hero Section */}
        <div className="flex justify-between items-start mb-8 relative">
           <div className="pt-2 z-10 relative max-w-[60%]">
              <h2 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">午安!</h2>
              <p className="text-lg text-slate-600 font-bold mb-3 tracking-wide">我是你的旅行管家</p>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
                 <Globe size={14} className="text-blue-500" />
                 行程/景点/美食/交通等问题都可以问
              </div>
              
              {/* Marketing Pill - Purple Gradient */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white pl-3 pr-2 py-1.5 rounded-full shadow-lg shadow-indigo-200 cursor-pointer active:scale-95 transition-transform">
                 <Sparkles size={12} className="text-yellow-300 fill-yellow-300 animate-pulse" />
                 <span className="text-xs font-bold">手机号登录领奖品</span>
                 <div className="text-white/60 ml-1">
                    <X size={12} />
                 </div>
              </div>
           </div>

           {/* Stylized Image Blob (Right Side) */}
           <div className="absolute -top-10 -right-8 w-56 h-56 z-0">
               {/* Main Circle Image */}
               <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/40 shadow-2xl relative">
                  <img src="https://picsum.photos/id/1015/400/400" className="w-full h-full object-cover" alt="Scenery" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
               </div>
               {/* Decorative Background Blur */}
               <div className="absolute top-10 left-4 w-full h-full bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
           </div>
        </div>

        {/* Suggestion Card Container */}
        <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-indigo-100/40 border border-white/60">
           
           <div className="flex justify-between items-start mb-5">
              <div>
                 <h3 className="text-xl font-black text-slate-800">你可以这样问</h3>
                 <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">HAVE A TRY</span>
              </div>
              <div className="text-right">
                 <div className="text-xs font-bold text-slate-800">今日 健康</div>
                 <div className="text-[10px] text-slate-400">周四 12/11</div>
              </div>
           </div>

           {/* Visual Cards */}
           <div className="flex gap-1 mb-6 h-28 rounded-2xl overflow-hidden relative">
              {/* Left Card */}
              <div 
                 onClick={() => handleSend('贵州山水秘境探索')}
                 className="flex-[1.4] relative cursor-pointer group overflow-hidden"
              >
                 <img src="https://picsum.photos/id/1036/300/300" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Scenery" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-white font-bold text-sm leading-tight mb-0.5">贵州山水秘境探索</span>
                    <span className="text-[9px] text-white/80 font-light">天逸为你定制专属行程 乐享旅途</span>
                 </div>
              </div>
              
              {/* Right Card */}
              <div 
                 onClick={() => handleSend('乐享旅途')}
                 className="flex-1 relative cursor-pointer group overflow-hidden"
              >
                 <img src="https://picsum.photos/id/1043/300/300" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Scenery" />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
           </div>

           {/* Text Suggestions List */}
           <div className="space-y-3">
              {[
                 "黄果树瀑布最佳游览时间?",
                 "西江千户苗寨住宿推荐?",
                 "梵净山登山攻略?"
              ].map((text, idx) => (
                 <div 
                    key={idx}
                    onClick={() => handleSend(text)}
                    className="flex items-center justify-between p-4 bg-white border border-slate-50 shadow-sm rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group"
                 >
                    <div className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded-full bg-[#dbeafe] text-[#3b82f6] flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform">#</div>
                       <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{text}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-400" />
                 </div>
              ))}
           </div>
        </div>
     </div>
  );

  return (
    <div className={`flex flex-col h-full w-full transition-colors duration-500 relative ${hasStartedChat ? 'bg-[#f5f7fa]' : 'bg-gradient-to-b from-[#e0e7ff] via-[#eff6ff] to-[#f5f7fa]'}`}>
      
      {/* Dynamic Background Blob for Home */}
      {!hasStartedChat && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[30%] bg-purple-200/40 rounded-full blur-3xl"></div>
           <div className="absolute top-[20%] right-[0%] w-[30%] h-[20%] bg-blue-200/40 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Header logic: Custom header for Home, Standard header for Chat */}
      {!hasStartedChat ? (
         <AgentHomeHeader />
      ) : (
         <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-3">
               <button onClick={onBack} className="p-1 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ArrowLeft size={22} className="text-gray-700" />
               </button>
               <div className="flex items-center gap-2">
                  <div className="relative">
                     <img src={agent.avatarUrl} alt={agent.name} className="w-8 h-8 rounded-full border border-gray-200" />
                     <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                     <h3 className="font-bold text-sm text-gray-900 leading-tight">{agent.name}</h3>
                     <p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                        官方认证 · 在线
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex gap-3 text-gray-500">
               <Phone size={20} />
               <MoreHorizontal size={20} />
            </div>
         </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative z-0 w-full">
         {!hasStartedChat ? (
            <AgentHomeContent />
         ) : (
            <div className="p-4 space-y-4 pb-20">
               {/* Chat Context Header */}
               <div className="flex flex-col items-center gap-2 py-4">
                  <div className="w-16 h-16 rounded-full p-1 bg-white shadow-sm">
                     <img src={agent.avatarUrl} className="w-full h-full rounded-full object-cover" alt="avatar" />
                  </div>
                  <div className="text-center">
                     <h2 className="font-bold text-slate-800">{agent.organizationName}</h2>
                     <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">国企背景</span>
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">纯玩无购物</span>
                     </div>
                  </div>
               </div>

               {/* Welcome Message */}
               <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white shadow-sm">
                     <img src={agent.avatarUrl} className="w-full h-full object-cover" alt="avatar" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-700 text-sm leading-relaxed max-w-[85%] border border-slate-100">
                     <p className="mb-2">您好！我是{agent.name}的AI分身。👋</p>
                     <p className="mb-2">{agent.description}</p>
                     <p className="font-bold text-indigo-600 cursor-pointer" onClick={() => handleSend(agent.promptQuestion)}>
                        试试问我：{agent.promptQuestion}
                     </p>
                  </div>
               </div>

               {/* Message History */}
               {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'items-start'} animate-in fade-in slide-in-from-bottom-2`}>
                     <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden border border-white shadow-sm ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-white'}`}>
                        {msg.role === 'user' ? (
                           <span className="text-xs font-bold text-white">我</span>
                        ) : (
                           <img src={agent.avatarUrl} className="w-full h-full object-cover" alt="avatar" />
                        )}
                     </div>
                     <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm ${
                        msg.role === 'user' 
                           ? 'bg-indigo-600 text-white rounded-tr-none' 
                           : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                     }`}>
                        {msg.text}
                     </div>
                  </div>
               ))}
               
               {isTyping && (
                  <div className="flex gap-3 items-start">
                     <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white shadow-sm">
                        <img src={agent.avatarUrl} className="w-full h-full object-cover" alt="avatar" />
                     </div>
                     <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                        <div className="flex gap-1">
                           <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                           <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                           <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                     </div>
                  </div>
               )}
               <div ref={messagesEndRef} />
            </div>
         )}
      </div>

      {/* Input Area - Always visible now, acts as the "Dialog Box" requested */}
      <div className={`bg-white border-t border-slate-100 p-3 pb-safe transition-all duration-300 z-40 w-full ${!hasStartedChat ? 'shadow-[0_-5px_20px_rgba(0,0,0,0.05)]' : ''}`}>
         {hasStartedChat && (
            <div className="flex gap-2 mb-2 overflow-x-auto no-scrollbar px-1">
               {['行程报价', '近期优惠', '定制路线', '联系人工'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200 whitespace-nowrap hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-colors">
                     {tag}
                  </button>
               ))}
            </div>
         )}
         <div className="flex items-center gap-3">
             <button className="text-slate-400 hover:text-slate-600 transition-colors">
               <Plus size={24} />
             </button>
             <div className="flex-1 bg-slate-100 rounded-full flex items-center px-4 py-2 border border-transparent focus-within:border-indigo-200 focus-within:bg-white transition-all">
               <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={hasStartedChat ? "发送消息..." : "问问贵州旅游..."}
                  className="flex-1 bg-transparent outline-none text-sm text-slate-800 placeholder-slate-400"
               />
               <Mic size={18} className="text-slate-400 ml-2" />
             </div>
             <button 
               onClick={() => handleSend()}
               className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  input.trim() 
                     ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-100' 
                     : 'bg-slate-100 text-slate-400 scale-95'
               }`}
            >
               <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />
             </button>
         </div>
      </div>
    </div>
  );
};

export default AgentChatView;
