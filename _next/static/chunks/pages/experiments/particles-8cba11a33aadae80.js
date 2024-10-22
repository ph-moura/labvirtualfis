(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{2397:function(t,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/particles",function(){return s(2225)}])},4689:function(t,i,s){"use strict";s.d(i,{E:function(){return e}});class e{draw(t){if(this.lenght>0){let i=1*this.angle*Math.PI/180;t.save(),t.translate(this.pos.x,this.pos.y),t.rotate(i),t.strokeStyle=this.color,t.beginPath(),t.lineWidth=this.thickness,t.moveTo(0,0),t.lineTo(this.lenght,0),t.stroke(),t.translate(this.lenght,0),t.fillStyle=this.headColor,t.beginPath(),t.lineTo(0,this.headWidth),t.lineTo(this.headSize,0),t.lineTo(0,-this.headWidth),t.fill(),t.restore()}}constructor(t,i,s,e){this.pos=t,this.lenght=i,this.angle=s,this.color=e,this.headColor=e,this.thickness=2,this.headWidth=2*this.thickness,this.headSize=4*this.thickness}}},1880:function(t,i,s){"use strict";s.d(i,{h:function(){return h}});var e=s(5056);class h{update(t,i){this.v.x,this.v.y,this.g.mag(),this.tmp=e.W.add(this.r,this.v),.02>Math.abs(this.v.y)&&this.tmp.y+this.radius>=i?(this.v.y=0,this.r.y=i-this.radius):(this.v.incrementBy(this.g),this.r=this.tmp),(this.r.x+this.radius>t||this.r.x-this.radius<0)&&(this.v.x=-this.v.x),this.r.y+this.radius>i&&(this.v.x=0,this.v.y=0),this.r.y-this.radius<0&&(this.v.y=-this.v.y)}draw(t){t.save(),t.beginPath(),t.arc(this.r.x,this.r.y,this.radius,0,2*Math.PI),t.fillStyle="blue",t.fill(),t.restore(),t.closePath()}constructor(t,i,s){this.r=t,this.v=i,this.radius=s,this.g=new e.W(0,.02),this.tmp=t}}},5056:function(t,i,s){"use strict";s.d(i,{W:function(){return e}});class e{angle(){if(0!==this.x||0!==this.y){if(0===this.x)return this.y/Math.abs(this.y)*90;if(0===this.y)return this.x<0?180:0;{let t=180*Math.atan(this.y/this.x)/Math.PI;return this.x<0?180+t:t}}}mag(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){let t=this.mag();t>0&&(this.x/=t,this.y/=t)}invert(){this.x=-this.x,this.y=-this.y}incrementBy(t){this.x+=t.x,this.y+=t.y}decrementBy(t){this.x-=t.x,this.y-=t.y}scaleBy(t){this.x*=t,this.y*=t}static scale(t,i){return new e(i*t.x,i*t.y)}static subtract(t,i){return new e(t.x-i.x,t.y-i.y)}static distance(t,i){return e.subtract(t,i).mag()}static add(t,i){return new e(t.x+i.x,t.y+i.y)}static angle(t,i){return Math.acos(e.dotProduct(t,i)/(t.mag()*i.mag()))}static dotProduct(t,i){return t.x*i.x+t.y*i.y}constructor(t,i){this.x=t,this.y=i}}},2225:function(t,i,s){"use strict";s.r(i),s.d(i,{default:function(){return o}});var e=s(5893),h=s(9008),r=s.n(h),n=s(27);s(7294);var a=s(3762);function o(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r(),{children:[(0,e.jsx)("title",{children:"Atrito Est\xe1tico"}),(0,e.jsx)("meta",{name:"Experimentos",content:"Experimentos"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,e.jsxs)(n.or,{children:[(0,e.jsx)(n.Dx,{children:"Determina\xe7\xe3o do coeficiente de atrito est\xe1tico entre um bloco e uma superf\xedcie"}),(0,e.jsx)("h2",{children:"Roteiro do experimento"}),(0,e.jsx)("li",{children:"Variar a massa do bloco mantendo o \xe2ngulo fixo."}),(0,e.jsx)("li",{children:"Variar o \xe2ngulo mantendo uma massa fixa."}),(0,e.jsx)(a.default,{}),(0,e.jsx)("h3",{children:"O que pode-se concluir do experimento acima?"}),(0,e.jsx)("h2",{children:"Explica\xe7\xe3o te\xf3rica"})]})]})}},3762:function(t,i,s){"use strict";s.r(i);var e=s(5893),h=s(7294),r=s(27),n=s(1880),a=s(5056),o=s(4689);i.default=()=>{let t=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let i=t.current,s=i.getContext("2d"),e=[];for(let t=0;t<2;t++){let t=i.height/50,s=Math.random()*(i.width-2*t)+t,h=Math.random()*(i.height-2*t)+t,r=(Math.random()-.5)*5,o=(Math.random()-.5)*5,c=new a.W(s,h),l=new a.W(r,o);e.push(new n.h(c,l,t))}!function t(){s.save(),s.clearRect(0,0,i.width,i.height),s.imageSmoothingEnabled,e.forEach(t=>{t.update(i.width,i.height),t.draw(s);let e=new o.E(t.r,5*t.v.mag(),t.v.angle(),"black");0!==t.v.y&&e.draw(s)}),s.restore(),requestAnimationFrame(t)}()},[]),(0,e.jsxs)(r.hC,{children:[(0,e.jsx)(r.qG,{children:(0,e.jsxs)("div",{style:{margin:"0 0 3px 0"},children:[(0,e.jsx)("label",{htmlFor:"radiusSlider",children:"Inclina\xe7\xe3o: "}),(0,e.jsx)("input",{type:"range",id:"radiusSlider",min:"0",max:"90",value:45})]})}),(0,e.jsx)(r.Xz,{ref:t})]})}},9008:function(t,i,s){t.exports=s(7828)}},function(t){t.O(0,[888,774,179],function(){return t(t.s=2397)}),_N_E=t.O()}]);