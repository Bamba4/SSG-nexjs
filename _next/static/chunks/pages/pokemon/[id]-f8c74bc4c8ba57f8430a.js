_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2bx5":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[id]",function(){return a("T+pb")}])},"T+pb":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return S}));var n=a("h4VS"),o=a("q1tI"),r=a.n(o),i=a("nOHt"),l=a("5CWz"),c=a("Ff2n"),d=a("wx14"),s=(a("17x9"),a("iuhU")),p=a("H2TA");var u=o.createContext(),b=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"table":r,l=e.padding,p=void 0===l?"default":l,b=e.size,g=void 0===b?"medium":b,m=e.stickyHeader,f=void 0!==m&&m,h=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:p,size:g,stickyHeader:f}}),[p,g,f]);return o.createElement(u.Provider,{value:v},o.createElement(i,Object(d.a)({role:"table"===i?null:"table",ref:t,className:Object(s.a)(a.root,n,f&&a.stickyHeader)},h)))})),g=Object(p.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(d.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(b);var m=o.createContext(),f={variant:"head"},h=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"thead":r,l=Object(c.a)(e,["classes","className","component"]);return o.createElement(m.Provider,{value:f},o.createElement(i,Object(d.a)({className:Object(s.a)(a.root,n),ref:t,role:"thead"===i?null:"rowgroup"},l)))})),v=Object(p.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(h),y=a("ye/S"),j=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"tr":r,l=e.hover,p=void 0!==l&&l,u=e.selected,b=void 0!==u&&u,g=Object(c.a)(e,["classes","className","component","hover","selected"]),f=o.useContext(m);return o.createElement(i,Object(d.a)({ref:t,className:Object(s.a)(a.root,n,f&&{head:a.head,footer:a.footer}[f.variant],p&&a.hover,b&&a.selected),role:"tr"===i?null:"row"},g))})),O=Object(p.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(y.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(j),x=a("NqtD"),w=o.forwardRef((function(e,t){var a,n,r=e.align,i=void 0===r?"inherit":r,l=e.classes,p=e.className,b=e.component,g=e.padding,f=e.scope,h=e.size,v=e.sortDirection,y=e.variant,j=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=o.useContext(u),w=o.useContext(m),N=w&&"head"===w.variant;b?(n=b,a=N?"columnheader":"cell"):n=N?"th":"td";var k=f;!k&&N&&(k="col");var C=g||(O&&O.padding?O.padding:"default"),_=h||(O&&O.size?O.size:"medium"),E=y||w&&w.variant,R=null;return v&&(R="asc"===v?"ascending":"descending"),o.createElement(n,Object(d.a)({ref:t,className:Object(s.a)(l.root,l[E],p,"inherit"!==i&&l["align".concat(Object(x.a)(i))],"default"!==C&&l["padding".concat(Object(x.a)(C))],"medium"!==_&&l["size".concat(Object(x.a)(_))],"head"===E&&O&&O.stickyHeader&&l.stickyHeader),"aria-sort":R,role:a,scope:k},j))})),N=Object(p.a)((function(e){return{root:Object(d.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(y.d)(Object(y.b)(e.palette.divider,1),.88):Object(y.a)(Object(y.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(w),k={variant:"body"},C=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"tbody":r,l=Object(c.a)(e,["classes","className","component"]);return o.createElement(m.Provider,{value:k},o.createElement(i,Object(d.a)({className:Object(s.a)(a.root,n),ref:t,role:"tbody"===i?null:"rowgroup"},l)))})),_=Object(p.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(C),E=a("5D9J"),R=(a("wNa6"),r.a.createElement);function T(){var e=Object(n.a)(["\n  font-weight: bold;\n"]);return T=function(){return e},e}function H(){var e=Object(n.a)(["\n  margin: auto;\n  width: 800px;\n  padding-top: 1em;\n"]);return H=function(){return e},e}var z=E.a.div(H()),A=E.a.span(T()),S=!0;t.default=Object(i.withRouter)((function(e){var t=e.pokemon;return R(z,null,R(l.a,null),R("div",null,t&&R(r.a.Fragment,null,R("h1",null,t.name.english),R("p",null,R(A,null,"Type:")," "," "+t.type.join(", ")),R(g,null,R(v,null,R(O,null,R(N,null,"Attribute"),R(N,null,"Value"))),R(_,null,Object.keys(t.base).map((function(e){return R(O,{key:e},R(N,null,e),R(N,null,t.base[e]))})))))))}))}},[["2bx5",0,2,4,1,3]]]);