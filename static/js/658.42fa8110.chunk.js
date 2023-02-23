"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[658],{3658:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(2791),a=n(1228),s=n(9101),i=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.error},u=function(e){return e.filter},l=n(3634),m=n(9439),d=n(5984),f=n(5562),h=n.n(f),p=n(2037),b=n(184),_=function(){var e=(0,s.useSelector)(i),t=(0,s.useDispatch)(),n=(0,r.useState)(""),a=(0,m.Z)(n,2),c=a[0],o=a[1],u=(0,r.useState)(""),f=(0,m.Z)(u,2),_=f[0],x=f[1],v=(0,d.x0)(),j=(0,d.x0)(),y=function(e){var t=e.currentTarget,n=t.value;switch(t.name){case"name":o(n);break;case"number":x(n);break;default:return}};return(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.elements,a=r.name,s=r.number,i=a.value,c=s.value;if(h().Notify.init({position:"center-top"}),e.find((function(e){return e.name===i})))return h().Notify.info("".concat(i," is already in contacts")),void o("");o(""),x(""),t((0,l.uK)({name:i,number:c}))},className:p.Z.form,children:[(0,b.jsx)("label",{htmlFor:v,children:"Name"}),(0,b.jsx)("input",{className:p.Z.input,id:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:y}),(0,b.jsx)("label",{htmlFor:j,children:"Number"}),(0,b.jsx)("input",{className:p.Z.input,id:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:_,onChange:y}),(0,b.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Add contact"})]})},x="filter_filter__HJEMj",v="filter_title__k4Z+2",j="filter_input__sX944",y=n(1634),g=function(){var e=(0,s.useSelector)(u),t=(0,d.x0)(),n=(0,s.useDispatch)();return(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("label",{htmlFor:t,className:v,children:"Find contacts by name"}),(0,b.jsx)("input",{className:j,type:"text",name:"filter",onChange:function(e){n((0,y.y)(e.target.value.trim().toLowerCase()))},id:t,value:e})]})},N="contactsListItem_item__ycQmN",C=function(e){var t=e.id,n=e.name,r=e.number,a=(0,s.useDispatch)();return(0,b.jsxs)("li",{className:N,children:[n," : ",r,(0,b.jsx)("button",{class:"btn btn-outline-danger  btn-sm mr-auto ms-5 mb-2 mt-2",type:"button",onClick:function(){!function(e){a((0,l.GK)(e))}(t)},children:"Delete"})]})},Z="contactsList_list__p8doL",S=function(){var e=(0,s.useSelector)(i),t=(0,s.useSelector)(u),n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,b.jsx)("ul",{className:Z,children:n&&n.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,b.jsx)(C,{id:t,name:n,number:r},t)}))})};function k(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=k(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var A=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=k(e))&&(r&&(r+=" "),r+=t);return r},w=n(977),F=function(){var e=(0,s.useSelector)(i),t=(0,s.useSelector)(c),n=(0,s.useSelector)(o),u=(0,s.useDispatch)();return(0,r.useEffect)((function(){u((0,l.yF)())}),[u]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:A(a.Z.container),children:[(0,b.jsx)("h1",{className:A(a.Z.textCentr),children:"Phonebook"}),t&&!n&&(0,b.jsx)(w.Z,{}),(0,b.jsx)(_,{})]}),(0,b.jsxs)("div",{className:A(a.Z.container),children:[(0,b.jsx)("h2",{className:A(a.Z.textCentr),children:"Contacts"}),(0,b.jsx)(g,{}),!!e&&(0,b.jsx)(S,{})]})]})}},2037:function(e,t){t.Z={form:"contactForm_form__3ay0L",input:"contactForm_input__wCtae",btnAddContact:"contactForm_btnAddContact__4J9OQ"}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=658.42fa8110.chunk.js.map