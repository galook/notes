var link_script = document.createElement('script');
var custom_script = document.createElement('script');

link_script.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=G-8ENBZ1TNYP');
link_script.setAttribute('async', "async");

custom_script.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-8ENBZ1TNYP');`;

document.head.appendChild(link_script);
document.head.appendChild(custom_script);