"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{6648:(e,t,n)=>{n.r(t),n.d(t,{Scene:()=>P});var i=n(5155),r=n(6275),o=n(9007),a=n(622),l=n(2115),s=n(5692),d=n(5269),c=n(3161);let u={x:0,y:0,mx:0,my:0,px:0,py:0,down:!1,clicked:!1,hasPrev:!1},p={impulse:0},m={near:0,windX:0,windY:0,rippleAge:99,rippleOrigin:0,grabIndex:-1,pulling:!1,pulls:[{x:0,y:0,vx:0,vy:0},{x:0,y:0,vx:0,vy:0},{x:0,y:0,vx:0,vy:0},{x:0,y:0,vx:0,vy:0}],dropScreen:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]},v=null;function f(e){let t=null,n=()=>{if(m.grabIndex>=0){let e=m.pulls[m.grabIndex];e.vx=0,e.vy=0}u.down=!1,u.hasPrev=!1,u.mx=0,u.my=0,m.grabIndex=-1,m.pulling=!1,t=null},i=e=>{u.down&&"mouse"===e.pointerType&&0===e.buttons&&n();let t=e.clientX/window.innerWidth*2-1,i=-(2*(e.clientY/window.innerHeight))+1;u.hasPrev&&(u.mx+=(t-u.px)*window.innerWidth*.5,u.my+=(u.py-i)*window.innerHeight*.5),u.x=t,u.y=i,u.px=t,u.py=i,u.hasPrev=!0},r=n=>{var r;if("mouse"===n.pointerType&&0!==n.button||(r=n.target)instanceof Element&&r.closest("a, button, input, textarea, select, label, summary, [role='button'], .site-nav, .hero-cta, .splash"))return;if(i(n),m.near<=(e?.12:.2))return;u.down=!0,t=n.pointerId;try{document.documentElement.setPointerCapture(n.pointerId)}catch{}let o=0,a=1/0;for(let e=0;e<4;e++){let t=m.dropScreen[e],n=Math.hypot(u.x-t.x,u.y-t.y);n<a&&(a=n,o=e)}m.grabIndex=o,m.pulling=!1,m.rippleOrigin=o,m.rippleAge=0,u.clicked=!0;try{let e=v??=new AudioContext;"suspended"===e.state&&e.resume();let t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(180,t+.28),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.09,t+.02),i.gain.exponentialRampToValueAtTime(1e-4,t+.32),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.34)}catch{}},o=e=>{if(null===t||e.pointerId===t){try{null!==t&&document.documentElement.releasePointerCapture(t)}catch{}n()}},a=()=>n(),l=()=>n(),s=()=>{document.hidden&&n()};return window.addEventListener("pointermove",i,{passive:!0}),window.addEventListener("pointerdown",r,{passive:!0}),window.addEventListener("pointerup",o,{passive:!0}),window.addEventListener("pointercancel",o,{passive:!0}),window.addEventListener("blur",l),document.addEventListener("visibilitychange",s),document.documentElement.addEventListener("lostpointercapture",a),()=>{for(let e of(window.removeEventListener("pointermove",i),window.removeEventListener("pointerdown",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("blur",l),document.removeEventListener("visibilitychange",s),document.documentElement.removeEventListener("lostpointercapture",a),n(),document.documentElement.style.cursor="",u.x=0,u.y=0,u.mx=0,u.my=0,u.px=0,u.py=0,u.down=!1,u.clicked=!1,u.hasPrev=!1,p.impulse=0,m.near=0,m.windX=0,m.windY=0,m.rippleAge=99,m.rippleOrigin=0,m.grabIndex=-1,m.pulling=!1,m.pulls))e.x=0,e.y=0,e.vx=0,e.vy=0}}var h=n(5245),x=n(7406);function y(e,t=.14){let n=Math.PI/2,i=Math.round(e/n);if(Math.abs(i)%2!=1)return e;let r=i*n,o=e-r,a=Math.abs(o);if(a>=t||a<1e-6)return e;let l=a/t;return r+t*(.45+.55*l*l)*Math.sign(o)}let g=[{x:-.78,y:.04},{x:-.28,y:.42},{x:.22,y:-.48},{x:.78,y:.04}];function w(e,t,n,i,r,o,a,l="dramatic",s=g){let c,v,f,b,E,j,M,S,L,k,I=Math.min(o,.05),F=x.X.progress;e.updateWorldMatrix(!0,!1);let T=Math.min(s.length,4);for(let n=0;n<T;n++){let r=s[n];i.dropWorld.set(r.x,r.y,0),i.dropWorld.applyMatrix4(e.matrixWorld),i.dropWorld.project(t),m.dropScreen[n].x=i.dropWorld.x,m.dropScreen[n].y=i.dropWorld.y,h.wB.dropScreen[n].x=i.dropWorld.x,h.wB.dropScreen[n].y=i.dropWorld.y}e.getWorldPosition(i.world),i.world.project(t);let C=Math.hypot(u.x-i.world.x,u.y-i.world.y),A=r?.85:.55,W=Math.max(0,1-C/A)**(r?1.6:2.2);m.near=W,function(e){if(e>.2||m.grabIndex>=0){document.documentElement.style.cursor=u.down||m.pulling?"grabbing":"grab";return}let t=document.documentElement.style.cursor;("grab"===t||"grabbing"===t)&&(document.documentElement.style.cursor="")}(W),function(e,t){if(u.down&&m.grabIndex>=0&&(Math.hypot(u.mx,u.my)>2.5&&(m.pulling=!0),m.pulling)){let t=m.pulls[m.grabIndex],n=e?.95:1.25,i=Math.hypot(t.x,t.y),r=1-.82*d.cj9.smoothstep(.45*n,n,i);t.x+=.0026*u.mx*r,t.y+=-(.0026*u.my)*r,function(e,t=1.35){let n=Math.hypot(e.x,e.y);if(n>t){let i=t/n;e.x*=i,e.y*=i}}(t,n),t.vx=0,t.vy=0}for(let e=0;e<4;e++){let n=m.pulls[e];if(u.down&&m.grabIndex===e&&m.pulling)continue;let i=Math.hypot(n.x,n.y),r=d.cj9.lerp(.55,1.35,d.cj9.smoothstep(0,1.1,i));n.x=d.cj9.damp(n.x,0,r,t),n.y=d.cj9.damp(n.y,0,r,t),n.vx=0,n.vy=0,i<.0015&&(n.x=0,n.y=0)}}(r,I),function(e,t,n){let i=u.down?4e-4:22e-5,r=m.pulling?.25:1;m.windX+=u.mx*i*t*r,m.windY-=u.my*i*t*r,m.windX=d.cj9.clamp(m.windX,-.12,.12),m.windY=d.cj9.clamp(m.windY,-.12,.12),m.windX*=Math.pow(.97,60*n),m.windY*=Math.pow(.97,60*n),m.rippleAge+=n,u.clicked=!1;let o=m.pulling?.2:1;e.vz+=(u.mx+.2*u.my)*12e-5*t*o,e.vy+=4e-5*u.mx*t*o,e.vx+=4e-5*u.my*t*o;let a=p.impulse;if(0!==a){p.impulse=0;let t=-a;e.vz+=22e-5*t,e.vy+=7e-5*t,e.vx+=35e-6*t,m.windX+=12e-5*t,m.windY+=4e-5*t}e.vz=d.cj9.clamp(e.vz,-.045,.045),e.vy=d.cj9.clamp(e.vy,-.02,.02),e.vx=d.cj9.clamp(e.vx,-.02,.02);let l=Math.pow(.9,60*n);e.vz*=l,e.vy*=l,e.vx*=l,e.z+=e.vz,e.y+=e.vy,e.x+=e.vx,u.mx=0,u.my=0}(n,W,I),v=(c="calm"===l)?.28:1,f=c?.35:1,b=c||"mark"===l?.08:.14,E=a*(c?.018:.06)+F*Math.PI*(c?.55:2.2)+n.z*f+m.windX*(c?.06:.15),j=.35*v+.28*Math.sin(.32*a)*v+.55*F*v+n.y*f+m.windX*(c?.08:.2),M=.38*v+.18*Math.cos(.26*a)*v+.22*F*v+n.x*f+m.windY*(c?.08:.18),j=y(j,b),M=y(M,b),S=window.innerWidth,L=r?.2+.2*Math.sin(F*Math.PI):.5+.3*Math.sin(F*Math.PI),e.rotation.z=E,e.rotation.y=j,e.rotation.x=M,e.position.x=d.cj9.damp(e.position.x,L,2,I),e.position.y=d.cj9.damp(e.position.y,r?.15-.9*F:-(1.1*F),2,I),k=d.cj9.damp(e.scale.x,((c?1.05:.98)-F*(c?.1:.18))*(S<480?.78:S<768?.88:1),2,I),e.scale.setScalar(k)}function b(e,t=0){return new d.V9B({map:e,alphaTest:t,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0,side:d.$EB,toneMapped:!1})}function E(e="#2a1845"){return new d._4j({color:new d.Q1f(e),metalness:.55,roughness:.28,envMapIntensity:1.1,transparent:!1,opacity:1,depthWrite:!0,side:d.$EB})}function j(e,t,n,i){e.scale(t,n?-t:t,t),e.computeBoundingBox();let r=e.boundingBox;return e.translate(-(r.min.x+r.max.x)/2,-(r.min.y+r.max.y)/2,-(r.min.z+r.max.z)/2),function(e,t){e.computeBoundingBox();let n=e.boundingBox,i=n.max.x-n.min.x||1,r=n.max.y-n.min.y||1,o=e.attributes.position,a=e.attributes.uv;a||(a=new d.THS(new Float32Array(2*o.count),2),e.setAttribute("uv",a));let l=e=>{let l=t.u0+(o.getX(e)-n.min.x)/i*(t.u1-t.u0),s=t.v0+(o.getY(e)-n.min.y)/r*(t.v1-t.v0);a.setXY(e,l,s)},s=e.index;for(let t of e.groups)if(0===t.materialIndex)for(let e=t.start;e<t.start+t.count;e++)l(s?s.getX(e):e);a.needsUpdate=!0}(e,i),e.computeVertexNormals(),e}let M={u0:268/1400-3/1400,u1:1128/1400+3/1400,v0:1-1100/1400-3/1400,v1:1-300/1400+3/1400};function S({tier:e="high"}){let t="low"===e,n=(0,l.useRef)(null),r=(0,l.useRef)(new d.Pq0),o=(0,l.useRef)(new d.Pq0),a=(0,l.useRef)({z:0,y:0,x:0,vz:0,vy:0,vx:0}),u=(0,s.H)(c.c,"/branding/LogoVector.svg"),p=(0,s.H)(d.Tap,"/branding/LogoTransparent.png"),m=(0,l.useMemo)(()=>(function(e,t,n=3){let i=e.image,r="naturalWidth"in i&&i.naturalWidth||i.width,o="naturalHeight"in i&&i.naturalHeight||i.height,a=r||512,l=o||512,s=document.createElement("canvas");s.width=a,s.height=l;let c=s.getContext("2d",{willReadFrequently:!0});c.drawImage(i,0,0);let u=c.getImageData(0,0,a,l),p=(e,n)=>"alpha"===t?e[n+3]>40:e[n]>22||e[n+1]>22||e[n+2]>22;for(let e=0;e<n;e++){let e=new Uint8ClampedArray(u.data),t=c.createImageData(a,l);t.data.set(e);for(let n=1;n<l-1;n++)for(let i=1;i<a-1;i++){let r=(n*a+i)*4;if(p(e,r)){t.data[r+3]=255;continue}let o=0,l=0,s=0,d=0;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++){if(!r&&!t)continue;let c=((n+t)*a+(i+r))*4;p(e,c)&&(o+=e[c],l+=e[c+1],s+=e[c+2],d++)}d&&(t.data[r]=o/d|0,t.data[r+1]=l/d|0,t.data[r+2]=s/d|0,t.data[r+3]=255)}u=t}for(let e=0;e<u.data.length;e+=4)u.data[e+3]>0&&(u.data[e+3]=255);c.putImageData(u,0,0);let m=new d.GOR(s);return m.colorSpace=d.er$,m.anisotropy=16,m.generateMipmaps=!1,m.minFilter=d.k6q,m.magFilter=d.k6q,m.wrapS=d.ghU,m.wrapT=d.ghU,m.needsUpdate=!0,m})(p,"alpha",3),[p]);(0,l.useEffect)(()=>()=>m.dispose(),[m]);let v=(0,l.useMemo)(()=>{let e=[];for(let t of u.paths)e.push(...c.c.createShapes(t));return e.length?j(new d.QCA(e,{depth:22,bevelEnabled:!0,bevelThickness:t?3:4.5,bevelSize:t?2.5:3.5,bevelSegments:t?2:4,curveSegments:t?8:16}),.0048,!0,M):new d.iNn(.1,.1,.1)},[u,t]);(0,l.useEffect)(()=>()=>v.dispose(),[v]);let h=(0,l.useMemo)(()=>b(m),[m]),x=(0,l.useMemo)(()=>E("#3a1a55"),[]);return(0,l.useEffect)(()=>()=>{h.dispose(),x.dispose()},[h,x]),(0,l.useEffect)(()=>f(t),[t]),(0,s.F)((e,i)=>{n.current&&w(n.current,e.camera,a.current,{world:r.current,dropWorld:o.current},t,i,e.clock.elapsedTime,"mark")}),(0,i.jsxs)("group",{ref:n,position:[t?.05:.12,t?.05:.02,0],children:[(0,i.jsx)("mesh",{geometry:v,material:[h,x],castShadow:!t,receiveShadow:!t,renderOrder:10,frustumCulled:!1}),(0,i.jsx)("pointLight",{position:[.5,.9,2.2],intensity:t?.7:1.05,color:"#ffffff",distance:7,decay:2}),(0,i.jsx)("pointLight",{position:[-.8,.2,1.6],intensity:t?.35:.55,color:"#c77dff",distance:5,decay:2})]})}let L={u0:0,u1:1,v0:0,v1:1};function k({tier:e="high"}){let t="low"===e,n=(0,l.useRef)(null),r=(0,l.useRef)(new d.Pq0),o=(0,l.useRef)(new d.Pq0),a=(0,l.useRef)({z:0,y:0,x:0,vz:0,vy:0,vx:0}),u=(0,s.H)(c.c,"/branding/HEXagon.svg"),p=(0,l.useMemo)(()=>{let e,t,n,i;return(e=document.createElement("canvas")).width=512,e.height=512,(n=(t=e.getContext("2d")).createLinearGradient(384,60.416,128,452.096)).addColorStop(0,"#FE01FA"),n.addColorStop(.316318539,"#FF0F6F"),n.addColorStop(.51953125,"#FF3D3D"),n.addColorStop(.708632996,"#FF851F"),n.addColorStop(1,"#FFDB01"),t.fillStyle=n,t.fillRect(0,0,512,512),(i=new d.GOR(e)).colorSpace=d.er$,i.anisotropy=16,i.generateMipmaps=!1,i.minFilter=d.k6q,i.magFilter=d.k6q,i.wrapS=d.ghU,i.wrapT=d.ghU,i.needsUpdate=!0,i},[]);(0,l.useEffect)(()=>()=>p.dispose(),[p]);let m=(0,l.useMemo)(()=>{let e=[];for(let t of u.paths)e.push(...c.c.createShapes(t));return e.length?j(new d.QCA(e,{depth:28,bevelEnabled:!1,curveSegments:t?16:32}),.0056,!0,L):new d.iNn(.1,.1,.1)},[u,t]);(0,l.useEffect)(()=>()=>m.dispose(),[m]);let v=(0,l.useMemo)(()=>b(p),[p]),h=(0,l.useMemo)(()=>E("#2a1438"),[]);return(0,l.useEffect)(()=>()=>{v.dispose(),h.dispose()},[v,h]),(0,l.useEffect)(()=>f(t),[t]),(0,s.F)((e,i)=>{n.current&&w(n.current,e.camera,a.current,{world:r.current,dropWorld:o.current},t,i,e.clock.elapsedTime,"mark")}),(0,i.jsxs)("group",{ref:n,position:[t?.05:.12,t?.05:.02,0],children:[(0,i.jsx)("mesh",{geometry:m,material:[v,h],castShadow:!t,receiveShadow:!t,renderOrder:10,frustumCulled:!1}),(0,i.jsx)("pointLight",{position:[.5,.9,2.2],intensity:t?.7:1.05,color:"#ffffff",distance:7,decay:2}),(0,i.jsx)("pointLight",{position:[-.8,.2,1.6],intensity:t?.35:.55,color:"#ff6bb5",distance:5,decay:2})]})}let I=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,F=`
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform float uCover;
  uniform float uDisperse;
  uniform float uAspect;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.07 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float d = clamp(uDisperse, 0.0, 1.0);
    float cover = clamp(uCover, 0.0, 1.0);
    // Still while blanket; only animate once wind starts
    float live = smoothstep(0.02, 0.35, d);
    float t = uTime * live;

    float windX = (1.0 + d * 1.75) * d;
    float windY = (0.75 + d * 1.25) * d;
    vec2 wind = vec2(windX, windY);
    float stretch = 1.0 + d * 1.85;
    vec2 uv = (vUv - 0.5) * vec2(uAspect, 1.0);
    uv.x *= stretch;
    uv.y *= 1.0 + d * 0.55;
    uv = uv / max(uAspect, 1.0) + 0.5;
    uv -= wind * live;
    uv -= vec2(
      fbm(vUv * 3.0 + t * 0.08) - 0.5,
      fbm(vUv * 3.0 + vec2(4.1, t * 0.06)) - 0.5
    ) * (0.02 + d * 0.24) * live;

    float n = fbm(uv * 2.2 + vec2(t * 0.1, -t * 0.08));
    float n2 = fbm(uv * 5.0 - vec2(t * 0.14, t * 0.09));
    float n3 = fbm(uv * 9.0 + vec2(-t * 0.18, t * 0.12));

    // Extra-thick still blanket
    float body = n * 0.42 + n2 * 0.4 + n3 * 0.18;
    float density = smoothstep(0.02, 0.48, body);
    density = pow(density, 0.55);
    // Opaque base fill so it’s a wall of fog, not patchy wisps
    float blanket = mix(0.82, 0.0, d);
    density = max(density, blanket * cover);
    density *= mix(1.0, 0.4 + n2 * 0.7, d);

    vec2 edge = abs(vUv - 0.5) * 2.0;
    float vignette = 1.0 - smoothstep(1.15, 1.7, length(edge * vec2(1.0, 0.9)));
    density *= mix(1.0, vignette, 0.35 + d * 0.65);

    float thin = 1.0 - smoothstep(0.4, 1.0, d);
    float mist = density * cover * mix(1.0, thin, 0.85);
    mist *= 1.0 - d * d * 0.35;

    vec3 cyan = vec3(0.0, 0.85, 1.0);
    vec3 violet = vec3(0.45, 0.05, 0.95);
    vec3 magenta = vec3(0.85, 0.12, 0.85);
    vec3 deep = vec3(0.03, 0.0, 0.1);
    float tone = clamp(n2 * 0.55 + n3 * 0.45, 0.0, 1.0);
    vec3 col = mix(violet, cyan, 0.35 + tone * 0.4);
    col = mix(col, magenta, smoothstep(0.4, 0.9, n) * 0.35);
    col = mix(col, deep, (1.0 - density) * 0.25);
    col += cyan * n3 * 0.1 * (1.0 - d);

    float alpha = clamp(mist * mix(1.05, 0.85, d), 0.0, 0.995);
    alpha *= mix(1.0, 0.1 + n * 0.4, d * d);
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(col, alpha);
  }
`;function T(){let e=(0,l.useRef)(null),{size:t}=(0,s.D)(),n=(0,l.useMemo)(()=>({uTime:{value:0},uCover:{value:0},uDisperse:{value:0},uAspect:{value:1}}),[]);return(0,s.F)(n=>{if(!e.current)return;let i=h.wB.phase,r="suck"===i,o="red"===i||r?h.wB.red:0,a=r?h.wB.absorb:0;e.current.uniforms.uTime.value=n.clock.elapsedTime,e.current.uniforms.uCover.value=o,e.current.uniforms.uDisperse.value=a,e.current.uniforms.uAspect.value=t.width/Math.max(t.height,1),e.current.visible=o>.01||a>.01}),(0,i.jsxs)("mesh",{frustumCulled:!1,renderOrder:-20,children:[(0,i.jsx)("planeGeometry",{args:[2,2]}),(0,i.jsx)("shaderMaterial",{ref:e,vertexShader:I,fragmentShader:F,uniforms:n,transparent:!0,depthTest:!1,depthWrite:!1})]})}var C=n(473),A=n(2234);function W({low:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ambientLight",{intensity:e?.28:.15}),(0,i.jsx)("directionalLight",{position:[4,8,5],intensity:e?1.8:2.6,castShadow:!e,"shadow-mapSize":e?[512,512]:[1024,1024]}),(0,i.jsx)("pointLight",{position:[2.5,2.2,3.5],intensity:1.8,color:"#ffffff"}),e?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("pointLight",{position:[-2.2,1.5,2.8],intensity:.7,color:"#c77dff"}),(0,i.jsx)("directionalLight",{position:[-4,2,-1],intensity:.55,color:"#e619e6"})]})]})}function P(){let e=(0,l.useRef)(null),[t,n]=(0,l.useState)("high"),[s,d]=(0,l.useState)(!0),[c,u]=(0,l.useState)(!0),m=(0,l.useSyncExternalStore)(A.Yq,A.ut,()=>"brand");(0,l.useEffect)(()=>{(0,A.JS)(),n((0,C.k)())},[]),(0,l.useEffect)(()=>{let e;return e=e=>{if(e.ctrlKey||!document.documentElement.classList.contains("intro-done")||(x.X.lenis?.scroll??window.scrollY??0)>6||e.deltaY>=0)return;e.preventDefault();let t=Math.max(e.deltaY,-160);p.impulse+=t},window.addEventListener("wheel",e,{passive:!1}),()=>window.removeEventListener("wheel",e)},[]),(0,l.useEffect)(()=>{let e=()=>d(!document.hidden);return e(),document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),(0,l.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let n=new IntersectionObserver(([e])=>u(e.isIntersecting),{root:null,threshold:0,rootMargin:"15% 0px"});return n.observe(t),()=>n.disconnect()},[]);let v="low"===t;return(0,i.jsx)("div",{ref:e,className:"scene-canvas","aria-hidden":!0,children:(0,i.jsxs)(r.Hl,{shadows:!v,frameloop:s&&c?"always":"never",camera:{position:[0,.15,5.2],fov:40},dpr:v?[1,1.25]:[1,2],gl:{antialias:!v,alpha:!0,powerPreference:v?"low-power":"high-performance",toneMappingExposure:1.2},children:[(0,i.jsx)("color",{attach:"background",args:["#050505"]}),(0,i.jsx)("fog",{attach:"fog",args:["#050505",7,16]}),(0,i.jsxs)(l.Suspense,{fallback:null,children:[(0,i.jsx)(W,{low:v}),(0,i.jsx)(T,{}),"hex"===m?(0,i.jsx)(k,{tier:t}):(0,i.jsx)(S,{tier:t}),v?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o._,{position:[0,-1.75,0],opacity:.55,scale:14,blur:2.8,far:5}),(0,i.jsx)(a.OH,{preset:"studio",environmentIntensity:1.45})]})]})]})})}}}]);