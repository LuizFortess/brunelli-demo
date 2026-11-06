import{j as f,u as R,a as pa}from"./query-DZfwEAAw.js";import{c as da,d as q}from"./index-DpXcGa99.js";import{f as d}from"./CoreApp-DzOyPLmZ.js";import{a as K,h as ca,B as ma,R as fa,n,f as w,b as ga,m as S,H as t,k,c as N,d as $,e as g,g as C,i as $a,p as O,s as U}from"./relatorioHtml-DTCLTfUT.js";import{y as Q}from"./periodoRange-CO97jbQp.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=da("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);function Y(a,o,e){return R({queryKey:["relatorio-grafico",a,o],enabled:e,staleTime:6e4,queryFn:async()=>{const{data:s,error:i}=await q("get_relatorio_grafico",{p_data_ini:a,p_data_fim:o});if(i)throw i;return s}})}function G(a,o){return R({queryKey:["relatorio-saldo-na-data",a],enabled:o,staleTime:6e4,queryFn:async()=>{const{data:e,error:s}=await q("get_saldo_contas_na_data",{p_data:a});if(s)throw s;return e??[]}})}const J=a=>Q(new Date(new Date(a+"T12:00:00").getTime()-864e5)),W="brunelli-relatorio-comparar-saldo";function X(){const[a,o]=pa.useState(()=>{try{return localStorage.getItem(W)==="1"}catch{return!1}});return[a,()=>o(s=>{try{localStorage.setItem(W,s?"0":"1")}catch{}return!s})]}function Z({ativo:a,onClick:o}){return f.jsxs("button",{type:"button",onClick:o,"aria-pressed":a,title:a?"Tirar a comparação de saldos do relatório":"Mostrar no saldo bancário a comparação com o período anterior",style:{padding:"7px 12px",borderRadius:9,fontSize:12,fontWeight:700,cursor:"pointer",border:`1.5px solid ${a?"var(--navy)":"var(--b1)"}`,background:a?"var(--navy)":"white",color:a?"white":"var(--t2)",display:"inline-flex",alignItems:"center",gap:6},children:[f.jsx(xa,{size:14})," ",a?"Comparação ligada":"Comparar com período anterior"]})}function aa(a,o,e){const s=G(o,o<Q(new Date)),i=G(J(a),e);return{isLoading:s.isLoading||i.isLoading,saldos:{fimPeriodo:s.data,anterior:i.data}}}const V=(a,o=12)=>`<span style="font-family:monospace;font-size:${o}px;font-weight:700;color:${a>0?t.g:a<0?t.r:t.t3};white-space:nowrap">${a>0?"▲ +":a<0?"▼ −":""}${d(Math.abs(a))}</span>`;function ya(a,o,e=[],s){if(!a.length)return`<div style="font-size:13px;color:${t.t4};padding:12px 0">Sem contas.</div>`;const i=a.reduce((l,p)=>l+n(p.value),0),m=a.map(l=>{const p=s==null?void 0:s.get(l.label);return`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${t.b1};font-size:14px">
      <span style="color:${t.t1}">${g(l.label)}</span>
      <span style="display:flex;align-items:center;gap:8px">
        ${p!==void 0?V(n(l.value)-p,11):""}
        <span style="font-family:monospace;font-weight:700;color:${n(l.value)<0?t.r:t.t1}">${d(n(l.value))}</span>
      </span>
    </div>`}).join(""),c=e.map((l,p)=>`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding-top:9px;${p===0?`margin-top:9px;border-top:1px dashed ${t.b1};`:""}font-size:13px">
      <span style="color:${t.t2}">${g(l.label)}</span>
      <span style="display:flex;align-items:center;gap:8px;white-space:nowrap">
        <span style="font-family:monospace;font-weight:700;color:${l.valor<0?t.r:t.t1}">${d(l.valor)}</span>
        ${V(l.dif)}
      </span>
    </div>`).join("");return`${m}
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;margin-top:2px;font-size:15px">
      <span style="font-weight:700;color:${t.navy}">${g(o)}</span>
      <span style="font-family:serif;font-weight:700;color:${i<0?t.r:t.navy}">${d(i)}</span>
    </div>${c}`}function ua(a){return a.map(o=>`
    <div style="display:flex;justify-content:space-between;gap:10px;font-size:13px;padding:7px 0;border-bottom:1px solid ${t.b1}">
      <span style="color:${t.t2}"><b style="color:${o.acao==="Resgate"?t.g:t.a}">${g(o.acao)}</b> · ${g(o.de)} → ${g(o.para)}</span>
      <span style="font-family:monospace;font-weight:700;color:${t.t1};white-space:nowrap">${d(n(o.valor))}</span>
    </div>`).join("")}function ha(a){const o=e=>e==="vencimento"?"📅":e==="reuniao"?"👥":e==="reajuste"?"📈":e==="lembrete"?"🔔":"🗓️";return a.map(e=>`
    <div style="display:flex;align-items:center;gap:10px;font-size:14px;padding:8px 0;border-bottom:1px solid ${t.b1}">
      <span style="font-family:monospace;font-size:12px;color:${t.t3};min-width:42px">${w(e.data)}</span>
      <span style="font-size:16px">${o(e.tipo)}</span>
      <span style="color:${t.t1};flex:1;overflow:hidden;text-overflow:ellipsis">${g(e.titulo)}</span>
    </div>`).join("")}function ba(a){if(!a.length)return`<div style="font-size:13px;color:${t.t4};padding:12px 0">Nenhum pagamento recebido no período.</div>`;const o=a.reduce((s,i)=>s+n(i.value),0);return`${a.map(s=>`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13px;padding:6px 0;border-bottom:1px solid ${t.b1}">
      <span style="color:${t.t1};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">✅ ${g(s.label)}</span>
      <span style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        ${s.data?`<span style="font-family:monospace;font-size:11px;color:${t.t3}">${w(s.data)}</span>`:""}
        <span style="font-family:monospace;font-weight:700;color:${t.g};white-space:nowrap">${d(n(s.value))}</span>
      </span>
    </div>`).join("")}
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;font-size:15px">
      <span style="font-weight:700;color:${t.navy}">Total recebido</span>
      <span style="font-family:serif;font-weight:700;color:${t.g}">${d(o)}</span>
    </div>`}function va(a){const o=a.entradas??[];if(!o.length)return`<div style="font-size:13px;color:${t.t4};padding:12px 0">Nenhuma entrada Villagio no período.</div>`;const e=i=>{const m=(i||"—").replace(/\s+/g," ").trim();return m.length>80?m.slice(0,80).trim()+"…":m},s=o.map(i=>`
    <div style="padding:7px 0;border-bottom:1px solid ${t.b1}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">
        <span style="color:${t.t1};font-weight:600">📥 ${w(i.data)}</span>
        <span style="font-family:monospace;font-weight:700;color:${t.g};white-space:nowrap;flex-shrink:0">${d(n(i.total))}</span>
      </div>
      <div style="font-family:monospace;font-size:11px;color:${t.t3};margin-top:3px;word-break:break-word">${g(e(i.lotes))}</div>
    </div>`).join("");return`<div style="font-size:12px;color:${t.t2};margin-bottom:8px">🏘️ Frente <b>Villagio</b> (loteamento) — CNPJ separado da Construtora. ${n(a.qtd)} entrada(s) no período.</div>
    ${s}
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;font-size:15px">
      <span style="font-weight:700;color:${t.navy}">Total recebido Villagio</span>
      <span style="font-family:serif;font-weight:700;color:${t.g}">${d(n(a.recebido))}</span>
    </div>`}function wa(a){return a==="inadimplente"?"inadimplente":a==="parcial"?"parcial · resta":a==="em_aberto"?"em aberto":a==="enviado"?"boleto enviado":a==="pendente"?"pendente":a}function _a(a){const o=n(a.pct),e=(c,l)=>c.map(p=>`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13px;padding:6px 0;border-bottom:1px solid ${t.b1}">
      <span style="color:${t.t1};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(p.label)}${p.status?` <span style="color:${p.status==="inadimplente"?t.r:t.a};font-size:11px">· ${wa(p.status)}</span>`:""}${!p.status&&n(p.resta)>2?` <span style="color:${t.t4};font-size:11px">· ${d(n(p.resta))} abaixo do contrato</span>`:""}</span>
      <span style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        ${p.data?`<span style="font-family:monospace;font-size:11px;color:${t.t3}">${w(p.data)}</span>`:""}
        <span style="font-family:monospace;font-weight:700;color:${l};white-space:nowrap">${d(n(p.value))}</span>
      </span>
    </div>`).join(""),s=`
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px">
        <span style="color:${t.t2}">Recebido <b style="color:${t.g}">${d(n(a.recebido))}</b> de ${d(n(a.esperado))}</span>
        <span style="font-weight:700;color:${o>=100?t.g:o>=70?t.a:t.r}">${o}%</span>
      </div>
      <div style="height:14px;border-radius:7px;background:${t.b1};overflow:hidden">
        <div style="height:100%;width:${Math.min(o,100)}%;border-radius:7px;background:${o>=100?t.g:o>=70?t.a:t.r}"></div>
      </div>
      ${n(a.falta)>0?`<div style="font-size:13px;color:${t.r};margin-top:6px;font-weight:600">Falta receber: ${d(n(a.falta))}</div>`:`<div style="font-size:13px;color:${t.g};margin-top:6px;font-weight:600">✓ Tudo recebido no mês</div>`}
    </div>`,i=(a.faltam??[]).length?`<div style="font-size:11px;font-weight:700;color:${t.a};margin:14px 0 4px">⏳ Faltam pagar (${n(a.qtd_faltam)})</div>${e(a.faltam,t.a)}`:"",m=(a.pagaram??[]).length?`<div style="font-size:11px;font-weight:700;color:${t.g};margin:14px 0 4px">✅ Pagaram (${n(a.qtd_pagaram)})</div>${e(a.pagaram,t.g)}`:"";return s+i+m}function ja(a){const o=(a.itens??[]).map(e=>`
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:13px;padding:6px 0;border-bottom:1px solid ${t.b1}">
      <span style="color:${t.t1};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(e.label)}${e.obs?` <span style="color:${t.t4};font-size:11px">· ${g(e.obs)}</span>`:""}</span>
      <span style="display:flex;align-items:center;gap:8px;flex-shrink:0">
        ${e.data?`<span style="font-family:monospace;font-size:11px;color:${t.t3}">${w(e.data)}</span>`:""}
        <span style="font-family:monospace;font-weight:700;color:${t.b};white-space:nowrap">${d(n(e.value))}</span>
      </span>
    </div>`).join("");return`<div style="font-size:13px;color:${t.t2};margin-bottom:10px">🤝 ${n(a.qtd)} acordo(s) — desconto aceito pelo gestor. <b>Quita o galpão, mas não entra no caixa.</b></div>
    ${o}
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;font-size:15px">
      <span style="font-weight:700;color:${t.navy}">Total concedido</span>
      <span style="font-family:serif;font-weight:700;color:${t.b}">${d(n(a.total))}</span>
    </div>`}function ta(a,o,e,s={},i=!1){var E,L,H,M,B,P,F,I,A;const m=n(a.resultado),c=(E=s.fimPeriodo)!=null&&E.length?{rows:s.fimPeriodo.filter(r=>r.na_data!==null).map(r=>({label:r.label,value:n(r.na_data)})),atual:s.fimPeriodo.reduce((r,j)=>r+n(j.atual),0),dataLabel:w(a.periodo_fim)}:null,l=c?c.rows:a.saldo_por_conta.map(r=>({label:r.label,value:n(r.value)})),p=l.reduce((r,j)=>r+j.value,0),x=i&&!!((L=s.anterior)!=null&&L.length)&&s.anterior.every(r=>r.na_data!==null),h=x?new Map(s.anterior.map(r=>[r.label,n(r.na_data)])):void 0,y=x?s.anterior.reduce((r,j)=>r+n(j.na_data),0):0,z=Math.round((Date.parse(a.periodo_fim)-Date.parse(a.periodo_ini))/864e5)+1,D=new Date(a.periodo_fim+"T12:00:00Z"),na=new Date(Date.UTC(D.getUTCFullYear(),D.getUTCMonth()+1,0)).getUTCDate(),sa=a.periodo_ini.slice(0,7)===a.periodo_fim.slice(0,7)&&a.periodo_ini.endsWith("-01")&&D.getUTCDate()===na,u=z<=1?"diario":z<=7?"semanal":sa?"mensal":"personalizado",_=u==="diario"?"do dia":u==="semanal"?"da semana":u==="mensal"?"do mês":"do período",ia=[...x?[{label:`${u==="diario"?"Dia anterior":u==="semanal"?"Fim da semana anterior":u==="mensal"?"Fim do mês anterior":"Antes do período"} (${w(J(a.periodo_ini))})`,valor:y,dif:p-y}]:[],...i&&c?[{label:"Saldo atual (hoje)",valor:c.atual,dif:c.atual-p}]:[]],T=(m>=0?1:0)+(n(a.inadimplentes_qtd)===0?1:0)+(n(a.saidas_pendentes_qtd)===0?1:0),la=T>=3?{txt:"Saudável",ic:"🟢",color:t.g,bg:t.gl}:T===2?{txt:"Atenção",ic:"🟡",color:t.a,bg:t.al}:{txt:"Crítico",ic:"🔴",color:t.r,bg:t.rl},ra=`
  <!-- Estado do site -->
  ${ga(la,[S(c?`Em caixa em ${c.dataLabel}`:"Em caixa",d(p),t.navy),S("Inadimplentes",`${n(a.inadimplentes_qtd)} · ${d(n(a.inadimplentes_valor))}`,n(a.inadimplentes_valor)>0?t.r:t.t3),S("Saídas pendentes",`${n(a.saidas_pendentes_qtd)} · ${d(n(a.saidas_pendentes_valor))}`,n(a.saidas_pendentes_valor)>0?t.a:t.t3)].join(""))}

  <!-- Resultado do período -->
  <div class="kpis">
    ${k("Receita",n(a.receita_total),t.g,t.gl,`Constr. ${N(n(a.receita_construtora))} · Villagio ${N(n(a.receita_villagio))}`)}
    ${k("Despesa",n(a.despesa_total),t.r,t.rl,`${n(a.saidas_qtd)} saída(s)`)}
    ${k("Resultado",m,m>=0?t.g:t.r,m>=0?t.gl:t.rl,m>=0?"superávit":"déficit")}
  </div>

  ${$(`Quem pagou — Construtora ${_}${(a.pagamentos_periodo??[]).length?` (${(a.pagamentos_periodo??[]).length})`:""}`,ba(a.pagamentos_periodo??[]))}

  ${n((H=a.villagio)==null?void 0:H.qtd)>0?$(`Entradas — Villagio ${_} (${n((M=a.villagio)==null?void 0:M.qtd)})`,va(a.villagio)):""}

  ${u==="mensal"?$(`Cobrança do mês ${g(((B=a.cobranca)==null?void 0:B.mes_ref)??"")} — execução orçamentária`,_a(a.cobranca)):""}

  ${u==="mensal"&&n((P=a.acordos)==null?void 0:P.total)>0?$(`Acordos / descontos concedidos — ${g(((F=a.cobranca)==null?void 0:F.mes_ref)??"")}`,ja(a.acordos)):""}

  ${$(`Entradas vs Saídas ${_}`,C([{label:"Entradas",value:n(a.receita_total),color:t.g},{label:"Saídas",value:n(a.despesa_total),color:t.r}],t.navy))}

  ${$(`Gasto por tipo ${_}`,$a(a.gasto_por_tipo.map(r=>({label:r.label,value:n(r.value)})),"GASTOS"))}
  ${$(`Gasto por departamento ${_}`,C(a.gasto_por_departamento.map(r=>({label:r.label,value:n(r.value)})),t.navy))}
  ${$(`Diárias ${_} · ${d(n((I=a.diarias)==null?void 0:I.total))}`,C((((A=a.diarias)==null?void 0:A.por_pedreiro)??[]).map(r=>({label:r.label,value:n(r.value),tag:r.pago?"pago":"a pagar",color:r.pago?t.g:t.a})),t.navy))}

  ${$(c?`Saldo bancário em ${c.dataLabel}`:"Saldo bancário",ya(l,c?`Total em caixa em ${c.dataLabel}`:"Total em caixa",ia,h))}
  ${(a.aplicacoes??[]).length?$("Movimentação de aplicação",ua(a.aplicacoes)):""}
  ${(a.proximos_compromissos??[]).length?$("Próximos compromissos",ha(a.proximos_compromissos)):""}`;return O({titulo:o,periodoLabel:e,marca:"Brunelli",marcaSub:"EMPREENDIMENTOS",rodape:"Brunelli Gestão",body:ra})}function ea(a,o){const e=a.toLowerCase(),s=e.includes("diário")?"diário":e.includes("semanal")?"semanal":e.includes("mensal")?"mensal":"";return`${U()}, Presidente. 📊 Segue o relatório ${s} da Brunelli referente a ${o}. Fico à disposição para qualquer esclarecimento.`}const oa=(a,o)=>`relatorio-${a.toLowerCase().replace("fechamento ","").replace(/[^a-z0-9]+/g,"-")}-${o}.pdf`;function Ma({ini:a,fim:o,titulo:e,periodoLabel:s,onClose:i}){const{data:m,isLoading:c,isError:l}=Y(a,o,!0),[p,x]=X(),h=aa(a,o,p),y=m&&!h.isLoading?ta(m,e,s,h.saldos,p):"";return f.jsx("div",{onClick:i,style:{position:"fixed",inset:0,background:"rgba(0,0,0,.55)",zIndex:1e3,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"16px 8px",overflowY:"auto"},children:f.jsxs("div",{onClick:z=>z.stopPropagation(),style:{background:"var(--bg)",borderRadius:16,maxWidth:800,width:"100%",boxShadow:"0 10px 40px rgba(0,0,0,.3)",display:"flex",flexDirection:"column",maxHeight:"94vh"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",borderBottom:"1px solid var(--b1)",flexShrink:0,flexWrap:"wrap"},children:[f.jsxs("span",{style:{flex:1,minWidth:140,fontSize:13,fontWeight:700,color:"var(--t1)"},children:["Farol — ",e]}),f.jsx(Z,{ativo:p,onClick:x}),f.jsx(ca,{html:y,disabled:c||!y,fileName:oa(e,a),texto:ea(e,s),titulo:`${e} — ${s}`}),f.jsx(ma,{html:y,disabled:c||!y}),f.jsx("button",{onClick:i,style:{border:"none",background:"none",cursor:"pointer",color:"var(--t3)",fontSize:18},children:"✕"})]}),f.jsx("div",{style:{padding:12,overflowY:"auto",flex:1},children:f.jsx(fa,{html:y,isLoading:c||h.isLoading,isError:l,altura:"72vh"})}),f.jsx("div",{style:{padding:"8px 16px 12px",fontSize:11,color:"var(--t4)",textAlign:"center",flexShrink:0},children:"“Baixar PDF” abre a impressão — escolha “Salvar como PDF” (no iPhone, compartilhar → salvar/WhatsApp)."})]})})}function Ba({ini:a,fim:o,titulo:e,periodoLabel:s}){const{data:i,isLoading:m,isError:c}=Y(a,o,!0),[l,p]=X(),x=aa(a,o,l),h=i&&!x.isLoading?ta(i,e,s,x.saldos,l):"";return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:f.jsx(Z,{ativo:l,onClick:p})}),f.jsx(K,{html:h,isLoading:m||x.isLoading,isError:c,cabecalho:`${e} · ${s}`,fileName:oa(e,a),texto:ea(e,s),titulo:`${e} — ${s}`})]})}function za(a){return R({queryKey:["despesas-dia",a],staleTime:6e4,queryFn:async()=>{const{data:o,error:e}=await q("get_despesas_dia",{p_data:a});if(e)throw e;return o}})}const b=`text-align:left;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:${t.t4};font-weight:600;padding:0 8px 6px 0`,v=`font-size:13px;padding:7px 8px 7px 0;border-top:1px solid ${t.b1};vertical-align:top`;function Da(a){const o=a.map(e=>`<tr>
      <td style="${v};color:${t.t1};font-weight:600">${g(e.fornecedor)}</td>
      <td style="${v};color:${t.t2}">${g(e.descricao)}</td>
      <td style="${v};color:${t.t3}">${g(e.departamento)}</td>
      <td style="${v};text-align:right;padding-right:0;font-family:monospace;font-weight:700;color:${t.r};white-space:nowrap">${d(n(e.valor))}</td>
    </tr>`).join("");return`<table style="width:100%;border-collapse:collapse">
    <thead><tr><th style="${b}">Fornecedor</th><th style="${b}">Descrição</th><th style="${b}">Departamento</th><th style="${b};text-align:right;padding-right:0">Valor</th></tr></thead>
    <tbody>${o}</tbody></table>`}function Sa(a){const o=a.bancos.map(e=>`<tr>
      <td style="${v};color:${t.t1}">${g(e.banco)}</td>
      <td style="${v};text-align:center;font-family:monospace;color:${t.t2}">${n(e.qtd)}</td>
      <td style="${v};text-align:right;padding-right:0;font-family:monospace;font-weight:700;color:${t.t1}">${d(n(e.total))}</td>
    </tr>`).join("");return`<table style="width:100%;border-collapse:collapse">
    <thead><tr><th style="${b}">Banco</th><th style="${b};text-align:center">Qtd</th><th style="${b};text-align:right;padding-right:0">Total</th></tr></thead>
    <tbody>${o}</tbody></table>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:11px;font-size:15px">
      <span style="font-weight:700;color:${t.navy}">Total geral</span>
      <span style="font-family:serif;font-weight:700;color:${t.r}">${d(n(a.total))}</span>
    </div>`}function ka(a,o){const e=n(a.qtd),s=`<div style="background:${t.rl};border:1px solid ${t.r}33;border-radius:12px;padding:14px 18px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
      <div>
        <div style="font-size:11px;color:${t.t3};text-transform:uppercase;letter-spacing:1px">Todos os bancos</div>
        <div style="font-size:15px;color:${t.t1};margin-top:3px"><b>${e}</b> saída${e===1?"":"s"} paga${e===1?"":"s"} no dia</div>
      </div>
      <div style="font-family:serif;font-size:24px;font-weight:700;color:${t.r}">${d(n(a.total))}</div>
    </div>`,i=a.bancos.map(l=>$(`${l.banco} · ${n(l.qtd)} saída${n(l.qtd)===1?"":"s"} · ${d(n(l.total))}`,Da(l.itens))).join(""),m=a.sem_saida.length?`<div style="font-size:12px;color:${t.t3};margin:-4px 0 16px">Sem saídas no dia: ${a.sem_saida.map(g).join(", ")}.</div>`:"",c=e===0?`${s}<div style="font-size:14px;color:${t.t3};padding:12px 0">Nenhuma saída paga neste dia.</div>`:`${s}${i}${m}${$("Resumo por banco",Sa(a))}`;return O({titulo:"Despesas do Dia",periodoLabel:o,marca:"Brunelli",marcaSub:"EMPREENDIMENTOS",rodape:"Brunelli Gestão",body:c})}const Ca=(a,o)=>`${U()}! 🧾 Segue o relatório de despesas de ${a}${o?` — ${n(o.qtd)} saída(s), total ${d(n(o.total))}`:""}.`;function Pa({dia:a,periodoLabel:o}){const{data:e,isLoading:s,isError:i}=za(a),m=e?ka(e,o):"";return f.jsx(K,{html:m,isLoading:s,isError:i,cabecalho:`Despesas do Dia · ${o}`,fileName:`despesas-do-dia-${a}.pdf`,texto:Ca(o,e),titulo:`Despesas do Dia — ${o}`})}export{Pa as D,Ba as R,Ma as a};
