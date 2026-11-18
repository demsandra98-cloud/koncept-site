// Подписи авторов: мелкий текст в углу фото (только для снимков с известным автором)
(function(){
var C={web_sport2:'Dvp777',web_air1:'SpeedOfLight',web_air2:'Vyacheslav Bukharov',web_air3:'Artyom Svetlov',
web_edu2:'Nsu marketing',web_edu3:'Maxim Apanasevich',web_ret1:'К.Артём.1',web_hotel1:'К.Артём.1',web_mega1:'К.Артём.1',web_mega2:'К.Артём.1',
web_rail1:'Jan van der Wolf / Pexels',bar_main:'Artyom Svetlov'};
['tol_ant_main','tol_ant_cover','tol_ant_sign','tol_ant_belt','tol_ant_belt2','tol_ant_hall','tol_ant_col'].forEach(function(k){C[k]='АНТ ПРОЕКТ'});
['ref_bar','ref_rs1','ref_rs2','ref_hil1','ref_hil2','ref_ngu1','ref_ngu2','ref_ngu3','ref_ckid','ref_ustk'].forEach(function(k){C[k]='Glass Factory NSK'});
['kam_main','kam_letters','kam_windows','kam_left','kam_right'].forEach(function(k){C[k]='Тимофей Тимофеев'});
function add(img){
  var m=(img.getAttribute('src')||'').match(/([^\/]+)\.jpg/);if(!m||!C[m[1]])return;
  var p=img.parentNode;if(p.querySelector(':scope>.cr'))return;
  if(img.closest('.th'))return; // мелкие превью не подписываем
  if(getComputedStyle(p).position==='static')p.style.position='relative';
  var s=document.createElement('span');s.className='cr';s.textContent='Фото: '+C[m[1]];p.appendChild(s);
}
document.querySelectorAll('img').forEach(add);
})();
