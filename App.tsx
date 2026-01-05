
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
  BarChart3, LifeBuoy, Share2, Store, Download, 
  FileText, Target, TrendingUp
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

// --- COMPONENT: Matrix Diagram (3D Matrix View) ---
const MatrixDiagram = () => (
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-64 text-center">
          <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-200 border-b-4 border-indigo-800 transform hover:scale-105 transition-transform duration-500">
            <Box className="w-10 h-10 text-white mx-auto mb-2 opacity-90" />
            <h4 className="text-white font-black text-lg">服务总入口</h4>
            <p className="text-indigo-100 text-[10px] mt-1">意图识别 / 任务调度 / 决策支持</p>
          </div>
          {/* 连接线 */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>

        {/* B. 第一层环：企业端智能体 */}
        <div className="absolute top-24 left-1/2 w-[800px] h-[160px] border-2 border-indigo-100 bg-indigo-50/30 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-40 flex items-center justify-center">
          <RingLabel label="企业端智能体" color="indigo" className="-top-20 [transform:translateX(-50%)_rotateX(-60deg)]" />
          
          {/* 环绕节点 */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '60s' }}>
            <MatrixNode label="餐饮智能体" angle={0} color="gray" />
            <MatrixNode label="酒店智能体" angle={60} color="blue" />
            <MatrixNode label="出行智能体" angle={120} color="gray" />
            <MatrixNode label="政府智能体" angle={180} color="blue" />
            <MatrixNode label="景区智能体" angle={240} color="blue" />
            <MatrixNode label="旅行社智能体" angle={300} color="blue" />
            <MatrixNode label="订购智能体" angle={330} color="blue" />
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
            <MatrixNode label="车辆调度" angle={90} color="teal" />
            <MatrixNode label="前沿摘要" angle={120} color="teal" />
            <MatrixNode label="政策问答" angle={150} color="teal" />
            <MatrixNode label="智能导览" angle={180} color="teal" />
            <MatrixNode label="客流预测" angle={210} color="teal" />
            <MatrixNode label="活动智能推荐" angle={240} color="teal" />
            <MatrixNode label="话术辅助" angle={270} color="teal" />
            <MatrixNode label="投诉预警" angle={300} color="teal" />
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
const MatrixNode = ({ label, angle, color = 'slate', isCore }: any) => {
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
        <AgencyApp onBack={handleBackToPortal} />
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
