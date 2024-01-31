<?php

if(isset($_POST['guardar']))
{
  //$_POST['name'], reemplaza
  include('conexion.php');
  $nombre=$_POST['nombre'];
  $cedula=$_POST['cedula'];
  $edad=$_POST['edad'];
  $sexo=$_POST['sexo'];
  $fecha=$_POST['fecha'];
  $actividad=$_POST['actividad'];
  $hora_inicio=$_POST['hora_inicio'];
  $hora_final=$_POST['hora_final'];
  $tipo_hora_extra=$_POST['tipo_hora_extra'];
  $firma=$_POST['firma'];

  //Consulta a la base de datos para insertar los datos
  mysqli_query($conexion,"INSERT INTO datos_horas_extras (nombre,cedula,edad,sexo,fecha,actividad,hora_inicio,hora_final,tipo_hora_extra,firma) VALUES ('$nombre','$cedula','$edad','$sexo','$fecha','$actividad','$hora_inicio','$hora_final','$tipo_hora_extra','$firma')");

  echo "Datos guardados correctamente";
}  

?>