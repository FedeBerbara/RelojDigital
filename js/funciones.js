$(document).ready(function actualizarHora() {

  //Intervalo
  setInterval(actualizarHora, 1000);

  // Variables
  var dia = new Date().getDay();
  var mes = new Date().getMonth();
  var hora = new Date().getHours();
  var minutos = new Date().getMinutes();
  var segundos = new Date().getSeconds();
  var diaOTarde;

  // Nombre Meses y Dias
  var nombreDia;
  switch (dia) {
    case 0:
      nombreDia = "Domingo";
      break;
    case 1:
      nombreDia = "Lunes";
      break;
    case 2:
      nombreDia = "Martes";
      break;
    case 3:
      nombreDia = "Miercoles";
      break;
    case 4:
      nombreDia = "Jueves";
      break;
    case 5:
      nombreDia = "Viernes";
      break;
    case 6:
      nombreDia = "Sabado";
      break;
  }

  var nombreMes;
  switch (mes) {
    case 0:
      nombreMes = "Enero";
      break;
    case 1:
      nombreMes = "Febrero";
      break;
    case 2:
      nombreMes = "Marzo";
      break;
    case 3:
      nombreMes = "Abril";
      break;
    case 4:
      nombreMes = "Mayo";
      break;
    case 5:
      nombreMes = "Junio";
      break;
    case 6:
      nombreMes = "Julio";
      break;
    case 7:
      nombreMes = "Agosto";
      break;
    case 8:
      nombreMes = "Septiembre";
      break;
    case 9:
      nombreMes = "Octubre";
      break;
    case 10:
      nombreMes = "Noviembre";
      break;
    case 11:
      nombreMes = "Diciembre";
      break;
  }

  //Condicionales

  //Si la hora es menor a 10, le agrego un 0
  if (hora < 10) {
    hora = "0" + hora;
  }

  // Cambia de AM a PM o PM a AM
  if (hora > 12) {
    diaOTarde = "PM";
  } else {
    diaOTarde = "AM";
  }

  // Si el minuto es menor a 10, le agrego un 0
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  // Para que si el segundo es menor a 10 le agrego un 0
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  //Con los siguientes llamo a los ID del DOM
  $("#fecha").text(nombreDia +" " +new Date().getDate() +" de " +nombreMes +" del " +new Date().getFullYear());
  $("#horario").text(hora);
  $("#minutero").text(minutos);
  $("#segundero").text(segundos);
  $("#ampm").text(diaOTarde);
});

//Muestro hora en consola
console.log(new Date());
