"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[97],{6713:function(t,e,n){n.d(e,{IR:function(){return p},M1:function(){return d},Pg:function(){return f},_L:function(){return s},tx:function(){return l}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243),i="05daa517baabbb59954a8442a1286030",o=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("discover/movie?api_key=".concat(i,"&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},9097:function(t,e,n){n.r(e),n.d(e,{MovieReview:function(){return h}});var r,a=n(5861),c=n(9439),u=n(4687),i=n.n(u),o=n(6713),s=n(2791),p=n(7689),f=n(1056).format,d=n(168),l=n(9202).Z.li(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),v=n(184),h=function(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,p.UO)().id;return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.tx)(u);case 2:e=t.sent,n=e.results,r(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[u]),(0,v.jsx)("ul",{children:n.map((function(t){var e,n=t.author,r=t.content,a=t.created_at;return(0,v.jsxs)(l,{children:[(0,v.jsx)("h2",{children:n}),(0,v.jsx)("p",{children:r}),(0,v.jsx)("time",{dateTime:a,children:(e=a,f(new Date(e),"MMM dd p yyyy"))})]},n)}))})}}}]);
//# sourceMappingURL=97.06634d72.chunk.js.map