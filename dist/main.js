(()=>{"use strict";var e="https://mm-jp4.aws.macromicro.me";window.addEventListener("load",(()=>{let t,n,l;liff.init({liffId:"1660857311-QDo3BLk3",withLoginOnExternalBrowser:!0}).then((()=>{let e,c;e=liff.isInClient(),c=liff.isLoggedIn(),liff.getProfile().then((e=>{t=e.userId,n=e.displayName,l=e.pictureUrl,h()})),y.addEventListener("click",(()=>{h()})),r.addEventListener("click",(()=>{c&&liff.scanCode?(a.style.display="none",r.style.display="none",y.style.display="none",liff.scanCodeV2().then((e=>{console.log(e.value);var n=e.value;Object.assign(n,{line_uid:t}),console.log("obj: "+n)})).catch((e=>{alert("liff error")}))):alert("請先登入Line")})),f.addEventListener("click",(()=>{}))})).catch((e=>{console.log(e)}));const c=document.getElementById("header"),s=document.getElementById("pic"),o=document.getElementById("name"),d=document.getElementById("currentNum"),i=document.getElementById("totalNum"),a=document.getElementById("btns"),r=document.getElementById("qrScan"),y=document.getElementById("againcheck"),m=document.getElementById("textDiv"),p=document.getElementById("code"),u=document.getElementById("currentName"),g=document.getElementById("passed"),f=document.getElementById("passbtn");function h(){fetch(e+"/forum23/api/rsvp/checker",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_uid:t,display_name:n,picture_url:l})}).then((e=>e.json())).then((t=>{console.log("checker",t),a.style.display="block",r.style.display="none",y.style.display="none",1==t.success?(fetch(e+"/forum23/api/rsvp/stats",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{console.log("stats",e),e.success&&(d.innerHTML=e.cnt_checked,i.innerHTML=e.cnt)})).catch((e=>{alert(e)})),c.style.display="block",s.src=profile.pictureUrl,o.innerHTML=n,r.style.display="block"):0==t.success&&401==t.error?y.style.display="block":alert("審核不通過")})).catch((e=>{console.log("錯誤:",e)}))}document.getElementById("cancelbtn").addEventListener("click",(()=>{p.innerHTML="",u.innerHTML="",f.style.display="none",g.style.display="none",m.style.display="none",a.style.display="block"}))}))})();