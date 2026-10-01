import {useState,useEffect} from 'react'
import {motion,AnimatePresence,useReducedMotion} from 'framer-motion'
import {Menu,X,BarChart3,Sigma,Filter,Database,ShieldCheck,Network,Cloud,GitBranch,Mail,Phone,ChevronDown,FileText,Download,GraduationCap,ArrowDown} from 'lucide-react'
import D from './data/portfolioData'
const ICONS={bi:BarChart3,sigma:Sigma,filter:Filter,db:Database,shield:ShieldCheck,net:Network,cloud:Cloud,git:GitBranch}
const ext={target:'_blank',rel:'noopener noreferrer'}
const LI=p=><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" {...p}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const btn='inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition'
const Primary=p=><a {...p} className={`${btn} grad text-white hover:brightness-110`}/>
const Ghost=p=><a {...p} className={`${btn} border border-line text-white hover:border-violet/60`}/>

function Reveal({children,x=0,y=24}){const r=useReducedMotion()
  return <motion.div initial={r?false:{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.6,ease:[.22,1,.36,1]}}>{children}</motion.div>}
const H=({id,children})=><h2 id={id} className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-8 md:mb-12 flex items-center gap-4"><span className="grad h-8 w-1 rounded-full"/>{children}</h2>
const Sec=({id,title,children})=><section id={id} aria-labelledby={id+'-h'} className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-28"><H id={id+'-h'}>{title}</H>{children}</section>
const Badge=({children})=><span className="rounded-md border border-line bg-white/[.03] px-2.5 py-1 text-xs text-mute">{children}</span>

function useActive(ids){const [a,setA]=useState(ids[0])
  useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setA(e.target.id)),{rootMargin:'-45% 0px -50% 0px'})
    ids.forEach(i=>{const el=document.getElementById(i);el&&o.observe(el)});return()=>o.disconnect()},[]);return a}

function Navbar(){const [sc,setSc]=useState(false),[open,setOpen]=useState(false),act=useActive(D.nav.map(n=>n[0]))
  useEffect(()=>{const f=()=>setSc(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
  return <header className={`fixed inset-x-0 top-0 z-40 transition ${sc?'bg-ink/85 backdrop-blur-md border-b border-line':'border-b border-transparent'}`}>
    <nav aria-label="Primary" className={`mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 transition-all ${sc?'h-14':'h-20'}`}>
      <a href="#home" aria-label="Mathan M, home" className="font-display text-lg font-semibold tracking-tight">MM</a>
      <ul className="hidden lg:flex gap-7 text-sm">{D.nav.map(([id,l])=><li key={id}><a href={'#'+id} aria-current={act===id?'true':undefined} className={`pb-1 border-b-2 transition ${act===id?'border-violet text-white':'border-transparent text-mute hover:text-white'}`}>{l}</a></li>)}</ul>
      <button className="lg:hidden p-2" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(true)}><Menu/></button>
    </nav>
    <AnimatePresence>{open&&<motion.div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 bg-ink flex flex-col p-6" initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.25}}>
      <button className="self-end p-3" aria-label="Close menu" onClick={()=>setOpen(false)}><X size={28}/></button>
      <ul className="mt-6 flex flex-col gap-2">{D.nav.map(([id,l])=><li key={id}><a href={'#'+id} onClick={()=>setOpen(false)} className="block py-4 font-display text-3xl">{l}</a></li>)}</ul></motion.div>}</AnimatePresence>
  </header>}

function Hero(){const rm=useReducedMotion(),a=D.avatar
  const [skipped,setSkipped]=useState(!!rm),[done,setDone]=useState(!!rm),[imgOk,setImgOk]=useState(true),[vidOk,setVidOk]=useState(true),[sc,setSc]=useState(false),[wide,setWide]=useState(false)
  useEffect(()=>{const m=matchMedia('(min-width:1024px)'),f=()=>setWide(m.matches),s=()=>setSc(scrollY>40);f();m.addEventListener('change',f);addEventListener('scroll',s,{passive:true})
    return()=>{m.removeEventListener('change',f);removeEventListener('scroll',s)}},[])
  const t=(i)=>({initial:skipped?false:{opacity:0,y:14,filter:'blur(8px)'},animate:{opacity:1,y:0,filter:'blur(0px)'},transition:{duration:skipped?0:.8,delay:skipped?0:1+i*.45}})
  const video=wide&&a.video&&vidOk&&!rm&&!navigator.connection?.saveData
  useEffect(()=>{if(done||video)return;const t=setTimeout(()=>setDone(true),4800);return()=>clearTimeout(t)},[done,video])
  return <section id="home" className="relative min-h-[100svh] overflow-hidden" style={{background:'radial-gradient(60% 55% at 78% 40%,rgba(79,124,255,.16),transparent),radial-gradient(40% 40% at 92% 75%,rgba(139,92,246,.14),transparent),#07080c'}}>
    <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-6 px-5 pt-24 md:px-8 lg:grid-cols-[45fr_55fr]">
      <div key={'t'+skipped} className="order-2 lg:order-1 pb-24 lg:pb-0">
        <motion.h1 {...t(0)} className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight">{D.name}</motion.h1>
        <motion.p {...t(1)} className="mt-5 text-xl md:text-2xl text-white/90">{D.tagline}</motion.p>
        <motion.p {...t(2)} className="mt-2 text-mute">{D.title}</motion.p>
        <motion.div {...t(3)} className="mt-9 flex flex-wrap gap-3"><Primary href="#projects">View My Work</Primary><Ghost href="#resume">View Resume</Ghost></motion.div>
      </div>
      <div className="order-1 lg:order-2 relative flex h-[46svh] lg:h-[82svh] items-end justify-center">
        <motion.div key={'a'+skipped} className="h-full w-full" initial={skipped||video?false:{opacity:0,scale:1.16,filter:'blur(10px)'}} animate={{opacity:1,scale:1,filter:'blur(0px)'}} transition={{duration:skipped?0:4.5,ease:[.16,1,.3,1]}}>
          {video?<video className="h-full w-full object-cover object-center [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]" src={a.video} poster={a.poster||undefined} autoPlay={!skipped} muted playsInline preload="auto" onEnded={()=>setDone(true)} onLoadedMetadata={skipped?e=>{e.currentTarget.currentTime=e.currentTarget.duration}:undefined} onError={()=>setVidOk(false)} aria-label={a.alt}/>
          :imgOk?<picture>{a.desktop.avif&&<source media="(min-width:1024px)" srcSet={a.desktop.avif} type="image/avif"/>}<source media="(min-width:1024px)" srcSet={a.desktop.webp} type="image/webp"/>{a.mobile.avif&&<source srcSet={a.mobile.avif} type="image/avif"/>}<source srcSet={a.mobile.webp} type="image/webp"/>
            <img src={a.mobile.fallback} alt={a.alt} fetchpriority="high" decoding="async" onError={()=>setImgOk(false)} className="h-full w-full object-contain object-bottom"/></picture>
          :<div aria-hidden="true" className="grid h-3/4 w-3/4 place-items-center self-center rounded-3xl border border-line bg-panel font-display text-8xl text-white/20">MM</div>}
        </motion.div>
      </div>
    </div>
    {!skipped&&!done&&<button onClick={()=>setSkipped(true)} className="absolute bottom-6 right-5 md:right-8 rounded-full border border-white/30 bg-ink/70 px-4 py-2 text-sm backdrop-blur hover:border-white">Skip Intro</button>}
    {!sc&&<a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mute flex flex-col items-center gap-1 text-xs">
      <span className="hidden lg:block">Scroll to explore</span><motion.span animate={rm?{}:{y:[0,6,0]}} transition={{repeat:Infinity,duration:1.8}}><ArrowDown size={18}/></motion.span></a>}
  </section>}

const About=()=>{const e=D.education;return <Sec id="about" title="About"><Reveal x={-30} y={0}><div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
  <p className="max-w-xl text-xl md:text-2xl leading-relaxed text-white/90">{D.about}</p>
  <div className="rounded-2xl border border-line bg-panel p-6 self-start"><GraduationCap className="text-violet mb-4"/><h3 className="font-semibold">{e.degree}</h3><p className="text-mute mt-1">{e.school}</p><p className="text-mute text-sm mt-1">{[e.place,e.year].filter(Boolean).join(', ')}</p></div></div></Reveal></Sec>}

const Skills=()=><Sec id="skills" title="Technical Skills"><Reveal><ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{D.primarySkills.map(s=>{const I=ICONS[s.icon]||BarChart3
  return <li key={s.name} className="rounded-2xl border border-line bg-panel p-6"><I className="text-blue mb-5" size={26}/><h3 className="font-semibold">{s.name}</h3>{s.desc&&<p className="mt-1.5 text-sm text-mute">{s.desc}</p>}</li>})}</ul>
  <h3 className="mt-12 mb-4 text-sm text-mute">Also worked with</h3><ul className="flex flex-wrap gap-2">{D.secondarySkills.map(s=><li key={s}><Badge>{s}</Badge></li>)}</ul></Reveal></Sec>

function Exp({x}){const [o,setO]=useState(false),has=x.responsibilities.length||x.technologies.length
  return <li className="relative pl-8 pb-10 last:pb-0"><span className="absolute left-0 top-2 h-3 w-3 rounded-full grad"/><div className="rounded-2xl border border-line bg-panel p-5">
    <button className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={o} disabled={!has} onClick={()=>setO(!o)}>
      <span><span className="block text-lg font-semibold">{x.role}</span>{x.company&&<span className="block text-mute">{x.company}</span>}<span className="block text-sm text-mute mt-1">{x.dates}</span></span>
      {has?<ChevronDown className={`shrink-0 transition ${o?'rotate-180':''}`}/>:null}</button>
    <AnimatePresence initial={false}>{o&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden">
      <div className="pt-4">{x.responsibilities.length>0&&<ul className="list-disc pl-5 space-y-1.5 text-white/85">{x.responsibilities.map(r=><li key={r}>{r}</li>)}</ul>}
      {x.technologies.length>0&&<div className="mt-4 flex flex-wrap gap-2">{x.technologies.map(t=><Badge key={t}>{t}</Badge>)}</div>}</div></motion.div>}</AnimatePresence></div></li>}
const Experience=()=><Sec id="experience" title="Experience"><Reveal x={30} y={0}><ol className="relative border-l border-line ml-1.5">{D.experience.map(x=><Exp key={x.role} x={x}/>)}</ol></Reveal></Sec>

const Project=({p})=><li className="group rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/50 hover:shadow-xl hover:shadow-black/40">
  <h3 className="font-semibold text-lg">{p.name}</h3>
  {p.context&&<p className="mt-3 text-sm text-mute">{p.context}</p>}
  {p.contribution&&<p className="mt-3 text-sm text-white/85">{p.contribution}</p>}
  {p.impact&&<p className="mt-3 text-sm text-blue">{p.impact}</p>}
  {p.technologies.length>0&&<div className="mt-4 flex flex-wrap gap-1.5">{p.technologies.map(t=><Badge key={t}>{t}</Badge>)}</div>}</li>
function Projects(){const [all,setAll]=useState(false),list=all?D.projects:D.projects.slice(0,D.initialProjects)
  return <Sec id="projects" title="Key Projects"><Reveal><ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{list.map(p=><Project key={p.name} p={p}/>)}</ul>
    {!all&&D.projects.length>D.initialProjects&&<div className="mt-8"><button onClick={()=>setAll(true)} className={`${btn} border border-line hover:border-violet/60`}>View More</button></div>}
    <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8"><p className="font-display text-2xl">Let's Connect</p><div className="flex gap-3"><Ghost href="#resume">Resume</Ghost><Primary href="#contact">Contact</Primary></div></div></Reveal></Sec>}

const Resume=()=><Sec id="resume" title="Resume"><Reveal><div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-line bg-panel p-6 max-w-2xl"><div className="flex items-center gap-4"><FileText className="text-violet"/><div><p className="font-semibold">{D.name} — Resume</p><p className="text-sm text-mute">PDF</p></div></div>
  <div className="flex gap-3"><Ghost href={D.resume.path} {...ext}>View Resume</Ghost><Primary href={D.resume.path} download><Download size={16}/>Download Resume</Primary></div></div></Reveal></Sec>

function Field({id,label,err,area}){const C=area?'textarea':'input'
  return <div><label htmlFor={id} className="mb-1.5 block text-sm">{label}</label><C id={id} name={id} type={id==='email'?'email':undefined} rows={area?5:undefined} aria-invalid={!!err} aria-describedby={err?id+'-e':undefined} className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-white"/>{err&&<p id={id+'-e'} className="mt-1 text-sm text-red-400">{err}</p>}</div>}
function ContactForm(){const [s,setS]=useState('idle'),[er,setEr]=useState({})
  async function submit(e){e.preventDefault();const f=e.target,v=Object.fromEntries(new FormData(f)),x={}
    if(!v.name.trim())x.name='Enter your name.';if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='Enter a valid email address.';if(v.message.trim().length<10)x.message='Write at least 10 characters.'
    setEr(x);if(Object.keys(x).length)return;setS('loading')
    try{if(D.formEndpoint.includes('YOUR_FORM_ID'))throw 0;const r=await fetch(D.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(v)});if(!r.ok)throw 0;setS('ok');f.reset()}catch{setS('error')}}
  return <form onSubmit={submit} noValidate className="space-y-4"><Field id="name" label="Name" err={er.name}/><Field id="email" label="Email" err={er.email}/><Field id="message" label="Message" err={er.message} area/>
    <button disabled={s==='loading'} className={`${btn} grad text-white disabled:opacity-60`}>{s==='loading'?'Sending…':'Send message'}</button>
    <p role="status" className="text-sm">{s==='ok'&&'Message sent. Thank you — I will reply soon.'}{s==='error'&&<span className="text-red-400">Message not sent. Email me directly at {D.email}.</span>}</p></form>}
const Contact=()=><Sec id="contact" title="Contact"><Reveal><div className="grid gap-12 md:grid-cols-2"><ContactForm/>
  <ul className="space-y-5 self-start"><li><a className="flex items-center gap-3 hover:text-white text-white/85" href={`mailto:${D.email}`}><Mail className="text-blue"/>{D.email}</a></li>
  <li><a className="flex items-center gap-3 text-white/85" href={`tel:${D.phoneHref}`}><Phone className="text-blue"/>{D.phone}</a></li>
  <li><a className="flex items-center gap-3 text-white/85" href={D.linkedin} {...ext}><LI className="text-blue" width={24} height={24}/>LinkedIn</a></li></ul></div></Reveal></Sec>

const Footer=()=><footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-6 px-5 py-10 md:px-8">
  <div><p className="font-display text-xl">{D.name}</p><p className="text-sm text-mute">{D.title}</p></div>
  <ul className="flex gap-6 text-sm text-mute"><li><a className="flex items-center gap-2 hover:text-white" href={D.linkedin} {...ext}><LI width={18} height={18}/>LinkedIn</a></li><li><a className="flex items-center gap-2 hover:text-white" href={`mailto:${D.email}`}><Mail size={18}/>Email</a></li><li><a className="flex items-center gap-2 hover:text-white" href={`tel:${D.phoneHref}`}><Phone size={18}/>Phone</a></li></ul>
  <p className="w-full text-sm text-mute">© 2026 Mathan M</p></div></footer>

const NotFound=()=><main className="grid min-h-screen place-items-center px-6 text-center"><div><h1 className="font-display text-4xl">Page Not Found</h1><div className="mt-6"><Primary href={import.meta.env.BASE_URL}>Back to Home</Primary></div></div></main>

export default function App(){const [ready,setReady]=useState(false)
  useEffect(()=>{const t=setTimeout(()=>setReady(true),600);D.analytics();return()=>clearTimeout(t)},[])
  const p=location.pathname.replace(import.meta.env.BASE_URL.replace(/\/$/,''),'').replace(/\/(index\.html)?$/,'')
  if(p!=='')return <NotFound/>
  return <>{!ready&&<div className="fixed inset-0 z-[60] grid place-items-center bg-ink font-display text-4xl" role="status" aria-label="Loading">MM</div>}
    <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
    <Navbar/><main><Hero/><About/><Skills/><Experience/><Projects/><Resume/><Contact/></main><Footer/></>}
