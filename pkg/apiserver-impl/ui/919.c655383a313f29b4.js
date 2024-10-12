"use strict";(self.webpackChunkdevfile_builder=self.webpackChunkdevfile_builder||[]).push([[919],{6919:(W,D,f)=>{f.r(D),f.d(D,{diagram:()=>C});var S=f(9037),O=(f(1764),f(6780),f(8586),f(2735),function(){var a=function(u,t,e,n){for(e=e||{},n=u.length;n--;e[u[n]]=t);return e},p=[6,9,10],m={trace:function(){},yy:{},symbols_:{error:2,start:3,info:4,document:5,EOF:6,line:7,statement:8,NL:9,showInfo:10,$accept:0,$end:1},terminals_:{2:"error",4:"info",6:"EOF",9:"NL",10:"showInfo"},productions_:[0,[3,3],[5,0],[5,2],[7,1],[7,1],[8,1]],performAction:function(t,e,n,s,r,i,k){switch(r){case 1:return s;case 4:break;case 6:s.setInfo(!0)}},table:[{3:1,4:[1,2]},{1:[3]},a(p,[2,2],{5:3}),{6:[1,4],7:5,8:6,9:[1,7],10:[1,8]},{1:[2,1]},a(p,[2,3]),a(p,[2,4]),a(p,[2,5]),a(p,[2,6])],defaultActions:{4:[2,1]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var n=[0],s=[],r=[null],i=[],k=this.table,R="",b=0,$=0,B=i.slice.call(arguments,1),o=Object.create(this.lexer),g={yy:{}};for(var A in this.yy)Object.prototype.hasOwnProperty.call(this.yy,A)&&(g.yy[A]=this.yy[A]);o.setInput(t,g.yy),g.yy.lexer=o,g.yy.parser=this,typeof o.yylloc>"u"&&(o.yylloc={});var P=o.yylloc;i.push(P);var y,z=o.options&&o.options.ranges;this.parseError="function"==typeof g.yy.parseError?g.yy.parseError:Object.getPrototypeOf(this).parseError;for(var l,_,h,L,E,c,I,d={};;){if(this.defaultActions[_=n[n.length-1]]?h=this.defaultActions[_]:((null===l||typeof l>"u")&&(y=void 0,"number"!=typeof(y=s.pop()||o.lex()||1)&&(y instanceof Array&&(y=(s=y).pop()),y=this.symbols_[y]||y),l=y),h=k[_]&&k[_][l]),typeof h>"u"||!h.length||!h[0]){var T;for(E in I=[],k[_])this.terminals_[E]&&E>2&&I.push("'"+this.terminals_[E]+"'");T=o.showPosition?"Parse error on line "+(b+1)+":\n"+o.showPosition()+"\nExpecting "+I.join(", ")+", got '"+(this.terminals_[l]||l)+"'":"Parse error on line "+(b+1)+": Unexpected "+(1==l?"end of input":"'"+(this.terminals_[l]||l)+"'"),this.parseError(T,{text:o.match,token:this.terminals_[l]||l,line:o.yylineno,loc:P,expected:I})}if(h[0]instanceof Array&&h.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+l);switch(h[0]){case 1:n.push(l),r.push(o.yytext),i.push(o.yylloc),n.push(h[1]),l=null,$=o.yyleng,R=o.yytext,b=o.yylineno,P=o.yylloc;break;case 2:if(d.$=r[r.length-(c=this.productions_[h[1]][1])],d._$={first_line:i[i.length-(c||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(c||1)].first_column,last_column:i[i.length-1].last_column},z&&(d._$.range=[i[i.length-(c||1)].range[0],i[i.length-1].range[1]]),typeof(L=this.performAction.apply(d,[R,$,b,g.yy,h[1],r,i].concat(B)))<"u")return L;c&&(n=n.slice(0,-1*c*2),r=r.slice(0,-1*c),i=i.slice(0,-1*c)),n.push(this.productions_[h[1]][0]),r.push(d.$),i.push(d._$),n.push(k[n[n.length-2]][n[n.length-1]]);break;case 3:return!0}}return!0}};function x(){this.yy={}}return m.lexer={EOF:1,parseError:function(e,n){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,n)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===s.length?this.yylloc.first_column:0)+s[s.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in r)this[i]=r[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),i=0;i<r.length;i++)if((n=this._input.match(this.rules[r[i]]))&&(!e||n[0].length>e[0].length)){if(e=n,s=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[i])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,n,s,r){switch(s){case 0:return 4;case 1:return 9;case 2:return"space";case 3:return 10;case 4:return 6;case 5:return"TXT"}},rules:[/^(?:info\b)/i,/^(?:[\s\n\r]+)/i,/^(?:[\s]+)/i,/^(?:showInfo\b)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5],inclusive:!0}}},x.prototype=m,m.Parser=x,new x}());O.parser=O;let w=false;const C={parser:O,db:{clear:()=>{w=false},setInfo:a=>{w=a},getInfo:()=>w},renderer:{draw:(a,p,m)=>{S.l.debug("rendering info diagram\n"+a);const v=(0,S.A)(p);(0,S.i)(v,100,400,!0),v.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${m}`)}}}}}]);