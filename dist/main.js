(()=>{"use strict";window.addEventListener("load",(()=>{let e,t,n;liff.init({liffId:"1660857311-QDo3BLk3"}).then((()=>{let l,i,o,d,a,s;l=liff.getLanguage(),i=liff.getVersion(),o=liff.isInClient(),d=liff.isLoggedIn(),a=liff.getOS(),s=liff.getLineVersion(),document.getElementById("result-basic").value=`language: ${l}\nLIFF SDK version: ${i}\nisInClient: ${o}\nisLoggedIn: ${d}\nos: ${a}\nlineVersion: ${s}`,document.getElementById("login").addEventListener("click",(()=>{d||liff.login({redirectUri:"https://liff.line.me/1660857311-QDo3BLk3"})})),document.getElementById("logout").addEventListener("click",(()=>{d&&(liff.logout(),window.location.reload())})),document.getElementById("profile").addEventListener("click",(()=>{d&&liff.getProfile().then((e=>{document.getElementById("result-info").value=`${JSON.stringify(e)}`}))})),document.getElementById("getEmail").addEventListener("click",(()=>{const e=liff.getDecodedIDToken().email;document.getElementById("result-info").value=`${e}`})),document.getElementById("qrScan").addEventListener("click",(()=>{d&&liff.scanCode&&liff.scanCodeV2().then((l=>{document.getElementById("result-qr").value=l.value,fetch("https://1851255c-6a66-400a-8682-69454cae4f53.mock.pstmn.io/forum23/rsvp/api/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:l.value})}).then((e=>e.json())).then((l=>{console.log(l);var i=document.getElementById("result-api");if(0==l.success)i.value="無效";else{var o=l.data;e=datd.checked,t=o.id,n=o.created,i.value=`${c}\n id: ${t}\n姓名: ${o.name}\n手機: ${o.mobile}\n建立時間: ${n}`}})).catch((e=>{console.log("錯誤:",e)}))})).catch((e=>{document.getElementById("result-qr").value=e}))}))})).catch((e=>{console.log(e)}))}))})();