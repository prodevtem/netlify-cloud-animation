(this["webpackJsonpcloud-animation"]=this["webpackJsonpcloud-animation"]||[]).push([[0],{40:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(33),o=n.n(c),r=(n(40),n(6)),s=n(12),d=n(13),j=(n(2),n(14)),l=n(47),h=n(49),u=n(48),b=n(50),p=n(9);function m(t){var e=t.opacity,n=void 0===e?.5:e,i=t.speed,c=void 0===i?.4:i,o=t.width,u=void 0===o?10:o,b=t.length,m=void 0===b?1.5:b,O=t.segments,x=void 0===O?30:O,M=t.dir,f=void 0===M?1:M,g=Object(d.a)(t,["opacity","speed","width","length","segments","dir"]),y=Object(a.useRef)(),v=Object(l.a)("/cloud.png"),P=Object(a.useMemo)((function(){return Object(s.a)(new Array(x)).map((function(t,e){return{x:u/2-Math.random()*u,y:u/2-Math.random()*u,scale:.4+Math.sin((e+1)/x*Math.PI)*(10*(.2+Math.random())),density:Math.max(.3,Math.random()),rotation:Math.max(.002,.005*Math.random())*c}}))}),[u,x,c]);return Object(j.b)((function(t){var e;return null===(e=y.current)||void 0===e?void 0:e.children.forEach((function(e,n){e.rotation.z+=P[n].rotation*f,e.scale.setScalar(P[n].scale+(1+Math.sin(t.clock.getElapsedTime()/10))/2*n/10)}))})),Object(p.jsx)("group",Object(r.a)(Object(r.a)({},g),{},{children:Object(p.jsx)("group",{position:[0,0,x/2*m],ref:y,children:P.map((function(t,e){var a=t.x,i=t.y,c=t.scale,o=t.density;return Object(p.jsx)(h.a,{scale:[c,c,c],position:[a,i,-e*m],lockZ:!0,children:Object(p.jsx)("meshStandardMaterial",{map:v,transparent:!0,opacity:c/6*o*n,depthTest:!1})},e)}))})}))}function O(){return Object(p.jsx)(m,{rotation:[0,Math.PI/2,0],position:[0,75,-100],scale:[10,10,10]})}function x(){return Object(p.jsxs)(j.a,{camera:{position:[0,-75,0]},children:[Object(p.jsx)("ambientLight",{intensity:.8}),Object(p.jsx)("pointLight",{intensity:2,position:[0,0,-1e3]}),Object(p.jsx)(a.Suspense,{fallback:null,children:Object(p.jsx)(O,{})}),Object(p.jsx)(u.a,{minPolarAngle:Math.PI/1.5,maxPolarAngle:Math.PI/1.5}),Object(p.jsx)(b.a,{azimuth:.5,turbidity:10,rayleigh:.5,inclination:.6,distance:1e5})]})}o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c14479df.chunk.js.map