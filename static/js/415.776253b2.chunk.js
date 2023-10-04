"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6713:function(n,t,e){e.d(t,{IR:function(){return p},M1:function(){return l},Pg:function(){return f},_L:function(){return s},tx:function(){return d}});var r=e(5861),c=e(4687),a=e.n(c),u=e(1243),i="05daa517baabbb59954a8442a1286030",o=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("discover/movie?api_key=".concat(i,"&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},931:function(n,t,e){e.d(t,{Z:function(){return H}});var r,c,a,u,i,o,s,p,f,l,d=e(7689),h=e(4145),v=e(168),m=e(9202),x=e(1087),Z=m.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0 20px;\n  gap: ",";\n"])),(function(n){return n.theme.countSize(2)})),w=m.Z.li(c||(c=(0,v.Z)(["\n  overflow: hidden;\n  border-radius: ",";\n  background-color: #707070;\n  width: 530px;\n  max-height: 375px;\n"])),(function(n){return n.theme.countSize(2)})),g=(0,m.Z)(x.rU)(a||(a=(0,v.Z)(["\n  display: flex;\n"]))),y=m.Z.img(u||(u=(0,v.Z)(["\n  width: 250px;\n"]))),b=m.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 5px;\n"]))),k=m.Z.p(o||(o=(0,v.Z)(["\n  margin-bottom: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.countSize(5)}),(function(n){return n.theme.countSize(8)}),(function(n){return n.theme.colors.fontColor})),_=m.Z.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: ",";\n"])),(function(n){return n.theme.countSize(3)})),j=m.Z.p(p||(p=(0,v.Z)(["\n  margin-bottom: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.countSize(5)}),(function(n){return n.theme.countSize(7)})),z=m.Z.p(f||(f=(0,v.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.countSize(5)})),S=m.Z.p(l||(l=(0,v.Z)(["\n  height: 130px;\n"])));function L(n){var t=n.split(" ");if(t.length>30){var e=t.slice(0,30);return"".concat(e.join(" "),"...")}return n}var R=e(184),H=function(n){var t=n.movies,e=(0,d.TH)();if(t)return(0,R.jsx)(Z,{children:t.map((function(n){var t=n.original_title,r=n.id,c=n.poster_path,a=n.vote_average,u=n.overview;return(0,R.jsx)(w,{children:(0,R.jsxs)(g,{to:"/movies/".concat(r),state:{from:e},children:[(0,R.jsx)(y,{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):h.Z,alt:t}),(0,R.jsxs)(b,{children:[(0,R.jsx)(k,{children:t}),(0,R.jsx)(j,{children:a}),(0,R.jsxs)(_,{children:[(0,R.jsx)(z,{children:"Description:"}),(0,R.jsx)(S,{children:L(u)})]})]})]})},r)}))})}},4145:function(n,t){t.Z="https://imgs.search.brave.com/IoYXsAeMX1UnHVPpwqcjWOwaSOwAPx9uT-Srs96mG8g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLW51enI0/Q2R5WVY0VGY4TGQt/R2U0WFV3LXQ1MDB4/NTAwLmpwZw"},5415:function(n,t,e){e.r(t);var r=e(5861),c=e(9439),a=e(4687),u=e.n(a),i=e(6713),o=e(931),s=e(2791),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1];return(0,s.useEffect)((function(){try{var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i._L)();case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){console.log(t)}return function(){a([])}}),[]),(0,p.jsx)(o.Z,{movies:e})}}}]);
//# sourceMappingURL=415.776253b2.chunk.js.map