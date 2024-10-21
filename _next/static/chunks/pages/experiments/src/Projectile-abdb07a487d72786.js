(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{4479:function(t,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/src/Projectile",function(){return s(3099)}])},4689:function(t,i,s){"use strict";s.d(i,{E:function(){return e}});class e{draw(t){if(this.lenght>0){let i=1*this.angle*Math.PI/180;this.headWidth=2*this.thickness,this.headSize=4*this.thickness,t.save(),t.translate(this.pos.x,this.pos.y),t.rotate(i),t.strokeStyle=this.color,t.beginPath(),t.lineWidth=this.thickness,t.moveTo(0,0),t.lineTo(this.lenght,0),t.stroke(),t.translate(this.lenght,0),t.fillStyle=this.headColor,t.beginPath(),t.lineTo(0,this.headWidth),t.lineTo(this.headSize,0),t.lineTo(0,-this.headWidth),t.fill(),t.restore()}}constructor(t,i,s,e){this.pos=t,this.lenght=i,this.angle=s,this.color=e,this.headColor=e,this.thickness=2,this.headWidth,this.headSize}}},1880:function(t,i,s){"use strict";s.d(i,{h:function(){return h}});var e=s(5056);class h{update(t,i){.02>=Math.abs(this.v.x)&&(this.v.x=0),this.v.y,this.g.mag(),this.tmp=e.W.add(this.r,this.v),.02>Math.abs(this.v.y)&&this.tmp.y+this.radius>=i?(this.v.y=0,this.r.y=i-this.radius):(this.v.incrementBy(this.g),this.r=this.tmp),(this.r.x+this.radius>t||this.r.x-this.radius<0)&&(this.v.x=-this.v.x),(this.r.y+this.radius>=i||this.r.y-this.radius<=0)&&(this.v.y=-this.v.y,this.v.scaleBy(.8))}draw(t){t.save(),t.beginPath(),t.arc(this.r.x,this.r.y,this.radius,0,2*Math.PI),t.fillStyle="blue",t.fill(),t.restore(),t.closePath()}constructor(t,i,s){this.r=t,this.v=i,this.radius=s,this.g=new e.W(0,.02),this.tmp=t}}},5056:function(t,i,s){"use strict";s.d(i,{W:function(){return e}});class e{angle(){if(0!==this.x||0!==this.y){if(0===this.x)return this.y/Math.abs(this.y)*90;if(0===this.y)return this.x<0?180:0;{let t=180*Math.atan(this.y/this.x)/Math.PI;return this.x<0?180+t:t}}}mag(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){let t=this.mag();t>0&&(this.x/=t,this.y/=t)}invert(){this.x=-this.x,this.y=-this.y}incrementBy(t){this.x+=t.x,this.y+=t.y}decrementBy(t){this.x-=t.x,this.y-=t.y}scaleBy(t){this.x*=t,this.y*=t}static scale(t,i){return new e(i*t.x,i*t.y)}static subtract(t,i){return new e(t.x-i.x,t.y-i.y)}static distance(t,i){return e.subtract(t,i).mag()}static add(t,i){return new e(t.x+i.x,t.y+i.y)}static angle(t,i){return Math.acos(e.dotProduct(t,i)/(t.mag()*i.mag()))}static dotProduct(t,i){return t.x*i.x+t.y*i.y}constructor(t,i){this.x=t,this.y=i}}},3099:function(t,i,s){"use strict";s.r(i);var e=s(5893),h=s(7294),r=s(27),n=s(1880),a=s(5056),l=s(4689);let c=3.14/180,d={width:180,margin:"auto"};i.default=()=>{let t=(0,h.useRef)(null),[i,s]=(0,h.useState)(0),[o,u]=(0,h.useState)(5),[x,y]=(0,h.useState)(!1),[g,m]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{let s=t.current,e=s.getContext("2d"),h=s.height/30,r=s.height-2*h+h,d=Math.cos(i*c)*o/6,u=-Math.sin(i*c)*o/6,y=new a.W(h+2,r),m=new a.W(d,u);var p=new n.h(y,m,h);let f=new Image;f.src="../images/transferidor(141x135).png",f.onload=()=>{},function t(){e.save(),e.clearRect(0,0,s.width,s.height),e.imageSmoothingEnabled,g&&e.drawImage(f,0,s.height-135-h),x&&p.update(s.width,s.height),p.draw(e),new l.E(p.r,10*p.v.mag(),p.v.angle(),"black").draw(e),e.restore(),requestAnimationFrame(t)}()},[g,o,i,x]),(0,e.jsxs)(r.hC,{children:[(0,e.jsx)(r.qG,{children:(0,e.jsx)("table",{style:d,children:(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)("label",{htmlFor:"inclinationSlider",children:"Inclina\xe7\xe3o: "})}),(0,e.jsx)("td",{children:(0,e.jsx)("input",{type:"range",id:"inclinationSlider",min:"0",max:"90",value:i,onChange:t=>{s(Number(t.target.value)),y(!1)}})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsxs)("label",{htmlFor:"massSlider",children:["Velocidade:",(0,e.jsxs)("span",{style:{width:"15px"},children:[" ",o," m/s"]})]})}),(0,e.jsx)("td",{children:(0,e.jsx)("input",{type:"range",id:"massSlider",min:"5",max:"15",value:o,onChange:t=>{u(Number(t.target.value)),y(!1)}})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)("label",{htmlFor:"launch",children:"Lan\xe7ar:"})}),(0,e.jsx)("td",{children:(0,e.jsx)("input",{type:"checkbox",id:"protractor",style:{margin:"15px"},checked:x,onChange:t=>{y(!x),m(!1)}})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)("label",{htmlFor:"protractor",children:"Transferidor:"})}),(0,e.jsx)("td",{children:(0,e.jsx)("input",{type:"checkbox",id:"protractor",style:{margin:"15px"},checked:g,onChange:t=>{m(!g),y(!1)}})})]})]})})}),(0,e.jsx)(r.Xz,{ref:t})]})}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=4479)}),_N_E=t.O()}]);