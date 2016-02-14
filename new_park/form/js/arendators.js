$(document).ready(function(){
	$(".button-input").on("click", function(e){
		// TITLE
		var title = $(".left-inputs .title-input").val();
		var regTitle = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitle = title.search(regTitle);
		if(resultTitle !== 0){
			e.preventDefault();
			e.stopPropagation()
			$(".left-inputs .title-input").addClass("error");
			$(".left-inputs .title-input").val("Поле заполнено неверно");
		}
		// EMAIL
		var email = $(".left-inputs .e-mail-input").val();
		var regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		var resultEmail = email.search(regEmail);
		if(resultEmail !== 0){
			e.preventDefault();
			$(".left-inputs .e-mail-input").addClass("error");
			$(".left-inputs .e-mail-input").val("Поле заполнено неверно");
		}
		// PHONE
		var phone = $(".left-inputs .tel-input").val();
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var resultPhone = phone.search(regPhone);
		if(resultPhone !== 0){
			e.preventDefault();
			$(".left-inputs .tel-input").addClass("error");
			$(".left-inputs .tel-input").val("Поле заполнено неверно");
		}
		// FACE
		var face = $(".left-inputs .face-input").val();
		var regFace = /^[А-ЯЁІA-Z][а-яёіa-z]+(-[А-ЯЁІA-Z][а-яёіa-z]+)? [А-ЯЁІA-Z][а-яёіa-z]+( [А-ЯЁІA-Z][а-яёіa-z]+)?$/;
		var resultFace = face.search(regFace);
		if(resultFace !== 0){
			e.preventDefault();
			e.stopPropagation()
			$(".left-inputs .face-input").addClass("error");
			$(".left-inputs .face-input").val("Поле заполнено неверно");
		}
	});
	$(".left-inputs .tel-input, .left-inputs .face-input, .left-inputs .e-mail-input, .left-inputs .title-input").on("focus", function(){
		$(this).removeClass("error");
		if($(this).val() == "Поле заполнено неверно"){
			$(this).val("");
		}
	});
	$('input, textarea').placeholder();
});