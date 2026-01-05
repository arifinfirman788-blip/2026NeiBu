
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
  MapPin, Headphones, CheckCircle2
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
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-black text-slate-800 mb-4">贵州旅游行程服务总入口架构</h3>
        <p className="text-slate-500 text-sm">意图识别 · 任务调度 · 决策支持</p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* 1. 客源/触点层 */}
        <div className="flex gap-4 mb-20">
           {['微信', '抖音', 'HarmonyOS', 'APP', '各嵌入步旅平台'].map(t => (
             <div key={t} className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg text-xs font-bold text-indigo-600 shadow-sm">{t}</div>
           ))}
        </div>

        {/* 2. 企业端智能体 (Orbit Layout) */}
        <div className="relative w-full max-w-4xl h-80 flex items-center justify-center border-2 border-dashed border-indigo-100 rounded-[5rem]">
           <div className="absolute -top-6 bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest">企业端智能体集群</div>
           
           <div className="grid grid-cols-6 gap-8 w-full px-10">
              <AgentNode icon={Utensils} label="餐饮智能体" />
              <AgentNode icon={BedDouble} label="酒店智能体" />
              <AgentNode icon={Truck} label="出行智能体" />
              <AgentNode icon={Landmark} label="政府端智能体" />
              <AgentNode icon={Mountain} label="景区智能体" />
              <AgentNode icon={Briefcase} label="旅行社智能体" color="indigo" />
           </div>

           {/* Center Core */}
           <div className="absolute bg-white p-8 rounded-full shadow-2xl border-4 border-indigo-600 z-10 flex flex-col items-center animate-pulse">
              <Network size={40} className="text-indigo-600 mb-2" />
              <div className="text-xs font-black text-slate-800">调度中枢</div>
           </div>
        </div>

        {/* 3. 角色智能体层 */}
        <div className="mt-20 grid grid-cols-4 gap-12 w-full max-w-5xl">
           <RoleBox title="服务支持" roles={['前台接待', '客房管家', '礼宾服务', '餐饮部']} />
           <RoleBox title="专业运营" roles={['气象助手', '司机/车队管理', '行业专家']} color="blue" />
           <RoleBox title="行政监管" roles={['执法监督处', '运行监测处', '产业发展处']} color="rose" />
           <RoleBox title="产品销售" roles={['线路设计师', '金牌销售', '导游', '旅拍师']} color="emerald" />
        </div>

        {/* 4. 功能原子层 */}
        <div className="mt-16 w-full bg-slate-50 rounded-3xl p-8 border border-slate-200">
           <div className="flex items-center gap-4 mb-6">
              <Box size={20} className="text-slate-400" />
              <h4 className="font-bold text-slate-700">原子化功能组件</h4>
           </div>
           <div className="flex flex-wrap gap-3">
              {['房态查询', '预约送餐', '天气动态调整', '车辆调度', '前沿摘要', '政策问答', '舆情监测', '智能导览', '智能讲解', '客流预测', '话术辅助', '智能分房'].map(f => (
                <span key={f} className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-[11px] font-medium text-slate-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default shadow-sm">{f}</span>
              ))}
           </div>
        </div>
      </div>
    </div>
  );

  // --- Sub-View: 2. 产品场景规划 (基于CSV提取) ---
  const ScenarioView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
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
             desc="将传统繁琐证件线上化，AI辅助实时解决行中突发状况。"
             features={['电子行程单合规包 (P2)', 'OCR自动报销 (P2)', '拍照构图助手 (P2)', '实时翻译伴游 (P3)']}
             icon={Flag}
             color="emerald"
          />
       </div>
    </div>
  );

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
