	<?php include("_header.html"); ?>
		<script type="text/javascript" src="js/feedback.js"></script>
		<script type="text/javascript" src="js/jquery.placeholder.js"></script>
		<div class="content">
			<div class="top-content">
	        	<ul class="content-menu">
	        		<li><a href="#">Главная</a></li>
	        		<li>Обратная связь</li>
	        	</ul>
		      	<div class="content-title">
		        	<h1>Обратная связь</h1>
		      	</div>  
		      	<div class="desc-top-content">
		      		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		      	</div>      
	      </div>
		</div> <!-- END CONTENT-->
		<div class="block-form-feedback">
			<div class="content">
				<form class="form-feedback">
					<div>
						<div class="left-inputs-feedback">
							<p>
								<label>
									<span>Представьтесь, пожалуйста *</span>
									<input type="text" name="face" placeholder="Иванов Иван Иванович" class="face-input">
								</label>
							</p>
							<p>
								<label>
									<span>Контактный телефон</span>
									<input type="tel" name="tel" placeholder="+7 (495) 123-45-67" class="tel-input">
								</label>
							</p>
							<p>
								<label>
									<span>E-mail для связи *</span>
									<input type="email" name="e-mail" placeholder="mail@mail.ru" class="e-mail-input">
								</label>
							</p>
						</div>
						<div class="right-inputs-feedback">
							<textarea placeholder="Текст сообщения *"></textarea>
						</div>
						<div class="clear"></div>
					</div>
					<div class="button-form-feedback clearfix">
						<input type="submit" value="" class="button-input">
						<div>Поля, помеченные * обязательны<br> для заполнения</div>
					</div>
				</form>
			</div>
		</div>
<?php include("_footer.html"); ?>