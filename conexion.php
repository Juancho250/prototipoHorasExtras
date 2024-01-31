<?php

$servidor="localhost";
$user="root";
$password="";
$basedatos="horas_extras";

$conexion=new mysqli($servidor, $user, $password, $basedatos);

if($conexion->connect_errno)//connect_errno verifica un error de conectividad
{
    echo "Nuestra conexion presenta fallas";
    exit();
}   

?>