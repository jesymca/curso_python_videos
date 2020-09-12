// VARIABLES GLOBALES
deposito = "LFI0432016600887"
nombre_curso = "MANUAL PYTHON 3 EN VIDEOS"
version = "1.0.0"
ano = "2020"
editor = "J.E SUMINISTROS Y MAS, C.A."
cabecera = "<div class = 'container'> <div class = 'row well well-sm'> <div class = 'hidden-xs col-sm-4 col-md-6 text-center'> <h2>Descripcion</h2> </div> <div class = 'hidden-xs col-sm-8 col-md-6 text-center'> <h2>Archivo</h2> </div> </div>"
mensajeactualizacion = "https://local.jesuministrosymas.com.ve/publi/mensajes/cursos/limpieza500/" // Mensajeria de verificacion de actualizacion
mensajeextra = "https://local.jesuministrosymas.com.ve/publi/mensajes/cursos/limpieza500/extra/" //Mensajeria contendio extra
linkextenciones = "http://bit.ly/extensionespdl" // Link de consulta de actualizaciones
logoje = "<img src='media/imagen/logo.png' width='180' height='30' alt='J.E SUMINISTROS Y MAS, C.A.' longdesc='LOGO J.E SUMINISTROS Y MAS, C.A.' id='logo' align='left'>"

lugar = "La República Bolivariana de Venezuela<br> Maracay - Estado Aragua"
desde = "Desde el Año 2016"
autordiseno = "José Herrera"
revision = "Ing. Elena Nuñez"
propiedadvideos = "" //Siempre debe agregarse al final un <br>
descripcion_contenido = "" // Siempre debe agregarse al final un <br>
linkjesymca = '<a class="clase6" href="http://www.jesuministrosymas.com.ve/" name="J.E SUMINISTROS Y MAS, C.A." target="_blank">J.E SUMINISTROS Y MAS, C.A.</a>'
licencia = "Esta obra está bajo una<br><a class = 'clase6'  rel = 'license' target = '_blank' href = 'https://creativecommons.org/licenses/by-sa/3.0/ve/'> Licencia de Creative Commons</a><br><a target = '_blank' rel = 'license' href = 'https://creativecommons.org/licenses/by-sa/3.0/ve/'> <img alt = 'Licencia de Creative Commons' style = 'border-width:0' src = 'media/imagen/88x31.png' /> </a><br>"

//REDES SOCIALES
twitter = '<a class="clase6" href = "https://twitter.com/JESYMCA" class = "twitter-follow-button" data-show-count = "false" data-lang = "es" target="_blank">Twitter @JESYMCA</a>'
telegram = '<a class="clase6" href = "https://t.me/jesuministrosymas_canal" target="_blank">Telegram  @JESUMINISTROSYMAS</a>'
whatsapp = '<a class="clase6" href = "http://bit.ly/WhatsApp_JE" target="_blank">WhatsApp @JESUMINISTROSYMAS</a>'

contacteno = [twitter, telegram, whatsapp]
contactenos = "<ul>"
contacteno.forEach(myLi)
contactenos += "</ul>"

function myLi(value) {
  contactenos += "<li>" + value + "</li>";
}


//DEFINIENDO VARIABLES GLOBALES
i = " <i title = 'Podra Imprimir' class='fas fa-print'></i>"
c = " <i title = 'Calculos Automatizados' class='fas fa-calculator'></i>"
a = " <i title = 'Contiene Archivos PDF' class='fas fa-file-pdf'></i>"
e = " <i title = 'Consulte Extensiones' class='fas fa-folder-plus'></i>"
v = " <i title = 'Contiene Videos' class='fas fa-file-video'></i>"
w = " <i title = 'Contiene Archivos Web' class='fab fa-html5'></i>"
z = " <i title = 'Contiene Archivos Comprimido' class='fas fa-file-archive'></i>"
l = " <i title = 'Contiene Link' class='fas fa-link'></i>"
h = " <i title = 'Cargar Inicio' class='fas fa-home'></i>"
r = " <i title = 'Cargar Inicio' class='fas fa-file-alt'></i>"


imprimirxs = "<p class='text-right'><a class='btn btn-danger btn-sm' href='javascript:window.print(); void 0;'>Imprimir " + i + "</a></p>"

br = "<br>"
olli = "<ol><li>"
liol = "</li></ol>"
olc = "</li></ol>"
ulli = "<ul><li>"
liul = "</li></ul>"
ulc = "</li></ul>"
eli = "<li>"
lic = "</li>"
lili = lic + eli;

ml = " Mililitros"
mls = " Mililitro"
li = " Litros"
lis = " Litro"
gr = " Gramos"
grs = " Gramo"
mg = " Miligramos"
mgs = " Miligramo"
kl = " Kilogramos"
kls = " Kilogramo"

tca = "<b>Para hacer "
tcc = " se requieren:</b>"
sup = 'Seleccione un Producto...'


// TEXTOS DE CONTENIDOS
texto_bienvenida = 'Le saludo y felicito por la adquisicion de este aplicativo, <b>PYTHON EN VIDEOS.</b>'

// TEXTO COMO USAR ESTE MANUAL
como_usar_primer = "El diseño fue pensado de manera intuitiva, para acceder a cada una de las secciones que se desea revisar solo debe hacer clic en la barra de seleccion y navegar dentro del area que prefiera. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
como_usar_segundo = "Se sugiere tomar apuntes de las descripciones del video, de esta manera siempre podra consultar sus notas en cualquier momento. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
como_usar_tercero = "Podra revisar los videos cuantas veces sea necesario y de esa manera podra reforzar todos los conocimientos adquirirdos. Siempre este tipo de cursos esta soportado por una gran cantidad de libros o revistas de soporte. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
    //componente[ab].n = "<b>" + componente[ab].n+"</b>"
    componente[ab].n = titulocompo;
  }
  return componente[ab].n;
}
//FUNCTION QUE COLOCARA SIGNO DE IGUAL A CADA COMPONENTE
function ponerigual() {
  for (ab in componente) {
    ncompo = componente[ab].n;
    igual = "<b> = </b>"
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
  document.getElementById('indicator').innerHTML = navigator.onLine ? "<br><div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Se ha Detectado un Funcionamiento Perfecto!</strong> Usted Se encuentra conectado/a a Internet.</div>" : "<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Usted se ha Desconectado de Internet!</strong>  hay elementos de este curso que se desactivaran, al recuperar la conexion a internet estaran disponibles de nuevo.</div>"
}

function updateFrame() {
  document.getElementById('frame').innerHTML = navigator.onLine ? '<iframe scrolling="no" src="../publicidad/indexon.html" name="publicidad" frameborder="0" width="100%" height="90"></iframe>' : '<iframe align="center" scrolling="no" src="../publicidad/indexoff.html" name="publicidad" frameborder="0" width="100%" height="90"></iframe>'
}

function updateLi() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? '<iframe marginheight="0" marginwidth="0" align="center" margin="0 auto" scrolling="no" src="./publicidad/indexon.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>' : '<iframe marginheight="0" marginwidth="0" align="center" scrolling="no" src="./publicidad/indexoff.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>'
}

function updateP() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? '<iframe marginheight="0" marginwidth="0" align="center" margin="0 auto" scrolling="no" src="http://bit.ly/publi_je" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>' : '<iframe marginheight="0" marginwidth="0" align="center" scrolling="no" src="./pag/publicidad/indexoff.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>'
  document.getElementById('mensaje').innerHTML = navigator.onLine ? "<iframe scrolling='no' src=" + mensajeactualizacion + " name='texto' width='100%' height='60' frameborder='0'></iframe>" : "<div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> COMO NO ESTA CONECTADO A INTERNET ESTE SISTEMA NO ESTA EN CAPACIDAD DE VERIFICAR SI POSEE LA ULTIMA VERSION DE ESTE CURSO, FAVOR CONECTESE A INTERNET Y DE MANERA AUTOMATICA SE EFECTUARA ESTA VERIFICACION.</div>"


}

function updateextra() {
  document.getElementById('mensajeextra').innerHTML = navigator.onLine ? "<iframe scrolling='no' src=" + mensajeextra + " name='texto' width='100%' height='60' frameborder='0'></iframe>" : "<div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign'aria-hidden='true'></span><span class='sr-only'>Error:</span> COMO NO ESTA CONECTADO A INTERNET ESTE SISTEMA NO ESTA EN CAPACIDAD DE VERIFICAR SI EXISTEN EXTENSIONES DISPONIBLES, FAVOR CONECTESE A INTERNET Y DE MANERA AUTOMATICA SE EFECTUARA ESTA VERIFICACION.</div>"
}

// PARA PRUEBAS
function onOff() {
  document.getElementById('rotator').innerHTML = navigator.onLine ? 'EN LINEA' : 'FUERA DE LINEA'
}
/* Case 1 */
window.addEventListener("online", function() {
  document.getElementById('test1').innerHTML = "online"
}, false);

window.addEventListener("offline", function() {
  document.getElementById('test1').innerHTML = "OFFLINE"
}, false);

ncompoa = ""
ncompo = ""


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
    "<a onclick='videos(20);' name='Videos_Seccion_20' title='Videos' href='#Videos_Seccion_20' class='dropdown-item'>20 Videos Anexos " + w + a + " </a>" +
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
    "</div></nav>"

  bienvenida();
  footer_site();

  document.getElementById('botonera').innerHTML = botonera, document.getElementById('foot').innerHTML = foot, document.getElementById('contenido').innerHTML = contenido;
  mensextra();

  $('li a').click(function(e) {
     //e.preventDefault();
     $('a').removeClass('active');
     $(this).addClass('active');

  });


}

function footer_site() {
  foot = "<div class='navbar navbar-default '><div class='container-fluid'> <div class='row'> <div class='col-sm-12 col-md-6'>"+licencia+" <strong>DEPOSITO LEGAL VENEZUELA: </strong> " + deposito + "</div> " +
    "<div class='col-sm-12 col-md-6'> <strong>Visitanos en</strong> "+linkjesymca+" <br> "+twitter+"<br> "+telegram+" <br> "+whatsapp

  document.getElementById('foot').innerHTML = foot;
}


function bienvenida() {
  contenido = "<div class = 'panel panel-info'> <div class = 'panel-heading'>  <h1 class = 'panel-title'><strong>Bienvenidos a este Aplicativo</strong></h1> </div> <div class = 'panel-body'> <div class = 'container-fluid'> <div> <!-- Nav tabs --> <ul class = 'nav nav-tabs' role = 'tablist'> <li role = 'presentation' class = 'nav-item'> <a class='nav-link active' href='#home' aria-controls = 'home' role = 'tab' data-toggle = 'tab'>Bienvenidos</a> </li> <li role = 'presentation'> <a class='nav-link' href='#profile' aria-controls = 'profile' role = 'tab' data-toggle = 'tab'>Uso de este Manual</a> </li> <li role = 'presentation'> <a class='nav-link' href = '#contacto' aria-controls = 'contacto' role = 'tab' data-toggle = 'tab'>Contactenos</a> </li> <li role = 'presentation'> <a class='nav-link' href = '#otros' aria-controls = 'otros' role = 'tab' data-toggle = 'tab'>Otros Cursos</a> </li> </ul> <!-- Tab panes --> <div class = 'tab-content'> <div role = 'tabpanel' class = 'tab-pane active' id = 'home'> <b> <h1>Bienvenido</h1> </b> <p>"+texto_bienvenida+"</p> </div> <div role = 'tabpanel' class = 'tab-pane' id = 'profile'> <h1>COMO USAR ESTE MANUAL</h1> <p>Es bastante practico e intuitivo, tome en cuenta que al ser un manual donde el 98% del codigo fuente esta del lado del cliente es posible que experimente ver textos con simbolos raros, normalmente donde se utilicen letras como Ñ o Palabras Acentuadas, de ser asi, normalmente lo primero que debe hacer es no alarmarse e ir a las configuraciones de su navegador web y cambiar su configuracion de codificacion a <kbd>charset=UTF-8</kbd>si por el contrario usted puede visualizar los caracteres sin errores, entonces solo le queda revisar todas las secciones disponibles en este producto.</p> <div class='accordion' id='accordionExample'>   <div class='card'>     <div class='card-header' id='headingOne'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>           PRIMER PASO         </button>       </h2>     </div>      <div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>       <div class='card-body'>"+como_usar_primer+"</div>     </div>   </div>   <div class='card'>     <div class='card-header' id='headingTwo'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left collapsed' type='button' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>           SEGUNDO PASO         </button>       </h2>     </div>     <div id='collapseTwo' class='collapse' aria-labelledby='headingTwo' data-parent='#accordionExample'>       <div class='card-body'>"+como_usar_segundo+"</div>     </div>   </div>   <div class='card'>     <div class='card-header' id='headingThree'>       <h2 class='mb-0'>         <button class='btn btn-link btn-block text-left collapsed' type='button' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>           TERCER PASO         </button>       </h2>     </div>     <div id='collapseThree' class='collapse' aria-labelledby='headingThree' data-parent='#accordionExample'>       <div class='card-body'>"+como_usar_tercero+" </div>     </div>   </div> </div>   </div> <div role = 'tabpanel' class = 'tab-pane' id = 'contacto'> <h1>Puede contactarnos en:</h1> <br> <p class = 'navbar-text pull-left'>"+contactenos+" </p> <br> <br> <br> <br> <br> <br> <br> <br> </div> <div role = 'tabpanel' class = 'tab-pane' id = 'otros'> <div id = 'carousel-example-generic' class = 'carousel slide' data-ride = 'carousel'> <!-- Indicators --> " +
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
    "...</div> <!-- Controls --> <a class = 'left carousel-control' href = '#carousel-example-generic' role = 'button' data-slide = 'prev'> <span class = 'glyphicon glyphicon-chevron-left' aria-hidden = 'true'> </span> <span class = 'sr-only'>Previous</span> </a> <a class = 'right carousel-control' href = '#carousel-example-generic' role = 'button' data-slide = 'next'> <span class = 'glyphicon glyphicon-chevron-right' aria-hidden = 'true'> </span> <span class = 'sr-only'>Next</span> </a> </div> </div> </div> </div> </div> </div> </div> <footer> <div class = 'navbar navbar-default '> <div class = 'container'> <p> <b>Nota</b>: El aprendizaje depende de usted, los humanos solo debemos tener un motivo para hacer las cosas, nada es imposible en esta vida, todo se logra cuando se quiere..!</p> </div> </div> </footer>"

  document.getElementById('contenido').innerHTML = contenido;
}


function videos(a) {

  let rut = 'media/videos/'
  let setup_py = '<pre class="line-numbers language-javascript"><code><br>import setuptools<br>with open("README.md", "r") as fh:<br>&nbsp;&nbsp;&nbsp;long_description = fh.read()<br><br>setuptools.setup(<br>&nbsp;&nbsp;&nbsp;name="example-pkg-YOUR-USERNAME-HERE", # Replace with your own username<br>&nbsp;&nbsp;&nbsp;version="0.0.1",<br>&nbsp;&nbsp;&nbsp;author="Example Author",<br>&nbsp;&nbsp;&nbsp;author_email="author@example.com",<br>&nbsp;&nbsp;&nbsp;description="A small example package",<br>&nbsp;&nbsp;&nbsp;long_description=long_description,<br>&nbsp;&nbsp;&nbsp;long_description_content_type="text/markdown",<br>&nbsp;&nbsp;&nbsp;url="https://github.com/pypa/sampleproject",<br>&nbsp;&nbsp;&nbsp;packages=setuptools.find_packages(),<br>&nbsp;&nbsp;&nbsp;classifiers=[<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Programming Language :: Python :: 3",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"License :: OSI Approved :: MIT License",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Operating System :: OS Independent",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;python_requires=\'>=3.6\',<br>)<br></code></pre>'

  let videos = [{
    nombre: "01 Bienvenida",
    ruta: rut + "01 Bienvenida/",
    archivo: "001 Presentacion personal.mp4",
    seccion: 1,
    contenido: "Video que contiene la bienvenida por parte del tutor, aca podras ver la presentacion del tutor quien te guiara a lo largo de este curso."
  }, {
    nombre: "02 Bienvenida",
    ruta: rut + "01 Bienvenida/",
    archivo: "002 Presentacion del curso.mp4",
    seccion: 1,
    contenido: "En este video podras ver el resumen de la presentacion del curso, podras ver lo que podras aprender haciendo este curso."
  }, {
    nombre: "03 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "003 Previa.mp4",
    seccion: 2,
    contenido: "Aca podras aprender a instalar el entorno de aprendizaje que seran:<ul> <li>Lenguaje de programacion PYTHON: <a class='clase6' href='https://www.python.org/download/releases/3.0/' target='_blank' title='Visitar PYTHON 3'>PYTHON 3</a></li><li>Project Jupyter Notebook: <a class='clase6' href='https://jupyter.org/' target='_blank' title='Visitar JUPYTER NOTEBOOK'>JUPYTER NOTEBOOK</a></li><li>Editor de texto Sublime Text: <a class='clase6' href='https://www.sublimetext.com/' target='_blank' title='Visitar SUBLIME TEXT'>SUBLIME TEXT</a></li></ul> este es el editor de codigo pero puedes utilizar el editor que prefieras y te haga sentir mas comodo/a algunos otros editores de codigo que puedes utilizar pueden ser: <a class='clase6' href='https://code.visualstudio.com/' target='_blank' title='Visitar VISUAL STUDIO CODE DE MICROSOFT'>VISUAL STUDIO CODE DE MICROSOFT</a> o tambien otro editor de codigo muy utilizado como lo es <a class='clase6' href='https://atom.io/' target='_blank' title='Visitar ATOM'>ATOM</a><br>Es posible que ya este familiarizado con los programas de instalacion de paquetes de software pero seas de los que le guste instalar sus programas por separado, en este caso me refiero a instalar Python, Jupyter notebook por separado sin necesidad de Instalar ANACONDA que se explica en el siguiente video."
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
    contenido: "En este video podras ver como instalar en un <a class='clase6' href='https://www.microsoft.com/es-es/windows' target='_blank' title='Visitar WINDOWS'>AMBIENTE WINDOWS</a> el software <a class='clase6' href='https://www.anaconda.com/products/individual' target='_blank' title='Visitar ANACONDA'>ANACONDA</a> puedes hacerlo directamente ingresando a su web de <a class='clase6' href='https://www.anaconda.com/products/individual' target='_blank' title='Visitar ANACONDA'>ANACONDA</a> tambien podras ver como poner en funcionamiento <a class='clase6' href='https://jupyter.org/' target='_blank' title='Visitar JUPYTER NOTEBOOK'>JUPYTER NOTEBOOK</a> y por ultimo ver cual es la version de <a class='clase6' href='https://www.python.org/download/releases/3.0/' target='_blank' title='Visitar PYTHON 3'>PYTHON 3</a> instalada en tu computador y verificar si todo esta funcionando bien."
  }, {
    nombre: "06 El entorno de aprendizaje",
    ruta: rut + "02 El entorno de aprendizaje/",
    archivo: "006 Preparando entorno en Linux.mp4",
    seccion: 2,
    contenido: "En este video podras ver como instalar en un <a class='clase6' href='https://www.linux.org/pages/download/' target='_blank' title='Visitar INSTALADORES LINUX'>AMBIENTE LINUX</a> el software <a class='clase6' href='https://www.anaconda.com/products/individual' target='_blank' title='Visitar ANACONDA'>ANACONDA</a> puedes hacerlo directamente ingresando a la web de <a class='clase6' href='https://www.anaconda.com/products/individual' target='_blank' title='Visitar ANACONDA'>ANACONDA</a> tambien podras ver como poner en funcionamiento <a class='clase6' href='https://jupyter.org/' target='_blank' title='Visitar JUPYTER NOTEBOOK'>JUPYTER NOTEBOOK</a> y por ultimo ver cual es la version de <a class='clase6' href='https://www.python.org/download/releases/3.0/' target='_blank' title='Visitar PYTHON 3'>PYTHON 3</a> instalada en tu computador y verificar si todo esta funcionando bien. En el caso de linux es posible que prefieras realizar la instalacion por separado de Python y de Jupyter Notebook, pero ya alli la eleccion que realices te permitira seleccionar la opcion con la que puedas trabajar de forma mas comoda."
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
    contenido: "En el caso de las expresiones es importante comprender que la negacion de la mentira es verdad y la negacion de la verdad es una mentira. <ul><li>Operador <kbd>not</kbd></li><li>Operador <kbd>and</kbd></li><li>Operador <kbd>or</kbd></li></ul>"
  }, {
    nombre: "25 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "022 Expresiones anidadas.mp4",
    seccion: 4,
    contenido: "Las expresiones anidadas se refieren a las combinaciones de expresiones que siguen una norma de precendencia para obtener siempre un resultado <kbd>true</kbd> o <kbd>false</kbd>"
  }, {
    nombre: "26 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "023 Operadores de asignacion.mp4",
    seccion: 4,
    contenido: "Los operadores de asignacion permiten asignar valores a variables:<ul><li>Operador de asignacion de variable:<br> <kbd>a = 0 # Asigna a la variable a = 0</kbd></li><li>Operador de suma en la asignacion:<br> <kbd>a += 4 # Asigna a la variable a la suma del valor 4 es decir quedaria a = 4</kbd></li><li>Operador de resta en la asignacion:<br> <kbd>a -= 1 # Asigna a la variable a la resta del valor 1 es decir quedaria a = 3</kbd></li><li>Operador de multiplicacion en la asignacion:<br> <kbd>a *= 2 # Asigna a la variable a la multiplicacion por el valor 2 es decir quedaria a = 6</kbd></li><li>Operador de divisio en la asignacion:<br> <kbd>a /= 2 # Asigna a la variable a la division por el valor 2 es decir quedaria a = 3</kbd></li><li>Operador de modulo en la asignacion:<br> <kbd>a %= 2 # Asigna a la variable la identificacion de que si el numero es o no par quedando a = 1.0</kbd></li><li>Operador de potencia en la asignacion:<br> <kbd>a **= 2 # Asigna a la variable la potencia de a elevado a la 2 quedando a = 1.0</kbd> <br>Si el valor de la variable a fuera uno diferente a 1 se ejecutaria la operacion matematica del valor de a elevado al numero de la potencia en asignacion.</li></ul>"
  }, {
    nombre: "27 Operadores y expresiones",
    ruta: rut + "04 Operadores y expresiones/",
    archivo: "024 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 4,
    contenido: "Aca se presentan paso a paso los ejercicios propuestos desde <a class='clase6' href='https://jupyter.org/' target='_blank' title='Visitar JUPYTER NOTEBOOK'>JUPYTER NOTEBOOK</a>"
  }, {
    //nombre: "28 Operadores y expresiones",
    //ruta: rut + "04 Operadores y expresiones/quizzes/",
    //archivo: "002 Quiz de la seccion.html",
    //seccion: 4,
    //contenido: ""
  }, {
    nombre: "29 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "025 Previa.mp4",
    seccion: 5,
    contenido: "Introduccion al orden de flujo que se debe tomar en cuenta durante la programacion en Python."
  }, {
    nombre: "30 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "026 Sentencia If.mp4",
    seccion: 5,
    contenido: "Controlando el flujo con la sentencia condicional <kbd>if</kbd> que es si se quiere la sentencia mas utilizada en la programacion y permite ejecutar instrucciones para procesar valores logicos."
  }, {
    nombre: "31 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "027 Sentencia While.mp4",
    seccion: 5,
    contenido: "La iteracion se refiere a utilizar una operacion varias veces, tambien se le llama en otros terminos un bucle. La sentencia <kbd>while</kbd> es capaz de repetir un bloque de codigo cuantas veces sea necesario hasta que el resultado sea <kbd>true</kbd> y logicamente dentro de los bloques de codigo se pueden combinar muchas sentencias para lograr obtener el resultado necesario."
  }, {
    nombre: "32 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "028 Sentencia For.mp4",
    seccion: 5,
    contenido: "For puede llegar a ser el mejor aliado dentro de la programacion en PYTHON y es porque la sintaxis de un bucle <kbd>for</kbd> es mas sencillo que la sintaxis de un bucle <kbd>while</kbd>"
  }, {
    nombre: "33 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "029 Post Analisis.mp4",
    seccion: 5,
    contenido: "En este video se efectua un resumen de los conocimientos adquirirdos hasta el momento, se repasan las sentencias y funciones que se han estudiado hasta el momento."
  }, {
    nombre: "34 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "030 Ejercicios optativos - Soluciones paso a paso 1 al 3.mp4",
    seccion: 5,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "35 Controlando el flujo",
    ruta: rut + "05 Controlando el flujo/",
    archivo: "031 Ejercicios optativos - Soluciones paso a paso 4 al 7.mp4",
    seccion: 5,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "36 Controlando el flujo",
    //ruta: rut + "05 Controlando el flujo/quizzes/",
    //archivo: "003 Quiz de la seccion.html",
    //seccion: 5,
    //contenido: ""
  }, {
    nombre: "37 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "032 Previa.mp4",
    seccion: 6,
    contenido: "Introduccion al uso de las colecciones disponibles en Python."
  }, {
    nombre: "38 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "033 Tuplas.mp4",
    seccion: 6,
    contenido: "Tuplas son usados por Python en algunas funciones para devolver resultados inmutables es decir que no pueden ser modificados. Las tuplas son como las listas pero estan entre parentesis ejemplo: <kbd>varieble = (1,2,3,'string',[a,b,c,d],-10)</kbd><br>Dichos datos pueden accederse con las tecnicas de indices ya estudiadas."
  }, {
    nombre: "39 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "034 Conjuntos.mp4",
    seccion: 6,
    contenido: "Los conjuntos son colecciones desordenadas de elementos, se usa para verificar datos de una lista, duplicados entre otros. Los conjuntos son caracterizados por ser declarados entre llaves ejemplo: <kbd>conjunto = {1,2,3,'A','B'}</kbd> Se caracterizan por no poseer repetido un mismo valor dentro del conjunto, si se agrega un valor ya existente a un conjunto esta accion no sucedera porque dicho valor ya existe en el conjunto. Los conjuntos pueden convertirse en lista para operar con ellas."
  }, {
    nombre: "40 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "035 Diccionarios.mp4",
    seccion: 6,
    contenido: "Los diccionarios son otro tipo de colecciones de Python que si se quiere son junto a las listas las colecciones que mas se utilizan en el lenguaje Python y basicamente pudieramos decir que es una especie de lista con definiciones y poseen la siguiente estrectura: <kbd>diccionario = {'casa':'house','carro':'car','perro':'dog'}</kbd>. Tienen la particularidad de ser modificables y se pueden acceder a ellos como si se tratase de indices pero con el valor que los identifica o con su palabra clave."
  }, {
    nombre: "41 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "036 Pilas y colas con listas.mp4",
    seccion: 6,
    contenido: "Python no implementa directamente las Pilas y Colas, basicamente lo que hacen es permitir agregar o retirar un elemento de dicha agrupacion o de dicha lista. En el caso de la simulacion en Python se utilizaram los comandos: <ul><li>Agregar valor al final de nuestra lista<kbd>.append()</kbd></li><li>Quitar ultimo elemento de nuestra lista<kbd>pop()</kbd></li></ul><br>En el caso de las colas su forma de funcionamiento en la vida real es diferente ya que al momento de agregar se agregan siempre al final de dicha lista, pero al momento de eliminar algun dato este dato seria el primero de dicha lista y para ello basicamente se logra al utilizar una coleccion ya existente dentro de Python y se ejecutaria mediante la declaracion inicial de la importacion de dicha coleccion <kbd>from collections import deque</kbd>"
  }, {
    nombre: "42 Colecciones de datos",
    ruta: rut + "06 Colecciones de datos/",
    archivo: "037 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 6,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "43 Colecciones de datos",
    //ruta: rut + "06 Colecciones de datos/quizzes/",
    //archivo: "004 Quiz de la seccion.html",
    //seccion: 6,
    //contenido: ""
  }, {
    nombre: "44 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "038 Previa.mp4",
    seccion: 7,
    contenido: "Breve introduccion sobre entradas y salidas de informacion en Python."
  }, {
    nombre: "45 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "039 Entradas.mp4",
    seccion: 7,
    contenido: "Las entradas en Python se hacen mediante la instruccion <kbd>input()</kbd> que como es de suponer perfectamente se puede combinar para la creacion de listas, indices, diccionarios y cualquier operacion necesaria en nuestra programacion."
  }, {
    nombre: "46 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "040 Scripts.mp4",
    seccion: 7,
    contenido: "Los script funcionan de forma tal que interactuan con un usuario por medio de la interfaces con la que sean destinados. En este video podras empezar a poner en practica los conocimientos adquiridos hasta el momento, de una forma muy basica podra empezar a diseñar su primer script."
  }, {
    nombre: "47 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "041 Salidas.mp4",
    seccion: 7,
    contenido: "Manejar la forma en que Python le da salida a los datos que se estan tratando es de gran importancia ya que va a permitir mostrar pocas o muchas variables, algunas largas y otras cortas, por ello es muy importante formatear la forma en que se van a mostrar los parametros."
  }, {
    nombre: "48 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "042 Ejercicios optativos - Soluciones paso a paso 1 y 2.mp4",
    seccion: 7,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "49 Entradas y salidas de datos",
    ruta: rut + "07 Entradas y salidas de datos/",
    archivo: "043 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 7,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "50 Entradas y salidas de datos",
    //ruta: rut + "07 Entradas y salidas de datos/quizzes/",
    //archivo: "005 Quiz de la seccion.html",
    //seccion: 7,
    //contenido: ""
  }, {
    nombre: "51 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "044 Previa.mp4",
    seccion: 8,
    contenido: "Las funciones es un fragmento de codigo que puede ser llamado una y otra vez utilizando su nombre y pasandole las variables con las que queremos que interactue para obtener un determinado resultado."
  }, {
    nombre: "52 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "045 Definicion de funciones.mp4",
    seccion: 8,
    contenido: "Una funcion posee la siguiente estructura:<br><kbd>def ejemplo():</kbd> Las funciones son programadas para que ejecuten muchas tareas de forma que cuando se necesite ejecutar esta misma tarea solo se haga el llamado desde otra parte del codigo. Es importante prestar atencion a lo que representa el ambito de la funcion. En Python al trabajar con variables fuera y dentro del mismo ambito de una funcion notaras que se crearan variables con el mismo nombre por ello es recomendable cambiar el nombre de las variables o evitar la declaracion de la misma variables varias veces en el codigo siempre que no sea necesario por la logica del script que estes diseñando."
  }, {
    nombre: "53 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "046 Retorno de valores.mp4",
    seccion: 8,
    contenido: "Las variables dentro de una funcion no tienen alcance fuera de ellas, pero si se retornan valores podemos solucionar esta situacion."
  }, {
    nombre: "54 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "047 Enviando valores.mp4",
    seccion: 8,
    contenido: "Las funciones normalmente interactuan con datos que son enviados a ella desde fuera de la funcion para que pueda ejecutarse, en este video de forma bastante sencilla se da un ejemplo de como se le envia a una funcion los datos que esta va a utilizar."
  }, {
    nombre: "55 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "048 Argumentos y parametros.mp4",
    seccion: 8,
    contenido: "Los argumentos dentro de las funciones son las encargadas de brindar control sobre la funcion, teniendo la posibilidad de no cometer errores al momento de ejecutar la asignacion de valores o de argumentos a dicha funcion."
  }, {
    nombre: "56 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "049 Argumentos por valor y referencia.mp4",
    seccion: 8,
    contenido: "Normalmente cuando se envian datos a una funcion esta se hacen por <b>valor</b>, es decir se crea una copia de los valores dentro de sus propias variables, pero las colecciones, listas, diccionarios o conjuntos esto no sucede, ya que la forma de pasar este tipo de datos se le llama por <b>referencia</b> y en este caso si se efectua alguna modificacion sobre este tipo de valores tambien se vera afectado el valor de la variable fuera de la funcion ya que en este caso la funcion hace referencia a este tipo de datos como si se tratase de un acceso directo."
  }, {
    nombre: "57 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "050 Argumentos indeterminados.mp4",
    seccion: 8,
    contenido: "Trabajar con numeros indeterminados dentro de las funciones en el caso de Python lo logra ya que implementa 2 formas distintas de gestionar valores indeterminados y se explican en este video."
  }, {
    nombre: "58 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "051 Funciones recursivas.mp4",
    seccion: 8,
    contenido: "La recursividad es cuando algo se repite una y otra vez de forma que un problema puede ser dividido en fragmentos mas pequeños de forma talq ue permita solucionar el confligto desde pequeñas partes del codigo y una funcion puede ser llamada por si misma dentro de ella, y la finalidad es ahorrar lineas de codigo al hacer un bucle."
  }, {
    nombre: "59 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "052 Funciones integradas.mp4",
    seccion: 8,
    contenido: "Dentro de Python existen funciones ya integradas que ayudan de alguna manera a convertir codigo obtenido sin necesidad de tener que crear este tipo de funciones, un ejemplo de ellas son:<ul><li>Obtener numero binario <kbd>bin()</kbd></li><li>Obtener Numero hexadecimal<kbd>hex()</kbd></li><li>Obtener numero absoluto <kbd>abs()</kbd></li><li>Obtener numero entero <kbd>int()</kbd></li><li>Funcion de redondeo <kbd>round()</kbd></li><li>Evaluar cadenas como numeros <kbd>eval()</kbd></li><li>Conocer la longitud de una cadena <kbd>len()</kbd></li><li>Ayuda de Python llama a la funcion <kbd>help()</kbd></li></ul>Esto es solo un ejemplo basico de de las funciones integradas usadas en Python, pero siempre puede acceder a la documentacion oficial y consultar toda la gama funciones integradas que implemanta Python 3<br> <a href='https://docs.python.org/es/3.8/' title='Visitar Documentacion oficial Python' class='clase6' target='_blank'>Documentacion Oficial de Referencia Python 3</a><br><a href='https://entrenamiento-python-basico.readthedocs.io/es/latest/leccion5/funciones_integradas.html' title='Visitar Documentacion oficial Python' class='clase6' target='_blank'>Documentacion No Oficial de Referencia Python 3</a> "
  }, {
    nombre: "60 Programacion de funciones",
    ruta: rut + "08 Programacion de funciones/",
    archivo: "053 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 8,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "61 Programacion de funciones",
    //ruta: rut + "08 Programacion de funciones/quizzes/",
    //archivo: "006 Quiz de la seccion.html",
    //seccion: 8,
    //contenido: ""
  }, {
    nombre: "62 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "054 Previa.mp4",
    seccion: 9,
    contenido: "Detectar errores, manejarlos y manejar tambien las excepciones."
  }, {
    nombre: "63 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "055 Errores.mp4",
    seccion: 9,
    contenido: "En Python hay varias formas de indicar que hay errores en el codigo que estamos escribiendo, Python dara que tipo de error es el que esta sucediendo y este puede ser errores de sintaxis, pero tambien erores del tipo semantico y en este video se generaran varios tipos de errores tipicos que ocurren cuando estamos escribiendo codigo en Python. La idea es aprender a identificar este tipo de errores para poder solucionar sobre la marcha."
  }, {
    nombre: "64 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "056 Excepciones.mp4",
    seccion: 9,
    contenido: "Las exepciones se manejan colocando el codigo dentro de un bloque<br> <pre class=\"line-numbers language-python\"><code>try:<br>&nbsp;&nbsp;&nbsp;TODO EL CODIGO QUE PUEDE TENER ERRORES<br>except:<br>&nbsp;&nbsp;&nbsp;print(\"Mensaje de error\")</code></pre>"
  }, {
    nombre: "65 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "057 Múltiples excepciones.mp4",
    seccion: 9,
    contenido: "Asi como se pueden hacer exepciones tambien es posible hacer exepciones multiples, siempre con la finalidad de tener modos de depurar nuestro codigo a medida que vamos escribiendolo."
  }, {
    nombre: "66 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "058 Invocacion de excepciones.mp4",
    seccion: 9,
    contenido: "Las exepciones nos ayudan a optimizar nuestros programas y a prevenir errores durante la ejecucion de nuestro codigo."
  }, {
    nombre: "67 Manejo de excepciones",
    ruta: rut + "09 Manejo de excepciones/",
    archivo: "059 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 9,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "68 Manejo de excepciones",
    //ruta: rut + "09 Manejo de excepciones/quizzes/",
    //archivo: "007 Quiz de la seccion.html",
    //seccion: 9,
    //contenido: ""
  }, {
    nombre: "69 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "060 Previa.mp4",
    seccion: 10,
    contenido: "Ya ahora con los conocimientos adquirirdos podemos poner en marcha la relacion directa con la programacion orientada a objetos."
  }, {
    nombre: "70 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "061 Programacion estructurada vs POO.mp4",
    seccion: 10,
    contenido: "En Python <b>TODO SON OBJETOS</b> en este video se explica este paradigma de la vieja forma de programacion y la nueva forma de programar usando objetos."
  }, {
    nombre: "71 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "062 Clases y objetos.mp4",
    seccion: 10,
    contenido: "Las clases se puede decir son los moldes para crear los objetos. Los objetos se crean mediante un proceso que se llama Instanciacion."
  }, {
    nombre: "72 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "063 Atributos y metodos de clase.mp4",
    seccion: 10,
    contenido: "Cada objeto posee atributos diferentes, esto es lo que diferencia cada objeto dentro de una misma clase y esto se logra por medio de la creacion de los metodos."
  }, {
    nombre: "73 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "064 Metodos especiales.mp4",
    seccion: 10,
    contenido: "Aparte de los metodos que podamos crear, existen en Python lo que se denominan <b>Metodos Especiales</b> alguno de ellos son analizados en este video y son los siguientes: <ul><li>Metodo Constructor <kbd>__init__()</kbd></li><li> Metodo Destructor <kbd>__del__()</kbd></li><li> Metodo String <kbd>__str__()</kbd></li><li> Metodo Length <kbd>__len__()</kbd></li></ul> "
  }, {
    nombre: "74 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "065 Objetos dentro de objetos.mp4",
    seccion: 10,
    contenido: "En Python es posible tener un objeto dentro de otro objeto, vale destacar que segun el metodo que utilicemos se podran simplificar procesos como agregar, editar, catalogar y tambien eliminar."
  }, {
    nombre: "75 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "066 Encapsulacion de atributos y metodos.mp4",
    seccion: 10,
    contenido: "En Python se puede simular un comportamiento parecido a la opcion de encapsular los atributos o metodos de un objeto, esto es necesario para que un atributo no tenga alcance fuera del objeto o funcion donde se esta ejecutando."
  }, {
    nombre: "76 Clases y objetos",
    ruta: rut + "10 Clases y objetos/",
    archivo: "067 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 10,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "77 Clases y objetos",
    //ruta: rut + "10 Clases y objetos/",
    //archivo: "008 Quiz de la sección.html",
    //seccion: 10,
    //contenido: ""

  }, {
    nombre: "78 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "068 Previa.mp4",
    seccion: 11,
    contenido: "Las herencias son una de las funcionalidades basicas en la programacion orientada a objetos. La capacidad de heredar atributos y metodos de otra clase, ademas de agregar nuevos atributos o metodos o modificar los existentes."
  }, {
    nombre: "79 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "069 Herencia.mp4",
    seccion: 11,
    contenido: "Las herencias son bastante complejas, pero si que tienen una utilidad aplicable en los diseños de programacion de tareas avanzadas y especificas en donde los objetos tengan simulitud en sus caracteristicas y permitira agrupar de forma bastante rapida datos con estructuras similares."
  }, {
    nombre: "80 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "070 Clases heredadas y polimorfismo.mp4",
    seccion: 11,
    contenido: "El polimorfismo puede diseñarse para conjugar una serie de objetos y darle un tratamiento particular a cada uno, este tipo de practicas permite tambien manipular de forma individual cada atributo para generar salidas que se adapten de forma apropiada a nuestra programacion."
  }, {
    nombre: "81 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "071 Herencia multiple.mp4",
    seccion: 11,
    contenido: "Las herencias multiples es una caracteristica soportada por Python y que no esta soportada por ningun otro lenguaje de programacion y hace referencia a que una subclase herede metodos y atrubutos de varias super clases a la vez."
  }, {
    nombre: "82 Herencia",
    ruta: rut + "11 Herencia/",
    archivo: "072 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 11,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    //nombre: "83 Herencia",
    //ruta: rut + "11 Herencia/quizzes/",
    //archivo: "009 Quiz de la seccion.html",
    //seccion: 11,
    //contenido: ""

  }, {
    nombre: "84 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "073 Previa.mp4",
    seccion: 12,
    contenido: "Vamos a hablar de las colecciones y aprender alguno de sus metodos y clases."
  }, {
    nombre: "85 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "074 Cadenas.mp4",
    seccion: 12,
    contenido: "Aca en este video haremos un repaso de los diferentes metodos que se utilizan con las cadenas:<ul><li>Todo Mayuscula: <kbd>.upper()</kbd></li> <li>Todo Minuscula: <kbd>.lower()</kbd></li> <li>Solo Primera letra Mayuscula: <kbd>.capitalize()</kbd></li> <li>La primera letra de cada palabra Mayuscula: <kbd>.title()</kbd></li> <li>Contar las veces que aparece una palabra en una cadena: <kbd>.count()</kbd></li> <li>Contar desde que indice se encuentra una palabra en una cadena: <kbd>.find()</kbd></li> <li>Contar el indice desde donde aparece la ultima palabra en una cadena: <kbd>.rfind()</kbd></li> <li>Verificar si una cadena son numeros: <kbd>.isdigit()</kbd></li> <li>Verificar si una cadena es alfanumerico: <kbd>.isalnum()</kbd></li> <li>Verificar si una cadena son solo alfabeticos: <kbd>.isalpha()</kbd></li> <li>Verificar si una cadena son letras minusculas: <kbd>.islower()</kbd></li> <li>Verificar si una cadena son letras mayusculas: <kbd>.isupper()</kbd></li> <li>Verificar si una cadena es un titulo: <kbd>.istitle()</kbd></li> <li>Verificar si una cadena esta compuesta de espacios: <kbd>.isspace()</kbd></li> <li>Verificar si una cadena empieza con una cadena en particular: <kbd>.startswith()</kbd></li> <li>Verificar si una cadena finaliza con una cadena en particular: <kbd>.endswith()</kbd></li> <li>Metodo para separar palabras de una cadena en una lista: <kbd>.split()</kbd></li> <li>Metodo para separar una cadena con algun caracter en particular: <kbd>.join()</kbd></li> <li>Metodo para borrar espacios o caracteres que esten de mas: <kbd>.strip()</kbd></li> <li>Metodo para reemplazar un caracter o toda una cadena por otra: <kbd>.replace()</kbd></li>   </ul>"
  }, {
    nombre: "86 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "075 Listas.mp4",
    seccion: 12,
    contenido: "Los metodos aplicables a las listas son muchos pero aca se explicaran las siguientes que pueden ser consideradas las mas importantes:<ul><li>Agregar a una lista: <kbd>.append()</kbd></li> <li>Limpiar contenido de la lista: <kbd>.clear()</kbd></li> <li>Unir varias listas: <kbd>.extend()</kbd></li> <li>Contar cadenas en una lista: <kbd><.count()/kbd></li> <li>Saber el indice de una cadena dentro de una lista: <kbd>.index()</kbd></li> <li>Agregar elemento en una posicion en particular<kbd>.insert(n,n)</kbd></li> <li>Sacar elementos de una lista: <kbd>.pop()</kbd></li> <li>Borrar un valor en particular de una lista: <kbd>.remove()</kbd></li><li>Revertir una lista: <kbd>.reverse()</kbd></li> <li>Unir caracteres de una lista: <kbd>.join()</kbd></li> <li>Ordenar elementos de una lista: <kbd>.sort()</kbd></li></ul>"
  }, {
    nombre: "87 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "076 Conjuntos.mp4",
    seccion: 12,
    contenido: "Metodos que le dan potencialidad a los conjuntos: <ul><li>Agregar un nuevo elemento: <kbd>.add()</kbd></li> <li>Descartar un elemento de un conjunto: <kbd>.discard()</kbd></li> <li>Copiar una coleccion: <kbd>.copy()</kbd></li> <li>Limpiar todos el conjunto: <kbd>.clear()</kbd></li> <li>Verificar si conjuntos no tiene nada que ver con otro: <kbd>.isdisjoint()</kbd></li> <li>Verificar si un conjunto es subconjunto de otro: <kbd>.issubset()</kbd></li> <li>Verificar si un conjunto es superconjunto de otro: <kbd>.issuperset()</kbd></li> <li>Unir conjuntos: <kbd>.union()</kbd></li> <li>Actualizar un conjunto: <kbd>.update()</kbd></li> <li>Solo mostrar las diferencias de los conjuntos: <kbd>.difference()</kbd></li> <li>Actualizar un conjunto con el resultado de la diferencia: <kbd>.difference_update()</kbd></li> <li>Mostrar la intercepcion entre los conjuntos: <kbd>.intersection()</kbd></li> <li>Actualizar un conjunto con el valor de la intercepcion de conjuntos: <kbd>.intersection_update</kbd></li> <li>Mostrar diferencias simetricas entre conjuntos: <kbd>.symmetric_difference()</kbd></li></ul>"
  }, {
    nombre: "88 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "077 Diccionarios.mp4",
    seccion: 12,
    contenido: "Los metodos que podemos utilizar con los diccionarios son los siguientes: <ul> <li>Evaluar o buscar claves: <kbd>.get()</kbd></li> <li>Buscar y dar resultado <b>true></b> o <b>false</b> <kbd>in</kbd></li> <li>Mostrar el diccionario de claves: <kbd>.keys()</kbd></li> <li>Mostrar el diccionario de valores: <kbd>.values()</kbd></li> <li>Mostrar Valores y Claves: <kbd>.items()</kbd></li> <li>Sustraer un dato del diccionario: <kbd>.pop()</kbd></li> <li>Vaciar un diccionario: <kbd>.clear()</kbd></li></ul>"
  }, {
    nombre: "89 Metodos de las colecciones",
    ruta: rut + "12 Metodos de las colecciones/",
    archivo: "078 Ejercicios optativos - Soluciones paso a paso.mp4",
    seccion: 12,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "90 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "079 Previa.mp4",
    seccion: 13,
    contenido: "Ahora aprenderemos con los modulos, para que se utilizan y como."
  }, {
    nombre: "91 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "080 Modulos.mp4",
    seccion: 13,
    contenido: "Crear un modulo en Python es tan sencillo como crear una funcion, en este video podras empezar a crear un modulo de saludo."
  }, {
    nombre: "92 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "081 Paquetes.mp4",
    seccion: 13,
    contenido: "Utilizar paquetes brindan ventajas de distribucion de nuestro codigo en diferentes asi como manejar paquetes y megapaquetes."
  }, {
    nombre: "93 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "082 Distribucion basica.mp4",
    seccion: 13,
    contenido: "Los paquetes distribuibles se hacen creando un archivo <kbd>setup.py</kbd> segun <a href='https://packaging.python.org/tutorials/packaging-projects/' target='_blank' class='clase6'>Documentacion Oficial Python</a> posee la siguiente estructura:<br>" + setup_py
  }, {
    nombre: "94 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "083 Modulos estandar.mp4",
    seccion: 13,
    contenido: "Existen diversos modulos standar, aca en este video se mencionaran y en los videos posteriores se analizaran uno a uno los modulos mas importantes."
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
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "100 Modulos y paquetes",
    ruta: rut + "13 Modulos y paquetes/",
    archivo: "089 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 13,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "101 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "092 Ficheros de texto.mp4",
    seccion: 14,
    contenido: "Python posee herramientas que permiten abrir ficheros y explorar su contenido. Es importante ejecitar las funciones de leer fichero  <kbd>.read()</kbd> guardar el contenido del fichero en una variable y luego cerrar el fichero <kbd>close()</kbd>"
  }, {
    nombre: "102 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "093 Manejo del puntero.mp4",
    seccion: 14,
    contenido: "En esta unidad aprenderemos como manipular el puntero dentro de un fichero que esta siendo manipulado por Python."
  }, {
    nombre: "103 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "094 Ficheros y objetos con Pickle.mp4",
    seccion: 14,
    contenido: "Pickle es una libreria que permite manipular ficheros y posee la versatilidad de permitir de forma sencilla crear archivos binarios y de recuperar tambien ficheros binarios y leer su contenido."
  }, {
    nombre: "104 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "095 Catalogo de peliculas persistente.mp4",
    seccion: 14,
    contenido: "Aca se trabajara con un ejemplo practico de manejo de datos de un catalogo relacionado con un ejemplo de la vida real."
  }, {
    nombre: "105 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "096 Ejercicios optativos - Soluciones paso a paso 1 y 2.mp4",
    seccion: 14,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos."
  }, {
    nombre: "106 Manejo de ficheros",
    ruta: rut + "14 Manejo de ficheros/",
    archivo: "097 Ejercicios optativos - Soluciones paso a paso 3.mp4",
    seccion: 14,
    contenido: "En esta seccion se podran ver el analisis de las respuestas de los ejercicios propuestos"
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
    ruta: rut + "18 Documentacion y pruebas/",
    archivo: "131 Docstrings.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "141 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas/",
    archivo: "132 Pydoc.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "142 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas/",
    archivo: "133 Doctest I.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "143 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas/",
    archivo: "134 Doctest II.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "144 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas/",
    archivo: "135 Unittest I.mp4",
    seccion: 18,
    contenido: ""
  }, {
    nombre: "145 Documentacion y pruebas",
    ruta: rut + "18 Documentacion y pruebas/",
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
    contenido: 'Vea una breve Historia sobre Python'
  }, {
    nombre: "149 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "140 El Zen de Python.html",
    seccion: 20,
    contenido: "Informacion sobre Zen de Python"
  }, {
    nombre: "150 Anexos",
    ruta: rut + "20 Anexos/",
    archivo: "141 pep8es.pdf",
    seccion: 20,
    contenido: "Guía de estilo para el código Python – PEP 8 en Español"
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
    contenido: "Visite Nuestra web para ver mas contenido"
  }, {
    nombre: "152 Bonus",
    ruta: rut + "21 Bonus/",
    archivo: "144 Python 3 para impacientes.html",
    seccion: 21,
    contenido: "Aca podra acceder a un curso de acceso rapido."
  }, {
    nombre: "152 Bonus",
    ruta: rut + "21 Bonus/",
    archivo: "/",
    seccion: 21,
    contenido: "Visite Nuestra web para ver mas contenido"

  }];
  let selectedVideo = videos.filter((item) => (
    item.seccion === a
  ));

  let resultado = "<h1>Prueba de Lista de Videos</h1>"
  //resultado += '<div class="position-fixed">Columna izquierda que se mueve con el scroll...</div>'
  //resultado += '<div class="alert alert-primary" role="alert">'
  resultado += "<ol>"
  let nodoDOM = selectedVideo.map((video) => {

    let nombre = video.nombre;
    let ruta = video.ruta;
    let archivo = video.archivo;
    let seccion = video.seccion;
    let contenido = video.contenido;

    let solonombre = nombre.substr(3);
    narchi = archivo.substring(0, archivo.lastIndexOf("."));
    narchi = narchi.substr(4);
    solonombre = solonombre + " <b>" + narchi + "</b>"

    nomb = archivo.lastIndexOf(".");
    largo = archivo.length;
    arch = archivo.substring(largo, nomb);

    if (arch === '.mp4') {
      previo = '<video id="'+narchi+'" controls width="70%" preload="metadata" poster="media/imagen/postervideos.png">  <source src="' + ruta + archivo + '" type="video/mp4"></video>'
      boton = "Ver Video en otra ventana" + v;

    } else if (arch === '.html') {
      previo = "<a title='Ver Contenido HTML " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img class="clase2" alt="img0" src="media/imagen/html.png"/>' + "</a>"
      boton = "Ver contenido Web" + w;

    } else if (arch === '.zip') {
      previo = "<a title='Descargar " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img width="30%" class="clase2" alt="img0" src="media/imagen/zip.png"/>' + "</a>"
      boton = "Descargar archivo comprimido" + z;

    } else if (arch === '.pdf') {
      previo = "<a title='Descargar " + archivo + "'  href='" + ruta + archivo + "' target = '_blank'>" + '<img width="30%" class="clase2" alt="img0" src="media/imagen/pdf.png"/>' + "</a>"
      boton = "Ver archivo PDF" + z;

    } else if (arch === '') {
      previo = ""
      boton = ""

    }
    else if (archivo === "/") {
      previo = ""
      boton = "Visitar directorio"

    }




    let listaA = solonombre.toUpperCase();
    let listaB = "<a title='Visitar " + nombre + "'  href='" + ruta + archivo + "' target = '_blank' class='btn btn-primary'>" + boton + "</a>"
    // Genera el contenido que va a html contenido
    // resultado += "<li>" + listaA + "<br>" + listaB + "<br>" + archivo + "<br><br></li>"


    resultado += ' <div class="card"> <div class="card-header"><h4 class="card-header"><li>    ' + listaA + '  </li></h4> </div> <div class="card-body">    <h4 class="card-title">' + nombre + '</h4> <h5>' + narchi + '</h5>   <p class="card-text text-center">' + previo + '</p> <p class="card-text">' + contenido + '</p>' + listaB + '  </div></div>'

    return resultado;
  });
  resultado += "</ol>"
  //resultado += "<div>"


  nodoDOM.map((item) => (document.getElementById('contenido').innerHTML = item));
  //document.getElementById('contenido').innerHTML = nodoDOM;

  //       document.getElementById('contenido').innerHTML = resultado;

window.scrollTo(0, 0);

$('video').off('play').on('play', function() {
    var dd = this.id
    $('video').each(function( index ) {
        if(dd != this.id){
            this.pause();
            this.currentTime = 0;
        }
    });
});

$('li a').click(function(e) {
   //e.preventDefault();
   $('a').removeClass('active');
   $(this).addClass('active');

});



}


function creditos() {
  resultado = ""
  resultado += "<div class=\"panel panel-info\">"
  resultado += "<div class=\"panel-heading\">"
  resultado += "<h3 class=\"panel-title\"><b>Creditos, Web y Libros Consultados</b><\/h3>"
  resultado += "<\/div>"
  resultado += "<div class=\"panel-body\">"
  resultado += imprimirxs;

  resultado += "<h2 class=\"western\">Libros Consultados<\/h2>"
  resultado += "<ul>"
  resultado += "<li>"
  resultado += "<p>Proyecto “Apoyo al Fortalecimiento de las Capacidades en Manejo Ambiental en las Américas”, (2007) Informe General, DDS.<\/p>"
  resultado += "<\/li>"
  resultado += "<li>"
  resultado += "<p>Ullmann, F. (1931). Enciclopedia de química industrial.<\/p>"
  resultado += "<\/li>"
  resultado += "<li>"
  resultado += "<p>Salager, J. L., & Fernández, A. (2004). Surfactantes. Cuaderno FIRP, 300, 07-13.<\/p>"
  resultado += "<\/li>"
  resultado += "<li>"
  resultado += "<p>García, G., & Cruz, L. (2011). Elaboración de cuatro tipos de jabones utilizando aceites vegetales residuales de palma africana (Elaeis guineensis) mediante el método de saponificación. Graduated (Doctoral dissertation, Thesis. Universidad"
  resultado += " Estatal de Bolívar. Facultad de Ciencias Agropecuarias. Recursos Naturales y del Ambiente).<\/p>"
  resultado += "<\/li>"
  resultado += "<li>"
  resultado += "<p>Yubaille, M., Proaño, F., & Peñafiel, S. (2013). Evaluación de tres métodos de saponificación de grasas destinadas a la alimentacion de vacas lecheras (Doctoral dissertation, Tesis Ingenieria en Industrias Pecuarias. Riobamba: Escuela Superior"
  resultado += " Politécnica del Chimborazo, Facultad de Ciencias Pecuarias).<\/p>"
  resultado += "<\/li>"
  resultado += "<li>"
  resultado += "<p>Moraga, L., Molina, G., Agüero, H., & Zurita, L. (1987). Empleo del Lauril Sulfato de Sodio para el diagnostico de mastitis subclínica. XII Reunión Anual Sociedad Chilena de Producción Animal. Santiago, CL, 46.<\/p>"
  resultado += "<\/li>"
  resultado += ""
  resultado += "<\/ul>"




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
    nombre: "PYTHON 3",
    direccion: "https://www.python.org/download/releases/3.0/",
    fecha: "06/09/2020"
  }, {
    nombre: "Jupyter Notebook",
    direccion: "https://jupyter.org/",
    fecha: "06/09/2020"
  }, {
    nombre: "Sublime Text",
    direccion: "https://www.sublimetext.com/",
    fecha: "06/09/2020"
  }, {
    nombre: "Visual Studio Code",
    direccion: "https://code.visualstudio.com/",
    fecha: "06/09/2020"
  }, {
    nombre: "Atom",
    direccion: "https://atom.io/",
    fecha: "06/09/2020"
  }, {
    nombre: "Anaconda",
    direccion: "https://www.anaconda.com/products/individual",
    fecha: "06/09/2020"
  }, {
    nombre: "Repositorio en GitHub",
    direccion: "https://github.com/jesymca/curso_python_videos/",
    fecha: "06/09/2020"
  }, {
    nombre: "Lista de Instaladores Sistemas Operativos basados en LINUX",
    direccion: "https://www.linux.org/pages/download/",
    fecha: "06/09/2020"
  }, {
    nombre: "Microsoft Windows",
    direccion: "https://www.microsoft.com/es-es/windows",
    fecha: "06/09/2020"
  }, {
    nombre: "Documentacion Oficial de Referencia Python 3",
    direccion: "https://docs.python.org/es/3.8/",
    fecha: "09/09/2020"
  }, {
    nombre: "Documentacion No Oficial de Referencia Python 3",
    direccion: "Documentacion No Oficial de Referencia Python 3",
    fecha: "09/09/2020"
  }, {
    nombre: "Microtutorial sobre material Python",
    direccion: "https://argentinaenpython.com/material-de-difusion/microtutorial_argentina-en-python.pdf",
    fecha: "11/09/2020"
  }, {
    nombre: "Python 3 para impacientes",
    direccion: "https://python-para-impacientes.blogspot.com/",
    fecha: "11/09/2020"
  }, {
    nombre: "",
    direccion: "",
    fecha: ""
  }, {
    nombre: "",
    direccion: "",
    fecha: ""
  }, {
    nombre: "",
    direccion: "",
    fecha: ""
  }, {
    nombre: "",
    direccion: "",
    fecha: ""
  }, {
    nombre: "Stackoverflow",
    direccion: "http://es.stackoverflow.com",
    fecha: "22-08-2020"
  }];
  // Ordena de manera alfabetica
  webvisitadas = webvisitadas.filter(item => item.nombre).sort(function(a, b)
   {
    if (a.nombre > b.nombre) return 1;
    if (a.nombre < b.nombre) return -1;
    return 0;
  });
  // Genera los link y lista de webvisitadas
  disponible = "<b> Disponible en: </b>"
  fecha_consulta = "<b> Fecha de Consulta: </b>"
  resultado += "<h2 class='western'>Web Visitadas</h2>"
  resultado += "<ul>"

  for (key in webvisitadas) {
    var nombre = webvisitadas[key];
    var direccion = webvisitadas[key];
    var fecha = webvisitadas[key];
    var listaPalabra = nombre.nombre;
    var listaParrafo = direccion.direccion;
    var listaFecha = fecha.fecha;
    var listaA = listaPalabra.toUpperCase();
    var listaB = "<a title='Visitar " + listaPalabra + "' class='clase6' href='" + listaParrafo + "' target = '_blank'>" + listaParrafo + "</a>"
    // Genera el contenido que va a html contenido
    resultado += "<li><b>" + listaA + "</b><br>" + disponible + listaB + "<br>" + fecha_consulta + listaFecha + "<br><br></li>"
  }

  resultado += "</ul>"
  resultado += "<a title=\"Visitar Creative Commons\" target=\"_blank\" rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/ve\/\">"
  resultado += "<img alt=\"Licencia de Creative Commons\" style=\"border-width:0\" src=\"media\/imagen\/88x31.png\"><\/a>"
  resultado += "<br\/>Este obra esta bajo una <a title=\"Visitar Licencia Creative Commons\" class=\"clase6\" rel=\"license\" target=\"_blank\" href=\"http:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/ve\/\"> licencia de Creative Commons<\/a>"
  resultado += "<br>"
  resultado += "<p align=\"justify\">Usted puede vender, distribuir, re-distribuir, cambiar, adaptar, modificar este producto, pero siempre debe indicar de quien es el diseño original y cuales fueron las modificaciones efectuadas, si desean que se incluya alguna mejora pueden"
  resultado += "comunicarse con J.E Suministros y Mas, C.A. en"
  resultado += '<a class="clase6" href="http://www.jesuministrosymas.com.ve/" name="Ingresar a la web de J.E SUMINISTROS Y MAS, C.A." target="_blank">www.jesuministrosymas.com.ve</a></p><br>'
  resultado += '<div class="alert alert-warning">'
  resultado += "<b>Diseñado y Producido en:</b><br> "+lugar+"<br> "+desde+"<br>Version Actual " + version + " Del año " + ano + "<br>Diseño Bajo Tecnologías Libres.<br> Autor y Diseño: "+autordiseno+"<br> Revisión: "+revision+"<br> "+propiedadvideos+descripcion_contenido+"Esta fue una Producción de" + linkjesymca;
  resultado += "<\/div>"
  resultado += "<h2>PARA CITAR ESTE MANUAL:<\/h2>"
  resultado += ""
  resultado += ""
  resultado += "<div>"
  resultado += "<!-- Nav tabs -->"
  resultado += '<ul class="nav nav-tabs" role="tablist">'
  resultado += '<li class="nav-item"><a class="nav-link active" href="#apa" aria-controls="apae" role="tab" data-toggle="tab">NORMA APA</a></li>'
  resultado += '<li class="nav-item" role="presentation"><a class="nav-link" href="#iso0690" aria-controls="iso0690" role="tab" data-toggle="tab">NORMA ISO0690</a></li>'
  resultado += '<li class="nav-item" role="presentation"><a class="nav-link" href="#mla" aria-controls="mla" role="tab" data-toggle="tab">NORMA MLA</a></li>'
  resultado += '</ul>'
  resultado += '<!-- Tab panes -->'
  resultado += '<div class="tab-content">'
  resultado += '<div role="tabpanel" class="tab-pane fade show active" id="apa">'
  resultado += '<h3>NORMA APA</h3>'
  resultado += 'Herrera Vargas J. M. (' + ano + '). '+nombre_curso+' VERSION ' + version + ' EDICIONES '+editor+'.'
  resultado += '</div>'
  resultado += '<div role="tabpanel" class="tab-pane fade" id="iso0690">'
  resultado += '<h3>NORMA ISO690</h3>'
  resultado += 'HERRERA VARGAS, Jose Medardo; '+editor+', '+nombre_curso+' VERSION  ' + version + ' . ' + ano + '.'
  resultado += '</div>'
  resultado += '<div role="tabpanel" class="tab-pane fade" id="mla">'
  resultado += '<h3>NORMA MLA</h3>'
  resultado += 'Herrera Vargas, Jose Medardo. "'+nombre_curso+' VERSION ' + version + '" EDICIONES '+editor+' (' + ano + ').'
  resultado += '</div>'
  resultado += '</div>'
  resultado += '</div>'
  resultado += '</div>'

  document.getElementById('contenido').innerHTML = resultado;
}

function glosario() {

  var glosario = [{
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "",
    parrafo: ""
  }, {
    palabra: "Acido Benzoico",
    parrafo: "Su nombre comercial y científico es el mismo ingrediente activo en la fabricación de la crema para alisar el cabello."
  }];

  // Ordena de manera alfabetica
  glosario = glosario.filter(item => item.palabra).sort(function(a, b) {
    if (a.palabra > b.palabra) return 1
    if (a.palabra < b.palabra) return -1
    return 0
  });

  // Genera los link y lista de glosario
  definiciones = ""
  definiciones += '<div class="panel panel-info"><div class="panel-heading"><h3 class=\"panel-title\"><b>Glosario de Terminos</b></h3></div><div class="panel-body">'
  definiciones += imprimirxs;
  definiciones += "<dl>"
  for (var i = 0; i < glosario.length; i++) {
    var palabra = glosario[i];
    var parrafo = glosario[i];
    var listaPalabra = palabra.palabra;
    var listaParrafo = parrafo.parrafo;
    var listaA = listaPalabra.toUpperCase();
    var listaB = listaParrafo;
    // Genera el contenido que va a html contenido
    definiciones += "<dt>" + listaA + "</dt><dd>" + listaB + "</dd>"

  }
  definiciones += "</dl></div></div>"
  document.getElementById('contenido').innerHTML = definiciones;
}


function extra() {

  var di = "extra/media/"
  var dib = "extra/"

  function is_img(file) {
    act = " <span data-toggle = 'tooltip' data-placement = 'bottom' title = 'Contiene Links' class = 'glyphicon glyphicon-file glyphicon-refresh' aria-hidden = 'true'> </span>"
    acte = " <span data-toggle = 'tooltip' data-placement = 'bottom' title = 'Contiene Links' class = 'glyphicon glyphicon-file glyphicon-warning-sign' aria-hidden = 'true'> </span>"

    var ifrmad = ""
    ifrmad += "<p class='text-right'>" +
      "<button autocomplete='off' id='myButton' class='btn btn-danger btn-sm' " +
      "title = 'Recargar para reconocer Extensiones Instaladas' onclick = 'recarga();' href='#Extensiones'>" +
      "Recargar Sistema " + act + "</button>"
    ifrmad += "</p>"
    ifrmad += "<div class='alert alert-danger' role='alert'> <strong>" + acte + " Lo Sentimos!</strong> Usted no posee instalado Extensiones de este Curso <a href='" + linkextenciones + "' target='_blank' class='btn btn-info' title='Consulte extensiones disponibles'><b>CONSULTAR EXTENSIONES DISPONIBLES AQUI</b> </a> </div>"

    ifrmad += '<div class="panel panel-info">'
    ifrmad += '<div class="panel-heading"><b>Como Instalar Extensiones</b></div>'
    ifrmad += '<div class="panel-body">'
    ifrmad += '<h1>Como Instalar una Extension</h1>'
    ifrmad += '<p>El proceso de instalacion es simple, y se explica y detalla paso a paso en estos 5 sencillos pasos:</p>'
    ifrmad += '<ol><li>Es sencillo, el proceso consiste en adquirir el paquete correspondiente a la extension, este archivo lo recibira en formato .7z que es el formato de compresion standar con el que trabajamos en J.E Suministros y Mas, C.A.</li>'
    ifrmad += '<p class="text-center">'
    ifrmad += '<img class="img-thumbnail" src="media/imagen/portadas/extra/comprimido.png" alt="Archivo Comprimido">'
    ifrmad += '</p>'
    ifrmad += '<li>Debe descomprimir el archivo de nombre <strong>extra</strong> descargado.</li>'
    ifrmad += '<p class="text-center">'
    ifrmad += '<img class="img-thumbnail" src="media/imagen/portadas/extra/extraer.png" alt="Archivo Comprimido">'
    ifrmad += '</p>'
    ifrmad += '<li>Usted obtendra una carpeta de nombre <strong>extra</strong> </li>'
    ifrmad += '<p class="text-center">'
    ifrmad += '<img class="img-thumbnail" src="media/imagen/portadas/extra/carpetaextraida.png" alt="Archivo Comprimido">'
    ifrmad += '</p>'
    ifrmad += '<li>Todos los archivos contenidos en la carpeta deben seleccionarlo y copiarlo</li>'
    ifrmad += '<p class="text-center">'
    ifrmad += '<img class="img-thumbnail" src="media/imagen/portadas/extra/copiarextra.png" alt="Archivo Comprimido">'
    ifrmad += '</p>'
    ifrmad += '<li>Tome en cuenta que su curso posee 3 carpetas que son: <strong>extra</strong>, <strong>media</strong>  y <strong>pag</strong>, y un archivo <strong>index.html</strong> que es el que le permite acceder a su curso. Los archivos copiados en el paso anterior deben ser pegados dentro de la carpeta <strong>extra</strong> de su curso, ver imagen de referencia</li>'
    ifrmad += '<p class="text-center">'
    ifrmad += '<img class="img-thumbnail" src="media/imagen/portadas/extra/carpetaextra.png" alt="Archivo Comprimido">'
    ifrmad += '</p>'
    ifrmad += '</div>'
    ifrmad += '</div>'

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

  var x = ""
  var x = document.getElementsByTagName("body")[0];
  x.style.backgroundColor = "red"
  document.location.reload();
  // return extra();
  //var x += document.location.reload();

}

function popove() {
  $('[data-toggle="popover"]').popover({
    placement: 'auto right',
    trigger: 'hover',
    html: true
  });
}
