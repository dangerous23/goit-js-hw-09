import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state");s&&(e=JSON.parse(s),t.email.value=e.email,t.message.value=e.message);t.addEventListener("input",function(a){const{name:l,value:m}=a.target;e[l]=m,localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",function(a){a.preventDefault(),e.email.trim()===""||e.message.trim()===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),t.reset(),e={email:"",message:""})});
//# sourceMappingURL=commonHelpers2.js.map