(this["webpackJsonpfind-images"]=this["webpackJsonpfind-images"]||[]).push([[0],{24:function(e,t,n){},4:function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3dCLx",modal:"ErrorModal_modal__hkIiO",header:"ErrorModal_header__1_jKL",content:"ErrorModal_content__38oIg",actions:"ErrorModal_actions__3mDff",btn:"ErrorModal_btn__3Nm_Z",button:"ErrorModal_button__HrwXj"}},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),i=(n(24),n(3)),o=n(8),l=n.n(o),d=n(18),u=n(19),m=n.n(u),b=function(e){var t=Object(a.useState)({message:[]}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("https://find-images-backend.herokuapp.com/id?id=".concat(e," ")).then((function(e){r(e.data)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),c},j=n(0),h=function(e){return Object(j.jsx)("button",{className:e.class,type:e.type||"button",onClick:e.onClick,children:e.children})},f=n(4),O=n.n(f),_=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:O.a.backdrop,onClick:e.onConfirm}),Object(j.jsxs)("div",{className:O.a.modal,children:[Object(j.jsx)("header",{className:O.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("section",{className:O.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:O.a.actions,children:Object(j.jsx)(h,{class:O.a.btn,onClick:e.onConfirm,children:"Retry"})})]})]})},g=n(5),p=n.n(g),x=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1];return Object(j.jsxs)(a.Fragment,{children:[l&&Object(j.jsx)(_,{title:l.title,message:l.message,onConfirm:function(){d(null)}}),Object(j.jsx)("div",{className:p.a.search,children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c<=0?d({title:"Invalid Input",message:"Album id should not be less than or equal to 0"}):c.trim().length<0?d({title:"Invalid Input",message:"Please input a valid album id number"}):(e.onAddId(c),r(""))},className:p.a.formsearch,children:[Object(j.jsx)("h1",{children:"IMAGE ALBUM FINDER"}),Object(j.jsx)("input",{id:"imageId",type:"number",value:c,onChange:function(e){r(e.target.value)},className:p.a.searchtxt,placeholder:"Search album by id number ..."}),Object(j.jsx)(h,{type:"submit",class:p.a.searchbtn,children:"Search"})]})})]})},v=n(6),I=n.n(v),k=function(e){return Object(j.jsx)("div",{className:I.a.layout,children:e.data.message.map((function(e,t){return Object(j.jsxs)("div",{className:I.a.imgthimb,children:[Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("img",{className:I.a.img,src:e.url,alt:""})]},t)}))})};var N=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],r=b(n);return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(x,{onAddId:function(e){c(e)}}),Object(j.jsx)(k,{data:r})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),C()},5:function(e,t,n){e.exports={formsearch:"InputForm_formsearch__1mJ_9"}},6:function(e,t,n){e.exports={layout:"ImageList_layout__2tBAZ",imgthimb:"ImageList_imgthimb__q4rFB",img:"ImageList_img__3aY6v"}}},[[45,1,2]]]);
//# sourceMappingURL=main.e82448b9.chunk.js.map