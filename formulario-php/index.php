<!DOCTYPE html>


<?php

include("./conexao.php");
$nome = isset($_POST["nome"]) ? $_POST["nome"] : null;
$email = isset($_POST["email"]) ? $_POST["email"]  : null;
$feedback = isset($_POST["feedback"]) ? $_POST["feedback"] : null;

mysqli_query($conexao, "INSERT INTO usuarios(nome, email, feedback) VALUES('{$nome}', '{$email}', '{$feedback}')");

?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário em PHP</title>
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <div class="contactForm">
        <form class="formulario" method="POST" id="formulario-php">
            <h3>Enviar Mensagem</h3>
            <div class="inputBox">
                <input type="text" id="nome" name="nome" placeholder="Nome">
            </div>
            <div class="inputBox">
                <input type="text" id="email" name="email" placeholder="E-mail">
            </div>
            <div class="inputBox">
                <textarea name="feedback" id="feedback" placeholder="Feedback"></textarea>
            </div>
            <div class="inputBox">
                <input type="submit" name='submit' value="Enviar">
            </div>
        </form>
    </div>
</body>


</html>