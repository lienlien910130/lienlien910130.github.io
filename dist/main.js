(()=>{"use strict";window.addEventListener("load",(()=>{let e,t,n;liff.init({liffId:"1660857311-QDo3BLk3",withLoginOnExternalBrowser:!0}).then((()=>{let l,s;l=liff.isInClient(),s=liff.isLoggedIn(),liff.getProfile().then((l=>{e=l.userId,t=l.displayName,n=l.pictureUrl,f()})),d.addEventListener("click",(()=>{f()})),a.addEventListener("click",(()=>{s&&liff.scanCode?(o.style.display="none",a.style.display="none",d.style.display="none",liff.scanCodeV2().then((t=>{console.log(t.value);var n=t.value;Object.assign(n,{line_uid:e}),fetch("/forum23/api/rsvp/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{if(console.log(e),1==e.success){if(y.innerHTML=t.value.passcode,m.innerHTML=e.data.name,!1!==e.data.checked){var n=new Date(1e3*e.data.checked),l=n.getHours(),s="0"+n.getMinutes();u.innerHTML="已於 "+l+":"+s+" 由"+e.data.checker_name+"審核入場",u.style.display="block"}else p.style.display="block",p.addEventListener("click",(()=>{fetch("/forum23/api/rsvp/check-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)}).then((e=>e.json())).then((e=>{1==e.success||alert("驗證錯誤"),h()})).catch((e=>{alert("驗證錯誤"),h()}))}));r.style.display="block"}else alert("QR 無效"),h()})).catch((e=>{alert("QR 無效"),h()}))})).catch((e=>{alert("liff error")}))):alert("請先登入Line")}))})).catch((e=>{console.log(e)}));const l=document.getElementById("pic"),s=document.getElementById("name"),c=document.getElementById("currentNum"),i=document.getElementById("totalNum"),o=document.getElementById("btns"),a=document.getElementById("qrScan"),d=document.getElementById("againcheck"),r=document.getElementById("textDiv"),y=document.getElementById("code"),m=document.getElementById("currentName"),u=document.getElementById("passed"),p=document.getElementById("passbtn");function f(){fetch("/forum23/api/checker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_uid:e,display_name:t,picture_url:n})}).then((e=>e.json())).then((e=>{console.log(e),o.style.display="block",a.style.display="none",d.style.display="none",1==e.success?(l.src=profile.pictureUrl,s.innerHTML=t,c.innerHTML="123",i.innerHTML="6666",a.style.display="block"):0==e.success&&401==e.error?d.style.display="block":alert("審核不通過")})).catch((e=>{console.log("錯誤:",e)}))}function h(){y.innerHTML="",m.innerHTML="",p.style.display="none",u.style.display="none",r.style.display="none",o.style.display="block"}document.getElementById("cancelbtn").addEventListener("click",(()=>{h()}))}))})();