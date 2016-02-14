$(document).ready(function(){
	$(".button-input").on("click", function(e){
		// EMAIL
		var email = $(".left-inputs-feedback .e-mail-input").val();
		var regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		var resultEmail = email.search(regEmail);
		if(resultEmail !== 0){
			e.preventDefault();
			$(".left-inputs-feedback .e-mail-input").addClass("error");
			$(".left-inputs-feedback .e-mail-input").val("Поле заполнено неверно");
		}
		// FACE
		var face = $(".left-inputs-feedback .face-input").val();
		var regFace = /^[А-ЯЁІA-Z][а-яёіa-z]+(-[А-ЯЁІA-Z][а-яёіa-z]+)? [А-ЯЁІA-Z][а-яёіa-z]+( [А-ЯЁІA-Z][а-яёіa-z]+)?$/;
		var resultFace = face.search(regFace);
		if(resultFace !== 0){
			e.preventDefault();
			$(".left-inputs-feedback .face-input").addClass("error");
			$(".left-inputs-feedback .face-input").val("Поле заполнено неверно");
		}
		// DESC
		var desc = $(".right-inputs-feedback textarea").val();
		if(desc == "" || desc == "Текст сообщения *" || desc == "Поле не заполнено"){
			e.preventDefault();
			$(".right-inputs-feedback textarea").addClass("error");
			$(".right-inputs-feedback textarea").val("Поле не заполнено");
		}
	});
	$(".left-inputs-feedback .face-input, .left-inputs-feedback .e-mail-input, .right-inputs-feedback textarea").on("focus", function(){
		$(this).removeClass("error");
		if($(this).val() == "Поле заполнено неверно" || $(this).val() == "Поле не заполнено"){
			$(this).val("");
		}
	});
	
});