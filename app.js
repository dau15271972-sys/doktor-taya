document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('share').addEventListener('click',async()=>{
 const url='https://doctor-taya.cream-hen-4860.chatgpt.site';
 const status=document.getElementById('share-status');
 try{if(navigator.share){await navigator.share({title:'Доктор Тая — ветеринарный врач',text:'Дмитриева Таисия Олеговна. Приём в Санкт-Петербурге и онлайн-консультации.',url});}else if(navigator.clipboard){await navigator.clipboard.writeText(url);status.textContent='Ссылка скопирована';}else{status.textContent=url;}}catch(e){if(e.name!=='AbortError')status.textContent='Ссылка: '+url;}
});
