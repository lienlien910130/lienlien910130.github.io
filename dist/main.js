(()=>{"use strict";window.addEventListener("load",(()=>{let e,t,n;liff.init({liffId:"1660857311-QDo3BLk3"}).then((()=>{let i,d,l,c,a,o;i=liff.getLanguage(),d=liff.getVersion(),l=liff.isInClient(),c=liff.isLoggedIn(),a=liff.getOS(),o=liff.getLineVersion(),document.getElementById("result-basic").value=`語言: ${i}\nLIFF SDK Version: ${d}\nisInClient: ${l}\n是否登入: ${c}\n作業系統: ${a}\nLine Version: ${o}`,document.getElementById("login").addEventListener("click",(()=>{c||liff.login({redirectUri:"https://lienlien910130.github.io"})})),document.getElementById("profile").addEventListener("click",(()=>{c&&liff.getProfile().then((e=>{document.getElementById("result-info").value=`${JSON.stringify(e)}`}))})),document.getElementById("getEmail").addEventListener("click",(()=>{const e=liff.getDecodedIDToken().email;document.getElementById("result-info").value=`${e}`})),document.getElementById("qrScan").addEventListener("click",(()=>{c&&liff.scanCode&&liff.scanCodeV2().then((i=>{document.getElementById("result-qr").value=i.value,fetch("https://1851255c-6a66-400a-8682-69454cae4f53.mock.pstmn.io/forum23/rsvp/api/qr-verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:i.value})}).then((e=>e.json())).then((i=>{console.log(i);var d=document.getElementById("result-api");if(0==i.success)d.innerHTML="無效";else{e=!1!==i.data.checked,t=i.data.id,n=i.data.created;var l=e?"已檢查":"未檢查";d.innerHTML=`${l}\nid: ${t}\n姓名: ${i.data.name}\n手機: ${i.data.mobile}\n建立時間: ${n}`,e?d.innerHTML+=`\n檢查時間: ${i.data.checked}\n檢查人員: ${i.data.checked_by}`:(document.getElementById("appendButton").innerHTML='<input id="vid" /><input id="vcreated" /><button id="checkIn">通關</button>',document.getElementById("checkIn").addEventListener("click",(document.getElementById("vid").value=t,void(document.getElementById("vcreated").value=n))))}})).catch((e=>{console.log("錯誤:",e)}))})).catch((e=>{document.getElementById("result-qr").value=e}))}))})).catch((e=>{console.log(e)}))}))})();