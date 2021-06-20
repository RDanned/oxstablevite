var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,o)=>{for(var l in o||(o={}))a.call(o,l)&&s(e,l,o[l]);if(t)for(var l of t(o))r.call(o,l)&&s(e,l,o[l]);return e};import{E as l,o as n,c as i,F as d,r as c,t as u,m,a as p,b as h,w as b,v as g,u as v,d as y,n as f,e as $,f as w,g as S,p as k,h as x,i as N,j as _,k as A,l as D,q as T,s as P,x as C,y as j,z as q,_ as O,A as E,B as V,V as z}from"./vendor.d709ba8d.js";l.defaults.baseURL="https://www.filltext.com";var L=e=>l.get("/",{params:{rows:e,id:"{number|1000}",firstName:"{firstName}",lastName:"{lastName}",email:"{email}",phone:"{phone|(xxx)xxx-xx-xx}",address:"{addressObject}",description:"{lorem|32}",address:"{streetAddress}",city:"{city}",state:"{usState|abbr}",zip:"{zip}"}}).then((e=>e.data));const U="[data] Set data",R="[data] Set sort",I="[data] Set page",B="[data] Set search string",F="[data] Set selected",M="[data] Set sort",G="[data] Set page",H="[data] Set search string",J="[data] Add row",K="[data] Set data",Q="[data] Set selected";var W={state:{data:[],sort:{by:null,direction:null},page:1,pageSize:50,searchString:"",selected:null},actions:{[K](e,{data:t}){e.commit(U,{data:t})},["[data] Load data"]:(e,{count:t})=>new Promise((a=>{L(t).then((t=>{e.commit(U,{data:t}),a(t)}))})),[M](e,{by:t,direction:a}){e.commit(R,{sort:{by:t,direction:a}})},[G](e,{page:t}){e.commit(I,{page:t})},[H](e,{searchString:t}){e.commit(B,{searchString:t})},[J](e,{row:t}){e.commit(U,{data:[o({},t),...e.state.data]})},[Q](e,{selected:t}){e.commit(F,{selected:t})}},mutations:{[U](e,t){e.data=t.data},[R](e,t){e.sort=t.sort},[I](e,t){e.page=t.page},[B](e,t){e.searchString=t.searchString},[F](e,t){e.selected=t.selected}},getters:{getProcessedData:function(e){let t=e.data,a=e.sort,r=e.page,s=e.pageSize,o=e.searchString;o&&(t=t.filter((e=>{let t=Object.values(e).join(" "),a=new RegExp(`(${o})`,"gi");return-1!=t.search(a)}))),a.by&&a.direction&&t.sort((function(e,t){if("string"==typeof e[a.by]){if("desc"==a.direction)return e[a.by]<t[a.by]?1:-1;if("asc"==a.direction)return e[a.by]<t[a.by]?-1:1}else if("number"==typeof e[a.by]){if("asc"==a.direction){if(e[a.by]>t[a.by])return-1;if(e[a.by]<t[a.by])return 1}else{if(e[a.by]<t[a.by])return-1;if(e[a.by]>t[a.by])return 1}return 0}}));let l=Math.ceil(t.length/s);return t=t.slice((r-1)*s,(r-1)*s+s),{data:t,pageCount:l}}}};const X={name:"DataTableRow",props:{row:Object,collumns:Array},methods:{select:function(){this.$store.dispatch(Q,{selected:this.row}),document.getElementById("detail").scrollIntoView()}}};X.render=function(e,t,a,r,s,o){return n(),i("tr",{onClick:t[1]||(t[1]=(...e)=>o.select&&o.select(...e))},[(n(!0),i(d,null,c(a.collumns,(e=>(n(),i("td",{key:e},u(a.row[e]),1)))),128))])};const Y={name:"DataTablePagination",props:{pageCount:{type:Number}},computed:o({},m({currentPage:e=>e.data.page})),methods:{changePage:function(e){let t=e.currentTarget.dataset.page;this.$store.dispatch(G,{page:t})}}},Z={key:0,class:"pagination"};Y.render=function(e,t,a,r,s,o){return n(),i("nav",null,[a.pageCount?(n(),i("ul",Z,[(n(!0),i(d,null,c(a.pageCount,(a=>(n(),i("li",{class:["page-item",{active:a==e.currentPage}],key:a},[h("span",{class:"page-link","data-page":a,onClick:t[1]||(t[1]=(...e)=>o.changePage&&o.changePage(...e))},u(a),9,["data-page"])],2)))),128))])):p("",!0)])};const ee={name:"DataTableSearch",data:()=>({searchString:""}),methods:{search:function(){this.$store.dispatch(H,{searchString:this.searchString})},reset:function(){this.searchString="",this.$store.dispatch(H,{searchString:""})}}},te={class:"row search"},ae={class:"col-4"},re={class:"col-2 search__submit"},se={class:"col-2 search__reset"};ee.render=function(e,t,a,r,s,o){return n(),i("div",te,[h("div",ae,[b(h("input",{id:"search_field",type:"text",class:"form-control search__input","onUpdate:modelValue":t[1]||(t[1]=e=>s.searchString=e),placeholder:"your search string"},null,512),[[g,s.searchString]])]),h("div",re,[h("input",{type:"submit",value:"Search",class:"form-control col-3",onClick:t[2]||(t[2]=(...e)=>o.search&&o.search(...e))})]),h("div",se,[h("input",{type:"reset",value:"Reset",class:"form-control col-3",onClick:t[3]||(t[3]=(...e)=>o.reset&&o.reset(...e))})])])};const oe={name:"DataTableSearch",props:{collumns:{type:Array}},data:()=>({v$:v(),isAdding:!1,row:{id:"",firstName:"",lastName:"",email:"",phone:""}}),validations:()=>({row:{id:{required:y,numeric:f},firstName:{required:y},lastName:{required:y},email:{required:y,email:$},phone:{required:y}}}),methods:{save:function(){if(this.v$.$touch(),!this.v$.$error){this.row.id=Number(this.row.id),this.$store.dispatch(J,{row:this.row});for(let e in this.row)this.row[e]="";this.v$.$reset(),this.toggleAdd()}},toggleAdd:function(){this.isAdding=!this.isAdding}}},le={class:"col-12 d-flex justify-content-center flex-column"},ne={key:1,class:"table table-bordered"},ie=w(" id "),de={key:0},ce=w(" firstName "),ue={key:0},me=w(" lastName "),pe={key:0},he=w(" email "),be={key:0},ge=w(" phone "),ve={key:0};oe.render=function(e,t,a,r,s,o){const l=S("mask");return n(),i("div",le,[s.isAdding?p("",!0):(n(),i("button",{key:0,class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>o.toggleAdd&&o.toggleAdd(...e))}," add new row ")),s.isAdding?(n(),i("table",ne,[h("thead",null,[h("tr",null,[h("th",{class:[{"text-danger":s.v$.row.id.$error}]},[ie,s.v$.row.id.$error?(n(),i("span",de," (must be numeric and required) ")):p("",!0)],2),h("th",{class:[{"text-danger":s.v$.row.firstName.$error}]},[ce,s.v$.row.firstName.$error?(n(),i("span",ue," (required) ")):p("",!0)],2),h("th",{class:[{"text-danger":s.v$.row.lastName.$error}]},[me,s.v$.row.lastName.$error?(n(),i("span",pe," (required) ")):p("",!0)],2),h("th",{class:[{"text-danger":s.v$.row.email.$error}]},[he,s.v$.row.email.$error?(n(),i("span",be," (must be email and required) ")):p("",!0)],2),h("th",{class:[{"text-danger":s.v$.row.phone.$error}]},[ge,s.v$.row.phone.$error?(n(),i("span",ve," (required) ")):p("",!0)],2)])]),h("tbody",null,[h("tr",null,[h("td",null,[b(h("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>s.v$.row.id.$model=e),class:["form-control",{"is-invalid":s.v$.row.id.$error}]},null,2),[[g,s.v$.row.id.$model,void 0,{trim:!0}]])]),h("td",null,[b(h("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>s.v$.row.firstName.$model=e),class:["form-control",{"is-invalid":s.v$.row.firstName.$error}]},null,2),[[g,s.v$.row.firstName.$model,void 0,{trim:!0}]])]),h("td",null,[b(h("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>s.v$.row.lastName.$model=e),class:["form-control",{"is-invalid":s.v$.row.lastName.$error}]},null,2),[[g,s.v$.row.lastName.$model,void 0,{trim:!0}]])]),h("td",null,[b(h("input",{type:"email","onUpdate:modelValue":t[5]||(t[5]=e=>s.v$.row.email.$model=e),class:["form-control",{"is-invalid":s.v$.row.email.$error}]},null,2),[[g,s.v$.row.email.$model,void 0,{trim:!0}]])]),h("td",null,[b(h("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>s.v$.row.phone.$model=e),class:["form-control",{"is-invalid":s.v$.row.phone.$error}]},null,2),[[g,s.v$.row.phone.$model,void 0,{trim:!0}],[l,"(###)###-####"]])])])])])):p("",!0),s.isAdding?(n(),i("button",{key:2,class:"btn btn-primary mb-4",onClick:t[7]||(t[7]=(...e)=>o.save&&o.save(...e))}," save ")):p("",!0)])};const ye={name:"DataTablePreloader"},fe=N();k("data-v-5b007746");const $e={class:"preloader__wrapper"},we=_('<div class="loading" data-v-5b007746><div class="dot" data-v-5b007746></div><div class="dot" data-v-5b007746></div><div class="dot" data-v-5b007746></div><div class="dot" data-v-5b007746></div><div class="dot" data-v-5b007746></div></div>',1);x();const Se=fe(((e,t,a,r,s,o)=>(n(),i("div",$e,[we]))));ye.render=Se,ye.__scopeId="data-v-5b007746";const ke={name:"DataTableSelected",computed:o({},m({selected:e=>e.data.selected}))},xe={key:0,class:"col-12 d-flex justify-content-center"},Ne={id:"detail"},_e=w(" Выбран пользователь"),Ae=h("br",null,null,-1),De=h("br",null,null,-1),Te=w(" Описание:"),Pe=h("br",null,null,-1),Ce=w(),je=h("br",null,null,-1),qe=w(" Адрес проживания: "),Oe=w(),Ee=h("br",null,null,-1),Ve=w(" Город:"),ze=w(),Le=h("br",null,null,-1),Ue=w(" Провинция/штат: "),Re=w(),Ie=h("br",null,null,-1),Be=w(" Индекс: ");ke.render=function(e,t,a,r,s,o){return e.selected?(n(),i("div",xe,[h("div",Ne,[_e,Ae,h("b",null,u(`${e.selected.lastName} ${e.selected.firstName}`),1),De,Te,Pe,h("textarea",{value:e.selected.description}," ",8,["value"]),Ce,je,qe,h("b",null,u(e.selected.street),1),Oe,Ee,Ve,h("b",null,u(e.selected.city),1),ze,Le,Ue,h("b",null,u(e.selected.state),1),Re,Ie,Be,h("b",null,u(e.selected.zip),1)])])):p("",!0)};const Fe={name:"DataTable",components:{DataTableRow:X,DataTablePagination:Y,DataTableSearch:ee,DataTableAdd:oe,DataTablePreloader:ye,DataTableSelected:ke},props:{type:String},data:()=>({isLoading:!1,isError:!1,collumns:["id","firstName","lastName","email","phone"]}),computed:o(o({},m({sort:e=>e.data.sort,pageCount:e=>e.data.length/e.data.pageSize})),A({output:"getProcessedData"})),watch:{"$route.params":{handler({type:e}){this.isLoading=!0;let t=0;"small"==e?t=32:"big"==e&&(t=1e3),L(t).then((e=>{this.$store.dispatch(K,{data:e}),this.isLoading=!1})).catch((()=>{this.isError=!0,this.isLoading=!1,console.log("error")}))},immediate:!0}},methods:{changeSort:function(e){let t=e.currentTarget;this.$store.dispatch(M,{by:t.dataset.by,direction:t.dataset.direction})}}},Me={key:0},Ge={class:"table table-striped table-bordered"},He={class:"sort-btn__text"},Je={class:"sort-btn__icon"};Fe.render=function(e,t,a,r,s,o){const l=D("data-table-preloader"),m=D("data-table-search"),b=D("data-table-add"),g=D("font-awesome-icon"),v=D("data-table-row"),y=D("data-table-pagination"),f=D("data-table-selected");return n(),i(d,null,[s.isError?(n(),i("div",Me,"error occured while loading data")):p("",!0),s.isLoading?(n(),i(l,{key:1})):s.isError?p("",!0):(n(),i(d,{key:2},[h(m),h(b,{collumns:s.collumns},null,8,["collumns"]),h("table",Ge,[h("thead",null,[h("tr",null,[(n(!0),i(d,null,c(s.collumns,(a=>(n(),i("td",{key:a},[h("div",{class:"sort-btn","data-by":a,"data-direction":e.sort.by!=a?"desc":"desc"==e.sort.direction?"asc":"desc",onClick:t[1]||(t[1]=(...e)=>o.changeSort&&o.changeSort(...e))},[h("span",He,u(a),1),h("span",Je,["asc"===e.sort.direction&&e.sort.by===a?(n(),i(g,{key:0,icon:"sort-amount-up"})):(n(),i(g,{key:1,icon:"sort-amount-down-alt"}))])],8,["data-by","data-direction"])])))),128))])]),h("tbody",null,[(n(!0),i(d,null,c(e.output.data,(e=>(n(),i(v,{key:e.id+e.phone,collumns:s.collumns,row:e},null,8,["collumns","row"])))),128))])]),h(y,{"page-count":e.output.pageCount},null,8,["page-count"]),h(f)],64))],64)};const Ke={name:"App",components:{DataTable:Fe}},Qe={class:"container app"},We={class:"row"},Xe={class:"col-12"};Ke.render=function(e,t,a,r,s,o){const l=D("router-view");return n(),i("div",Qe,[h("div",We,[h("div",Xe,[h(l)])])])};const Ye=T({modules:{data:W}}),Ze={},et={class:"col-12 choose-link-container"},tt=h("div",null,"Small dataset(32 rows)",-1),at=h("div",null,"Big dataset(1000 rows)",-1);Ze.render=function(e,t){const a=D("router-link");return n(),i("div",et,[h(a,{class:"choose-link",to:{name:"dataset",params:{type:"small"}}},{default:P((()=>[tt])),_:1}),h(a,{class:"choose-link",to:{name:"dataset",params:{type:"big"}}},{default:P((()=>[at])),_:1})])};const rt=[{path:"/dataset/:type",name:"dataset",component:Fe,props:!0},{path:"/",component:Ze}],st=C({history:j(),routes:rt});q.add(O);const ot=E(Ke);ot.component("font-awesome-icon",V),ot.use(st),ot.use(Ye),ot.use(z),ot.mount("#app");
