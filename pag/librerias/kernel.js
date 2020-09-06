// VARIABLES GLOBALES
deposito = "LFI0432016600887";
version = "1.0.0"
ano = "2020"
cabecera = "<div class = 'container'> <div class = 'row well well-sm'> <div class = 'hidden-xs col-sm-4 col-md-6 text-center'> <h2>Descripcion</h2> </div> <div class = 'hidden-xs col-sm-8 col-md-6 text-center'> <h2>Archivo</h2> </div> </div>";
mensajeactualizacion = "https://local.jesuministrosymas.com.ve/publi/mensajes/cursos/limpieza500/";
mensajeextra = "https://local.jesuministrosymas.com.ve/publi/mensajes/cursos/limpieza500/extra/";
linkextenciones = "http://bit.ly/extensionespdl";
logoje = "<img src='media/imagen/logo.png' width='180' height='30' alt='J.E SUMINISTROS Y MAS, C.A.' longdesc='LOGO J.E SUMINISTROS Y MAS, C.A.' id='logo' align='left'>";

//DEFINIENDO VARIABLES GLOBALES
i = " <i title = 'Podra Imprimir' class='fas fa-print'></i>";
c = " <i title = 'Calculos Automatizados' class='fas fa-calculator'></i>";
a = " <i title = 'Contiene Archivos PDF' class='fas fa-file-pdf'></i>";
e = " <i title = 'Consulte Extensiones' class='fas fa-folder-plus'></i>";
v = " <i title = 'Contiene Videos' class='fas fa-file-video'></i>";
w = " <i title = 'Contiene Archivos Web' class='fab fa-html5'></i>";
z = " <i title = 'Contiene Archivos Comprimido' class='fas fa-file-archive'></i>";
l = " <i title = 'Contiene Link' class='fas fa-link'></i>";
h = " <i title = 'Cargar Inicio' class='fas fa-home'></i>";
r = " <i title = 'Cargar Inicio' class='fas fa-file-alt'></i>";


imprimirxs = "<p class='text-right'><a class='btn btn-danger btn-sm' href='javascript:window.print(); void 0;'>Imprimir " + i + "</a></p>";

br = "<br>";
olli = "<ol><li>";
liol = "</li></ol>";
olc = "</li></ol>";
ulli = "<ul><li>";
liul = "</li></ul>";
ulc = "</li></ul>";
eli = "<li>";
lic = "</li>";
lili = lic + eli;

ml = " Mililitros";
mls = " Mililitro";
li = " Litros";
lis = " Litro";
gr = " Gramos";
grs = " Gramo";
mg = " Miligramos";
mgs = " Miligramo";
kl = " Kilogramos";
kls = " Kilogramo";

tca = "<b>Para hacer ";
tcc = " se requieren:</b>";
sup = 'Seleccione un Producto...';

//a = Componente
//b = Porcentaje
function p(b) {
  var UI = document.getElementById('entrada').value;
  valor = UI * b / 100;
  return valor;
}
//FUNCTION QUE QUITARA SIGNO DE IGUAL A CADA COMPONENTE
function quitarigual() {
  for (ab in componente) {
    ncompo = componente[ab].n;
    titulocompo = ncompo.replace(" = ", "");
    //componente[ab].n = "<b>" + componente[ab].n+"</b>";
    componente[ab].n = titulocompo;
  }
  return componente[ab].n;
}
//FUNCTION QUE COLOCARA SIGNO DE IGUAL A CADA COMPONENTE
function ponerigual() {
  for (ab in componente) {
    ncompo = componente[ab].n;
    igual = "<b> = </b>";
    componente[ab].n = ncompo.concat(igual);
  }
  return componente[ab].n;
}

//FUNCTION QUE IMPORTARA EL SCRIPT DE KERNEL EXTRA SI EXISTE
function importa() {
  document.write("<script type='text/javascript' src='extra/pag/libreria/js/kernelextra.js'></script>");
}
importa();


function updateIndicator() {
  document.getElementById('indicator').innerHTML = navigator.onLine ? "<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Se ha Detectado un Funcionamiento Perfecto!</strong> Usted Se encuentra conectado/a a Internet.</div>" : "<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Usted se ha Desconectado de Internet!</strong>  hay elementos de este curso que se desactivaran, al recuperar la conexion a internet estaran disponibles de nuevo.</div>";
}

function updateFrame() {
  document.getElementById('frame').innerHTML = navigator.onLine ? '<iframe scrolling="no" src="../publicidad/indexon.html" name="publicidad" frameborder="0" width="100%" height="90"></iframe>' : '<iframe align="center" scrolling="no" src="../publicidad/indexoff.html" name="publicidad" frameborder="0" width="100%" height="90"></iframe>';
}

function updateLi() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? '<iframe marginheight="0" marginwidth="0" align="center" margin="0 auto" scrolling="no" src="./publicidad/indexon.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>' : '<iframe marginheight="0" marginwidth="0" align="center" scrolling="no" src="./publicidad/indexoff.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>';
}

function updateP() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? '<iframe marginheight="0" marginwidth="0" align="center" margin="0 auto" scrolling="no" src="https://goo.gl/rpjfB6" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>' : '<iframe marginheight="0" marginwidth="0" align="center" scrolling="no" src="./pag/publicidad/indexoff.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>';
  document.getElementById('mensaje').innerHTML = navigator.onLine ? "<iframe scrolling='no' src=" + mensajeactualizacion + " name='texto' width='100%' height='60' frameborder='0'></iframe>" : "<div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> COMO NO ESTA CONECTADO A INTERNET ESTE SISTEMA NO ESTA EN CAPACIDAD DE VERIFICAR SI POSEE LA ULTIMA VERSION DE ESTE CURSO, FAVOR CONECTESE A INTERNET Y DE MANERA AUTOMATICA SE EFECTUARA ESTA VERIFICACION.</div>";


}

function updateextra() {
  document.getElementById('mensajeextra').innerHTML = navigator.onLine ? "<iframe scrolling='no' src=" + mensajeextra + " name='texto' width='100%' height='60' frameborder='0'></iframe>" : "<div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign'aria-hidden='true'></span><span class='sr-only'>Error:</span> COMO NO ESTA CONECTADO A INTERNET ESTE SISTEMA NO ESTA EN CAPACIDAD DE VERIFICAR SI EXISTEN EXTENSIONES DISPONIBLES, FAVOR CONECTESE A INTERNET Y DE MANERA AUTOMATICA SE EFECTUARA ESTA VERIFICACION.</div>";
}

// PARA PRUEBAS
function onOff() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? 'EN LINEA' : 'FUERA DE LINEA';
}
/* Case 1 */
window.addEventListener("online", function() {
  document.getElementById('test1').innerHTML = "online";
}, false);

window.addEventListener("offline", function() {
  document.getElementById('test1').innerHTML = "OFFLINE";
}, false);

ncompoa = "";
ncompo = "";


function botonera() {

  var avl = a + v + l;

  botonera = "<nav class='navbar navbar-expand-lg navbar-light fixed-top' style='background-color: #c9deff;'>" +
    "<div class='container'>" +
    '<a onclick="bienvenida();" title="Cargar Inicio" class="navbar-brand" href="#Bienvenida">' + logoje + ' </a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarResponsive">' +
    '<ul class="navbar-nav">' +

    '<li class="nav-item">' +
    '<a onclick="bienvenida();" title="Cargar Inicio" class="nav-link active" href="#Bienvenida"><i class="fas fa-home fa-fw"></i> Inicio' +
    '<span class="sr-only">(current)</span>' +
    '</a>' +
    '</li>' +


    '<li id="dropdown-secciones" class="nav-item dropdown">' +
    '<a title="Secciones" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    '<i class="fa fa-puzzle-piece fa-fw"></i>  Secciones' +
    '</a>' +

    '<div id="dropdown-secci" class="dropdown-menu" aria-labelledby="navbarDropdown">' +

    "<a onclick='videos(1);' name='Videos_Seccion_1' title='Videos' href='#Videos_Seccion_1' class='dropdown-item'>01 Videos Bienvenida " + v + " </a>" +
    "<a onclick='videos(2);' name='Videos_Seccion_2' title='Videos' href='#Videos_Seccion_2' class='dropdown-item'>02 Videos Entorno de Aprendizaje " + v + w + z + " </a>" +
    "<a onclick='videos(3);' name='Videos_Seccion_3' title='Videos' href='#Videos_Seccion_3' class='dropdown-item'>03 Videos Introduccion Informal " + v + w + z + " </a>" +
    "<a onclick='videos(4);' name='Videos_Seccion_4' title='Videos' href='#Videos_Seccion_4' class='dropdown-item'>04 Videos Operadores y Expresiones " + v + w + " </a>" +
    "<a onclick='videos(5);' name='Videos_Seccion_5' title='Videos' href='#Videos_Seccion_5' class='dropdown-item'>05 Videos Controlando el flujo " + v + w + " </a>" +
    "<a onclick='videos(6);' name='Videos_Seccion_6' title='Videos' href='#Videos_Seccion_6' class='dropdown-item'>06 Videos Colecciones de datos " + v + w + " </a>" +
    "<a onclick='videos(7);' name='Videos_Seccion_7' title='Videos' href='#Videos_Seccion_7' class='dropdown-item'>07 Videos Entradas y salidas de datos " + v + w + " </a>" +
    "<a onclick='videos(8);' name='Videos_Seccion_8' title='Videos' href='#Videos_Seccion_8' class='dropdown-item'>08 Videos Programacion de funciones " + v + w + " </a>" +
    "<a onclick='videos(9);' name='Videos_Seccion_9' title='Videos' href='#Videos_Seccion_9' class='dropdown-item'>09 Videos Manejo de excepciones " + v + w + " </a>" +
    "<a onclick='videos(10);' name='Videos_Seccion_10' title='Videos' href='#Videos_Seccion_10' class='dropdown-item'>10 Videos Clases y objetos " + v + w + " </a>" +
    "<a onclick='videos(11);' name='Videos_Seccion_11' title='Videos' href='#Videos_Seccion_11' class='dropdown-item'>11 Videos Herencia " + v + w + " </a>" +
    "<a onclick='videos(12);' name='Videos_Seccion_12' title='Videos' href='#Videos_Seccion_12' class='dropdown-item'>12 Videos Metodos de las colecciones " + v + " </a>" +
    "<a onclick='videos(13);' name='Videos_Seccion_13' title='Videos' href='#Videos_Seccion_13' class='dropdown-item'>13 Videos Modulos y paquetes " + v + " </a>" +
    "<a onclick='videos(14);' name='Videos_Seccion_14' title='Videos' href='#Videos_Seccion_14' class='dropdown-item'>14 Videos Manejo de ficheros " + v + " </a>" +
    "<a onclick='videos(15);' name='Videos_Seccion_15' title='Videos' href='#Videos_Seccion_15' class='dropdown-item'>15 Videos Interfaces graficas con Tkinter " + v + " </a>" +
    "<a onclick='videos(16);' name='Videos_Seccion_16' title='Videos' href='#Videos_Seccion_16' class='dropdown-item'>16 Videos Bases de datos con SQLite " + v + " </a>" +
    "<a onclick='videos(17);' name='Videos_Seccion_17' title='Videos' href='#Videos_Seccion_17' class='dropdown-item'>17 Videos Funcionalidades avanzadas " + v + " </a>" +
    "<a onclick='videos(18);' name='Videos_Seccion_18' title='Videos' href='#Videos_Seccion_18' class='dropdown-item'>18 Videos Documentacion y pruebas " + v + " </a>" +
    "<a onclick='videos(19);' name='Videos_Seccion_19' title='Videos' href='#Videos_Seccion_19' class='dropdown-item'>19 Videos Distribucion " + w + " </a>" +
    "<a onclick='videos(20);' name='Videos_Seccion_20' title='Videos' href='#Videos_Seccion_20' class='dropdown-item'>20 Videos Anexos " + w + " </a>" +
    "<a onclick='videos(21);' name='Videos_Seccion_21' title='Videos' href='#Videos_Seccion_21' class='dropdown-item'>21 Videos Bonus " + w + " </a>" +
    "<a onclick = 'glosario();' title = 'Glosario de Terminos' name = 'Glosario de Terminos' href='#glosario' class='dropdown-item'>Glosario de Terminos <span class = 'glyphicon glyphicon-book' aria-hidden = 'true'> </span> " + i + " </a>" +
    '</div>' +
    '</li>' +


    '<li>' +
    "<a href = '#extra' title = 'Ver Extensiones Instaladas' name = 'Extensiones' onclick = 'extra();' class='nav-link'> Extensiones  " + e + " </a>" +
    '</li>' +

    '<li>' +
    "<a href = '#Creditos' onclick = 'creditos();' title = 'Creditos' name = 'Creditos' class='nav-link'>Creditos " + r + " </a>" +
    '</li>' +



    '</ul>' +
    '</div>' +
    "</div></nav>";

  bienvenida();
  footer_site();

  document.getElementById('botonera').innerHTML = botonera, document.getElementById('foot').innerHTML = foot, document.getElementById('contenido').innerHTML = contenido;
  mensextra();


}


function footer_site() {

  foot = "<div class='navbar navbar-default '><div class='container-fluid'> <div class='row'> <div class='col-sm-12 col-md-6'>Esta obra está bajo una <a class = 'clase6'  rel = 'license' target = '_blank' href = 'https://creativecommons.org/licenses/by-sa/3.0/ve/'> Licencia de Creative Commons </a> <br><a target = '_blank' rel = 'license' href = 'https://creativecommons.org/licenses/by-sa/3.0/ve/'> <img alt = 'Licencia de Creative Commons' style = 'border-width:0' src = 'media/imagen/88x31.png' /> </a><br> <strong>DEPOSITO LEGAL VENEZUELA: </strong> " + deposito + "</div> " +
    "<div class='col-sm-12 col-md-6'> <strong>Visitanos en</strong> <a class = 'clase6' href = 'http://www.jesuministrosymas.com.ve' target = '_blank' name = 'J.E SUMINISTROS Y MAS, C.A.' id = 'link web' lang = 'es' title = 'J.E SUMINISTROS Y MAS, C.A.'> <strong> <em>www.jesuministrosymas.com.ve</em> </strong> </a> <br> <a href = 'https://twitter.com/JESYMCA' class = 'twitter-follow-button' data-show-count = 'false' data-lang = 'es' target='_blank'>Seguir a @JESYMCA</a><br> <a href = 'https://t.me/jesuministrosymas_canal' target='_blank'>Seguirnos en Telegram a @JESUMINISTROSYMAS</a> <br> <a href = 'http://bit.ly/WhatsApp_JE' target='_blank'>Contactanos por WhatsApp @JESUMINISTROSYMAS</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> </div></div></div></div>    <script>$(document).ready(function () {$('[data-toggle=\"popover\"]').popover(); }); </script>";

  document.getElementById('foot').innerHTML = foot;
}


function bienvenida() {
  contenido = "<div class = 'panel panel-info'> <div class = 'panel-heading'>  <h1 class = 'panel-title'><strong>Bienvenidos a este Aplicativo</strong></h1> </div> <div class = 'panel-body'> <div class = 'container-fluid'> <div> <!-- Nav tabs --> <ul class = 'nav nav-tabs' role = 'tablist'> <li role = 'presentation' class = 'nav-item'> <a class='nav-link active' href='#home' aria-controls = 'home' role = 'tab' data-toggle = 'tab'>Bienvenidos</a> </li> <li role = 'presentation'> <a class='nav-link' href='#profile' aria-controls = 'profile' role = 'tab' data-toggle = 'tab'>Uso de este Manual</a> </li> <li role = 'presentation'> <a class='nav-link' href = '#contacto' aria-controls = 'contacto' role = 'tab' data-toggle = 'tab'>Contactenos</a> </li> <li role = 'presentation'> <a class='nav-link' href = '#otros' aria-controls = 'otros' role = 'tab' data-toggle = 'tab'>Otros Cursos</a> </li> </ul> <!-- Tab panes --> <div class = 'tab-content'> <div role = 'tabpanel' class = 'tab-pane active' id = 'home'> <b> <h1>Bienvenido</h1> </b> <p>Le saludo y felicito por la adquisicion de este aplicativo, <b>PYTHON EN VIDEOS.</b></p> </div> <div role = 'tabpanel' class = 'tab-pane' id = 'profile'> <h1>COMO USAR ESTE MANUAL</h1> <p>Es bastante practico e intuitivo, tome en cuenta que al ser un manual donde el 98% del codigo fuente esta del lado del cliente es posible que experimente ver textos con simbolos raros, normalmente donde se utilicen letras como Ñ o Palabras Acentuadas, de ser asi, normalmente lo primero que debe hacer es no alarmarse e ir a las configuraciones de su navegador web y cambiar su configuracion de codificacion a <kbd>charset=UTF-8</kbd>si por el contrario usted puede visualizar los caracteres sin errores, entonces solo le queda revisar todas las secciones disponibles en este producto.</p> <div class='accordion' id='accordionExample'>   <div class='card'>     <div class='card-header' id='headingOne'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>           PRIMER PASO         </button>       </h2>     </div>      <div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>       <div class='card-body'>         El diseño fue pensado de manera intuitiva, para acceder a cada una de las secciones que se desea revisar solo debe hacer clic en la barra de seleccion y navegar dentro del area que prefiera.       </div>     </div>   </div>   <div class='card'>     <div class='card-header' id='headingTwo'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left collapsed' type='button' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>           SEGUNDO PASO         </button>       </h2>     </div>     <div id='collapseTwo' class='collapse' aria-labelledby='headingTwo' data-parent='#accordionExample'>       <div class='card-body'>         Se sugiere tomar apuntes de las descripciones del video, de esta manera siempre podra consultar sus notas en cualquier momento.       </div>     </div>   </div>   <div class='card'>     <div class='card-header' id='headingThree'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left collapsed' type='button' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>           TERCER PASO         </button>       </h2>     </div>     <div id='collapseThree' class='collapse' aria-labelledby='headingThree' data-parent='#accordionExample'>       <div class='card-body'>         Podra revisar los videos cuantas veces sea necesario y de esa manera podra reforzar todos los conocimientos adquirirdos. Siempre este tipo de cursos esta soportado por una gran cantidad de libros o revistas de soporte.       </div>     </div>   </div> </div>   </div> <div role = 'tabpanel' class = 'tab-pane' id = 'contacto'> <h1>Puede contactarnos en:</h1> <br> <p class = 'navbar-text pull-left'>Ingresando a nuestro portal web <a href = 'http://www.jesuministrosymas.com.ve' target = '_blank' style = 'color: #0027ff'>J.E SUMINISTROS Y MAS, C.A.</a> </p> <br> <br> <br> <br> <br> <br> <br> <br> </div> <div role = 'tabpanel' class = 'tab-pane' id = 'otros'> <div id = 'carousel-example-generic' class = 'carousel slide' data-ride = 'carousel'> <!-- Indicators --> " +
    "<ol class = 'carousel-indicators'> " +
    "<li data-target = '#carousel-example-generic' data-slide-to = '0' class = 'active'> </li> " +
    "<li data-target = '#carousel-example-generic' data-slide-to = '1'> </li> " +
    "<li data-target = '#carousel-example-generic' data-slide-to = '2'> </li> " +
    "<li data-target = '#carousel-example-generic' data-slide-to = '3'> </li></ol> " +
    "<!-- Wrapper for slides --> " +
    "<div class = 'carousel-inner'> " +
    "<div class = 'carousel-item active'> <img class = 'img-rounded' src = 'media/imagen/portadas/cursos/merck.png' alt = 'Manual Merck de Medicina Veterinaria...'> " +
    "<div class = 'carousel-caption'> <h3>Manual Merck de Medicina Veterinaria</h3> <p> <a class = 'btn btn-success' href = 'http://www.jesuministrosymas.com.ve/productos/cursos/manual-merck-medicina-veterinaria' target = '_blank' name = 'Bienvenida' id = 'link7' lang = 'es' title = 'Manual Merck de Medicina Veterinaria'role = 'button'>MAS INFORMACION AQUI</a> </p> </div> </div> " +
    "<div class = 'carousel-item'> <img class = 'img-rounded' src = 'media/imagen/portadas/cursos/servidor.png' alt = '...'> <div class = 'carousel-caption'> <h3>Monte su Propio Servidor Web en Casa</h3> <p> <a class = 'btn btn-success' href = 'http://www.jesuministrosymas.com.ve/productos/cursos/monta-tu-server' target = '_blank' name = 'Bienvenida' id = 'link8' lang = 'es' title = 'Monte su Propio Servidor Web en Casa'role = 'button'>MAS INFORMACION AQUI</a> </p> </div> </div>" +
    "<div class = 'carousel-item'> <img class = 'img-rounded' src = 'media/imagen/portadas/cursos/otros.png' alt = '...'> <div class = 'carousel-caption'> <h3>Otros Cursos</h3> <p> <a class = 'btn btn-success' href = 'http://www.jesuministrosymas.com.ve/productos/cursos' target = '_blank' name = 'Bienvenida' id = 'link8' lang = 'es' title = 'Otros Cursos Disponibles'role = 'button'>MAS INFORMACION AQUI</a> </p> </div> </div>" +
    "<div class = 'carousel-item'> <img class = 'img-rounded' src = 'media/imagen/portadas/cursos/limpieza.png' alt = '...'> <div class = 'carousel-caption'> <h3>Aprenda a Fabricar Productos de Limpieza</h3> <p> <a class = 'btn btn-success' href = 'http://www.jesuministrosymas.com.ve/productos/cursos/elabore-productos-de-limpieza' target = '_blank' name = 'Bienvenida' id = 'link8' lang = 'es' title = 'Aprenda a Fabricar Productos de Limpieza'role = 'button'>MAS INFORMACION AQUI</a> </p> </div> </div>" +
    "...</div> <!-- Controls --> <a class = 'left carousel-control' href = '#carousel-example-generic' role = 'button' data-slide = 'prev'> <span class = 'glyphicon glyphicon-chevron-left' aria-hidden = 'true'> </span> <span class = 'sr-only'>Previous</span> </a> <a class = 'right carousel-control' href = '#carousel-example-generic' role = 'button' data-slide = 'next'> <span class = 'glyphicon glyphicon-chevron-right' aria-hidden = 'true'> </span> <span class = 'sr-only'>Next</span> </a> </div> </div> </div> </div> </div> </div> </div> <footer> <div class = 'navbar navbar-default '> <div class = 'container'> <p> <b>Nota</b>: El aprendizaje depende de usted, los humanos solo debemos tener un motivo para hacer las cosas, nada es imposible en esta vida, todo se logra cuando se quiere..!</p> </div> </div> </footer>";

  document.getElementById('contenido').innerHTML = contenido;
}


function videos(a) {

  $('li a').click(function(e) {
     //e.preventDefault();
     $('a').removeClass('active');
     $(this).addClass('active');

  });

  let rut = 'media/videos/';

  let videos = [{
    nombre: "01 Bienvenida",
    ruta: rut + "01 Bienvenida/",
    archivo: "001 Presentación personal.mp4",
    seccion: 1,
    contenido: "Video que contiene la bienvenida por parte del tutor, aca podras ver la presentacion del tutor quien te guiara a lo largo de este curso."
  }, {
    nombre: "02 Bienvenida",
    ruta: rut + "01 Bienvenida/",
    archivo: "002 Presentación del curso.mp4",
    seccion: 1,
    contenido: "En este video podras ver el resumen de la presentacion del curso, podras ver lo que podras aprender haciendo este curso."
  }, {
    nombre: "03 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "003 Previa.mp4",
    seccion: 2,
    contenido: "Aca podras aprender a instalar el entorno de aprendizaje que seran:<br> <a href='https://www.python.org/download/releases/3.0/' target='_blank'>PYTHON 3</a><br> <a href='https://jupyter.org/' target='_blank'>JUPYTER</a><br><a href='https://www.sublimetext.com/' target='_blank'>SUBLIME TEXT</a> este es el editor de codigo pero puedes utilizar el editor que prefieras y te haga sentir mas comodo/a algunos otros editores de codigo que puedes utilizar pueden ser: <a href='https://code.visualstudio.com/' target='_blank'>VISUAL STUDIO CODE DE MICROSOFT</a> o tambien otro editor de codigo muy utilizado como lo es <a href='https://atom.io/' target='_blank'>ATOM</a><br>Es posible que ya este familiarizado con los programas de instalacion de paquetes de software pero seas de los que le guste instalar sus programas por separado, en este caso me refiero a instalar Python, Jupyter notebook por separado sin necesidad de Instalar ANACONDA que se explica en el siguiente video."
  }, {
    nombre: "04 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "004 Descarga de los recursos y ejercicios.html",
    seccion: 2,
    contenido: "Los recursos estan disponibles en una ruta diferente, puedes ir al final de esta misma seccion y podras acceder al sistema de archivos dinamicos para que puedas ir ejecutando los ejercicios mientras va transcurriendo el curso."
  }, {
    nombre: "05 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "005 Preparando entorno en Windows.mp4",
    seccion: 2,
    contenido: "En este video podras ver como instalar en un AMBIENTE WINDOWS el software ANACONDA puedes hacerlo directamente ingresando a la web de <a href='https://www.anaconda.com/products/individual' target='_blank'>ANACONDA</a> tambien podras ver como poner en funcionamiento JUPYTER Notebook y por ultimo ver cual es la version de Python instalada en tu computador y verificar si todo esta funcionando bien."
  }, {
    nombre: "06 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "006 Preparando entorno en Linux.mp4",
    seccion: 2,
    contenido: "En este video podras ver como instalar en un AMBIENTE LINUX el software ANACONDA puedes hacerlo directamente ingresando a la web de <a href='https://www.anaconda.com/products/individual' target='_blank'>ANACONDA</a> tambien podras ver como poner en funcionamiento JUPYTER Notebook y por ultimo ver cual es la version de Python instalada en tu computador y verificar si todo esta funcionando bien."
  }, {
    nombre: "07 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "007 Preparando entorno en Mac OS X.html",
    seccion: 2,
    contenido: "Los sistemas MAC son basados en UNIX y por ello es posible que encuentre mucha similitud con la configuracion aplicable a los sistemas LINUX"
  }, {
    nombre: "08 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "008 Información importante sobre Jupyter Notebook.html",
    seccion: 2,
    contenido: ""
  }, {
    nombre: "09 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "009 4 nociones sobre Jupyter.mp4",
    seccion: 2,
    contenido: ""
  }, {
    nombre: "10 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/attached_files/004 Descarga de los recursos y ejercicios/",
    archivo: "001 CursoPython.zip",
    seccion: 2,
    contenido: "Aca podra descargar el archivo ZIP que se muestra en el video y que podra descomprimir y acceder desde el aplicativo Jupyter Notebook."
  }, {
    nombre: "11 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/attached_files/004 Descarga de los recursos y ejercicios/CursoPython/",
    archivo: "/",
    seccion: 2,
    contenido: "Puede ir al Directorio <kbd>media/videos/02 El entorno de aprendizaje/attached_files/004 Descarga de los recursos y ejercicios/CursoPython/</kbd> desde su gestor de archivos o explorador de Windows y visitarlo ya descomprimido solo de ejecutar desde una terminal el comando <kbd>/CursoPython/~]$ jupyter notebook</kbd>."
  }, {
    nombre: "12 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "010 Previa.mp4",
    seccion: 3,
    contenido: "Para que programar, que ocurre cuando programamos, manipular datos y usarlos en nuestros proyectos, en importante tener en claro que en <b>PYTHON</b> existen 3 tipos de datos: <ul><li>Numeros</li><li>Textos</li><li>Listas</li>"
  }, {
    nombre: "13 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "011 Numeros.mp4",
    seccion: 3,
    contenido: "En esta Primera leccion practica del curso, usted podrá comenzar a utilizar su entorno de aprendizaje, practicando primeramente con los datos numericos, aprederá a operar con ellos, se explicaran sobre los numeros enteros y decimales. Por ultimo tambien empezará a utilizar variables."
  }, {
    nombre: "14 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "012 Textos.mp4",
    seccion: 3,
    contenido: "En esta segunda leccion se aprendera a trabajar con textos o cadenas de caracteres. Aprendera a utilizar las comillas dobre y comillas simples, los simbolos para escapar errores de simbolos y comandos:<ul><li> Uso del comando para imprimir <kbd>print()</kbd></li> <li>Uso del escape tabulador <kbd>/t</kbd> </li><li>Uso del escape espaciador <kbd>/n</kbd></li></ul><br>Tambien se aprendera las operaciones disponibles con las cadenas de caracteres, uso de variables."
  }, {
    nombre: "15 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "013 Indices y slicing.mp4",
    seccion: 3,
    contenido: "Se continua con el trabajo de cadena de caracteres, en esta oportunidad con el uso de indices sobre los caracteres, es decir los numeros de posiciones de las cadenas de caracteres, tambien se explica el uso de la tecnica de indices llamada slicing y se hace introduccion a la funcion <kbd>len()</kbd>."
  }, {
    nombre: "16 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "014 Listas.mp4",
    seccion: 3,
    contenido: "El uso de las listas son importantes ya que las mismas se utilizan para agrupar variables y valores dentro de una variable, relacionando dichas listas con los indices respectivos. Se da introduccion a los metodos <kbd>.append</kbd> y por ultimo estudiaremos la capacidad de anidar listas."
  }, {
    nombre: "17 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "015 Lectura por teclado.mp4",
    seccion: 3,
    contenido: "Se analizaran la funcion que permite leer una variable en tiempo real desde el teclado con la funcion <kbd>input()</kbd> que se encarga de leer la cadena de caracteres introducidos desde el teclado, se aprenderá a operar con este dato, convirtiendo la cadena en un numero entero <kbd>int()</kbd> o en un numero decimal <kbd>float()</kbd>"
  }, {
    nombre: "18 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "016 Primeros pasos.mp4",
    seccion: 3,
    contenido: "Ya se ha dado la introduccion al mundo de Python. Aca se mostrará la potencialidad que tiene el trabajar con este lenguaje de programacion."
  }, {
    nombre: "19 Introduccion informal",
    ruta: rut + "03 Introduccion informal/",
    archivo: "017 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 3,
    contenido: "Aca se hace un analisis de los ejercicios propuestos, intenta siempre hacer las practicas por su cuenta, una vez que considere que lo ha logrado de forma correcta entonces se recomienda ver este video para comprender como debe ser los analisis de los problemas propuestos."
  }, {
    //nombre: "20 Introduccion informal",
    //ruta: rut + "03 Introduccion informal/quizzes/",
    //archivo: "001 Quiz de la seccion.html",
    //seccion: 3,
    //contenido: ""
  }, {
    nombre: "21 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "018 Previa.mp4",
    seccion: 4,
    contenido: "Resumen y pequeña introduccion a los operadores disponibles para los argumentos en Python. Los operadores van a permitir armar lo que se va a calcular y tambien la logica de como debe funcionar nuestra aplicacion."
  }, {
    nombre: "22 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "019 El tipo logico.mp4",
    seccion: 4,
    contenido: "En esta leccion se analizaran los operadores aplicables para la ejecucion de operadores y expresiones de tipo logicos."
  }, {
    nombre: "23 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "020 Operadores relacionales.mp4",
    seccion: 4,
    contenido: "Los operadores relacionales son los que se usan para realizar comparaciones para obtener resultados del tipo <kbd>true</kbd> o del tipo <kbd>false</kbd>. Estas expresiones son las siguientes: <ul><li>Operador Igual que: <kbd>3 == 3 #true</kbd></li><li>Operador Distinto que: <kbd>3 != 4 #true</kbd></li><li>Operador Mayor que: <kbd>4 > 2 #true</kbd></li><li>Operador Menor que: <kbd>2 < 9 #true</kbd></li><li>Operador Mayor o igual que <kbd>2 >= 2 #true</kbd></li><li>Operador Menor o igual que <kbd>1 <= 3 #true</kbd></li></ul><br>Vale indicar que en los ejemplos anteriores todas dan como resultado <b>true</b>, pero en los siguientes ejemplos los resultados del operador logico serian <b>false</b>:<ul><li>Operador Igual que: <kbd>3 == 1 #false</kbd></li><li>Operador Distinto que: <kbd>3 != 3 #false</kbd></li><li>Operador Mayor que: <kbd>4 > 9 #false</kbd></li><li>Operador Menor que: <kbd>2 < 1 #false</kbd></li><li>Operador Mayor o igual que <kbd>2 >= 1 #false</kbd></li><li>Operador Menor o igual que <kbd>1 <= -3 #false</kbd></li></ul>"
  }, {
    nombre: "24 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "021 Operadores logicos.mp4",
    seccion: 4,
    contenido: "En el caso de las expresiones"
  }, {
    nombre: "25 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "022 Expresiones anidadas.mp4",
    seccion: 4,
    contenido: ""
  }, {
    nombre: "26 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "023 Operadores de asignacion.mp4",
    seccion: 4,
    contenido: ""
  }, {
    nombre: "27 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "024 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 4,
    contenido: ""
  }, {
    nombre: "28 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/quizzes/",
    archivo: "002 Quiz de la seccion.html",
    seccion: 4,
    contenido: ""
  }, {
    nombre: "29 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "025 Previa.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "30 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "026 Sentencia If.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "31 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "027 Sentencia While.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "32 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "028 Sentencia For.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "33 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "029 Post Analisis.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "34 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "030 Ejercicios optativos - Soluciones paso a paso 1 al 3.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "35 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "031 Ejercicios optativos - Soluciones paso a paso 4 al 7.mp4",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "36 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/quizzes/",
    archivo: "003 Quiz de la seccion.html",
    seccion: 5,
    contenido: ""
  }, {
    nombre: "37 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "032 Previa.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "38 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "033 Tuplas.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "39 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "034 Conjuntos.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "40 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "035 Diccionarios.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "41 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "036 Pilas y colas con listas.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "42 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "037 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "43 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/quizzes/",
    archivo: "004 Quiz de la seccion.html",
    seccion: 6,
    contenido: ""
  }, {
    nombre: "44 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "038 Previa.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "45 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "039 Entradas.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "46 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "040 Scripts.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "47 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "041 Salidas.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "48 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "042 Ejercicios optativos - Soluciones paso a paso 1 y 2.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "49 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "043 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "50 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/quizzes/",
    archivo: "005 Quiz de la seccion.html",
    seccion: 7,
    contenido: ""
  }, {
    nombre: "51 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "044 Previa.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "52 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "045 Definicion de funciones.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "53 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "046 Retorno de valores.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "54 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "047 Enviando valores.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "55 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "048 Argumentos y parametros.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "56 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "049 Argumentos por valor y referencia.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "57 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "050 Argumentos indeterminados.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "58 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "051 Funciones recursivas.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "59 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "052 Funciones integradas.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "60 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "053 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "61 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/quizzes/",
    archivo: "006 Quiz de la seccion.html",
    seccion: 8,
    contenido: ""
  }, {
    nombre: "62 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "054 Previa.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "63 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "055 Errores.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "64 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "056 Excepciones.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "65 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "057 Múltiples excepciones.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "66 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "058 Invocacion de excepciones.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "67 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "059 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "68 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/quizzes/",
    archivo: "007 Quiz de la seccion.html",
    seccion: 9,
    contenido: ""
  }, {
    nombre: "69 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "060 Previa.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "70 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "061 Programacion estructurada vs POO.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "71 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "062 Clases y objetos.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "72 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "063 Atributos y metodos de clase.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "73 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "064 Metodos especiales.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "74 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "065 Objetos dentro de objetos.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "75 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "066 Encapsulacion de atributos y metodos.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "76 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "067 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 10,
    contenido: ""
  }, {
    nombre: "77 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "008 Quiz de la sección.html",
    seccion: 10,
    contenido: ""

  }, {
    nombre: "78 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "068 Previa.mp4",
    seccion: 11,
    contenido: ""
  }, {
    nombre: "79 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "069 Herencia.mp4",
    seccion: 11,
    contenido: ""
  }, {
    nombre: "80 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "070 Clases heredadas y polimorfismo.mp4",
    seccion: 11,
    contenido: ""
  }, {
    nombre: "81 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "071 Herencia multiple.mp4",
    seccion: 11,
    contenido: ""
  }, {
    nombre: "82 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "072 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 11,
    contenido: ""
  }, {
    nombre: "83 Herencia",
    ruta: rut + "11 Herencia/quizzes/",
    archivo: "009 Quiz de la seccion.html",
    seccion: 11,
    contenido: ""

  }, {
    nombre: "84 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "073 Previa.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "85 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "074 Cadenas.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "86 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "075 Listas.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "87 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "076 Conjuntos.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "88 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "077 Diccionarios.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "89 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "078 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 12,
    contenido: ""
  }, {
    nombre: "90 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "079 Previa.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "91 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "080 Modulos.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "92 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "081 Paquetes.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "93 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "082 Distribucion basica.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "94 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "083 Modulos estandar.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "95 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "084 Collections.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "96 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "085 Datetime.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "97 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "086 Math.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "98 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "087 Random.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "99 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "088 Ejercicios optativos - Soluciones paso a paso 1 y 2.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "100 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "089 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 13,
    contenido: ""
  }, {
    nombre: "101 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "092 Ficheros de texto.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "102 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "093 Manejo del puntero.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "103 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "094 Ficheros y objetos con Pickle.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "104 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "095 Catalogo de peliculas persistente.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "105 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "096 Ejercicios optativos - Soluciones paso a paso 1 y 2.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "106 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "097 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 14,
    contenido: ""
  }, {
    nombre: "107 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "098 Previa.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "108 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "099 Tkinter y los widgets.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "109 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "100 Tk Raiz.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "110 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "101 Frames Marcos.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "111 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "102 Labels Etiquetas.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "112 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "103 Entry Campos de texto.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "113 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "104 Text Textos largos.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "114 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "105 Buttons Botones.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "115 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "106 Radiobuttons Botones radiales.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "116 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "107 Checkbuttons Botones seleccionables.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "117 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "108 Menus Menus.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "118 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "109 Popups Ventanas emergentes.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "119 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "110 Popups avanzados.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "120 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "111 Proyecto Editor de texto con Ficheros I.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "121 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "112 Proyecto Editor de texto con Ficheros II.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "122 Interfaces graficas con Tkinter",
    ruta: rut + "15 Interfaces graficas con Tkinter/",
    archivo: "113 Proyecto Editor de texto con Ficheros III.mp4",
    seccion: 15,
    contenido: ""
  }, {
    nombre: "123 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "114 Previa.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "124 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "115 Conexion puntero y consultas basicas.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "125 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "116 Claves primarias campos autoincrementales y claves unicas.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "126 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "117 Consultas modificacion y borrado registros.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "127 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "118 Ejercicios optativos - Soluciones paso a paso 1.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "128 Bases de datos con SQLite",
    ruta: rut + "16 Bases de datos con SQLite/",
    archivo: "119 Ejercicios optativos - Soluciones paso a paso 2.mp4",
    seccion: 16,
    contenido: ""
  }, {
    nombre: "129 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "120 Operadores encadenados.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "130 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "121 Comprension de listas.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "131 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "122 Funciones decoradoras I.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "132 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "123 Funciones decoradoras II.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "133 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "124 Funciones generadoras e iteradores.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "134 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "125 Funciones lambda.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "135 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "126 Funcion filter.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "136 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "127 Funcion map.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "137 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "128 Expresiones regulares I.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "138 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "129 Expresiones regulares II.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "139 Funcionalidades avanzadas",
    ruta: rut + "17 Funcionalidades avanzadas/",
    archivo: "130 Expresiones regulares III.mp4",
    seccion: 17,
    contenido: ""
  }, {
    nombre: "140 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "131 Docstrings.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "141 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "132 Pydoc.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "142 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "133 Doctest I.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "143 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "134 Doctest II.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "144 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "135 Unittest I.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "145 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas",
    archivo: "136 Unittest II.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "146 Distribucion",
    ruta: rut + "19 Distribucion/",
    archivo: "137 Setuptools.html",
    seccion: 19,
    contenido: ""
  }, {
    nombre: "147 Distribucion",
    ruta: rut + "19 Distribucion/",
    archivo: "138 Pyinstaller.html",
    seccion: 19,
    contenido: ""
  }, {
    nombre: "148 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "139 Breve historia sobre Python.html",
    seccion: 20,
    contenido: ""
  }, {
    nombre: "149 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "140 El Zen de Python.html",
    seccion: 20,
    contenido: ""
  }, {
    nombre: "150 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "141 PEP 8 Guia de estilo para Python.html",
    seccion: 20,
    contenido: ""
  }, {
    nombre: "151 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "142 Python 3.6 Format simplificado.html",
    seccion: 20,
    contenido: ""

  }, {
    nombre: "152 Bonus",
    ruta: rut + "21 Bonus/",
    archivo: "143 Extra Super Ofertas para estudiantes.html",
    seccion: 21,
    contenido: ""

  }];
  let selectedVideo = videos.filter((item) => (
    item.seccion === a
  ));

  let resultado = "<h1>Prueba de Lista de Videos</h1>";
  //resultado += '<div class="position-fixed">Columna izquierda que se mueve con el scroll...</div>';
  resultado += "<ol>";
  let nodoDOM = selectedVideo.map((video) => {

    let nombre = video.nombre;
    let ruta = video.ruta;
    let archivo = video.archivo;
    let seccion = video.seccion;
    let contenido = video.contenido;

    let arch = archivo.substr(-4);

    let solonombre = nombre.substr(3);
    narchi = archivo.substring(0, archivo.lastIndexOf("."));
    narchi = narchi.substr(3);
    solonombre = solonombre + " <b>" + narchi + "</b>";

    if (arch === '.mp4') {
      previo = '<video width="70%" controls="controls" preload="metadata">  <source src="' + ruta + archivo + '#t=0.1" type="video/mp4"></video>';
      boton = "Ver Video en otra ventana" + v;

    } else if (arch === 'html') {
      previo = "<a title='Ver Contenido HTML " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img class="clase2" alt="img0" src="media/imagen/html.png"/>' + "</a>";
      boton = "Ver contenido Web" + w;

    } else if (arch === '.zip') {
      previo = "<a title='Descargar " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img width="30%" class="clase2" alt="img0" src="media/imagen/zip.png"/>' + "</a>";
      boton = "Descargar archivo comprimido" + z;

    } else if (arch === '.pdf') {
      previo = "<a title='Descargar " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img width="30%" class="clase2" alt="img0" src="media/imagen/pdf.png"/>' + "</a>";
      boton = "Ver archivo PDF" + z;

    } else if (archivo === "/") {
      previo = "";
      boton = "Visitar directorio";

    }




    let listaA = solonombre.toUpperCase();
    let listaB = "<a title='Visitar " + nombre + "'  href='" + ruta + archivo + "' target = '_blank' class='btn btn-primary'>" + boton + "</a>";
    // Genera el contenido que va a html contenido
    // resultado += "<li>" + listaA + "<br>" + listaB + "<br>" + archivo + "<br><br></li>";


    resultado += '<div class="card">  <h4 class="card-header">    <li>' + listaA + '</li>  </h4>  <div class="card-body">    <h4 class="card-title">' + nombre + '</h4> <h5>' + narchi + '</h5>   <p class="card-text text-center">' + previo + '</p> <p class="card-text">' + contenido + '</p>' + listaB + '  </div></div>';

    return resultado;
  });
  resultado += "</ol>";

  nodoDOM.map((item) => (document.getElementById('contenido').innerHTML = item));
  //document.getElementById('contenido').innerHTML = nodoDOM;

  //       document.getElementById('contenido').innerHTML = resultado;

  window.scrollTo(0, 0);

}


function creditos() {
  resultado = "";
  resultado += "<div class=\"panel panel-info\">";
  resultado += "<div class=\"panel-heading\">";
  resultado += "<h3 class=\"panel-title\"><b>Creditos, Web y Libros Consultados</b><\/h3>";
  resultado += "<\/div>";
  resultado += "<div class=\"panel-body\">";
  resultado += imprimirxs;

  resultado += "<h2 class=\"western\">Libros Consultados<\/h2>";
  resultado += "<ul>";
  resultado += "<li>";
  resultado += "<p>Proyecto “Apoyo al Fortalecimiento de las Capacidades en Manejo Ambiental en las Américas”, (2007) Informe General, DDS.<\/p>";
  resultado += "<\/li>";
  resultado += "<li>";
  resultado += "<p>Ullmann, F. (1931). Enciclopedia de química industrial.<\/p>";
  resultado += "<\/li>";
  resultado += "<li>";
  resultado += "<p>Salager, J. L., & Fernández, A. (2004). Surfactantes. Cuaderno FIRP, 300, 07-13.<\/p>";
  resultado += "<\/li>";
  resultado += "<li>";
  resultado += "<p>García, G., & Cruz, L. (2011). Elaboración de cuatro tipos de jabones utilizando aceites vegetales residuales de palma africana (Elaeis guineensis) mediante el método de saponificación. Graduated (Doctoral dissertation, Thesis. Universidad";
  resultado += " Estatal de Bolívar. Facultad de Ciencias Agropecuarias. Recursos Naturales y del Ambiente).<\/p>";
  resultado += "<\/li>";
  resultado += "<li>";
  resultado += "<p>Yubaille, M., Proaño, F., & Peñafiel, S. (2013). Evaluación de tres métodos de saponificación de grasas destinadas a la alimentacion de vacas lecheras (Doctoral dissertation, Tesis Ingenieria en Industrias Pecuarias. Riobamba: Escuela Superior";
  resultado += " Politécnica del Chimborazo, Facultad de Ciencias Pecuarias).<\/p>";
  resultado += "<\/li>";
  resultado += "<li>";
  resultado += "<p>Moraga, L., Molina, G., Agüero, H., & Zurita, L. (1987). Empleo del Lauril Sulfato de Sodio para el diagnostico de mastitis subclínica. XII Reunión Anual Sociedad Chilena de Producción Animal. Santiago, CL, 46.<\/p>";
  resultado += "<\/li>";
  resultado += "";
  resultado += "<\/ul>";




  var webvisitadas = [{
    nombre: "Adobe Acrobat Reader DC",
    direccion: "https://get.adobe.com/reader/?loc=es",
    fecha: "22-08-2020"
  }, {
    nombre: "Apache",
    direccion: "http://www.apache.org",
    fecha: "22-08-2020"
  }, {
    nombre: "Curiosoando",
    direccion: "https://curiosoando.com/",
    fecha: "22-08-2020"
  }, {
    nombre: "PNI de Uruguay",
    direccion: "http://www.nip.gub.uy/",
    fecha: "22-08-2020"
  }, {
    nombre: "Apache HTTP Server Project",
    direccion: "http://httpd.apache.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Apache Lounge",
    direccion: "http://www.apachelounge.com/download/",
    fecha: "22-08-2020"
  }, {
    nombre: "ApacheHaus",
    direccion: "http://www.apachehaus.com/cgi-bin/download.plx",
    fecha: "22-08-2020"
  }, {
    nombre: "Aulas en red, aplicaciones y servicios.Linux Permisos de archivos y carpetas",
    direccion: "http://goo.gl/9JeDdt",
    fecha: "22-08-2020"
  }, {
    nombre: "BitNami WAMP Stack",
    direccion: "https://bitnami.com/stack/wamp",
    fecha: "22-08-2020"
  }, {
    nombre: "Bluefish",
    direccion: "http://bluefish.openoffice.nl/index.html",
    fecha: "22-08-2020"
  }, {
    nombre: "CANAIMA",
    direccion: "http://canaima.softwarelibre.gob.ve/",
    fecha: "22-08-2020"
  }, {
    nombre: "Centos The CentOS Project",
    direccion: "https://www.centos.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Chrome",
    direccion: "https://www.google.es/chrome/browser/desktop/",
    fecha: "22-08-2020"
  }, {
    nombre: "DEBIAN",
    direccion: "https://www.debian.org/index.es.html",
    fecha: "22-08-2020"
  }, {
    nombre: "Evince",
    direccion: "https://wiki.gnome.org/Apps/Evince",
    fecha: "22-08-2020"
  }, {
    nombre: "FileZilla",
    direccion: "https://filezilla-project.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Foxit Reader 7",
    direccion: "http://www.foxitsoftware.com/spanish/products/reader/",
    fecha: "22-08-2020"
  }, {
    nombre: "LibreOffice suite de oficina",
    direccion: "https://es.libreoffice.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Páginas web con PHP",
    direccion: "http://www.mclibre.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Tightvnc",
    direccion: " www.tightvnc.com",
    fecha: "22-08-2020"
  }, {
    nombre: "UBUNTU",
    direccion: "http://www.ubuntu.com",
    fecha: "22-08-2020"
  }, {
    nombre: "WAMPP",
    direccion: "https://www.apachefriends.org/es/",
    fecha: "22-08-2020"
  }, {
    nombre: "WampServer",
    direccion: "http://www.wampserver.es/",
    fecha: "22-08-2020"
  }, {
    nombre: "JavaScript",
    direccion: "https://www.javascript.com/",
    fecha: "22-08-2020"
  }, {
    nombre: "JQUERY",
    direccion: "https://jquery.com/",
    fecha: "22-08-2020"
  }, {
    nombre: "Kernel Linux",
    direccion: "https://www.kernel.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "JavaScript (JS)",
    direccion: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    fecha: "22-08-2020"
  }, {
    nombre: "Wikipedia",
    direccion: "https://es.wikipedia.org/",
    fecha: "22-08-2020"
  }, {
    nombre: "Neutralizacion de Acidos y Bases",
    direccion: "http://www.ehu.eus/biomoleculas/ph/neutra.htm",
    fecha: "22-08-2020"
  }, {
    nombre: "Stackoverflow",
    direccion: "http://es.stackoverflow.com",
    fecha: "22-08-2020"
  }];
  // Ordena de manera alfabetica
  webvisitadas.sort(function(a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  // Genera los link y lista de webvisitadas
  disponible = "<b> Disponible en: </b>";
  fecha_consulta = "<b> Fecha de Consulta: </b>";
  resultado += "<h2 class='western'>Web Visitadas</h2>";
  resultado += "<ul>";

  for (key in webvisitadas) {
    var nombre = webvisitadas[key];
    var direccion = webvisitadas[key];
    var fecha = webvisitadas[key];
    var listaPalabra = nombre.nombre;
    var listaParrafo = direccion.direccion;
    var listaFecha = fecha.fecha;
    var listaA = listaPalabra.toUpperCase();
    var listaB = "<a title='Visitar " + listaPalabra + "' class='clase6' href='" + listaParrafo + "' target = '_blank'>" + listaParrafo + "</a>";
    // Genera el contenido que va a html contenido
    resultado += "<li>" + listaA + "<br>" + disponible + listaB + "<br>" + fecha_consulta + listaFecha + "<br><br></li>";
  }

  resultado += "</ul>";
  resultado += "<a title=\"Visitar Creative Commons\" target=\"_blank\" rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/ve\/\">";
  resultado += "<img alt=\"Licencia de Creative Commons\" style=\"border-width:0\" src=\"media\/imagen\/88x31.png\"><\/a>";
  resultado += "<br\/>Este obra esta bajo una <a title=\"Visitar Licencia Creative Commons\" class=\"clase6\" rel=\"license\" target=\"_blank\" href=\"http:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/ve\/\"> licencia de Creative Commons<\/a>";
  resultado += "<br>";
  resultado += "<p align=\"justify\">Usted puede vender, distribuir, re-distribuir, cambiar, adaptar, modificar este producto, pero siempre debe indicar de quien es el diseño original y cuales fueron las modificaciones efectuadas, si desean que se incluya alguna mejora pueden";
  resultado += "comunicarse con J.E Suministros y Mas, C.A. en";
  resultado += "<a class=\"clase6\" href=\"http:\/\/www.jesuministrosymas.com.ve\/\" name=\"Ingresar a la web de J.E SUMINISTROS Y MAS, C.A.\" target=\"_blank\">www.jesuministrosymas.com.ve<\/a><\/p><br>";
  resultado += "<p class=\"bg-warning\">";
  resultado += "<\/b> Diseñado y Producido en:<br> La República Bolivariana de Venezuela<br> Maracay - Estado Aragua<br> Desde el Año 2016<br>Version Actual " + version + " Del año " + ano + "<br>Diseño Bajo Tecnologías Libres.<br> Autor y Diseño: José Herrera<br> Revisión: Ing. Elena Nuñez<br>        Esta fue una Producción de <a class=\"clase6\" href=\"http:\/\/www.jesuministrosymas.com.ve\/\" name=\"J.E SUMINISTROS Y MAS, C.A.\" target=\"_blank\">J.E SUMINISTROS Y MAS, C.A.<\/a>";
  resultado += "<\/p>";
  resultado += "<h2>PARA CITAR ESTE MANUAL:<\/h2>";
  resultado += "";
  resultado += "";
  resultado += "<div>";
  resultado += "<!-- Nav tabs -->";
  resultado += "<ul class=\"nav nav-tabs\" role=\"tablist\">";
  resultado += "<li role=\"presentation\" class=\"active\"><a href=\"#apa\" aria-controls=\"apae\" role=\"tab\" data-toggle=\"tab\">NORMA APA<\/a><\/li>";
  resultado += "<li role=\"presentation\"><a href=\"#iso0690\" aria-controls=\"iso0690\" role=\"tab\" data-toggle=\"tab\">NORMA ISO0690<\/a><\/li>";
  resultado += "<li role=\"presentation\"><a href=\"#mla\" aria-controls=\"mla\" role=\"tab\" data-toggle=\"tab\">NORMA MLA<\/a><\/li>";
  resultado += "<\/ul>";
  resultado += "<!-- Tab panes -->";
  resultado += "<div class=\"tab-content\">";
  resultado += "<div role=\"tabpanel\" class=\"tab-pane active fade in active\" id=\"apa\">";
  resultado += "<h3>NORMA APA<\/h3>";
  resultado += "Herrera Vargas J. M. (" + ano + "). MANUAL DIGITAL COMO ELABORAR PRODUCTOS DE LIMPIEZA EN VENEZUELA VERSION " + version + " EDICIONES J.E SUMINISTROS Y MAS, C.A.";
  resultado += "<\/div>";
  resultado += "<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"iso0690\">";
  resultado += "<h3>NORMA ISO690<\/h3>";
  resultado += "HERRERA VARGAS, Jose Medardo; J.E SUMINISTROS Y MAS, C.A., MANUAL DIGITAL COMO ELABORAR PRODUCTOS DE LIMPIEZA EN VENEZUELA VERSION  " + version + " . " + ano + ".";
  resultado += "<\/div>";
  resultado += "<div role=\"tabpanel\" class=\"tab-pane fade\" id=\"mla\">";
  resultado += "<h3>NORMA MLA<\/h3>";
  resultado += "Herrera Vargas, Jose Medardo. \"MANUAL DIGITAL COMO ELABORAR PRODUCTOS DE LIMPIEZA EN VENEZUELA VERSION " + version + "\" EDICIONES J.E SUMINISTROS Y MAS, C.A. (" + ano + ").";
  resultado += "<\/div>";
  resultado += "<\/div>";
  resultado += "<\/div>";
  resultado += "<\/div>";

  document.getElementById('contenido').innerHTML = resultado;
}

function glosario() {

  var glosario = [{
    palabra: "",
    parrafo: ""
  }, {
    palabra: "Acido Benzoico",
    parrafo: "Su nombre comercial y científico es el mismo ingrediente activo en la fabricación de la crema para alisar el cabello."
  }];

  // Ordena de manera alfabetica

  glosario.sort(function(a, b) {
    if (a.palabra > b.palabra) {
      return 1;
    }
    if (a.palabra < b.palabra) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  // Genera los link y lista de glosario
  definiciones = "";
  definiciones += '<div class="panel panel-info"><div class="panel-heading"><h3 class=\"panel-title\"><b>Glosario de Terminos</b></h3></div><div class="panel-body">';
  definiciones += imprimirxs;
  definiciones += "<dl>";
  for (var i = 0; i < glosario.length; i++) {
    var palabra = glosario[i];
    var parrafo = glosario[i];
    var listaPalabra = palabra.palabra;
    var listaParrafo = parrafo.parrafo;
    var listaA = listaPalabra.toUpperCase();
    var listaB = listaParrafo;
    // Genera el contenido que va a html contenido
    definiciones += "<dt>" + listaA + "</dt><dd>" + listaB + "</dd>";

  }
  definiciones += "</dl></div></div>";
  document.getElementById('contenido').innerHTML = definiciones;
}


function extra() {

  var di = "extra/media/";
  var dib = "extra/"

  function is_img(file) {
    act = " <span data-toggle = 'tooltip' data-placement = 'bottom' title = 'Contiene Links' class = 'glyphicon glyphicon-file glyphicon-refresh' aria-hidden = 'true'> </span>";
    acte = " <span data-toggle = 'tooltip' data-placement = 'bottom' title = 'Contiene Links' class = 'glyphicon glyphicon-file glyphicon-warning-sign' aria-hidden = 'true'> </span>";

    var ifrmad = "";
    ifrmad += "<p class='text-right'>" +
      "<button autocomplete='off' id='myButton' class='btn btn-danger btn-sm' " +
      "title = 'Recargar para reconocer Extensiones Instaladas' onclick = 'recarga();' href='#Extensiones'>" +
      "Recargar Sistema " + act + "</button>";
    ifrmad += "</p>";
    ifrmad += "<div class='alert alert-danger' role='alert'> <strong>" + acte + " Lo Sentimos!</strong> Usted no posee instalado Extensiones de este Curso <a href='" + linkextenciones + "' target='_blank' class='btn btn-info' title='Consulte extensiones disponibles'><b>CONSULTAR EXTENSIONES DISPONIBLES AQUI</b> </a> </div>";


    ifrmad += "<div class=\"panel panel-info\">";
    ifrmad += "<div class=\"panel-heading\"><b>Como Instalar Extensiones</b><\/div>";
    ifrmad += "<div class=\"panel-body\">";
    ifrmad += "<h1>Como Instalar una Extension<\/h1>";
    ifrmad += "<p>El proceso de instalacion es simple, y se explica y detalla paso a paso en estos 5 sencillos pasos:<\/p>";
    ifrmad += "<ol><li>Es sencillo, el proceso consiste en adquirir el paquete correspondiente a la extension, este archivo lo recibira en formato .7z que es el formato de compresion standar con el que trabajamos en J.E Suministros y Mas, C.A.<\/li>";
    ifrmad += "<p class=\"text-center\">";
    ifrmad += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/extra\/comprimido.png\" alt=\"Archivo Comprimido\">";
    ifrmad += "<\/p>";
    ifrmad += "<li>Debe descomprimir el archivo de nombre <strong>extra<\/strong> descargado.<\/li>";
    ifrmad += "<p class=\"text-center\">";
    ifrmad += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/extra\/extraer.png\" alt=\"Archivo Comprimido\">";
    ifrmad += "<\/p>";
    ifrmad += "<li>Usted obtendra una carpeta de nombre <strong>extra<\/strong> <\/li>";
    ifrmad += "<p class=\"text-center\">";
    ifrmad += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/extra\/carpetaextraida.png\" alt=\"Archivo Comprimido\">";
    ifrmad += "<\/p>";
    ifrmad += "<li>Todos los archivos contenidos en la carpeta deben seleccionarlo y copiarlo<\/li>";
    ifrmad += "<p class=\"text-center\">";
    ifrmad += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/extra\/copiarextra.png\" alt=\"Archivo Comprimido\">";
    ifrmad += "<\/p>";
    ifrmad += "<li>Tome en cuenta que su curso posee 3 carpetas que son: <strong>extra</strong>, <strong>media</strong>  y <strong>pag</strong>, y un archivo <strong>index.html</strong> que es el que le permite acceder a su curso. Los archivos copiados en el paso anterior deben ser pegados dentro de la carpeta <strong>extra<\/strong> de su curso, ver imagen de referencia<\/li>";
    ifrmad += "<p class=\"text-center\">";
    ifrmad += "<img class=\"img-thumbnail\" src=\"media\/imagen\/portadas\/extra\/carpetaextra.png\" alt=\"Archivo Comprimido\">";
    ifrmad += "<\/p>";
    ifrmad += "<\/div>";
    ifrmad += "<\/div>";

    var img = new Image();
    img.src = file;
    img.onload = function() {
      extension();
    }
    img.onerror = function() {
      document.getElementById("contenido").innerHTML = ifrmad;
    }
  }
  is_img(di + "img.jpg");

}

function recarga() {

  var x = "";
  var x = document.getElementsByTagName("body")[0];
  x.style.backgroundColor = "red";
  document.location.reload();
  // return extra();
  //var x += document.location.reload();

}

function filtrarseccion() {
  document.getElementById('formula').innerHTML = '';
  document.getElementById('tipo').innerHTML = 'A la Espera de su Selección';
  var seccion = document.getElementById('selectSecciones').value;
  salidaproducto(seccion);
}

function primerselect() {

  var select = document.createElement('select');
  select.id = 'selectSecciones';
  select.classList.add('form-control');
  select.addEventListener('change', filtrarseccion);
  var option = document.createElement('option');
  option.disabled = true;
  option.selected = true;
  option.textContent = 'Filtrar por Modulo';
  select.appendChild(option);
  secciones.forEach(function(seccion) {
    option = document.createElement('option');
    option.textContent = seccion;
    select.appendChild(option);

  });

  document.getElementById('primerselect').appendChild(select);

}

function salidaproducto(seccion) {
  document.getElementById('lista').innerHTML = '';
  var select = document.createElement('select');
  select.id = 'mySelect';
  select.classList.add('form-control');
  select.addEventListener('change', selector);
  var option = document.createElement('option');
  option.disabled = true;
  option.selected = true;
  option.textContent = sup;
  select.appendChild(option);
  var productofiltrado = producto;

  if (seccion) {
    productofiltrado = producto.filter(function(item) {
      return item.grupo === seccion;
    });
  }

  productofiltrado.forEach(function(item) {
    option = document.createElement('option');
    option.textContent = item.n;
    select.appendChild(option);
  });

  // DESPUES DE Seleccione el Modulo
  document.getElementById('lista').innerHTML = 'Ahora Seleccione el Producto:';

  document.getElementById('lista').appendChild(select);

  //document.getElementById('lista').innerHTML = "A la Espera de su Seleccion" + '<img width="5%" src="media/imagen/reloj.gif"></img>';
  document.getElementById('tipo').innerHTML = "A la Espera de su Seleccion" + '<img width="5%" src="media/imagen/reloj.gif"></img>';

  document.getElementById('inputentrada').innerHTML = '<input class=\"form-control\" placeholder=\"Cantidad de Producto\" id=\"entrada\" onkeyup=\"validarSiNumero(this.value);\" \/>';




}

/*
function salidaproducto() {
    var select = document.createElement('select');
    select.id = 'mySelect';
    select.classList.add('form-control');
    select.addEventListener('change', selector);
    var option = document.createElement('option');
    option.disabled = true;
    option.selected = true;
    option.textContent = sup;
    select.appendChild(option);
    for (li in producto) {
        option = document.createElement('option');
        option.textContent = producto[li].n;
        select.appendChild(option);

    }

    document.getElementById('lista').appendChild(select);

}

*/

function selector(UI) {

  fo = document.getElementById('mySelect').value;
  //document.getElementById('formula').innerHTML = "<br><b>"+fo+"</b><br>";
  document.getElementById('formula').innerHTML = "<br><b>" + fo + "</b><br>";
  document.getElementById('entrada').value = "";
  document.getElementById('salida').innerHTML = "";
  document.getElementById('procedimiento').innerHTML = "";
  productoSeleccionado = producto.find(x => x.n === this.value);
  tipoEl = document.getElementById('tipo');
  if (productoSeleccionado) {
    tipoEl.innerText = (productoSeleccionado.t === 'liq' ?
      'Indique la cantidad de LITROS de' + ' ' + fo.toUpperCase() + ' que desea preparar: ' : 'Indique la cantidad de KILOS de' + ' ' + fo.toUpperCase() + ' que desea preparar: ');
  } else {
    tipoEl.innerText = '';
  }


  var az = '';
  var ro = '';
  var am = '';
  var bl = '';

  az = productoSeleccionado.az;
  ro = productoSeleccionado.ro;
  am = productoSeleccionado.am;
  bl = productoSeleccionado.bl;
  bla = productoSeleccionado.bla;

  var azul = "";
  var rojo = "";
  var amarillo = "";
  var blanco = "";

  var valores = [0, 1, 2, 3, 4];
  var riesgos = [
    "Sin riesgo",
    "Poco peligroso",
    "Peligroso",
    "Muy peligroso",
    "Mortal"
  ];
  var inflamabilidad = [
    "No se Inflama",
    "Inflama a mas de 93°C",
    "Inflama a partir de 93°C",
    "Inflama a parir de 37°C ",
    "Inflama a parir de 25°C "
  ];
  var reactividad = [
    "Estable",
    "Inestable en Caso de Calentamiento",
    "Inestable en caso de cambio quimico violento",
    "Puede Explotar en caso de choque o calentamiento",
    "Puede explotar subitamente"
  ];
  var riesgoesp = [
    "Oxidante",
    "Corrosivo",
    "Radioactivo",
    "No Usar Agua",
    "Riesgo Biologico",
    "Ninguno"
  ];

  valores.forEach(function(elemento) {
    if (az == elemento)
      azul = "Nivel de Riesgo: [" + elemento + "] " + riesgos[elemento];
    if (ro == elemento)
      rojo = "Inflamabilidad: [" + elemento + "] " + inflamabilidad[elemento];
    if (am == elemento)
      amarillo = "Reactividad: [" + elemento + "] " + reactividad[elemento];
    if (bla == elemento)
      blanco = "Riesgo Especial: " + riesgoesp[elemento];
  });

  switch (bla) {
    case 0:
      // Oxidante
      var bl = "OXI";
      break;
    case 1:
      // Corrosivo
      var bl = "COR";
      break;
    case 2:
      // Radioactivo
      var bl = "<img alt= '' src='media/imagen/general/24px_simbolo_riesgo_radiactivo.png'> ";
      break;
    case 3:
      // No Usar Agua
      var bl = "<s>W</s>";
      break;
    case 4:
      // Riesgo Biologico
      var bl = "<img alt= '' src='media/imagen/general/24px_simbolo_riesgo_biologico.png'> ";
      break;
    case 5:
      // Riesgo Biologico
      var bl = "";
      break;
  }


  var rombo = "";

  rombo += "<tbody>";

  rombo += "<tr>";
  rombo += "<th><b>" + fo.toUpperCase() + "</b><br><a data-toggle='modal' data-target='#myModal3' name='NFPA' title='Cargar Explicacion sobre Rombo de Seguridad NFPA' href='#NFPA'><b>Rombo NFPA<b/> </a><\/th>";
  rombo += "<\/tr>";
  rombo += "<tr>";
  rombo += "<td align=\"left\">";
  rombo += "<div class = \"rombo1\" >";
  rombo += "<div class = \"rombo2\" >";
  rombo += "<p>";
  rombo += "<img alt=\"NFPA 704.svg\" src=\"media\/imagen\/general\/NFPA_704.svg.png\"";
  rombo += "width=\"75\" height=\"75\" srcset=\"media\/imagen\/general\/NFPA_704.svg.png 1.5x, media\/imagen\/general\/NFPA_704.svg.png 2x\"";
  rombo += "data-file-width=\"600\" data-file-height=\"600\">";
  rombo += "<\/p>";
  rombo += "<\/div>";
  rombo += "<div class = \"rojo\" title=\"" + rojo + "\" \">" + ro + "<\/div>";
  rombo += "<div class = \"azul\" title=\"" + azul + "\">" + az + "<\/div>";
  rombo += "<div class = \"amarillo\" title=\"" + amarillo + "\" >" + am + "<\/div>";
  rombo += "<div class = \"blanco\" title=\"" + blanco + "\" >";
  rombo += "" + bl;
  rombo += "<\/div>";
  rombo += "<\/div>";
  rombo += "<\/td>";
  rombo += "<\/tr>";
  rombo += "<\/tbody>";


  rombo += "<!-- Modal 3 -->";
  rombo += "<div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">";
  rombo += "<div class=\"modal-dialog\" role=\"document\">";
  rombo += "<div class=\"modal-content\">";
  rombo += "<div class=\"modal-header\">";
  rombo += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;<\/span><\/button>";
  rombo += "<h4 class=\"modal-title\" id=\"myModalLabel\">ROMBO NFPA<\/h4>";
  rombo += "<\/div>";
  rombo += "<div class=\"modal-body text-center\">";
  rombo += " <img width=\"60%\" src=\"media\/imagen\/general\/rombo_nfpa_704.png\" alt=\"\">";
  //rombo += "<div id='rombo_nfpa'></div>";
  rombo += "<p>Si desea acceder a la seccion donde se amplia informacion sobre el Rombo NFPA puede hacerlo accediendo a: <a data-dismiss='modal' onclick='nfpa();' name='NFPA' title='Rombo de Seguridad NFPA' href='#NFPA'> <b>Rombo de Seguridad NFPA</b></a></p>";
  rombo += "<\/div>";
  rombo += "<div class=\"modal-footer\">";
  rombo += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar<\/button>";
  rombo += "<\/div>";
  rombo += "<\/div>";
  rombo += "<\/div>";
  rombo += "<\/div>";


  document.getElementById('nfpa').innerHTML = rombo;
  document.getElementById("mySelect").value = sup;
  tratamiento_producto(UI);
}
//salidaproducto();

function tratamiento_producto(UI) {

  lsin = " Litro de ";
  lplu = " Litros de ";
  ksin = " Kilo de ";
  kplu = " Kilos de ";
  tipoproducto = "";
  tipoproducto = productoSeleccionado.t;
  if (tipoproducto == "liq") {
    if (UI == 1) {
      tipoproducto = lsin;
    } else {
      tipoproducto = lplu;
    }
    //   tipoproducto = " Litros de ";
  } else {
    if (UI == 1) {
      tipoproducto = ksin;
    } else {
      tipoproducto = kplu;
    }
    //        tipoproducto = " Kilos de ";
  }
  return tipoproducto;
}

//DEFINIENDO ENTRADA DE VARIABLES AL SISTEMA


function entrada() {
  if (UI = document.getElementById('entrada')) {
    eval(document.getElementById('formula').textContent.toLowerCase().replace(/ /gi, '_') + '()');
  }
}

//VALIDAR SI VALOR INGRESADO ES VALIDO
function validarSiNumero(UI) {


  if (!/^([0.1-9])*$/.test(UI)) {
    var nada = "<div class='alert alert-info' role='alert'> <span class='glyphicon glyphicon-alert' aria-hidden='true'></span> </span> <span class='sr-only'>Error:</span> <strong> ALGO HA OCURRIDO..! </strong> El Valor: <b>" + UI + "</b> no es un numero valido, intente nuevamente utilizando numeros desde <strong> 0.1 </strong> hasta la cantidad de " + tipoproducto + " <strong>" + fo.toUpperCase() + " </strong> que usted desee fabricar.</div>";
    document.getElementById('salida').innerHTML =
      nada;
    document.getElementById("procedimiento").innerHTML = "";
  } else if (UI === "") {
    var nada = "<div class='alert alert-warning' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> <span class='sr-only'>Error:</span><strong> LO SENTIMOS..! </strong> Pero usted no ha escrito nada, intente nuevamente utilizando numeros desde <strong> 0.1 </strong> hasta la cantidad de " + tipoproducto + " <strong>" + fo.toUpperCase() + "</strong> que usted desee fabricar.</div>";
    document.getElementById('salida').innerHTML =
      nada;
    document.getElementById("procedimiento").innerHTML = "";
  } else if (UI == 0) {
    var nada = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span> </span> <span class='sr-only'>Error:</span> <strong> LO SENTIMOS..! </strong> Pero Cero (0) no es un numero valido, intente nuevamente utilizando numeros desde <strong> 0.1 </strong> hasta la cantidad de " + tipoproducto + " <strong>" + fo.toUpperCase() + "</strong> que usted desee fabricar.</div>";

    document.getElementById('salida').innerHTML = nada;
    document.getElementById("procedimiento").innerHTML = "";
  } else if (UI < 0.1) {
    var nada = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span> </span> <span class='sr-only'>Error:</span> <strong> LO SENTIMOS..! </strong> El numero que ingreso es muy pequeño, intente nuevamente utilizando numeros desde <strong> 0.1 </strong> hasta la cantidad de " + tipoproducto + " <strong>" + fo.toUpperCase() + "</strong> que usted desee fabricar.</div>";

    document.getElementById('salida').innerHTML = nada;
    document.getElementById("procedimiento").innerHTML = "";
  } else if (UI === "010101100100010101001110010001010101101001010101010001010100110001000001") {
    var nada = "<div class='alert alert-warning' role='alert'></div><div class='alert alert-info text-center' role='alert'><span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span> <span class='glyphicon glyphicon-star' aria-hidden='true'></span></div><div class='alert alert-danger' role='alert'></div>";

    document.getElementById('salida').innerHTML = nada;
    document.getElementById("procedimiento").innerHTML = "";
  } else {
    entrada();
  }

}




// CICLO
function tratamiento(UI) {
  for (xy in componente) {
    tt = "";
    uu = "";
    if (componente[xy].t == "liq") {
      if (componente[xy].v == 1) {
        uu = " Litro ";
        tt = " Mililitro ";
      } else {
        uu = " Litros ";
        tt = " Mililitros ";
      }
    } else {
      if (componente[xy].v == 1) {
        uu = " Kilo ";
        tt = " Gramo ";
      } else {
        uu = " Kilos ";
        tt = " Gramos ";
      }
    }
    if (UI <= 1) {
      componente[xy].v = (componente[xy].v * 1000).toFixed(2) + tt;
    } else {
      if (componente[xy].v * 1000 >= 1000) {
        componente[xy].v = (componente[xy].v).toFixed(2) + uu;
      } else {
        componente[xy].v = (componente[xy].v * 1000).toFixed(2) + tt;
      }
    }
  }
  return componente[xy].v;
}



function seleccion() {
  var selec = document.getElementById("mySelect").value;
  document.getElementById("formula").innerHTML = selec;
}


function popove() {
  $('[data-toggle="popover"]').popover({
    placement: 'auto right',
    trigger: 'hover',
    html: true
  });
}




function paramodal() {
  var materiales = "<p>Son Bastante sencillos y casi que de uso comun, hay cosas que pueden ser sustituidos por otros instrumentos que hagan la misma funcion, como por ejemplo los instrumentos aforados pueden ser sustituidos por jarras o vasos de uso domestico que tengan marcas de medidas, si no tienen marcas usted puede hacer dichas marcas con marcadores permanentes o teipes, la idea de que esten marcadas las medidas es acelerar los procesos de produccion.</p>" + olli + "Tobos plasticos con 4 veces la capacidad de producto a preparar." + lili + "Paletas de madera, palos de escoba, cabos de madera." + lili + "PH metro o bandas medidoras de PH (es posible en algunos paises que el uso de las bandas resulten de pronto mas economicas), Tome en cuenta que si se decantan por utilizar Bandas Medidoras de PH las mismas son desechables y si usted va a mantener una produccion constante a la larga le sera mejor economicamente hablando el uso del dispositivo digital PH Metro." + lili + "Probetas de varias capacidades, tambien le puede servir jarras con medidas marcadas." + lili + "Delantal de cuero de chivo (Cuero de Ovino) o plastico resistente, para efectos de proteccion se pueden utilizar cualquiera de los 2 materiales, pero para efectos de durabilidad los delantales de cuero son mucho mas duraderos en el tiempo, los mismos los puedes encontrar en sitios donde confeccionen bolsos de cuero o zapatos, talabarterias, personas que fabriquen correas o productos de cuero, Tambien puede servir cuero de Vaca (Cuero de Bovino) pero el mismo tiende a ser muy pesado pero es mucho mas resistente y mas si se trabaja con acidos o alcalis fuertes." + lili + "Guantes aislantes de cuero o de goma. Evite manipular acidos o alcalis fuertes con guantes de latex." + lili + "Lentes de seguridad o careta de proteccion." + lili + "Tapa boca, filtros, deshumificadores, etc." + lili + "Pesos digitales o analogicos." + lili + "Embudos de varios tamaños." + lili + "Vestimenta adecuada, bragas, batas de laboratorio." + lili + "Se recomienda que en la instalacion donde se va a producir productos de limpieza se tenga una fuente de agua garantizada." + liol;
  document.getElementById('materiales').innerHTML = materiales;
}
paramodal();


function industrial() {
  var resultado = "";
  resultado += "";
  resultado += "<div class=\"panel panel-info\">";
  resultado += "<div class=\"panel-heading\"><strong>Instalaciones Industriales</strong><\/div>";
  resultado += "<div class=\"panel-body\">";
  resultado += imprimirxs;
  resultado += "<h2>Introduccion</h2><p>Es posible que al adquirir este manual digital las intenciones son las de activar la economia a un nivel domestico, fabricando productos que seran comercializados por usted mismo/a, pero que sucederia si el producto que usted comienza a fabricar gusta al consumidor y de alguna manera empieza a aumentar la demanda del producto, o mejor aun, es contactado por industrias de su localidad que deciden comprarle a usted productos de limpieza para dotar sus empresas y estas compran por cantidades ejemplo 50 litros de cada producto y dicha compra es cada quince dias, es decir ya por alli usted debe planificarse a producir un aprox de 200 litros de productos variados mensuales solo para 1 cliente, y si este tipo de clientes se incrementa tambien sucedera con la cantidad de producto terminado.</p><p>Es alli donde hay que pensar en ampliar los horizontes de nuestro emprendimiento y proceder al paso de ampliacion y tecnificacion de nuestro negocio con la finalidad de poder darnos abasto con la entrega de pedidos, es real que de la noche a la mañana no se logra tener una edificacion para dar trabajo a 500 personas pero al tener en mente un proyecto escalable este tema puede ser de gran utilidad para la toma de decisiones en el futuro proximo. </p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/llenadoautomatico.jpg\"></div>";
  resultado += "<h2>Instalaciones Industriales</h2><p>Se entiende por Instalaciones Industriales al conjunto de medios necesarios para los procesos de fabricación, para permitir el uso del edificio, como medida de protección o seguridad, o para el almacenamiento de productos. La instalación industrial comprende: <ul><li>El edificio industrial. </li><li>Las máquinas o bienes de equipo. </li><li>Las máquinas o bienes de equipo.</li><li>Las instalaciones específicas.</li><li>Instalaciones de almacenamiento y distribución (gases, líquidos, sólidos).</li><li>Instalaciones de generación, distribución y transformación eléctrica.</li><li>Instalaciones de agua (proceso y potable).</li><li>Instalaciones de aire comprimido.</li><li>Instalaciones de protección contra incendios.</li><li>Instalaciones de saneamiento.</li><li>Instalaciones de frío industrial.</li><li>Instalaciones de climatización o de calefacción.</li></ul></p>";
  resultado += "<h2>Diseño de Plantas Industriales</h2><p>El diseño de plantas industriales es una labor de gestión que son dirigidas por especialistas con la finalidad de una buena distribución de espacio físico; en muchos casos el diseño está orientado para plantas nuevas y para la expansión de una existente.</p><p>Las plantas industriales son fábricas donde se elaboran diversos productos, su función es combinar el trabajo humano con las máquinas que se encuentran en sus instalaciones para transformar las materias primas y la energía.</p><p>Son importantes para contribuir a los objetivos empresariales, por lo que no debe realizarse superficialmente; se debe analizar todas las alternativas antes de seleccionar el lugar donde la fábrica opere en las mejores condiciones de costos, que tenga acceso a la infraestructura adecuada y un suministro.</p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/lineadetrabajo.jpg\"></div>";
  resultado += "<h2>Objetivos del diseño de plantas industriales</h2> <ul> <li>Reducción del riesgo para la salud y aumento de la seguridad de los trabajadores.</li> <li>Incremento de la producción.</li> <li>Disminución en los retrasos de la producción.</li> <li>Acortamiento del tiempo de fabricación.</li> <li>Mayor facilidad de ajuste a los cambios de condiciones.</li> <li>Disminución del riesgo para el material o su calidad.</li> <li>El sitio más apropiado para establecer una planta industrial requiere ser estudiado minuciosamente, teniendo como bases principales lo relativo a la producción y a la colocación de los productos terminados.</li> </ul>";
  resultado += "<h2>Los factores para localizar una planta industrial:</h2> <ul> <li>La cercanía de las fuentes de materias primas y del mercado consumidor.</li> <li>La disponibilidad de mano de obra y la cercanía de los mercados laborales calificados para utilizar la tecnología del proyecto.</li> <li>Disposición de residuos, protección contra incendios, disminución del ruido</li> <li>Clima</li> <li>La disponibilidad y confiabilidad de los sistemas de apoyo (electricidad, agua potable, energía, comunicaciones, etc.).</li> <li>Condiciones sociales y culturales</li> <li>Consideraciones legales y políticas</li></ul> <p>La mano de obra será indispensable y se presenta tres dimensiones importantes en la localización de empresas: número de trabajadores, cualificación y coste. Toda planta industrial es la fusión perfecta entre el hombre y la máquina, trabajado como uno, donde la función principal del empleado es la obtención del mayor rendimiento de las máquinas.</p> <p>Otro factor a destacar para el diseño de una planta industrial es el conocimiento y la experiencia de los especialistas dedicados por completo a dicha labor, que efectúan de manera permanente una actualización e innovación continua en cada uno de los procesos que se tenga en la organización, contribuyendo esto a la mejora continua en los sistemas de producción y renovación en la cadena de suministros.</p> <p>Para generar lo menores costos y el mayor aprovechamiento de la empresa se debe tener un buen manejo de los sistemas de control logístico los cuales se basan en el uso adecuado de la información, este reduce tiempos y ayuda a detectar las anomalías presentadas en la diferentes instancias de la producción.</p>";
  resultado += "<h2>Arquitectura Industrial</h2> <p>Todos conocemos que la arquitectura es el componente artístico de las edificaciones. Torres, viviendas y todo tipo de inmuebles que sean diseñados por un buen equipo de arquitectos no solo poseen la cualidad de albergarnos, sino que su estética puede encantarnos. En pocas palabras, es la belleza de las construcciones. Sin embargo, pocos sabemos específicamente en qué consiste la arquitectura industrial.  Pues tiene que ver con un asunto histórico o de evolución. Y es que puede llamársele una de las etapas de la evolución de la arquitectura, que tiene que ver con los cambios económicos, políticos y culturales de las sociedades a lo largo de la historia. Así, la arquitectura industrial tuvo que ver con la revolución industrial.</p> <p>Como se sabe, la revolución industrial sucedió alrededor de la segunda mitad del siglo XVIII, y, con ella, la humanidad adquirió nuevas necesidades, especialmente lo que vino a denominarse la industria, como fábricas (con maquinarias y trabajadores), pero también puentes, hospitales… todo lo que una ciudad moderna necesitó luego del avance tecnológico que supuso esta revolución.</p> <p>En esa línea, la arquitectura industrial se dedicó al diseño de las edificaciones que las nuevas sociedades, marcadas por los cambios que trajo esa revolución tecnológica, requerían. Hoy en día, se puede decir que si la arquitectura en general diseña estéticamente las construcciones, la arquitectura industrial diseña las construcciones destinadas a albergar maquinarias de las empresas, fábricas, o cuyo empleo del espacio sea netamente utilitario más que artístico.</p> <p>Por ello, la arquitectura industrial sigue ciertos parámetros diferenciados para el diseño de esas edificaciones, como la funcionalidad, el ahorro en la compra de los materiales y el abandono parcial del lujo. Claro, su objetivo no es tan estético, sino que busca cumplir con los objetivos económicos de la empresa o cliente que requiere esa construcción.</p> <p>En cuanto a los materiales más utilizados en esta rama arquitectónica, luego de la revolución, fueron el hierro fundido, acero laminado, hormigón armado o el vidrio. A raíz de estas preferencias por los materiales (más accesibles por su producción en serie, no como el bronce que se usaba en la antigüedad) es que las construcciones se dieron a ritmos más acelerados, a la velocidad que imponía la industrialización.</p> <p>Así, la arquitectura industrial mantiene un equilibrio entre el cumplimiento de los objetivos empresariales y la estética. Prueba de aquello son los rascacielos como el Burj Khalifa (Dubai), el Empire State (EE.UU.) o el edificio Chrysler (Nueva York); el Puente de Coalbrookdale (el primer puente en arco de hierro fundido, en Inglaterra); bibliotecas como la de Santa Genoveva (París); La Torre Eiffel (Francia); invernaderos como el Jardines de San José (Málaga) o el Jardín Botánico de Kew (Londres).</p> <p>Lo cierto es que mucho le debemos a la arquitectura industrial, una rama fantástica que atiende hasta hoy las urgencias del nuevo mundo industrializado, otorgando a la humanidad una combinación ideal: diseño de espacios útiles y bellos.</p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/instalacionesindustriales.jpg\"></div>";
  resultado += "<p></p>";
  resultado += "<p></p>";
  resultado += "<p></p>";
  resultado += "<p></p>";
  resultado += "<p></p>";
  resultado += " <\/div>";
  resultado += "<\/div>";
  resultado += "<\/div>";

  document.getElementById('contenido').innerHTML = resultado;
}

function ph() {
  var resultado = "";
  resultado += "";
  resultado += "<div class=\"panel panel-info\">";
  resultado += "<div class=\"panel-heading\"><strong>Leccion sobre PH</strong><\/div>";
  resultado += "<div class=\"panel-body\">";
  resultado += imprimirxs;
  resultado += "<p class='bg-primary'>Puede visitar la siguiente direccion donde se amplian detalles sobre <a href='http://www.ehu.eus/biomoleculas/ph/neutra.htm' target='_blank' type='button' class='btn btn-warning'>NEUTRALIZACION DE ACIDOS Y BASES</a> </p><p>Todos hemos oído hablar del PH en todos los productos químicos, y más los de limpieza, pero si nuestra especialidad no es el area quimica es posible que no sea muy familiar lo qué significa el PH en un producto químico y para qué sirve.</p><p>PH significa Potencial de Hidrógeno, e indica la acidez o alcalinidad de un producto, pero ¿ésto en qué se traduce?</p><p> Normalmente la escala del PH va desde 0 a 14, de tal forma que podemos decir que un producto es ácido si su PH va de 0 a 7 aproximadamente, y un producto es alcalino si su PH va de 7 en adelante.Ejemplos de sustancias ácidas pueden ser el limón o vinagre y de sustancias alcalinas la lejía o el amoniaco.</p><p>  Se ha determinado que la piel humana ronda el PH 5.5 con lo que un producto con menor PH podría producir irritaciones.Un PH ácido podría quemarnos la piel y un PH alcalino podría incluso disolverla.</p> <p>Cada producto y cada marca tienen unos PH determinados por la composición química, pero como norma general indicamos lo habitual según el tipo de producto o superficie a tratar:</p><ul><li><strong>Productos neutros (PH de 6 a 8).</strong> Son productos que se pueden utilizar en superficies o suelos cristalizados y con brillo, por ejemplo el marmol, ya que no alteran las propiedades del brillo.Pueden ser utilizados para uso personal ya que no afectan a la piel.</li><p>    Ejemplos de productos neutros: desinfectantes pino o limón, desinfectantes para mármol, Jabón para manos.</p><li><strong> Productos alcalinos (PH 9 o mayor). </strong> Son productos que poseen propiedades desinfectantes y limpiadoras, especialmente si la suciedad contiene pigmentos, proteínas o grasas.Si el PH es muy alto suele utilizarse como desatascador.</li><p>    Ejemplos de productos alcalinos: Desengrasantes, Lavavajillas para máquinas industriales, o desinfectantes amoniacal.</p><li> <strong>Productos ácidos (PH 5 o menor). </strong> Son productos con propiedades típicamente desincrustantes, ideales para restos calcáreos, óxidos, etc.Pero cuidado: se deben usar en superficies no delicadas.</li><p>    Ejemplos de productos ácidos: Abrillantadores, lavaplatos, Limpiadores cítricos entre otros.</p>";

  resultado += "<h3>PH en Detergentes</h3>";
  resultado += "<p>Uno de los productos de limpieza más comúnmente utilizado, es el detergente, el cual es usado de 3 a 4 veces al día en una casa común.</p><p>    Pero primero se debe definir que es un detergente, este se define como: \“Un detergente es una sustancia que se utiliza para limpiar ya que dispone de propiedades que le permiten quitar la suciedad sin afectar el material sometido al proceso de limpieza\”</p><p>    El punto de vista que se abarcara en esta entrada es el contenido de PH que posee el detergente, como es que este afecta su acidez y como lo ayuda a cumplir su función principal, que es limpiar y remover suciedad y cuánto debe de ser la cantidad de PH aproximado para que no sea una sustancia dañina.</p><p>    El PH nos indica el grado de alcalinices o acidez del detergente, dependiendo de este nivel obtendremos en los materiales en los cuales se aplique unos efectos u otros.</p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/ph.jpg\"></div>";
  resultado += "<p>El PH de un detergente normal debe de ser de 10.5 que en comparación con otros elementos es muy elevado, es por eso que provoca irritación e incomodidad.    El agua pura tiene un valor pH de aprox. 7 y se la denomina neutra. Las soluciones ácidas tienen un valor pH más bajo. En los productos alcalinos, el valor pH es más alto.Los productos de limpieza ácidos son adecuados para eliminar depósitos de calcio y manchas de herrumbre(sustancia que se forma sobre el hierro metálico expuesto a la humedad, es una sustancia color marrón), y los alcalinos son adecuados para eliminar suciedades de contenido graso y aceitoso.</p>";
  resultado += "<div class='text-center'><img width='70%' src=\"media\/imagen\/general\/ph2.jpg\"></div>";
  resultado += "<p>Las propiedades ácido–básicas de los compuestos orgánicos son importantes para su función en los seres vivos; desde su distribución hasta su destino metabólico son determinados por el carácter ácido o básico además, la acidez del medio en que se encuentran, también tiene efecto sobre ellos. Por tal motivo, para comprender cabalmente la Bioquímica, es necesario un conocimiento sólido de los fundamentos del comportamiento de los ácidos y las bases. El término ácido proviene del latín acidus que significa \“agrio\”, y se refiere al sabor característico de estos compuestos; además del sabor, los ácidos en general son substancias que provocan vire del tornasol azul a rojo, reaccionan con los metales liberando Hidrógeno, al tacto tiene sensación acuosa, y pierden estas propiedades cuando reaccionan con bases. Las bases también se denominan álcalis, nombre que proviene del griego alqili y que significa \“ceniza\”, porque estas eran la fuente de donde se obtenían los álcalis. Sus propiedades características incluyen un sabor amargo, viran el color del tornasol de rojo a azul, al tacto son resbalosas o jabonosas, y reaccionan con los metales formando hidróxidos, frecuentemente insolubles.</p><h3>La Escala de pH</h3><p>La escala de pH se obtuvo a partir del estudio del comportamiento ácido-base del agua. El agua se comporta como un no-electrolito, a pesar de que tiene la capacidad para actuar como ácido o base; cuando está pura, sus moléculas se disocian muy poco.</p><div class='text-center'>H<sub>2</sub>O <span class=\"glyphicon glyphicon-resize-horizontal\" aria-hidden=\"true\"></span> H<sup>+</sup> + OH<sup>-</sup></div>";
  resultado += "<h3>Cálculo de pH</h3><p>Para calcular el pH, es necesario conocer la concentración de protones de la solución. En el caso de las soluciones de ácido fuerte, cada molécula de ácido cede todos los protones ácidos que posee por lo tanto, la concentración molar de H<sup>+</sup> es igual a la Molaridad del ácido multiplicada por su valencia, lo que es igual a la Normalidad del ácido. Entonces, para calcular el pH de una solución de ácido fuerte, simplemente se sustituye [H<sup>+</sup>] con la Normalidad del ácido en la fórmula de definición del pH:</p><div class='text-center'>pH = - log N<sub>ÁCIDO</sub></div><p>Para calcular el pH de soluciones de bases fuertes, primero se calcula el pOH a partir de la Normalidad de la base, y después se convierte en pH, en la forma antes explicada.</p>";
  resultado += "<h3>¿Para qué sirve el PHmetro?</h3><p>Este instrumento tiene un sensor el cual es utilizado para medir el PH de una disolución. Quiere decir que junto con los electrodos, el voltímetro será sumergido en la sustancia haciendo que genere una corriente eléctrica, es así que la concentración de iones de hidrógenos presenta la solución en la corriente eléctrica. Esto se da por medio de la membrana de vidrio que tiene el pH metro la cual obtiene la sensibilidad y selectividad de las dos soluciones de concentración.</p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/phmetro.jpeg\"></div>";
  resultado += "<h4>Fundamento del phmetro</h4><p>Los phmetro miden el voltaje entre dos electrodos y muestran el resultado convertido en el valor de pH correspondiente. Comprende un amplificador electrónico simple y un par de electrodos, o alternativamente un electrodo combinado, y una pantalla calibrada en unidades de pH.</p><p>Usualmente tiene un electrodo de vidrio y un electrodo de referencia, o un electrodo de combinación. Los electrodos, o sondas, se insertan en la solución a ensayar y su diseño es la parte clave ya que son estructuras parecidas a varillas generalmente hechas de vidrio, con un bulbo que contiene el sensor en la parte inferior.</p><p>El electrodo de vidrio para medir el pH tiene un bulbo de vidrio específicamente diseñado para ser selectivo a la concentración de iones de hidrógeno. En la inmersión en la solución que se probará, los iones de hidrógeno en el intercambio de la solución de prueba para otros iones positivamente cargados en el bulbo de cristal, creando un potencial electroquímico a través del bulbo.</p><p>El amplificador electrónico detecta la diferencia de potencial eléctrico entre los dos electrodos generados en la medición y convierte la diferencia de potencial en unidades de pH. La magnitud del potencial electroquímico a través de la bombilla de vidrio está linealmente relacionada con el pH según la ecuación de Nernst. El electrodo de referencia es insensible al pH de la solución que se compone de un conductor metálico que se conecta a la pantalla. Este conductor está inmerso en una solución electrolítica, típicamente cloruro de potasio, que entra en contacto con la solución de ensayo a través de una membrana cerámica porosa.</p>";
  resultado += "<h4>Partes del Phmetro</h4><ol><li>Electrodo de pH.</li><li>Elemento de compensación de temperatura.</li><li>Medidor de pH o controlador.</li></ol>";
  resultado += "<h4>Tipos de phmetro</h4><p>Los phmetros van desde dispositivos simples y baratos como bolígrafos a complejos y costosos instrumentos de laboratorio con interfaces de ordenador y varias entradas para indicadores de temperatura y mediciones que deben introducirse para ajustarse a la variación en pH causada por la temperatura.</p><p>La salida puede ser digital o analógica, y los dispositivos pueden ser alimentados por batería o depender de la energía electrica. Algunas versiones utilizan telemetría para conectar los electrodos al dispositivo de visualización del voltímetro. Los phmetros y las puntas de prueba están disponibles para usos especiales, tales como ambientes complejos y microambientes biológicos.</p><p>También hay sensores de pH holográficos, que permiten la medición del pH colorimétrico, haciendo uso de la variedad de indicadores de pH que están disponibles. Además, hay phmetros disponibles basados en los electrodos de estado sólido.</p>";
  resultado += "<div class='text-center'><img width='50%' src=\"media\/imagen\/general\/phmetroanalogico.jpg\"></div>";
  resultado += "<h4>Calibración del phmetro</h4><p>El medidor de pH está calibrado con soluciones de pH conocido antes de cada uso, para asegurar la exactitud de la medición. Para medir el pH de una solución, los electrodos se utilizan con puntas de prueba que se sumergen en las soluciones de la prueba y se mantienen los iones de hidrógeno en la solución de la prueba para equilibrar con los iones en la superficie del bulbo en el electrodo de cristal. Este equilibrado proporciona una medición estable del pH.</p> <p>El Instituto alemán de estandarización publica da estándar para la medición del pH utilizando medidores de pH que requieren que el medidor de pH esté calibrado antes de cada medición.</p> <p>La calibración es necesaria porque el electrodo de vidrio no da potenciales electrostáticos reproducibles durante largos períodos de tiempo y se realiza con al menos dos soluciones estándar que abarcan el rango de valores de pH a medir. El medidor de pH tiene un control de calibración para ajustar la lectura del medidor igual al valor del primer estándar y un segundo control que se utiliza para ajustar la lectura del medidor al valor del segundo estandar. Un tercer control permite ajustar la temperatura.</p> <p>Las mediciones más precisas a veces requieren calibración a tres valores de pH diferentes. Algunos medidores de pH proporcionan una corrección de coeficiente de temperatura incorporada, con termopares de temperatura en las sondas de electrodos. El proceso de calibración correlaciona el voltaje producido por la sonda (aproximadamente 0,06 voltios por unidad de pH) con la escala de pH.</p> <p>Después de cada medición las sondas se enjuagan con agua destilada para eliminar cualquier rastro de la solución y absorber cualquier agua restante con un pañuelo ya que podría diluir la muestra y así alterar la lectura, y la punta se sumerge en una solución para su almacenaje.</p>";
  resultado += " <\/div>";
  resultado += "<\/div>";
  resultado += "<\/div>";

  document.getElementById('contenido').innerHTML = resultado;
}

function toTop() {
    window.scrollTo(0, 0)
}
