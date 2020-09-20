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
    document.getElementById('rotator').innerHTML = navigator.onLine ? '<iframe marginheight="0" marginwidth="0" align="center" margin="0 auto" scrolling="no" src="https://goo.gl/rpjfB6" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>' : '<iframe marginheight="0" marginwidth="0" align="center" scrolling="no" src="./pag/publicidad/indexoff.html" name="publicidad" frameborder="0" width="700" height="95" style="border: 0px; vertical-align: bottom;"></iframe>',
        document.getElementById('mensaje').innerHTML = navigator.onLine ? '<iframe scrolling="no" src="https://local.jesuministrosymas.com.ve/publi/mensajes/cursos/introduccionhacking/" name="texto" width="100%" height="60" frameborder="0"></iframe>' : "<div class='alert alert-warning' role='alert'><span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span><span class='sr-only'>Error:</span> COMO NO ESTA CONECTADO A INTERNET ESTE SISTEMA NO ESTA EN CAPACIDAD DE VERIFICAR SI POSEE LA ULTIMA VERSION DE ESTE CURSO, FAVOR CONECTESE A INTERNET Y DE MANERA AUTOMATICA SE EFECTUARA ESTA VERIFICACION.</div>"

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
