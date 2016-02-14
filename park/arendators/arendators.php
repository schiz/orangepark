<!DOCTYPE html>
<html>
<head>
	<title>Arendators</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/arendators.css">
	<script type="text/javascript" src="js/jquery-1-11-1.js"></script>
	<script type="text/javascript" src="js/arendators.js"></script>
</head>
<body>
	<div class="main clearfix">
		<?php include("../parts/_header.html"); ?>
		<div class="content">
			<div class="top-content">
	        	<ul class="content-menu">
	        		<li><a href="#">Главная</a></li>
	        		<li>Арендаторам</li>
	        	</ul>
		      	<div class="content-title">
		        	<h1>Арендаторам</h1>
		      	</div>  
		      	<div class="desc-top-content">
		      		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		      	</div>      
	      </div>
	      <div class="download-presentation">
	      	<img src="img/download-presentation.png" alt="">
	      	<button>Скачать презентацию ТЦ ОРАНЖПАРК</button>
	      </div>
		</div> <!-- END CONTENT-->
		<div class="block-rent">
			<div class="title-rent content">
				Заявка на аренду
				<img src="img/application-rent.png" alt="">
			</div>
		</div>
		<div class="block-form">
			<div class="content">
				<form>
					<div>
						<div class="left-inputs">
							<input type="text" name="title" placeholder="Название компании *">
							<input type="text" name="address" placeholder="Адрес">
							<input type="email" name="e-mail" placeholder="E-mail *">
							<input type="tel" name="tel" placeholder="Телефон *">
							<input type="text" name="face" placeholder="Контактное лицо *">
							<input type="url" name="site" placeholder="Сайт">
						</div>
						<div class="right-inputs">
							<input type="text" name="title" placeholder="Торговая марка">
							<input type="text" name="address" placeholder="Вид деятельности">
							<input type="text" name="e-mail" placeholder="Необходимая площадь">
							<textarea placeholder="В каком ТЦ Вы на сегодняшний день представлены"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="button-form clearfix">
						<input type="submit" value="" class="button-input">
						<div>Поля, помеченные * обязательны<br> для заполнения</div>
					</div>
				</form>
			</div>
		</div>
		<div class="content">
			<div class="block-doc">
				<p>Уважаемые арендаторы, вы так же можете скачать заявку на аренду. После заполнения, просьба отправить документ на mail: arenda@name.ru</p>
				<div class="download-doc"><a href="#">Скачать заявку на аренду<span>(.doc)</span></a></div>
			</div>
		</div>
	</div>
	<?php include("../parts/_footer.html"); ?>
</body>
</html>