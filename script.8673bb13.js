parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MO7r":[function(require,module,exports) {
function a(a,n){var e=a.loader,t=a.canvas,o=a.container;t.remove();var r=document.createElement("div");r.classList.add("content-center");var c=document.createElement("h2");c.classList.add("osans-bold"),c.innerHTML="Mohon Maaf";var s=document.createElement("h3");s.classList.add("osans"),s.innerHTML="Bagan Tidak Bisa Ditampilkan";var d=document.createElement("p");d.classList.add("osans"),d.innerHTML='Ada kesalahan dalam menampilkan bagan | Error : <span style="color: red;">'.concat(n,"</span>"),r.appendChild(c),r.appendChild(s),r.appendChild(d),e.remove(),o.appendChild(r)}var n=new WebSlides,e={bar:{loader:document.querySelector(".loader#bar"),canvas:document.querySelector("canvas#barProvinsi"),container:document.querySelector(".wrap#barContainer")},pie:{loader:document.querySelector(".loader#pie"),canvas:document.querySelector("canvas#pieIndonesia"),container:document.querySelector(".wrap#pieContainer")}},t=null,o=null;fetch("https://indonesia-covid-19.mathdro.id/api/provinsi/").then(function(a){return a.json()}).then(function(a){var n=a.data,o=e.bar,r=o.loader,c=o.canvas;r.remove(),t=new Chart(c,{type:"bar",data:{labels:n.map(function(a){return a.provinsi}),datasets:[{label:"Positif",data:n.map(function(a){return a.kasusPosi}),backgroundColor:"#ffc107"},{label:"Sembuh",data:n.map(function(a){return a.kasusSemb}),backgroundColor:"#28a745"},{label:"Meninggal",data:n.map(function(a){return a.kasusMeni}),backgroundColor:"#dc3545"}]}})}).catch(function(n){return a(e.bar,n)}),fetch("https://indonesia-covid-19.mathdro.id/api/").then(function(a){return a.json()}).then(function(a){var n=a.jumlahKasus,t=a.meninggal,r=a.sembuh,c=e.pie,s=c.canvas;return c.loader.remove(),o=new Chart(s,{type:"pie",data:{datasets:[{backgroundColor:["#28a745","#ffc107","#dc3545"],data:[r,n,t]}],labels:["Sembuh","Positif","Meninggal"]}}),a}).then(function(a){var n=a.jumlahKasus,e=a.meninggal,t=a.sembuh,o=document.querySelector(".content-center#angkaCorona"),r=document.createElement("h2");r.innerText="Indonesia";var c=document.createElement("hr"),s=document.createElement("h4");s.innerHTML='<span>Jumlah Positif : <span class="ubuntu-bold">'.concat(n.toLocaleString(),'</span></span> | <span class="roboto">Sembuh : <span class="roboto-bold">').concat(t.toLocaleString(),"</span></span>");var d=document.createElement("h4");d.classList.add("osans"),d.innerHTML='Meninggal : <span class="osans-bold">'.concat(e.toLocaleString(),"</span>"),o.innerHTML="",o.appendChild(r),o.appendChild(c),o.appendChild(s),o.appendChild(d)}).catch(function(n){var t=document.querySelector(".content-center#angkaCorona"),o=document.createElement("h2");o.classList.add("osans-bold"),o.innerHTML="Mohon Maaf";var r=document.createElement("h3");r.classList.add("osans"),r.innerHTML="Data Tidak Bisa Ditampilkan";var c=document.createElement("p");c.classList.add("osans"),c.innerHTML='Ada kesalahan dalam menampilkan data | Error : <span style="color: red;">'.concat(n,"</span>"),t.innerHTML="",t.appendChild(o),t.appendChild(r),t.appendChild(c),a(e.pie,n)});
},{}]},{},["MO7r"], null)
//# sourceMappingURL=script.8673bb13.js.map