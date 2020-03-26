(this["webpackJsonpcorona-prediction-analytics"]=this["webpackJsonpcorona-prediction-analytics"]||[]).push([[0],{129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);t(98),t(106),t(107);var n=t(0),l=t.n(n),c=t(90),r=t.n(c),s=t(2),i=t(11),o=t(52),m=t.n(o),u={countries:"".concat("/api/","countries"),country_predictions:"".concat("/api/","country/predictions")},d="".concat("/","static/static/media/homeImage.87ae5d21.png"),E="".concat("/","static/static/media/resourcesImage.9535de54.png"),f=t(34);var h=function(e,a){var t=a.payload;switch(a.type){case"SET_COUNTRIES":return Object(f.a)({},e,{countries:t.countries});case"SET_PREDICTIONS":return Object(f.a)({},e,{predictions:t.predictions});case"SET_OFFILINE":return Object(f.a)({},e,{is_offline:t.is_offline});default:return e}},p={is_offline:!1,countries:{data:[],has_error:!1},predictions:{deaths:[],cases:[],has_error:!1}},v=Object(n.createContext)(p);function b(e){var a=e.children,t=Object(n.useReducer)(h,p),c=Object(i.a)(t,2),r=c[0],s=c[1];var o={is_offline:r.is_offline,countries:r.countries,predictions:r.predictions,fetchCountries:function(){return new Promise((function(e,a){var t={data:[],has_error:!1};m.a.get(u.countries).then((function(a){t.data=a.data.countries,e(t)})).catch((function(e){t.has_error=!0,a({err:e,countries:t})}))}))},setCountries:function(e){s({type:"SET_COUNTRIES",payload:{countries:e}})},fetchPredictions:function(e){return new Promise((function(a,t){var n={deaths:[],cases:[],recovered:[],has_error:!1};m.a.get("".concat(u.country_predictions,"/").concat(e)).then((function(e){var t=e.data.predictions,l=t.deaths,c=t.cases,r=t.recovered;n.deaths=l,n.cases=c,n.recovered=r,a(n)})).catch((function(e){n.has_error=!0,t({err:e,predictions:n})}))}))},setPredictions:function(e){s({type:"SET_PREDICTIONS",payload:{predictions:e}})},getCountry:function(e){return r.countries.data.filter((function(a){return a.id===e}))[0]||null},setOffline:function(e){s({type:"SET_OFFILINE",payload:{is_offline:e}})}};return l.a.createElement(v.Provider,{value:o},a)}t(129),t(130),t(131);var N=t(17),g=t(91),y=t(92),k=t(95),w=t(96),C=(t(132),function(e){Object(w.a)(t,e);var a=Object(k.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={loaded:!1,error:!1},e}return Object(y.a)(t,[{key:"handleLoad",value:function(){this.setState({loaded:!0})}},{key:"handleError",value:function(){this.setState({error:!0})}},{key:"componentDidMount",value:function(){}},{key:"Loading",value:function(e){return e?null:l.a.createElement("small",null,"...")}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.loaded;return t?null:l.a.createElement("div",{className:"full-height-width"},this.Loading(n),l.a.createElement("img",{alt:"",style:{opacity:n?1:0},src:this.props.src,onLoad:function(){return e.handleLoad()},onError:function(){return e.handleError()}}))}}]),t}(n.Component));var O=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"title"}," Covid-19 Ai Predictions "),l.a.createElement("p",{className:"paragraph"},"Hello visitor, we've took the initiative to create predictions for countries infected. Feel free to take a closer look at  the graphs.",l.a.createElement("br",null),"Be aware of what we might get ourselves into, if we keep on neglecting the dangers of the current situation.",l.a.createElement("br",null),"#StaySafe"),l.a.createElement("div",{className:"btns"},l.a.createElement(s.b,{to:"/predictions",className:"btn-primary hg"},"Predictions"),l.a.createElement(s.b,{to:"/about",className:"btn-outline-primary hg"},"About us"))),l.a.createElement("div",{className:"image"},l.a.createElement(C,{src:d})))};function S(e){if(e<1e3)return e;if(e>=1e6){var a=Math.trunc(e/1e6),t=Math.trunc(e%1e6/1e3);return 0===t?"".concat(a,"M"):"".concat(a,",").concat(t,"M")}if(e>=1e3){var n=Math.trunc(e/1e3),l=Math.trunc(e%1e3/100);return 0===l?"".concat(n,"K"):"".concat(n,",").concat(l,"K")}}function _(e){switch(e){case"03/02":return"Mars";case"04/01":return"April";case"05/01":return"May";case"06/01":return"June";default:return null}}var j=function(e){var a=e.id,t=e.image,n=e.continent,c=e.name,r=e.deaths,i=e.cases;return l.a.createElement("div",{className:"country-card"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"image"},l.a.createElement(C,{src:t.src})),l.a.createElement("div",{className:"name"},l.a.createElement("h4",null,c),l.a.createElement("small",null,n))),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"info"},l.a.createElement("small",null,S(r)),l.a.createElement("span",null,"Deaths")),l.a.createElement("div",{className:"info"},l.a.createElement("small",null,S(i)),l.a.createElement("span",null,"Infections")),l.a.createElement(s.b,{to:"/predictions/country/".concat(a),className:"btn-primary small round "},"See more ",l.a.createElement("i",{className:"right fa fa-arrow-right"})," ")))};var I=function(){var e=Object(n.useContext)(v).countries,a=e.data;return e.has_error?l.a.createElement("div",{className:"countries"},l.a.createElement("h1",{className:"title"}," Available countries "),l.a.createElement("div",{className:"error"},"Oops, something went wrong while loading countries. Repeate later please !")):a&&0===a.length?l.a.createElement("div",{className:"countries"},l.a.createElement("h1",{className:"title"}," Infected countries "),l.a.createElement("div",{className:"error"},"Oops, we still have no data to display")):l.a.createElement("div",{className:"countries"},l.a.createElement("h1",{className:"title"}," Infected countries "),l.a.createElement("div",{className:"container"},a.map((function(e){return l.a.createElement(j,Object.assign({key:e.id},e))}))))},L=t(55),x=t.n(L);var M=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useContext)(v),c=t.getCountry,r=t.predictions,o=t.setPredictions,m=t.fetchPredictions,u=Object(n.useState)(!0),d=Object(i.a)(u,2),E=d[0],f=d[1],h=Object(n.useState)(null),p=Object(i.a)(h,2),b=p[0],g=p[1],y=Object(n.useState)([{month:"Mars",deaths:0,cases:0},{month:"April",deaths:0,cases:0},{month:"May",deaths:0,cases:0},{month:"June",deaths:0,cases:0}]),k=Object(i.a)(y,2),w=k[0],C=k[1],O=Object(N.f)().id;if(Object(n.useEffect)((function(){g(c(Number(O))),m(O).then((function(e){o(e),f(!1),C(function(e){for(var a=[],t=e.deaths,n=e.cases,l=0;l<t.length;l++){var c=_(t[l].date);c&&a.push({month:c,deaths:"June"!==c?Math.trunc(.5*(t[l].y+t[l+29].y)):t[l].y,cases:"June"!==c?Math.trunc(.5*(n[l].y+n[l+29].y)):n[l].y})}return a}(e))})).catch((function(e){e.err;var a=e.predictions;o(a),f(!1)}))}),[]),Object(n.useEffect)((function(){if(!E&&!r.has_error){var t=[{label:"Infections",borderColor:"rgba(83, 109, 254, .6)",color:"rgba(83, 109, 254, .6)",pointBorderColor:"rgba(83, 109, 254, .6)",pointBackgroundColor:"rgba(83, 109, 254, .6)",fill:!0,showLine:!0,backgroundColor:"rgba(83, 109, 254, .6)",data:r.cases},{label:"Deaths",borderColor:"tomato",pointBorderColor:"tomato",pointBackgroundColor:"tomato",fill:!0,showLine:!0,backgroundColor:"tomato",data:r.deaths}],n=(new x.a(e.current,{type:"scatter",data:{datasets:t},options:{tooltips:{callbacks:{title:function(e){var a=r.deaths[e[0].xLabel].date,t=_(a);return t||"Date: ".concat(a)},label:function(e){return" "+e.yLabel.toLocaleString()}}},elements:{point:{radius:1}},legend:{labels:{fontColor:"black",fontSize:14}},responsive:!0,scales:{xAxes:[{gridLines:{zeroLineColor:"transparent"},ticks:{autoSkip:!1,stepSize:1,min:0,max:92,padding:20,fontSize:14,fontColor:"rgba(0,0,0,0.5)",callback:function(e,a){return _(r.cases[a].date)},fontStyle:"bold"}}],yAxes:[{ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,padding:20,callback:function(e){return e.toLocaleString()}},gridLines:{padding:20,zeroLineColor:"transparent"}}]}}}),b.deaths),l=b.cases;new x.a(a.current,{type:"doughnut",data:{datasets:[{data:[n,l],fill:!0,backgroundColor:["tomato","rgba(83, 109, 254, 1)"]}],labels:["Deaths","Cases"]},options:{legend:{labels:{fontColor:"black",fontSize:14}},cutoutPercentage:50}})}}),[E]),E)return l.a.createElement("div",{className:"predictions"},l.a.createElement("div",{className:"loading"},"Loading"));if(b&&!E){var S=b.name,j=b.deaths,I=b.cases;return r&&r.has_error?l.a.createElement("div",{className:"predictions"},l.a.createElement("div",{className:"top-bar"},l.a.createElement(s.b,{to:"/predictions",className:"btn-back icon-only"},l.a.createElement("i",{className:"fa fa-arrow-left"})," "),l.a.createElement("h1",{className:"title"},"Predictions of the number of infected cases in ",S," ( Mars - June )")),l.a.createElement("div",{className:"error"},"Oops, something went wrong while loading data. Repeate later please !")):l.a.createElement("div",{className:"predictions"},l.a.createElement("div",{className:"top-bar"},l.a.createElement(s.b,{to:"/predictions",className:"btn-back icon-only"},l.a.createElement("i",{className:"fa fa-arrow-left"})," "),l.a.createElement("h1",{className:"title"},"Predictions of the number of infected cases in ",S," ( Mars - June )")),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"chart-infos"},l.a.createElement("div",{className:"chart"},l.a.createElement("canvas",{width:"120%",height:"80%",ref:e})),l.a.createElement("div",{className:"infos"},l.a.createElement("h3",null,"Total:  ",I+j," "),l.a.createElement("canvas",{width:"120%",height:"100%",ref:a}))),l.a.createElement("h1",{className:"title"},"Months predictions"),l.a.createElement("div",{className:"table-3"},l.a.createElement("div",{className:"line"},l.a.createElement("span",null," ",l.a.createElement("small",{className:"bold-md"},"Month")," "),l.a.createElement("span",null," ",l.a.createElement("small",{className:"bold-md"},"Infections")," "),l.a.createElement("span",null," ",l.a.createElement("small",{className:"bold-md"},"Deaths")," ")),w.map((function(e,a){var t=e.month,n=e.deaths,c=e.cases;return l.a.createElement("div",{key:a,className:"line"},l.a.createElement("span",null," ",l.a.createElement("small",{className:"bold-md"},t)," "),l.a.createElement("span",null," ",l.a.createElement("small",null,c>=0?c.toLocaleString():0)," "),l.a.createElement("span",null," ",l.a.createElement("small",null,n>=0?n.toLocaleString():0)," "))})))))}return l.a.createElement(N.a,{to:"/"})};var A=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",{className:"title"},"About us"),l.a.createElement("p",{className:"paragraph"},"This is a project dedicated to the current situations and to make people aware of how severe it might get. We've used machine learning skills to predict the confirmed cases/deaths in infected countries with Covid-19. The data and predictions will be updated daily according to the newly confirmed cases and deaths.",l.a.createElement("br",null),"Stay safe everyone we will get through this together."),l.a.createElement("div",{className:"developers"},l.a.createElement("div",{className:"dev-card"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"image"},l.a.createElement(C,{src:"https://media-exp1.licdn.com/dms/image/C5603AQHEW91Z02rjbw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=Xw1TVC-TI_WEaErIUGoCIG7nL5jMrrcEqZkQD5xVVPE"})),l.a.createElement("div",{className:"name"},l.a.createElement("h3",null,"Seif Gharres"),l.a.createElement("small",null,"Web developer / designer"))),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"Who am i ?"),l.a.createElement("span",null)),l.a.createElement("p",{className:"paragraph"},"I'm a highly motivated web developer / designer who focuses on writing clean, elegant and efficient code."),l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"Skills"),l.a.createElement("span",null)),l.a.createElement("div",{className:"skills"},l.a.createElement("small",{className:"counted"},"Python ( Django )"),l.a.createElement("small",{className:"counted"},"JavaScript ( ReactJs )"),l.a.createElement("small",{className:"counted"},"Sass, Css, Html")),l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"contact"),l.a.createElement("span",null)),l.a.createElement("div",{className:"contact"},l.a.createElement("small",{className:"counted"}," For Business inquiries"),l.a.createElement("span",{className:"mail"},"seifgharrese.developer@gmail.com"),l.a.createElement("small",{className:"counted"},"Follow me on"),l.a.createElement("div",{className:"socials"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/seif-gharres-977795172/",className:"social-icon icon-only fc"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100010376260550",target:"_blank",rel:"noopener noreferrer",className:"social-icon icon-only li"},l.a.createElement("i",{className:"fab fa-facebook-square"})),l.a.createElement("a",{href:"https://github.com/seifgh",target:"_blank",rel:"noopener noreferrer",className:"social-icon icon-only gi"},l.a.createElement("i",{className:"fab fa-github-square"})))))),l.a.createElement("div",{className:"dev-card"},l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",{className:"image"},l.a.createElement(C,{src:"https://media-exp1.licdn.com/dms/image/C4D03AQGH1DbWn55Sxw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=eeXkxOU23N9M1Zw-HmPQRhGmDVza19b_aw3n71WcIiY"})),l.a.createElement("div",{className:"name"},l.a.createElement("h3",null,"Ramsis Hammadi"),l.a.createElement("small",null,"Data Analyst"))),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"Who am i ?"),l.a.createElement("span",null)),l.a.createElement("p",{className:"paragraph"},"I'm a machine learning/deep learning enthusiast. I work extensively on Open-cv and Tensorflow."),l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"Skills"),l.a.createElement("span",null)),l.a.createElement("div",{className:"skills"},l.a.createElement("small",{className:"counted"},"Python"),l.a.createElement("small",{className:"counted"},"Machine Learning/Deep learning"),l.a.createElement("small",{className:"counted"},"Data visualization with R")),l.a.createElement("div",{className:"sub-title"},l.a.createElement("small",null,"contact"),l.a.createElement("span",null)),l.a.createElement("div",{className:"contact"},l.a.createElement("small",{className:"counted"}," For Business inquiries"),l.a.createElement("span",{className:"mail"},"ramsishammadi@gmail.com"),l.a.createElement("small",{className:"counted"},"Follow me on"),l.a.createElement("div",{className:"socials"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/hammadi-ramsis-799b231a3/",className:"social-icon icon-only fc"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/ramsis.benhammadi/",className:"social-icon icon-only li"},l.a.createElement("i",{className:"fab fa-facebook-square"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Rams901",className:"social-icon icon-only gi"},l.a.createElement("i",{className:"fab fa-github-square"}))))))))};var P=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"title"}," Our resources"),l.a.createElement("p",{className:"paragraph"},"We've used the publicly-available data from the Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU).",l.a.createElement("br",null),l.a.createElement("br",null),"Copyright \xa9 2020 Covid-19 Ai predictions TN. All Rights Reserved.")),l.a.createElement("div",{className:"image"},l.a.createElement(C,{src:E})))};var D=function(){var e=Object(n.useContext)(v),a=e.setCountries,t=e.fetchCountries,c=e.setOffline,r=e.is_offline,s=Object(n.useState)(!0),o=Object(i.a)(s,2),m=o[0],u=o[1];return Object(n.useEffect)((function(){t().then((function(e){a(e),u(!1)})).catch((function(e){e.err;var t=e.countries;a(t),u(!1)})),c(!navigator.onLine),window.addEventListener("offline",(function(){c(!0)})),window.addEventListener("online",(function(){c(!1)}))}),[]),m?l.a.createElement("main",null," ",l.a.createElement("div",{className:"loading"},"Loading")," "):l.a.createElement("main",null,l.a.createElement(N.b,{exact:!0,path:"/",component:O}),l.a.createElement(N.b,{exact:!0,path:"/predictions",component:I}),l.a.createElement(N.b,{exact:!0,path:"/predictions/country/:id",component:M}),l.a.createElement(N.b,{exact:!0,path:"/about",component:A}),l.a.createElement(N.b,{exact:!0,path:"/resources",component:P}),l.a.createElement("div",{className:"hash".concat(r?" hide":"")},l.a.createElement("h4",null,"#stayAtHome"),l.a.createElement("h4",null,"#staySafe")),l.a.createElement("div",{className:"notifier".concat(r?" show":"")},l.a.createElement("p",null,"Oops, looks like you're offline !")))};var R=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1];return l.a.createElement("aside",{className:""},l.a.createElement("div",{className:"top-bar"},l.a.createElement(s.b,{to:"/",className:"logo"},l.a.createElement("h1",null,"COVID-19"),l.a.createElement("div",null,l.a.createElement("h3",null,"AI predictions"))),l.a.createElement("div",{onClick:function(){return c(!t)},className:"icon-menu".concat(t?" active":"")},l.a.createElement("i",{className:"fa fa-stream"}))),l.a.createElement("div",{className:"links".concat(t?" show":"")},l.a.createElement(s.c,{onClick:function(){return c(!t)},activeClassName:"link active",className:"link",exact:!0,to:"/"}," ",l.a.createElement("i",{className:"fas fa-home"})," Home"),l.a.createElement(s.c,{onClick:function(){return c(!t)},activeClassName:"link active",className:"link",to:"/predictions"}," ",l.a.createElement("i",{className:"fa fa-chart-line"})," Predictions"),l.a.createElement(s.c,{onClick:function(){return c(!t)},activeClassName:"link active",className:"link",to:"/about"}," ",l.a.createElement("i",{className:"fas fa-question-circle"})," About us"),l.a.createElement(s.c,{onClick:function(){return c(!t)},activeClassName:"link active",className:"link",to:"/resources"}," ",l.a.createElement("i",{className:"fa fa-file-alt"})," Resources")))};var T=function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(R,null),l.a.createElement(D,null))))};t(139);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root"))},97:function(e,a,t){e.exports=t(182)}},[[97,1,2]]]);
//# sourceMappingURL=main.2dde8792.chunk.js.map