(()=>{"use strict";var e="https://mm-jp4.aws.macromicro.me";window.addEventListener("load",(()=>{let t,n,i;liff.init({liffId:"1660857311-QDo3BLk3",withLoginOnExternalBrowser:!0}).then((()=>{let s,l;s=liff.isInClient(),l=liff.isLoggedIn(),liff.getProfile().then((e=>{t=e.userId,n=e.displayName,i=e.pictureUrl,E()})),y.addEventListener("click",(()=>{E()})),r.addEventListener("click",(()=>{l?(d.style.display="none",r.style.display="none",y.style.display="none",liff.scanCodeV2().then((n=>{var i,s=JSON.parse(n.value);s.line_uid=t,i=s,fetch(e+"/forum23/api/rsvp/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>e.json())).then((t=>{if(1==t.success){if(p.innerHTML=i.passcode,u.innerHTML=t.data.name,h.style.display=t.data.is_group?"block":"none",null!==t.data.checked){var n=new Date(1e3*t.data.checked),s=n.getHours(),l=n.getMinutes();f.innerHTML="已於 "+s+":"+l+" 由"+t.data.checker_name+"審核入場",f.style.display="block"}else g.style.display="block",g.addEventListener("click",(()=>{!function(t){fetch(e+"/forum23/api/rsvp/check-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{1==e.success?(I(),k(),L.innerHTML="成功入場",setTimeout((()=>{L.innerHTML=""}),3e3)):(alert("驗證錯誤:"+JSON.stringify(e)),I())})).catch((e=>{alert(e),I()}))}(i)}));m.style.display="block"}else I(),L.innerHTML="QRcode無效",setTimeout((()=>{L.innerHTML=""}),3e3)})).catch((e=>{I(),L.innerHTML="QRcode無效",setTimeout((()=>{L.innerHTML=""}),3e3)}))})).catch((e=>{I(),L.innerHTML="QRcode無效",setTimeout((()=>{L.innerHTML=""}),3e3)}))):alert("請由 Line App 打開")}))})).catch((e=>{console.log(e)}));const s=document.getElementById("header"),l=document.getElementById("pic"),c=document.getElementById("name"),a=document.getElementById("currentNum"),o=document.getElementById("totalNum"),d=document.getElementById("btns"),r=document.getElementById("qrScan"),y=document.getElementById("againcheck"),m=document.getElementById("textDiv"),p=document.getElementById("code"),u=document.getElementById("currentName"),h=document.getElementById("group"),f=document.getElementById("passed"),g=document.getElementById("passbtn"),T=document.getElementById("cancelbtn"),L=document.getElementById("msg");function E(){fetch(e+"/forum23/api/rsvp/checker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_uid:t,display_name:n,picture_url:i})}).then((e=>e.json())).then((e=>{d.style.display="block",r.style.display="none",y.style.display="none",1==e.success?(k(),s.style.display="flex",l.src=i,c.innerHTML=n,r.style.display="block"):0==e.success&&401==e.error?y.style.display="block":alert("審核不通過")})).catch((e=>{console.log("錯誤:",e)}))}function k(){fetch(e+"/forum23/api/rsvp/stats",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{if(e.success){var t=!1;""!==a.innerHTML&&(t=!0),a.innerHTML=e.cnt_checked,o.innerHTML=e.cnt,t&&(a.style.animationPlayState="running",setTimeout((()=>{a.style.animationPlayState="paused"}),2e3))}})).catch((e=>{alert("getStats錯誤:"+e)}))}function I(){p.innerHTML="",u.innerHTML="",g.style.display="none",f.style.display="none",m.style.display="none",d.style.display="block",r.style.display="block"}l.addEventListener("click",(()=>{window.location.reload()})),T.addEventListener("click",(()=>{I()}))}))})();