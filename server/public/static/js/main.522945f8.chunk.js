(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},161:function(e,t){},164:function(e,t,n){},165:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),l=n.n(s),c=(n(103),n(2)),o=n(4),i=n(6),u=n(5),m=n(7),h=(n(104),n(24)),p=n(20),g=n.n(p),d=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,n){return t.service.post("signup",{username:e,password:n})},this.login=function(e,n){return t.service.post("login",{username:e,password:n})},this.logout=function(){return t.service.post("logout")},this.loggedin=function(){return t.service.get("loggedin")},this.service=g.a.create({baseURL:"".concat("https://applay2.herokuapp.com/api/"),withCredentials:!0})},E=n(87),f=function(e){var t=e.component,n=e.user,a=e.redirectPath,s=Object(E.a)(e,["component","user","redirectPath"]);return r.a.createElement(h.b,Object.assign({},s,{render:function(e){return n?r.a.createElement(t,Object.assign({},e,{loggedInUser:n})):r.a.createElement(h.a,{to:{pathname:a}})}}))},b=function e(){var t=this;Object(c.a)(this,e),this.getNotices=function(){return t.service.get("getNotices")},this.getOneNotice=function(e){return t.service.get("getOneNotice/".concat(e))},this.postNotice=function(e){return t.service.post("postNotice",e)},this.service=g.a.create({baseURL:"".concat("https://applay2.herokuapp.com/api/"),withCredentials:!0})},v=n(9),O=(n(125),n(126),n(127),function e(){var t=this;Object(c.a)(this,e),this.getNcomentarys=function(){return t.service.get("getNcomentarys")},this.getOneNcomentary=function(e){return t.service.get("getOneNcomentary/".concat(e))},this.postNcomentary=function(e,n){return t.service.post("postNcomentary",{NewComentary:e,user:n})},this.service=g.a.create({baseURL:"".concat("https://applay2.herokuapp.com/api/"),withCredentials:!0})}),j=(n(128),n(129),function(e){var t=e.comentary;return r.a.createElement("article",{className:"ncomen"},r.a.createElement("p",null,t))}),N=n(15),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChangeInput=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.handleFormSubmit=function(e){e.preventDefault(),n.service.postNcomentary(n.state,n.props.userInSession).then(function(e){console.log(e),n.props.updateList()}).catch(function(e){return console.log("error",e)})},n.state={comentary:""},n.service=new O,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-comentario"},"Comenta"),r.a.createElement("textarea",{rows:"10",cols:"40",name:"comentary",type:"text",className:"form-control",id:"input-comentario",onChange:this.handleChangeInput})),r.a.createElement("button",{type:"submit",className:"btn btn-light btn-sm"},"Enviar"))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.updateList()},e.updateList=function(){e.services.getNcomentarys().then(function(t){console.log(t),e.setState({nComentary:t.data})}).catch(function(e){return console.log(e)})},e.state={nComentary:[],users:[]},e.services=new O,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text"},r.a.createElement(C,{userInSession:this.props.userInSession,updateList:this.updateList})),r.a.createElement("div",{className:"fondocoments"},this.state.nComentary.map(function(e){return r.a.createElement(j,Object.assign({key:e._id},e))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fondocoments"},this.state.nComentary.map(function(e){return r.a.createElement(j,Object.assign({key:e._id},e))})))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={notice:{}},n.service=new b,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getOneNotice(this.props.match.params.id,this.props.userInSession).then(function(t){return e.setState({notice:t.data})}).catch(function(e){return console.log("err",e)})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"container all"},r.a.createElement("h1",null,"ApPlay"),r.a.createElement("h4",null," > ",this.state.notice.plataform," "),r.a.createElement("div",{className:"encabezado"},r.a.createElement("h2",null," ",this.state.notice.title),r.a.createElement("p",null," Por: ",this.state.notice.author," ")),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.notice.imageUrl,alt:this.state.notice.title})),r.a.createElement("div",{className:"review"},r.a.createElement("p",null,this.state.notice.review)),r.a.createElement("div",{className:"comentarios"},r.a.createElement("h2",null,"Comentarios"),r.a.createElement(y,{userInSession:this.props.userInSession})))}}]),t}(a.Component),I=function(e){var t=e.title,n=e.type,a=e.imageUrl,s=e._id;return console.log(s),r.a.createElement("div",{className:"container"},r.a.createElement(v.b,{to:"/notices/".concat(s)},r.a.createElement("article",{className:"row coaster-card"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:a,alt:t})),r.a.createElement("div",{className:"text col-8"},r.a.createElement("h3",null,t),r.a.createElement("p",null,n)))))},S=(n(130),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.updateList()},e.updateList=function(){e.services.getNotices().then(function(t){console.log(t),e.setState({notice:t.data})}).catch(function(e){return console.log(e)})},e.state={notice:[]},e.services=new b,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Prueba para ver noticias"),r.a.createElement("div",{className:"noticias"},this.state.notice.map(function(e){return r.a.createElement(I,Object.assign({key:e._id},e))}))))}}]),t}(a.Component)),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleMenu=function(){return document.querySelector(".menu").classList.toggle("abierto")},n.logout=function(){n.authServices.logout().then(function(e){n.props.setUser(null)}).catch(function(e){return console.log(e)})},n.changeState=function(){n.setState({visible:!0}),console.log(n.state.visible)},n.authServices=new d,n.state={visible:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log(this.state.visible);var e=this.props.userInSession?this.props.userInSession.data.username:"invitado";return this.props.userInSession?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toggle-menu",onClick:this.toggleMenu},"\u2261 "),r.a.createElement("header",{className:"menu"},r.a.createElement("h1",null,"ApPlay"),r.a.createElement("nav",null,"ADMIN"===this.props.role?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{to:"/create"},"Crear")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/games"},"Juegos")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/notices"},"Noticias")),r.a.createElement("li",null,r.a.createElement("div",{onClick:this.logout},"Cerrar sesi\xf3n")),r.a.createElement("li",null,r.a.createElement("small",null,"Bienvenid@, ",e))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{to:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/games"},"Juegos")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/notices"},"Noticias")),r.a.createElement("li",null,r.a.createElement("div",{onClick:this.logout},"Cerrar sesi\xf3n")),r.a.createElement("li",null,r.a.createElement("small",null,"Bienvenid@, ",e)))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toggle-menu",onClick:this.toggleMenu},"\u2261 "),r.a.createElement("header",{className:"menu"},r.a.createElement("h1",null,"ApPlay"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{to:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/games"},"Juegos")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/notices"},"Noticias")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/signup"},"Registro")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/login"},"Inicio de sesi\xf3n")),r.a.createElement("li",null,r.a.createElement("small",null,"Bienvenid@, ",e))))))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.authservices.signup(a,r).then(function(e){n.setState({username:"",password:""}),n.props.setUser(e),n.props.history.push("/notices")}).catch(function(e){return console.log(e.response.data.message)})},n.state={username:"",password:""},n.authservices=new d,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Registro de usuario"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},"Usuario: ",r.a.createElement("br",null)," ",r.a.createElement("input",{name:"username",className:"form",type:"text",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Contrase\xf1a: ",r.a.createElement("br",null)," ",r.a.createElement("input",{name:"password",className:"form",type:"password",value:this.state.password,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"btn btn-outline-light",value:"Registrar"})))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.authServices.login(a,r).then(function(e){n.setState({username:"",password:""}),n.props.setUser(e),n.props.history.push("/notices")}).catch(function(e){return console.log(e.response.data.message)})},n.state={username:"",password:""},n.authServices=new d,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container login"},r.a.createElement("h1",null,"Inicio de sesi\xf3n de usuario"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},"Usuario: ",r.a.createElement("br",null),r.a.createElement("input",{name:"username",className:"form",type:"text",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Contrase\xf1a: ",r.a.createElement("br",null),r.a.createElement("input",{name:"password",className:"form",type:"password",value:this.state.password,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Iniciar sesi\xf3n",className:"btn btn-outline-light"})))}}]),t}(a.Component),F=n(97),M=function e(){var t=this;Object(c.a)(this,e),this.getGames=function(){return t.service.get("getGames")},this.getOneGame=function(e){return t.service.get("getOneGame/".concat(e))},this.postGame=function(e){return t.service.post("postGame",e)},this.handleUpload=function(e){return t.service.post("/upload",e)},this.service=g.a.create({baseURL:"".concat("https://applay2.herokuapp.com/api/"),withCredentials:!0})},L=(n(131),n(132),n(22)),T=n(23),G=n(43);function D(){var e=Object(L.a)(["\n    text-align: ",";\n  "]);return D=function(){return e},e}function P(){var e=Object(L.a)(["\n    background: ",";\n    border-radius: 10px;\n    padding: 4px 8px;\n    margin: 10px;\n    display: inline-block;\n    text-align: ",";\n  "]);return P=function(){return e},e}var A=T.a.div(P(),function(e){return e.server?"black":"blue"},function(e){return e.server?"left":"right"}),R=T.a.div(D(),function(e){return e.server?"left":"right"}),B=function(e){var t=e.children,n=e.server,a=void 0!==n&&n;return r.a.createElement(R,{server:a},r.a.createElement(A,{server:a},t))},_=n(93),J=n.n(_);function z(){var e=Object(L.a)(["\n  width: 20%;\n  padding: 5px;\n  font-size: 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  background: blue;\n  color: white;\n  user-select: none;\n  cursor: pointer;\n  border-radius: 25px;\n"]);return z=function(){return e},e}function q(){var e=Object(L.a)(["\n  width: 80%;\n  padding: 5px;\n  font-size: 20px;\n  box-sizing: border-box;\n  border: 0;\n  border-radius: 25px;\n"]);return q=function(){return e},e}var H=T.a.input(q()),W=T.a.a(z()),K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={text:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"send",value:function(){var e=this.state.text,t=this.props.newMessage;t?(console.log("Sending message: ".concat(e)),t(e)):console.log("missing Callback"),this.setState({text:""})}},{key:"render",value:function(){var e=this,t=this.state.text;return r.a.createElement("div",null,r.a.createElement(H,{value:t,onKeyPress:function(t){"Enter"===t.key&&e.send()},onChange:function(t){e.setState({text:t.target.value})}}),r.a.createElement(W,{onClick:function(){return e.send()}},"Send"))}}]),t}(a.Component);function $(){var e=Object(L.a)(["\n  \n  padding: 10px;\n  width: 400px;\n  height: 600px;\n  margin-left: 60px;\n"]);return $=function(){return e},e}var Q=J()("".concat("https://applay2.herokuapp.com/")),V=T.a.div($()),X=Object(G.c)("messages","setMessages",[]),Y=Object(G.b)({componentDidMount:function(){var e=this.props,t=e.messages,n=e.setMessages;console.log("Chat Ready"),Q.on("front",function(e){console.log("Mensaje del servidor ".concat(e)),t.push({type:"server",msg:e}),n(t)})}}),Z=Object(G.a)(X,Y)(function(e){var t=e.messages,n=e.setMessages;return r.a.createElement(V,null,t.map(function(e,t){var n=e.type,a=e.msg;return r.a.createElement(B,{server:"server"===n,key:t},a)}),r.a.createElement(K,{newMessage:function(e){Q.emit("mensajeria",e),t.push({type:"me",msg:e}),n(t)}}))}),ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={game:{}},n.service=new M,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getOneGame(this.props.match.params.id,this.props.userInSession).then(function(t){return e.setState({game:t.data})}).catch(function(e){return console.log("err",e)})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"ApPlay"),r.a.createElement("div",{className:" esto row"},r.a.createElement("div",{className:"col-6 info"},r.a.createElement("img",{src:this.state.game.imageUrl,alt:this.state.game.name}),r.a.createElement("h2",null," ",this.state.game.name," "),r.a.createElement("h3",null," ",this.state.game.plataform," "),r.a.createElement("h4",null," ",this.state.game.price," \u20ac "),r.a.createElement("h5",null," ",this.state.game.whattsapp," "),r.a.createElement("p",null," ",this.state.game.comentary," ")),r.a.createElement("div",{className:"col-6"},r.a.createElement(Z,null)))))}}]),t}(a.Component),te=function(e){var t=e.imageUrl,n=e.name,a=e.plataform,s=e.price,l=e.whattsapp,c=e.comentary,o=e._id;return r.a.createElement("article",{className:"game-card col-md-3"},r.a.createElement("img",{src:t,alt:n}),r.a.createElement("hr",null),r.a.createElement(v.b,{to:"/games/".concat(o)},r.a.createElement("div",null,r.a.createElement("h4",null,n),r.a.createElement("h5",null,"> ",a),r.a.createElement("p",null,s," \u20ac"),r.a.createElement("p",null,"Contacto: ",l),r.a.createElement("p",{className:"coment"},c))))},ne=(n(164),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChangeInput=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.service.postGame(n.state).then(function(e){n.props.closeModal(),n.props.updateGameList(),n.props.showToast()}).catch(function(e){return console.log("error",e)})},n.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),n.service.handleUpload(t).then(function(e){return n.setState({imageUrl:e.data.secure_url})}).catch(function(e){return console.log(e)})},n.state={imageUrl:"",name:"",plataform:"",price:"",whattsapp:"",comentary:""},n.service=new M,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"formulario"},r.a.createElement("h4",null,"Nuevo juego"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-nombre"},"Nombre del juego"),r.a.createElement("input",{name:"name",type:"text",className:"form-control",id:"input-nombre",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-plataforma"},"Plataforma"),r.a.createElement("input",{name:"plataform",type:"text",className:"form-control",id:"input-plataforma",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-precio"},"Precio"),r.a.createElement("input",{name:"price",type:"text",className:"form-control",id:"input-precio",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-whattsapp"},"Contacto"),r.a.createElement("input",{name:"whattsapp",type:"text",className:"form-control",id:"input-whattsapp",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-comentario"},"Comentario"),r.a.createElement("input",{name:"comentary",type:"text",className:"form-control",id:"input-comentario",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-img"},"URL imagen"),r.a.createElement("input",{name:"imageUrl",type:"file",className:"form-control",id:"input-img",onChange:this.handleFileUpload})),r.a.createElement("div",{className:"botones"},r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-big"},"Anunciar"),r.a.createElement("button",{className:"btn  btn-danger btn-md",onClick:this.props.closeModal},"Cerrar"))))}}]),t}(a.Component)),ae=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChangeInput=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value),function(){return n.props.search(n.state.name)})},n.state={name:""},console.log(e),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form-group"},r.a.createElement("label",null,"Search"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",onChange:this.handleChangeInput}))}}]),t}(a.Component),re=(n(165),n(188)),se=n(187),le=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){return e.updateList()},e.updateList=function(){e.services.getGames().then(function(t){e.setState({game:t.data,gameCopy:t.data})}).catch(function(e){return console.log(e)})},e.handleModalOpen=function(){return e.setState({showModal:!0})},e.handleModalClose=function(){return e.setState({showModal:!1})},e.handleToastOpen=function(){return e.setState({showToast:!0})},e.handleToastClose=function(){return e.setState({showToast:!1})},e.searchGame=function(t){var n=Object(F.a)(e.state.gameCopy);n=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),e.setState({game:n})},e.state={game:[],gameCopy:[],showModal:!1,showToast:!1},e.services=new M,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{onClose:this.handleToastClose,show:this.state.showToast,delay:5e3,autohide:!0,style:{position:"fixed",bottom:0,right:10,zIndex:9999}},r.a.createElement(re.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Anuncio subido correctamente")),r.a.createElement(re.a.Body,null,"Anuncio guardado en la Base de Datos")),r.a.createElement("div",{className:"container"},r.a.createElement(se.a,{show:this.state.showModal,onHide:this.handleModalClose},r.a.createElement(se.a.Body,null,r.a.createElement(ne,{closeModal:this.handleModalClose,updateGameList:this.updateList,showToast:this.handleToastOpen}))),r.a.createElement("h1",null,"Juegos de segunda mano"),r.a.createElement("div",{className:"busqueda"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light btn-big",onClick:this.handleModalOpen},"Anuncia tu juego")),r.a.createElement("div",null,r.a.createElement(ae,{search:this.searchGame}))),r.a.createElement("div",{className:"row justify-content-center"},this.state.game.map(function(e){return r.a.createElement(te,Object.assign({key:e._id},e))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Juegos de segunda mano"),r.a.createElement("div",{className:"busqueda"},r.a.createElement("div",null,r.a.createElement(ae,{search:this.searchGame}))),r.a.createElement("div",{className:"row justify-content-center"},this.state.game.map(function(e){return r.a.createElement(te,Object.assign({key:e._id},e))}))))}}]),t}(a.Component),ce=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChangeInput=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.handleFormSubmit=function(e){e.preventDefault(),n.service.postNotice(n.state).then(function(e){return window.location.assign("/notices")}).catch(function(e){return console.log("error",e)})},n.state={title:"",author:"",plataform:"",genre:"",type:"",imageUrl:"",review:"",note:"",best:"",worst:""},n.service=new b,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Nueva noticia"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-titulo"},"Titulo"),r.a.createElement("input",{name:"title",type:"text",className:"form-control",id:"input-titulo",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-autor"},"Autor"),r.a.createElement("input",{name:"author",type:"text",className:"form-control",id:"input-autor",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-plataforma"},"Plataforma"),r.a.createElement("input",{name:"plataform",type:"text",className:"form-control",id:"input-plataforma",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-genero"},"G\xe9nero"),r.a.createElement("input",{name:"genre",type:"text",className:"form-control",id:"input-genero",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-tipo"},"Tipo"),r.a.createElement("input",{name:"type",type:"text",className:"form-control",id:"input-tipo",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-img"},"URL imagen"),r.a.createElement("input",{name:"imageUrl",type:"text",className:"form-control",id:"input-img",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-analisis"},"An\xe1lisis"),r.a.createElement("textarea",{rows:"10",cols:"40",name:"review",type:"text-area",className:"form-control",id:"input-analisis",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-note"},"Nota"),r.a.createElement("input",{name:"note",type:"number",className:"form-control",id:"input-note",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-best"},"Lo mejor"),r.a.createElement("input",{name:"best",type:"text",className:"form-control",id:"input-best",onChange:this.handleChangeInput})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-worst"},"Lo peor"),r.a.createElement("input",{name:"worst",type:"text",className:"form-control",id:"input-worst",onChange:this.handleChangeInput})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-sm"},"Crear")))}}]),t}(a.Component),oe=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(ce,null))},ie=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).setTheUser=function(t){console.log(t),e.setState({loggedInUser:t})},e.fetchUser=function(){null===e.state.loggedInUser&&e.authServices.loggedin().then(function(t){return e.setState({loggedInUser:t})}).catch(function(t){return e.setState({loggedInUser:!1})})},e.state={loggedInUser:null},e.authServices=new d,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{setUser:this.setTheUser,userInSession:this.state.loggedInUser,role:this.state.loggedInUser.data.role}),r.a.createElement(h.d,null,r.a.createElement(f,{path:"/create",user:this.state.loggedInUser,component:oe}),r.a.createElement(h.b,{path:"/games",exact:!0,render:function(){return r.a.createElement(le,{userInSession:e.state.loggedInUser})}}),r.a.createElement(h.b,{path:"/notices",exact:!0,render:function(){return r.a.createElement(S,{userInSession:e.state.loggedInUser})}}),r.a.createElement(h.b,{path:"/notices/:id",exact:!0,render:function(t){return r.a.createElement(w,Object.assign({userInSession:e.state.loggedInUser},t))}}),r.a.createElement(h.b,{path:"/games/:id",exact:!0,render:function(t){return r.a.createElement(ee,Object.assign({userInSession:e.state.loggedInUser},t))}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),r.a.createElement(h.d,null,r.a.createElement(f,{path:"/create",user:this.state.loggedInUser,component:oe}),r.a.createElement(h.b,{path:"/games",exact:!0,render:function(){return r.a.createElement(le,{userInSession:e.state.loggedInUser})}}),r.a.createElement(h.b,{path:"/notices",exact:!0,render:function(){return r.a.createElement(S,{userInSession:e.state.loggedInUser})}}),r.a.createElement(h.b,{path:"/notices/:id",exact:!0,render:function(t){return r.a.createElement(w,Object.assign({userInSession:e.state.loggedInUser},t))}}),r.a.createElement(h.b,{path:"/games/:id",exact:!0,render:function(t){return r.a.createElement(ee,Object.assign({userInSession:e.state.loggedInUser},t))}}),r.a.createElement(h.b,{path:"/signup",exact:!0,render:function(t){return r.a.createElement(U,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(h.b,{path:"/login",exact:!0,render:function(t){return r.a.createElement(k,Object.assign({},t,{setUser:e.setTheUser}))}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v.a,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(183)}},[[98,1,2]]]);
//# sourceMappingURL=main.522945f8.chunk.js.map