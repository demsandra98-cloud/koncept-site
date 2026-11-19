// задержка по порядку среди соседей: блоки идут каскадом
document.querySelectorAll('.rv').forEach(function(el){
  var n=Array.prototype.indexOf.call(el.parentNode.children,el);
  el.style.setProperty('--dl',Math.min(n,5)*0.08+'s');
});
// заголовок обрезан clip-path и для IntersectionObserver «невидим»: следим за его контейнером
var hio=new IntersectionObserver(function(es){es.forEach(function(x){
  if(x.isIntersecting){x.target.__h.forEach(function(h){h.classList.add('in')});hio.unobserve(x.target)}})},{threshold:.1});
document.querySelectorAll('h1.rv,h2.rv,h3.rv').forEach(function(h){
  var p=h.parentNode; (p.__h=p.__h||[]).push(h); hio.observe(p);
});
// страховка: заголовки в зоне видимости открываем по прокрутке, даже если наблюдатель не сработал
function revealHeads(){var vh=innerHeight;document.querySelectorAll('h1.rv:not(.in),h2.rv:not(.in),h3.rv:not(.in)').forEach(function(h){var r=h.getBoundingClientRect();if(r.top<vh*0.92&&r.bottom>0)h.classList.add('in')})}
addEventListener('scroll',revealHeads,{passive:true});addEventListener('load',revealHeads);addEventListener('resize',revealHeads);revealHeads();


// Защита почты от спам-ботов и автоматических парсеров
function decodeProtectedEmails(){
  document.querySelectorAll('[data-em-user]').forEach(function(el){
    var u = el.getAttribute('data-em-user');
    var d = el.getAttribute('data-em-dom');
    if(u && d){
      var full = u + '@' + d;
      el.href = 'mailto:' + full;
      el.textContent = full;
    }
  });
}
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', decodeProtectedEmails);
} else {
  decodeProtectedEmails();
}
