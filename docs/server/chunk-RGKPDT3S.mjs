import './polyfills.server.mjs';
import{C as A,G as f,H as T,J as b,K as z,a as u,b as M,c as O,d as m,e as g,f as p,g as e,h as t,i as l,j as S,k as c,l as P,m as n,n as k,o as h,v as w,x as E,y,z as I}from"./chunk-4BJRDMCL.mjs";var R=(()=>{let o=class o{constructor(i,a){this.route=i,this.router=a,this.click1="",this.click2="hidden"}logIn(){this.router.navigate(["/selection"],{queryParams:{category:"logIn"}})}guestLogIn(){this.router.navigate(["/selection"],{queryParams:{category:"guest"}})}signUp(){this.click1="hidden",this.click2=""}};o.\u0275fac=function(a){return new(a||o)(g(f),g(b))},o.\u0275cmp=u({type:o,selectors:[["app-home"]],standalone:!0,features:[h],decls:80,vars:6,consts:[[1,"page-bg"],[1,"navbar","navbar-expand-sm"],[1,"nav-height"],[1,"d-flex","flex-row","container-fluid"],[2,"width","1400px"],["href","#",1,"navbar-brand","text-dark","p-4",2,"font-size","large","font-weight","1000"],[2,"margin-top","200px","margin-left","25px","font-size","40px"],[1,"align"],[1,"mb-3","mt-3"],["for","email",1,"form-label","label-text"],["type","email","placeholder","xyz@gmail.com","id","email","name","email",1,"form-control","input-format"],[1,"mb-3"],["for","pwd",1,"form-label","label-text"],["type","password","id","pwd","placeholder","Enter password","name","pswd",1,"form-control","input-format"],[1,"form-check","mb-3","mt-2"],[1,"form-check-label"],["type","checkbox","name","remember",1,"form-check-input"],[1,"btn","button-format",3,"click"],[1,"mt-3","text-center"],[1,"mt-3","links-format"],[1,"text-dark","p-4",3,"click"],["type","email","id","email","name","email",1,"form-control","input-format"],["href","/home",1,"text-dark","p-4"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5)(6,"i"),n(7," WhichCard?"),t()()(),l(8,"div"),t(),e(9,"div",6)(10,"i"),n(11,"Get smart! Save money!"),t()()()(),e(12,"div",7)(13,"div")(14,"form")(15,"div",8)(16,"label",9),n(17,"Email:"),t(),l(18,"br")(19,"input",10),t(),e(20,"div",11)(21,"label",12),n(22,"Password:"),t(),l(23,"br")(24,"input",13),t(),e(25,"div",14)(26,"label",15),l(27,"input",16),n(28," Remember me "),t()(),e(29,"div")(30,"button",17),c("click",function(){return r.logIn()}),n(31,"Log in"),t()(),e(32,"p",18),n(33,"Or"),t(),e(34,"div",19)(35,"a",20),c("click",function(){return r.signUp()}),n(36," Sign up "),t(),e(37,"a",20),c("click",function(){return r.guestLogIn()}),n(38," Use as guest "),t()()()(),e(39,"div")(40,"form")(41,"div",8)(42,"label",9),n(43,"First Name:"),t(),l(44,"br")(45,"input",21),t(),e(46,"div",8)(47,"label",9),n(48,"Last Name:"),t(),l(49,"br")(50,"input",21),t(),e(51,"div",8)(52,"label",9),n(53,"Email:"),t(),l(54,"br")(55,"input",10),t(),e(56,"div",11)(57,"label",12),n(58,"Password:"),t(),l(59,"br")(60,"input",13),t(),e(61,"div",11)(62,"label",12),n(63,"Re-enter password:"),t(),l(64,"br")(65,"input",13),t(),e(66,"div",14)(67,"label",15),l(68,"input",16),n(69," Remember me "),t()(),e(70,"div")(71,"button",17),c("click",function(){return r.logIn()}),n(72,"Sign up"),t()(),e(73,"p",18),n(74,"Already having an account?"),t(),e(75,"div",19)(76,"a",22),n(77," Log in "),t(),e(78,"a",20),c("click",function(){return r.guestLogIn()}),n(79," Use as guest "),t()()()()()()),a&2&&(m(13),p(" ",r.click1," position-absolute top-50  p-4 form-size form-bg border "),m(26),p("",r.click2," position-absolute top-0   p-4 form-size2 form-bg border "))},dependencies:[E],styles:[".nav-height[_ngcontent-%COMP%]{height:500px;width:100%}.page-bg[_ngcontent-%COMP%]{height:100%;width:100%}.form-size[_ngcontent-%COMP%]{height:360px;width:600px}.form-size2[_ngcontent-%COMP%]{height:630px;width:600px;margin-top:100px}.space[_ngcontent-%COMP%]{width:500px}.align[_ngcontent-%COMP%]{margin-left:450px}.form-bg[_ngcontent-%COMP%]{background-color:#fff}.border[_ngcontent-%COMP%]{box-shadow:5px 4px 2px 2px #eeeded;border-color:#000;border-radius:3%}nav[_ngcontent-%COMP%]{background-color:#deb887;background-repeat:no-repeat,}.input-format[_ngcontent-%COMP%]{height:50px;width:100%}.label-text[_ngcontent-%COMP%]{font-size:medium}.button-format[_ngcontent-%COMP%]{background-color:#2e0202;color:#eeeded;height:40px;width:50%;border-radius:20px;font-size:medium;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}.links-format[_ngcontent-%COMP%]{margin-left:34%;font-size:medium}.nav-button[_ngcontent-%COMP%]{font-size:medium;float:inline-end;border-radius:20px;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}"]});let d=o;return d})();var D=(()=>{let o=class o{constructor(){this.title="WhichCard"}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["app-root"]],standalone:!0,features:[h],decls:1,vars:0,template:function(a,r){a&1&&l(0,"router-outlet")},dependencies:[T]});let d=o;return d})();var F=(()=>{let o=class o{constructor(i,a){this.router=i,this.activateRoute=a,this.check="hidden",this.uncheck="f1-pos",this.selectedcard="Zolve aspire",this.selectedItem="Airbnb",this.loginID="",this.account="",this.selectedCredit="Zolve aspire",this.purchaseItem="Airbnb"}ngOnInit(){this.activateRoute.queryParamMap.subscribe(i=>this.loginID=i.params.category),this.loginID=="guest"&&(this.account="hidden")}logOut(){this.router.navigate(["/home"])}toBrowsCards(){this.router.navigate(["/browseCards"])}wallet(){this.router.navigate(["/wallet"])}selectedCard(i){this.selectedCredit=i}OnCheck(){this.check="",this.uncheck="",this.selectedcard=this.selectedCredit,this.selectedItem=this.purchaseItem}Onpurchase(i){this.purchaseItem=i}};o.\u0275fac=function(a){return new(a||o)(g(b),g(f))},o.\u0275cmp=u({type:o,selectors:[["app-selection"]],standalone:!0,features:[h],decls:91,vars:14,consts:[[1,"page-bg"],[1,"navbar","navbar-expand-sm","fixed-top"],[1,"nav-height"],[1,"d-flex","flex-row","container-fluid"],[2,"width","1400px"],["href","#",1,"navbar-brand","text-light","mt-4"],[1,"navbar-brand","text-light","mt-4",3,"click"],["href","#"],[1,"glyphicon","glyphicon-user","user-i"],["type","button",1,"btn","btn-outline-light","p-3","logout-b","nav-button",3,"click"],[1,"grid-container"],[1,"grid-item"],[1,"d-flex","flex-row"],[1,"mb-3","mt-3","form-group","input-w"],["for","card",1,"form-label","label-text"],["id","card","name","card",1,"form-control","input-format",3,"change"],["card",""],["value","Zolve aspire"],["value","Zolve classic"],["value","Zolve signature"],["value","Zolve black"],[1,"mb-3","mt-3","input-w"],["for","purchase",1,"form-label","label-text"],["id","purchase","name","purchase",1,"form-control","input-format",3,"change"],["purchase",""],["value","Airbnb"],["value","Lyft"],["value","Uber"],["value","Amazon"],["value","Walmart"],["value","Zipcar"],["value","Target"],["value","AT&T"],["value","Netflix"],["value","Starbucks"],[1,"btn","mb-3","button-format",3,"click"],[1,""],[1,"mb-3","mt-3","p-4","form-group","input-w"],["id","information"],[1,"p-3"]],template:function(a,r){if(a&1){let s=S();e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),n(6," WhichCard? "),t(),e(7,"p",6),c("click",function(){return r.toBrowsCards()}),n(8," Browse cards "),t(),e(9,"p",6),c("click",function(){return r.wallet()}),n(10," Wallet "),t()(),e(11,"div")(12,"a",7),l(13,"span",8),t()(),e(14,"div")(15,"button",9),c("click",function(){return r.logOut()}),n(16,"log out"),t()()()()(),e(17,"div",10)(18,"div",11)(19,"div")(20,"form",12)(21,"div",13)(22,"label",14),n(23,"Card"),t(),l(24,"br"),e(25,"select",15,16),c("change",function(){M(s);let _=P(26);return O(r.selectedCard(_.value))}),e(27,"option",17),n(28,"Zolve aspire"),t(),e(29,"option",18),n(30,"Zolve classic"),t(),e(31,"option",19),n(32,"Zolve signature"),t(),e(33,"option",20),n(34,"Zolve black"),t()()(),e(35,"div",21)(36,"label",22),n(37,"Expense"),t(),l(38,"br"),e(39,"select",23,24),c("change",function(){M(s);let _=P(40);return O(r.Onpurchase(_.value))}),e(41,"option",25),n(42,"Airbnb"),t(),e(43,"option",26),n(44,"Lyft"),t(),e(45,"option",27),n(46,"Uber"),t(),e(47,"option",28),n(48,"Amazon"),t(),e(49,"option",29),n(50,"Walmart"),t(),e(51,"option",30),n(52,"Zipcar"),t(),e(53,"option",31),n(54,"Target"),t(),e(55,"option",32),n(56,"AT&T"),t(),e(57,"option",33),n(58,"Netflix"),t(),e(59,"option",34),n(60,"Starbucks"),t()()()(),e(61,"button",35),c("click",function(){return r.OnCheck()}),n(62,"Check"),t()()(),e(63,"div",11)(64,"div")(65,"div",36)(66,"div",37)(67,"table",38)(68,"tbody")(69,"tr")(70,"th",39),n(71,"Card"),t(),e(72,"th",39),n(73,"Expense"),t(),e(74,"th",39),n(75,"Save"),t()(),e(76,"tr")(77,"td"),n(78),t(),e(79,"td"),n(80),t(),e(81,"td"),n(82,"1% cashback"),t()(),e(83,"tr")(84,"td",39)(85,"b"),n(86,"Total"),t()(),l(87,"td"),e(88,"td",39)(89,"b"),n(90,"1%"),t()()()()()()()()()()()}a&2&&(m(12),p("btn  btn-lg p-4 mt-2  user-b ",r.account,""),m(2),p("p-3 ",r.account,""),m(5),p("",r.uncheck," p-4  form-size form-bg border "),m(45),p("",r.check," form-size form-bg border "),m(14),k(r.selectedcard),m(2),k(r.selectedItem))},styles:[".nav-height[_ngcontent-%COMP%]{height:62px;width:100%;background-color:#2e0202;position:sticky}.grid-container[_ngcontent-%COMP%]{display:inline-grid;grid-template-rows:auto auto;margin-top:20px;width:100%}.grid-item[_ngcontent-%COMP%]{padding:20px;font-size:15px;height:100%}.form-size[_ngcontent-%COMP%]{height:250px;width:80%;margin-left:10%;margin-top:3%}.previous[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#000}.input-w[_ngcontent-%COMP%]{width:93%;margin-left:44px}.f1-pos[_ngcontent-%COMP%]{margin-top:12%}.user-b[_ngcontent-%COMP%]{background-color:#f1f1f1;border-radius:50px}.user-i[_ngcontent-%COMP%]{font-size:18px}.logout-b[_ngcontent-%COMP%]{font-size:14px}#information[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#5e0147;color:#fff}.button-format[_ngcontent-%COMP%]{background-color:#2e0202;color:#eeeded;height:40px;width:30%;border-radius:20px;font-size:medium;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif;margin-top:40px;margin-left:35%}.tab[_ngcontent-%COMP%]{margin-top:10%;overflow:hidden;border:1px solid #ccc;background-color:#f1f1f1}.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:inherit;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:.3s;font-size:17px}.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ddd}.tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#ccc}.tabcontent[_ngcontent-%COMP%]{display:none;padding:6px 12px;border:1px solid #ccc;border-top:none}"]});let d=o;return d})();var Z=(()=>{let o=class o{constructor(i,a){this.router=i,this.activateRoute=a,this.check="hidden",this.uncheck="f1-pos",this.selectedcard="Zolve aspire",this.selectedItem="Airbnb",this.loginID="",this.account="",this.selectedCredit="Zolve aspire",this.purchaseItem="Airbnb"}ngOnInit(){this.activateRoute.queryParamMap.subscribe(i=>this.loginID=i.params.category),this.loginID=="guest"&&(this.account="hidden")}toBrowsCards(){this.router.navigate(["/browseCards"])}wallet(){this.router.navigate(["/wallet"])}logOut(){this.router.navigate(["/home"])}compare(){this.router.navigate(["/compare"])}selectedCard(i){this.selectedCredit=i}OnCheck(){this.check="",this.uncheck="",this.selectedcard=this.selectedCredit,this.selectedItem=this.purchaseItem}Onpurchase(i){this.purchaseItem=i}};o.\u0275fac=function(a){return new(a||o)(g(b),g(f))},o.\u0275cmp=u({type:o,selectors:[["app-browse-cards"]],standalone:!0,features:[h],decls:86,vars:6,consts:[[1,"page-bg"],[1,"navbar","navbar-expand-sm","fixed-top"],[1,"nav-height"],[1,"d-flex","flex-row","container-fluid"],[2,"width","1400px"],["href","#",1,"navbar-brand","text-light","mt-4"],[1,"navbar-brand","text-light","mt-4",3,"click"],["href","#"],[1,"glyphicon","glyphicon-user","user-i"],["type","button",1,"btn","btn-outline-light","p-3","logout-b","nav-button",3,"click"],[1,"full-page"],[1,"grid-container"],[1,"grid-item"],[1,"card","margin-top"],["src","https://cdn.cardcritics.com/uploads/2024/02/9099-566853.png"],[1,"mt-3"],["src","https://cdn.cardcritics.com/uploads/2024/01/40602_36.png"],["src","https://cdn.cardcritics.com/uploads/2024/02/image-100313861-15741744-1707148209000.png"],["src","https://cdn.cardcritics.com/uploads/2024/02/2291_10006359-4.png"],["src","https://cdn.cardcritics.com/uploads/2024/02/609772.jpg"],["src","https://cdn.cardcritics.com/uploads/2022/03/citidoublecash.png"],[1,"side-panel","fixed-right"],[1,"px-3","mt-3"],[1,"material-icons"],[1,"btn-format",3,"click"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),n(6," WhichCard? "),t(),e(7,"p",6),c("click",function(){return r.wallet()}),n(8," Wallet "),t()(),e(9,"div")(10,"a",7),l(11,"span",8),t()(),e(12,"div")(13,"button",9),c("click",function(){return r.logOut()}),n(14,"log out"),t()()()()(),e(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13),l(19,"img",14),e(20,"p",15)(21,"button"),n(22,"Add to wallet"),t(),e(23,"button"),n(24,"Add to compare"),t()()()(),e(25,"div",12)(26,"div",13),l(27,"img",16),e(28,"p",15)(29,"button"),n(30,"Add to wallet"),t(),e(31,"button"),n(32,"Add to compare"),t()()()(),e(33,"div",12)(34,"div",13),l(35,"img",17),e(36,"p",15)(37,"button"),n(38,"Add to wallet"),t(),e(39,"button"),n(40,"Add to compare"),t()()()(),e(41,"div",12)(42,"div",13),l(43,"img",18),e(44,"p",15)(45,"button"),n(46,"Add to wallet"),t(),e(47,"button"),n(48,"Add to compare"),t()()()(),e(49,"div",12)(50,"div",13),l(51,"img",19),e(52,"p",15)(53,"button"),n(54,"Add to wallet"),t(),e(55,"button"),n(56,"Add to compare"),t()()()(),e(57,"div",12)(58,"div",13),l(59,"img",20),e(60,"p",15)(61,"button"),n(62,"Add to wallet"),t(),e(63,"button"),n(64,"Add to compare"),t()()()()(),e(65,"div",21)(66,"h3",22),n(67,"In Comparision"),t(),e(68,"ul")(69,"li")(70,"p"),n(71," BoFA "),t(),e(72,"i",23),n(73,"cancel"),t()(),e(74,"li")(75,"p"),n(76," Discover "),t(),e(77,"i",23),n(78,"cancel"),t()(),e(79,"li")(80,"p"),n(81," Freedom "),t(),e(82,"i",23),n(83,"cancel"),t()()(),e(84,"button",24),c("click",function(){return r.compare()}),n(85,"Compare"),t()()()()),a&2&&(m(10),p("btn  btn-lg p-4 mt-2  user-b ",r.account,""),m(2),p("p-3 ",r.account,""))},styles:[".nav-height[_ngcontent-%COMP%]{height:62px;width:100%;background-color:#2e0202;position:sticky}.grid-container[_ngcontent-%COMP%]{display:inline-grid;grid-template-rows:auto auto auto;grid-template-columns:auto auto auto;margin-top:5%;margin-right:3%;width:100%}.full-page[_ngcontent-%COMP%]{display:flex}.grid-item[_ngcontent-%COMP%]{padding:20px;font-size:15px;height:100%}.side-panel[_ngcontent-%COMP%]{position:sticky;background-color:#eeeded;width:25%;margin-top:5%;height:660px}.form-size[_ngcontent-%COMP%]{height:250px;width:80%;margin-left:10%;margin-top:3%}.previous[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#000}.input-w[_ngcontent-%COMP%]{width:93%;margin-left:44px}.f1-pos[_ngcontent-%COMP%]{margin-top:12%}.user-b[_ngcontent-%COMP%]{background-color:#f1f1f1;border-radius:50px}.user-i[_ngcontent-%COMP%]{font-size:18px}.logout-b[_ngcontent-%COMP%]{font-size:14px}#information[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#5e0147;color:#fff}.button-format[_ngcontent-%COMP%]{background-color:#2e0202;color:#eeeded;height:40px;width:30%;border-radius:20px;font-size:medium;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif;margin-top:40px;margin-left:35%}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;max-width:300px;margin:auto;text-align:center;font-family:arial}.margin-top[_ngcontent-%COMP%]{margin-top:5%}.price[_ngcontent-%COMP%]{color:gray;font-size:22px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:purple;text-align:center;cursor:pointer;width:46%;font-size:12px;margin-left:5px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:30px;background:#ae79ae;color:#fff;margin:5px;font-size:medium;list-style-type:none}li[_ngcontent-%COMP%]{display:flex;gap:50%;margin-left:4%}.btn-format[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:brown;text-align:center;cursor:pointer;width:100%;font-size:12px;margin-left:5px}"]});let d=o;return d})();var B=(()=>{let o=class o{constructor(i,a){this.router=i,this.activateRoute=a,this.check="hidden",this.uncheck="f1-pos",this.selectedcard="Zolve aspire",this.selectedItem="Airbnb",this.loginID="",this.account="",this.selectedCredit="Zolve aspire",this.purchaseItem="Airbnb"}ngOnInit(){this.activateRoute.queryParamMap.subscribe(i=>this.loginID=i.params.category),this.loginID=="guest"&&(this.account="hidden")}wallet(){this.router.navigate(["/wallet"])}logOut(){this.router.navigate(["/home"])}toBrowsCards(){this.router.navigate(["/browseCards"])}selectedCard(i){this.selectedCredit=i}OnCheck(){this.check="",this.uncheck="",this.selectedcard=this.selectedCredit,this.selectedItem=this.purchaseItem}Onpurchase(i){this.purchaseItem=i}};o.\u0275fac=function(a){return new(a||o)(g(b),g(f))},o.\u0275cmp=u({type:o,selectors:[["app-comparision"]],standalone:!0,features:[h],decls:88,vars:6,consts:[[1,"page-bg"],[1,"navbar","navbar-expand-sm","fixed-top"],[1,"nav-height"],[1,"d-flex","flex-row","container-fluid"],[2,"width","1400px"],["href","#",1,"navbar-brand","text-light","mt-4"],[1,"navbar-brand","text-light","mt-4",3,"click"],["href","#"],[1,"glyphicon","glyphicon-user","user-i"],["type","button",1,"btn","btn-outline-light","p-3","logout-b","nav-button",3,"click"],[1,"grid-container"],[1,"grid-item"],[1,"form-size","form-bg","border"],[1,""],[1,"mb-3","mt-3","p-4","form-group","input-w"],["id","information"],[1,"p-3"],[1,"btn","mb-3","button-format",3,"click"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),n(6," WhichCard? "),t(),e(7,"p",6),c("click",function(){return r.toBrowsCards()}),n(8," Browse cards "),t(),e(9,"p",6),c("click",function(){return r.wallet()}),n(10," Wallet "),t()(),e(11,"div")(12,"a",7),l(13,"span",8),t()(),e(14,"div")(15,"button",9),c("click",function(){return r.logOut()}),n(16,"log out"),t()()()()(),e(17,"div",10)(18,"div",11)(19,"div",12)(20,"div",13)(21,"div",14)(22,"table",15)(23,"tbody")(24,"tr"),l(25,"th"),e(26,"th",16),n(27,"Discover"),t(),e(28,"th",16),n(29,"Freedom"),t(),e(30,"th",16),n(31,"BoFA"),t()(),e(32,"tr")(33,"td"),n(34,"Purchase APR"),t(),e(35,"td"),n(36,"0% Intro APR on Purchases for 15 months, then 20.49% \u2013 29.24% Variable"),t(),e(37,"td"),n(38,"0% Intro APR for 15 billing cycles for purchases, then 18.24% \u2013 28.24% Variable APR"),t(),e(39,"td"),n(40,"0% intro APR for 21 months from account opening on purchases, then 18.24%, 24.74%, or 29.99% Variable APR"),t()(),e(41,"tr")(42,"td"),n(43,"Annual Fee"),t(),e(44,"td"),n(45,"$0"),t(),e(46,"td"),n(47,"$0"),t(),e(48,"td"),n(49,"$0"),t()(),e(50,"tr")(51,"td"),n(52,"Recommended Credit Score"),t(),e(53,"td"),n(54,"Excellent/Good 670 - 850*"),t(),e(55,"td"),n(56,"Good/ Excellent 670 - 850*"),t(),e(57,"td"),n(58,"Good \u2013 Excellent 670 \u2013 850*"),t()(),e(59,"tr")(60,"td"),n(61,"Cash rewards"),t(),e(62,"td"),n(63,"1% \u2013 5%"),t(),e(64,"td"),n(65,"1.5% \u2013 6.5%"),t(),e(66,"td"),n(67,"1.5x Points"),t()(),e(68,"tr")(69,"td"),n(70,"Welcome Bonus"),t(),e(71,"td"),n(72,"Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) "),t(),e(73,"td"),n(74,"25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening"),t(),e(75,"td"),n(76,"N/A"),t()(),e(77,"tr"),l(78,"td"),e(79,"td")(80,"button",17),c("click",function(){return r.OnCheck()}),n(81,"Add to wallet"),t()(),e(82,"td")(83,"button",17),c("click",function(){return r.OnCheck()}),n(84,"Add to wallet"),t()(),e(85,"td")(86,"button",17),c("click",function(){return r.OnCheck()}),n(87,"Add to wallet"),t()()()()()()()()()()()),a&2&&(m(12),p("btn  btn-lg p-4 mt-2  user-b ",r.account,""),m(2),p("p-3 ",r.account,""))},styles:[".nav-height[_ngcontent-%COMP%]{height:62px;width:100%;background-color:#2e0202;position:sticky}.grid-container[_ngcontent-%COMP%]{display:inline-grid;grid-template-rows:auto auto;margin-top:20px;width:100%}.grid-item[_ngcontent-%COMP%]{padding:20px;font-size:15px;height:100%}.form-size[_ngcontent-%COMP%]{height:250px;width:80%;margin-left:10%;margin-top:3%}.previous[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#000}.input-w[_ngcontent-%COMP%]{width:93%;margin-left:44px}.f1-pos[_ngcontent-%COMP%]{margin-top:12%}.user-b[_ngcontent-%COMP%]{background-color:#f1f1f1;border-radius:50px}.user-i[_ngcontent-%COMP%]{font-size:18px}.logout-b[_ngcontent-%COMP%]{font-size:14px}#information[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#5e0147;color:#fff}.button-format[_ngcontent-%COMP%]{background-color:#2e0202;color:#eeeded;height:40px;width:40%;border-radius:20px;font-size:medium;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif;margin-top:40px;margin-left:25%}"]});let d=o;return d})();var W=(()=>{let o=class o{constructor(i,a){this.router=i,this.activateRoute=a,this.check="hidden",this.uncheck="f1-pos",this.selectedcard="Zolve aspire",this.selectedItem="Airbnb",this.loginID="",this.account="",this.selectedCredit="Zolve aspire",this.purchaseItem="Airbnb"}ngOnInit(){this.activateRoute.queryParamMap.subscribe(i=>this.loginID=i.params.category),this.loginID=="guest"&&(this.account="hidden")}logOut(){this.router.navigate(["/home"])}toBrowsCards(){this.router.navigate(["/browseCards"])}selectedCard(i){this.selectedCredit=i}OnCheck(){this.check="",this.uncheck="",this.selectedcard=this.selectedCredit,this.selectedItem=this.purchaseItem}Onpurchase(i){this.purchaseItem=i}};o.\u0275fac=function(a){return new(a||o)(g(b),g(f))},o.\u0275cmp=u({type:o,selectors:[["app-wallet"]],standalone:!0,features:[h],decls:29,vars:6,consts:[[1,"page-bg"],[1,"navbar","navbar-expand-sm","fixed-top"],[1,"nav-height"],[1,"d-flex","flex-row","container-fluid"],[2,"width","1400px"],["href","#",1,"navbar-brand","text-light","mt-4"],[1,"navbar-brand","text-light","mt-4",3,"click"],["href","#"],[1,"glyphicon","glyphicon-user","user-i"],["type","button",1,"btn","btn-outline-light","p-3","logout-b","nav-button",3,"click"],[1,"full-page"],[1,"container"],[1,"black-box"],[1,"card"],["src","https://cdn.cardcritics.com/uploads/2024/02/9099-566853.png"],[1,"gray-box"],["src","https://cdn.cardcritics.com/uploads/2022/03/citidoublecash.png"],[1,"gray-box1"],["src","https://cdn.cardcritics.com/uploads/2024/02/2291_10006359-4.png"],[1,"gray-box2"],["src","https://cdn.cardcritics.com/uploads/2024/02/image-100313861-15741744-1707148209000.png"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),n(6," WhichCard? "),t(),e(7,"p",6),c("click",function(){return r.toBrowsCards()}),n(8," Browse cards "),t()(),e(9,"div")(10,"a",7),l(11,"span",8),t()(),e(12,"div")(13,"button",9),c("click",function(){return r.logOut()}),n(14,"log out"),t()()()()(),l(15,"div",10),e(16,"div",11)(17,"div",12)(18,"div",13),l(19,"img",14),t()(),e(20,"div",15)(21,"div",13),l(22,"img",16),t()(),e(23,"div",17)(24,"div",13),l(25,"img",18),t()(),e(26,"div",19)(27,"div",13),l(28,"img",20),t()()()()),a&2&&(m(10),p("btn  btn-lg p-4 mt-2  user-b ",r.account,""),m(2),p("p-3 ",r.account,""))},styles:[".nav-height[_ngcontent-%COMP%]{height:62px;width:100%;background-color:#2e0202;position:sticky}.grid-container[_ngcontent-%COMP%]{display:inline-grid;grid-template-rows:auto auto auto;grid-template-columns:auto auto auto;margin-top:5%;margin-right:3%;width:100%}.full-page[_ngcontent-%COMP%]{margin-top:8%}.grid-item[_ngcontent-%COMP%]{padding:20px;font-size:15px;height:100%}.side-panel[_ngcontent-%COMP%]{position:sticky;background-color:#eeeded;width:25%;margin-top:5%;height:660px}.form-size[_ngcontent-%COMP%]{height:250px;width:80%;margin-left:10%;margin-top:3%}.previous[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#000}.input-w[_ngcontent-%COMP%]{width:93%;margin-left:44px}.f1-pos[_ngcontent-%COMP%]{margin-top:12%}.user-b[_ngcontent-%COMP%]{background-color:#f1f1f1;border-radius:50px}.user-i[_ngcontent-%COMP%]{font-size:18px}.logout-b[_ngcontent-%COMP%]{font-size:14px}#information[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#information[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}#information[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}#information[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#5e0147;color:#fff}.button-format[_ngcontent-%COMP%]{background-color:#2e0202;color:#eeeded;height:40px;width:30%;border-radius:20px;font-size:medium;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif;margin-top:40px;margin-left:35%}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;text-align:center;font-family:arial;height:200px}.margin-top[_ngcontent-%COMP%]{margin-top:5%}.price[_ngcontent-%COMP%]{color:gray;font-size:22px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:purple;text-align:center;cursor:pointer;width:46%;font-size:12px;margin-left:5px}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:30px;background:#ae79ae;color:#fff;margin:5px;font-size:medium;list-style-type:none}li[_ngcontent-%COMP%]{display:flex;gap:70%;margin-left:4%}.btn-format[_ngcontent-%COMP%]{border:none;outline:0;padding:12px;color:#fff;background-color:brown;text-align:center;cursor:pointer;width:100%;font-size:12px;margin-left:5px}.black-box[_ngcontent-%COMP%]{position:relative;height:200px;margin:30px;width:30%}.gray-box[_ngcontent-%COMP%]{position:relative;height:200px;width:30%;left:100px;top:-130px}.gray-box1[_ngcontent-%COMP%]{position:relative;height:200px;width:30%;left:150px;top:-230px}.gray-box2[_ngcontent-%COMP%]{position:relative;height:200px;width:30%;left:200px;top:-330px}"]});let d=o;return d})();var H=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"selection",component:F},{path:"home",component:R},{path:"browseCards",component:Z},{path:"compare",component:B},{path:"wallet",component:W}];var j={providers:[z(H),I()]};var G={providers:[A()]},N=w(j,G);var L=()=>y(D,N),xe=L;export{xe as a};