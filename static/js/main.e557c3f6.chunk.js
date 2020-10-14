(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{169:function(e,a,t){e.exports=t(548)},173:function(e,a,t){},174:function(e,a,t){},548:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),l=t.n(o),c=(t(173),t(158)),s=t(159),m=t(168),i=t(167),d=t(97),u=t(38),h=(t(174),function(e){return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"data confirmed"},r.a.createElement("p",null,"Confirmed:"),r.a.createElement("p",{className:"num"},e.data.confirmed)),r.a.createElement("div",{className:"data deaths"},r.a.createElement("p",null,"Deaths:"),r.a.createElement("p",{className:"num"},e.data.deaths)),r.a.createElement("div",{className:"data recovered"},r.a.createElement("p",null,"Recovered:"),r.a.createElement("p",{className:"num"},e.data.recovered)))}),b=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement(u.b,{to:"/",exact:!0},r.a.createElement("button",{className:"button button-5"},r.a.createElement("div",{className:"translate"}),r.a.createElement("a",{href:!0},"Numbers"))),r.a.createElement(u.b,{to:"/chart"},r.a.createElement("button",{className:"button button-5"},r.a.createElement("div",{className:"translate"}),r.a.createElement("a",{href:!0},"Chart"))))},v=(t(179),function(){return r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"This page doesn't exist"))}),f=t(3),p=t(165),E=function(e){var a={labels:"",datasets:[],type:"line"};return a.labels=e.chartData.map((function(e){return e.Date.substring(0,10)})),a.datasets=[{label:"confirmed",data:e.chartData.map((function(e){return e.Confirmed})),backgroundColor:"rgb(163, 19, 48);",borderColor:"rgb(163, 19, 48);",borderWidth:1}],console.log(a),r.a.createElement("div",{className:"chart"},r.a.createElement(p.Line,{data:{labels:a.labels,datasets:[{label:"confirmed",data:e.chartData.map((function(e){return e.Confirmed})),borderColor:"rgb(163, 19, 48)",borderWidth:1},{label:"deaths",data:e.chartData.map((function(e){return e.Deaths})),borderColor:"rgb(46, 28, 32)",borderWidth:1},{label:"recovered",data:e.chartData.map((function(e){return e.Recovered})),borderColor:"rgb(23, 83, 8)",borderWidth:1}]},width:450,height:400,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))},g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:function(){return r.a.createElement(h,{data:e.data})}}),r.a.createElement(f.a,{path:"/chart",component:function(){return r.a.createElement(E,{chartData:e.chartData})}}),r.a.createElement(f.a,{path:"/",component:v})))},y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={country:"",time:"",data:{confirmed:"-",deaths:"-",recovered:"-"},chartData:[]},e.handleSubmit=function(a){if(a.preventDefault(),console.log("submit"),""!==e.state.country&&""!==e.state.time){var t=e.state.country.toLowerCase(),n=e.state.time,r=(new Date).getTime();r-=r%864e5;var o,l,c,s=new Date(r).toISOString();"yesterday"===n?o=r-1728e5:"last 7 days"===n?o=r-6048e5:"last 30 days"===n&&(o=r-2592e6),l="whole time"===n?"2020-02-26T00:00:00Z":new Date(o).toISOString(),"world"===t?(c="https://api.covid19api.com/world?from=".concat(l,"&to=").concat(s),fetch(c).then((function(e){return e.json()})).then((function(a){console.log(a);var t=a[a.length-1],n=a[0],r=n.TotalConfirmed-t.TotalConfirmed,o=n.TotalDeaths-t.TotalDeaths,l=n.TotalRecovered-t.TotalRecovered;console.log(r,o,l),e.setState({data:{confirmed:r,deaths:o,recovered:l},chartData:a})}))):(c="https://api.covid19api.com/country/".concat(t,"?from=").concat(l,"&to=").concat(s),fetch(c).then((function(e){return e.json()})).then((function(a){console.log(a);var t=a[0],n=a[a.length-1],r=n.Confirmed-t.Confirmed,o=n.Deaths-t.Deaths,l=n.Recovered-t.Recovered;console.log(r,o,l),e.setState({data:{confirmed:r,deaths:o,recovered:l},chartData:a})})))}else console.log("bad form")},e.handleFormChange=function(a){"yesterday"===a.value||"last 7 days"===a.value||"last 30 days"===a.value||"whole time"===a.value?e.setState({time:a.value}):e.setState({country:a.value})},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){console.log(this.state)}},{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement(d.a,{options:[{value:"Poland",label:"Poland"}],onChange:this.handleFormChange,isSearchable:!0,placeholder:"select country",className:"select"}),r.a.createElement(d.a,{options:[{value:"yesterday",label:"yesterday"},{value:"last 7 days",label:"last 7 days"},{value:"last 30 days",label:"last 30 days"},{value:"whole time",label:"whole time"}],onChange:this.handleFormChange,placeholder:"select time period",className:"select"}),r.a.createElement("button",{type:"submit",className:"button button-5"},r.a.createElement("div",{className:"translate"}),r.a.createElement("span",null,"Submit"))),r.a.createElement(b,null),r.a.createElement("div",{className:"results"},r.a.createElement(g,{data:this.state.data,chartData:this.state.chartData}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[169,1,2]]]);
//# sourceMappingURL=main.e557c3f6.chunk.js.map