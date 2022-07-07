# API Restaurante M4 
### Uma api desenvolvida para fins educativos que simula o sistema de um restaurante.

<h4>  Status da API Restaurante 🍝: Concluída  ✔️ </h4>

## Sumário
<!--ts-->
* [Sobre](#sobre)
* [Instalação](#instalacao)
* [Rotas](#rotas)
* [Usando as Rotas](#usandoRotas)
* [Tecnologias utilizadas](#tech)
* [Autores](#autores)
<!--te-->

<h2 id="sobre">Sobre</h2>
A API Restaurante M4 é uma API desenvolvida com fins educativos que visa simular o funcionamento de um restaurante, com 4 pilares básicos do dia-a-dia de um estabelecimento: O cliente, os garçons, os funcionários da cozinha e o cardápio.

<h2 id="instalacao">Instalação</h2>
Aqui você verá todas as dependências que precisam ser instaladas para o funcionamento da API, sendo elas:
<ul>
<li> Express
<li> SQLite3 
</ul>

<h3>Express</h3>
<p>O Express será o responsável pelo funcionamento das nossas rotas e, como consequência, da nossa API. Instalá-lo é super fácil:</p>
1. Primeiro, no seu terminal, você deve usar o npm init -y para criar um novo package.json <br>
2. Depois, no package.json, adicione, antes dos scripts, a linha "type": "module", que fará com que as importações e exportações possam ocorrer sem problemas. <br>
3. Agora, no terminal, escreva: npm install express, para instalar o Express.<br>
4. Feito, agora as instâncias do Express no arquivo já estão funcionando perfeitamente!

<h3>SQLite3</h3>
<p>Com o SQLite3, poderemos usar bancos de dados relacionais mais simples em nossa API e, com isso, usufruir das tabelas do arquivo database.db. É bem simples:</p>
1. No seu terminal, digite o comando: npm install sqlite3, para instalar o SQLite3.<br>
2. Pronto, o SQLite3 já está baixado e todas as instâncias do mesmo estão funcionando.

<h2 id='rotas'>Rotas</h2>
<p>Nossa API tem quatro entidades, sendo elas Cozinha, Cardápio, Garçom e Clientes, que podem ser acessados pelo caminho, digitando: localhost:3000/nomeDaEntidade. </p>
<img src="https://media.discordapp.net/attachments/490909335468245002/994638111424389261/unknown.png">
<p>Nessas entidades, podemos usar quatro rotas (operações que executamos na nossa API), sendo elas:</p>
<ul>
<li>GET
<li>POST 
<li>PUT 
<li>DELETE 
</ul>

<p>Você pode selecionar sua rota por aqui (A rota PATCH não está disponível):<p>
<img src='https://media.discordapp.net/attachments/490909335468245002/994639530839773215/unknown.png'>
