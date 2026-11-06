import{j as x,a as R}from"./query-DZfwEAAw.js";import{_ as E}from"./index-B_pC-1kR.js";import{O as S,f as u}from"./CoreApp-sUkGOF67.js";const z=760,b=210,w=297;function A(t){return new Promise((e,i)=>{const o=document.createElement("iframe");Object.assign(o.style,{position:"fixed",left:"-10000px",top:"0",width:`${z}px`,height:"10px",border:"0",background:"white"}),o.setAttribute("aria-hidden","true"),o.onload=()=>{var l;const n=o.contentDocument;if(!(n!=null&&n.body)){i(new Error("iframe sem documento"));return}const r=()=>e({iframe:o,body:n.body});(l=n.fonts)!=null&&l.ready?n.fonts.ready.then(r).catch(r):setTimeout(r,120)},o.srcdoc=t,document.body.appendChild(o)})}function B(t,e){const i=t.querySelector(".wrap"),o=t.scrollHeight;if(!i){const a=[];for(let p=0;p<o;p+=e)a.push(p);return a.push(o),a}const n=Array.from(i.children),r=t.getBoundingClientRect().top,l=n.map(a=>a.getBoundingClientRect().top-r),d=[0];let c=0;for(let a=0;a<l.length;a++){const p=a+1<l.length?l[a+1]:o;if(p-c>e){const m=l[a];for(m>c+1&&(d.push(m),c=m);p-c>e;)c+=e,d.push(c)}}return d.push(o),Array.from(new Set(d.filter(a=>a>=0&&a<=o))).sort((a,p)=>a-p)}async function H(t){const{default:e}=await E(async()=>{const{default:n}=await import("./html2canvas.esm-QH1iLAAe.js");return{default:n}},[]),{iframe:i,body:o}=await A(t);try{const n=o.scrollWidth||z;i.style.height=`${o.scrollHeight}px`;const r=Math.floor(n*(w/b)),l=B(o,r),d=2,c=await e(o,{scale:d,backgroundColor:"#ffffff",width:n,windowWidth:n,height:o.scrollHeight,useCORS:!0,onclone:p=>{p.querySelectorAll('[style*="text-overflow"]').forEach(m=>{m.style.whiteSpace="normal",m.style.overflow="visible",m.style.textOverflow="clip"})}}),a=new S({unit:"mm",format:"a4"});for(let p=0;p<l.length-1;p++){const m=Math.round(l[p]*d),h=Math.round(l[p+1]*d)-m;if(h<=0)continue;const g=document.createElement("canvas");g.width=c.width,g.height=h;const v=g.getContext("2d");v.fillStyle="#ffffff",v.fillRect(0,0,g.width,g.height),v.drawImage(c,0,m,c.width,h,0,0,c.width,h);const j=h/c.width*b;p>0&&a.addPage(),a.addImage(g.toDataURL("image/jpeg",.92),"JPEG",0,0,b,Math.min(j,w))}return a.output("blob")}finally{i.remove()}}function M(t){const e=document.createElement("iframe");Object.assign(e.style,{position:"fixed",right:"0",bottom:"0",width:"0",height:"0",border:"0"}),document.body.appendChild(e);const i=e.contentWindow,o=i==null?void 0:i.document;if(!i||!o){e.remove();return}o.open(),o.write(t),o.close();const n=()=>{i.focus(),i.print(),i.onafterprint=()=>e.remove(),setTimeout(()=>{document.body.contains(e)&&e.remove()},6e4)};o.readyState==="complete"?setTimeout(n,300):e.onload=()=>setTimeout(n,300)}function L(){const t=new Date().getHours();return t<12?"Bom dia":t<18?"Boa tarde":"Boa noite"}function C({html:t,disabled:e}){const i=e||!t;return x.jsx("button",{onClick:()=>t&&M(t),disabled:i,style:{padding:"9px 16px",borderRadius:9,border:"none",background:i?"var(--t3)":"var(--navy)",color:"white",fontSize:12,fontWeight:700,cursor:i?"default":"pointer"},children:"📄 Baixar PDF"})}async function D(t,e,i,o){var c;const n=await H(t),r=new File([n],e,{type:"application/pdf"});if((c=navigator.canShare)!=null&&c.call(navigator,{files:[r]}))try{await navigator.share({files:[r],text:i,title:o});return}catch(a){if(a.name==="AbortError")return}const l=URL.createObjectURL(n),d=document.createElement("a");d.href=l,d.download=e,d.click(),URL.revokeObjectURL(l),window.open(`https://wa.me/?text=${encodeURIComponent(i)}`,"_blank")}function O({html:t,disabled:e,fileName:i,texto:o,titulo:n}){const[r,l]=R.useState(!1),d=e||!t||r,c=async()=>{l(!0);try{await D(t,i,o,n)}catch{}finally{l(!1)}};return x.jsx("button",{onClick:c,disabled:d,style:{padding:"9px 16px",borderRadius:9,border:"none",background:d?"var(--t3)":"#25D366",color:"white",fontSize:12,fontWeight:700,cursor:d?"default":"pointer"},children:r?"Gerando…":"📲 Enviar no WhatsApp"})}function W({html:t,isLoading:e,isError:i,altura:o}){const n={padding:40,textAlign:"center",fontSize:13};return e?x.jsx("div",{style:{...n,color:"var(--t4)"},children:"Carregando relatório…"}):i?x.jsx("div",{style:{...n,color:"var(--R)"},children:"⚠ Não foi possível carregar os dados."}):x.jsx("iframe",{srcDoc:t,title:"Relatório",style:{width:"100%",height:o,border:"1px solid var(--b1)",borderRadius:10,background:"white"}})}function F({html:t,isLoading:e,isError:i,cabecalho:o,fileName:n,texto:r,titulo:l,altura:d="78vh"}){return x.jsxs("div",{style:{background:"var(--bg)",borderRadius:14,border:"1px solid var(--b1)",display:"flex",flexDirection:"column"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",borderBottom:"1px solid var(--b1)",flexWrap:"wrap"},children:[x.jsx("span",{style:{flex:1,minWidth:140,fontSize:13,fontWeight:700,color:"var(--t1)"},children:o}),x.jsx(O,{html:t,disabled:e||!t,fileName:n,texto:r,titulo:l}),x.jsx(C,{html:t,disabled:e||!t})]}),x.jsx("div",{style:{padding:12},children:x.jsx(W,{html:t,isLoading:e,isError:i,altura:d})})]})}const s={navy:"#1d3461",g:"#0a8754",gl:"#e6f4ee",r:"#d32f2f",rl:"#fdeaea",a:"#d97706",al:"#fdf3e6",b:"#2563eb",bg:"#f5f6f8",t1:"#111827",t2:"#374151",t3:"#6b7280",t4:"#9ca3af",b1:"#e5e7eb"},k=["#1d3461","#0a8754","#d97706","#2563eb","#0891b2","#d32f2f","#b8860b","#7c3aed"],G=t=>Number(t??0),_=t=>Math.abs(t)>=1e3?`R$${(t/1e3).toFixed(Math.abs(t)>=1e5?0:1)}k`:u(t);function f(t){return String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function P(t){const e=t.split("-");return e.length===3?`${e[2]}/${e[1]}`:t}function y(t){return t*Math.PI/180}function I(t,e,i,o,n,r){const l=r-n>180?1:0,d=Math.cos(y(n-90)),c=Math.sin(y(n-90)),a=Math.cos(y(r-90)),p=Math.sin(y(r-90));return`M ${t+i*d} ${e+i*c} A ${i} ${i} 0 ${l} 1 ${t+i*a} ${e+i*p} L ${t+o*a} ${e+o*p} A ${o} ${o} 0 ${l} 0 ${t+o*d} ${e+o*c} Z`}function N(t,e,i=u,o="Nada lançado no período."){if(!t.length)return`<div style="font-size:13px;color:${s.t4};padding:12px 0">${f(o)}</div>`;const n=Math.max(...t.map(r=>r.value),1);return t.map(r=>`
    <div style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:4px;gap:10px">
        <span style="font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${s.t1}">${f(r.label)}${r.tag?` · <span style="color:${s.t4};font-weight:400">${f(r.tag)}</span>`:""}</span>
        <span style="font-family:monospace;font-weight:700;color:${s.t2};flex-shrink:0">${i(r.value)}</span>
      </div>
      <div style="height:11px;border-radius:5px;background:${s.bg};overflow:hidden">
        <div style="height:100%;width:${Math.max(r.value/n*100,1.5)}%;border-radius:5px;background:${r.color??e}"></div>
      </div>
    </div>`).join("")}function J(t,e,i=_,o=u){const n=t.reduce((a,p)=>a+p.value,0);if(n<=0)return`<div style="font-size:13px;color:${s.t4};padding:12px 0">Nada lançado no período.</div>`;let r=0;const l=t.map((a,p)=>{const m=a.value/n*360,$=r;return r+=m,{...a,start:$,end:r,color:k[p%k.length]}}),d=l.map(a=>`<path d="${I(100,100,90,56,a.start,a.end-.6)}" fill="${a.color}" opacity="0.92"/>`).join(""),c=l.map(a=>`
    <div style="display:flex;align-items:flex-start;gap:9px">
      <div style="width:12px;height:12px;border-radius:3px;background:${a.color};flex-shrink:0;margin-top:3px"></div>
      <span style="font-size:13px;line-height:1.4;color:${s.t1};flex:1;text-transform:capitalize">${f(a.label)}</span>
      <span style="font-size:12px;line-height:1.4;color:${s.t3};font-family:monospace;flex-shrink:0">${Math.round(a.value/n*100)}%</span>
      <span style="font-size:12px;line-height:1.4;color:${s.t2};font-weight:600;min-width:78px;text-align:right;flex-shrink:0">${o(a.value)}</span>
    </div>`).join("");return`<div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap">
    <svg viewBox="0 0 200 200" style="width:200px;height:200px;flex-shrink:0">${d}
      <text x="100" y="95" text-anchor="middle" font-size="10" fill="${s.t3}" font-family="monospace">${e}</text>
      <text x="100" y="114" text-anchor="middle" font-size="17" font-weight="700" fill="${s.t1}" font-family="serif">${i(n)}</text>
    </svg>
    <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:220px">${c}</div>
  </div>`}function K(t,e){return`<div style="background:${s.bg};border-radius:12px;padding:18px;margin-bottom:16px">
    <div style="font-family:monospace;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:${s.t4};margin-bottom:12px">${f(t)}</div>
    ${e}</div>`}function V(t,e,i,o,n){return`<div style="background:${o};border:1px solid ${i}33;border-radius:12px;padding:14px 16px">
      <div style="font-size:11px;color:${s.t3};margin-bottom:5px;text-transform:uppercase;letter-spacing:1px">${t}</div>
      <div style="font-family:serif;font-size:22px;font-weight:700;color:${i}">${u(e)}</div>
      ${n?`<div style="font-size:11px;color:${s.t4};margin-top:3px">${n}</div>`:""}
    </div>`}function X(t,e,i){return`<div style="flex:1;min-width:120px">
      <div style="font-size:10px;color:${s.t4};text-transform:uppercase;letter-spacing:1px;margin-bottom:3px">${t}</div>
      <div style="font-family:serif;font-size:16px;font-weight:700;color:${i}">${e}</div>
    </div>`}function Y(t,e){return`<div style="background:${t.bg};border:1px solid ${t.color}44;border-radius:12px;padding:16px 18px;margin-bottom:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <div style="display:flex;align-items:center;gap:10px">
      <span style="font-size:28px">${t.ic}</span>
      <div>
        <div style="font-size:10px;color:${s.t4};text-transform:uppercase;letter-spacing:1px">Estado</div>
        <div style="font-family:serif;font-size:20px;font-weight:700;color:${t.color}">${t.txt}</div>
      </div>
    </div>
    <div style="display:flex;gap:18px;flex:1;flex-wrap:wrap;justify-content:flex-end">${e}</div>
  </div>`}function Z(t,e,i,o,n){return`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13px;padding:6px 0;border-bottom:1px solid ${s.b1}">
      <span style="color:${s.t1};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t}${n??""}</span>
      <span style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        ${o?`<span style="font-family:monospace;font-size:11px;color:${s.t3}">${P(o)}</span>`:""}
        <span style="font-family:monospace;font-weight:700;color:${i};white-space:nowrap">${u(e)}</span>
      </span>
    </div>`}function Q(t,e,i){return`<div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;font-size:15px">
      <span style="font-weight:700;color:${s.navy}">${f(t)}</span>
      <span style="font-family:serif;font-weight:700;color:${i}">${u(e)}</span>
    </div>`}function tt({titulo:t,periodoLabel:e,marca:i,marcaSub:o,body:n,rodape:r,paisagem:l=!1,largura:d=760}){return`<!DOCTYPE html><html lang="pt-BR"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
<title>${f(t)} — ${f(e)}</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;background:#eceef1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${s.t1}}
  .wrap{max-width:${d}px;margin:0 auto;background:#fff;padding:24px}
  .head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;border-bottom:3px solid ${s.navy};padding-bottom:14px;margin-bottom:16px}
  .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}
  @media(max-width:520px){.wrap{padding:16px}.kpis{grid-template-columns:1fr}}
  /* Impressão → PDF: A4, fundo branco. Cards grandes (listas) FLUEM entre páginas
     pra preencher a folha; só o que é pequeno e as linhas/barras individuais é que
     não podem ser cortados no meio. Evita página quase em branco no mensal. */
  @page{size:A4${l?" landscape":""};margin:12mm}
  @media print{
    html,body{background:#fff!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .wrap{max-width:100%!important;padding:0!important}
    .head,.kpis,.kpis>div{break-inside:avoid}
    [style*="border-bottom"],[style*="margin-bottom:12px"]{break-inside:avoid}
  }
</style></head><body>
<div class="wrap">
  <div class="head">
    <div>
      <div style="font-family:serif;font-size:26px;color:${s.navy};font-weight:700">${f(t)}</div>
      <div style="font-size:14px;color:${s.t3};font-family:monospace;text-transform:capitalize">${f(e)}</div>
    </div>
    <div style="text-align:right">
      <div style="font-family:serif;font-size:22px;font-weight:700;color:${s.navy}">${f(i)}</div>
      <div style="font-size:10px;color:${s.t4};letter-spacing:1px">${f(o)}</div>
    </div>
  </div>

  ${n}

  <div style="padding-top:12px;border-top:1px solid ${s.b1};font-size:10px;color:${s.t4};text-align:center;font-family:monospace">
    ${f(r)} · ${f(e)}
  </div>
</div>
</body></html>`}export{C as B,s as H,W as R,F as a,Y as b,_ as c,K as d,f as e,P as f,N as g,O as h,J as i,V as k,Z as l,X as m,G as n,tt as p,L as s,Q as t};
