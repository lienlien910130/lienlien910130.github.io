(()=>{"use strict";var e="https://mm-jp4.aws.macromicro.me";window.addEventListener("load",(()=>{let t,n,l;liff.init({liffId:"1660857311-QDo3BLk3",withLoginOnExternalBrowser:!0}).then((()=>{let s,c;s=liff.isInClient(),c=liff.isLoggedIn(),liff.getProfile().then((e=>{t=e.userId,n=e.displayName,l=e.pictureUrl,g()})),y.addEventListener("click",(()=>{g()})),r.addEventListener("click",(()=>{c&&liff.scanCode?(d.style.display="none",r.style.display="none",y.style.display="none",liff.scanCodeV2().then((n=>{var l,s=JSON.parse(n.value);s.line_uid=t,document.getElementById("result-b").innerHTML=JSON.stringify(s),l=s,fetch(e+"/forum23/api/rsvp/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>e.json())).then((t=>{if(console.log("stats",t),1==t.success){if(p.innerHTML=l.passcode,u.innerHTML=t.data.name,null!==t.data.checked){var n=new Date(1e3*t.data.checked),s=n.getHours(),c=n.getMinutes();h.innerHTML="已於 "+s+":"+c+" 由"+t.data.checker_name+"審核入場",h.style.display="block"}else f.style.display="block",f.addEventListener("click",(()=>{!function(t){fetch(e+"/forum23/api/rsvp/check-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{console.log("checkIn",e),1==e.success?(k(),E()):(alert("驗證錯誤:"+JSON.stringify(e)),k())})).catch((e=>{alert(e)}))}(l)}));m.style.display="block"}else alert("QR 無效"),k()})).catch((e=>{alert(e)}))})).catch((e=>{alert("Scan錯誤:"+e)}))):alert("請由 Line App 打開")})),document.getElementById("reload").addEventListener("click",(()=>{window.location.reload()}))})).catch((e=>{console.log(e)}));const s=document.getElementById("header"),c=document.getElementById("pic"),o=document.getElementById("name"),i=document.getElementById("currentNum"),a=document.getElementById("totalNum"),d=document.getElementById("btns"),r=document.getElementById("qrScan"),y=document.getElementById("againcheck"),m=document.getElementById("textDiv"),p=document.getElementById("code"),u=document.getElementById("currentName"),h=document.getElementById("passed"),f=document.getElementById("passbtn");function g(){fetch(e+"/forum23/api/rsvp/checker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_uid:t,display_name:n,picture_url:l})}).then((e=>e.json())).then((e=>{console.log("checker",e),d.style.display="block",r.style.display="none",y.style.display="none",1==e.success?(E(),s.style.display="flex",c.src=l,o.innerHTML=n,r.style.display="block"):0==e.success&&401==e.error?y.style.display="block":alert("審核不通過")})).catch((e=>{console.log("錯誤:",e)}))}function E(){fetch(e+"/forum23/api/rsvp/stats",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log("stats",e),e.success&&(i.innerHTML=e.cnt_checked,a.innerHTML=e.cnt)})).catch((e=>{alert(e)}))}function k(){p.innerHTML="",u.innerHTML="",f.style.display="none",h.style.display="none",m.style.display="none",d.style.display="block",r.style.display="block"}document.getElementById("cancelbtn").addEventListener("click",(()=>{k()}))}))})();