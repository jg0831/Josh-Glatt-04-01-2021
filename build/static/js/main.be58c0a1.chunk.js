(this.webpackJsonpjoshglatt=this.webpackJsonpjoshglatt||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(11),o=n.n(i),s=(n(76),n(77),n(46)),l=n(16),u=n.n(l),j=n(25),d=n(62),h=n(123),f=n(132),b=n(86),p=n(130),x=n(121),O=n(125),m=n(133),v=n(13),y=n(55),g=function(e,t){var n,a=Object(y.a)(e);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(c.LocalizedName===t)return c}}catch(r){a.e(r)}finally{a.f()}return!1},L=function(e){return e<10&&(e="0"+e.toString()),e},w=function(){alert("There was a problem with your request. Please Try again later.")},C="LYgqGvIdlOn6ARLt3MO7S9V8EF7oWX68",D=function(e){return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(C)).then((function(e){return e.json()})).catch((function(e){w(),console.log(e)}))},I=function(e){return fetch("https://dataservice.accuweather.com/forecasts/v1//daily/5day/".concat(e,"?apikey=").concat(C)).then((function(e){return e.json()})).catch((function(e){w(),console.log(e)}))},N=n(42),F=[{Version:1,Key:"212570",Type:"City",Rank:75,LocalizedName:"Raananna",EnglishName:"Raananna",PrimaryPostalCode:"",Region:{ID:"MEA",LocalizedName:"Middle East",EnglishName:"Middle East"},Country:{ID:"IL",LocalizedName:"Israel",EnglishName:"Israel"},AdministrativeArea:{ID:"M",LocalizedName:"Central District",EnglishName:"Central District",Level:1,LocalizedType:"District",EnglishType:"District",CountryID:"IL"},TimeZone:{Code:"IST",Name:"Asia/Jerusalem",GmtOffset:2,IsDaylightSaving:!1,NextOffsetChange:"2021-03-26T00:00:00Z"},GeoPosition:{Latitude:32.183,Longitude:34.87,Elevation:{Metric:{Value:40,Unit:"m",UnitType:5},Imperial:{Value:131,Unit:"ft",UnitType:0}}},IsAlias:!1,SupplementalAdminAreas:[],DataSets:["AirQualityCurrentConditions","AirQualityForecasts","Alerts","ForecastConfidence"]}],T=Object(N.b)({name:"rootReducer",initialState:{display:"home",location:{},currentWeather:{},fiveDay:[],optionList:[],favoriteLocations:F,locationSet:!1},reducers:{setLocation:function(e,t){e.location=t.payload,e.locationSet=!0},setCurrent:function(e,t){e.currentWeather=t.payload},setFiveDay:function(e,t){e.fiveDay=t.payload},setOptionList:function(e,t){e.optionList=t.payload},addFavorite:function(e,t){e.favoriteLocations.push(t.payload)},swapView:function(e,t){e.display=t.payload}}}),k=T.actions,E=k.addFavorite,A=k.setLocation,S=k.setOptionList,z=k.setCurrent,M=k.setFiveDay,K=k.swapView,P=T.reducer,V=function(){var e=Object(v.c)((function(e){return e.root})),t=Object(v.b)();return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)(f.a,{ml:3,children:Object(a.jsx)(x.a,{onClick:function(){"home"===e.display?t(K("favorites")):t(K("home"))},variant:"contained",color:"default",children:"home"===e.display?"Favorites":"Home"})})})};function W(){var e=Object(v.c)((function(e){return e.root})),t=Object(v.b)(),n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],o=r[1],l=function(e){e&&o(e.target.value)},y=function(e){e&&o(e.target.textContent)},L=function(){var e=Object(j.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=n,fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(C,"&q=").concat(c)).then((function(e){return e.json()})).catch((function(e){w(),console.log(e)}));case 2:return a=e.sent,e.next=5,t(t(S(a)));case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var n=Object(j.a)(u.a.mark((function n(){var a,c,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e.optionList,i);case 2:if(a=n.sent){n.next=7;break}return n.next=6,o=i,fetch("https://dataservice.accuweather.com/locations/v1/search?apikey=".concat(C,"&q=").concat(o)).then((function(e){return e.json()})).catch((function(e){w(),console.log(e)}));case 6:a=n.sent;case 7:return n.next=9,I(a.Key);case 9:return c=n.sent,n.next=12,D(a.Key);case 12:return r=n.sent,n.next=15,t(t(A(a)));case 15:return n.next=17,t(t(M(c)));case 17:return n.next=19,t(t(z(r)));case 19:return n.next=21,t(K("home"));case 21:case"end":return n.stop()}var o}),n)})));return function(){return n.apply(this,arguments)}}();Object(c.useEffect)((function(){i.length>=2&&L(i)}),[i]);return Object(a.jsx)("header",{children:Object(a.jsx)(O.a,{position:"relative",children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(f.a,{mr:1,children:[" ",Object(a.jsx)(b.a,{variant:"h5",children:" Weather App"})]}),Object(a.jsx)(f.a,{mr:1,children:Object(a.jsx)(m.a,{id:"combo-box-demo",options:e.optionList.map((function(e){return e.LocalizedName})),onChange:y,style:{width:300},renderInput:function(e){return Object(a.jsx)(p.a,Object(s.a)(Object(s.a)({},e),{},{value:i,onChange:l,label:"Enter Location",variant:"outlined"}))}})}),Object(a.jsx)(x.a,{onClick:function(){return N()},variant:"contained",color:"default",children:"Submit"}),Object(a.jsx)(V,{})]})})})}var R=n(61),q=n(134),U=n(87),G=n(126),J=n(135),B=function(e){var t=e.forecast,n=Object(R.a)();n=Object(q.a)(n);var c="https://developer.accuweather.com/sites/default/files/".concat(L(t.WeatherIcon),"-s.png");return Object(a.jsx)(U.a,{elevation:3,children:Object(a.jsx)(f.a,{m:1,p:5,children:Object(a.jsx)(G.a,{theme:n,children:Object(a.jsxs)(f.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:.5,children:[Object(a.jsx)(b.a,{variant:"h4",children:"Current Conditions"}),Object(a.jsx)(J.a,{alt:"weather icon",src:c}),Object(a.jsxs)(b.a,{children:["Conditions: ",t.WeatherText," "]}),Object(a.jsx)(f.a,{p:.5,children:Object(a.jsxs)(b.a,{children:[t.Temperature.Imperial.Value,"\xb0 F"]})}),Object(a.jsx)(f.a,{p:.5,children:Object(a.jsxs)(b.a,{children:[t.Temperature.Metric.Value,"\xb0 C"]})})]})})})})},Q=function(e){var t=e.forecast,n=Object(R.a)();n=Object(q.a)(n);var c,r="https://developer.accuweather.com/sites/default/files/".concat(L(t.Day.Icon),"-s.png"),i="https://developer.accuweather.com/sites/default/files/".concat(L(t.Night.Icon),"-s.png");return Object(a.jsx)(U.a,{elevation:3,children:Object(a.jsx)(f.a,{p:5,children:Object(a.jsxs)(G.a,{theme:n,children:[Object(a.jsx)(f.a,{p:.5,children:Object(a.jsx)(b.a,{variant:"h4",children:(c=t.Date,c=new Date(c),new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(c))})}),Object(a.jsx)(f.a,{p:.5,children:Object(a.jsxs)(b.a,{children:["Min Temp: ",t.Temperature.Minimum.Value]})}),Object(a.jsx)(f.a,{p:.5,children:Object(a.jsxs)(b.a,{children:["Max Temp: ",t.Temperature.Maximum.Value]})}),Object(a.jsxs)(f.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:.5,children:[Object(a.jsx)(b.a,{variant:"h5",children:"Day"}),Object(a.jsx)(J.a,{alt:"weather icon",src:r}),Object(a.jsxs)(b.a,{children:["Conditions: ",t.Day.IconPhrase," "]})]}),Object(a.jsxs)(f.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:.5,children:[Object(a.jsx)(b.a,{variant:"h5",children:"Night"}),Object(a.jsx)("img",{alt:"weather icon",src:i}),Object(a.jsxs)(b.a,{children:["Conditions: ",t.Night.IconPhrase," "]})]})]})})})},Z=n(127),H=function(){var e=Object(v.c)((function(e){return e.root}));return Object(a.jsx)(r.a.Fragment,{children:e.fiveDay.DailyForecasts&&Object(a.jsx)(Z.a,{spacing:3,container:!0,display:"grid",direction:"row",justify:"center",alignItems:"center",className:"container",children:e.fiveDay.DailyForecasts.map((function(e){return Object(a.jsx)(Z.a,{item:!0,xs:2,children:Object(a.jsx)(Q,{forecast:e},e.EpochDate)})}))})})};var X=function(){var e=Object(v.c)((function(e){return e.root})),t=Object(v.b)(),n=function(){var e=Object(j.a)(u.a.mark((function e(){var n,a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation?new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})):{lat:32.0869,long:34.80149};case 2:return n=e.sent,e.next=5,i=n.coords.latitude,o=n.coords.longitude,fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(C,"&q=").concat(i,",").concat(o)).then((function(e){return e.json()})).catch((function(e){w(),console.log(e)}));case 5:return a=e.sent,e.next=8,I(a.Key);case 8:return c=e.sent,e.next=11,D(a.Key);case 11:return r=e.sent,e.next=14,t(t(A(a)));case 14:return e.next=16,t(t(M(c)));case 16:return e.next=18,t(t(z(r)));case 18:case"end":return e.stop()}var i,o}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){e.locationSet||n()}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(Z.a,{container:!0,spacing:5,display:"grid",direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsx)(Z.a,{item:!0,children:e.location.LocalizedName&&Object(a.jsxs)(f.a,{pt:1,children:[Object(a.jsxs)(b.a,{variant:"h4",children:[" ","Weather for "+e.location.LocalizedName+", "+e.location.Country.LocalizedName]}),Object(a.jsx)(x.a,{onClick:function(){return function(){var n=!1;e.favoriteLocations.forEach((function(t){e.location.Key===t.Key&&(n=!0,alert("Location already saved to Favorites"))})),n||(t(E(e.location)),alert("Location saved to Favorites"))}()},variant:"contained",color:"default",children:"Add Location to Favorites"})]})}),e.currentWeather[0]&&Object(a.jsx)(Z.a,{item:!0,lg:3,children:Object(a.jsx)(B,{forecast:e.currentWeather[0]})}),Object(a.jsx)(Z.a,{item:!0,lg:12,children:Object(a.jsx)(H,{})})]})})},Y=n(128),$=function(e){var t=e.favorite,n=e.listNumber,c=Object(R.a)();c=Object(q.a)(c);var r=Object(v.b)(),i=function(){var e=Object(j.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t.Key);case 2:return a=e.sent,e.next=5,D(t.Key);case 5:return c=e.sent,e.next=8,r(r(A(t)));case 8:return e.next=10,r(r(M(a)));case 10:return e.next=12,r(r(z(c)));case 12:return e.next=14,r(K("home"));case 14:n.preventDefault();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(f.a,{m:3,children:Object(a.jsx)(G.a,{theme:c,children:Object(a.jsx)(U.a,{elevation:3,children:Object(a.jsxs)(f.a,{p:3,display:"flex",direction:"row",children:[Object(a.jsxs)(b.a,{variant:"h5",children:[n,"."]}),Object(a.jsx)(Y.a,{href:"#",onClick:i,children:Object(a.jsxs)(b.a,{variant:"h5",children:[t.LocalizedName,", ",t.Country.LocalizedName]})})]})})})})},_=function(e){var t=e.favorites,n=Object(R.a)();return n=Object(q.a)(n),Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)(G.a,{theme:n,children:[Object(a.jsx)(f.a,{mt:2,mb:5,children:Object(a.jsx)(b.a,{variant:"h3",children:"Favorites"})}),Object(a.jsx)(Z.a,{spacing:3,container:!0,display:"grid",direction:"column",justify:"center",alignItems:"center",className:"container",children:t.map((function(e,t){return Object(a.jsx)($,{listNumber:t+1,favorite:e},e.Key)}))})]})})},ee=n(129);var te=function(){var e=Object(v.c)((function(e){return e.root}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(ee.a,{}),Object(a.jsx)(W,{lg:12}),"home"===e.display?Object(a.jsx)(X,{}):Object(a.jsx)(_,{favorites:e.favoriteLocations})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ae=n(15),ce=Object(ae.c)({root:P}),re=Object(N.a)({reducer:ce});o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v.a,{store:re,children:Object(a.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[83,1,2]]]);
//# sourceMappingURL=main.be58c0a1.chunk.js.map