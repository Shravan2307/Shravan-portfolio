import { useState } from 'react';
import {
  Activity, ArrowDownRight, ArrowUpRight, Award, Box, Braces, Check,
  ChevronRight, Code2, Copy, Cpu, ExternalLink, GitBranch, Github,
  GraduationCap, Layers3, Linkedin, Mail, Menu, Network, Radio,
  ShieldCheck, Terminal, Trophy, X, Zap,
} from 'lucide-react';

type IconType = typeof Code2;
const nav = [
  { id: 'home', label: 'Home', icon: Layers3 },
  { id: 'projects', label: 'Projects', icon: Cpu },
  { id: 'open-source', label: 'Open Source', icon: Box },
  { id: 'skills', label: 'Skills', icon: Braces },
  { id: 'achievements', label: 'Honors', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Radio },
];

function SectionLabel({ icon: Icon, children, right }: { icon: IconType; children: React.ReactNode; right?: string }) {
  return <div className="section-label"><span><Icon size={14} />{children}</span>{right && <small>{right}</small>}</div>;
}
function Tag({ children, tone = '' }: { children: React.ReactNode; tone?: string }) {
  return <span className={`tag ${tone}`}>{children}</span>;
}
function Architecture({ variant }: { variant: 'trust' | 'rl' | 'cloud' }) {
  if (variant === 'trust') return <div className="architecture trust-architecture">
    <div className="arch-node cyan"><ShieldCheck size={16}/><b>MERCHANT</b><small>Identity signals</small></div><span className="arch-line"/><div className="arch-node"><Network size={16}/><b>INVESTIGATE</b><small>Risk evidence</small></div><span className="arch-line"/><div className="arch-node green"><Check size={16}/><b>DECISION</b><small>Review / proceed</small></div>
  </div>;
  if (variant === 'rl') return <div className="architecture rl-architecture">
    <div className="arch-node violet"><Cpu size={16}/><b>AGENT</b><small>D3QN policy</small></div><span className="arch-line"/><div className="arch-node"><Activity size={16}/><b>ENVIRONMENT</b><small>VM cluster</small></div><span className="arch-line"/><div className="arch-node green"><Zap size={16}/><b>REWARD</b><small>SLA · latency</small></div>
  </div>;
  return <div className="pipeline"><div><small>01 / PREDICT</small><b>CNN-LSTM</b><span>Workload forecast</span></div><ChevronRight/><div><small>02 / OPTIMIZE</small><b>GA · PSO</b><span>Resource search</span></div><ChevronRight/><div><small>03 / DECIDE</small><b>Autoscaling</b><span>Scale / hold</span></div></div>;
}
function ProjectCard({ index, code, title, subtitle, description, contribution, stack, variant, href, status }: {
  index: string; code: string; title: string; subtitle: string; description: string; contribution: string[]; stack: string[]; variant: 'trust'|'rl'|'cloud'; href: string; status: string;
}) {
  return <article className="project-card">
    <div className="project-topline"><span>{index} / {code}</span><Tag tone={status.includes('REVIEW') ? 'violet' : 'green'}>{status}</Tag></div>
    <div className="project-heading"><div><h3>{title}</h3><p className="project-subtitle">{subtitle}</p></div><a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title} repository`}><ArrowUpRight size={19}/></a></div>
    <p className="project-description">{description}</p>
    <Architecture variant={variant}/>
    <div className="execution"><span className="micro-label">ENGINEERING EXECUTION</span>{contribution.map((item, i) => <p key={i}><Check size={13}/>{item}</p>)}</div>
    <div className="tag-row">{stack.map(item => <Tag key={item}>{item}</Tag>)}</div>
    <a className="project-link" href={href} target="_blank" rel="noreferrer"><Code2 size={14}/> Inspect repository <ArrowUpRight size={14}/></a>
  </article>;
}
function App() {
  const [active, setActive] = useState('home');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'sp236903@gmail.com';
  const goTo = (id: string) => { setActive(id); setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const copyEmail = async () => { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };

  return <div className="app-shell">
    <div className="ambient-grid" aria-hidden="true"/>
    <header className="topbar">
      <button className="brand-mark" onClick={() => goTo('home')} aria-label="Go to home">SP</button>
      <div className="identity"><span className="live-dot"/> <b>BUILDING / LEARNING / CONTRIBUTING</b><small>CSE @ VIT CHENNAI · '29</small></div>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <button key={item.id} className={active === item.id ? 'nav-item active' : 'nav-item'} onClick={() => goTo(item.id)}>{item.label}</button>)}</nav>
      <button className="mobile-menu-button" onClick={() => setMobileMenu(v => !v)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button>
      <a className="header-contact" href="mailto:sp236903@gmail.com"><Mail size={15}/> <span>LET'S TALK</span></a>
      {mobileMenu && <div className="mobile-menu">{nav.map(item => <button key={item.id} onClick={() => goTo(item.id)}>{item.label}<ArrowUpRight size={14}/></button>)}</div>}
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> SYSTEMS / AI / OPEN SOURCE <span className="eyebrow-divider">·</span> INDIA</div>
          <h1>Building systems.<br/><em>Solving hard<br className="mobile-break"/> problems.</em></h1>
          <p className="hero-lede">I'm Shravan, a Computer Science undergraduate at VIT Chennai. I build backend systems, explore applied AI/ML, and learn by contributing to real software.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://github.com/Shravan2307" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <span className="button-detail">/Shravan2307</span><ArrowUpRight size={14}/></a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/shravanpatel1005/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={14}/></a>
          </div>
          <div className="hero-meta"><span><span className="live-dot"/> OPEN TO LEARNING & COLLABORATION</span><span>BASED IN INDIA</span></div>
        </div>
        <div className="hero-console panel">
          <div className="console-title"><div className="window-dots"><i/><i/><i/></div><span>shravan@systems-node:~</span><Tag>PROFILE.SYS</Tag></div>
          <div className="console-body">
            <p><span className="prompt">shravan@node:~$</span> whoami</p><div className="console-output">shravan_patel <span>[CSE @ VIT Chennai '29]</span></div>
            <p><span className="prompt">shravan@node:~$</span> current_focus</p><div className="console-output violet-text">["Backend Engineering", "Applied AI/ML", "Open Source"]</div>
            <p><span className="prompt">shravan@node:~$</span> philosophy</p><div className="console-output">Build it. Test it. Understand it.</div>
            <p className="console-last"><span className="prompt">shravan@node:~$</span><span className="cursor"/></p>
          </div>
          <div className="console-footer"><span><Activity size={13}/> PERSONAL SYSTEM STATUS</span><span className="status-ok">● ONLINE</span></div>
        </div>
        <div className="hero-stats">
          <div className="stat panel"><span>GSSoC GLOBAL RANK</span><b>#536</b><small>2026 · USER-REPORTED</small></div>
          <div className="stat panel"><span>MERGED PULL REQUESTS</span><b>42</b><small>ACROSS 2 REPOSITORIES</small></div>
          <div className="stat panel"><span>GSSoC STANDING</span><b className="cyan-text">TOP 2%</b><small>7,720 POINTS</small></div>
          <div className="stat panel"><span>JEE MAIN</span><b>96.41<small className="unit">%ile</small></b><small>ACADEMIC MILESTONE</small></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></div>
      </section>

      <section id="projects" className="section-wrap content-section">
        <SectionLabel icon={Cpu} right="SELECTED ENGINEERING WORK">01 / PROJECTS</SectionLabel>
        <div className="section-heading"><div><h2>Systems I've worked on.</h2><p>Projects built around real engineering problems, from payment risk to intelligent resource allocation.</p></div><span className="section-index">03 FEATURED</span></div>
        <div className="projects-grid">
          <ProjectCard index="PRJ_01" code="CHECKOUT_RISK" title="TrustOra" subtitle="AI checkout risk investigation · PayPal AI Hackathon" description="Investigates who a checkout would really pay before money is captured. It brings merchant signals together and explains risk evidence before a buyer decides how to proceed." contribution={["Built backend services and PayPal Sandbox payment orchestration.","Integrated PostgreSQL / Supabase investigation history and configured the LLM explanation layer.","Worked on evidence-state handling, audit-data protection, and API deployment fixes."]} stack={['TypeScript','React','Node.js','Express','PostgreSQL','PayPal Sandbox','LLM']} variant="trust" href="https://github.com/Shravan2307/paypal-hackathon" status="TEAM PROJECT"/>
          <ProjectCard index="PRJ_02" code="RL_TASK_SCHEDULER" title="AI Cloud Load Balancer" subtitle="D3QN-based task scheduling" description="Explores reinforcement-learning-based scheduling across heterogeneous virtual machines, balancing service-level violations, latency, overload, and resource imbalance." contribution={["Modelled VM task scheduling as a Markov Decision Process.","Implemented Dueling Double DQN with replay, epsilon-greedy exploration, and soft target updates.","Designed multi-objective rewards and compared against baseline schedulers."]} stack={['Python','PyTorch','Gymnasium','FastAPI','WebSockets','React']} variant="rl" href="https://github.com/Shravan2307/AICloudLoadBalancer" status="PR UNDER REVIEW"/>
          <ProjectCard index="PRJ_03" code="CLOUD_OPTIMIZATION" title="DPSO-GA Resource Optimizer" subtitle="Cloud resource optimization · research prototype extension" description="An end-to-end pipeline that combines workload prediction with GA, PSO, and hybrid optimization to support cloud scale-out, scale-in, and maintain decisions." contribution={["Connected workload ingestion and CNN-LSTM demand prediction.","Compared GA, PSO, and PSO-GA using a shared optimization objective.","Added FastAPI, a Streamlit dashboard, tests, and a simulation-first AWS adapter."]} stack={['Python','CNN-LSTM','GA / PSO','FastAPI','Streamlit','Docker']} variant="cloud" href="https://github.com/Shravan2307/dpsoga-cloud-load-balancer" status="RESEARCH EXTENSION"/>
        </div>
        <article className="side-project panel"><div className="side-project-icon"><GitBranch/></div><div className="side-project-copy"><div className="project-topline"><span>OSS_WORK / GRAPHQL</span><Tag>VITEST SUITE</Tag></div><h3>Data Density Heatmap</h3><p>Investigated a pagination edge case where a collection changes during an offset-based multi-page fetch, then implemented a fallback improvement with Vitest coverage.</p><small>CHANGE IS ON MY FORK · NOT YET MERGED UPSTREAM</small></div><a className="icon-link" href="https://github.com/Shravan2307/data-density-heatmap-application" target="_blank" rel="noreferrer"><ArrowUpRight/></a></article>
      </section>

      <section id="open-source" className="section-wrap content-section">
        <SectionLabel icon={GitBranch} right="PUBLIC REPOSITORY CONTRIBUTIONS">02 / OPEN SOURCE</SectionLabel>
        <div className="section-heading"><div><h2>Learning in the open.</h2><p>Working in existing codebases, understanding unfamiliar systems, and shipping reviewed changes.</p></div><Tag tone="green">GSSoC '26</Tag></div>
        <div className="oss-layout">
          <div className="oss-main panel">
            <div className="oss-head"><div><span className="micro-label">GLOBAL BENCHMARK / 2026</span><h3>GirlScript Summer of Code</h3><p>Open-source contributor</p></div><div className="trophy-mark"><Award size={27}/></div></div>
            <div className="oss-metrics"><div><small>GLOBAL RANK</small><b>#536</b></div><div><small>POINTS</small><b>7,720</b></div><div><small>MERGED PRs</small><b>42</b></div><div><small>BADGES</small><b>12</b></div></div>
            <div className="rank-track"><div/><span>TOP 2% · USER-REPORTED LEADERBOARD FIGURES</span></div>
            <div className="featured-pr"><div className="pr-meta"><span>FEATURED MERGED CONTRIBUTION</span><Tag tone="green">MERGED</Tag></div><div className="pr-title-row"><div className="pr-number">PR<br/><b>#7232</b></div><div><h4>Particle Physics + Web Audio Synth Pipeline</h4><p>100 Days 100 Web Projects</p></div></div><p>Implemented a high-frequency particle physics loop connected to a Web Audio synthesizer pipeline.</p><a href="https://github.com/dhairyagothi/100_days_100_web_project/pull/7232" target="_blank" rel="noreferrer" className="text-link">Inspect merged pull request <ArrowUpRight size={14}/></a></div>
          </div>
          <div className="oss-aside">
            <div className="panel mini-panel"><span className="micro-label">COHORT REACH</span><b>43,000+</b><small>PARTICIPANTS · PROGRAM FIGURE</small></div>
            <div className="panel mini-panel"><span className="micro-label">REPOSITORIES</span><b>02</b><small>CONTRIBUTION REPOSITORIES</small></div>
            <div className="manifesto panel"><Code2 size={17}/><span className="micro-label">ENGINEERING MANIFESTO</span><blockquote>“Understand the codebase. Make the change useful. Prove it with tests.”</blockquote><small>SHRAVAN PATEL / WORKING PRINCIPLE</small></div>
            <a className="button button-secondary full-button" href="https://github.com/Shravan2307" target="_blank" rel="noreferrer"><Github size={16}/> Explore GitHub profile <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap content-section">
        <SectionLabel icon={Braces} right="TOOLS I HAVE WORKED WITH">03 / TECHNICAL SKILLS</SectionLabel>
        <div className="section-heading"><div><h2>A practical engineering toolkit.</h2><p>Grouped by where I have applied these tools. No arbitrary skill percentages.</p></div><span className="section-index">STACK / 01</span></div>
        <div className="skills-grid">
          <SkillGroup icon={Code2} title="LANGUAGES" detail="CORE" items={['Python','TypeScript','JavaScript','SQL','C','HTML','CSS']}/>
          <SkillGroup icon={Terminal} title="BACKEND & APIs" detail="SERVICES" items={['FastAPI','Node.js','Express','REST APIs','WebSockets']}/>
          <SkillGroup icon={Cpu} title="AI / ML" detail="MODELS & OPTIMIZATION" items={['PyTorch','Gymnasium','D3QN','CNN-LSTM','Reinforcement Learning','Genetic Algorithms','PSO']}/>
          <SkillGroup icon={Network} title="DATA & CLOUD" detail="INFRASTRUCTURE" items={['PostgreSQL','Supabase','Docker','AWS ECS','S3','CloudWatch','Terraform']}/>
          <SkillGroup icon={Layers3} title="FRONTEND" detail="INTERFACES" items={['React','Streamlit','Recharts','Responsive CSS']}/>
          <SkillGroup icon={ShieldCheck} title="ENGINEERING TOOLS" detail="QUALITY & COLLABORATION" items={['Git','GitHub','pytest','Vitest','Postman']}/>
        </div>
      </section>

      <section id="achievements" className="section-wrap content-section">
        <SectionLabel icon={Trophy} right="MILESTONES & RECOGNITION">04 / HONORS</SectionLabel>
        <div className="section-heading"><div><h2>Milestones so far.</h2><p>A few markers from academics, competitions, and building with other people.</p></div></div>
        <div className="honors-grid">
          <Honor icon={Trophy} label="HACKATHON" title="HackVerse" result="FINALIST" detail="Finalist recognition." tone="violet"/>
          <Honor icon={Zap} label="TECH CHALLENGE" title="Datastripe" result="ROUND 2" detail="Selected for the second round." tone="green"/>
          <Honor icon={ShieldCheck} label="PAYMENTS & AI" title="PayPal AI Hackathon" result="BUILDER" detail="Built TrustOra as part of a team." tone="cyan"/>
          <Honor icon={GraduationCap} label="ACADEMICS" title="JEE Main" result="96.41 %ILE" detail="Academic entrance examination." tone="cyan"/>
          <Honor icon={Award} label="OLYMPIAD" title="Physics Olympiad" result="TOP 10%" detail="Centre-level performance." tone="violet"/>
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <SectionLabel icon={Activity} right="A LITTLE CONTEXT">05 / APPROACH</SectionLabel>
        <div className="about-panel panel"><div><span className="micro-label">HOW I LIKE TO WORK</span><h2>Curiosity first.<br/><em>Implementation always.</em></h2></div><div className="about-copy"><p>I enjoy understanding how systems behave under the hood: where requests travel, how state is coordinated, why models make particular decisions, and what happens when things fail.</p><p>I learn best by building, testing, reading existing code, and working through problems that don't have an obvious answer on the first try.</p><div className="about-foot"><span><span className="live-dot"/> CURRENTLY LEARNING & BUILDING</span><span>VIT CHENNAI · CSE '29</span></div></div></div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <SectionLabel icon={Radio} right="COLLABORATION CHANNEL OPEN">06 / CONTACT</SectionLabel>
        <div className="contact-content"><div><span className="eyebrow"><span className="eyebrow-dot"/> DIRECT CONNECTION</span><h2>Have an interesting problem?<br/><em>Let's build something.</em></h2><p>I'm always glad to connect with engineers, open-source maintainers, and teams working on challenging software problems.</p></div><div className="contact-card panel"><span className="micro-label">PRIMARY INBOX</span><div className="email-line"><Mail size={19}/><b>{email}</b></div><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? 'COPIED' : 'COPY EMAIL'}</button><a className="button button-secondary" href={`mailto:${email}`}>SEND EMAIL <ArrowUpRight size={14}/></a></div><div className="contact-socials"><a href="https://github.com/Shravan2307" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/shravanpatel1005/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a></div></div></div>
        <footer className="footer"><span>SHRAVAN PATEL © 2026</span><span>BUILT WITH CURIOSITY <span className="cyan-text">&</span> CODE</span><a href="#home" onClick={() => setActive('home')}>BACK TO TOP ↑</a></footer>
      </section>
    </main>
    <nav className="mobile-dock" aria-label="Mobile navigation">{nav.map(item => { const Icon = item.icon; return <button key={item.id} className={active === item.id ? 'dock-item active' : 'dock-item'} onClick={() => goTo(item.id)}><Icon size={17}/><span>{item.label === 'Open Source' ? 'OSS' : item.label === 'Achievements' ? 'Honors' : item.label === 'Contact' ? 'Ping' : item.label}</span></button>; })}</nav>
  </div>;
}
function SkillGroup({ icon: Icon, title, detail, items }: { icon: IconType; title: string; detail: string; items: string[] }) {
  return <article className="skill-group panel"><div className="skill-heading"><span><Icon size={16}/>{title}</span><small>{detail}</small></div><div className="skill-tags">{items.map(item => <Tag key={item}>{item}</Tag>)}</div></article>;
}
function Honor({ icon: Icon, label, title, result, detail, tone }: { icon: IconType; label: string; title: string; result: string; detail: string; tone: string }) {
  return <article className="honor-card panel"><div className={`honor-icon ${tone}`}><Icon size={19}/></div><div className="honor-body"><span className="micro-label">{label}</span><h3>{title}</h3><p>{detail}</p></div><Tag tone={tone}>{result}</Tag></article>;
}

export default App;
