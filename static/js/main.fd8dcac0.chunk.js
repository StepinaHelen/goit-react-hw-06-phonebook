(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={listItem:"ListItem_listItem__3JXQF",name:"ListItem_name__LsMmo",number:"ListItem_number__3OE4o"}},11:function(t,e,n){t.exports={findContact:"Filter_findContact__2UB5w",findContactLabel:"Filter_findContactLabel__Qt-2E",findContactInput:"Filter_findContactInput__370lt"}},15:function(t,e,n){t.exports={container:"Container_container__3Wf2o"}},18:function(t,e,n){t.exports={list:"ContactList_list__3VptX"}},19:function(t,e,n){t.exports={button:"Button_button__1azqE"}},43:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),i=n(9),s=(n(31),n(15)),l=n.n(s),u=n(1),b=function(t){var e=t.children;return Object(u.jsx)("div",{className:l.a.container,children:e})},j=n(5),d=n(3),f=n(45),m={addContact:Object(d.b)("contacts/Add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,number:e}}})),deleteContact:Object(d.b)("contacts/Delete"),filterContact:Object(d.b)("contacts/Filter")},O=n(18),h=n.n(O),p=n(10),C=n.n(p),x=n(19),_=n.n(x),v=function(t){var e=t.onClick,n=t.text,c=t.type,a=void 0===c?"button":c;return Object(u.jsx)("button",{type:a,className:_.a.button,onClick:e,children:n})};v.defaultProps={onClick:function(){return null}};var g,y=v,N=function(t){var e=t.contacts,n=t.onDeleteContact;return e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(u.jsxs)("li",{className:C.a.listItem,children:[Object(u.jsxs)("p",{className:C.a.name,children:[c," "]}),Object(u.jsxs)("p",{className:C.a.number,children:[a," "]}),Object(u.jsx)(y,{text:"Delete",onClick:function(){return n(e)}})]},e)}))},I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(u.jsx)("ul",{className:h.a.list,children:Object(u.jsx)(N,{contacts:e,onDeleteContact:n})})},k=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},L=Object(j.b)((function(t){return{contacts:k(t.contacts.items,t.contacts.filter)}}),(function(t){return{onDeleteContact:function(e){return t(m.deleteContact(e))}}}))(I),w=n(7),F=n(20),S=n(21),D=n(26),A=n(25),E=n(8),T=n.n(E),z=function(t){Object(D.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(F.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget.name;t.setState(Object(w.a)({},n,e.currentTarget.value.trimLeft()))},t.handleSubmit=function(e){e.preventDefault();var n=t.props,c=n.contacts,a=n.addContact,r=t.state,o=r.name,s=r.number;if(!o||!s)return Object(i.b)("Please fill all fields in the correct format");c.find((function(t){return t.name===o}))?(Object(i.b)("".concat(o," is already in the contacts")),t.reset()):(a(o,s),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(S.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:T.a.form,children:[Object(u.jsxs)("label",{className:T.a.label,children:["Name",Object(u.jsx)("input",{className:T.a.input,name:"name",type:"text",value:e,onChange:this.handleInputChange})]}),Object(u.jsxs)("label",{className:T.a.label,children:["Number",Object(u.jsx)("input",{className:T.a.input,name:"number",type:"number",value:n,onChange:this.handleInputChange})]}),Object(u.jsx)(y,{text:"Add contact",type:"submit"})]})]})}}]),n}(a.a.Component),B=Object(j.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{addContact:function(e,n){return t(m.addContact(e,n))}}}))(z),J=n(11),P=n.n(J),X=function(t){var e=t.filter,n=t.onHandleInputSearch;return Object(u.jsxs)("div",{className:P.a.findContact,children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsxs)("label",{className:P.a.findContactLabel,children:["Find contacts by name",Object(u.jsx)("input",{className:P.a.findContactInput,name:"filter",type:"text",value:e,onChange:n})]})]})},H=Object(j.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onHandleInputSearch:function(e){return t(m.filterContact(e.currentTarget.value))}}}))(X),M=function(){return Object(u.jsxs)(b,{children:[Object(u.jsx)(B,{}),Object(u.jsx)(H,{}),Object(u.jsx)(L,{}),Object(u.jsx)(i.a,{})]})},Q=n(24),q=n(2),G=Object(d.c)([],(g={},Object(w.a)(g,m.addContact,(function(t,e){return[e.payload].concat(Object(Q.a)(t))})),Object(w.a)(g,m.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return n!==t.id}))})),g)),U=Object(d.c)("",Object(w.a)({},m.filterContact,(function(t,e){return e.payload}))),V=Object(q.c)({items:G,filter:U}),W=n(4),Y=n(22),K={key:"contacts",storage:n.n(Y).a,blacklist:["filter"]},R=Object(d.a)({reducer:{contacts:Object(W.g)(K,V)},middleware:Object(d.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}}),devTools:!1}),Z={store:R,persistor:Object(W.h)(R)},$=n(23);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j.a,{store:Z.store,children:Object(u.jsx)($.a,{loading:null,persistor:Z.persistor,children:Object(u.jsx)(M,{})})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__wG1z0",input:"ContactForm_input__2XxEe",label:"ContactForm_label__1rAYL"}}},[[43,1,2]]]);
//# sourceMappingURL=main.fd8dcac0.chunk.js.map