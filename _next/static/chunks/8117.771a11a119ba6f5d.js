"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8117],{18117:function(e,t,l){l.r(t),l.d(t,{diagram:function(){return u}});var n=l(66575),a=l(40400),o=l(91264),i=l(39157),s=l(48866),r=l(29082),d=l(61201);l(35368),l(28879),l(98348),l(61936),l(72659);const c=e=>i.d.sanitizeText(e,(0,i.g)());let g={dividerMargin:10,padding:5,textHeight:10,curve:void 0};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){g={...g,...e}},draw:function(e,t,l,n){i.l.info("Drawing class - ",t);const b=(0,i.g)().flowchart??(0,i.g)().class,u=(0,i.g)().securityLevel;i.l.info("config:",b);const f=(null==b?void 0:b.nodeSpacing)??50,y=(null==b?void 0:b.rankSpacing)??50,h=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:f,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),v=n.db.getClasses(),w=n.db.getRelations(),x=n.db.getNotes();let k;i.l.info(w),function(e,t,l,n){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.forEach((function(l){var a,o;const s=e[l];let r="";s.cssClasses.length>0&&(r=r+" "+s.cssClasses.join(" "));const d="",g="",p=s.label??s.id,b={labelStyle:d,shape:"class_box",labelText:c(p),classData:s,rx:0,ry:0,class:r,style:g,id:s.id,domId:s.domId,tooltip:n.db.getTooltip(s.id)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(a=(0,i.g)().flowchart)?void 0:a.padding)??(null==(o=(0,i.g)().class)?void 0:o.padding)};t.setNode(s.id,b),i.l.info("setNode",b)}))}(v,h,0,n),function(e,t){const l=(0,i.g)().flowchart;let n=0;e.forEach((function(e){var o;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.n)(null==l?void 0:l.curve,a.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,r.m)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(o=(0,i.g)().flowchart)?void 0:o.htmlLabels)??(0,i.g)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.d.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(w,h),function(e,t,l,n){i.l.info(e),e.forEach((function(e,o){var s,d;const p=e,b="",u="",f=p.text,y={labelStyle:b,shape:"note",labelText:c(f),noteData:p,rx:0,ry:0,class:"",style:u,id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.g)().flowchart)?void 0:s.padding)??(null==(d=(0,i.g)().class)?void 0:d.padding)};if(t.setNode(p.id,y),i.l.info("setNode",y),!p.class||!(p.class in n))return;const h=l+o,v={id:`edgeNote${h}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.n)(g.curve,a.c_6)};t.setEdge(p.id,p.class,v,h)}))}(x,h,w.length+1,v),"sandbox"===u&&(k=(0,a.Ys)("#i"+t));const m="sandbox"===u?(0,a.Ys)(k.nodes()[0].contentDocument.body):(0,a.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if((0,s.r)(S,h,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),r.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,n.db.getDiagramTitle()),(0,d.s)(h,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===u?k.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},u={parser:n.p,db:n.d,renderer:b,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);