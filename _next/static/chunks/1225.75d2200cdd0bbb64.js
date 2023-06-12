(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1225],{57449:function(t){t.exports=function(){"use strict";return function(t,e){var n=e.prototype,i=n.format;n.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return i.bind(this)(t);var r=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return i.bind(this)(s)}}}()},89945:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,i=/\d\d?/,r=/\d*[^-_:/,()\s\d]+/,s={},a=function(t){return(t=+t)+(t>68?1900:2e3)},o=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],l=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,i=s.meridiem;if(i){for(var r=1;r<=24;r+=1)if(t.indexOf(i(r,0,e))>-1){n=r>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[r,function(t){this.afternoon=u(t,!1)}],a:[r,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,o("seconds")],ss:[i,o("seconds")],m:[i,o("minutes")],mm:[i,o("minutes")],H:[i,o("hours")],h:[i,o("hours")],HH:[i,o("hours")],hh:[i,o("hours")],D:[i,o("day")],DD:[n,o("day")],Do:[r,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],M:[i,o("month")],MM:[n,o("month")],MMM:[r,function(t){var e=l("months"),n=(l("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[r,function(t){var e=l("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,o("year")],Z:c,ZZ:c};function h(n){var i,r;i=n,r=s&&s.formats;for(var a=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var s=i&&i.toUpperCase();return n||r[i]||t[i]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),o=a.length,c=0;c<o;c+=1){var l=a[c],u=d[l],h=u&&u[0],f=u&&u[1];a[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,i=0;n<o;n+=1){var r=a[n];if("string"==typeof r)i+=r.length;else{var s=r.regex,c=r.parser,l=t.slice(i),u=s.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var i=e.prototype,r=i.parse;i.parse=function(t){var e=t.date,i=t.utc,a=t.args;this.$u=i;var o=a[1];if("string"==typeof o){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),s=this.$locale(),!c&&d&&(s=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=h(e)(t),r=i.year,s=i.month,a=i.day,o=i.hours,c=i.minutes,l=i.seconds,u=i.milliseconds,d=i.zone,f=new Date,m=a||(r||s?1:f.getDate()),p=r||f.getFullYear(),y=0;r&&!s||(y=s>0?s-1:f.getMonth());var k=o||0,g=c||0,v=l||0,b=u||0;return d?new Date(Date.UTC(p,y,m,k,g,v,b+60*d.offset*1e3)):n?new Date(Date.UTC(p,y,m,k,g,v,b)):new Date(p,y,m,k,g,v,b)}catch(t){return new Date("")}}(e,o,i),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(o)&&(this.$d=new Date("")),s={}}else if(o instanceof Array)for(var f=o.length,m=1;m<=f;m+=1){a[1]=o[m-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===f&&(this.$d=new Date(""))}else r.call(this,t)}}}()},66653:function(t){t.exports=function(){"use strict";var t="day";return function(e,n,i){var r=function(e){return e.add(4-e.isoWeekday(),t)},s=n.prototype;s.isoWeekYear=function(){return r(this).year()},s.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),t);var n,s,a,o=r(this),c=(n=this.isoWeekYear(),a=4-(s=(this.$u?i.utc:i)().year(n).startOf("year")).isoWeekday(),s.isoWeekday()>4&&(a+=7),s.add(a,t));return o.diff(c,"week")+1},s.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var a=s.startOf;s.startOf=function(t,e){var n=this.$utils(),i=!!n.u(e)||e;return"isoweek"===n.p(t)?i?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(t,e)}}}()},21225:function(t,e,n){"use strict";n.r(e),n.d(e,{diagram:function(){return q}});var i=n(72659),r=n(28879),s=n(66653),a=n(89945),o=n(57449),c=n(39157),l=n(29082),u=n(18224),d=n(97305),h=n(40400),f=n(61201),m=(n(35368),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,3],n=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],r=[1,15],s=[1,16],a=[1,17],o=[1,18],c=[1,19],l=[1,20],u=[1,21],d=[1,22],h=[1,23],f=[1,24],m=[1,25],p=[1,26],y=[1,27],k=[1,29],g=[1,31],v=[1,34],b=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],x={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(t,e,n,i,r,s,a){var o=s.length-1;switch(r){case 2:return s[o-1];case 3:case 7:case 8:this.$=[];break;case 4:s[o-1].push(s[o]),this.$=s[o-1];break;case 5:case 6:this.$=s[o];break;case 9:i.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 10:i.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 11:i.TopAxis(),this.$=s[o].substr(8);break;case 12:i.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 13:i.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 14:i.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 15:i.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 16:i.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 17:i.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 18:this.$=s[o].trim(),i.setAccTitle(this.$);break;case 19:case 20:this.$=s[o].trim(),i.setAccDescription(this.$);break;case 21:i.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 23:i.addTask(s[o-1],s[o]),this.$="task";break;case 27:this.$=s[o-1],i.setClickEvent(s[o-1],s[o],null);break;case 28:this.$=s[o-2],i.setClickEvent(s[o-2],s[o-1],s[o]);break;case 29:this.$=s[o-2],i.setClickEvent(s[o-2],s[o-1],null),i.setLink(s[o-2],s[o]);break;case 30:this.$=s[o-3],i.setClickEvent(s[o-3],s[o-2],s[o-1]),i.setLink(s[o-3],s[o]);break;case 31:this.$=s[o-2],i.setClickEvent(s[o-2],s[o],null),i.setLink(s[o-2],s[o-1]);break;case 32:this.$=s[o-3],i.setClickEvent(s[o-3],s[o-1],s[o]),i.setLink(s[o-3],s[o-2]);break;case 33:this.$=s[o-1],i.setLink(s[o-1],s[o]);break;case 34:case 40:this.$=s[o-1]+" "+s[o];break;case 35:case 36:case 38:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 37:case 39:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o];break;case 41:i.parseDirective("%%{","open_directive");break;case 42:i.parseDirective(s[o],"type_directive");break;case 43:s[o]=s[o].trim().replace(/'/g,'"'),i.parseDirective(s[o],"arg_directive");break;case 44:i.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:e,30:4,40:n},{1:[3]},{3:6,4:2,5:e,30:4,40:n},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:r,13:s,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:n},{32:32,33:[1,33],43:v},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:r,13:s,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(b,[2,25]),{32:47,43:v},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(b,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,o="",c=0,l=0,u=2,d=1,h=s.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(m.yy[p]=this.yy[p]);f.setInput(t,m.yy),m.yy.lexer=f,m.yy.parser=this,"undefined"==typeof f.yylloc&&(f.yylloc={});var y=f.yylloc;s.push(y);var k=f.options&&f.options.ranges;function g(){var t;return"number"!==typeof(t=i.pop()||f.lex()||d)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var v,b,x,T,_,$,w,D,S={};;){if(b=n[n.length-1],this.defaultActions[b]?x=this.defaultActions[b]:(null!==v&&"undefined"!=typeof v||(v=g()),x=a[b]&&a[b][v]),"undefined"===typeof x||!x.length||!x[0]){var C="";for(_ in D=[],a[b])this.terminals_[_]&&_>u&&D.push("'"+this.terminals_[_]+"'");C=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+D.join(", ")+", got '"+(this.terminals_[v]||v)+"'":"Parse error on line "+(c+1)+": Unexpected "+(v==d?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(C,{text:f.match,token:this.terminals_[v]||v,line:f.yylineno,loc:y,expected:D})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+v);switch(x[0]){case 1:n.push(v),r.push(f.yytext),s.push(f.yylloc),n.push(x[1]),v=null,l=f.yyleng,o=f.yytext,c=f.yylineno,y=f.yylloc;break;case 2:if($=this.productions_[x[1]][1],S.$=r[r.length-$],S._$={first_line:s[s.length-($||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-($||1)].first_column,last_column:s[s.length-1].last_column},k&&(S._$.range=[s[s.length-($||1)].range[0],s[s.length-1].range[1]]),"undefined"!==typeof(T=this.performAction.apply(S,[o,l,c,m.yy,x[1],r,s].concat(h))))return T;$&&(n=n.slice(0,-1*$*2),r=r.slice(0,-1*$),s=s.slice(0,-1*$)),n.push(this.productions_[x[1]][0]),r.push(S.$),s.push(S._$),w=a[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return!0}}return!0}},T={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 20:case 23:case 26:case 29:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:case 16:case 17:case 18:break;case 15:return 11;case 19:this.begin("href");break;case 21:return 38;case 22:this.begin("callbackname");break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 27:return 37;case 28:this.begin("click");break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function _(){this.yy={}}return x.lexer=T,_.prototype=x,x.Parser=_,new _}());m.parser=m;const p=m;r.extend(s),r.extend(a),r.extend(o);let y,k="",g="",v="",b=[],x=[],T={},_=[],$=[],w="";const D=["active","done","crit","milestone"];let S=[],C=!1,E=!1,M=0;const A=function(t,e,n,i){return!i.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&n.includes("weekends"))||(!!n.includes(t.format("dddd").toLowerCase())||n.includes(t.format(e.trim()))))},Y=function(t,e,n,i){if(!n.length||t.manualEndTime)return;let s,a;s=t.startTime instanceof Date?r(t.startTime):r(t.startTime,e,!0),s=s.add(1,"d"),a=t.endTime instanceof Date?r(t.endTime):r(t.endTime,e,!0);const[o,c]=L(s,a,e,n,i);t.endTime=o.toDate(),t.renderEndTime=c},L=function(t,e,n,i,r){let s=!1,a=null;for(;t<=e;)s||(a=e.toDate()),s=A(t,n,i,r),s&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},I=function(t,e,n){n=n.trim();const i=/^after\s+([\d\w- ]+)/.exec(n.trim());if(null!==i){let t=null;if(i[1].split(" ").forEach((function(e){let n=G(e);void 0!==n&&(t?n.endTime>t.endTime&&(t=n):t=n)})),t)return t.endTime;{const t=new Date;return t.setHours(0,0,0,0),t}}let s=r(n,e.trim(),!0);if(s.isValid())return s.toDate();{c.l.debug("Invalid date:"+n),c.l.debug("With date format:"+e.trim());const t=new Date(n);if(void 0===t||isNaN(t.getTime()))throw new Error("Invalid date:"+n);return t}},F=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},O=function(t,e,n,i=!1){n=n.trim();let s=r(n,e.trim(),!0);if(s.isValid())return i&&(s=s.add(1,"d")),s.toDate();let a=r(t);const[o,c]=F(n);if(!Number.isNaN(o)){const t=a.add(o,c);t.isValid()&&(a=t)}return a.toDate()};let z=0;const B=function(t){return void 0===t?(z+=1,"task"+z):t};let P,W,N=[];const H={},G=function(t){const e=H[t];return N[e]},Z=function(){const t=function(t){const e=N[t];let n="";switch(N[t].raw.startTime.type){case"prevTaskEnd":{const t=G(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":n=I(0,k,N[t].raw.startTime.startData),n&&(N[t].startTime=n)}return N[t].startTime&&(N[t].endTime=O(N[t].startTime,k,N[t].raw.endTime.data,C),N[t].endTime&&(N[t].processed=!0,N[t].manualEndTime=r(N[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Y(N[t],k,x,b))),N[t].processed};let e=!0;for(const[n,i]of N.entries())t(n),e=e&&i.processed;return e},j=function(t,e){t.split(",").forEach((function(t){let n=G(t);void 0!==n&&n.classes.push(e)}))},V=function(t,e){S.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){e()}))}),(function(){const n=document.querySelector(`[id="${t}-text"]`);null!==n&&n.addEventListener("click",(function(){e()}))}))};function R(t,e,n){let i=!0;for(;i;)i=!1,n.forEach((function(n){const r=new RegExp("^\\s*"+n+"\\s*$");t[0].match(r)&&(e[n]=!0,t.shift(1),i=!0)}))}let U;const q={parser:p,db:{parseDirective:function(t,e,n){u.m.parseDirective(this,t,e,n)},getConfig:()=>(0,c.g)().gantt,clear:function(){_=[],$=[],w="",S=[],z=0,P=void 0,W=void 0,N=[],k="",g="",y=void 0,v="",b=[],x=[],C=!1,E=!1,M=0,T={},(0,d.f)()},setDateFormat:function(t){k=t},getDateFormat:function(){return k},enableInclusiveEndDates:function(){C=!0},endDatesAreInclusive:function(){return C},enableTopAxis:function(){E=!0},topAxisEnabled:function(){return E},setAxisFormat:function(t){g=t},getAxisFormat:function(){return g},setTickInterval:function(t){y=t},getTickInterval:function(){return y},setTodayMarker:function(t){v=t},getTodayMarker:function(){return v},setAccTitle:d.s,getAccTitle:d.g,setDiagramTitle:d.d,getDiagramTitle:d.e,setAccDescription:d.b,getAccDescription:d.a,addSection:function(t){w=t,_.push(t)},getSections:function(){return _},getTasks:function(){let t=Z();let e=0;for(;!t&&e<10;)t=Z(),e++;return $=N,$},addTask:function(t,e){const n={section:w,type:w,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),r={};R(i,r,D);for(let s=0;s<i.length;s++)i[s]=i[s].trim();switch(i.length){case 1:r.id=B(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=B(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=B(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]}}return r}(W,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=W,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=M,M++;const r=N.push(n);W=n.id,H[n.id]=r-1},findTaskById:G,addTaskOrg:function(t,e){const n={section:w,type:w,description:t,task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};R(i,s,D);for(let r=0;r<i.length;r++)i[r]=i[r].trim();let a="";switch(i.length){case 1:s.id=B(),s.startTime=t.endTime,a=i[0];break;case 2:s.id=B(),s.startTime=I(0,k,i[0]),a=i[1];break;case 3:s.id=B(i[0]),s.startTime=I(0,k,i[1]),a=i[2]}return a&&(s.endTime=O(s.startTime,k,a,C),s.manualEndTime=r(a,"YYYY-MM-DD",!0).isValid(),Y(s,k,x,b)),s}(P,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,P=n,$.push(n)},setIncludes:function(t){b=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return b},setExcludes:function(t){x=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return x},setClickEvent:function(t,e,n){t.split(",").forEach((function(t){!function(t,e,n){if("loose"!==(0,c.g)().securityLevel)return;if(void 0===e)return;let i=[];if("string"===typeof n){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<i.length;t++){let e=i[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),i[t]=e}}0===i.length&&i.push(t),void 0!==G(t)&&V(t,(()=>{l.u.runFunc(e,...i)}))}(t,e,n)})),j(t,"clickable")},setLink:function(t,e){let n=e;"loose"!==(0,c.g)().securityLevel&&(n=(0,i.N)(e)),t.split(",").forEach((function(t){void 0!==G(t)&&(V(t,(()=>{window.open(n,"_self")})),T[t]=n)})),j(t,"clickable")},getLinks:function(){return T},bindFunctions:function(t){S.forEach((function(e){e(t)}))},parseDuration:F,isInvalidDate:A},renderer:{setConf:function(){c.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,n,i){const s=(0,c.g)().gantt,a=(0,c.g)().securityLevel;let o;"sandbox"===a&&(o=(0,h.Ys)("#i"+e));const l="sandbox"===a?(0,h.Ys)(o.nodes()[0].contentDocument.body):(0,h.Ys)("body"),u="sandbox"===a?o.nodes()[0].contentDocument:document,d=u.getElementById(e);U=d.parentElement.offsetWidth,void 0===U&&(U=1200),void 0!==s.useWidth&&(U=s.useWidth);const m=i.db.getTasks(),p=m.length*(s.barHeight+s.barGap)+2*s.topPadding;d.setAttribute("viewBox","0 0 "+U+" "+p);const y=l.select(`[id="${e}"]`),k=(0,h.Xf)().domain([(0,h.VV$)(m,(function(t){return t.startTime})),(0,h.Fp7)(m,(function(t){return t.endTime}))]).rangeRound([0,U-s.leftPadding-s.rightPadding]);let g=[];for(const r of m)g.push(r.type);const v=g;function b(t,e){return function(t){let e=t.length;const n={};for(;e;)n[t[--e]]=(n[t[e]]||0)+1;return n}(e)[t]||0}g=function(t){const e={},n=[];for(let i=0,r=t.length;i<r;++i)Object.prototype.hasOwnProperty.call(e,t[i])||(e[t[i]]=!0,n.push(t[i]));return n}(g),m.sort((function(t,e){const n=t.startTime,i=e.startTime;let r=0;return n>i?r=1:n<i&&(r=-1),r})),function(t,n,a){const o=s.barHeight,l=o+s.barGap,d=s.topPadding,f=s.leftPadding;(0,h.BYU)().domain([0,g.length]).range(["#00B9FA","#F95002"]).interpolate(h.JHv);(function(t,e,n,a,o,c,l,u){const d=c.reduce(((t,{startTime:e})=>t?Math.min(t,e):e),0),h=c.reduce(((t,{endTime:e})=>t?Math.max(t,e):e),0),f=i.db.getDateFormat();if(!d||!h)return;const m=[];let p=null,g=r(d);for(;g.valueOf()<=h;)i.db.isInvalidDate(g,f,l,u)?p?p.end=g:p={start:g,end:g}:p&&(m.push(p),p=null),g=g.add(1,"d");y.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",(function(t){return"exclude-"+t.start.format("YYYY-MM-DD")})).attr("x",(function(t){return k(t.start)+n})).attr("y",s.gridLineStartPadding).attr("width",(function(t){const e=t.end.add(1,"day");return k(e)-k(t.start)})).attr("height",o-e-s.gridLineStartPadding).attr("transform-origin",(function(e,i){return(k(e.start)+n+.5*(k(e.end)-k(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"})).attr("class","exclude-range")})(l,d,f,0,a,t,i.db.getExcludes(),i.db.getIncludes()),function(t,e,n,r){let a=(0,h.LLu)(k).tickSize(-r+e+s.gridLineStartPadding).tickFormat((0,h.i$Z)(i.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||s.tickInterval);if(null!==o){const t=o[1];switch(o[2]){case"minute":a.ticks(h.Z_i.every(t));break;case"hour":a.ticks(h.WQD.every(t));break;case"day":a.ticks(h.rr1.every(t));break;case"week":a.ticks(h.NGh.every(t));break;case"month":a.ticks(h.F0B.every(t))}}if(y.append("g").attr("class","grid").attr("transform","translate("+t+", "+(r-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||s.topAxis){let n=(0,h.F5q)(k).tickSize(-r+e+s.gridLineStartPadding).tickFormat((0,h.i$Z)(i.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(null!==o){const t=o[1];switch(o[2]){case"minute":n.ticks(h.Z_i.every(t));break;case"hour":n.ticks(h.WQD.every(t));break;case"day":n.ticks(h.rr1.every(t));break;case"week":n.ticks(h.NGh.every(t));break;case"month":n.ticks(h.F0B.every(t))}}y.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,d,0,a),function(t,n,r,a,o,l,u){y.append("g").selectAll("rect").data(t).enter().append("rect").attr("x",0).attr("y",(function(t,e){return t.order*n+r-2})).attr("width",(function(){return u-s.rightPadding/2})).attr("height",n).attr("class",(function(t){for(const[e,n]of g.entries())if(t.type===n)return"section section"+e%s.numberSectionStyles;return"section section0"}));const d=y.append("g").selectAll("rect").data(t).enter(),f=i.db.getLinks();d.append("rect").attr("id",(function(t){return t.id})).attr("rx",3).attr("ry",3).attr("x",(function(t){return t.milestone?k(t.startTime)+a+.5*(k(t.endTime)-k(t.startTime))-.5*o:k(t.startTime)+a})).attr("y",(function(t,e){return t.order*n+r})).attr("width",(function(t){return t.milestone?o:k(t.renderEndTime||t.endTime)-k(t.startTime)})).attr("height",o).attr("transform-origin",(function(t,e){return e=t.order,(k(t.startTime)+a+.5*(k(t.endTime)-k(t.startTime))).toString()+"px "+(e*n+r+.5*o).toString()+"px"})).attr("class",(function(t){const e="task";let n="";t.classes.length>0&&(n=t.classes.join(" "));let i=0;for(const[a,o]of g.entries())t.type===o&&(i=a%s.numberSectionStyles);let r="";return t.active?t.crit?r+=" activeCrit":r=" active":t.done?r=t.crit?" doneCrit":" done":t.crit&&(r+=" crit"),0===r.length&&(r=" task"),t.milestone&&(r=" milestone "+r),r+=i,r+=" "+n,e+r})),d.append("text").attr("id",(function(t){return t.id+"-text"})).text((function(t){return t.task})).attr("font-size",s.fontSize).attr("x",(function(t){let e=k(t.startTime),n=k(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(k(t.endTime)-k(t.startTime))-.5*o),t.milestone&&(n=e+o);const i=this.getBBox().width;return i>n-e?n+i+1.5*s.leftPadding>u?e+a-5:n+a+5:(n-e)/2+e+a})).attr("y",(function(t,e){return t.order*n+s.barHeight/2+(s.fontSize/2-2)+r})).attr("text-height",o).attr("class",(function(t){const e=k(t.startTime);let n=k(t.endTime);t.milestone&&(n=e+o);const i=this.getBBox().width;let r="";t.classes.length>0&&(r=t.classes.join(" "));let a=0;for(const[o,l]of g.entries())t.type===l&&(a=o%s.numberSectionStyles);let c="";return t.active&&(c=t.crit?"activeCritText"+a:"activeText"+a),t.done?c=t.crit?c+" doneCritText"+a:c+" doneText"+a:t.crit&&(c=c+" critText"+a),t.milestone&&(c+=" milestoneText"),i>n-e?n+i+1.5*s.leftPadding>u?r+" taskTextOutsideLeft taskTextOutside"+a+" "+c:r+" taskTextOutsideRight taskTextOutside"+a+" "+c+" width-"+i:r+" taskText taskText"+a+" "+c+" width-"+i}));if("sandbox"===(0,c.g)().securityLevel){let t;t=(0,h.Ys)("#i"+e);const n=t.nodes()[0].contentDocument;d.filter((function(t){return void 0!==f[t.id]})).each((function(t){var e=n.querySelector("#"+t.id),i=n.querySelector("#"+t.id+"-text");const r=e.parentNode;var s=n.createElement("a");s.setAttribute("xlink:href",f[t.id]),s.setAttribute("target","_top"),r.appendChild(s),s.appendChild(e),s.appendChild(i)}))}}(t,l,d,f,o,0,n),function(t,e){const n=[];let i=0;for(const[r,s]of g.entries())n[r]=[s,b(s,v)];y.append("g").selectAll("text").data(n).enter().append((function(t){const e=t[0].split(c.d.lineBreakRegex),n=-(e.length-1)/2,i=u.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("dy",n+"em");for(const[r,s]of e.entries()){const t=u.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttribute("alignment-baseline","central"),t.setAttribute("x","10"),r>0&&t.setAttribute("dy","1em"),t.textContent=s,i.appendChild(t)}return i})).attr("x",10).attr("y",(function(r,s){if(!(s>0))return r[1]*t/2+e;for(let a=0;a<s;a++)return i+=n[s-1][1],r[1]*t/2+i*t+e})).attr("font-size",s.sectionFontSize).attr("font-size",s.sectionFontSize).attr("class",(function(t){for(const[e,n]of g.entries())if(t[0]===n)return"sectionTitle sectionTitle"+e%s.numberSectionStyles;return"sectionTitle"}))}(l,d),function(t,e,n,r){const a=i.db.getTodayMarker();if("off"===a)return;const o=y.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",k(c)+t).attr("x2",k(c)+t).attr("y1",s.titleTopMargin).attr("y2",r-s.titleTopMargin).attr("class","today"),""!==a&&l.attr("style",a.replace(/,/g,";"))}(f,0,0,a)}(m,U,p),(0,f.c)(y,p,U,s.useMaxWidth),y.append("text").text(i.db.getDiagramTitle()).attr("x",U/2).attr("y",s.titleTopMargin).attr("class","titleText")}},styles:t=>`\n  .mermaid-main-font {\n    font-family: "trebuchet ms", verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    // text-height: 14px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n    text {\n      font-family: ${t.fontFamily};\n      fill: ${t.textColor};\n    }\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n\n  // .taskText:not([font-size]) {\n  //   font-size: ${t.ganttFontSize};\n  // }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n    // font-size: ${t.ganttFontSize};\n  }\n\n  /* Special case clickable */\n  .task.clickable {\n    cursor: pointer;\n  }\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor}    ;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n`}}}]);