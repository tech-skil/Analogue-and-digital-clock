

function stime(){
  setInterval(() => {
    d = new Date();
    htime = d.getHours(); 
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation =6*mtime;
    srotation =6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg) `;
  }, 1000 );
  setTimeout(tm,1000)
  }
function tm(){
  var d = new Date();
  var h = d.getHours(); 
  var m= d.getMinutes();
  var s = d.getSeconds();
  session = "AM";
  if (h>12) {
    session = "PM";
    h=h-12;
  }
  h= h<10 ? "0"+h:h;
  m= m<10 ? "0"+m:m;
  s= s<10 ? "0"+s:s;
  var times = h+":" +m+" : "+s+ " "+session;
  document.getElementsByTagName('H1')[0].innerText = times;
  setTimeout(tm,1000)
}