(()=>{"use strict";var e="https://mm-jp4.aws.macromicro.me";window.addEventListener("load",(()=>{let t,n,l;liff.init({liffId:"1660857311-QDo3BLk3",withLoginOnExternalBrowser:!0}).then((()=>{let s,c;s=liff.isInClient(),c=liff.isLoggedIn(),liff.getProfile().then((e=>{t=e.userId,n=e.displayName,l=e.pictureUrl,E()})),y.addEventListener("click",(()=>{E()})),r.addEventListener("click",(()=>{c?(o.style.display="none",r.style.display="none",y.style.display="none",liff.scanCodeV2().then((n=>{var l,s=JSON.parse(n.value);s.line_uid=t,l=s,fetch(e+"/forum23/api/rsvp/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>e.json())).then((t=>{if(1==t.success){if(m.innerHTML=l.passcode,u.innerHTML=t.data.name,null!==t.data.checked){var n=new Date(1e3*t.data.checked),s=n.getHours(),c=n.getMinutes();h.innerHTML="已於 "+s+":"+c+" 由"+t.data.checker_name+"審核入場",h.style.display="block"}else f.style.display="block",f.addEventListener("click",(()=>{!function(t){fetch(e+"/forum23/api/rsvp/check-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{1==e.success?(I(),k()):(alert("驗證錯誤:"+JSON.stringify(e)),I())})).catch((e=>{alert(e),I()}))}(l)}));p.style.display="block"}else alert("QRcode無效"),I()})).catch((e=>{alert(e),I()}))})).catch((e=>{alert("Scan錯誤:"+e),I()}))):alert("請由 Line App 打開")}))})).catch((e=>{console.log(e)}));const s=document.getElementById("header"),c=document.getElementById("pic"),i=document.getElementById("name"),a=document.getElementById("currentNum"),d=document.getElementById("totalNum"),o=document.getElementById("btns"),r=document.getElementById("qrScan"),y=document.getElementById("againcheck"),p=document.getElementById("textDiv"),m=document.getElementById("code"),u=document.getElementById("currentName"),h=document.getElementById("passed"),f=document.getElementById("passbtn"),g=document.getElementById("cancelbtn");function E(){fetch(e+"/forum23/api/rsvp/checker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_uid:t,display_name:n,picture_url:l})}).then((e=>e.json())).then((e=>{o.style.display="block",r.style.display="none",y.style.display="none",1==e.success?(k(),s.style.display="flex",c.src=l,i.innerHTML=n,r.style.display="block"):0==e.success&&401==e.error?y.style.display="block":alert("審核不通過")})).catch((e=>{console.log("錯誤:",e)}))}function k(){fetch(e+"/forum23/api/rsvp/stats",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log("stats",e),e.success&&(a.innerHTML=e.cnt_checked,d.innerHTML=e.cnt)})).catch((e=>{alert(e)}))}function I(){m.innerHTML="",u.innerHTML="",f.style.display="none",h.style.display="none",p.style.display="none",o.style.display="block",r.style.display="block"}c.addEventListener("click",(()=>{window.location.reload()})),g.addEventListener("click",(()=>{I()}))}))})();