$(document).ready(function(){
	$(".button-input").on("click", function(e){
		// TITLE
		var title = $(".left-inputs input[name='title'").val();
		var regTitle = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitle = title.search(regTitle);
		if(resultTitle !== 0){
			e.preventDefault();
			$(".left-inputs input[name='title']").addClass("error");
			$(".left-inputs input[name='title']").val("Поле заполнено неверно");
		}
		// EMAIL
		var email = $(".left-inputs input[name='e-mail']").val();
		var regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		var resultEmail = email.search(regEmail);
		if(resultEmail !== 0){
			e.preventDefault();
			$(".left-inputs input[name='e-mail']").addClass("error");
			$(".left-inputs input[name='e-mail']").val("Поле заполнено неверно");
		}
		// PHONE
		var phone = $(".left-inputs input[name='tel']").val();
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var resultPhone = phone.search(regPhone);
		if(resultPhone !== 0){
			e.preventDefault();
			$(".left-inputs input[name='tel']").addClass("error");
			$(".left-inputs input[name='tel']").val("Поле заполнено неверно");
		}
		// FACE
		var face = $(".left-inputs input[name='face']").val();
		var regFace = /^[а-яА-ЯёЁa-zA-Z\s]{4,30}$/i;
		var resultFace = face.search(regFace);
		if(resultFace !== 0){
			e.preventDefault();
			$(".left-inputs input[name='face']").addClass("error");
			$(".left-inputs input[name='face']").val("Поле заполнено неверно");
		}
	});
	$(".left-inputs input[name='title'], .left-inputs input[name='tel'], .left-inputs input[name='e-mail'], .left-inputs input[name='face']").on("focus", function(){
		$(this).removeClass("error");
		$(this).val("");
	});
});