
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
  Smartphone, LayoutDashboard, ArrowRight, Database, 
  ShieldCheck, Network, Cpu, Layers, Bot, 
  Flag, Briefcase, Landmark, Globe, Zap, 
  Mountain, Map, LineChart, ClipboardList, 
  ChevronRight, Users, CheckCircle2, ShieldAlert,
  Utensils, BedDouble, Truck, Search, Box, 
  FileSearch, MessageSquare, Star, Award, MapPin, 
  Headphones, Quote, Sparkles, Terminal, Heart,
  BarChart3, LifeBuoy, Share2, Store, Download, 
  FileText, Target, TrendingUp, Megaphone
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

const SCENIC_PRODUCT_URL = (import.meta as any).env?.VITE_SCENIC_PRODUCT_URL || 'http://localhost:5173'
const SOJOURN_AGENT_URL = (import.meta as any).env?.VITE_SOJOURN_AGENT_URL || 'http://localhost:5175'
const AGENCY_AGENT_URL = (import.meta as any).env?.VITE_AGENCY_AGENT_URL || 'http://localhost:5176'
const HOTEL_PRODUCT_URL = (import.meta as any).env?.VITE_HOTEL_PRODUCT_URL || 'http://localhost:5178'
const DINING_PRODUCT_URL = (import.meta as any).env?.VITE_DINING_PRODUCT_URL || 'http://localhost:5179'

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
const MatrixDiagram = ({ onNavigate, onAgentClick }: { 
  onNavigate?: (tab: 'matrix' | 'scenario' | 'design', client?: 'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining') => void,
  onAgentClick?: (agent: 'gov' | 'spot' | 'agency' | 'living' | 'hotel' | 'dining') => void
}) => (
  <div className="space-y-12 animate-in fade-in duration-500">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h3 className="text-2xl font-black text-slate-800 mb-4">贵州旅游行程服务总入口架构</h3>
      <p className="text-slate-500 text-sm">意图识别 · 任务调度 · 决策支持</p>
    </div>

    <div className="relative flex flex-col items-center">
      {/* 0. 顶部触点层 */}
      <div className="flex gap-4 mb-16">
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
          <span className="text-xs font-black text-indigo-400">服务触点</span>
          <div className="h-4 w-px bg-indigo-200"></div>
          {['微信', '抖音', 'HarmonyOS', 'App', '各嵌入涉旅平台'].map(t => (
            <span key={t} className="text-xs font-bold text-slate-600 px-2">{t}</span>
          ))}
        </div>
      </div>

      {/* 1. 核心圆柱体架构 (CSS 3D效果) */}
      <div className="relative w-full max-w-5xl h-[600px] perspective-[2000px]">
        
        {/* A. 顶层：总入口核心 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-64 text-center cursor-pointer" onClick={() => {
            onNavigate?.('design', 'xiaoxi');
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
        <div className="absolute top-24 left-1/2 w-[800px] h-[160px] border-2 border-indigo-100 bg-indigo-50/30 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-40 flex items-center justify-center">
          <RingLabel label="企业端智能体" color="indigo" className="-top-20 [transform:translateX(-50%)_rotateX(-60deg)]" />
          
          {/* 环绕节点 */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '60s' }}>
            <MatrixNode label="旅行社智能体" angle={0} color="blue" onClick={() => onAgentClick?.('agency')} />
            <MatrixNode label="酒店智能体" angle={60} color="blue" onClick={() => onAgentClick?.('hotel')} />
            <MatrixNode label="景区智能体" angle={120} color="blue" onClick={() => onAgentClick?.('spot')} />
            <MatrixNode label="政府智能体" angle={180} color="blue" onClick={() => onAgentClick?.('gov')} />
            <MatrixNode label="出行智能体" angle={240} color="gray" />
            <MatrixNode label="餐饮智能体" angle={300} color="blue" onClick={() => onAgentClick?.('dining')} />
          </div>
        </div>

        {/* C. 第二层环：角色智能体 */}
        <div className="absolute top-56 left-1/2 w-[900px] h-[200px] border-2 border-slate-300 bg-slate-50/50 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-30 shadow-lg">
          <RingLabel label="角色智能体" color="violet" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
          
          {/* 环绕节点 - 分布在圆环轨迹上 */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
            {/* 右侧组 (0度附近) */}
            <MatrixNode label="销售" angle={0} color="violet" />
            <MatrixNode label="导游" angle={30} color="violet" />
            <MatrixNode label="线路设计师" angle={330} color="violet" />

            {/* 前侧组 (90度附近) */}
            <MatrixNode label="行业专家" angle={90} color="violet" />
            <MatrixNode label="气象助手" angle={110} color="violet" />
            
            {/* 左侧组 (180度附近) */}
            <MatrixNode label="客房管家" angle={180} color="violet" />
            <MatrixNode label="餐饮部" angle={210} color="violet" />
            <MatrixNode label="前台接待" angle={150} color="violet" />

            {/* 后侧组 (270度附近) */}
            <MatrixNode label="执法监督" angle={270} color="violet" />
            <MatrixNode label="运行监测" angle={290} color="violet" />
          </div>
        </div>

        {/* D. 第三层环：功能智能体 */}
        <div className="absolute top-96 left-1/2 w-[1000px] h-[240px] border-2 border-teal-200 bg-teal-50/40 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-20 shadow-lg">
          <RingLabel label="功能智能体" color="teal" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
          
          {/* 环绕节点 - 分布在圆环轨迹上 */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '100s' }}>
            {/* 均匀分布的节点 */}
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
            <MatrixNode label="旅居智能体" angle={300} color="teal" onClick={() => onAgentClick?.('living')} />
            <MatrixNode label="紧急救援" angle={330} color="teal" />
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Helper: Ring Label ---
const RingLabel = ({ label, color, className }: { label: string, color: 'indigo' | 'violet' | 'teal', className?: string }) => {
  const styles = {
    indigo: 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-4 ring-indigo-50',
    violet: 'bg-violet-600 text-white shadow-lg shadow-violet-200 ring-4 ring-violet-50',
    teal: 'bg-teal-600 text-white shadow-lg shadow-teal-200 ring-4 ring-teal-50',
  };

  return (
    <div className={`absolute left-1/2 px-4 py-1.5 rounded-full text-xs font-black tracking-wide ${styles[color]} z-50 ${className}`}>
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
    violet: 'bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-300 hover:bg-violet-100 rounded-full',
    gray: 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed grayscale opacity-80 rounded-lg'
  };

  const specificStyle = colorStyles[color] || colorStyles.slate;

  return (
    <div 
      className={`absolute px-3 py-1.5 text-xs font-bold shadow-sm whitespace-nowrap transition-all hover:scale-110 cursor-pointer origin-bottom border
        ${isCore ? 'bg-indigo-600 text-white z-50 scale-110 shadow-indigo-200 rounded-lg' : specificStyle}
      `}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        // 关键：修改 transform，让元素以底部为轴心站立在圆环上
        // translate(-50%, -100%) 将元素的底部中心移动到定位点
        // rotateX(-60deg) 抵消父容器的旋转，使元素直立
        transform: 'translate(-50%, -100%) rotateX(-60deg)' 
      }}
      onClick={onClick}
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

  // Shared Order State for Cross-Role Demo
  const [orders, setOrders] = useState<Order[]>([]);

  const handleCreateOrder = (newOrder: Order) => {
    setOrders(prev => [newOrder, ...prev]);
  };

  const handleUpdateOrder = (updatedOrder: Order) => {
    setOrders(prev => prev.map(o => o.id === updatedOrder.id ? updatedOrder : o));
  };

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
                      <MatrixDiagram 
                        onNavigate={(tab, client) => {
                          setPlanningTab(tab);
                          if (client) setDesignTab(client);
                        }}
                        onAgentClick={(agent) => {
                          setPlanningTab('design');
                          setDesignTab(agent === 'living' ? 'xiaoxi' : agent);
                        }}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                         <SummaryCard title="第一层：企业端智能体" icon={Briefcase} color="indigo" desc="聚合餐饮、酒店、出行、政府、景区等核心实体，构建文旅产业全要素的数字化供给网络。" />
                         <SummaryCard title="第二层：角色智能体" icon={Users} color="violet" desc="模拟销售、导游、线路设计师、行业专家等职业角色，通过人机协作处理复杂的非标准化业务。" />
                         <SummaryCard title="第三层：功能智能体" icon={Zap} color="teal" desc="提供房态查询、车辆调度、客流预测、投诉预警等原子化工具能力，为上层应用提供高效支撑。" />
                      </div>
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

                            {/* QR Code Modal */}
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
                               <div className={`bg-white border-[12px] border-slate-100 rounded-[4rem] ${designTab === 'xiaoxi' ? 'p-0' : 'p-6'} aspect-[9/18] shadow-2xl max-w-sm mx-auto overflow-hidden relative transition-all duration-500`}>
                                  {designTab === 'xiaoxi' ? (
                                     <div className="flex flex-col h-full bg-slate-50 relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-50 pointer-events-none"></div>
                                        <Header userRole="tourist" onToggleRole={() => {}} />
                                        <main className="flex-1 overflow-y-auto no-scrollbar px-2 relative">
                                            <div className="scale-90 origin-top w-[111%] -ml-[5.5%]">
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
