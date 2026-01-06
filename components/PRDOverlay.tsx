
import React, { useState } from 'react';
/* Added MapPin, Headphones, and CheckCircle2 to the imports from lucide-react */
import {
  X, Download, FileText, Cpu, Database, ShieldCheck, 
  Layers, Target, TrendingUp, Globe, Smartphone, 
  Briefcase, LayoutDashboard, Flag, Landmark, 
  Users, Bot, Map, Zap, MessageSquare, Search, 
  ChevronRight, Network, Box, Terminal, Award, 
  Utensils, BedDouble, Truck, Mountain, LineChart, 
  FileSearch, ClipboardList, ShieldAlert, Heart,
  MapPin, Headphones, CheckCircle2, Store
} from 'lucide-react';

interface Props {
  onClose: () => void;
}

type TabId = 'matrix' | 'scenarios' | 'design';
type ClientId = 'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov';

const PRDOverlay: React.FC<Props> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<TabId>('matrix');
  const [activeClient, setActiveClient] = useState<ClientId>('agency');
  const [showLegacyPRD, setShowLegacyPRD] = useState(false);

  const downloadReport = () => {
    alert("正在生成 2026 战略规划白皮书 (PDF)...");
  };

  // --- Sub-View: 1. 产品矩阵 (复刻架构图逻辑) ---
  const MatrixView = () => (
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
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[160px] border-2 border-indigo-100 bg-indigo-50/30 rounded-[100%] transform rotate-x-60 z-40 flex items-center justify-center">
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-indigo-100 text-xs font-bold text-indigo-600 shadow-sm">企业端智能体</div>
             
             {/* 环绕节点 */}
             <div className="absolute top-0 left-1/2 w-full h-full animate-spin-slow" style={{ animationDuration: '60s' }}>
                <MatrixNode label="餐饮智能体" angle={0} color="blue" />
                <MatrixNode label="酒店智能体" angle={60} color="blue" />
                <MatrixNode label="出行智能体" angle={120} color="blue" />
                <MatrixNode label="政府智能体" angle={180} color="indigo" isCore />
                <MatrixNode label="景区智能体" angle={240} color="blue" />
                <MatrixNode label="旅行社智能体" angle={300} color="blue" />
                <MatrixNode label="旅居智能体" angle={330} color="blue" />
             </div>
          </div>

          {/* C. 第二层环：角色智能体 */}
          <div className="absolute top-56 left-1/2 -translate-x-1/2 w-[900px] h-[200px] border-2 border-slate-100 bg-slate-50/30 rounded-[100%] transform rotate-x-60 z-30">
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-600 shadow-sm">角色智能体</div>
             
             {/* 左侧组 */}
             <div className="absolute left-20 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <MatrixTag label="前台接待" />
                <MatrixTag label="客房管家" />
                <MatrixTag label="餐饮部" />
             </div>
             
             {/* 中间组 */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-12 gap-y-4 text-center">
                <MatrixTag label="气象助手" />
                <MatrixTag label="行业专家" />
                <MatrixTag label="执法监督" />
                <MatrixTag label="运行监测" />
             </div>

             {/* 右侧组 */}
             <div className="absolute right-20 top-1/2 -translate-y-1/2 flex flex-col gap-2 text-right">
                <MatrixTag label="线路设计师" />
                <MatrixTag label="销售" />
                <MatrixTag label="导游" />
             </div>
          </div>

          {/* D. 第三层环：功能智能体 */}
          <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[1000px] h-[240px] border-2 border-teal-100 bg-teal-50/20 rounded-[100%] transform rotate-x-60 z-20">
             <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-teal-100 text-xs font-bold text-teal-600 shadow-sm">功能智能体</div>
             
             <div className="absolute bottom-10 w-full flex justify-around px-20">
                <div className="flex flex-col gap-2">
                   <MatrixTag label="房态查询" color="teal" />
                   <MatrixTag label="预约送餐" color="teal" />
                </div>
                <div className="flex flex-col gap-2">
                   <MatrixTag label="天气动态调整" color="teal" />
                   <MatrixTag label="车辆调度" color="teal" />
                </div>
                <div className="flex flex-col gap-2">
                   <MatrixTag label="前沿摘要" color="teal" />
                   <MatrixTag label="政策问答" color="teal" />
                </div>
                <div className="flex flex-col gap-2">
                   <MatrixTag label="智能导览" color="teal" />
                   <MatrixTag label="客流预测" color="teal" />
                </div>
                <div className="flex flex-col gap-2">
                   <MatrixTag label="活动智能推荐" color="teal" />
                   <MatrixTag label="话术辅助" color="teal" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );

  // --- Helper: Matrix Node (Orbiting) ---
  const MatrixNode = ({ label, angle, color, isCore }: any) => {
    // Calculate position on ellipse
    const rad = (angle * Math.PI) / 180;
    const x = 50 + 42 * Math.cos(rad); // %
    const y = 50 + 42 * Math.sin(rad); // %
    
    return (
      <div 
        className={`absolute px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm whitespace-nowrap transition-all hover:scale-110 cursor-pointer
          ${isCore ? 'bg-indigo-600 text-white z-50 scale-110 shadow-indigo-200' : 'bg-white text-slate-700 border border-slate-200'}
        `}
        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      >
        {label}
      </div>
    );
  };

  // --- Helper: Matrix Tag (Static List) ---
  const MatrixTag = ({ label, color = 'slate' }: any) => {
    const colors: any = {
       slate: 'bg-slate-100 text-slate-600 hover:bg-slate-200',
       teal: 'bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-100'
    };
    return (
       <span className={`px-3 py-1 rounded text-[10px] font-bold transition-colors cursor-default ${colors[color]}`}>
          {label}
       </span>
    );
  };

  // --- Sub-View: 2. 产品场景规划 (基于CSV提取) ---
  const ScenarioView = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
       
       {/* 1. 现有场景卡片 */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScenarioCard 
             title="C端：保姆式智能管家" 
             desc="解决从行程导入、行中提醒到行后报告的全流程自动化体验。"
             features={['三维行程导入 (P1)', '灵动岛场景提醒 (P1)', 'AI游记自动分发 (P1)', '防坑查询器 (P2)']}
             icon={Smartphone}
             color="teal"
          />
          <ScenarioCard 
             title="B端：数字化提效引擎" 
             desc="通过OCR与多智能体协同，将旅行社从繁琐手工录入中解放。"
             features={['OCR秒级行程创建 (P1)', 'LBS实时履约监控 (P1)', '自动化补贴申报 (P1)', '金牌话术知识库 (P1)']}
             icon={LayoutDashboard}
             color="indigo"
          />
          <ScenarioCard 
             title="G端：产业治理驾驶舱" 
             desc="基于多源数据融合，实现文旅资源的精准规划与实时监管。"
             features={['数据异动预警 (P3)', '运行监测定制报告 (P1)', '自然语言问数 (P2)', '资源整改通知书 (P3)']}
             icon={Landmark}
             color="rose"
          />
          <ScenarioCard 
             title="导游端：全能作业助手" 
             desc="为导游提供即时带团辅助，从解说词生成到风险预警的全方位支持。"
             features={['实时解说词生成 (P1)', '团客位置雷达 (P1)', '突发事件SOP (P1)', '小费/评价管理 (P2)']}
             icon={Flag}
             color="emerald"
          />
       </div>

       {/* 2. 新增：能力插件集市 (Feature Marketplace) */}
       <div className="mt-12 pt-12 border-t border-slate-100">
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
             {/* 类别 1: 智能体底层插件 */}
             <MarketSection 
                title="智能体底层插件" 
                color="slate"
                items={[
                   { name: '知识库管理系统', p: 'P1', desc: '官方数据+用户UGC+合作伙伴数据三位一体' },
                   { name: '智能体配置功能', p: 'P1', desc: '单Agent/Multi-Agent标准化通信协议' },
                   { name: '用户偏好与画像', p: 'P2', desc: '多维度用户数据采集与权重优化' }
                ]}
             />

             {/* 类别 2: 智能体功能插件 */}
             <MarketSection 
                title="智能体功能插件" 
                color="blue"
                items={[
                   { name: '多语言助手', p: 'P2', desc: '快速搭建中英日韩的多语言版本' },
                   { name: '文件解析助手', p: 'P2', desc: 'PDF/WORD/EXCEL等内容研判解析' },
                   { name: '智能推荐', p: 'P2', desc: '基于用户画像的个性化内容生成' }
                ]}
             />

             {/* 类别 3: 安全与合规管理 */}
             <MarketSection 
                title="安全与合规管理" 
                color="red"
                items={[
                   { name: '敏感数据加密', p: 'P1', desc: '传输与存储加密，敏感词白名单' },
                   { name: '用户权限体系', p: 'P1', desc: '基于省市区/组织架构/菜单的数据权限' }
                ]}
             />

             {/* 类别 4: 传统能力插件 */}
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
  );

  // --- Helper: Market Section ---
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

  // --- Sub-View: 3. 产品端设计 (五大板块) ---
  const DesignView = () => (
    <div className="flex flex-col h-full animate-in fade-in duration-300">
       {/* Client Sub-Nav */}
       <div className="flex gap-4 mb-8 bg-slate-100 p-2 rounded-2xl w-fit">
          <ClientTab id="xiaoxi" label="多彩黄小西C端" active={activeClient === 'xiaoxi'} onClick={setActiveClient} />
          <ClientTab id="agency" label="旅行社智能体" active={activeClient === 'agency'} onClick={setActiveClient} />
          <ClientTab id="spot" label="景区智能体" active={activeClient === 'spot'} onClick={setActiveClient} />
          <ClientTab id="living" label="旅居智能体" active={activeClient === 'living'} onClick={setActiveClient} />
          <ClientTab id="gov" label="政府智能体" active={activeClient === 'gov'} onClick={setActiveClient} />
       </div>

       {/* Client Specific Content */}
       <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          {activeClient === 'xiaoxi' && <DesignDetail 
             title="多彩黄小西 - C端服务中枢"
             intro="作为全域旅游的数字分身，连接B端各垂直领域智能体，提供24小时1对1专属管家服务。"
             items={[
               { t: '官方认证标签', d: '建立B端官方背书，消除消费者的信任隔阂。', icon: ShieldCheck },
               { t: '智能行程卡片', d: '以直观卡片形式消除不确定性，支持实时调整建议。', icon: Map },
               { t: '投诉处理闭环', d: '打通C-B-G三端通道，AI快速研判并介入，减少舆情。', icon: ShieldAlert }
             ]}
          />}
          
          {activeClient === 'agency' && (
             <div className="space-y-8">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-2xl font-black text-slate-800 mb-2">旅行社智能体 (核心中枢)</h3>
                      <p className="text-slate-500 max-w-2xl">整合B端管理端与导游端。通过OCR技术实现行程数字化，配合LBS地理围栏实现全透明履约。是本系统的核心业务底座。</p>
                   </div>
                   <button 
                      onClick={() => setShowLegacyPRD(true)}
                      className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2"
                   >
                      <Terminal size={18} /> 点击进入：详细业务逻辑说明
                   </button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-indigo-600 flex items-center gap-2 px-1"><LayoutDashboard size={18}/> B端管理逻辑</h4>
                      <ul className="space-y-3">
                         <DesignListItem t="行程监控" d="实时查看团位LBS分布，AI辅助自动提醒延误风险。" />
                         <DesignListItem t="补贴申报" d="标准化线上化流程，AI匹配最合规补贴行程，分析不符原因。" />
                         <DesignListItem t="产商品管理" d="支持供应商自定义产商品上下架，一键同步分销中心。" />
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-emerald-600 flex items-center gap-2 px-1"><Flag size={18}/> 导游端执行逻辑</h4>
                      <ul className="space-y-3">
                         <DesignListItem t="行程打卡" d="结合GPS上报情况/用餐状态，确保导游执行不偏航。" color="emerald" />
                         <DesignListItem t="闪电报账" d="OCR识别发票，自动填单，对接备用金申领系统。" color="emerald" />
                         <DesignListItem t="团队消息" d="实时的指令调度中心，支持紧急任务分配与调整。" color="emerald" />
                      </ul>
                   </div>
                </div>
             </div>
          )}

          {activeClient === 'spot' && <DesignDetail 
             title="景区智能体 - 百事通导览"
             intro="覆盖从门票、讲解、美食到周边推荐的全场景问答引擎，提升景区二次消费增长。"
             items={[
               { t: '说书人智能体', d: '支持“边走边听”，GPS自动触发讲解，提供故事版/专家版风格。', icon: MessageSquare },
               { t: '周边推荐引擎', d: '针对亲子/特种兵人群生成完整闭环方案，解决“玩完去哪吃”难题。', icon: MapPin },
               { t: '智能订购助手', d: '卡片式推送门票、文创等商品，缩短消费决策路径。', icon: Zap }
             ]}
          />}

          {activeClient === 'living' && <DesignDetail 
             title="旅居智能体 - 深度运营专家"
             intro="面向长期逗留的“数字游民”，提供虚实结合的社区活动与在地化深度体验保障。"
             items={[
               { t: '数字游民中心', d: '匹配旅居地需求实现工作创收，构建线上线下联动社交圈。', icon: Users },
               { t: '智能选品与合签', d: '标准化产品库，集成区块链存证，保障交易法律效力。', icon: ClipboardList },
               { t: '售后管家AI', d: '天气/交通突发预警，行程临时变更自动同步供应商。', icon: Headphones }
             ]}
          />}

          {activeClient === 'gov' && <DesignDetail 
             title="政府智能体 - 监管决策中枢"
             intro="取代传统线下检索工作，作为全省旅游政策、运行数据的智能查询与报告总入口。"
             items={[
                { t: '自然语言问数', d: '通过对话产出图表分析，引导准确查询文旅驾驶舱指标。', icon: LineChart },
                { t: '资源规划建议', d: '结合景区数据对乡村振兴、摘牌整改给出AI行动建议。', icon: Target },
                { t: '撰写助手', d: '基于全量法律法规库，辅助草拟地方性旅游规章，因地制宜提出方案。', icon: FileSearch }
             ]}
          />}
       </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-[1400px] h-[92vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-white/20">
        
        {/* Top Header */}
        <div className="bg-slate-900 px-10 py-8 flex justify-between items-center shrink-0 border-b border-white/10">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                 <Target size={28} className="text-white" />
              </div>
              <div>
                 <h2 className="text-2xl font-black text-white tracking-tight">产品规划与战略中心 (2026)</h2>
                 <p className="text-xs text-slate-400 font-mono tracking-tighter uppercase mt-1">Guizhou Multi-Agent System Ecosystem Roadmap</p>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              {/* Main Nav Tabs */}
              <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
                 <NavTab id="matrix" label="产品矩阵" active={activeTab === 'matrix'} onClick={setActiveTab} icon={Layers} />
                 <NavTab id="scenarios" label="场景规划" active={activeTab === 'scenarios'} onClick={setActiveTab} icon={TrendingUp} />
                 <NavTab id="design" label="产品端设计" active={activeTab === 'design'} onClick={setActiveTab} icon={Smartphone} />
              </div>
              
              <div className="h-10 w-[1px] bg-white/10 mx-2"></div>

              <button 
                onClick={downloadReport}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center gap-2 transition-all shadow-xl active:scale-95"
              >
                 <Download size={18} /> 下载白皮书
              </button>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-white transition-colors">
                 <X size={32} />
              </button>
           </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar bg-[#fcfdfe]">
           {activeTab === 'matrix' && <MatrixView />}
           {activeTab === 'scenarios' && <ScenarioView />}
           {activeTab === 'design' && <DesignView />}
        </div>

        {/* Footer Stats */}
        <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
           <div className="flex gap-10">
              <FooterStat label="核心智能体" value="5+" />
              <FooterStat label="业务场景" value="48+" />
              <FooterStat label="P1级功能" value="24" />
           </div>
           <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black tracking-[0.2em] uppercase">
              <Globe size={14} className="text-indigo-400" /> 
              贵州文旅 数字化转型战略部 · 2026 PLAN
           </div>
        </div>
      </div>

      {/* Legacy Detailed PRD Overlay (Recursive Style) */}
      {showLegacyPRD && (
         <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-10 animate-in zoom-in-95 duration-300">
            <div className="relative w-full max-w-5xl h-full bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-900 text-white">
                  <h3 className="font-bold flex items-center gap-2"><Terminal size={18}/> 旅行社智能体 · 详细业务逻辑演示</h3>
                  <button onClick={() => setShowLegacyPRD(false)} className="hover:rotate-90 transition-transform"><X size={24}/></button>
               </div>
               <div className="flex-1 overflow-y-auto p-10">
                  <div className="prose prose-slate max-w-none">
                     <h2 className="text-2xl font-black mb-6 flex items-center gap-2"><ClipboardList className="text-indigo-600"/> 业务全生命周期说明</h2>
                     <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                           <h4 className="font-bold text-indigo-700 mb-2">1. 收客与导入</h4>
                           <p className="text-xs text-slate-500 leading-relaxed italic">核心能力: OCR解析引擎</p>
                           <p className="text-sm mt-3">支持将纸质/PDF行程单秒级转为结构化数据，自动关联车辆、导游资源池。</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                           <h4 className="font-bold text-indigo-700 mb-2">2. 行中履约监控</h4>
                           <p className="text-xs text-slate-500 leading-relaxed italic">核心能力: LBS地理围栏 + AI预警</p>
                           <p className="text-sm mt-3">自动监控停留点是否合规，对于购物点停留超时或未报备偏航进行红色预警。</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                           <h4 className="font-bold text-indigo-700 mb-2">3. 结算与归档</h4>
                           <p className="text-xs text-slate-500 leading-relaxed italic">核心能力: 自动化审计报告</p>
                           <p className="text-sm mt-3">游后自动汇总游客评价与合规分，一键推送至省厅补贴申报接口。</p>
                        </div>
                     </div>
                     
                     <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mb-10">
                        <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2"><ShieldCheck size={18}/> 监管合规逻辑 (P0)</h4>
                        <p className="text-sm text-amber-800 leading-relaxed">
                           系统强制实行“一团一码一备案”。旅行社在创建行程时，必须通过智能体查询车辆资质，未备案车辆无法生成有效核验码，从而在源头杜绝“黑车/野导”现象。
                        </p>
                     </div>

                     <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded-3xl">
                        <Terminal size={40} className="text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-400 text-sm">更多交互演示请参考 APP 端的【B端工作台】模块</p>
                        <button onClick={() => setShowLegacyPRD(false)} className="mt-6 text-indigo-600 font-bold hover:underline">关闭说明返回规划视图</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

// --- Helpers ---

const NavTab = ({ id, label, active, onClick, icon: Icon }: any) => (
   <button 
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${active ? 'bg-white text-indigo-600 shadow-md scale-105' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
   >
      <Icon size={16} /> {label}
   </button>
);

const ClientTab = ({ id, label, active, onClick }: any) => (
   <button 
      onClick={() => onClick(id)}
      className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${active ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-indigo-600'}`}
   >
      {label}
   </button>
);

const AgentNode = ({ icon: Icon, label, color = 'slate' }: any) => (
   <div className="flex flex-col items-center gap-3 animate-in zoom-in duration-700">
      <div className={`w-16 h-16 rounded-2xl bg-${color}-100 flex items-center justify-center text-${color}-600 shadow-lg border border-${color}-200 group hover:scale-110 transition-transform`}>
         <Icon size={32} />
      </div>
      <span className="text-[11px] font-black text-slate-700 whitespace-nowrap">{label}</span>
   </div>
);

const RoleBox = ({ title, roles, color = 'indigo' }: any) => {
   const colors: any = {
      indigo: 'bg-indigo-50 border-indigo-100 text-indigo-900',
      blue: 'bg-blue-50 border-blue-100 text-blue-900',
      rose: 'bg-rose-50 border-rose-100 text-rose-900',
      emerald: 'bg-emerald-50 border-emerald-100 text-emerald-900'
   };
   return (
      <div className={`p-5 rounded-3xl border ${colors[color]}`}>
         <h5 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">{title}</h5>
         <div className="space-y-2">
            {roles.map((r: string) => (
              <div key={r} className="text-xs font-bold flex items-center gap-2">
                 <ChevronRight size={10} /> {r}
              </div>
            ))}
         </div>
      </div>
   );
};

const ScenarioCard = ({ title, desc, features, icon: Icon, color }: any) => {
   const colors: any = {
      teal: 'text-teal-600 bg-teal-50 border-teal-100',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      rose: 'text-rose-600 bg-rose-50 border-rose-100',
      emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100'
   };
   return (
      <div className={`p-8 rounded-[2.5rem] border ${colors[color]} hover:shadow-xl transition-all group`}>
         <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform`}>
               <Icon size={24} />
            </div>
            <h4 className="text-lg font-black">{title}</h4>
         </div>
         <p className="text-sm opacity-70 leading-relaxed mb-6 font-medium">{desc}</p>
         <div className="grid grid-cols-2 gap-3">
            {features.map((f: string) => (
               <div key={f} className="flex items-center gap-2 text-xs font-bold">
                  {/* Fixed missing CheckCircle2 import error */}
                  <CheckCircle2 size={14} className="opacity-40" /> {f}
               </div>
            ))}
         </div>
      </div>
   );
};

const DesignDetail = ({ title, intro, items }: any) => (
   <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h3 className="text-2xl font-black text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 mb-10 max-w-3xl">{intro}</p>
      <div className="grid grid-cols-3 gap-8">
         {items.map((item: any, i: number) => (
            <div key={i} className="space-y-4">
               <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-slate-100 shadow-sm">
                  <item.icon size={24} />
               </div>
               <h4 className="font-bold text-slate-800">{item.t}</h4>
               <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
            </div>
         ))}
      </div>
   </div>
);

const DesignListItem = ({ t, d, color = 'indigo' }: any) => (
   <li className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 hover:border-indigo-200 transition-colors">
      <div className={`text-sm font-bold text-${color}-700 mb-1`}>{t}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{d}</div>
   </li>
);

const FooterStat = ({ label, value }: any) => (
   <div className="flex flex-col">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{label}</span>
      <span className="text-xl font-black text-slate-800">{value}</span>
   </div>
);

export default PRDOverlay;
