(this.webpackJsonpskollars=this.webpackJsonpskollars||[]).push([[0],[,,function(e,t,a){e.exports={button:"src_button__2NRcJ",container:"src_container__2DGwR",p:"src_p__2AOSy"}},,,function(e,t,a){e.exports={button:"Home_button__2p0ar",container:"Home_container__nTVDJ",p:"Home_p__2XeOy",h1:"Home_h1__13Qmw",section:"Home_section__3G5qB"}},function(e,t,a){e.exports={button:"Header_button__3ooIn",container:"Header_container__E_LAV",p:"Header_p__96HqZ",a:"Header_a__2tsXb",logo:"Header_logo__3dv-q",navbar:"Header_navbar__1Soe8"}},function(e,t,a){e.exports={"form-control":"ContactFormLabeledInput_form-control__3tp2H","form-group":"ContactFormLabeledInput_form-group__3eglC",textarea:"ContactFormLabeledInput_textarea__3Qk8v"}},,function(e,t,a){e.exports={icon:"Product_icon__HHJCT","icon-lg":"Product_icon-lg__2PefD"}},,function(e,t,a){e.exports={footer:"Footer_footer__1Kl_k"}},,,,,,function(e){e.exports=JSON.parse('{"name":"skollars","version":"0.1.0","private":true,"homepage":"https://alvaroscelza.github.io/SkollARS","dependencies":{"emailjs-com":"^3.2.0","gh-pages":"^3.2.3","react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3","sass":"^1.45.0"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(10),o=a.n(c),i=a(2),r=a.n(i),l=a.p+"static/media/named_logo.a95c4360.png",d=a(6),j=a.n(d),m=a(0),b=a(17),u=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ".concat(j.a.navbar),children:Object(m.jsxs)("div",{className:j.a.container,children:[Object(m.jsx)("a",{className:"navbar-brand",href:b.homepage,children:Object(m.jsx)("img",{className:j.a.logo,alt:"SkollARS",src:l})}),Object(m.jsx)("div",{id:"main-nav",children:Object(m.jsx)("ul",{className:"navbar-nav",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:j.a.a,href:b.homepage,children:"Home"})})})})]})})},p=a(3),x=a(5),O=a.n(x),f=a(4),g=a(12),h=a(7),_=a.n(h),v=function(e,t,a){return"textarea"===e?Object(m.jsx)("textarea",{className:"".concat(_.a.textarea," ").concat(_.a["form-control"]),name:a,defaultValue:t,required:!0}):Object(m.jsx)("input",{type:e,className:_.a["form-control"],name:a,defaultValue:t,required:!0})},N=function(e){var t=e.value,a=e.label_text,s=e.field_name,n=e.input_type,c=v(n,t,s);return Object(m.jsxs)("div",{className:"".concat(_.a["form-group"]),children:[Object(m.jsxs)("label",{htmlFor:s,children:[Object(m.jsxs)("span",{children:[a,":"]}),Object(m.jsx)("span",{style:{color:"#8a0303"},children:"*"})]}),c]})},y=function(e){var t=e.message,a=e.hideFunction;return Object(s.useEffect)((function(){setTimeout(a,3e3)})),Object(m.jsxs)("div",{className:"".concat(r.a["tooltip-container"]),children:["\xa0",Object(m.jsx)("span",{children:t})]})},S=function(){var e=Object(s.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),o=Object(f.a)(c,2),i=o[0],l=o[1],d=Object(s.useState)(""),j=Object(f.a)(d,2),b=j[0],u=j[1],p=Object(s.useState)(""),x=Object(f.a)(p,2),O=x[0],h=x[1],_=Object(s.useState)(""),v=Object(f.a)(_,2),S=v[0],w=v[1],k=Object(s.useState)(!1),q=Object(f.a)(k,2),H=q[0],F=q[1],D=Object(s.useRef)(),z=function(){g.a.sendForm("service_vk007nc","contact_form",D.current,"user_GQDZu1hAgdP43yI77lpye").then((function(e){n(""),l(""),u(""),h(""),w("Email enviado exitosamente. Gracias!"),F(!0)}),(function(e){w("Ha ocurrido un error con el env\xedo de email. Por favor, \xbfpodr\xedas escribirnos a <a href='mailto: skollars.software.development@gmail.com'>skollars.software.development@gmail.com</a> y notificarnos del error?"),F(!0)}))};return Object(m.jsxs)("div",{className:r.a.container,children:[Object(m.jsx)("div",{className:"row text-center justify-content-center",children:Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h2",{className:"h2 text-dark",children:"Conectemos."}),Object(m.jsx)("p",{className:r.a.p,children:"Por favor llena el siguiente formulario, y nos pondremos en contacto."}),Object(m.jsxs)("p",{className:r.a.p,children:["O escr\xedbenos a ",Object(m.jsx)("a",{href:"mailto: skollars.software.development@gmail.com",children:"skollars.software.development@gmail.com"}),"."]})]})}),Object(m.jsx)("div",{className:"row text-center justify-content-center",children:Object(m.jsxs)("form",{ref:D,id:"contact-form",className:"hs-form",onSubmit:function(e){e.preventDefault(),z()},children:[Object(m.jsx)(N,{value:a,label_text:"Name",field_name:"name",input_type:"text"}),Object(m.jsx)(N,{value:i,label_text:"Email",field_name:"email",input_type:"text"}),Object(m.jsx)(N,{value:b,label_text:"Asunto",field_name:"topic",input_type:"text"}),Object(m.jsx)(N,{value:O,label_text:"Mensaje",field_name:"message",input_type:"textarea"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"submit",className:r.a.button,children:"Enviar Mensaje"}),H?Object(m.jsx)(y,{message:S,hideFunction:F}):null]})]})})]})},w=a(9),k=a.n(w),q=function(e){var t=e.image,a=e.title,s=e.text,n=e.icon_size,c="large"===(void 0===n?"large":n)?k.a["icon-lg"]:k.a.icon;return Object(m.jsx)("div",{className:"col-12 col-md-6 col-lg-4 mb-4",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:t,alt:"",className:c}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{className:"h4 mb-2 mt-2 font-weight-bold",children:a}),Object(m.jsx)("p",{className:r.a.p,children:s})]})]})})},H=a.p+"static/media/one_gear.873ca75f.png",F=a.p+"static/media/two_gears.f7271a02.png",D=a.p+"static/media/three_gears.b7f7a020.png",z=a.p+"static/media/design_thinking.135cceff.png",A=a.p+"static/media/finance_engineering.96371755.png",E=a.p+"static/media/information_techs.676a61b3.png",I=function(){return Object(m.jsxs)(p.Fragment,{children:[Object(m.jsx)("section",{className:O.a.section,children:Object(m.jsx)("div",{className:"height-40 py-3 py-md-4",children:Object(m.jsx)("div",{className:r.a.container,children:Object(m.jsxs)("div",{className:"row text-center justify-content-center",children:[Object(m.jsx)("div",{className:"col-12 mt-5",children:Object(m.jsx)("h1",{className:"mb-5 ".concat(O.a.h1),children:"SkollARS Software Development"})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-7 mb-3",children:Object(m.jsx)("h2",{className:"h2 mb-5",children:"No importa lo que necesites, nosotros podemos construirlo."})}),Object(m.jsx)("div",{className:"col-12 justify-content-center",children:Object(m.jsx)("a",{className:O.a.button,href:"#contact-form","data-aos":"fade",children:"Contacto"})})]})})})}),Object(m.jsx)("section",{className:O.a.section,children:Object(m.jsx)("div",{className:r.a.container,children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)(q,{image:H,title:"Soluciones Est\xe1ndar",text:Object(m.jsxs)(p.Fragment,{children:["Software funcional, listo para usarse. Soporta peque\xf1as customizaciones. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Principalmente software de gesti\xf3n: RRHH, Finanzas, Inventario, Punto de Venta, entre otros."]})}),Object(m.jsx)(q,{image:F,title:"Soluciones Predise\xf1adas",text:Object(m.jsxs)(p.Fragment,{children:["Software semi funcional para modelos de negocios est\xe1ndar. Soporta customizaciones medianas. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Software que suele requerir ciertas customizaciones para quedar funcional: e-commerce, blogs, landing pages."]})}),Object(m.jsx)(q,{image:D,title:"Desarrollo A Medida",text:Object(m.jsxs)(p.Fragment,{children:["Desarrollo de Software completamente a medida. No importa lo que necesites, lo construiremos para ti, con las funcionalidades que tu quieres y de la forma que tu quieres. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Incluye ingenier\xeda de requerimientos, donde te ayudaremos a explorar las mejores ideas para que tu nuevo software potencie tu negocio lo m\xe1ximo posible."]})}),Object(m.jsx)(q,{image:z,title:"Design Thinking",text:Object(m.jsxs)(p.Fragment,{children:["Te ayudamos a entender y definir los problemas de tu negocio. Y luego a pensar y validar soluciones para estos."," ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Design Thinking es una metodolog\xeda de dise\xf1o de soluciones, permite explorar ideas para poder validarlas y/o mejorarlas con bajo costo y de forma temprana."]}),icon_size:"large"}),Object(m.jsx)(q,{image:A,title:"Optimizaci\xf3n De Negocios",text:Object(m.jsxs)(p.Fragment,{children:["Analizamos tu negocio en busca de mejoras tecnol\xf3gicas de las que puedas beneficiarte. El an\xe1lisis es superficial y est\xe1 orientado a detectar mejoras sustanciales de bajo costo y alto impacto. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Es ideal para peque\xf1os negocios o emprendimientos personales."]}),icon_size:"large"}),Object(m.jsx)(q,{image:E,title:"Sistemas De Informaci\xf3n",text:Object(m.jsxs)(p.Fragment,{children:["An\xe1lisis exhaustivo de la Unidad Estrat\xe9gica de tu Negocio (UEN). Este es un estudio mucho m\xe1s profundo que la Optimizaci\xf3n de Negocio. Se busca una mejora sustancial de la estrategia de negocio de tu empresa, analizando: sistema de creencias, estrategia gen\xe9rica, an\xe1lisis de fuerzas de Porter, an\xe1lisis de la Cadena de Valor, posici\xf3n en TI/SI, an\xe1lisis FODA, an\xe1lisis ITSGA, identificaci\xf3n de ITSAs. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Este producto est\xe1 pensado para medianos o grandes negocios."]}),icon_size:"large"})]})})}),Object(m.jsx)("section",{className:O.a.section,children:Object(m.jsx)(S,{})})]})},C=a(11),P=a.n(C),R=function(){return Object(m.jsxs)("div",{className:P.a.footer,children:["Copyright \xa9 ",(new Date).getFullYear()," SkollARS Software Development"]})};o.a.render(Object(m.jsxs)(n.a.StrictMode,{children:[Object(m.jsx)(u,{}),Object(m.jsx)(I,{}),Object(m.jsx)(R,{})]}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7a06293d.chunk.js.map