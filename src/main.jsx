import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BarChart3, Building2, Dumbbell, HeartHandshake,
  Bot, Code2, Check, Sparkles
} from "lucide-react";
import "./styles.css";

const chapters = [
  {
    year:"2013–2018", num:"01", icon:BarChart3,
    kicker:"I LEARNED TO ANALYZE",
    title:"I started by learning how businesses work.",
    body:"At PwC and Independent Petroleum Company, I learned to break down complex systems, work with large financial and operational datasets, coordinate across stakeholders, and turn complexity into decisions people could act on.",
    facts:["Led a 5-person audit workstream","Analyzed businesses across FMCG and Oil & Gas","Worked across reporting for 14 companies"],
    lesson:"Analysis taught me how to understand a system. I eventually wanted to build one."
  },
  {
    year:"2020–2023", num:"02", icon:Dumbbell,
    kicker:"I WANTED TO OWN THE OUTCOME",
    title:"So I built a business from zero.",
    body:"Vplanke was the first time I owned the whole experience. I shaped the service, built the website, designed the customer journey, managed operations, and learned what happens when your decisions meet real customers.",
    facts:["0 → 500+ clients","Built and led a 10+ coach team","Designed and built Vplanke.com in 2020"],
    lesson:"I liked making decisions much more than reporting on them."
  },
  {
    year:"2023–2025", num:"03", icon:HeartHandshake,
    kicker:"I DISCOVERED PRODUCT DECISIONS",
    title:"What should we offer, to whom, and why?",
    body:"Working pro bono with Dobry Yug pushed me toward product and market questions: assortment, product-market fit, pricing, positioning, promotion, website, and market entry.",
    facts:["Product assortment","Product-market fit & pricing","Positioning, promotion & GTM"],
    lesson:"The interesting part wasn't simply executing. It was deciding what deserved to be built and brought to market."
  },
  {
    year:"2025–NOW", num:"04", icon:Bot,
    kicker:"I MOVED CLOSER TO THE BUILD",
    title:"Then I started making things that move.",
    body:"At Circuit Launch's Mechlabs program, I began building a robotics prototype that connects computer vision with physical motion — using Python, OpenCV, dual-camera depth estimation, microcontrollers, and servos.",
    facts:["Python + OpenCV","Arduino / RP2040","0→1 prototype + MVP iteration"],
    lesson:"Understanding the technology changed the kinds of product questions I could ask."
  },
  {
    year:"2026–NOW", num:"05", icon:Code2,
    kicker:"I STARTED BUILDING SOFTWARE",
    title:"Ideas became interfaces.",
    body:"I added React and JavaScript to my toolkit and started turning product ideas into working web experiences. I use Codex, Claude, and Cursor across prototyping, coding, debugging, and iteration.",
    facts:["React + JavaScript","Codex + Claude + Cursor","GitHub + Vercel"],
    lesson:"I don't need to stop at describing an idea. I can prototype it, test it, and change it."
  }
];

function Chapter({c,i}){
  const Icon=c.icon;
  return <section className={"chapter c"+i}>
    <div className="rail"><span>{c.num}</span><div className="line"/></div>
    <div className="chapterBody">
      <div className="meta"><span>{c.year}</span><span>{c.kicker}</span></div>
      <div className="chapterGrid">
        <div>
          <div className="iconBox"><Icon/></div>
          <h2>{c.title}</h2>
          <p className="body">{c.body}</p>
        </div>
        <div className="evidence">
          <div className="evidenceLabel">WHAT I CARRIED FORWARD</div>
          {c.facts.map((f,x)=><div className="fact" key={x}><Check size={15}/><span>{f}</span></div>)}
          <blockquote>{c.lesson}</blockquote>
        </div>
      </div>
    </div>
  </section>
}

function App(){
 const [open,setOpen]=useState(false);
 return <main>
   <div className="ambient" aria-hidden="true">
     <i className="orb orb1"/><i className="orb orb2"/><i className="orb orb3"/>
     <span className="floatWord fw1">BUILD</span><span className="floatWord fw2">0→1</span>
     <span className="floatWord fw3">WHY?</span>
   </div>
   <nav>
     <a className="name" href="#">ALESYA PYRKOVA</a>
     <div><a href="#journey">Journey</a><a href="#product">Why product</a></div>
   </nav>

   <header className="hero">
     <div className="tiny">AN UNCONVENTIONAL PATH TO PRODUCT · 2013 → NOW</div>
     <h1 className="heroTitle"><span className="jitter">I didn't start</span><br/><span>in product.</span></h1>
     <div className="heroBottom">
       <p>I found my way there by <em>building things.</em></p>
       <a href="#journey">Follow the journey <ArrowDown size={17}/></a>
     </div>
     <div className="path">
       <span>ANALYZE</span><i>→</i><span>OWN</span><i>→</i><span>DECIDE</span><i>→</i><span>BUILD</span>
     </div>
   </header>

   <div id="journey">
     {chapters.map((c,i)=><Chapter c={c} i={i} key={c.num}/>)}
   </div>

   <section id="product" className="convergence">
     <div className="tiny light">06 · THE THREAD</div>
     <h2>Then the pieces<br/>started to connect.</h2>
     <div className="equation">
       <div><span>FINANCE</span><b>Analytical thinking</b></div><i>+</i>
       <div><span>FOUNDER</span><b>0→1 ownership</b></div><i>+</i>
       <div><span>DOBRY YUG</span><b>Market judgment</b></div><i>+</i>
       <div><span>BUILDING</span><b>Technical curiosity</b></div>
     </div>
     <div className="equals">↓</div>
     <div className="productWord"><span className="pulseLetter">P</span>RODUCT</div>
     <p className="productStatement">Product didn't feel like starting over. It felt like finding the role that connected what I had been doing all along.</p>
   </section>

   <section className="proof">
     <div className="proofCopy">
       <div className="tiny">07 · WHAT I’M BUILDING NOW</div>
       <h2>Don't just take<br/>my word for it.</h2>
       <p>I wanted to show how I approach an ambiguous product problem — from hypothesis and prioritization to prototype, responsible AI choices, metrics, and experiments.</p>
       <a className="primary" href="https://from-chat-to-plan.vercel.app/" target="_blank">
         Explore From Chat to Plan <ArrowUpRight size={17}/>
       </a>
       <button className="secondary" onClick={()=>setOpen(!open)}>
         {open ? "Hide what it demonstrates" : "What this project demonstrates"} <Sparkles size={15}/>
       </button>
       {open && <div className="skills">
         <span>Problem framing</span><span>Prioritization</span><span>MVP thinking</span>
         <span>Responsible AI</span><span>Success metrics</span><span>Experiment design</span>
       </div>}
     </div>
     <div className="miniProduct">
       <div className="miniTop">FROM CHAT TO PLAN</div>
       <div className="bubble">Dinner Friday?</div>
       <div className="bubble right">Saturday after 7?</div>
       <div className="bubble">San Mateo?</div>
       <div className="plan">
         <small>PLAN</small><b>Dinner together</b><span>Saturday · 7:00 PM</span><span>San Mateo</span>
       </div>
     </div>
   </section>

   <section className="close">
     <div className="tiny">ALESYA PYRKOVA · BAY AREA</div>
     <h2>Still learning.<br/>Already building.</h2>
     <p>My path isn't linear. That's the point.</p>
     <div className="links">
       <a href="https://github.com/lesyalesy" target="_blank">GitHub <ArrowUpRight/></a>
       <a href="https://www.linkedin.com/in/alesyapyrkova/" target="_blank">LinkedIn <ArrowUpRight/></a>
       <a href="mailto:alesya.pyrkova@gmail.com">Email <ArrowUpRight/></a>
     </div>
     <footer>Designed & built by Alesya Pyrkova · 2026</footer>
   </section>
 </main>
}
createRoot(document.getElementById("root")).render(<App/>);
