
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
import { ServiceItem, UserRole } from './types';
import { 
  Smartphone, LayoutDashboard, ArrowRight, Database, 
  ShieldCheck, Network, Cpu, Layers, Bot, 
  Flag, Briefcase, Landmark, Globe, Zap, 
  Mountain, Map, LineChart, ClipboardList, 
  ChevronRight, Users, CheckCircle2, ShieldAlert,
  Utensils, BedDouble, Truck, Search, Box, 
  FileSearch, MessageSquare, Star, Award, MapPin, 
  Headphones, Quote, Sparkles, Terminal, Heart,
  BarChart3, LifeBuoy, Share2
} from 'lucide-react';

const SCENIC_PRODUCT_URL = (import.meta as any).env?.VITE_SCENIC_PRODUCT_URL || 'http://localhost:5173'
const SOJOURN_AGENT_URL = (import.meta as any).env?.VITE_SOJOURN_AGENT_URL || 'http://localhost:5175'

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

// --- COMPONENT: Matrix Diagram (修复重叠，新增旅居智能体) ---
const MatrixDiagram = () => (
  <div className="w-full bg-white rounded-[4rem] p-12 border border-slate-200 relative overflow-hidden shadow-xl">
     <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:30px_30px]"></div>
     
     <div className="relative z-10 flex flex-col items-center">
        {/* Tier 1: 客源触点 */}
        <div className="flex gap-4 mb-20 animate-in slide-in-from-top duration-700">
           <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 tracking-widest uppercase">全域触点</span>
           {['微信生态', '抖音/小红书', 'HarmonyOS', '官方App', '线下扫码'].map(t => (
             <div key={t} className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-500 shadow-sm">{t}</div>
           ))}
        </div>

        {/* Tier 2: 环形架构 (7个智能体，防止重叠) */}
        <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center border-2 border-dashed border-slate-100 rounded-[6rem]">
           {/* Center Hub */}
           <div className="absolute bg-white border-4 border-indigo-600 p-10 rounded-[3rem] shadow-2xl z-20 flex flex-col items-center group cursor-pointer hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse shadow-lg shadow-indigo-200">
                 <Network size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tighter">服务总入口中枢</h3>
              <p className="text-[9px] text-indigo-500 font-mono mt-2 uppercase tracking-[0.2em] font-bold">Guizhou AI Controller</p>
           </div>

           {/* Orbiting Agents - 精确排布防止重叠 */}
           <OrbitAgent icon={Utensils} label="餐饮智能体" pos="top-[-48px] left-[15%]" />
           <OrbitAgent icon={BedDouble} label="酒店智能体" pos="top-[-48px] left-[50%] -translate-x-1/2" />
           <OrbitAgent icon={Truck} label="出行智能体" pos="top-[-48px] right-[15%]" />
           
           <OrbitAgent icon={Heart} label="旅居智能体" pos="top-[50%] right-[-48px] -translate-y-1/2" color="rose" pulse />
           
           <OrbitAgent icon={Landmark} label="政府端智能体" pos="bottom-[-48px] left-[15%]" />
           <OrbitAgent icon={Mountain} label="景区智能体" pos="bottom-[-48px] left-[50%] -translate-x-1/2" />
           <OrbitAgent icon={Briefcase} label="旅行社智能体" pos="bottom-[-48px] right-[15%]" color="indigo" />
        </div>

        {/* Tier 3: 角色集 */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
           <RoleSet title="服务支持" roles={['前台/管家', '餐饮/客房', '礼宾接待']} />
           <RoleSet title="专业运营" roles={['气象助手', '车队调度', '线路设计']} color="blue" />
           <RoleSet title="行政监管" roles={['执法监督', '运行监测', '产业决策']} color="rose" />
           <RoleSet title="执行末梢" roles={['金牌讲解', '专业导游', '旅拍跟拍']} color="emerald" />
        </div>
     </div>
  </div>
);

const OrbitAgent = ({ icon: Icon, label, pos, color = 'slate', pulse }: any) => {
  const colors: any = {
    slate: 'border-slate-200 text-slate-400 bg-white',
    indigo: 'border-indigo-200 text-indigo-600 bg-indigo-50/50 shadow-indigo-100',
    rose: 'border-rose-200 text-rose-600 bg-rose-50/50 shadow-rose-100'
  };
  return (
   <div className={`absolute ${pos} flex flex-col items-center gap-3 animate-in zoom-in duration-1000`}>
      <div className={`w-20 h-20 rounded-[1.75rem] border-2 ${colors[color]} flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer group relative`}>
         <Icon size={32} className="group-hover:rotate-12 transition-transform" />
         {pulse && <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-ping"></span>}
      </div>
      <span className="text-[11px] font-black text-slate-600 tracking-tight">{label}</span>
   </div>
  );
};

const RoleSet = ({ title, roles, color = 'indigo' }: any) => {
   const variants: any = {
      indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
      blue: 'bg-blue-50 border-blue-100 text-blue-700',
      rose: 'bg-rose-50 border-rose-100 text-rose-700',
      emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700'
   };
   return (
      <div className={`p-5 rounded-3xl border ${variants[color]} group hover:bg-white transition-all`}>
         <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-50">{title}</h5>
         <div className="space-y-2">
            {roles.map((r: string) => (
              <div key={r} className="text-xs font-bold flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-current opacity-40"></div>
                 {r}
              </div>
            ))}
         </div>
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

  const [planningTab, setPlanningTab] = useState<'matrix' | 'scenario' | 'design'>('matrix');
  const [designTab, setDesignTab] = useState<'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov'>('agency');

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
      await navigator.clipboard.writeText(text)
      alert('已复制到剪贴板')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      alert('已复制到剪贴板')
    }
  }

  if (currentView === 'portal') {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-y-auto no-scrollbar pb-20 selection:bg-indigo-100 selection:text-indigo-700">
            <div className="max-w-[1400px] mx-auto px-8 py-12">
                {/* Header Section */}
                <header className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-10">
                   <div className="flex items-center gap-8">
                      <div className="w-20 h-20 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200 border-4 border-white">
                         <Bot size={44} className="text-white" />
                      </div>
                      <div>
                         <h1 className="text-5xl font-black tracking-tighter text-slate-900">
                            多彩黄小西 <span className="text-indigo-600 italic text-3xl font-black">Strategic 2026</span>
                         </h1>
                         <p className="text-slate-400 font-mono text-xs mt-3 uppercase tracking-[0.4em] flex items-center gap-2">
                            <Sparkles size={14} className="text-indigo-500" /> 贵州文旅多智能体协作网络规划
                         </p>
                      </div>
                   </div>
                   <div className="flex bg-white border border-slate-200 p-2 rounded-[2rem] shadow-lg">
                      <NavBtn active={planningTab === 'matrix'} onClick={() => setPlanningTab('matrix')} icon={Layers} label="产品矩阵" />
                      <NavBtn active={planningTab === 'scenario'} onClick={() => setPlanningTab('scenario')} icon={Map} label="场景规划" />
                      <NavBtn active={planningTab === 'design'} onClick={() => setPlanningTab('design')} icon={Smartphone} label="产品端设计" />
                   </div>
                </header>

                {/* 1. 产品矩阵 */}
                {planningTab === 'matrix' && (
                   <div className="animate-in fade-in duration-1000">
                      <MatrixDiagram />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                         <SummaryCard title="数据底座：区块链凭证" icon={Database} color="indigo" desc="整合全省G端监管与B端履约数据，全行程状态透明化上链，构建诚信旅游闭环。" />
                         <SummaryCard title="中枢逻辑：目标分解引擎" icon={Cpu} color="blue" desc="基于大模型的意图识别与任务分发，自动匹配最优资源方，实现全自动计调响应。" />
                         <SummaryCard title="旅居生态：长周期服务" icon={Heart} color="rose" desc="针对数字游民及旅居人群，提供社区运营、灵活办公、在地生活深度管家服务。" />
                      </div>
                   </div>
                )}

                {/* 2. 场景规划 (细分政府、景区、旅居) */}
                {planningTab === 'scenario' && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
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
                      <ScenarioSection title="政府端 (G端监管)" color="rose" icon={Landmark} scenarios={[
                         { t: '分析统计助手', d: '对文旅驾驶舱数据进行深度解读，解释波动原因并给建议。', p: 'P1' },
                         { t: '自然语言问数', d: '管理者通过对话完成复杂数据查询并产出可视化图表。', p: 'P2' },
                         { t: '智能政策问策', d: '全量检索中央及地方政策，为撰写及资源规划提供建议。', p: 'P1' }
                      ]} />
                      <ScenarioSection title="景区端 (S端服务)" color="emerald" icon={Mountain} scenarios={[
                         { t: '景区百事通', d: '覆盖九大领域知识，形成景区专业问答引擎，降低人力。', p: 'P1' },
                         { t: 'AI说书人', d: 'GPS自动触发讲解，可切换数字人风格，承载付费包业务。', p: 'P2' },
                         { t: '智能周边推荐', d: '针对不同人群生成闭环游览路径，解决吃住行难题。', p: 'P1' }
                      ]} />
                      <ScenarioSection title="旅居端 (L端运营)" color="blue" icon={Heart} scenarios={[
                         { t: '数字游民中心', d: '技能匹配旅居需求，构建虚实结合社交群，实现创收。', p: 'P3' },
                         { t: '智能分销管理', d: '对接OTA及本地渠道，库存联动，统一管理佣金结算。', p: 'P1' },
                         { t: '资源智能调配', d: '可视化展示资源分布，AI生成成本优化建议及派单。', p: 'P3' }
                      ]} />
                   </div>
                )}

                {/* 3. 产品端设计 (新增旅居板块，修复导游端入口) */}
                {planningTab === 'design' && (
                   <div className="bg-white rounded-[3.5rem] border border-slate-200 p-10 shadow-2xl animate-in fade-in duration-500">
                      <div className="flex gap-8 mb-16 overflow-x-auto no-scrollbar pb-4 border-b border-slate-100">
                         <DesignTabItem active={designTab === 'xiaoxi'} onClick={() => setDesignTab('xiaoxi')} label="多彩黄小西 C端" />
                         <DesignTabItem active={designTab === 'agency'} onClick={() => setDesignTab('agency')} label="旅行社智能体 (B+导)" />
                         <DesignTabItem active={designTab === 'spot'} onClick={() => setDesignTab('spot')} label="景区智能体" />
                         <DesignTabItem active={designTab === 'living'} onClick={() => setDesignTab('living')} label="旅居智能体" />
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
                                  <div className="grid grid-cols-2 gap-4 mb-10">
                                     <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-800 mb-2">B端：指挥中枢</div>
                                        <div className="text-xs text-slate-500">提供实时监控、投诉研判及政策申报闭环。</div>
                                     </div>
                                     <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-800 mb-2">导游：任务终端</div>
                                        <div className="text-xs text-slate-500">电子证照、闪电报账、风险语音简报。</div>
                                     </div>
                                  </div>
                                  <div className="flex gap-4">
                                     <button onClick={() => handleEnterApp('agency')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl transition-all group">
                                        进入旅行社 B 端 <ArrowRight size={20} className="group-hover:translate-x-1" />
                                     </button>
                                     <button onClick={() => handleEnterApp('guide')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all">
                                        进入导游 App
                                     </button>
                                  </div>
                                </div>
                            )}

                            {designTab === 'living' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-rose-600 mb-6 flex items-center gap-3"><Heart size={32}/> 旅居智能体 · 深度运营</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                     面向数字游民与长期旅居人群，提供虚实结合的社区交互、灵活办公空间预约及在地化深度文化体验。
                                  </p>
                                  <ul className="space-y-4 mb-10">
                                     <DesignFeature icon={Users} t="数字游民社区" d="技能交换、活动预约、兴趣搭子匹配。" />
                                     <DesignFeature icon={LayoutDashboard} t="灵活分销系统" d="对接本地服务者（向导/非遗传承人）收入提现。" />
                                     <DesignFeature icon={LifeBuoy} t="售后管家AI" d="天气/交通预警，行程临时变更自动同步。" />
                                  </ul>
                                  <div className="flex flex-wrap gap-4 items-center">
                                     <button
                                        onClick={() => openExternal(SOJOURN_AGENT_URL)}
                                        className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl transition-all group"
                                     >
                                        打开旅居智能体 <ArrowRight size={20} className="group-hover:translate-x-1" />
                                     </button>
                                     <button
                                        onClick={() => copyText(SOJOURN_AGENT_URL)}
                                        className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all border border-slate-200"
                                     >
                                        复制链接
                                     </button>
                                     <div className="text-xs text-slate-400 font-mono">默认：{SOJOURN_AGENT_URL}</div>
                                  </div>
                               </div>
                            )}

                            {designTab === 'xiaoxi' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-3xl font-black text-teal-600 mb-6 flex items-center gap-3"><Bot size={32}/> 多彩黄小西 · C端伴游</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">作为官方数字分身，提供 24h 1对1 服务。重点建立信任感与不确定性消除。</p>
                                  <button onClick={() => handleEnterApp('tourist')} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl">
                                     进入游客端演示
                                  </button>
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
                                    <div className="flex flex-wrap gap-4 items-center">
                                       <button
                                          onClick={() => openExternal(SCENIC_PRODUCT_URL)}
                                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl transition-all group"
                                       >
                                          打开景区智能体（产品端） <ArrowRight size={20} className="group-hover:translate-x-1" />
                                       </button>
                                       <button
                                          onClick={() => copyText(SCENIC_PRODUCT_URL)}
                                          className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all border border-slate-200"
                                       >
                                          复制链接
                                       </button>
                                       <div className="text-xs text-slate-400 font-mono">默认：{SCENIC_PRODUCT_URL}</div>
                                    </div>
                                 </div>
                               ) : (
                                 <div className="text-center py-24 border-4 border-dashed border-slate-100 rounded-[3rem]">
                                    <Layers size={64} className="mx-auto text-slate-200 mb-6" />
                                    <p className="text-slate-400 font-bold text-xl">政府智能体设计中...</p>
                                 </div>
                               )
                            )}
                         </div>

                         {/* Preview Screen */}
                         <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/5 rounded-[4rem] blur-3xl"></div>
                            <div className="bg-white border-[12px] border-slate-100 rounded-[4rem] p-6 aspect-[9/18] shadow-2xl max-w-sm mx-auto overflow-hidden relative">
                               <div className="bg-slate-200 h-1.5 w-24 mx-auto rounded-full mb-10"></div>
                               <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${designTab === 'living' ? 'bg-rose-50 text-rose-500' : 'bg-indigo-50 text-indigo-500'}`}>
                                     {designTab === 'living' ? <Heart size={40}/> : <Smartphone size={40}/>}
                                  </div>
                                  <div>
                                     <div className="text-slate-300 font-mono text-[10px] uppercase tracking-widest mb-2">Platform Mockup</div>
                                     <div className="text-slate-800 font-black text-xl tracking-tight">
                                        {designTab === 'agency' ? 'AGENCY PORTAL' : designTab === 'living' ? 'LIVING HUB' : 'SMART INTERFACE'}
                                     </div>
                                  </div>
                                  <div className="w-full space-y-4 pt-8">
                                     <div className="h-2 bg-slate-50 rounded-full w-full"></div>
                                     <div className="h-2 bg-slate-50 rounded-full w-5/6"></div>
                                     <div className="h-2 bg-slate-50 rounded-full w-2/3"></div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                )}
            </div>
        </div>
    );
  }

  // --- MOBILE SIMULATION ---
  return (
    <div className="h-screen w-full">
      {userRole === 'agency' ? (
        <AgencyApp />
      ) : userRole === 'guide' ? (
        <MobileWrapper onBack={handleBackToPortal}><GuideApp /></MobileWrapper>
      ) : (
        <MobileWrapper onBack={handleBackToPortal}>
          <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
            <Header userRole={userRole} onToggleRole={() => handleEnterApp('agency')} />
            <main className="flex-1 overflow-y-auto no-scrollbar px-4 relative">
              {activeTab === 0 && (
                subView === 'main' ? <HomeView onOpenExperts={() => setSubView('experts')} /> :
                subView === 'experts' ? <ExpertListView onBack={() => setSubView('main')} onConsult={(item) => { setSelectedAgent(item); setSubView('chat'); }} /> :
                selectedAgent ? <AgentChatView agent={selectedAgent} onBack={() => setSubView('experts')} /> : null
              )}
              {activeTab === 1 && <ItineraryTimeline />}
              {activeTab === 3 && <MineView />}
            </main>
            {subView !== 'chat' && (
               <BottomNav activeTab={activeTab} onTabChange={setActiveTab} isMenuOpen={false} onToggleMenu={() => {}} />
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

const SummaryCard = ({ title, icon: Icon, color, desc }: any) => {
   const colors: any = { 
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100', 
      blue: 'text-blue-600 bg-blue-50 border-blue-100', 
      rose: 'text-rose-600 bg-rose-50 border-rose-100' 
   };
   return (
      <div className={`p-8 rounded-[2.5rem] border ${colors[color]} hover:shadow-lg transition-all group bg-white`}>
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
      blue: 'text-blue-600 border-blue-100 bg-white'
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

export default App;
