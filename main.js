var main;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_type_disable",inputErrorClass:"popup__input_type_error",errorSpanElement:"popup__span_type_error",errorClass:"popup__error_visible",overlay:".popup__overlay"};function r(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(r.inactiveButtonClass),t.removeAttribute("disabled","disabled")):(t.classList.add(r.inactiveButtonClass),t.setAttribute("disabled","disabled"))}var n=document.querySelector(".popup_img"),o=document.querySelector(".popup_edit"),a=document.querySelector(".popup_add"),c=document.querySelector(".popup_avatar"),u=document.querySelector(".profile__avatarConteiner"),i=document.querySelector(".popup__exit-button_avatar"),l=c.querySelector(".popup__input_avatar"),d=document.querySelector(".popup__form_avatar"),s=document.querySelector(".profile__add-button"),p=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup__exit-button_edit"),m=document.querySelector(".popup__exit-button_add"),f=document.querySelector(".popup__form_add"),v=document.querySelector(".popup__form_edit"),y=document.querySelector(".profile__name_text"),S=document.querySelector(".profile__caption"),h=document.querySelector(".popup__exit-button_img"),b=o.querySelector(".popup__input_name"),q=o.querySelector(".popup__input_caption");function k(e){"Escape"===e.key&&L(document.querySelector(".popup_opened"))}function g(e){L(e.target.closest(".popup"))}function E(e){e.classList.add("popup_opened"),document.addEventListener("keydown",k),e.querySelector(".popup__overlay").addEventListener("click",g)}function L(e){document.removeEventListener("keydown",k),e.querySelector(".popup__overlay").removeEventListener("click",g),e.classList.remove("popup_opened")}function C(){document.querySelector(".popup_opened").querySelector(".popup__button").textContent="Сохранение..."}var A={baseUrl:"https://nomoreparties.co/v1/plus-cohort-4/",headers:{authorization:"ede36a6d-3828-4792-96dd-b17df42302b2","Content-Type":"application/json"}};function x(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var U=document.querySelector(".cards"),w=document.querySelector(".popup_img"),O=document.querySelector(".popup__image");function T(e,t){var r=e.id,n=document.querySelector("#card").content.querySelector(".card").cloneNode(!0);n.id=r;var o=n.querySelector(".card__image");n.querySelector(".card__text").textContent=e.name,o.setAttribute("src",e.link),o.setAttribute("alt",e.name),n.querySelector(".card__likeValue").textContent=e.likes;for(var a=n.querySelector(".card__like"),c=0;c<e.likes;c++)e.likesOwnersArr[c]==t&&a.classList.add("card__like_active");a.addEventListener("click",(function(e){!function(e,t){t.querySelector(".card__like").classList.contains("card__like_active")?function(e){return fetch("".concat(A.baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:A.headers}).then(x)}(e).then((function(t){j(e,t.likes.length,"delete")})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(A.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:A.headers}).then(x)}(e).then((function(t){j(e,t.likes.length,"add")})).catch((function(e){console.log(e)}))}(r,n)}));var u=n.querySelector(".card__delete-button");return e.owner!=t?u.classList.add("card__delete-button_disable"):u.addEventListener("click",(function(){var e;(e=r,fetch("".concat(A.baseUrl,"cards/").concat(e),{method:"DELETE",headers:A.headers}).then(x)).then((function(e){!function(e){document.getElementById(e).remove()}(r)}))})),o.addEventListener("click",(function(e){var t=e.target.getAttribute("src");O.setAttribute("src",t);var r=n.querySelector(".card__text").textContent;document.querySelector(".popup__text").textContent=r,O.setAttribute("alt",r),E(w)})),n}function j(e,t,r){var n=document.getElementById(e),o=n.querySelector(".card__like");n.querySelector(".card__likeValue").textContent=t,"add"==r?o.classList.add("card__like_active"):o.classList.remove("card__like_active")}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var B=document.querySelector(".profile__avatar"),I=".popup__form",M=".popup__button",N="";function D(e){var t=e.querySelector(".popup__button");t.classList.add("popup__button_type_disable"),t.setAttribute("disabled","disabled")}u.addEventListener("click",(function(){E(c),D(c)})),i.addEventListener("click",(function(){L(c)})),d.addEventListener("submit",(function(){var e;C(),(e=l.value,fetch("".concat(A.baseUrl,"users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:e})}).then(x)).then((function(e){var n={name:e.name,caption:e.about,imageUrl:e.avatar};B.src=n.imageUrl,y.textContent=n.name,S.textContent=n.caption,l.value="",r(Array.from(d.querySelectorAll(I)),d.querySelector(M),t),L(c)})).finally((function(e){c.querySelector(".popup__button").textContent="Сохранить"})).catch((function(e){console.log(e)}))})),p.addEventListener("click",(function(){b.value=y.textContent,q.value=S.textContent,E(o),D(o)})),_.addEventListener("click",(function(){L(o)})),s.addEventListener("click",(function(){E(a),D(a)})),m.addEventListener("click",(function(){L(a)})),h.addEventListener("click",(function(){L(n)})),f.addEventListener("submit",(function(e){C();var t,r,n,o=a.querySelector(".popup__input_cardname"),c=a.querySelector(".popup__input_link");(t={name:o.value,link:c.value},r=t.name,n=t.link,fetch("".concat(A.baseUrl,"cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:r,link:n})}).then(x)).then((function(e){o.value="",c.value="";for(var t=e,r=[],n=0;n<t.likes.length;n++)t.likes[n]._id,r.push(t.likes[n]._id);var u={name:t.name,link:t.link,id:t._id,likes:t.likes.length,owner:t.owner._id,likesOwnersArr:r};L(a);var i=T(u,N);U.prepend(i)})).finally((function(e){a.querySelector(".popup__button").textContent="Создать"})).catch((function(e){console.log(e)})),Array.from(f.querySelectorAll(".popup__input")),f.querySelector(M)})),v.addEventListener("submit",(function(){var e,t;C(),(e=b.value,t=q.value,fetch("".concat(A.baseUrl,"users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:e,about:t})}).then(x)).then((function(e){b.value="",q.value="";var t={name:e.name,caption:e.about,imageUrl:e.avatar};B.src=t.imageUrl,y.textContent=t.name,S.textContent=t.caption,Array.from(v.querySelectorAll(I)),v.querySelector(M),L(o)})).finally((function(e){o.querySelector(".popup__button").textContent="Сохранить"})).catch((function(e){console.log(e)}))})),Promise.all([fetch("".concat(A.baseUrl,"users/me"),{headers:A.headers}).then(x),fetch("".concat(A.baseUrl,"cards"),{headers:A.headers}).then(x)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1],c={name:o.name,caption:o.about,imageUrl:o.avatar,userId:o._id};B.src=c.imageUrl,y.textContent=c.name,S.textContent=c.caption,N=c.userId,a.forEach((function(e){for(var t=[],r=0;r<e.likes.length;r++)e.likes[r]._id,t.push(e.likes[r]._id);var n=T({name:e.name,link:e.link,id:e._id,likes:e.likes.length,owner:e.owner._id,likesOwnersArr:t},N);U.append(n)}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);r(n,o,t),n.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorSpanElement),n.textContent=""}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorSpanElement)}(e,t,t.validationMessage,r)}(e,a,t),r(n,o,t)}))}))}(t,e)}))}(t),main=e})();