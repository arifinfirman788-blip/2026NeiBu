
import React, { useState, useEffect } from 'react';
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
  UserCheck, Clock, Loader2,
  ShoppingBag, ExternalLink, Wallet, CreditCard, BarChart3, Workflow, Building2, Truck, Wifi,
  Search, Menu, User, Send, Settings, Globe, Lock
} from 'lucide-react';

// --- COMPONENT: ImageWithLoader ---
const ImageWithLoader: React.FC<{
  src: string;
  alt: string;
  className?: string;
  priority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}> = ({ src, alt, className, priority = 'auto', loading = 'lazy', objectFit = 'cover' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getObjectFitClass = () => {
    switch (objectFit) {
      case 'contain': return 'object-contain';
      case 'fill': return 'object-fill';
      case 'none': return 'object-none';
      case 'scale-down': return 'object-scale-down';
      default: return 'object-cover';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center animate-pulse">
          <Loader2 className="w-6 h-6 text-slate-300 animate-spin" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-slate-300 gap-2">
          <Smartphone size={24} />
          <span className="text-xs">图片加载失败</span>
        </div>
      ) : (
        <img
                  src={src}
                  alt={alt}
                  className={`w-full ${className?.includes('h-auto') ? 'h-auto' : 'h-full'} ${getObjectFitClass()} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          loading={loading}
          // @ts-ignore
          fetchpriority={priority}
        />
      )}
    </div>
  );
};

import hxxQrCode from './image/huangxiaoxi.png';
import jingquQrCode from './image/jingqu.jpg';
import jingquGuihuaImg from './image/jingquxiugai.png';
import jingquImg1 from './image/jingqu1.png';
import jingquImg2 from './image/jingqu2.png';
import datangmaQrCode from './image/datangma.png';
import fangjianmaQrCode from './image/fangjianma.jpg';
import jiudianImg from './image/jiudian.png';
import canyinImg from './image/canyin.jpg';
import dapingImg from './image/daping.png';
import huangxiaoxiImg1 from './image/ffcfd83472ae04ebb93f2e59eb423119.png';
import huangxiaoxiImg2 from './image/huangxiaoxi1.png';
import huangxiaoxiFenshen from './image/huangxiaoxifenshen.png';
import jiudianFenshen from './image/jiudianfenshen.png';
import fuzhudaoyouImg from './image/fuzhudaoyou1.png';
import fuzhukefuImg from './image/fuzhukefu1.png';
import xuniyuangongImg from './image/xuniyuangong2.png';

// Import image2 resources
import xingchengdaoruImg from './image2/xingchengdaoru.png';
import xingqianjianceImg from './image2/xingqianjiance.png';
import lingdongdaoImg from './image2/lingdongdao.png';
import didaguizhouImg from './image2/didaguizhou.png';
import cheImg from './image2/che.png';
import jiudian2Img from './image2/jiudian.png';
import ruzhujiudianImg from './image2/ruzhujiudian.png';
import zhoubian1Img from './image2/zhoubian1.png';
import tianqiImg from './image2/tianqi.png';
import yujingImg from './image2/yujing.png';
import jingqu1Img from './image2/jingqu1.png';
import jingqu2Img from './image2/jingqu2.png';
import jingqu3Img from './image2/jingqu3.png';
import zongjieImg from './image2/zongjie.png';
import zongjie1Img from './image2/zongjie1.png';
import lingquan1Img from './image2/lingquan1.png';
import lingquan2Img from './image2/lingquan2.png';

// --- MOBILE APP WRAPPER ---
const MobileWrapper: React.FC<{ children: React.ReactNode; onBack: () => void; rightContent?: React.ReactNode }> = ({ children, onBack, rightContent }) => (
    <div className="min-h-[100dvh] w-full bg-slate-50 flex items-center justify-center font-sans overflow-hidden relative p-4 md:p-8">
        <div className="hidden md:block absolute top-8 left-8 z-50">
           <button onClick={onBack} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-slate-600 font-bold hover:bg-slate-50 transition-colors border border-slate-200">
              <ArrowRight className="rotate-180" size={18} /> 返回战略规划
           </button>
        </div>
        
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-[1400px] ${rightContent ? 'md:items-start' : 'items-center'}`}>
          {/* Left: Mobile Phone Frame */}
          <div className="w-full h-[100dvh] md:h-[844px] md:w-[390px] bg-white md:rounded-[3rem] md:border-[8px] md:border-slate-800 md:shadow-2xl relative overflow-hidden flex flex-col shrink-0">
             <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-50 pointer-events-none"></div>
             {children}
          </div>

          {/* Right: Business Process Area */}
          {rightContent && (
            <div className="flex-1 w-full md:max-w-[800px] h-auto md:h-[844px] overflow-y-auto no-scrollbar animate-in slide-in-from-right-10 duration-700">
               {rightContent}
            </div>
          )}
        </div>
     </div>
);

// --- COMPONENT: Business Process Area ---
const BusinessProcessArea: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const processes = [
    {
      phase: '行程前',
      phaseColor: 'blue',
      nodes: [
        { 
          id: 'pre-1', 
          title: '行程导入与检测', 
          desc: '通过短信触达用户，提供四种方式生成行程：黄小西规划生成，支持小红书、抖音链接/图片识别，导游码扫码绑定，邀请码加入', 
          icon: FileSearch,
          images: [xingchengdaoruImg] 
        }
      ]
    },
    {
      phase: '行中',
      phaseColor: 'indigo',
      nodes: [
        { 
          id: 'mid-1', 
          title: '抵达贵州', 
          desc: '意图感知：检测到抵达贵州，自动推送首日接机/接站信息及天气提醒', 
          icon: Mountain,
          images: [xingqianjianceImg, didaguizhouImg, cheImg, jiudian2Img]
         },
         { 
           id: 'mid-2', 
           title: '入住酒店', 
           desc: '入住酒店后由酒店智能体提供更专业的服务，并且进行周边推荐', 
           icon: BedDouble,
           images: [ruzhujiudianImg, zhoubian1Img]
          },
          { 
            id: 'mid-3', 
            title: '行程提醒', 
            desc: '在行程中对交通、天气、人流实时监控，当出现极端情况，立即推送预警信息，错峰出行', 
            icon: Zap,
            images: [lingdongdaoImg, tianqiImg, yujingImg]
          },
          { 
            id: 'mid-4', 
            title: '抵达景区', 
            desc: '即将到达景区时，推送入园提醒门票二维码、景区导览，并通过景区智能体提供更贴心的服务', 
            icon: Map,
            images: [jingqu2Img, jingqu1Img, jingqu3Img]
          },
          { 
            id: 'mid-5', 
            title: '每日总结', 
            desc: '情感连接：自动生成当日精彩瞬间图文总结，记录美好旅程', 
            icon: LineChart,
            images: [zongjie1Img, zongjieImg]
          }
      ]
    },
    {
      phase: '行后',
      phaseColor: 'teal',
      nodes: [
        { 
          id: 'post-1', 
          title: '温情种草', 
          desc: '从跟团游到自由行，量身定制自由行方案，通过用户数据推送优惠券，引导用户二次旅游', 
          icon: Heart,
          images: [lingquan1Img, lingquan2Img]
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-teal-400 rounded-full opacity-20"></div>

        <div className="space-y-12">
          {processes.map((phase, pIdx) => (
            <div key={pIdx} className="relative">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${
                phase.phaseColor === 'blue' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                phase.phaseColor === 'indigo' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                'bg-teal-50 text-teal-600 border border-teal-100'
              }`}>
                {phase.phase}
              </div>

              <div className="space-y-6">
                {phase.nodes.map((node, nIdx) => (
                  <div 
                    key={node.id}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                    className={`group relative flex gap-6 p-4 rounded-2xl transition-all cursor-pointer border ${
                      activeNode === node.id 
                        ? 'bg-white shadow-xl border-indigo-200 scale-[1.02]' 
                        : 'hover:bg-white/60 border-transparent'
                    }`}
                  >
                    {/* Node Dot */}
                    <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                      activeNode === node.id
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-110'
                        : 'bg-white text-slate-400 shadow-sm border border-slate-100 group-hover:border-indigo-200 group-hover:text-indigo-500'
                    }`}>
                      <node.icon size={28} />
                      {activeNode === node.id && (
                        <div className="absolute -inset-1 rounded-2xl border-2 border-indigo-600 animate-ping opacity-20"></div>
                      )}
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-black text-lg ${activeNode === node.id ? 'text-indigo-600' : 'text-slate-800'}`}>
                          {node.title}
                        </h4>
                        <ChevronRight size={18} className={`transition-transform ${activeNode === node.id ? 'rotate-90 text-indigo-500' : 'text-slate-300'}`} />
                      </div>
                      
                      {activeNode === node.id && (
                        <>
                          <p className="text-sm text-slate-600 leading-relaxed font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                            {node.desc}
                          </p>

                          {/* Detail Content (Expandable) */}
                          <div className="mt-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                            {(node as any).images ? (
                              (node as any).images.length === 1 ? (
                                <div className="flex justify-center">
                                  <div className="relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50 max-w-[280px] w-full h-[360px]">
                                     <ImageWithLoader 
                                       src={(node as any).images[0]} 
                                       alt={`${node.title}`} 
                                       className="w-full h-full" 
                                       objectFit="contain"
                                     />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                  </div>
                                </div>
                              ) : (node as any).images.length === 4 ? (
                                <div className="flex gap-4 h-[280px]">
                                  {/* Left: 1 Large Image */}
                                  <div className="flex-[2] relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50">
                                    <ImageWithLoader 
                                      src={(node as any).images[0]} 
                                      alt={`${node.title}-large`} 
                                      className="w-full h-full" 
                                      objectFit="contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                  </div>
                                  {/* Right: 3 Small Images */}
                                  <div className="flex-1 flex flex-col gap-2">
                                    {(node as any).images.slice(1).map((img: string, idx: number) => (
                                      <div key={idx} className="flex-1 relative rounded-lg overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50">
                                        <ImageWithLoader 
                                          src={img} 
                                          alt={`${node.title}-small-${idx}`} 
                                          className="w-full h-full" 
                                          objectFit="contain"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (node as any).images.length === 3 ? (
                                <div className="flex gap-4 h-[280px]">
                                  {/* Left: 1 Large Image (Image 2) */}
                                  <div className="flex-[1.5] relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50">
                                    <ImageWithLoader 
                                      src={(node as any).images[0]} 
                                      alt={`${node.title}-large`} 
                                      className="w-full h-full" 
                                      objectFit="contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                  </div>
                                  {/* Right: 2 Small Images (Image 1 & 3) */}
                                  <div className="flex-1 flex flex-col gap-2">
                                    {(node as any).images.slice(1).map((img: string, idx: number) => (
                                      <div key={idx} className="flex-1 relative rounded-lg overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50">
                                        <ImageWithLoader 
                                          src={img} 
                                          alt={`${node.title}-small-${idx}`} 
                                          className="w-full h-full" 
                                          objectFit="contain"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 gap-4">
                                  {(node as any).images.map((img: string, idx: number) => (
                                    <div key={idx} className="relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50 h-[240px]">
                                      <ImageWithLoader 
                                        src={img} 
                                        alt={`${node.title}-${idx}`} 
                                        className="w-full h-full" 
                                        objectFit="contain"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                    </div>
                                  ))}
                                </div>
                              )
                            ) : (node as any).image ? (
                              <div className="flex justify-center">
                                <div className="relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group/img bg-slate-50 max-w-[280px] w-full h-[360px]">
                                  <ImageWithLoader 
                                    src={(node as any).image} 
                                    alt={node.title} 
                                    className="w-full h-full" 
                                    objectFit="contain"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                </div>
                              </div>
                            ) : (
                              <div className="aspect-video bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-300 shadow-sm">
                                  <Sparkles size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-400">正在等待节点详细图片素材...</span>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: Matrix Diagram (3D Matrix View) ---
const MatrixDiagram = ({ onNavigate, onAgentClick, setActiveQrCode, handleEnterApp, orders, handleUpdateOrder, isMenuOpen, setIsMenuOpen, onRingClick, activeSubTab, setActiveSubTab }: { 
  onNavigate?: (tab: 'matrix' | 'scenario' | 'design', client?: 'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining') => void,
  onAgentClick?: (agent: 'gov' | 'spot' | 'agency' | 'living' | 'hotel' | 'dining') => void,
  setActiveQrCode: (code: string | null) => void,
  handleEnterApp: (role: UserRole) => void,
  orders: Order[],
  handleUpdateOrder: (order: Order) => void,
  isMenuOpen: boolean,
  setIsMenuOpen: (open: boolean) => void,
  onRingClick?: (ring: 'org' | 'role' | 'func') => void,
  activeSubTab: 'status' | 'planning',
  setActiveSubTab: (tab: 'status' | 'planning') => void
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentDesign, setCurrentDesign] = useState<'xiaoxi' | 'agency' | 'spot' | 'living' | 'gov' | 'hotel' | 'dining' | 'org' | 'func' | 'role'>('xiaoxi');
  const [activeOrgTab, setActiveOrgTab] = useState<'saas' | 'portal' | 'marketplace'>('saas');
  const [activeRoleTab, setActiveRoleTab] = useState<'assistant' | 'digital_employee'>('assistant');

  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-2xl font-black text-slate-800 mb-4">贵州旅游行程服务总入口架构</h3>
        <p className="text-slate-500 text-sm mb-8">意图识别 · 任务调度 · 决策支持</p>
      </div>

      <div className="relative flex flex-col items-center overflow-hidden">
        {/* 0. 顶部触点层 */}
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${isExpanded ? '-translate-x-[400px]' : ''}`}>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
            <span className="text-xs font-black text-indigo-400">服务触点</span>
            <div className="h-4 w-px bg-indigo-200"></div>
            {['微信', '抖音', 'HarmonyOS', 'App', '各嵌入涉旅平台'].map(t => (
              <span key={t} className="text-xs font-bold text-slate-600 px-2">{t}</span>
            ))}
          </div>

          <button 
            onClick={() => openExternal('https://arifinfirman788-blip.github.io/huangxiaoxi-gaode/')}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-full border border-emerald-400 shadow-lg shadow-emerald-200/50 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Map size={12} className="text-white" />
            </div>
            <span className="text-xs font-black tracking-tight">多彩黄小西X高德地图</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="w-full flex justify-center relative min-h-[900px]" onClick={() => isExpanded && setIsExpanded(false)}>
          {/* Architecture Diagram Container */}
          <div className={`relative w-full max-w-5xl h-[700px] perspective-[2000px] transition-all duration-700 ease-in-out ${isExpanded ? 'scale-[0.6] -translate-x-[50%] -translate-y-10' : ''}`} onClick={(e) => e.stopPropagation()}>
            
            {/* A. 顶层：总入口核心 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 w-64 text-center cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                setCurrentDesign('xiaoxi');
                setIsExpanded(!isExpanded);
            }}>
              <div className="bg-gradient-to-b from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl shadow-indigo-200 border-b-4 border-indigo-800 transform hover:scale-105 transition-transform duration-500">
                <img src={huangxiaoxiImg2} alt="黄小西" className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-white/50" />
                <h4 className="text-white font-black text-lg">黄小西</h4>
                <p className="text-indigo-100 text-[10px] mt-1">全省旅游行程服务总入口</p>
              </div>
              {/* 连接线 */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
            </div>

            {/* B. 第一层环：组织端智能体 */}
            <div 
              className="absolute top-32 left-1/2 w-[800px] h-[160px] border-2 border-indigo-100 bg-indigo-50/10 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-40 flex items-center justify-center transition-all group/ring cursor-pointer hover:bg-indigo-50/20"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentDesign('org');
                setIsExpanded(true);
              }}
            >
              <RingLabel label="组织端智能体" color="indigo" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '60s' }}>
                <MatrixNode label="旅行社智能体" angle={0} color="blue" isLarge onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('agency'); setIsExpanded(true); }} />
                <MatrixNode label="酒店智能体" angle={60} color="blue" isLarge onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('hotel'); setIsExpanded(true); }} />
                <MatrixNode label="景区智能体" angle={120} color="blue" isLarge onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('spot'); setIsExpanded(true); setActiveSubTab('status'); }} />
                <MatrixNode label="政府智能体" angle={180} color="gov" isLarge onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('gov'); setIsExpanded(true); }} />
                <MatrixNode label="出行智能体" angle={240} color="gray" isLarge />
                <MatrixNode label="餐饮智能体" angle={300} color="blue" isLarge onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('dining'); setIsExpanded(true); }} />
              </div>
            </div>

            {/* C. 第二层环：角色智能体 */}
            <div 
              className="absolute top-56 left-1/2 w-[900px] h-[200px] border-2 border-slate-200 bg-slate-50/20 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-30 shadow-sm transition-all group/ring cursor-pointer hover:bg-slate-50/40"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentDesign('role');
                setIsExpanded(true);
              }}
            >
              <RingLabel label="角色智能体" color="violet" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
                <MatrixNode label="销售" angle={0} color="violet" />
                <MatrixNode label="导游" angle={30} color="violet" onClick={() => window.open(window.location.origin + window.location.pathname + '?role=guide', '_blank')} />
                <MatrixNode label="线路设计师" angle={330} color="violet" />
                <MatrixNode label="行业专家" angle={90} color="violet" />
                <MatrixNode label="气象助手" angle={110} color="violet" />
                <MatrixNode label="客房管家" angle={180} color="violet" />
                <MatrixNode label="餐饮部" angle={210} color="violet" />
                <MatrixNode label="前台接待" angle={150} color="violet" />
              </div>
            </div>

            {/* D. 第三层环：功能智能体 */}
            <div 
              className="absolute top-88 left-1/2 w-[1050px] h-[260px] border-2 border-teal-400 bg-teal-50/40 rounded-[50%] [transform:translateX(-50%)_rotateX(60deg)] [transform-style:preserve-3d] z-20 transition-all group/ring cursor-pointer hover:bg-teal-50/60"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentDesign('func');
                setIsExpanded(true);
              }}
            >
              <RingLabel label="功能智能体" color="teal" className="top-1/2 [transform:translate(-50%,-50%)_rotateX(-60deg)]" />
              
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow [transform-style:preserve-3d]" style={{ animationDuration: '100s' }}>
                <MatrixNode label="房态查询" angle={0} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="预约送餐" angle={30} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="智能行程规划" angle={90} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="智能订购" angle={120} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="政策问答" angle={150} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="智能导览" angle={180} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="活动智能推荐" angle={240} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="游记生成" angle={270} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('func'); setIsExpanded(true); }} />
                <MatrixNode label="旅居智能体" angle={300} color="teal" onClick={(e: any) => { e.stopPropagation(); setCurrentDesign('xiaoxi'); setIsExpanded(true); }} />
              </div>
            </div>
          </div>

          {/* Right Side Content Panel */}
          <div 
            className={`absolute right-0 top-0 w-[1100px] h-full transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100 translate-x-0 -translate-y-10' : 'opacity-0 translate-x-12 translate-y-0 pointer-events-none'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-6 border border-white shadow-2xl h-[780px] overflow-y-auto no-scrollbar relative">
               <button 
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-8 right-8 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors z-50"
               >
                  <ArrowRight size={20} />
               </button>

               <div className={`grid ${currentDesign === 'func' ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-[380px_1fr]'} gap-6 animate-in slide-in-from-right-12 duration-700`}>
                  {/* Text Content */}
                  <div className="space-y-8">
                     {currentDesign === 'org' && (
                         <>
                            <h3 className="text-2xl font-black text-indigo-600 flex items-center gap-3"><Layers size={28}/> 组织端智能体 · 数字化中枢</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">为各类旅游组织提供全流程、低门槛的数字化转型方案，实现跨层级、多角色的智能协同。</p>
                            <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100">
                               <h4 className="font-bold text-slate-800 mb-4 px-3 flex items-center gap-2 text-sm uppercase tracking-widest text-slate-400">
                                 组织端共性能力 (点击切换预览)
                               </h4>
                               <ul className="space-y-2">
                                  <DesignFeature 
                                    icon={Zap} 
                                    t="免 SaaS · 零代码上线（高质量数据采集）" 
                                    d="问答式引导注册，分钟级完成配置，无需漫长的开发与部署周期。" 
                                    active={activeOrgTab === 'saas'}
                                    onClick={() => setActiveOrgTab('saas')}
                                    demoUrl="http://117.187.1.7:58811/onboarding"
                                  />
                                  <DesignFeature 
                                    icon={LayoutDashboard} 
                                    t="门户式首页设计" 
                                    d="主动式服务+多角色智能体，根据角色与场景动态生成专属首页" 
                                    active={activeOrgTab === 'portal'}
                                    onClick={() => setActiveOrgTab('portal')}
                                  />
                                  <DesignFeature 
                                    icon={Box} 
                                    t="能力插件集市" 
                                    d="逐步覆盖企业经营既有的各类软件系统" 
                                    active={activeOrgTab === 'marketplace'}
                                    onClick={() => setActiveOrgTab('marketplace')}
                                    demoUrl="http://117.187.1.7:58811/library"
                                  />
                               </ul>
                            </div>
                         </>
                      )}

                     {currentDesign === 'xiaoxi' && (
                        <>
                           <h3 className="text-2xl font-black text-teal-600 flex items-center gap-3"><Bot size={28}/> 多彩黄小西 · C端伴游</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">核心目标是将其从行程规划问答式工具，升级为集“行程管理、主动提醒、服务调度”于一体的贵州省级的全旅程陪伴数字生命体。——不以订票为核心目标，而是一个数字导游，随时随地站在游客身边帮他提供服务。</p>
                           <ul className="space-y-4">
                              <DesignFeature icon={LifeBuoy} t="侦察需求式的智能体（主动服务）" d="实时捕捉游客潜在需求，动态生成个性化行程卡片，实现从‘搜攻略’到‘等服务’的体验升级。" />
                              <DesignFeature icon={Heart} t="旅游专业数字分身（协同调度）" d="构建由多个垂直领域智能体组成的数字分身矩阵，提供覆盖行前、行中、行后的全生命周期陪伴。" />
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
                        <div className="flex flex-col h-full space-y-8">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                 <Mountain size={28}/>
                              </div>
                              <div>
                                 <h3 className="text-2xl font-black text-emerald-600">景区智能体 · 产品设计</h3>
                                 <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Scenic Spot Agent Design</p>
                              </div>
                           </div>

                           <div className="flex flex-col gap-6">
                              <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-100">
                                 <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                    专注于景区场景的智能化管理与游客服务，通过打通票务、导览、安防等系统，提供全方位的数智化运营支持。
                                 </p>
                              </div>

                              <div className="flex flex-col gap-4">
                                 <div 
                                    onClick={() => setActiveSubTab('status')}
                                    className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer group flex flex-col gap-2 ${activeSubTab === 'status' ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-100' : 'bg-white border-slate-100 hover:border-emerald-200 shadow-sm'}`}
                                 >
                                    <div className="flex items-center gap-3">
                                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSubTab === 'status' ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500'}`}>
                                          <ClipboardList size={20} />
                                       </div>
                                       <h4 className={`text-xl font-bold ${activeSubTab === 'status' ? 'text-emerald-700' : 'text-slate-600'}`}>现状：实时导览与问答</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed pl-1">打通票务、导览、安防监控与多端信息发布，实现景区全域智慧化管理与实时问答服务。</p>
                                 </div>

                                 <div 
                                    onClick={() => setActiveSubTab('planning')}
                                    className={`p-6 rounded-[2rem] border-2 transition-all cursor-pointer group flex flex-col gap-2 ${activeSubTab === 'planning' ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-100' : 'bg-white border-slate-100 hover:border-emerald-200 shadow-sm'}`}
                                 >
                                    <div className="flex items-center gap-3">
                                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSubTab === 'planning' ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500'}`}>
                                          <Sparkles size={20} />
                                       </div>
                                       <h4 className={`text-xl font-bold ${activeSubTab === 'planning' ? 'text-emerald-700' : 'text-slate-600'}`}>规划：沉浸式数智愿景</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed pl-1">2026 愿景：多模态 AI 深度交互、AR 沉浸式导览，以及服务半径外扩的商业闭环。</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}

                     {currentDesign === 'agency' && (
                        <>
                           <h3 className="text-2xl font-black text-indigo-600 flex items-center gap-3"><Briefcase size={28}/> 旅行社智能体 · B端工作台</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">专为旅行社打造的 AI 协同办公系统，涵盖线路设计、销售转化、导游调度等核心业务流程，通过大模型能力显著提升人效。</p>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div 
                                 onClick={() => handleEnterApp('agency')}
                                 className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-3xl cursor-pointer hover:shadow-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all active:scale-[0.98] group/card"
                              >
                                 <LayoutDashboard className="text-indigo-600 mb-4 group-hover/card:scale-110 transition-transform" size={24} />
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
                                 <div className="mt-4 pt-4 border-t border-indigo-100/50 flex items-center justify-between text-indigo-600">
                                    <span className="text-xs font-black uppercase tracking-widest">点击进入管理端</span>
                                    <ChevronRight size={16} className="group-hover/card:translate-x-1 transition-transform" />
                                 </div>
                              </div>
                              <div 
                                 onClick={() => handleEnterApp('guide')}
                                 className="p-6 bg-orange-50/50 border border-orange-100 rounded-3xl cursor-pointer hover:shadow-lg hover:border-orange-300 hover:bg-orange-50 transition-all active:scale-[0.98] group/card"
                              >
                                 <Briefcase className="text-orange-600 mb-4 group-hover/card:scale-110 transition-transform" size={24} />
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
                                 <div className="mt-4 pt-4 border-t border-orange-100/50 flex items-center justify-between text-orange-600">
                                    <span className="text-xs font-black uppercase tracking-widest">点击进入员工端</span>
                                    <ChevronRight size={16} className="group-hover/card:translate-x-1 transition-transform" />
                                 </div>
                              </div>
                           </div>
                        </>
                     )}

                     {currentDesign === 'hotel' && (
                        <>
                           <h3 className="text-2xl font-black text-violet-600 flex items-center gap-3"><BedDouble size={28}/> 酒店智能体 · 智慧住宿</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">提供从预订、入住到离店的全流程智慧服务，实现无接触式服务闭环与高效运营。</p>
                           <ul className="space-y-4">
                              <DesignFeature icon={BedDouble} t="无接触服务" d="VR看房、在线选房、自助入住/退房。" />
                              <DesignFeature icon={LayoutDashboard} t="多租户管理" d="连锁集团统一后台，门店数据隔离与个性化配置。" />
                              <DesignFeature icon={MessageSquare} t="客房管家" d="即时通讯、多语言翻译、快速响应服务需求。" />
                           </ul>
                           <div className="flex flex-col gap-6 pt-4">
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(datangmaQrCode)}>
                                    <img src={datangmaQrCode} alt="大堂码" className="w-full aspect-square rounded-xl object-cover" />
                                    <div className="text-center">
                                       <div className="font-bold text-slate-800 text-sm">大堂码体验</div>
                                       <div className="text-[10px] text-slate-400 mt-1">酒店公区服务</div>
                                    </div>
                                 </div>
                                 <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveQrCode(fangjianmaQrCode)}>
                                    <img src={fangjianmaQrCode} alt="房间码" className="w-full aspect-square rounded-xl object-cover" />
                                    <div className="text-center">
                                       <div className="font-bold text-slate-800 text-sm">房间码体验</div>
                                       <div className="text-[10px] text-slate-400 mt-1">客房专属服务</div>
                                    </div>
                                 </div>
                              </div>
                              <button 
                                 onClick={() => openExternal('http://47.109.26.72:8080/hotel_ai_os/')}
                                 className="w-full bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 group transition-all active:scale-95 mt-4"
                              >
                                 下一步规划 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </>
                     )}

                     {currentDesign === 'dining' && (
                        <>
                           <h3 className="text-2xl font-black text-orange-600 flex items-center gap-3"><Utensils size={28}/> 餐饮智能体 · 智慧美食</h3>
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
                           <h3 className="text-2xl font-black text-blue-600 flex items-center gap-3"><Landmark size={28}/> 政府智能体 · 监管决策中枢</h3>
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

                     {currentDesign === 'role' && (
                         <>
                            <h3 className="text-2xl font-black text-violet-600 flex items-center gap-3"><Users size={28}/> 角色智能体 · 数字孪生员工</h3>
                           <p className="text-slate-500 text-lg leading-relaxed">通过对优秀从业者能力的数字化建模，构建出具备专业知识、服务意识与执行能力的数字角色矩阵。</p>
                           <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100">
                              <h4 className="font-bold text-slate-800 mb-4 px-3 flex items-center gap-2 text-sm uppercase tracking-widest text-slate-400">
                                核心价值 (点击切换预览)
                              </h4>
                              <ul className="space-y-2">
                                 <DesignFeature 
                                   icon={UserCheck} 
                                   t="辅助旅游从业人员" 
                                   d="作为从业者的“数字助手”，提供专业知识支持、方案快速生成与任务协同。" 
                                   active={activeRoleTab === 'assistant'}
                                   onClick={() => setActiveRoleTab('assistant')}
                                 />
                                 <DesignFeature 
                                   icon={Clock} 
                                   t="24小时在线数字员工" 
                                   d="帮助企业拥有永不疲倦的各类数字员工，实现全天候、标准化的高质量服务。" 
                                   active={activeRoleTab === 'digital_employee'}
                                   onClick={() => setActiveRoleTab('digital_employee')}
                                   demoUrl="http://117.187.1.7:58811/digital-twin/"
                                 />
                              </ul>
                           </div>
                        </>
                     )}
                  </div>

                  {/* Preview Content */}
                  <div className="relative flex items-center justify-center min-h-[500px]">
                     <div className="absolute inset-0 bg-indigo-500/5 rounded-[4rem] blur-3xl"></div>
                     
                     {currentDesign === 'org' && (
                        <div className="flex flex-col items-center justify-center scale-90 w-full animate-in zoom-in-95 duration-500">
                           {activeOrgTab === 'saas' && (
                              <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-10 duration-500">
                                 <div className="bg-[#0f172a] rounded-[2.5rem] p-10 w-full max-w-[700px] shadow-2xl border border-slate-800 relative isolate scale-100">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-2xl -z-10"></div>
                                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-800">
                                       <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                          <Bot className="text-white" size={28} />
                                       </div>
                                       <div>
                                          <div className="text-white font-bold text-xl tracking-tight">智能部署助手</div>
                                          <div className="text-slate-500 text-xs uppercase tracking-widest mt-0.5">Deployment AI Assistant</div>
                                       </div>
                                    </div>
                                    <div className="space-y-8">
                                       <div className="flex justify-start">
                                          <div className="bg-slate-800/50 text-slate-300 p-5 rounded-3xl rounded-tl-none max-w-[85%] text-base leading-relaxed border border-slate-700 shadow-inner">
                                             您好！我是部署助手。请告诉我您旅游组织的核心业务特色是什么？
                                          </div>
                                       </div>
                                       <div className="flex justify-end">
                                          <div className="bg-indigo-600 text-white p-5 rounded-3xl rounded-tr-none max-w-[85%] text-base leading-relaxed shadow-xl shadow-indigo-600/20">
                                             我们是一家位于黔东南的民族文化景区，主打非遗体验与高端民宿。
                                          </div>
                                       </div>
                                       <div className="bg-slate-800/30 border border-indigo-500/30 rounded-[2rem] p-8 space-y-6">
                                          <div className="flex items-center gap-3 text-indigo-400 text-sm font-bold uppercase tracking-[0.2em]">
                                             <CheckCircle2 size={18} /> 配置方案已就绪
                                          </div>
                                          <div className="grid grid-cols-2 gap-8">
                                             <div className="space-y-4">
                                                <div className="flex flex-col gap-1">
                                                   <span className="text-slate-500 text-xs uppercase tracking-wider">业务类型</span>
                                                   <span className="text-slate-200 font-bold text-lg">文化景区 / 精品民宿</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                   <span className="text-slate-500 text-xs uppercase tracking-wider">推荐数字分身</span>
                                                   <span className="text-slate-200 font-bold text-lg">民族文化专家 (AI Expert)</span>
                                                </div>
                                             </div>
                                             <div className="space-y-4">
                                                <div className="flex flex-col gap-1">
                                                   <span className="text-slate-500 text-xs uppercase tracking-wider">挂载插件</span>
                                                   <span className="text-slate-200 font-bold text-lg">非遗预约, 智慧导览</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                   <span className="text-slate-500 text-xs uppercase tracking-wider">上线周期</span>
                                                   <span className="text-slate-200 font-bold text-lg text-emerald-400">预计 5 分钟</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-8 text-center space-y-4">
                                    <div className="space-y-2">
                                       <div className="text-2xl font-black text-slate-800">免实施、免安装、免部署</div>
                                       <div className="text-indigo-600 font-bold tracking-widest uppercase text-sm">问答式引导注册上线</div>
                                    </div>
                                    <button 
                                       onClick={() => window.open('http://117.187.1.7:58811/onboarding', '_blank')}
                                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg transition-all active:scale-95 flex items-center gap-2 mx-auto"
                                    >
                                       <ExternalLink size={20} />
                                       进入在线演示
                                    </button>
                                 </div>
                              </div>
                           )}

                           {activeOrgTab === 'portal' && (
                              <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-10 duration-500">
                                 <div className="flex gap-8 items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/40 shadow-2xl">
                                    <div className="flex flex-col items-center gap-3 group">
                                       <div className="w-[260px] h-[460px] rounded-xl overflow-hidden shadow-lg border-2 border-white bg-slate-50 transition-transform group-hover:scale-[1.02] duration-500">
                                          <ImageWithLoader src={huangxiaoxiFenshen} alt="黄小西分身" className="w-full h-full" />
                                       </div>
                                       <div className="text-slate-800 font-bold text-sm tracking-tight">黄小西分身</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 group">
                                       <div className="w-[260px] h-[460px] rounded-xl overflow-hidden shadow-lg border-2 border-white bg-slate-50 transition-transform group-hover:scale-[1.02] duration-500">
                                          <ImageWithLoader src={jiudianFenshen} alt="酒店分身" className="w-full h-full" />
                                       </div>
                                       <div className="text-slate-800 font-bold text-sm tracking-tight">酒店分身</div>
                                    </div>
                                 </div>
                                 <div className="mt-8 text-center space-y-4">
                                    <div className="space-y-2">
                                       <div className="text-3xl font-black text-slate-800 tracking-tight">门户式首页设计</div>
                                       <div className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-sm">主动式服务+多角色智能体，根据角色与场景动态生成专属首页</div>
                                    </div>
                                 </div>
                              </div>
                           )}

                           {activeOrgTab === 'marketplace' && (
                              <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-10 duration-500">
                                 <div className="bg-white rounded-[3rem] p-8 w-full max-w-[960px] shadow-2xl border border-slate-100">
                                    <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-50">
                                       <div className="flex items-center gap-4">
                                          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                                             <Store size={28} />
                                          </div>
                                          <div>
                                             <div className="font-black text-2xl text-slate-800">能力插件集市</div>
                                             <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">AI Agent Skill Marketplace</div>
                                          </div>
                                       </div>
                                    </div>

                                    <div className="mb-8 bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/50">
                                       <p className="text-indigo-600/80 leading-relaxed font-medium text-sm">
                                          产品到底能不能打，取决于 AI 是否能调用软件系统实现业务闭环。我们梳理了旅游产业的标准软件系统，让智能体具备“手”和“脚”。
                                       </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                                       {[
                                          { 
                                             title: '业务动作连接器 (MCP 接口集)', 
                                             color: 'text-indigo-600',
                                             bg: 'bg-indigo-50',
                                             items: [
                                                { n: 'OTA 渠道分销插件', i: Workflow, d: '携程/美团库存同步与订单确认' },
                                                { n: '支付与财务接口', i: CreditCard, d: '对接微信/支付宝分账与结算系统' },
                                                { n: 'PMS/ERP 深度打通', i: Building2, d: '实时房态、门票与车调数据交互' }
                                             ]
                                          },
                                          { 
                                             title: '现场执行执行器 (端到端连接)', 
                                             color: 'text-orange-600',
                                             bg: 'bg-orange-50',
                                             items: [
                                                { n: 'IoT 硬件控制集', i: Wifi, d: '智能门锁、闸机及语音杆控制' },
                                                { n: '多端媒介触达', i: Smartphone, d: '视频号/小红书/公众号内容分发' },
                                                { n: '即时指令推送', i: Send, d: '实时向导游及司机端下发任务' }
                                             ]
                                          }
                                       ].map((section, idx) => (
                                          <div key={idx} className="space-y-4">
                                             <div className={`text-[10px] font-black uppercase tracking-[0.3em] ${section.color} flex items-center gap-2 mb-2 whitespace-nowrap`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${section.color.replace('text-', 'bg-')}`}></div>
                                                {section.title}
                                             </div>
                                             <div className="space-y-2">
                                                {section.items.map((item, i) => (
                                                   <div key={i} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 cursor-pointer group">
                                                      <div className={`w-10 h-10 rounded-xl ${section.bg} flex items-center justify-center ${section.color} group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                                                         <item.i size={20} />
                                                      </div>
                                                      <div className="min-w-0">
                                                         <div className="text-sm font-bold text-slate-800 truncate">{item.n}</div>
                                                         <div className="text-[10px] text-slate-400 mt-0.5 truncate">{item.d}</div>
                                                      </div>
                                                   </div>
                                                ))}
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                                 <div className="mt-8 text-center space-y-4">
                                    <div className="space-y-2">
                                       <div className="text-2xl font-black text-slate-800">打通业务系统 · 赋予智能体行动力</div>
                                       <div className="text-indigo-600 font-bold tracking-widest uppercase text-sm">标准化 MCP 接口集 · 插件化原子能力</div>
                                    </div>
                                    <button 
                                       onClick={() => window.open('http://117.187.1.7:58811/library', '_blank')}
                                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg transition-all active:scale-95 flex items-center gap-2 mx-auto"
                                    >
                                       <ExternalLink size={20} />
                                       进入在线演示
                                    </button>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}

                     {currentDesign === 'role' && (
                        <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-10 duration-500">
                           <div className="bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/40 shadow-2xl w-full max-w-[800px]">
                              {activeRoleTab === 'assistant' && (
                                 <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="grid grid-cols-2 gap-6 w-full max-w-[700px]">
                                       <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm group">
                                          <ImageWithLoader 
                                             src={fuzhudaoyouImg} 
                                             alt="辅助导游" 
                                             className="w-full h-auto" 
                                             priority="high"
                                          />
                                       </div>
                                       <div className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm group">
                                          <ImageWithLoader 
                                             src={fuzhukefuImg} 
                                             alt="辅助客服" 
                                             className="w-full h-auto" 
                                             priority="high"
                                          />
                                       </div>
                                    </div>
                                    <div className="text-center space-y-3">
                                       <h4 className="text-3xl font-black text-slate-800">辅助旅游从业人员</h4>
                                       <p className="text-violet-600 font-bold text-lg">数字化助手 · 专业知识支持 · 方案快速生成</p>
                                       <p className="text-slate-500 leading-relaxed max-w-2xl">
                                          为导游、线路设计师等从业者提供实时的专业知识库支持，辅助快速生成行程方案，并实现多方任务的高效协同。
                                       </p>
                                    </div>
                                 </div>
                              )}

                              {activeRoleTab === 'digital_employee' && (
                                 <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl w-full max-w-[700px] group">
                                       <ImageWithLoader 
                                          src={xuniyuangongImg} 
                                          alt="虚拟员工" 
                                          className="w-full h-auto" 
                                          priority="high"
                                       />
                                    </div>
                                    <div className="text-center space-y-3">
                                       <h4 className="text-3xl font-black text-slate-800">24小时在线数字员工</h4>
                                       <p className="text-violet-600 font-bold text-lg">永不疲倦 · 标准化服务 · 全天候响应</p>
                                       <p className="text-slate-500 leading-relaxed max-w-2xl">
                                          构建标准化、可规模化的数字员工矩阵，为企业提供7×24小时的高质量在线服务，确保每一个服务请求都能得到即时、专业的响应。
                                       </p>
                                    </div>
                                    <button 
                                       onClick={() => window.open('http://117.187.1.7:58811/digital-twin/', '_blank')}
                                       className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg transition-all active:scale-95 flex items-center gap-2 mx-auto"
                                    >
                                       <ExternalLink size={20} />
                                       进入在线演示
                                    </button>
                                 </div>
                              )}
                           </div>
                           <div className="mt-8 text-center space-y-2">
                              <div className="text-2xl font-black text-slate-800">角色智能体 · 数字化转型的新劳动力</div>
                              <div className="text-violet-600 font-bold tracking-widest uppercase text-sm">提升人效 · 标准化输出 · 知识沉淀</div>
                           </div>
                        </div>
                     )}

                     {currentDesign === 'xiaoxi' && (
                        <div className="w-full h-full flex items-center justify-center p-8 animate-in fade-in duration-500">
                           <div className="flex gap-12 items-start justify-center w-full max-w-[1200px] scale-[0.75]">
                              {/* Left: Mobile Phone Frame */}
                              <div className="bg-white border-[12px] border-slate-900 rounded-[3.5rem] w-[320px] h-[750px] shadow-2xl overflow-hidden relative isolate shrink-0">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl z-50"></div>
                                 <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden rounded-[2.5rem] transform-gpu">
                                    <Header userRole="tourist" onToggleRole={() => {}} className="rounded-t-[2.5rem]" />
                                    <main className="flex-1 overflow-y-auto no-scrollbar px-2 relative">
                                       <div className="scale-95 origin-top w-full">
                                          <HomeView onOpenExperts={() => {}} />
                                       </div>
                                    </main>
                                    <BottomNav activeTab={0} onTabChange={() => {}} isMenuOpen={false} onToggleMenu={() => {}} />
                                 </div>
                              </div>

                              {/* Right: Business Process Area Preview */}
                              <div className="flex-1 overflow-y-auto no-scrollbar h-[750px]">
                                 <div className="h-full">
                                    <BusinessProcessArea />
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}

                     {currentDesign === 'spot' && (
                        <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in slide-in-from-right-10 duration-500">
                           <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden w-full max-w-[800px]">
                              {activeSubTab === 'status' ? (
                                 <div className="flex flex-col p-8 space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col items-center justify-center space-y-8">
                                       <div className="text-center">
                                          <h4 className="text-2xl font-black text-slate-800 mb-2">当前产品设计预览</h4>
                                          <p className="text-slate-400">实时导览 · 智慧问答 · 全触点分发</p>
                                       </div>
                                       
                                       <div className="grid grid-cols-3 gap-6 w-full">
                                          <div className="flex flex-col gap-4">
                                             <div className="relative group p-4 bg-white rounded-[2rem] border border-slate-100 shadow-xl" onClick={() => setActiveQrCode(jingquQrCode)}>
                                                <img src={jingquQrCode} alt="扫码体验" className="w-full aspect-square rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform" />
                                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg whitespace-nowrap">
                                                   扫码体验
                                                </div>
                                             </div>
                                          </div>
                                          <div className="relative group rounded-2xl overflow-hidden border-4 border-white shadow-lg h-[240px]">
                                             <ImageWithLoader src={jingquImg1} alt="展示图1" className="w-full h-full" priority="high" />
                                          </div>
                                          <div className="relative group rounded-2xl overflow-hidden border-4 border-white shadow-lg h-[240px]">
                                             <ImageWithLoader src={jingquImg2} alt="展示图2" className="w-full h-full" priority="high" />
                                          </div>
                                       </div>

                                       <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                          <div className="p-4 bg-white rounded-2xl border border-slate-100 text-center">
                                             <div className="font-bold text-slate-800 text-sm">智能问答</div>
                                             <div className="text-[10px] text-slate-400">景区信息实时解答</div>
                                          </div>
                                          <div className="p-4 bg-white rounded-2xl border border-slate-100 text-center">
                                             <div className="font-bold text-slate-800 text-sm">全域导览</div>
                                             <div className="text-[10px] text-slate-400">拟物化地图与路线</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ) : (
                                 <div className="flex flex-col p-8 space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 overflow-y-auto max-h-[700px] no-scrollbar">
                                    <div className="space-y-4 text-center">
                                       <h4 className="text-2xl font-black text-slate-800">未来规划核心逻辑</h4>
                                       <p className="text-emerald-600 font-bold text-xl">从‘景区向内导览’延伸到‘服务全方位覆盖’</p>
                                       <p className="text-slate-500 leading-relaxed text-sm max-w-2xl mx-auto">
                                          在现有智能导览的基础上，我们即将上线的几个核心模块将直接打通游客的出行全链路：
                                       </p>
                                    </div>

                                    <div className="grid grid-cols-[1fr_280px] gap-6 items-stretch">
                                       <div className="flex flex-col gap-4">
                                          {[
                                             { t: '服务半径外扩', d: '新增“周边推荐智能体”，不再局限于景区内部，而是把触角伸向周边的地道美食、精品民宿和特色探店，让游客不看攻略也能玩透周边。' },
                                             { t: '解决入口痛点', d: '重点接通智慧停车系统，实时同步车位动态和导航引导，从游客开车进入景区商圈的第一分钟起，就解决‘停车难’这个最大的体验瓶颈。' },
                                             { t: '商业变现闭环', d: '落地“自营商城”模块，通过智能体的精准推荐，将景区的文创周边、特产礼品直接推送到游客手机上，实现边逛边下单的二消。' }
                                          ].map((module, i) => (
                                             <div key={i} className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 flex flex-col gap-1 flex-1 justify-center">
                                                <div className="font-bold text-emerald-700 flex items-center gap-2">
                                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                   {module.t}
                                                </div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed">{module.d}</div>
                                             </div>
                                          ))}
                                       </div>

                                       <div className="relative group rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-100 flex-1 min-h-[400px]">
                                          <img 
                                             src={jingquGuihuaImg} 
                                             alt="景区规划" 
                                             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                                             <div className="text-left">
                                                <p className="text-white text-base font-bold">云峰屯堡 · 2026 数智愿景</p>
                                                <p className="text-white/70 text-[10px]">AI 伴游 + AR 沉浸式导览规划效果图</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <button 
                                       onClick={() => openExternal('https://arifinfirman788-blip.github.io/JingQu/')}
                                       className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-[2rem] font-black shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-4 group mt-2"
                                    >
                                       <span className="text-lg">进入景区智能体规划设计</span>
                                       <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                 </div>
                              )}
                           </div>
                        </div>
                     )}

                     {currentDesign === 'hotel' && (
                        <div className="flex flex-col items-center justify-center scale-90">
                           <div className="h-[550px] w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-white relative">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                              <ImageWithLoader src={jiudianImg} alt="酒店智能体" className="w-full h-full" priority="high" />
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
                              <ImageWithLoader src={canyinImg} alt="餐饮智能体" className="w-full h-full" priority="high" />
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
                              <ImageWithLoader src={dapingImg} alt="政府智能体" className="w-full h-auto rounded-lg shadow-inner" priority="high" />
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

                     {currentDesign === 'func' && (
                        <div className="w-full animate-in fade-in slide-in-from-right-10 duration-500 space-y-10">
                           <div className="flex flex-col gap-5 pb-6 border-b border-slate-100">
                              <div className="flex items-center gap-5">
                                 <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 shadow-lg shadow-teal-100/50 shrink-0">
                                    <Cpu size={36} />
                                 </div>
                                 <div>
                                    <h3 className="text-xl font-black text-teal-600">功能智能体</h3>
                                    <div className="flex items-center gap-3 mt-1.5">
                                       <span className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Atomic Function Agents</span>
                                       <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                       <span className="text-teal-600/60 text-xs font-bold">原子化服务能力集</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="max-w-2xl">
                                 <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    专注于文旅场景中的原子化功能模块。通过多维感知游客意图，自动组合交通、餐饮、门票等插件，生成可交互、可执行的实时行程方案。
                                 </p>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 gap-8">
                              {[
                                 { 
                                    title: '智能决策与分析支撑', 
                                    color: 'text-emerald-600',
                                    bg: 'bg-emerald-50',
                                    items: [
                                       { n: 'BI 业务实时看板', i: BarChart3, d: '基于真实交易数据的 AI 辅助决策' },
                                       { n: '智能营销触发器', i: Zap, d: '根据库存自动触发优惠投放' },
                                       { n: '舆情监控插件', i: Search, d: '全网评价研判与应对建议生成' }
                                    ]
                                 },
                                 { 
                                    title: '安全合规与基础设施', 
                                    color: 'text-slate-600',
                                    bg: 'bg-slate-50',
                                    items: [
                                       { n: '敏感数据沙箱', i: Lock, d: '确保 MCP 调用过程的数据安全' },
                                       { n: 'Multi-Agent 标准协议', i: Layers, d: '支持异构系统智能体协同交互' },
                                       { n: '知识库增强系统', i: Database, d: '业务 SOP 与专业知识 RAG 挂载' }
                                    ]
                                 }
                              ].map((section, idx) => (
                                 <div key={idx} className="space-y-8">
                                    <div className={`text-sm font-black uppercase tracking-[0.4em] ${section.color} flex items-center gap-3`}>
                                       <div className={`w-2.5 h-2.5 rounded-full ${section.color.replace('text-', 'bg-')}`}></div>
                                       {section.title}
                                       <div className="flex-1 h-px bg-slate-100 ml-3"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                       {section.items.map((item, i) => (
                                          <div key={i} className="flex flex-col gap-4 p-6 rounded-[2.5rem] bg-white border border-slate-100 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all cursor-pointer group relative isolate overflow-hidden">
                                             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-50/50 to-transparent -z-10 rounded-bl-[3rem]"></div>
                                             <div className={`w-12 h-12 rounded-xl ${section.bg} flex items-center justify-center ${section.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                                <item.i size={24} />
                                             </div>
                                             <div className="space-y-2">
                                                <div className="text-lg font-black text-slate-800 group-hover:text-teal-600 transition-colors whitespace-nowrap">{item.n}</div>
                                                <div className="text-xs text-slate-500 leading-relaxed font-medium">{item.d}</div>
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              ))}
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
const MatrixNode = ({ label, angle, color = 'slate', isCore, onClick, image, isLarge }: any) => {
  // Calculate position on ellipse
  const rad = (angle * Math.PI) / 180;
  
  const x = 50 + 50 * Math.cos(rad); // 半径为 50%
  const y = 50 + 50 * Math.sin(rad); // 半径为 50%
  
  const colorStyles: any = {
    slate: 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-2xl shadow-sm',
    blue: 'bg-white text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl shadow-sm',
    teal: 'bg-teal-50 text-teal-800 border-teal-400 hover:border-teal-500 hover:bg-teal-100 rounded-xl border-dashed font-bold',
    indigo: 'bg-white text-indigo-600 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-2xl shadow-sm',
    gov: 'bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white border-rose-200 hover:brightness-105 rounded-2xl shadow-lg shadow-rose-200 ring-2 ring-white/70 font-black',
    violet: 'bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-300 hover:bg-violet-100 rounded-full',
    gray: 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed grayscale opacity-80 rounded-2xl'
  };

  const specificStyle = colorStyles[color] || colorStyles.slate;

  return (
    <div 
      className={`absolute shadow-sm whitespace-nowrap transition-all hover:scale-110 cursor-pointer origin-bottom border z-[60] flex items-center gap-2
        ${isLarge ? 'px-6 py-3 text-lg' : 'px-3 py-1.5 text-xs'}
        ${isCore ? 'bg-indigo-600 text-white scale-110 shadow-indigo-200 rounded-lg' : specificStyle}
      `}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        transform: 'translate(-50%, -100%) rotateX(-60deg)' 
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick(e);
      }}
    >
      {image && (
        <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img src={image} alt={label} className="w-full h-full object-cover" />
        </div>
      )}
      {label}
    </div>
  );
};

// --- PASSWORD LOCK COMPONENT ---
const PasswordLock: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'glsw123456') {
      onUnlock();
      localStorage.setItem('page_unlocked', 'true');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-8">
            <Lock className="text-indigo-600" size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-3">访问受限</h2>
          <p className="text-slate-500 mb-10 text-lg">内部战略规划展示系统<br/>请输入访问密码以查看内容</p>
          
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入访问密码"
                className={`w-full px-8 py-5 bg-slate-50 border-2 rounded-2xl outline-none transition-all text-center text-xl font-bold tracking-widest ${
                  error ? 'border-red-400 animate-bounce' : 'border-transparent focus:border-indigo-500'
                }`}
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold">密码错误，请重试</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98] text-lg"
            >
              解锁访问
            </button>
          </form>
          
          <div className="mt-12 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} />
            <span>Internal Strategy System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem('page_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }

    // 处理 URL 参数实现自动跳转
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    if (role === 'guide') {
      setUserRole('guide');
      setCurrentView('app');
      setSubView('main');
      setActiveTab(0);
    }
  }, []);

  const [currentView, setCurrentView] = useState<'portal' | 'app'>('portal');
  const [userRole, setUserRole] = useState<UserRole>('tourist');
  useEffect(() => {
      // 预加载关键大图
      const criticalImages = [
         jingquImg1, jingquImg2, huangxiaoxiImg2, dapingImg, 
         huangxiaoxiImg1, fuzhudaoyouImg, fuzhukefuImg, xuniyuangongImg
      ];
      
      criticalImages.forEach(src => {
         const img = new Image();
         img.src = src;
      });
   }, []);

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
      summary: "旅游专业数字分身（协同调度）",
      desc: "深度嵌入具体职业场景与游客服务场景。核心产品为‘旅游专业数字分身’，基于多源垂直大模型，为导游、管家乃至游客本人构建具备专业知识与个性化特征的数字孪生，实现全天候、多角色的智能协同与交互。",
      color: "violet"
    },
    func: {
      title: "功能智能体 (Function Agents)",
      summary: "侦察需求式的智能体（主动服务）",
      desc: "专注于文旅场景中的原子化功能模块。核心能力在于‘侦察需求式的智能体’，通过多维感知游客意图，自动组合交通、餐饮、门票等插件，生成可交互、可执行的实时行程方案。",
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
  const [activeSubTab, setActiveSubTab] = useState<'status' | 'planning'>('status');

  const handleEnterApp = (role: UserRole) => { 
    setUserRole(role); 
    setCurrentView('app'); 
    setSubView('main');
    setActiveTab(0);
  };
  const handleBackToPortal = () => {
    setCurrentView('portal');
    // 返回到智能体总入口架构
    setActiveModule('agent');
    setPlanningTab('matrix');
  };
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

  if (!isUnlocked) {
    return <PasswordLock onUnlock={() => setIsUnlocked(true)} />;
  }

  if (currentView === 'portal') {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-y-auto no-scrollbar pb-20 selection:bg-indigo-100 selection:text-indigo-700">
            {/* Top Level Module Navigation */}
            <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200">
               <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-20">
                  <div className="flex items-center gap-4">
                     <img src={huangxiaoxiImg1} alt="Logo" className="w-16 h-16 object-contain" />
                     <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">贵旅数网</span>
                        <span className="text-indigo-600 text-xs font-bold tracking-[0.2em] mt-1.5 uppercase">2026年1月12日</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200">
                     {[
                        { id: 'architecture', label: '总体架构', icon: Layers },
                        { id: 'agent', label: '智能体', icon: Cpu },
                        { id: 'platform', label: '建平台', icon: Network },
                        { id: 'data', label: '汇数据', icon: Database },
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
                                旅游可信数据空间是贵州省旅游数据流通的基础设施，是利用数据沙箱、联邦学习、多方安全计算、区块链等技术，构建数据流通利用基础设施，实现数据共享使用过程“数据不出域、可用不可见，使用过程可追溯”，解决数据流通应用过程中“不敢供、不想供、不愿供”的问题
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">核心组成节点</div>
                            {[
                              {
                                title: '业务节点',
                                desc: '管理连接器；数据空间市场门户及后台管理。',
                                icon: LayoutDashboard,
                                color: 'indigo',
                                features: ['节点管理', '门户配置'],
                                subNodes: [
                                  {
                                    name: '业务前台 (证书登录)',
                                    url: 'https://trust-business-node.aihuangxiaoxi.com/index',
                                    accounts: [
                                      { label: '贵旅数网', account: 'test001', password: 'Energy@123' }
                                    ]
                                  },
                                  {
                                    name: '业务后台 (运营/管理)',
                                    url: 'https://trust-business-admin.aihuangxiaoxi.com/login',
                                    accounts: [
                                      { label: '运营方', account: 'yyf', password: 'qwer1234' },
                                      { label: '管理方', account: 'admin', password: 'qwer1234' }
                                    ]
                                  }
                                ]
                              },
                              {
                                title: '连接器',
                                desc: '用数方和供数方的应用端，用于数据高效流转。',
                                icon: Network,
                                color: 'blue',
                                features: ['跨云互联', '数据沙箱'],
                                subNodes: [
                                  {
                                    name: '贵旅数网连接器',
                                    url: 'https://trust-connector1.aihuangxiaoxi.com/workbench/home',
                                    account: 'HS@123',
                                    password: 'Energy@123'
                                  }
                                ]
                              },
                              {
                                title: '功能节点',
                                desc: '全域路由能力，审核连接器身份与业务节点。',
                                icon: ShieldCheck,
                                color: 'emerald',
                                features: ['身份核验', '共识协作'],
                                subNodes: [
                                  {
                                    name: '功能后台',
                                    url: 'https://trust-functional-admin.aihuangxiaoxi.com/workbench/workorderMGT/untreated',
                                    account: 'admin',
                                    password: 'qwer1234'
                                  }
                                ]
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
                                    <p className="text-slate-500 text-xs leading-relaxed mb-4">{node.desc}</p>
                                    
                                    <div className={`pt-4 border-t border-slate-50 ${(node.title === '业务节点' || node.title === '连接器') ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'space-y-3'}`}>
                                      {node.subNodes.map((sub, idx) => (
                                        <div key={idx} className={`flex flex-col gap-3 ${(node.title === '业务节点' || node.title === '连接器') ? 'bg-slate-50/50 p-4 rounded-xl border border-slate-100 hover:bg-slate-100/80 transition-colors' : ''}`}>
                                          <div className="flex items-center justify-between gap-2">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{sub.name}</div>
                                            <button 
                                              onClick={() => openExternal(sub.url)}
                                              className="bg-indigo-600 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold hover:bg-indigo-700 transition-all shadow-sm shrink-0"
                                            >
                                              进入
                                            </button>
                                          </div>
                                          <div className="flex flex-col gap-2 min-w-0">
                                            {sub.accounts ? (
                                              <div className="space-y-3">
                                                {sub.accounts.map((acc, aIdx) => (
                                                  <div key={aIdx} className="flex flex-col gap-1.5">
                                                    <div className="flex items-center justify-between gap-2">
                                                      <div className="text-[9px] text-slate-400 font-medium">{acc.label}</div>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                      <div 
                                                        onClick={() => copyText(acc.account)}
                                                        className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                                        title="点击复制账号"
                                                      >
                                                        <span className="text-slate-400 mr-1 font-sans">账号:</span>{acc.account}
                                                      </div>
                                                      <div 
                                                        onClick={() => copyText(acc.password)}
                                                        className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                                        title="点击复制密码"
                                                      >
                                                        <span className="text-slate-400 mr-1 font-sans">密码:</span>{acc.password}
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            ) : (
                                              <div className="flex flex-wrap items-center gap-2">
                                                <div 
                                                  onClick={() => copyText(sub.account)}
                                                  className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                                  title="点击复制账号"
                                                >
                                                  <span className="text-slate-400 mr-1 font-sans">账号:</span>{sub.account}
                                                </div>
                                                <div 
                                                  onClick={() => copyText(sub.password)}
                                                  className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                                  title="点击复制密码"
                                                >
                                                  <span className="text-slate-400 mr-1 font-sans">密码:</span>{sub.password}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      ))}
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {[
                            {
                              name: '企业端',
                              sub: '景区、餐饮、酒店企业端入口',
                              url: 'https://www.lbymt.com/config/home/home?sysFlag=sj',
                              accounts: [
                                { label: '景区企业端 (贵旅数网)', account: '13658545528', pass: 'Ymt@1234', note: '右上角选择景区' },
                                { label: '酒店企业端 (贵旅数网)', account: '15286009622', pass: 'Cy123456', note: '右上角选择酒店' }
                              ],
                              icon: Building2,
                              color: 'indigo'
                            },
                            {
                              name: '采购端',
                              sub: '省旅游数智互联平台采购端',
                              url: 'https://ly.ymtcloud.com/wap/tradeMall.html',
                              accounts: [
                                { label: '采购端账号', account: '13885022658', pass: 'Ty123456', note: '右上角选旅行社' }
                              ],
                              icon: ShoppingBag,
                              color: 'blue'
                            },
                            {
                              name: '供应链金融端',
                              sub: '融资撮合与资金管理平台',
                              url: 'https://ly.ymtcloud.com/wap/financialService.html',
                              accounts: [
                                { label: '金融端 (初审 - 荔波全域智慧旅游)', account: '15286009622', pass: 'Cy123456', note: '右上角选择旅行社' },
                                { label: '金融端 (复审 - 信用通供应链)', account: '18798041556', pass: 'Xyt123456', note: '右上角选择旅行社' }
                              ],
                              icon: Wallet,
                              color: 'amber'
                            }
                          ].map((entry, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group/card flex flex-col">
                              <div className="flex items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                  <div className={`w-10 h-10 bg-${entry.color}-50 rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform`}>
                                    <entry.icon className={`text-${entry.color}-600`} size={20} />
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="font-bold text-slate-900 text-sm truncate">{entry.name}</h4>
                                    <p className="text-[10px] text-slate-400 truncate">{entry.sub}</p>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => openExternal(entry.url)}
                                  className={`px-3 py-1.5 rounded-lg bg-${entry.color}-50 text-${entry.color}-700 border border-${entry.color}-200 text-[10px] font-bold hover:bg-${entry.color}-600 hover:text-white transition-all flex items-center gap-1 shadow-sm shrink-0`}
                                >
                                  进入 <ExternalLink size={12} />
                                </button>
                              </div>
                              
                              <div className="space-y-3 flex-grow">
                                {entry.accounts.map((acc, aIdx) => (
                                  <div key={aIdx} className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                      <div className="text-[10px] font-bold text-slate-600">{acc.label}</div>
                                      {acc.note && <div className="text-[9px] text-amber-600 font-medium bg-amber-50 px-1.5 py-0.5 rounded">{acc.note}</div>}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                      <div 
                                        onClick={() => copyText(acc.account)}
                                        className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                        title="点击复制账号"
                                      >
                                        <span className="text-slate-400 mr-1 font-sans">账号:</span>{acc.account}
                                      </div>
                                      <div 
                                        onClick={() => copyText(acc.pass)}
                                        className="px-2 py-1 bg-white rounded text-[10px] font-mono text-slate-500 cursor-pointer hover:bg-slate-100 hover:text-indigo-600 transition-colors border border-slate-100 whitespace-nowrap"
                                        title="点击复制密码"
                                      >
                                        <span className="text-slate-400 mr-1 font-sans">密码:</span>{acc.pass}
                                      </div>
                                    </div>
                                  </div>
                                ))}
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
                         <div className="flex items-center gap-8">
                            <img src={huangxiaoxiImg2} alt="Logo" className="w-24 h-24 object-contain" />
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
                        activeSubTab={activeSubTab}
                        setActiveSubTab={setActiveSubTab}
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
                                  <h3 className="text-xl font-black text-indigo-600 mb-6 flex items-center gap-3"><Briefcase size={24}/> 旅行社端 · 管理与执行</h3>
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
                                  <h3 className="text-xl font-black text-violet-600 mb-6 flex items-center gap-3"><BedDouble size={24}/> 酒店智能体 · 智慧住宿</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                     面向住客与酒店管理方，提供从预订、入住到离店的全流程智慧服务，实现无接触式服务闭环与高效运营。
                                  </p>
                                  <ul className="space-y-4 mb-10">
                                     <DesignFeature icon={BedDouble} t="无接触服务" d="VR看房、在线选房、自助入住/退房。" />
                                     <DesignFeature icon={LayoutDashboard} t="多租户管理" d="连锁集团统一后台，门店数据隔离与个性化配置。" />
                                     <DesignFeature icon={MessageSquare} t="客房管家" d="即时通讯、多语言翻译、快速响应服务需求。" />
                                  </ul>
                                  <div className="flex flex-col gap-6 items-start">
                                     <div className="flex gap-6">
                                        <div className="flex flex-col gap-3">
                                           <div 
                                              className="w-40 h-40 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:scale-105 transition-transform"
                                              onClick={() => setActiveQrCode(datangmaQrCode)}
                                           >
                                              <img src={datangmaQrCode} alt="大堂码" className="w-full h-full object-contain" />
                                           </div>
                                           <div className="text-center">
                                              <div className="font-bold text-slate-800">大堂码</div>
                                              <div className="text-xs text-slate-400">公区体验</div>
                                           </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                           <div 
                                              className="w-40 h-40 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:scale-105 transition-transform"
                                              onClick={() => setActiveQrCode(fangjianmaQrCode)}
                                           >
                                              <img src={fangjianmaQrCode} alt="房间码" className="w-full h-full object-contain" />
                                           </div>
                                           <div className="text-center">
                                              <div className="font-bold text-slate-800">房间码</div>
                                              <div className="text-xs text-slate-400">客房体验</div>
                                           </div>
                                        </div>
                                     </div>
                                     <button 
                                        onClick={() => openExternal('http://47.109.26.72:8080/hotel_ai_os/')}
                                        className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 group transition-all active:scale-95"
                                     >
                                        下一步规划 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                     </button>
                                  </div>
                               </div>
                            )}

                            {designTab === 'dining' && (
                               <div className="animate-in slide-in-from-left-4">
                                  <h3 className="text-xl font-black text-orange-600 mb-6 flex items-center gap-3"><Utensils size={24}/> 餐饮智能体 · 智慧美食</h3>
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
                                  <h3 className="text-xl font-black text-teal-600 mb-6 flex items-center gap-3"><Bot size={24}/> 多彩黄小西 · C端伴游</h3>
                                  <p className="text-slate-500 text-lg leading-relaxed mb-10">核心目标是将其从行程规划问答式工具，升级为集“行程管理、主动提醒、服务调度”于一体的贵州省级的全旅程陪伴数字生命体。——不以订票为核心目标，而是一个数字导游，随时随地站在游客身边帮他提供服务。</p>
                                  
                                  <ul className="space-y-4 mb-10">
                                     <DesignFeature icon={LifeBuoy} t="侦察需求式的智能体（主动服务）" d="实时捕捉游客潜在需求，动态生成个性化行程卡片，实现从‘搜攻略’到‘等服务’的体验升级。" />
                                     <DesignFeature icon={Heart} t="旅游专业数字分身（协同调度）" d="构建由多个垂直领域智能体组成的数字分身矩阵，提供覆盖行前、行中、行后的全生命周期陪伴。" />
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
                                   <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-3"><Mountain size={24}/> 景区智能体 · 产品端设计</h3>
                                   <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                      专注于景区场景的智能化管理与游客服务，通过打通票务、导览、安防等系统，提供全方位的数智化运营支持。
                                   </p>

                                   <div className="flex gap-4 mb-8">
                                      <button 
                                         onClick={() => setActiveSubTab('status')}
                                         className={`px-6 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'status' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                      >
                                         现状：实时导览
                                      </button>
                                      <button 
                                         onClick={() => setActiveSubTab('planning')}
                                         className={`px-6 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'planning' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                      >
                                         规划：2026愿景
                                      </button>
                                   </div>

                                   {activeSubTab === 'status' ? (
                                      <div className="space-y-6">
                                         <div className="grid grid-cols-2 gap-4">
                                            <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                                               <div className="font-bold text-slate-800 mb-2">核心能力</div>
                                               <div className="text-xs text-slate-500">智能问答、全域导览、票务打通、安防监控。</div>
                                            </div>
                                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                               <div className="font-bold text-slate-800 mb-2">体验触点</div>
                                               <div className="text-xs text-slate-500">公众号、小程序、H5、景区线下大屏。</div>
                                            </div>
                                         </div>
                                         <div className="flex items-center gap-6">
                                            <div 
                                               className="w-32 h-32 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:scale-105 transition-transform"
                                               onClick={() => setActiveQrCode(jingquQrCode)}
                                            >
                                               <img src={jingquQrCode} alt="景区二维码" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="text-sm text-slate-500 leading-relaxed">
                                               <p className="font-bold text-slate-800 mb-1">扫码即刻体验</p>
                                               <p>实时获取景区AI导览服务，支持语音问答与位置精准导向。</p>
                                            </div>
                                         </div>
                                      </div>
                                   ) : (
                                      <div className="space-y-6">
                                         <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/50">
                                            <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                                               <Sparkles size={18} className="text-emerald-500" /> 2026 数智愿景规划
                                            </h4>
                                            <ul className="space-y-3">
                                               <li className="flex items-start gap-2 text-sm text-slate-600">
                                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                                  <span><strong className="text-emerald-700">服务半径外扩：</strong> 新增“周边推荐智能体”，不再局限于景区内部，而是把触角伸向周边的地道美食、精品民宿和特色探店，让游客不看攻略也能玩透周边。</span>
                                               </li>
                                               <li className="flex items-start gap-2 text-sm text-slate-600">
                                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                                  <span><strong className="text-emerald-700">解决入口痛点：</strong> 重点接通智慧停车系统，实时同步车位动态和导航引导，从游客开车进入景区商圈的第一分钟起，就解决‘停车难’这个最大的体验瓶颈。</span>
                                               </li>
                                               <li className="flex items-start gap-2 text-sm text-slate-600">
                                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                                  <span><strong className="text-emerald-700">商业变现闭环：</strong> 落地“自营商城”模块，通过智能体的精准推荐，将景区的文创周边、特产礼品直接推送到游客手机上，实现边逛边下单的二消。</span>
                                               </li>
                                            </ul>
                                         </div>
                                      </div>
                                   )}
                                </div>
                              ) : (
                                 <div className="animate-in slide-in-from-left-4">
                                    <h3 className="text-xl font-black text-blue-600 mb-6 flex items-center gap-3"><Landmark size={24}/> 政府智能体 · 监管决策中枢</h3>
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
                               <div className="relative w-full h-[600px] flex items-center justify-center gap-6 animate-in fade-in duration-500">
                                  {activeSubTab === 'status' ? (
                                     <>
                                        <div className="h-[500px] w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative animate-in slide-in-from-right-8">
                                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                                           <img src={jingquImg1} alt="景区首页" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="h-[500px] w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-white relative animate-in slide-in-from-right-12">
                                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-10"></div>
                                           <img src={jingquImg2} alt="景区详情" className="w-full h-full object-cover" />
                                        </div>
                                     </>
                                  ) : (
                                     <div className="w-[90%] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white bg-slate-100 relative group animate-in zoom-in-95">
                                        <img 
                                           src={jingquGuihuaImg} 
                                           alt="2026规划" 
                                           className="w-full h-full object-contain bg-slate-100 transition-transform duration-1000 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                                           <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold w-fit mb-4">未来规划核心逻辑</div>
                                           <p className="text-white text-lg font-bold max-w-md mb-6 leading-relaxed">
                                              从‘景区向内导览’延伸到‘服务全方位覆盖’。在现有智能导览的基础上，我们即将上线的几个核心模块将直接打通游客的出行全链路：
                                           </p>
                                           <button 
                                              onClick={() => openExternal('https://arifinfirman788-blip.github.io/JingQu/')}
                                              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-bold w-fit flex items-center gap-2 transition-all hover:gap-4 shadow-lg shadow-emerald-500/30"
                                           >
                                              立即体验 <ChevronRight size={18} />
                                           </button>
                                        </div>
                                     </div>
                                  )}
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
                                                <img src={huangxiaoxiImg2} className="w-32 h-auto drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-500" alt="Huang Xiaoxi" />
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
                                                   <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-[400ms] transform active:scale-95 transition-all hover:scale-105">
                                                       <div className="text-left">
                                                         <div className="font-bold text-sm">扫码创建行程</div>
                                                         <div className="text-[10px] text-slate-500">扫描导游行程码直接加入团队行程</div>
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
        <MobileWrapper 
          onBack={handleBackToPortal}
          rightContent={<BusinessProcessArea />}
        >
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
                     <img src={huangxiaoxiImg2} className="w-32 h-auto drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-500" alt="Huang Xiaoxi" />
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
                        <button className="bg-white text-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 delay-[400ms] transform active:scale-95 transition-all hover:scale-105">
                            <div className="text-left">
                              <div className="font-bold text-sm">扫码创建行程</div>
                              <div className="text-[10px] text-slate-500">扫描导游行程码直接加入团队行程</div>
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

const DesignFeature = ({ icon: Icon, t, d, active, onClick, demoUrl }: any) => (
   <li 
     className={`flex gap-4 items-start group p-3 rounded-2xl transition-all cursor-pointer relative ${
       active ? 'bg-indigo-50 shadow-sm border border-indigo-100' : 'hover:bg-slate-50 border border-transparent'
     }`}
     onClick={onClick}
   >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
        active ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-500'
      }`}>
         <Icon size={20} />
      </div>
      <div className="flex-1">
         <div className="flex items-center justify-between gap-2">
            <div className={`text-sm font-bold transition-colors ${active ? 'text-indigo-900' : 'text-slate-800'}`}>{t}</div>
            {demoUrl && (
               <button 
                  onClick={(e) => {
                     e.stopPropagation();
                     window.open(demoUrl, '_blank');
                  }}
                  className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 text-[10px] font-bold transition-colors"
               >
                  <ExternalLink size={10} />
                  演示链接
               </button>
            )}
         </div>
         <div className={`text-xs leading-relaxed mt-1 transition-colors ${active ? 'text-indigo-600' : 'text-slate-400'}`}>{d}</div>
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
