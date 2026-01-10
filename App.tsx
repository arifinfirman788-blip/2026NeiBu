
import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ItineraryTimeline from './components/ItineraryTimeline';
import HomeView from './components/HomeView';
import ExpertListView from './components/ExpertListView';
import AgentChatView from './components/AgentChatView';
import AgencyApp from './components/agency/AgencyApp';
import GuideApp from './components/guide/GuideApp';
import MineView from './components/MineView';
import { ServiceItem, UserRole, Order } from './types';
import { 
  Smartphone, LayoutDashboard, ArrowRight, Layers, Bot, 
  Briefcase, Landmark, Zap, Mountain, Map, LineChart, 
  CheckCircle2, ShieldAlert, Utensils, BedDouble, 
  FileSearch, MessageSquare, Sparkles, Heart,
  LifeBuoy, Store, Megaphone, X, ChevronRight, Cpu, Users, Database, ShieldCheck, Box, Network, ClipboardList,
  ShoppingBag, ExternalLink, Wallet, CreditCard, BarChart3, Workflow, Building2, Truck
} from 'lucide-react';

import hxxQrCode from './image/huangxiaoxi.png';
import jingquQrCode from './image/jingqu.jpg';
import jingquImg1 from './image/jingqu1.png';
import jingquImg2 from './image/jingqu2.png';
import tiyanmaQrCode from './image/tiyanma.png';
import jiudianImg from './image/jiudian.png';
import canyinImg from './image/canyin.jpg';
import dapingImg from './image/daping.png';
import huangxiaoxiImg1 from './image/huangxiaoxi1.png';

// --- MOBILE APP WRAPPER ---
const MobileWrapper: React.FC<{ children: React.ReactNode; onBack: () => void }> = ({ children, onBack }) => (
     <div className="min-h-[100dvh] w-full bg-[#f1f5f9] flex items-center justify-center font-sans overflow-hidden relative">
        <div className="hidden md:block absolute top-8 left-8">
           <button onClick={onBack} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-slate-600 font-bold hover:bg-slate-50 transition-colors border border-slate-200">
              <ArrowRight className="rotate-180" size={18} /> 返回战略规划
           </button>
        </div>
        <div className="w-full h-[100dvh] md:h-[844px] md:w-[390px] bg-white md:rounded-[3rem] md:border-[8px] md:border-slate-800 md:shadow-2xl relative overflow-hidden flex flex-col">
           <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-50 pointer-events-none"></div>
           {children}
        </div>
     </div>
);

// --- COMPONENT: Matrix Diagram (3D Matrix View) ---
const MatrixDiagram = ({ onNavigate, onAgentClick, setActiveQrCode, handleEnterApp, orders, handleUpdateOrder, isMenuOpen, setIsMenuOpen, onRingClick }: { 
  onNavigate?: (tab: 'matrix' | 'scenario' | 'design', client?: 'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining') => void,
  onAgentClick?: (agent: 'gov' | 'spot' | 'agency' | 'living' | 'hotel' | 'dining') => void,
  setActiveQrCode: (code: string | null) => void,
  handleEnterApp: (role: UserRole) => void,
  orders: Order[],
  handleUpdateOrder: (order: Order) => void,
  isMenuOpen: boolean,
  setIsMenuOpen: (open: boolean) => void,
  onRingClick?: (ring: 'org' | 'role' | 'func') => void
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentDesign, setCurrentDesign] = useState<'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining'>('xiaoxi');

  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-2xl font-black text-slate-800 mb-4">贵州旅游行程服务总入口架构</h3>
        <p className="text-slate-500 text-sm mb-8">意图识别 · 任务调度 · 决策支持</p>
        
        {/* Ring Info Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => onRingClick?.('org')}
            className="px-6 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200 font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            组织端智能体
          </button>
          <button 
            onClick={() => onRingClick?.('role')}
            className="px-6 py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-full border border-violet-200 font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            角色智能体
          </button>
          <button 
            onClick={() => onRingClick?.('func')}
            className="px-6 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-full border border-teal-200 font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
            功能智能体
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-center overflow-hidden">
        {/* 0. 顶部触点层 */}
        <div className={`flex gap-4 mb-16 transition-all duration-700 ${isExpanded ? '-translate-x-[400px]' : ''}`}>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
            <span className="text-xs font-black text-indigo-400">服务触点</span>
            <div className="h-4 w-px bg-indigo-200"></div>
            {['微信', '抖音', 'HarmonyOS', 'App', '各嵌入涉旅平台'].map(t => (
              <span key={t} className="text-xs font-bold text-slate-600 px-2">{t}</span>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center relative min-h-[800px]" onClick={() => isExpanded && setIsExpanded(false)}>
          {/* Architecture Diagram Container */}
          <div className={`relative w-full max-w-5xl h-[600px] perspective-[2000px] transition-all duration-700 ease-in-out ${isExpanded ? 'scale-[0.6] -translate-x-[50%] -translate-y-10' : ''}`} onClick={(e) => e.stopPropagation()}>
            
            {/* A. 顶层：总入口核心 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-64 text-center cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                setCurrentDesign('xiaoxi');
                setIsExpanded(!isExpanded);
            }}>
              <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-200 border-b-4 border-indigo-800 transform hover:scale-105 transition-transform duration-500">
                <img src={huangxiaoxiImg1} alt="黄小西" className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-white/50" />
                <h4 className="text-white font-black text-lg">黄小西</h4>
                <p className="text-indigo-100 text-[10px] mt-1">全省旅游行程服务总入口</p>
              </div>
              {/* 连接线 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-indigo-500 to-transparent"></div>
            </div>

            {/* B. 第一层环：企业端智能体 */}
            <div 
              className="absolute top-24 left-1/2 w-[800px] h-[160px] border-2 border-indigo-100 bg-indigo-50/10 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-40 flex items-center justify-center transition-all group/ring"
            >
              <RingLabel label="企业端智能体" color="indigo" className="-top-20 [transform:translateX(-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '60s' }}>
                <MatrixNode label="旅行社智能体" angle={0} color="blue" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('agency'); setIsExpanded(true); }} />
                <MatrixNode label="酒店智能体" angle={60} color="blue" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('hotel'); setIsExpanded(true); }} />
                <MatrixNode label="景区智能体" angle={120} color="blue" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('spot'); setIsExpanded(true); }} />
                <MatrixNode label="政府智能体" angle={180} color="gov" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('gov'); setIsExpanded(true); }} />
                <MatrixNode label="出行智能体" angle={240} color="gray" />
                <MatrixNode label="餐饮智能体" angle={300} color="blue" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('dining'); setIsExpanded(true); }} />
              </div>
            </div>

            {/* C. 第二层环：角色智能体 */}
            <div 
              className="absolute top-56 left-1/2 w-[900px] h-[200px] border-2 border-slate-200 bg-slate-50/20 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-30 shadow-sm transition-all group/ring"
            >
              <RingLabel label="角色智能体" color="violet" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
                <MatrixNode label="销售" angle={0} color="violet" />
                <MatrixNode label="导游" angle={30} color="violet" />
                <MatrixNode label="线路设计师" angle={330} color="violet" />
                <MatrixNode label="行业专家" angle={90} color="violet" />
                <MatrixNode label="气象助手" angle={110} color="violet" />
                <MatrixNode label="客房管家" angle={180} color="violet" />
                <MatrixNode label="餐饮部" angle={210} color="violet" />
                <MatrixNode label="前台接待" angle={150} color="violet" />
                <MatrixNode label="执法监督" angle={270} color="violet" />
                <MatrixNode label="运行监测" angle={290} color="violet" />
              </div>
            </div>

            {/* D. 第三层环：功能智能体 */}
            <div 
              className="absolute top-96 left-1/2 w-[1000px] h-[240px] border-2 border-teal-100 bg-teal-50/10 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-20 shadow-sm transition-all group/ring"
            >
              <RingLabel label="功能智能体" color="teal" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '100s' }}>
                <MatrixNode label="房态查询" angle={0} color="teal" />
                <MatrixNode label="预约送餐" angle={30} color="teal" />
                <MatrixNode label="天气动态调整" angle={60} color="teal" />
                <MatrixNode label="智能行程规划" angle={90} color="teal" />
                <MatrixNode label="智能订购" angle={120} color="teal" />
                <MatrixNode label="政策问答" angle={150} color="teal" />
                <MatrixNode label="智能导览" angle={180} color="teal" />
                <MatrixNode label="客流预测" angle={210} color="teal" />
                <MatrixNode label="活动智能推荐" angle={240} color="teal" />
                <MatrixNode label="游记生成" angle={270} color="teal" />
                <MatrixNode label="旅居智能体" angle={300} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('xiaoxi'); setIsExpanded(true); }} />
                <MatrixNode label="紧急救援" angle={330} color="teal" />
              </div>
            </div>
          </div>

          {/* Right Side Content Panel */}
          <div 
            className={`absolute right-0 top-0 w-[800px] h-full transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 border border-white shadow-2xl h-[750px] overflow-y-auto no-scrollbar relative">
               <button 
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-8 right-8 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors z-50"
               >
                  <ArrowRight size={20} />
               </button>

               <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 animate-in slide-in-from-right-12 duration-700">
                  {/* Text Content */}
                  <div className="space-y-8">
                     {currentDesign === 'xiaoxi' && (
                        <>
                           <h3 className="text-4xl font-black text-teal-600 flex items-center gap-3"><Bot size={40}/> 多彩黄小西 · C端伴游</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">作为官方数字分身，提供 24h 1对1 服务。重点建立信任感与不确定性消除。同时面向数字游民与长期旅居人群，提供虚实结合的社区交互、灵活办公空间预约及在地化深度文化体验。</p>
                           <ul className="space-y-4">
                              <DesignFeature icon={LayoutDashboard} t="省级旅游行程服务总入口" d="服务资源聚合，一站式获取全省景区、酒店及交通等官方服务。" />
                              <DesignFeature icon={LifeBuoy} t="24小时行程陪伴" d="智能AI全天候在线，提供实时问答、行程动态调整与应急响应。" />
                              <DesignFeature icon={Heart} t="旅居管家" d="面向长期旅居人群，提供租房对接、社群融入及本地生活指引。" />
                           </ul>
                           <div className="flex flex-col gap-6 pt-4">
                              <button onClick={() => handleEnterApp('tourist')} className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-5 rounded-2xl font-black shadow-xl transition-all active:scale-95 text-lg">
                                 进入游客端演示
                              </button>
                              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(hxxQrCode)}>
                                 <img src={hxxQrCode} alt="扫码体验" className="w-24 h-24 rounded-xl object-cover" />
                                 <div>
                                    <div className="font-bold text-slate-800 text-lg">扫码体验</div>
                                    <div className="text-xs text-slate-400 mt-1">支持 iOS / Android / 微信小程序</div>
                                 </div>
                              </div>
                           </div>
                        </>
                     )}

                     {currentDesign === 'spot' && (
                        <>
                           <h3 className="text-4xl font-black text-emerald-600 flex items-center gap-3"><Mountain size={40}/> 景区智能体 · 产品设计</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">面向游客的景区内实时服务入口，聚合门票、导览、攻略与现场问答，强调拟物化体验与“点到即得”的高频服务闭环。</p>
                           <div className="grid grid-cols-1 gap-4">
                              <div className="p-6 bg-emerald-50/60 rounded-3xl border border-emerald-100">
                                 <div className="font-bold text-slate-800 mb-2">核心能力</div>
                                 <div className="text-sm text-slate-500">景区问答、地图导览、票务/厕所/交通快捷入口。</div>
                              </div>
                              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                 <div className="font-bold text-slate-800 mb-2">对接路径</div>
                                 <div className="text-sm text-slate-500">与产品端方案联动，支持能力分发到各触点渠道。</div>
                              </div>
                           </div>
                           <div className="flex flex-col gap-6 pt-4">
                              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(jingquQrCode)}>
                                 <img src={jingquQrCode} alt="扫码体验" className="w-24 h-24 rounded-xl object-cover" />
                                 <div>
                                    <div className="font-bold text-slate-800 text-lg">扫码体验景区服务</div>
                                    <div className="text-xs text-slate-400 mt-1">获取景区实时导览与智能问答</div>
                                 </div>
                              </div>
                           </div>
                        </>
                     )}

                     {currentDesign === 'agency' && (
                        <>
                           <h3 className="text-4xl font-black text-indigo-600 flex items-center gap-3"><Briefcase size={40}/> 旅行社智能体 · B端工作台</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">专为旅行社打造的 AI 协同办公系统，涵盖线路设计、销售转化、导游调度等核心业务流程，通过大模型能力显著提升人效。</p>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-3xl">
                                 <LayoutDashboard className="text-indigo-600 mb-4" size={24} />
                                 <h4 className="font-bold text-slate-800 mb-1 text-lg">B端 · 旅行社PC</h4>
                                 <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Agency Management</p>
                                 <ul className="space-y-2">
                                    <li className="text-xs text-slate-500 flex items-center gap-2">
                                       <CheckCircle2 size={14} className="text-indigo-500" /> 供应商资源组织与上架管控
                                    </li>
                                    <li className="text-xs text-slate-500 flex items-center gap-2">
                                       <CheckCircle2 size={14} className="text-indigo-500" /> 补贴一键申报 & 财务审计
                                    </li>
                                 </ul>
                              </div>
                              <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-3xl">
                                 <Briefcase className="text-orange-600 mb-4" size={24} />
                                 <h4 className="font-bold text-slate-800 mb-1 text-lg">员工端 · 导游APP</h4>
                                 <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Guide & Staff App</p>
                                 <ul className="space-y-2">
                                    <li className="text-xs text-slate-500 flex items-center gap-2">
                                       <CheckCircle2 size={14} className="text-orange-500" /> 个人分销二维码实时生成
                                    </li>
                                    <li className="text-xs text-slate-500 flex items-center gap-2">
                                       <CheckCircle2 size={14} className="text-orange-500" /> 带团佣金分成实时入账
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="flex flex-col gap-6 pt-4">
                              <button onClick={() => handleEnterApp('agency')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-black shadow-xl transition-all active:scale-95 text-lg">
                                 进入旅行社端演示
                              </button>
                           </div>
                        </>
                     )}

                     {currentDesign === 'hotel' && (
                        <>
                           <h3 className="text-4xl font-black text-violet-600 flex items-center gap-3"><BedDouble size={40}/> 酒店智能体 · 智慧住宿</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">提供从预订、入住到离店的全流程智慧服务，实现无接触式服务闭环与高效运营。</p>
                           <ul className="space-y-4">
                              <DesignFeature icon={BedDouble} t="无接触服务" d="VR看房、在线选房、自助入住/退房。" />
                              <DesignFeature icon={LayoutDashboard} t="多租户管理" d="连锁集团统一后台，门店数据隔离与个性化配置。" />
                              <DesignFeature icon={MessageSquare} t="客房管家" d="即时通讯、多语言翻译、快速响应服务需求。" />
                           </ul>
                           <div className="flex flex-col gap-6 pt-4">
                              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(tiyanmaQrCode)}>
                                 <img src={tiyanmaQrCode} alt="扫码体验" className="w-24 h-24 rounded-xl object-cover" />
                                 <div>
                                    <div className="font-bold text-slate-800 text-lg">扫码体验</div>
                                    <div className="text-xs text-slate-400 mt-1">获取酒店智能体全流程体验</div>
                                 </div>
                              </div>
                           </div>
                        </>
                     )}

                     {currentDesign === 'dining' && (
                        <>
                           <h3 className="text-4xl font-black text-orange-600 flex items-center gap-3"><Utensils size={40}/> 餐饮智能体 · 智慧美食</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">连接食客与餐厅，提供智能点餐、排队取号及个性化口味推荐，提升用餐体验与餐厅运营效率。</p>
                           <ul className="space-y-4">
                             <DesignFeature icon={Utensils} t="智能点餐" d="口味画像推荐、多人协作点餐、语音下单。" />
                             <DesignFeature icon={LayoutDashboard} t="餐厅管理" d="桌台状态实时同步、排队取号、到号预警。" />
                             <DesignFeature icon={Zap} t="呼叫服务" d="一键触发加水、催菜等原子化服务，直达服务员。" />
                          </ul>
                           <div className="flex flex-col gap-6 pt-4">
                              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                 <div className="text-slate-400 font-bold">敬请期待</div>
                              </div>
                           </div>
                        </>
                     )}

                     {currentDesign === 'gov' && (
                        <>
                           <h3 className="text-4xl font-black text-blue-600 flex items-center gap-3"><Landmark size={40}/> 政府智能体 · 监管决策中枢</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">贵州文旅智慧驾驶舱，为政府提供全省旅游数据实时监测、异常波动预警及产业分析建议。</p>
                           <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">2026年规划核心功能</h4>
                              <ul className="grid grid-cols-1 gap-4">
                                 <DesignFeature icon={LineChart} t="智能报告 & 分析" d="工作报告助手、看板数据智能解读、自然语言问数。" />
                                 <DesignFeature icon={Megaphone} t="宣推 & 产业助手" d="客源深度分析、旅游产业补链强链建议。" />
                                 <DesignFeature icon={ShieldAlert} t="监管助手" d="数据异动实时提示、异常波动原因分析。" />
                                 <DesignFeature icon={FileSearch} t="智能问策" d="政策解读、地方性法规撰写辅助、资源规划建议。" />
                              </ul>
                           </div>
                           <button onClick={() => openExternal('https://glsw-provincescreen-test.aihuangxiaoxi.com/admin/#/index')} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 group">
                              进入政府智能体 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                        </>
                     )}
                  </div>

                  {/* Preview Content */}
                  <div className="relative flex items-center justify-center min-h-[500px]">
                     <div className="absolute inset-0 bg-indigo-500/5 rounded-[4rem] blur-3xl"></div>
                     
                     {currentDesign === 'xiaoxi' && (
                        <div className="relative w-full h-full flex flex-col items-center justify-center scale-90">
                           <div className="bg-white border-[12px] border-slate-900 rounded-[3.5rem] w-[320px] h-[650px] shadow-2xl overflow-hidden relative isolate">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl z-50"></div>
                              <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden rounded-[2.5rem] transform-gpu">
                                 <Header userRole="tourist" onToggleRole={() => {}} className="rounded-t-[2.5rem]" />
                                 <main className="flex-1 overflow-y-auto no-scrollbar px-2 relative">
                                    <div className="scale-95 origin-top w-full">
                                       <HomeView onOpenExperts={() => {}} />
                                    </div>
                                 </main>
                                 {isMenuOpen && (
                                    <div className="absolute inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsMenuOpen(false)}>
                                       <div className="absolute bottom-24 left-4 flex items-end gap-4" onClick={e => e.stopPropagation()}>
                                          <img src={huangxiaoxiImg1} className="w-24 h-auto drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-500" alt="Huang Xiaoxi" />
                                          <div className="flex flex-col gap-2 mb-4">
                                             <div className="bg-white p-3 rounded-xl shadow-lg text-xs font-bold text-slate-800">创建新行程</div>
                                             <div className="bg-white p-3 rounded-xl shadow-lg text-xs font-bold text-slate-800">加入行程</div>
                                          </div>
                                       </div>
                                    </div>
                                 )}
                                 <BottomNav activeTab={0} onTabChange={() => {}} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
                              </div>
                           </div>
                        </div>
                     )}

                     {currentDesign === 'spot' && (
                        <div className="flex flex-col gap-6 items-center justify-center scale-90">
                           <div className="flex gap-4">
                              <div className="h-[450px] w-[210px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={jingquImg1} alt="景区首页" className="w-full h-full object-cover" />
                              </div>
                              <div className="h-[450px] w-[210px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={jingquImg2} alt="景区详情" className="w-full h-full object-cover" />
                              </div>
                           </div>
                           <div className="bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-white text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              Scenic Area Interface
                           </div>
                        </div>
                     )}

                     {currentDesign === 'hotel' && (
                        <div className="flex flex-col items-center justify-center scale-90">
                           <div className="h-[550px] w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-white relative">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                              <img src={jiudianImg} alt="酒店智能体" className="w-full h-full object-cover" />
                           </div>
                           <div className="mt-6 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-white text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              Hotel Smart Stay
                           </div>
                        </div>
                     )}

                     {currentDesign === 'dining' && (
                        <div className="flex flex-col items-center justify-center scale-90">
                           <div className="h-[550px] w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-white relative">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                              <img src={canyinImg} alt="餐饮智能体" className="w-full h-full object-cover" />
                           </div>
                           <div className="mt-6 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-white text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              Dining Experience
                           </div>
                        </div>
                     )}

                     {currentDesign === 'gov' && (
                        <div className="w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col scale-90 origin-center">
                           <div className="w-full h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5 shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                              <div className="ml-4 px-3 py-0.5 bg-white rounded-md text-[10px] text-slate-400 border border-slate-200 flex-1 text-center font-mono">gov.travel-guizhou.com</div>
                           </div>
                           <div className="w-full bg-slate-50 p-2">
                              <img src={dapingImg} alt="政府智能体" className="w-full h-auto rounded-lg shadow-inner" />
                           </div>
                        </div>
                     )}

                     {currentDesign === 'agency' && (
                        <div className="relative w-full h-[600px] scale-[0.85] origin-center">
                           {/* PC端展示 - 提高虚拟分辨率至 1200px+ 以触发桌面端布局并避免变形 */}
                           <div className="absolute top-0 left-0 w-full h-[520px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-10">
                              <div className="w-full h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5 shrink-0">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                 <div className="ml-4 px-3 py-0.5 bg-white rounded-md text-[10px] text-slate-400 border border-slate-200 flex-1 text-center font-mono">agency.travel-guizhou.com</div>
                              </div>
                              <div className="w-full h-full bg-slate-50 overflow-hidden">
                                 <div className="w-[300%] h-[300%] origin-top-left transform scale-[0.3333] overflow-y-auto no-scrollbar">
                                    <AgencyApp onBack={() => {}} orders={orders} onUpdateOrder={handleUpdateOrder} />
                                 </div>
                              </div>
                           </div>
                           {/* 移动端展示 - 调整位置和缩放，使其作为浮动元素，减少对PC端主视觉的遮挡 */}
                           <div className="absolute -bottom-10 -right-6 w-[220px] h-[450px] bg-white rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden z-20 transform scale-[0.85]">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-50"></div>
                              <div className="w-[390px] h-[844px] origin-top-left transform scale-[0.56] bg-white">
                                 <GuideApp orders={orders} onUpdateOrder={handleUpdateOrder} />
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper: Ring Label ---
const RingLabel = ({ label, color, className, onClick }: { label: string, color: 'indigo' | 'violet' | 'teal', className?: string, onClick?: () => void }) => {
  const styles = {
    indigo: 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-4 ring-indigo-50',
    violet: 'bg-violet-600 text-white shadow-lg shadow-violet-200 ring-4 ring-violet-50',
    teal: 'bg-teal-600 text-white shadow-lg shadow-teal-200 ring-4 ring-teal-50',
  };

  return (
    <div 
      className={`absolute left-1/2 px-4 py-1.5 rounded-full text-xs font-black tracking-wide ${styles[color]} z-50 transition-transform ${className}`}
    >
      {label}
    </div>
  );
};

// --- Helper: Matrix Node (Orbiting) ---
const MatrixNode = ({ label, angle, color = 'slate', isCore, onClick }: any) => {
  // Calculate position on ellipse
  const rad = (angle * Math.PI) / 180;
  
  const x = 50 + 50 * Math.cos(rad); // 半径为 50%
  const y = 50 + 50 * Math.sin(rad); // 半径为 50%
  
  const colorStyles: any = {
    slate: 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg',
    blue: 'bg-white text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50 rounded-lg',
    teal: 'bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-300 hover:bg-teal-100 rounded-md border-dashed',
    indigo: 'bg-white text-indigo-600 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-lg',
    gov: 'bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white border-rose-200 hover:brightness-105 rounded-lg shadow-lg shadow-rose-200 ring-2 ring-white/70 font-black',
    violet: 'bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-300 hover:bg-violet-100 rounded-full',
    gray: 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed grayscale opacity-80 rounded-lg'
  };

  const specificStyle = colorStyles[color] || colorStyles.slate;

  return (
    <div 
      className={`absolute px-3 py-1.5 text-xs font-bold shadow-sm whitespace-nowrap transition-all hover:scale-110 cursor-pointer origin-bottom border z-[60]
        ${isCore ? 'bg-indigo-600 text-white scale-110 shadow-indigo-200 rounded-lg' : specificStyle}
      `}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        // 关键：修改 transform，让元素以底部为轴心站立在圆环上
        // translate(-50%, -100%) 将元素的底部中心移动到定位点
        // rotateX(-60deg) 抵消父容器的旋转，使元素直立
        transform: 'translate(-50%, -100%) rotateX(-60deg)' 
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick(e);
      }}
    >
      {label}
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'portal' | 'app'>('portal');
  const [userRole, setUserRole] = useState<UserRole>('tourist');
  const [activeTab, setActiveTab] = useState(0);
  const [subView, setSubView] = useState<'main' | 'experts' | 'chat'>('main');
  const [selectedAgent, setSelectedAgent] = useState<ServiceItem | null>(null);
  const [activeQrCode, setActiveQrCode] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRingInfo, setActiveRingInfo] = useState<any>(null);

  const ringData = {
    org: {
      title: "组织端智能体 (Organization Agents)",
      summary: "产业垂直领域的数字化决策大脑",
      desc: "针对旅行社、酒店、景区、政府等文旅核心主体，提供定制化的管理与决策支持。通过整合多维行业数据，实现从经营分析、资源调度到产业监管的全面智能化，是文旅产业实现数智化转期的核心底座。",
      color: "indigo"
    },
    role: {
      title: "角色智能体 (Role Agents)",
      summary: "行业从业者的全能数字伙伴",
      desc: "深度嵌入具体职业场景（如导游、线路设计师、前台、销售等），为其提供针对性的作业辅助。具备专业领域知识，能够自动化处理重复性劳动，如解说词生成、行程优化、客户话术辅助等，显著提升一线人员的人效与服务质量。",
      color: "violet"
    },
    func: {
      title: "功能智能体 (Function Agents)",
      summary: "细粒度任务的自动化执行专家",
      desc: "专注于文旅场景中的原子化功能模块（如房态查询、车辆调度、天气动态调整、客流预测等）。通过高精度的 API 调用与算法模型，为上层应用提供即插即用的 AI 技能插件，确保服务链条中的每一个细节都能实现智能响应。",
      color: "teal"
    }
  };

  // Shared Order State for Cross-Role Demo
  const [orders, setOrders] = useState<Order[]>([]);

  const handleCreateOrder = (newOrder: Order) => {
    setOrders(prev => [newOrder, ...prev]);
  };

  const handleUpdateOrder = (updatedOrder: Order) => {
    setOrders(prev => prev.map(o => o.id === updatedOrder.id ? updatedOrder : o));
  };

  const [activeModule, setActiveModule] = useState<'architecture' | 'data' | 'platform' | 'agent'>('architecture');
  const [planningTab, setPlanningTab] = useState<'matrix' | 'scenario' | 'design'>('matrix');
  const [designTab, setDesignTab] = useState<'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining'>('agency');

  const handleEnterApp = (role: UserRole) => { 
    setUserRole(role); 
    setCurrentView('app'); 
    setSubView('main');
    setActiveTab(0);
  };
  const handleBackToPortal = () => setCurrentView('portal');
  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer')
  const copyText = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        alert('已复制到剪贴板');
      } else {
        // Fallback for non-secure contexts or unsupported browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          alert('已复制到剪贴板');
        } catch (err) {
          console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  if (currentView === 'portal') {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-y-auto no-scrollbar pb-20 selection:bg-indigo-100 selection:text-indigo-700">
            {/* Top Level Module Navigation */}
            <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200">
               <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-20">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <Bot size={24} className="text-white" />
                     </div>
                     <span className="text-xl font-black tracking-tight text-slate-900">多彩黄小西 <span className="text-indigo-600 text-sm ml-1 font-bold">2026 战略规划</span></span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200">
                     {[
                        { id: 'architecture', label: '总体架构', icon: Layers },
                        { id: 'data', label: '汇数据', icon: Database },
                        { id: 'platform', label: '建平台', icon: Network },
                        { id: 'agent', label: '智能体', icon: Cpu },
                     ].map((m) => (
                        <button
                           key={m.id}
                           onClick={() => setActiveModule(m.id as any)}
                           className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                              activeModule === m.id 
                              ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50' 
                              : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                           }`}
                        >
                           <m.icon size={16} />
                           {m.label}
                        </button>
                     ))}
                  </div>
                  <div className="flex items-center gap-4">
                     <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">内部汇报专版</button>
                     <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
                        开始演示
                     </button>
                  </div>
               </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 py-12">
                {activeModule === 'architecture' && (
                   <div className="animate-in fade-in duration-700 space-y-8 pb-20">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                         <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
                               <Layers size={32} className="text-blue-600" />
                            </div>
                            <div>
                               <h2 className="text-4xl font-black text-slate-900">总体架构</h2>
                               <p className="text-slate-500 mt-1 uppercase tracking-widest text-xs font-bold">2.1 "1+1+1+N" Overall Design</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100">
                            <span className="text-blue-600 font-black text-xl">1+1+1+N</span>
                            <div className="w-px h-6 bg-blue-200"></div>
                            <span className="text-slate-500 text-xs font-bold leading-tight">3个底座平台<br/>N类服务渠道</span>
                         </div>
                      </div>

                      {/* 总体架构说明文字 */}
                      <div className="max-w-5xl mx-auto mb-10 bg-blue-50/50 border border-blue-100/50 rounded-3xl p-8 backdrop-blur-sm">
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                          平台按照<span className="text-blue-600 font-bold">“1个旅游可信数据空间 + 1个数智互联运营平台 + 1个旅游大模型技术底座 + N类渠道合作”</span>的体系架构进行建设。该架构采用分层解耦与模块化设计，在确保系统安全、稳定与可信的同时，具备极高的扩展性与灵活性。以可信数据空间为底座，数智互联平台为中枢，大模型技术为智能核心，面向游客、企业与政府输出全方位的智能化服务，全面支撑贵州省旅游产业数字化转型的长期发展需求。
                        </p>
                      </div>

                      {/* 1+1+1+N Architecture Diagram */}
                      <div className="relative max-w-5xl mx-auto">
                        
                        {/* N: 渠道层 - 紧凑化 */}
                        <div className="relative mb-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1 rounded-lg font-black text-sm shadow-sm">N</div>
                            <span className="text-slate-800 font-bold text-lg">N类触点渠道</span>
                          </div>
                          <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 flex flex-wrap justify-center gap-3 items-center">
                            {['黄小西', '一码游贵州', '贵客荟', '贵人家族', '智游黔东南', '同程旅行', '携程', 'HarmonyOS', '...'].map((item, idx) => (
                              <div key={idx} className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 text-[11px] font-bold text-slate-600">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 第一层：智能终端与模型底座 (Merged Layer) */}
                        <div className="relative mb-8 group">
                          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-50 text-blue-600 border border-blue-200 rounded-full flex items-center justify-center font-black text-sm shadow-md z-10">1</div>
                          <div className="bg-white/60 backdrop-blur-md border-2 border-blue-100 rounded-[2.5rem] p-6 shadow-xl shadow-blue-50/50 transition-all hover:border-blue-200">
                            {/* 三端触点 */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {[
                                { t: '游客端', c: 'bg-blue-50 border border-blue-200', tc: 'text-blue-700', icon: Users, desc: '行程/订购/伴游' },
                                { t: '企业端', c: 'bg-indigo-50 border border-indigo-200', tc: 'text-indigo-700', icon: Briefcase, desc: '客服/营销/分析' },
                                { t: '政府端', c: 'bg-slate-50 border border-slate-200', tc: 'text-slate-700', icon: LineChart, desc: '分析/监管/资源' }
                              ].map(item => (
                                <div key={item.t} className={`${item.c} rounded-2xl p-4 shadow-sm relative overflow-hidden group/item`}>
                                  <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-1">
                                      <item.icon size={16} className={`${item.tc} opacity-80`} />
                                      <h4 className={`font-black text-sm ${item.tc}`}>{item.t}</h4>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* 大模型底座 - 紧接在三端下方 */}
                            <div className="bg-white border-2 border-blue-100 p-5 rounded-2xl shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                  <Cpu className="text-blue-600 animate-spin-slow" size={24} />
                                </div>
                                <div>
                                  <h4 className="text-slate-900 font-black text-lg">旅游行业大模型底座</h4>
                                  <div className="flex gap-4 mt-1">
                                    {['文旅资源', '产品商品', '交易结算', '企业经营'].map(t => (
                                      <span key={t} className="text-[10px] text-blue-600/60 font-bold">{t}数据</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-blue-100 bg-blue-50" />)}
                                </div>
                                <ChevronRight className="text-blue-200" size={24} />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 核心 1+1 区域 - 运营平台与数据空间 */}
                        <div className="space-y-4 relative">
                          {/* 装饰性背景 */}
                          <div className="absolute -inset-4 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 -z-10"></div>
                          
                          {/* 2. 运营平台 */}
                          <div className="relative group">
                            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-full flex items-center justify-center font-black text-sm shadow-md">1</div>
                            <div className="bg-white border-2 border-indigo-500 p-5 rounded-2xl shadow-lg flex items-center justify-between group-hover:border-indigo-600 transition-all">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 rounded-xl">
                                  <Zap className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                  <h4 className="text-slate-900 font-black text-lg">数智互联运营平台</h4>
                                  <div className="flex gap-6 mt-1 text-[10px] text-slate-500 font-bold">
                                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-indigo-500" /> 整合要素资源</span>
                                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-indigo-500" /> 本地化交易反哺</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center gap-1 mr-2">
                                <div className="text-indigo-400 flex flex-col items-center leading-none">
                                  <ChevronRight className="-rotate-90" size={12} />
                                  <span className="text-[8px] font-black scale-90">赋能</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 3. 可信数据空间与数据管理平台 (Merged Layer 1) */}
                          <div className="relative group">
                            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 text-slate-800 border border-slate-200 rounded-full flex items-center justify-center font-black text-sm shadow-md z-10">1</div>
                            <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-6 shadow-xl relative overflow-hidden group-hover:bg-slate-50/95 transition-all">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[4rem] -mr-8 -mt-8" />
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                {/* 旅游可信数据空间 */}
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                      <Database className="text-blue-600" size={18} />
                                    </div>
                                    <h4 className="text-slate-900 font-black text-base">旅游可信数据空间</h4>
                                  </div>
                                  <div className="flex flex-wrap gap-3">
                                    {['区块链', '隐私计算', '可信认证', '数据沙箱'].map(t => (
                                      <span key={t} className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                        <div className="w-1 h-1 rounded-full bg-blue-500"></div>{t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                {/* 数据管理平台 */}
                                <div className="space-y-3 md:border-l md:border-slate-100 md:pl-6">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                                      <ClipboardList className="text-amber-600" size={18} />
                                    </div>
                                    <h4 className="text-slate-900 font-black text-base">数据管理平台</h4>
                                  </div>
                                  <div className="flex flex-wrap gap-3">
                                    {['数据采集', '数据治理', '问题管理', '报表统计'].map(t => (
                                      <span key={t} className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                        <div className="w-1 h-1 rounded-full bg-amber-500"></div>{t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 数据源层 - 简化 */}
                        <div className="mt-8 pt-6 border-t border-slate-100">
                          <div className="flex justify-center gap-4 items-center mb-4">
                            <div className="h-px w-12 bg-slate-100"></div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">多源数据汇聚与验证</span>
                            <div className="h-px w-12 bg-slate-100"></div>
                          </div>
                          <div className="grid grid-cols-4 gap-3">
                            {[
                              { t: '省级公共数据', i: Landmark },
                              { t: '市州公共数据', i: Map },
                              { t: '涉旅企业数据', i: Store },
                              { t: '互联网平台数据', i: Network }
                            ].map((item, idx) => (
                              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center flex flex-col items-center gap-1.5 group hover:bg-white hover:shadow-sm transition-all">
                                <item.i size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                <div className="text-slate-600 font-bold text-[10px]">{item.t}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                   </div>
                )}

                {activeModule === 'data' && (
                   <div className="animate-in fade-in duration-700 space-y-10">
                      <div className="flex items-center gap-6 mb-10">
                         <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center shadow-sm border border-emerald-100">
                            <Database size={32} className="text-emerald-600" />
                         </div>
                         <div>
                            <h2 className="text-4xl font-black text-slate-900">汇数据</h2>
                            <p className="text-slate-500 mt-1 uppercase tracking-widest text-xs font-bold">Data Aggregation & Integration</p>
                         </div>
                      </div>

                      <div className="max-w-4xl mb-12">
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                          汇数据即“汇聚数据”，是贵州文旅数字化的坚实根基。通过建设“可信数据空间”实现全域涉旅要素的互联互通，建设“数据管理平台”实现数据资产的高效治理与安全保障，共同构建起支撑上层智能应用的文旅数据全生命周期管理体系。
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 左侧：可信数据空间 */}
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 px-2">
                              <div className="w-2 h-8 bg-blue-600 rounded-full" />
                              <h3 className="text-2xl font-black text-slate-800">旅游可信数据空间</h3>
                            </div>
                            <div className="bg-blue-50 rounded-3xl p-8 text-slate-800 border border-blue-200 shadow-sm relative overflow-hidden group">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-[4rem] -mr-12 -mt-12 transition-transform group-hover:scale-110" />
                              <p className="text-sm leading-relaxed relative z-10 font-medium text-slate-600">
                                旅游可信数据空间是贵州省旅游数据流通的基础设施，是基于标准化互信协议构建的分布式可信数据协作环境。参与者通过主权身份认证，在共识规则下实现数据使用权与控制的分离交换。所有操作记录均通过分布式账本存证，确保数据来源可溯、数据权限可控、流通过程可信。一是帮助省旅游数字互联平台更好地实现数据汇集，二是帮助更好地实现贵州旅游数据要素的价值实现。
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">核心组成节点</div>
                            {[
                              {
                                title: '连接器',
                                desc: '用数方和供数方的应用端，用于数据高效流转。',
                                url: 'https://trust-connector1.aihuangxiaoxi.com',
                                credentials: '账号: test001 / 密码: Energy@123',
                                icon: Network,
                                color: 'blue',
                                features: ['跨云互联', '数据沙箱']
                              },
                              {
                                title: '业务节点',
                                desc: '管理连接器；数据空间市场门户及后台管理。',
                                url: 'https://trust-business-node.aihuangxiaoxi.com',
                                credentials: '账号: test001 / 密码: Energy@123',
                                icon: LayoutDashboard,
                                color: 'indigo',
                                features: ['节点管理', '门户配置']
                              },
                              {
                                title: '功能节点',
                                desc: '全域路由能力，审核连接器身份与业务节点。',
                                url: 'https://trust-functional-node.aihuangxiaoxi.com',
                                credentials: '账号: test002 / 密码: Energy@123',
                                icon: ShieldCheck,
                                color: 'emerald',
                                features: ['身份核验', '共识协作']
                              }
                            ].map((node, i) => (
                              <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                <div className="flex items-start gap-5">
                                  <div className={`w-12 h-12 rounded-xl bg-${node.color}-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <node.icon className={`text-${node.color}-600`} size={24} />
                                  </div>
                                  <div className="flex-grow min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                      <h4 className="text-lg font-bold text-slate-900 truncate">{node.title}</h4>
                                      <div className="flex gap-1.5">
                                        {node.features.map((f, idx) => (
                                          <span key={idx} className={`px-2.5 py-0.5 bg-${node.color}-50 text-${node.color}-600 rounded-full text-[10px] font-bold`}>
                                            {f}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-6">{node.desc}</p>
                                    
                                    <div className="flex items-center justify-between gap-4 pt-5 border-t border-slate-50">
                                      <div className="px-3 py-1.5 bg-slate-50 rounded-lg text-[10px] font-mono text-slate-500 truncate">{node.credentials}</div>
                                      <div className="flex items-center gap-2">
                                        <button 
                                          onClick={() => copyText(node.credentials.replace('账号: ', '').replace(' / 密码: ', ' ')) }
                                          className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                                          title="复制账号密码"
                                        >
                                          <ClipboardList size={16} />
                                        </button>
                                        <button 
                                          onClick={() => openExternal(node.url)}
                                          className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                                        >
                                          进入
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 右侧：数据管理平台 */}
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 px-2">
                              <div className="w-2 h-8 bg-amber-600 rounded-full" />
                              <h3 className="text-2xl font-black text-slate-800">数据管理平台</h3>
                            </div>
                            <div className="bg-amber-50 rounded-3xl p-8 text-slate-800 border border-amber-200 shadow-sm relative overflow-hidden group">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/50 rounded-bl-[4rem] -mr-12 -mt-12 transition-transform group-hover:scale-110" />
                              <div className="relative z-10 space-y-4">
                                <p className="text-sm leading-relaxed font-medium text-slate-600">
                                  数据管理平台主要用于管理及治理汇聚的各类涉旅数据。通过标准化的治理流程，将原始数据转化为高质量的文旅数字资产，为大模型及各类涉旅应用提供精准的数据支撑。
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {['数据采集人员', '数据治理人员', '数据管理人员'].map(role => (
                                    <span key={role} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-amber-600 border border-amber-200">
                                      {role}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 flex justify-between items-center">
                              <span>功能治理模块</span>
                              <span className="text-[10px] normal-case opacity-60">Management & Governance</span>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                              {[
                                {
                                  title: '数据采集',
                                  desc: '支持采集表单快速搭建，通过权限配置及多组织架构，实现多级数据隔离及分级采集。',
                                  icon: ClipboardList,
                                  color: 'amber',
                                  features: ['表单搭建', '分级采集']
                                },
                                {
                                  title: '数据管理',
                                  desc: '涵盖原始数据（三方汇聚）与资源数据（治理后的景区、酒店、餐饮等旅游资源）。',
                                  icon: Database,
                                  color: 'orange',
                                  features: ['原始数据', '资源资产']
                                },
                                {
                                  title: '数据问题管理',
                                  desc: '设置校验规则，对应用至大模型的数据进行质量校验，并实时记录问题数据。',
                                  icon: ShieldAlert,
                                  color: 'red',
                                  features: ['质量校验', '问题存证']
                                },
                                {
                                  title: '报表统计',
                                  desc: '对全省汇聚的旅游资源数据进行多维度统计分析与可视化展示。',
                                  icon: LineChart,
                                  color: 'emerald',
                                  features: ['多维统计', '分析展示']
                                }
                              ].map((item, i) => (
                                <div key={i} className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-sm transition-all hover:translate-x-2 hover:shadow-md">
                                  <div className="flex items-start gap-5">
                                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                      <item.icon className={`text-${item.color}-600`} size={24} />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                      <div className="flex items-center justify-between gap-2 mb-1.5">
                                        <h4 className="text-lg font-bold text-slate-900 truncate">{item.title}</h4>
                                        <div className="flex gap-1.5">
                                          {item.features.map((f, idx) => (
                                            <span key={idx} className={`px-2.5 py-0.5 bg-${item.color}-50 text-${item.color}-600 rounded-full text-[10px] font-bold`}>
                                              {f}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      <p className="text-slate-500 text-[11px] leading-relaxed">{item.desc}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* 平台访问入口 */}
                            <div className="mt-6 p-6 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm shadow-amber-50">
                              <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                  <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest">系统访问入口</div>
                                  <div className="text-slate-900 font-bold text-sm">数据管理平台 (演示环境)</div>
                                  <div className="text-[10px] font-mono text-amber-700 opacity-70">账号: yanshi / 密码: glsw@123456</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => copyText('yanshi glsw@123456')}
                                    className="w-10 h-10 flex items-center justify-center text-amber-600 hover:bg-white rounded-xl transition-all shadow-sm"
                                    title="复制凭证"
                                  >
                                    <ClipboardList size={18} />
                                  </button>
                                  <button 
                                    onClick={() => openExternal('http://117.187.1.7:8000')}
                                    className="bg-amber-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-200 active:scale-95"
                                  >
                                    立即进入
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                )}

                {activeModule === 'platform' && (
                   <div className="animate-in fade-in duration-700">
                      {/* 头部标题 */}
                      <div className="flex items-center gap-6 mb-10">
                         <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center shadow-sm border border-amber-100">
                            <Network size={32} className="text-amber-600" />
                         </div>
                         <div>
                            <h2 className="text-4xl font-black text-slate-900">建平台</h2>
                            <p className="text-slate-500 mt-1 uppercase tracking-widest text-[10px] font-bold">Market-Oriented Transaction Interconnection Platform</p>
                         </div>
                      </div>

                      {/* 平台概述 */}
                      <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                          <Building2 size={120} className="text-amber-600" />
                        </div>
                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-100 mb-6">
                            <Zap size={12} className="text-amber-600" />
                            <span className="text-[10px] font-bold text-amber-600 uppercase">平台定位</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4">市场型互联平台：构建旅游产业交易组织新生态</h3>
                          <p className="text-slate-600 text-xs leading-relaxed max-w-4xl">
                            贵州省省旅游数智互联平台是专为旅游产业建立交易组织的市场型互联平台。平台高效连接旅游供应商（景区、酒店、餐厅、车队等）与分销商（旅行社、OTA等），实现资源快速采购与交易，为旅游企业提供一站式、便捷高效的数字化交易体验与供应链金融服务。
                          </p>
                        </div>
                      </div>

                      {/* 核心功能模块 */}
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-1 h-6 bg-amber-500 rounded-full" />
                          <h3 className="text-xl font-black text-slate-800">平台核心功能矩阵</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            {
                              title: '商品展示及采购',
                              desc: '涵盖景区门票、酒店住宿、餐厅餐饮、车队租赁等全品类资源，支持一键比价与下单。',
                              icon: ShoppingBag,
                              color: 'blue',
                              tags: ['全品类接入', '快速交易']
                            },
                            {
                              title: '订单与渠道管理',
                              desc: '实时同步OTA订单，支持订单补录、状态追踪，实现渠道价格与库存的精准控管。',
                              icon: Workflow,
                              color: 'indigo',
                              tags: ['多渠道同步', '精细化管理']
                            },
                            {
                              title: '用信与额度管理',
                              desc: '为采购商建立信用体系，实现额度申请、审批、使用及预警的全生命周期管理。',
                              icon: CreditCard,
                              color: 'emerald',
                              tags: ['信用专户', '风险预警']
                            },
                            {
                              title: '报表中心与决策',
                              desc: '提供经营数据分析、财务报表、采购商画像等可视化看板，辅助经营决策。',
                              icon: BarChart3,
                              color: 'violet',
                              tags: ['实时看板', '经营洞察']
                            },
                            {
                              title: '供应链金融服务',
                              desc: '联合金融机构提供信贷支持，推出符合涉旅企业业务需求的金融产品。',
                              icon: Wallet,
                              color: 'amber',
                              tags: ['融资撮合', '资金增值']
                            },
                            {
                              title: '基础服务支撑',
                              desc: '组织架构管理、数据权限配置、标准接口对接，确保系统高效稳定运行。',
                              icon: Database,
                              color: 'slate',
                              tags: ['标准化接口', '高并发支撑']
                            }
                          ].map((item, i) => (
                            <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                              <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`text-${item.color}-600`} size={24} />
                              </div>
                              <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-500 text-[11px] leading-relaxed mb-6">{item.desc}</p>
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, idx) => (
                                  <span key={idx} className={`px-2 py-0.5 bg-${item.color}-50 text-${item.color}-600 rounded-md text-[9px] font-bold`}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 供应链金融流程 */}
                      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 mb-12 relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                            <div>
                              <h3 className="text-2xl font-black text-slate-900 mb-2">供应链金融服务流程</h3>
                              <p className="text-slate-500 text-xs">助力企业高效流转，确保资金安全增值</p>
                            </div>
                            <div className="flex gap-4">
                              <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl border border-amber-100">
                                <Building2 size={16} className="text-amber-600" />
                                <span className="text-amber-900 text-[10px] font-bold">金融机构合作</span>
                              </div>
                              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                                <ShieldCheck size={16} className="text-emerald-600" />
                                <span className="text-emerald-900 text-[10px] font-bold">资金安全保障</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                              { step: '01', title: '申请专户', desc: '涉旅企业在平台申请信用专户' },
                              { step: '02', title: '审核授信', desc: '平台审核及金融机构尽调获得额度' },
                              { step: '03', title: '提交申请', desc: '提交行程、清单等订单材料发起用信' },
                              { step: '04', title: '资金注入', desc: '审核通过后资金打入专户用于采购' },
                              { step: '05', title: '资源采购', desc: '在平台内采购景、酒、餐、车等资源' },
                              { step: '06', title: '还本付息', desc: '还款周期到期后向金融机构归还款项' }
                            ].map((s, idx) => (
                              <div key={idx} className="relative group">
                                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:border-amber-200 hover:shadow-md transition-all h-full">
                                  <span className="text-amber-600 text-xs font-black mb-3 block">{s.step}</span>
                                  <h4 className="text-slate-900 text-sm font-bold mb-2">{s.title}</h4>
                                  <p className="text-slate-500 text-[10px] leading-relaxed">{s.desc}</p>
                                </div>
                                {idx < 5 && (
                                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                                    <ChevronRight className="text-slate-300" size={16} />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 平台多端入口展示 */}
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-1 h-6 bg-amber-500 rounded-full" />
                          <h3 className="text-xl font-black text-slate-800">平台各端入口</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            {
                              name: '景区/餐饮企业端',
                              sub: '荔波县云上老乡餐馆',
                              url: 'http://www.lbymt.com/config/home/home?sysFlag=qn',
                              account: '15985402914',
                              pass: 'Aa402914',
                              icon: Utensils,
                              color: 'emerald'
                            },
                            {
                              name: '酒店企业端',
                              sub: '荔波县玉屏石缘客栈',
                              url: 'http://114.255.113.32:20000/hweb/#/pms/checkInList',
                              account: '13765417466',
                              pass: 'Qwe1234567_',
                              icon: BedDouble,
                              color: 'blue'
                            },
                            {
                              name: '资金方金融端 (初审)',
                              sub: '贵州荔波全域智慧旅游有限公司',
                              url: 'https://lyb.ymtcloud.com/config/home/home?sysFlag=sj',
                              account: '15286009622',
                              pass: 'Cy123456',
                              icon: ShieldCheck,
                              color: 'indigo'
                            },
                            {
                              name: '金融端 (复审)',
                              sub: '贵州信用通供应链数据管理有限公司',
                              url: 'https://lyb.ymtcloud.com/config/home/home?sysFlag=sj',
                              account: '18798041556',
                              pass: 'Xyt123456',
                              icon: Landmark,
                              color: 'violet'
                            },
                            {
                              name: '采购端',
                              sub: '演示账号',
                              url: 'https://lyb.ymtcloud.com/config/home/home?sysFlag=sj',
                              account: '13885022658',
                              pass: 'Ty123456',
                              icon: ShoppingBag,
                              color: 'orange'
                            }
                          ].map((entry, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group/card">
                              <div className="flex items-center gap-4 mb-4">
                                <div className={`w-10 h-10 bg-${entry.color}-50 rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform`}>
                                  <entry.icon className={`text-${entry.color}-600`} size={20} />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-bold text-slate-900 text-sm truncate">{entry.name}</h4>
                                  <p className="text-[10px] text-slate-400 truncate">{entry.sub}</p>
                                </div>
                              </div>
                              <div className="space-y-2 bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                                <div className="flex justify-between items-center text-[10px]">
                                  <span className="text-slate-400">账号</span>
                                  <span className="text-slate-700 font-mono font-bold">{entry.account}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                  <span className="text-slate-400">密码</span>
                                  <span className="text-slate-700 font-mono font-bold">{entry.pass}</span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => copyText(`${entry.account} ${entry.pass}`)}
                                  className="flex-1 py-2 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 border border-slate-200"
                                >
                                  <ClipboardList size={12} /> 复制凭证
                                </button>
                                <button 
                                  onClick={() => openExternal(entry.url)}
                                  className={`flex-1 py-2 rounded-lg bg-${entry.color}-50 text-${entry.color}-700 border border-${entry.color}-200 text-[10px] font-bold hover:bg-${entry.color}-600 hover:text-white transition-all flex items-center justify-center gap-1 shadow-sm`}
                                >
                                  立即进入 <ExternalLink size={12} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>
                )}

                {activeModule === 'agent' && (
                   <div className="animate-in fade-in duration-700">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
                         <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                               <Bot size={32} className="text-white" />
                            </div>
                            <div>
                               <h2 className="text-4xl font-black text-slate-900">智能体</h2>
                               <p className="text-slate-500 mt-1 uppercase tracking-widest text-xs font-bold">Multi-Agent Collaborative Network</p>
                            </div>
                         </div>
                         <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
                            <NavBtn active={planningTab === 'matrix'} onClick={() => setPlanningTab('matrix')} icon={Layers} label="产品矩阵" />
                            <NavBtn active={planningTab === 'scenario'} onClick={() => setPlanningTab('scenario')} icon={Map} label="场景规划" />
                            <NavBtn active={planningTab === 'design'} onClick={() => setPlanningTab('design')} icon={Smartphone} label="产品端设计" />
                         </div>
                      </div>

                {/* 1. 产品矩阵 */}
                {planningTab === 'matrix' && (
                   <div className="animate-in fade-in duration-1000">
                      <MatrixDiagram 
                        onNavigate={(tab, client) => {
                          setPlanningTab(tab);
                          if (client) setDesignTab(client);
                        }}
                        onAgentClick={(agent) => {
                          setPlanningTab('design');
                          setDesignTab(agent === 'living' ? 'xiaoxi' : agent);
                        }}
                        setActiveQrCode={setActiveQrCode}
                        handleEnterApp={handleEnterApp}
                        orders={orders}
                        handleUpdateOrder={handleUpdateOrder}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        onRingClick={(ring) => {
                          setActiveRingInfo(ringData[ring as keyof typeof ringData]);
                        }}
                      />
                   </div>
                )}

                {/* 2. 场景规划 (细分政府、景区、旅居) */}
                {planningTab === 'scenario' && (
                   <div className="animate-in slide-in-from-bottom-8 duration-700 space-y-12">
                      {/* Top Section: Frontend Apps Header */}
                      <div className="flex items-center gap-3">
                         <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <LayoutDashboard size={24} />
                         </div>
                         <div>
                            <h3 className="text-xl font-black text-slate-800">智能体前端应用</h3>
                            <p className="text-slate-500 text-xs">AI Agent Frontend Applications</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          <ScenarioSection title="多彩黄小西 (C端)" color="teal" icon={Smartphone} scenarios={[
                             { t: '三维行程导入', d: '文本、截图、链接多渠道一键解析，实现P1级行程同步。', p: 'P1' },
                             { t: '灵动岛场景提醒', d: '行中关键节点、恶劣天气通过灵动岛/卡片强推送。', p: 'P1' },
                             { t: 'AI游记自动分发', d: '游后自动整合素材生成视频/报告，满足游客分享裂变。', p: 'P1' }
                          ]} />
                          <ScenarioSection title="旅行社 (B端/导游)" color="indigo" icon={Briefcase} scenarios={[
                             { t: 'OCR秒级创建', d: '扫描纸质单据毫秒级生成数字化行程，自动关联资源库。', p: 'P1' },
                             { t: 'LBS合规全景监控', d: '实时团位视图，自动感知偏航、购物点逗留超时并预警。', p: 'P1' },
                             { t: '导游合规工具包', d: '电子证照、任务打卡流集成，确保行中执行不偏移。', p: 'P1' }
                          ]} />
                          <ScenarioSection title="政府智能体 (G端监管)" color="rose" icon={Landmark} scenarios={[
                             { t: '分析统计助手', d: '对文旅驾驶舱数据进行深度解读，解释波动原因并给建议。', p: 'P1' },
                             { t: '自然语言问数', d: '管理者通过对话完成复杂数据查询并产出可视化图表。', p: 'P2' },
                             { t: '智能政策问策', d: '全量检索中央及地方政策，为撰写及资源规划提供建议。', p: 'P1' }
                          ]} />
                          <ScenarioSection title="景区智能体 (B端及C端)" color="emerald" icon={Mountain} scenarios={[
                             { t: '景区百事通', d: '覆盖九大领域知识，形成景区专业问答引擎，降低人力。', p: 'P1' },
                             { t: 'AI说书人', d: 'GPS自动触发讲解，可切换数字人风格，承载付费包业务。', p: 'P2' },
                             { t: '智能周边推荐', d: '针对不同人群生成闭环游览路径，解决吃住行难题。', p: 'P1' }
                          ]} />
                          <ScenarioSection title="旅居智能体 (B端及C端)" color="blue" icon={Heart} scenarios={[
                             { t: '数字游民中心', d: '技能匹配旅居需求，构建虚实结合社交群，实现创收。', p: 'P3' },
                             { t: '智能分销管理', d: '对接OTA及本地渠道，库存联动，统一管理佣金结算。', p: 'P1' },
                             { t: '资源智能调配', d: '可视化展示资源分布，AI生成成本优化建议及派单。', p: 'P3' }
                          ]} />
                          <ScenarioSection title="餐饮智能体 (B端及C端)" color="orange" icon={Utensils} scenarios={[
                             { t: '智能点菜', d: '基于口味画像与人数智能生成菜单，支持多人协作点餐及语音下单。', p: 'P1' },
                             { t: '餐厅预约', d: '实时同步餐厅桌台状态，提供在线排队取号与到号预警功能。', p: 'P1' },
                             { t: '呼叫服务', d: '餐中一键触发加水、催菜等原子化服务需求，直达服务员终端。', p: 'P1' }
                          ]} />
                          <ScenarioSection title="酒店智能体 (B端及C端)" color="violet" icon={BedDouble} scenarios={[
                             { t: '订房服务', d: '支持VR看房、在线选房、自助办理入住与退房，实现无接触式服务闭环。', p: 'P1' },
                             { t: '多租户配置', d: '针对连锁酒店集团提供统一管理后台，支持不同门店的个性化配置与数据隔离。', p: 'P1' },
                             { t: '即时通讯', d: '连接住客与前台/管家，支持多语言实时翻译，快速响应客房服务需求。', p: 'P1' }
                          ]} />
                      </div>

                      {/* New: Ability Marketplace */}
                      <div className="pt-12 border-t border-slate-100">
                         <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                               <Store size={24} />
                            </div>
                            <div>
                               <h3 className="text-xl font-black text-slate-800">能力插件集市</h3>
                               <p className="text-slate-500 text-xs">AI Agent Skill Plugin Marketplace</p>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 gap-8">
                            <MarketSection 
                               title="智能体底层插件" 
                               color="slate"
                               items={[
                                  { name: '知识库管理系统', p: 'P1', desc: '官方数据+用户UGC+合作伙伴数据三位一体' },
                                  { name: '智能体配置功能', p: 'P1', desc: '单Agent/Multi-Agent标准化通信协议' },
                                  { name: '用户偏好与画像', p: 'P2', desc: '多维度用户数据采集与权重优化' }
                               ]}
                            />
                            <MarketSection 
                               title="智能体功能插件" 
                               color="blue"
                               items={[
                                  { name: '多语言助手', p: 'P2', desc: '快速搭建中英日韩的多语言版本' },
                                  { name: '文件解析助手', p: 'P2', desc: 'PDF/WORD/EXCEL等内容研判解析' },
                                  { name: '智能推荐', p: 'P2', desc: '基于用户画像的个性化内容生成' }
                               ]}
                            />
                            <MarketSection 
                               title="安全与合规管理" 
                               color="red"
                               items={[
                                  { name: '敏感数据加密', p: 'P1', desc: '传输与存储加密，敏感词白名单' },
                                  { name: '用户权限体系', p: 'P1', desc: '基于省市区/组织架构/菜单的数据权限' }
                               ]}
                            />
                            <MarketSection 
                               title="传统能力插件" 
                               color="emerald"
                               items={[
                                  { name: '订购管理', p: 'P1', desc: '产品上架/分发/订单管理/售后管理' },
                                  { name: '营销活动管理', p: 'P2', desc: '优惠券/积分商城/会员体系' },
                                  { name: '合作伙伴管理', p: 'P1', desc: '供应商资质审核与分账结算自动化' }
                               ]}
                            />
                         </div>
                      </div>
                   </div>
                )}

                {/* 3. 产品端设计 (新增旅居板块，修复导游端入口) */}
                {planningTab === 'design' && (
                   <div className="bg-white rounded-[3.5rem] border border-slate-200 p-10 shadow-2xl animate-in fade-in duration-500">
                      <div className="flex gap-8 mb-16 overflow-x-auto no-scrollbar pb-4 border-b border-slate-100">
                         <DesignTabItem active={designTab === 'xiaoxi'} onClick={() => setDesignTab('xiaoxi')} label="多彩黄小西C端" />
                         <DesignTabItem active={designTab === 'hotel'} onClick={() => setDesignTab('hotel')} label="酒店智能体" />
                         <DesignTabItem active={designTab === 'spot'} onClick={() => setDesignTab('spot')} label="景区智能体" />
                         <DesignTabItem active={designTab === 'dining'} onClick={() => setDesignTab('dining')} label="餐饮智能体" />
                         <DesignTabItem active={designTab === 'agency'} onClick={() => setDesignTab('agency')} label="旅行社智能体 (B+导)" />
                         <DesignTabItem active={designTab === 'gov'} onClick={() => setDesignTab('gov')} label="政府智能体" />
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
                         <div className="space-y-10">
                            {designTab === 'agency' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-indigo-600 mb-6 flex items-center gap-3"><Briefcase size={32}/> 旅行社端 · 管理与执行</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                     通过 OCR 解析与 LBS 地理围栏技术，将传统“人盯人”的带团监管转变为“AI实时哨兵”。重点解决合规风控与补贴自动化。
                                  </p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     {/* Card 1: Agency B-side */}
                                     <div 
                                        onClick={() => handleEnterApp('agency')}
                                        className="group relative bg-indigo-50/50 hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200 rounded-3xl p-6 cursor-pointer transition-all hover:shadow-lg"
                                     >
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                           <LayoutDashboard className="text-indigo-600" size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-slate-800 mb-1">B端 · 旅行社PC</h4>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">Agency Management</p>
                                        
                                        <div className="flex gap-2 mb-6">
                                           <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg">产品上架</span>
                                           <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg">经营结算</span>
                                        </div>

                                        <ul className="space-y-3">
                                           <li className="flex items-start gap-2 text-sm text-slate-600">
                                              <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                              <span>供应商资源组织与上架管控</span>
                                           </li>
                                           <li className="flex items-start gap-2 text-sm text-slate-600">
                                              <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                              <span>补贴一键申报 & 财务合规审计</span>
                                           </li>
                                        </ul>
                                     </div>

                                     {/* Card 2: Guide App */}
                                     <div 
                                        onClick={() => handleEnterApp('guide')}
                                        className="group relative bg-orange-50/50 hover:bg-orange-50 border border-orange-100 hover:border-orange-200 rounded-3xl p-6 cursor-pointer transition-all hover:shadow-lg"
                                     >
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                           <Briefcase className="text-orange-600" size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-slate-800 mb-1">员工端 · 导游APP</h4>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">Guide & Staff App</p>
                                        
                                        <div className="flex gap-2 mb-6">
                                           <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-lg">分销推广</span>
                                           <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-lg">收益管理</span>
                                        </div>

                                        <ul className="space-y-3">
                                           <li className="flex items-start gap-2 text-sm text-slate-600">
                                              <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={16} />
                                              <span>个人分销二维码/ID实时生成</span>
                                           </li>
                                           <li className="flex items-start gap-2 text-sm text-slate-600">
                                              <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={16} />
                                              <span>带团佣金分成实时入账统计</span>
                                           </li>
                                        </ul>
                                     </div>
                                  </div>
                                </div>
                            )}

                            {designTab === 'hotel' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-violet-600 mb-6 flex items-center gap-3"><BedDouble size={32}/> 酒店智能体 · 智慧住宿</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                     面向住客与酒店管理方，提供从预订、入住到离店的全流程智慧服务，实现无接触式服务闭环与高效运营。
                                  </p>
                                  <ul className="space-y-4 mb-10">
                                     <DesignFeature icon={BedDouble} t="无接触服务" d="VR看房、在线选房、自助入住/退房。" />
                                     <DesignFeature icon={LayoutDashboard} t="多租户管理" d="连锁集团统一后台，门店数据隔离与个性化配置。" />
                                     <DesignFeature icon={MessageSquare} t="客房管家" d="即时通讯、多语言翻译、快速响应服务需求。" />
                                  </ul>
                                  <div className="flex flex-col gap-6 items-start">
                                     <button
                                        disabled
                                        className="bg-slate-100 text-slate-400 px-8 py-4 rounded-2xl font-black flex items-center gap-3 cursor-not-allowed"
                                     >
                                        请扫码体验
                                     </button>
                                     <div 
                                        className="w-40 h-40 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:scale-105 transition-transform"
                                        onClick={() => setActiveQrCode(tiyanmaQrCode)}
                                     >
                                        <img src={tiyanmaQrCode} alt="体验码" className="w-full h-full object-contain" />
                                     </div>
                                  </div>
                               </div>
                            )}

                            {designTab === 'dining' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-orange-600 mb-6 flex items-center gap-3"><Utensils size={32}/> 餐饮智能体 · 智慧美食</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                     连接食客与餐厅，提供智能点餐、排队取号及个性化口味推荐，提升用餐体验与餐厅运营效率。
                                  </p>
                                  <ul className="space-y-4 mb-10">
                                    <DesignFeature icon={Utensils} t="智能点餐" d="口味画像推荐、多人协作点餐、语音下单。" />
                                    <DesignFeature icon={LayoutDashboard} t="餐厅管理" d="桌台状态实时同步、排队取号、到号预警。" />
                                    <DesignFeature icon={Zap} t="呼叫服务" d="一键触发加水、催菜等原子化服务，直达服务员。" />
                                 </ul>
                                 <div className="flex flex-wrap gap-4 items-center">
                                    <button
                                       disabled
                                       className="bg-slate-100 text-slate-400 px-8 py-4 rounded-2xl font-black flex items-center gap-3 cursor-not-allowed"
                                    >
                                       敬请期待
                                    </button>
                                 </div>
                              </div>
                           )}

                            {designTab === 'xiaoxi' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-teal-600 mb-6 flex items-center gap-3"><Bot size={32}/> 多彩黄小西 · C端伴游</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">作为官方数字分身，提供 24h 1对1 服务。重点建立信任感与不确定性消除。同时面向数字游民与长期旅居人群，提供虚实结合的社区交互、灵活办公空间预约及在地化深度文化体验。</p>
                                  
                                  <ul className="space-y-4 mb-10">
                                     <DesignFeature icon={LayoutDashboard} t="省级旅游行程服务总入口" d="服务资源聚合，一站式获取全省景区、酒店及交通等官方服务。" />
                                     <DesignFeature icon={LifeBuoy} t="24小时行程陪伴" d="智能AI全天候在线，提供实时问答、行程动态调整与应急响应。" />
                                     <DesignFeature icon={Heart} t="旅居管家" d="面向长期旅居人群，提供租房对接、社群融入及本地生活指引。" />
                                  </ul>

                                  <div className="flex flex-wrap gap-6 items-center">
                                     <button onClick={() => handleEnterApp('tourist')} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl">
                                        进入游客端演示
                                     </button>
                                     <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(hxxQrCode)}>
                                        <img src={hxxQrCode} alt="扫码体验" className="w-20 h-20 rounded-lg object-cover" />
                                        <div className="text-xs text-slate-500 font-medium">
                                           <div className="font-bold text-slate-800">扫码体验</div>
                                           <div className="text-[10px] text-slate-400 mt-1">iOS / Android</div>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            )}

                            {(designTab === 'spot' || designTab === 'gov') && (
                               designTab === 'spot' ? (
                                 <div className="animate-in slide-in-from-left-4">
                                    <h3 className="text-3xl font-black text-emerald-600 mb-6 flex items-center gap-3"><Mountain size={32}/> 景区智能体 · 产品端设计</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                       面向游客的景区内实时服务入口，聚合门票、导览、攻略与现场问答，强调拟物化体验与“点到即得”的高频服务闭环。
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                       <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                                          <div className="font-bold text-slate-800 mb-2">核心能力</div>
                                          <div className="text-xs text-slate-500">景区问答、地图导览、票务/厕所/交通快捷入口。</div>
                                       </div>
                                       <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                          <div className="font-bold text-slate-800 mb-2">对接路径</div>
                                          <div className="text-xs text-slate-500">与产品端方案联动，支持能力分发到各触点渠道。</div>
                                       </div>
                                    </div>
                                    <div className="flex flex-col gap-6 items-start">
                                       <button
                                          disabled
                                          className="bg-slate-100 text-slate-400 px-8 py-4 rounded-2xl font-black flex items-center gap-3 cursor-not-allowed"
                                       >
                                          请扫码体验
                                       </button>
                                       <div 
                                          className="w-40 h-40 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:scale-105 transition-transform"
                                          onClick={() => setActiveQrCode(jingquQrCode)}
                                       >
                                          <img src={jingquQrCode} alt="景区二维码" className="w-full h-full object-contain" />
                                       </div>
                                    </div>
                                 </div>
                               ) : (
                                 <div className="animate-in slide-in-from-left-4">
                                    <h3 className="text-3xl font-black text-blue-600 mb-6 flex items-center gap-3"><Landmark size={32}/> 政府智能体 · 监管决策中枢</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                       政府智能体1.0版本已进入测试及验证阶段，初步构建起服务游客、企业、政府的协同产品矩阵，其中<span className="font-bold text-slate-700">贵州文旅智慧驾驶舱</span>已基本完成开发。
                                    </p>
                                    
                                    <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100">
                                       <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                          <Sparkles size={16} className="text-blue-500"/> 2026年规划核心功能
                                       </h4>
                                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <DesignFeature icon={LineChart} t="智能报告 & 分析" d="工作报告助手、看板数据智能解读、自然语言问数。" />
                                          <DesignFeature icon={Megaphone} t="宣推 & 产业助手" d="客源深度分析、旅游产业补链强链建议。" />
                                          <DesignFeature icon={ShieldAlert} t="监管助手" d="数据异动实时提示、异常波动原因分析。" />
                                          <DesignFeature icon={FileSearch} t="智能问策" d="政策解读、地方性法规撰写辅助、资源规划建议。" />
                                       </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-4 items-center">
                                       <button
                                          onClick={() => openExternal('https://glsw-provincescreen-test.aihuangxiaoxi.com/admin/#/index')}
                                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl transition-all group"
                                       >
                                          进入政府智能体 <ArrowRight size={20} className="group-hover:translate-x-1" />
                                       </button>
                                       <div className="text-xs text-slate-400 font-mono">
                                         状态: <span className="text-emerald-500 font-bold">体验版</span>
                                      </div>
                                    </div>
                                 </div>
                               )
                            )}
                         </div>

                         {/* Preview Screen */}
                         <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/5 rounded-[4rem] blur-3xl"></div>
                            
                            {designTab === 'spot' ? (
                           <div className="relative w-full h-[600px] flex items-center justify-center gap-6">
                              <div className="h-[500px] w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={jingquImg1} alt="景区首页" className="w-full h-full object-cover" />
                              </div>
                              <div className="h-[500px] w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={jingquImg2} alt="景区详情" className="w-full h-full object-cover" />
                              </div>
                           </div>
                        ) : designTab === 'hotel' ? (
                           <div className="relative w-full h-[600px] flex items-center justify-center">
                              <div className="h-[600px] w-[290px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={jiudianImg} alt="酒店智能体" className="w-full h-full object-cover" />
                              </div>
                           </div>
                        ) : designTab === 'dining' ? (
                           <div className="relative w-full h-[600px] flex items-center justify-center">
                              <div className="h-[600px] w-[290px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-white relative">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-10"></div>
                                 <img src={canyinImg} alt="餐饮智能体" className="w-full h-full object-cover" />
                              </div>
                           </div>
                        ) : designTab === 'gov' ? (
                           <div className="relative w-full h-[600px] flex items-center justify-center">
                              <div className="w-[95%] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col">
                                 <div className="w-full h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5 shrink-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    <div className="ml-4 px-3 py-0.5 bg-white rounded-md text-[10px] text-slate-400 border border-slate-200 flex-1 text-center font-mono">gov.travel-guizhou.com</div>
                                 </div>
                                 <div className="w-full bg-slate-50">
                                     <img src={dapingImg} alt="政府智能体" className="w-full h-auto block" />
                                  </div>
                              </div>
                           </div>
                        ) : designTab === 'agency' ? (
                           <div className="relative w-full h-[600px] flex items-center justify-center">
                                  {/* Desktop: Agency B-Side */}
                                  <div className="absolute top-8 left-0 w-[90%] h-[450px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-10 transition-transform hover:scale-105 duration-500 origin-bottom-left">
                                     <div className="w-full h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        <div className="ml-4 px-3 py-0.5 bg-white rounded-md text-[10px] text-slate-400 border border-slate-200 flex-1 text-center font-mono">agency.travel-guizhou.com</div>
                                     </div>
                                     <div className="w-full h-full overflow-hidden bg-slate-50 relative">
                                        <div className="w-[222%] h-[222%] origin-top-left transform scale-[0.45]">
                                           <AgencyApp onBack={() => {}} orders={orders} onUpdateOrder={handleUpdateOrder} />
                                        </div>
                                     </div>
                                  </div>

                                  {/* Mobile: Guide App */}
                                  <div className="absolute bottom-0 right-0 w-[220px] h-[450px] bg-white rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden z-20 transition-transform hover:scale-105 duration-500 origin-bottom-right">
                                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-50"></div>
                                     <div className="w-[390px] h-[844px] origin-top-left transform scale-[0.53] bg-white">
                                        <GuideApp orders={orders} onUpdateOrder={handleUpdateOrder} />
                                     </div>
                                  </div>
                               </div>
                            ) : (
                               <div className={`bg-white border-[12px] border-slate-100 rounded-[4rem] ${designTab === 'xiaoxi' ? 'p-0' : 'p-6'} aspect-[9/18] shadow-2xl max-w-sm mx-auto overflow-hidden relative isolate transition-all duration-500`}>
                                  {designTab === 'xiaoxi' ? (
                                     <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden rounded-[3.1rem] transform-gpu">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-50 pointer-events-none"></div>
                                        <Header userRole="tourist" onToggleRole={() => {}} className="rounded-t-[3.1rem]" />
                                        <main className="flex-1 overflow-y-auto no-scrollbar px-2 relative">
                                            <div className="scale-95 origin-top w-full">
                                               <HomeView onOpenExperts={() => {}} />
                                            </div>
                                        </main>
                                        {/* Quick Action Overlay */}
                                       {isMenuOpen && (
                                          <div className="absolute inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsMenuOpen(false)}>
                                             <div className="absolute bottom-24 left-4 flex items-end gap-4" onClick={e => e.stopPropagation()}>
                                                <img src={huangxiaoxiImg1} className="w-32 h-auto drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-500" alt="Huang Xiaoxi" />
                                                <div className="flex flex-col gap-4 mb-8">
                                                   <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-100 transform active:scale-95 transition-all hover:scale-105">
                                                      <div className="text-left">
                                                         <div className="font-bold text-sm">创建新行程</div>
                                                         <div className="text-[10px] opacity-80">召唤智能行程规划师，为您定制规划</div>
                                                      </div>
                                                   </button>
                                                   <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-200 transform active:scale-95 transition-all hover:scale-105">
                                                       <div className="text-left">
                                                         <div className="font-bold text-sm">加入行程</div>
                                                         <div className="text-[10px] text-slate-500">加入好友创建的旅行，开启奇妙旅途</div>
                                                      </div>
                                                   </button>
                                                   <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-300 transform active:scale-95 transition-all hover:scale-105">
                                                       <div className="text-left">
                                                         <div className="font-bold text-sm">智能导入地点/行程</div>
                                                         <div className="text-[10px] text-slate-500">粘贴链接、文本、上传图片进行识别</div>
                                                      </div>
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       )}
                                       <BottomNav activeTab={0} onTabChange={() => {}} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
                                     </div>
                                  ) : (
                                    <>
                                       <div className="bg-slate-200 h-1.5 w-24 mx-auto rounded-full mb-10"></div>
                                       <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-indigo-50 text-indigo-500">
                                             <Smartphone size={40}/>
                                          </div>
                                          <div>
                                             <div className="text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-2">Platform Mockup</div>
                                             <div className="text-slate-800 font-black text-xl tracking-tight">
                                                SMART INTERFACE
                                             </div>
                                          </div>
                                          <div className="w-full space-y-4 pt-8">
                                              <div className="h-2 bg-slate-50 rounded-full w-full"></div>
                                              <div className="h-2 bg-slate-50 rounded-full w-5/6"></div>
                                              <div className="h-2 bg-slate-50 rounded-full w-2/3"></div>
                                           </div>
                                        </div>
                                     </>
                                  )}
                               </div>
                            )}
                         </div>
                      </div>
                   </div>
                )}
             </div>
          )}
      </div>

      {/* QR Code Modal - Moved to global scope of portal view */}
            {activeQrCode && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setActiveQrCode(null)}>
                  <div className="bg-white p-4 rounded-3xl shadow-2xl scale-100 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                     <img src={activeQrCode} alt="扫码体验" className="w-80 h-80 rounded-2xl object-contain" />
                     <div className="text-center mt-4 text-slate-500 font-medium">
                        <div className="text-lg font-bold text-slate-800">扫码立即体验</div>
                        <div className="text-sm mt-1">支持 iOS 与 Android 设备</div>
                     </div>
                  </div>
               </div>
            )}

            {/* 3D Ring Detail Modal */}
            {activeRingInfo && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setActiveRingInfo(null)}>
                <div 
                  className="bg-white w-[500px] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100"
                  onClick={e => e.stopPropagation()}
                >
                  <div className={`h-3 bg-gradient-to-r ${
                    activeRingInfo.color === 'indigo' ? 'from-blue-500 to-indigo-600' :
                    activeRingInfo.color === 'teal' ? 'from-teal-400 to-emerald-500' :
                    'from-violet-400 to-purple-600'
                  }`}></div>
                  
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-slate-800 mb-2">{activeRingInfo.title}</h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          activeRingInfo.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                          activeRingInfo.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                          'bg-violet-50 text-violet-600'
                        }`}>
                          {activeRingInfo.summary}
                        </div>
                      </div>
                      <button onClick={() => setActiveRingInfo(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X size={20} className="text-slate-400" />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                        {activeRingInfo.desc}
                      </p>
                      
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50/30 border border-indigo-50">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <Bot size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-black text-slate-800">2026 数智化演进</div>
                          <div className="text-[10px] text-slate-500">基于多源垂直大模型，实现从单一任务到全链路智能化的跨越</div>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setActiveRingInfo(null)}
                      className={`w-full mt-8 py-4 rounded-2xl font-black text-sm shadow-lg transition-all active:scale-95 ${
                        activeRingInfo.color === 'indigo' ? 'bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700' :
                        activeRingInfo.color === 'teal' ? 'bg-teal-600 text-white shadow-teal-100 hover:bg-teal-700' :
                        'bg-violet-800 text-white shadow-violet-100 hover:bg-violet-900'
                      }`}
                    >
                      了解更多规划细节
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
    );
  }

  // --- MOBILE SIMULATION ---
  return (
    <div className="h-screen w-full">
      {userRole === 'agency' ? (
        <AgencyApp onBack={handleBackToPortal} orders={orders} onUpdateOrder={handleUpdateOrder} />
      ) : userRole === 'guide' ? (
        <MobileWrapper onBack={handleBackToPortal}><GuideApp orders={orders} onUpdateOrder={handleUpdateOrder} /></MobileWrapper>
      ) : (
        <MobileWrapper onBack={handleBackToPortal}>
          <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
            <Header userRole={userRole} onToggleRole={() => handleEnterApp('agency')} />
            <main className="flex-1 overflow-y-auto no-scrollbar px-4 relative">
              {activeTab === 0 && (
                subView === 'main' ? <HomeView onOpenExperts={() => setSubView('experts')} /> :
                subView === 'experts' ? <ExpertListView onBack={() => setSubView('main')} onConsult={(item) => { setSelectedAgent(item); setSubView('chat'); }} /> :
                selectedAgent ? <AgentChatView agent={selectedAgent} onBack={() => setSubView('experts')} onCreateOrder={handleCreateOrder} /> : null
              )}
              {activeTab === 1 && <ItineraryTimeline />}
              {activeTab === 3 && <MineView />}
            </main>
            {/* Quick Action Overlay */}
            {isMenuOpen && (
               <div className="absolute inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsMenuOpen(false)}>
                  <div className="absolute bottom-24 left-4 flex items-end gap-4" onClick={e => e.stopPropagation()}>
                     <img src={huangxiaoxiImg1} className="w-32 h-auto drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-500" alt="Huang Xiaoxi" />
                     <div className="flex flex-col gap-4 mb-8">
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-100 transform active:scale-95 transition-all hover:scale-105">
                           <div className="text-left">
                              <div className="font-bold text-sm">创建新行程</div>
                              <div className="text-[10px] opacity-80">召唤智能行程规划师，为您定制规划</div>
                           </div>
                        </button>
                        <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-200 transform active:scale-95 transition-all hover:scale-105">
                            <div className="text-left">
                              <div className="font-bold text-sm">加入行程</div>
                              <div className="text-[10px] text-slate-500">加入好友创建的旅行，开启奇妙旅途</div>
                           </div>
                        </button>
                        <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-300 transform active:scale-95 transition-all hover:scale-105">
                            <div className="text-left">
                              <div className="font-bold text-sm">智能导入地点/行程</div>
                              <div className="text-[10px] text-slate-500">粘贴链接、文本、上传图片进行识别</div>
                           </div>
                        </button>
                     </div>
                  </div>
               </div>
            )}
            {subView !== 'chat' && (
               <BottomNav activeTab={activeTab} onTabChange={setActiveTab} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
            )}
          </div>
        </MobileWrapper>
      )}
    </div>
  );
};

// --- Helper Components ---

const NavBtn = ({ active, onClick, icon: Icon, label }: any) => (
   <button onClick={onClick} className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-sm font-black transition-all ${active ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'text-slate-400 hover:text-slate-600'}`}>
      <Icon size={18} /> {label}
   </button>
);

const SummaryCard = ({ title, icon: Icon, color, desc, className = '', style }: any) => {
   const colors: any = { 
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100', 
      blue: 'text-blue-600 bg-blue-50 border-blue-100', 
      rose: 'text-rose-600 bg-rose-50 border-rose-100',
      violet: 'text-violet-700 bg-violet-50 border-violet-100',
      teal: 'text-teal-700 bg-teal-50 border-teal-100'
   };
   return (
      <div style={style} className={`p-8 rounded-[2.5rem] border ${colors[color] || 'text-slate-600 bg-white border-slate-200'} hover:shadow-lg transition-all group ${className}`}>
         <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white shadow-sm">
            <Icon size={24} />
         </div>
         <h4 className="text-xl font-black text-slate-800 mb-3 tracking-tight">{title}</h4>
         <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
   );
};

const ScenarioSection = ({ title, icon: Icon, scenarios, color }: any) => {
   const colors: any = { 
      teal: 'text-teal-600 border-teal-100 bg-white', 
      indigo: 'text-indigo-600 border-indigo-100 bg-white', 
      rose: 'text-rose-600 border-rose-100 bg-white',
      emerald: 'text-emerald-600 border-emerald-100 bg-white',
      blue: 'text-blue-600 border-blue-100 bg-white',
      orange: 'text-orange-600 border-orange-100 bg-white',
      violet: 'text-violet-600 border-violet-100 bg-white'
   };
   return (
      <div className={`p-8 rounded-[3rem] border ${colors[color]} shadow-sm hover:shadow-xl transition-all`}>
         <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-50 rounded-2xl shadow-sm"><Icon size={28} /></div>
            <h4 className="text-xl font-black text-slate-800 italic">{title}</h4>
         </div>
         <div className="space-y-6">
            {scenarios.map((s: any, i: number) => (
               <div key={i}>
                  <div className="flex items-center gap-2 mb-1.5">
                     <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${s.p === 'P1' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{s.p}</span>
                     <h5 className="text-sm font-bold text-slate-700">{s.t}</h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-7">{s.d}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

const DesignTabItem = ({ active, onClick, label }: any) => (
   <button onClick={onClick} className={`px-6 py-4 text-base font-black transition-all relative shrink-0 ${active ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
      {label}
      {active && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-indigo-600 rounded-full"></div>}
   </button>
);

const DesignFeature = ({ icon: Icon, t, d }: any) => (
   <li className="flex gap-4 items-start group">
      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-rose-50 transition-colors">
         <Icon size={20} className="text-slate-400 group-hover:text-rose-500" />
      </div>
      <div>
         <div className="text-sm font-bold text-slate-800 mb-1">{t}</div>
         <div className="text-xs text-slate-400 leading-relaxed">{d}</div>
      </div>
   </li>
);

const MarketSection = ({ title, items, color }: any) => {
  const colors: any = {
     slate: 'bg-slate-50 border-slate-200 text-slate-700',
     blue: 'bg-blue-50 border-blue-200 text-blue-700',
     red: 'bg-red-50 border-red-200 text-red-700',
     emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700'
  };
  
  return (
     <div className={`rounded-2xl border p-6 ${colors[color].replace('bg-', 'border-').replace('text-', 'bg-').split(' ')[1]} bg-opacity-30`}>
        <h4 className={`text-sm font-black mb-4 flex items-center gap-2 ${colors[color].split(' ')[2]}`}>
           <div className={`w-2 h-2 rounded-full ${colors[color].split(' ')[2].replace('text-', 'bg-')}`}></div>
           {title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {items.map((item: any) => (
              <div key={item.name} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${item.p === 'P1' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'}`}>
                       {item.p}
                    </span>
                 </div>
                 <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
           ))}
        </div>
     </div>
  );
};

export default App;
