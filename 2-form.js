import"./assets/styles-BSWRujjw.js";let l=document.querySelector(".feedback-form"),s=document.querySelector("#email"),m=document.querySelector("#message");const a="feedback-form-state";let e={email:"",message:""};const o=localStorage.getItem(a);if(o)try{e=JSON.parse(o),s.value=e.email||"",m.value=e.message||""}catch(t){console.error("Error parsing saved data from localStorage:",t),localStorage.removeItem(a)}l.addEventListener("input",t=>{const{name:r,value:i}=t.target;r&&r in e&&(e[r]=i.trim(),localStorage.setItem(a,JSON.stringify(e)))});function n(){return s.value.trim()!==""&&m.value.trim()!==""}l.addEventListener("submit",t=>{if(t.preventDefault(),console.log("Form submitted successfully with data:",e),!n())return alert("Please fill out all fields");console.log(e),e={email:"",message:""},localStorage.setItem(a,JSON.stringify(e)),l.reset()});
//# sourceMappingURL=2-form.js.map
