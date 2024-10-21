(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{5158:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/static_friction",function(){return s(1214)}])},5056:function(t,e,s){"use strict";s.d(e,{W:function(){return i}});class i{angle(){if(0!==this.x||0!==this.y){if(0===this.x)return this.y/Math.abs(this.y)*90;if(0===this.y)return this.x<0?180:0;{let t=180*Math.atan(this.y/this.x)/Math.PI;return this.x<0?180+t:t}}}mag(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){let t=this.mag();t>0&&(this.x/=t,this.y/=t)}invert(){this.x=-this.x,this.y=-this.y}incrementBy(t){this.x+=t.x,this.y+=t.y}decrementBy(t){this.x-=t.x,this.y-=t.y}scaleBy(t){this.x*=t,this.y*=t}static scale(t,e){return new i(e*t.x,e*t.y)}static subtract(t,e){return new i(t.x-e.x,t.y-e.y)}static distance(t,e){return i.subtract(t,e).mag()}static add(t,e){return new i(t.x+e.x,t.y+e.y)}static angle(t,e){return Math.acos(i.dotProduct(t,e)/(t.mag()*e.mag()))}static dotProduct(t,e){return t.x*e.x+t.y*e.y}constructor(t,e){this.x=t,this.y=e}}},6495:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return u}});var i=s(5893),n=s(7294),r=s(27),h=s(5056);let a=Math.PI/180;class c{move(){this.pos.y<=this.ch&&(this.acceleration=h.W.scale(this.forces,1/this.mass),this.velocity.incrementBy(this.acceleration),this.pos.incrementBy(this.velocity))}isMoving(){return this.moving}getAcceleration(){return this.acceleration=h.W.scale(this.forces,1/this.mass),this.acceleration}update(t){this.angle=t*a;let e=Math.sin(this.angle),s=Math.cos(this.angle),i=new h.W(this.cw/2-this.height*e/2-.5*this.cw*s,this.ch-this.width*s/2-.5*this.cw*e);this.pos=i,this.forces=h.W.add(h.W.add(this.weight,this.normal),this.friction)}setMass(t){this.mass=t,this.weight=h.W.scale(this.gravity,this.mass)}resetForces(){this.forces=new h.W(0,0),this.weight=new h.W(0,0),this.acceleration=new h.W(0,0)}setBoundaries(t,e){this.cw=t,this.ch=e}setPos(t){this.pos=new h.W(t.x,t.y)}getPos(){return this.pos}draw(t){t.fillStyle=this.color,this.move(),t.save(),t.translate(this.pos.x+this.width/2,this.pos.y+this.height/2),t.rotate(this.angle),t.beginPath(),t.rect(0,-this.height,this.width,this.height),t.fill(),t.restore()}constructor(t,e,s,i,n,r,c=1,o=.95,l=9.8,d="gray"){this.color=d,this.g=l,this.height=s,this.mass=c,this.cw=i,this.ch=n,this.pos=new h.W(t.x,t.y),this.width=e,this.gravity=new h.W(0,l),this.acceleration=new h.W(0,0),this.velocity=new h.W(0,0),this.mass=c,this.sfc=o,this.angle=r*a,this.weight=h.W.scale(this.gravity,this.mass),this.moving=!1,this.normal=new h.W(this.weight.mag()*Math.cos(this.angle)*Math.sin(this.angle),-this.weight.mag()*Math.cos(this.angle)*Math.cos(this.angle)),Math.tan(this.angle)<this.sfc?this.friction=new h.W(-this.normal.x,-this.normal.y-this.weight.y):(this.friction=new h.W(0,0),this.moving=!0),this.forces=h.W.add(h.W.add(this.weight,this.normal),this.friction)}}let o=3.14/180,l={width:180,margin:"auto"},d={width:90};var u=()=>{let t=(0,n.useRef)(null),[e,s]=(0,n.useState)(0),[a,u]=(0,n.useState)(10),[x,m]=(0,n.useState)(!0),[g,y]=(0,n.useState)(!1),[p,j]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let s=t.current,i=s.getContext("2d"),n=new c(new h.W(-50,-50),2*a,2*a,s.width,s.height,e,a),r=new Image;r.src="../images/protractor3.webp",r.onload=()=>{},function t(){i.save(),i.clearRect(0,0,s.width,s.height),function(t,e,s,i){let n=.5*e;t.save(),t.clearRect(0,0,e,s),t.save(),t.imageSmoothingEnabled,t.beginPath(),t.lineWidth=2,t.fillStyle="#8AA6A3",t.strokeStyle="#008600",t.moveTo(e/2,s),t.lineTo(e/2-n*Math.cos(i*o),s),t.lineTo(e/2-n*Math.cos(i*o),s-n*Math.sin(i*o)),t.lineTo(e/2,s),t.stroke(),t.fill(),t.restore()}(i,s.width,s.height,e),g?i.drawImage(r,2,0):x&&(n.setBoundaries(s.width,s.height),n.setMass(a),n.update(e),j(n.isMoving()),n.draw(i)),i.restore(),requestAnimationFrame(t)}()},[p,e,g,a]),(0,i.jsxs)(r.hC,{children:[(0,i.jsx)(r.qG,{children:(0,i.jsx)("table",{style:l,children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{htmlFor:"inclinationSlider",children:"Inclina\xe7\xe3o: "})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"range",id:"inclinationSlider",min:"0",max:"90",value:e,onChange:t=>{p||(s(Number(t.target.value)),m(!!t.target.value))}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("label",{htmlFor:"massSlider",children:["Massa:",(0,i.jsxs)("span",{style:{width:"15px"},children:[" ",a," kg"]})]})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"range",id:"massSlider",min:"5",max:"15",value:a,onChange:t=>{u(Number(t.target.value)),m(!!t.target.value)}})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("label",{htmlFor:"protractor",children:"Transferidor:"})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"checkbox",id:"protractor",style:{margin:"15px"},checked:g,onChange:t=>{y(!g)}})})]})]})})}),(0,i.jsx)(r.Xz,{ref:t}),(0,i.jsxs)("table",{style:l,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Massa (kg)"}),(0,i.jsx)("th",{children:"\xc2ngulo"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{type:"number",step:"0.01",min:"0",style:d})})]})]})]})]})}},1214:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return c}});var i=s(5893),n=s(9008),r=s.n(n),h=s(27);s(7294);var a=s(6495);function c(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Atrito Est\xe1tico"}),(0,i.jsx)("meta",{name:"Experimentos",content:"Experimentos"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)(h.or,{children:[(0,i.jsx)(h.Dx,{children:"Atrito Est\xe1tico"}),(0,i.jsx)("h2",{children:"Para voc\xea refletir"}),(0,i.jsx)("p",{children:"Suponha que voc\xea coloque dois blocos de mesmo material, por\xe9m de massas diferenters,  sob uma rampa e comece a almentar sua inclina\xe7\xe3o. Qual vai come\xe7ar a deslizar primeiro? Ou os dois deslizar\xe3o no mesmo instante? Qual fator \xe9 determinante nesta quest\xe3o?"}),(0,i.jsx)("h2",{children:"Objetivos"}),(0,i.jsx)("p",{children:"Determina\xe7\xe3o do coeficiente de atrito est\xe1tico entre um bloco e uma superf\xedcie. "}),(0,i.jsx)("h2",{children:"Roteiro do experimento"}),(0,i.jsx)("li",{children:"Variar a massa do bloco mantendo o \xe2ngulo fixo."}),(0,i.jsx)("li",{children:"Variar o \xe2ngulo, mantendo uma massa fixa, at\xe9 que o bloco comece a se deslocar."}),(0,i.jsx)(a.default,{}),(0,i.jsx)("h2",{children:"Discuss\xe3o"}),(0,i.jsx)("p",{children:"O que pode-se concluir do experimento acima?"}),(0,i.jsx)("h2",{children:"Explica\xe7\xe3o te\xf3rica"}),(0,i.jsx)("p",{children:" "})]})]})}},9008:function(t,e,s){t.exports=s(7828)}},function(t){t.O(0,[888,774,179],function(){return t(t.s=5158)}),_N_E=t.O()}]);