$(document).ready(function(){
  $(".rooms a").on("click",function(e){e.preventDefault()});
  var stage = new Kinetic.Stage({
      container: 'canvas',
      width: 989,
      height: 539
    });
  var layer = new Kinetic.Layer();
  function hover(element){
    element.on('mouseover', function() {
      mouseover(this);
    });
    element.on('mouseout', function() {
      mouseout(this);
    });
  }
  // зображення і повідомлення при наведенні
  function mes(img,block){
    $(img).on('mouseover', function() {
      mouseover(block);
      $(this).show();
    });
    $(img).on('mouseout', function() {
      mouseout(block);
      $(this).hide();
    });
  }
  // клік по червоному
  function clicke(element){
    element.on("click", function() {
      clicks(this);
    });
  }
  // клік по білому
  function clickImg(element,block){
    $(element).on("click", function() {
      clicks(block);
    });
  }
  function clicks(e) {
    if(e.name == "a"){
      e.name = "b";
      return;
    }
    if(e.name == "b"){
      e.name = "a";
    }
  }

  // Реакція на наведення на список під блоком
  function linkHover(a,block,blockM,img){
    $(a).hover(function(){
      $(blockM).show()
      $(img).show()
      block.fill("#ff0000");
      layer.draw();
      layer2.draw();
      document.body.style.cursor = 'pointer';
    },
    function() {
      $(blockM).hide()
      if(block.name == "a"){
        $(img).hide()
        block.fill("transparent");
      }
      layer.draw();
      layer2.draw();
      document.body.style.cursor = 'default';
    });
  }
  function linkClick(a,block,img){
    $(a).on("click",function(){
      if(block.name == "b"){
        block.name = "a";
        return
      }
      if(block.name == "a"){
        block.name = "b";
      }
    });
  }

    function mouseover(e){
    if(e == a216){ $(".a216,.imga216").show()}
    if(e == b1300){$(".b1300,.imgb1300").show()}
    if(e == k02){  $(".k02,.imgk02").show()}
    if(e == k01){  $(".k01,.imgk01").show()}
    if(e == a237){ $(".a237,.imga237").show()}
    if(e == a238){ $(".a238,.imga238").show()}
    if(e == a204){ $(".a204,.imga204").show()}
    if(e == a203){ $(".a203,.imga203").show()}
    if(e == a201){ $(".a201,.imga201").show()}
    if(e == a236){ $(".a236,.imga236").show()}
    if(e == a235){ $(".a235,.imga235").show()}
    if(e == a234){ $(".a234,.imga234").show()}
    if(e == a233){ $(".a233,.imga233").show()}
    if(e == a232){ $(".a232,.imga232").show()}
    if(e == a231){ $(".a231,.imga231").show()}
    if(e == a230){ $(".a230,.imga230").show()}
    if(e == a229){ $(".a229,.imga229").show()}
    if(e == a228){ $(".a228,.imga228").show()}
    if(e == a227){ $(".a227,.imga227").show()}
    if(e == a226){ $(".a226,.imga226").show()}
    if(e == a225){ $(".a225,.imga225").show()}
    if(e == a224){ $(".a224,.imga224").show()}
    if(e == a222){ $(".a222,.imga222").show()}
    if(e == a221){ $(".a221,.imga221").show()}
    if(e == a220){ $(".a220,.imga220").show()}
    if(e == a219){ $(".a219,.imga219").show()}
    if(e == a218){ $(".a218,.imga218").show()}
    if(e == a217){ $(".a217,.imga217").show()}
    if(e == a215){ $(".a215,.imga215").show()}
    if(e == a214){ $(".a214,.imga214").show()}
    if(e == a213){ $(".a213,.imga213").show()}
    if(e == a212){ $(".a212,.imga212").show()}
    if(e == a211){ $(".a211,.imga211").show()}
    if(e == a210){ $(".a210,.imga210").show()}
    if(e == a209){ $(".a209,.imga209").show()}
    if(e == a208){ $(".a208,.imga208").show()}
    if(e == a207){ $(".a207,.imga207").show()}
    if(e == a206){ $(".a206,.imga206").show()}
    if(e == a205){ $(".a205,.imga205").show()}
    if(e == a223){ $(".a223,.imga223").show()}
    if(e == ws){ $(".ws,.imgws").show()}
    if(e == k03){ $(".k03,.imgk03").show()}
    if(e == k04){ $(".k04,.imgk04").show()}
    if(e == k05){ $(".k05,.imgk05").show()}
    if(e == a120){  $(".a120,.imga120").show()}
    if(e == s23220){  $(".s23220,.imgs23220").show()}
    if(e == ws2){  $(".ws2,.imgws2").show()}
    if(e == a121){  $(".a121,.imga121").show()}
    if(e == a122){ $(".a122,.imga122").show()}
    if(e == a123){ $(".a123,.imga123").show()}
    if(e == a124){ $(".a124,.imga124").show()}
    if(e == a125){ $(".a125,.imga125").show()}
    if(e == a126){ $(".a126,.imga126").show()}
    if(e == a127){ $(".a127,.imga127").show()}
    if(e == a128){ $(".a128,.imga128").show()}
    if(e == a129){ $(".a129,.imga129").show()}
    if(e == a131){ $(".a131,.imga131").show()}
    if(e == a133){ $(".a133,.imga133").show()}
    if(e == a132){ $(".a132,.imga132").show()}
    if(e == a134){ $(".a134,.imga134").show()}
    if(e == a135){ $(".a135,.imga135").show()}
    if(e == a130){ $(".a130,.imga130").show()}
    if(e == a136){ $(".a136,.imga136").show()}
    if(e == a137){ $(".a137,.imga137").show()}
    if(e == a138){ $(".a138,.imga138").show()}
    if(e == a139){ $(".a139,.imga139").show()}
    if(e == a140){ $(".a140,.imga140").show()}
    if(e == a110){ $(".a110,.imga110").show()}
    if(e == a111){ $(".a111,.imga111").show()}
    if(e == a112){ $(".a112,.imga112").show()}
    if(e == a113){ $(".a113,.imga113").show()}
    if(e == a114){ $(".a114,.imga114").show()}
    if(e == a115){ $(".a115,.imga115").show()}
    if(e == a116){ $(".a116,.imga116").show()}
    if(e == a117){ $(".a117,.imga117").show()}
    if(e == a118){ $(".a118,.imga118").show()}
    if(e == a119){ $(".a119,.imga119").show()}
    if(e == a101){ $(".a101,.imga101").show()}
    if(e == a102){ $(".a102,.imga102").show()}
    if(e == a104){ $(".a104,.imga104").show()}
    if(e == a103){ $(".a103,.imga103").show()}
    if(e == a105){ $(".a105,.imga105").show()}
    if(e == a106){ $(".a106,.imga106").show()}
    if(e == a107){ $(".a107,.imga107").show()}
    if(e == a108){ $(".a108,.imga108").show()}
    if(e == a109){ $(".a109,.imga109").show()}
    e.fill("#ff0000");
    layer.draw();
    layer2.draw();
    document.body.style.cursor = 'pointer';
  }
  function mouseout(e) {
    if(e == a216){
      if(a216.name == "a"){
        $(".imga216").hide()
        e.fill('transparent');
      }
      $(".a216").hide()
    }
    if(e == b1300){
      if(e.name == "a"){
        $(".imgb1300").hide()
        e.fill('transparent');
      }
      $(".b1300").hide()
    }
    if(e == k02){
      if(e.name == "a"){
        $(".imgk02").hide()
        e.fill('transparent');
      }
      $(".k02").hide()
    }
    if(e == k01){
      if(e.name == "a"){
        $(".imgk01").hide()
        e.fill('transparent');
      }
      $(".k01").hide()
    }
    if(e == a237){
      if(e.name == "a"){
        $(".imga237").hide()
        e.fill('transparent');
      }
      $(".a237").hide()
    }
    if(e == a238){
      if(e.name == "a"){
        $(".imga238").hide()
        e.fill('transparent');
      }
      $(".a238").hide()
    }
    if(e == a204){
      if(e.name == "a"){
        $(".imga204").hide()
        e.fill('transparent');
      }
      $(".a204").hide()
    }
    if(e == a203){
      if(e.name == "a"){
        $(".imga203").hide()
        e.fill('transparent');
      }
      $(".a203").hide()
    }
    if(e == a201){
      if(e.name == "a"){
        $(".imga201").hide()
        e.fill('transparent');
      }
      $(".a201").hide()
    }
    if(e == a236){
      if(e.name == "a"){
        $(".imga236").hide()
        e.fill('transparent');
      }
      $(".a236").hide()
    }
    if(e == a235){
      if(e.name == "a"){
        $(".imga235").hide()
        e.fill('transparent');
      }
      $(".a235").hide()
    }
    if(e == a234){
      if(e.name == "a"){
        $(".imga234").hide()
        e.fill('transparent');
      }
      $(".a234").hide()
    }
    if(e == a233){
      if(e.name == "a"){
        $(".imga233").hide()
        e.fill('transparent');
      }
      $(".a233").hide()
    }
    if(e == a232){
      if(e.name == "a"){
        $(".imga232").hide()
        e.fill('transparent');
      }
      $(".a232").hide()
    }
    if(e == a231){
      if(e.name == "a"){
        $(".imga231").hide()
        e.fill('transparent');
      }
      $(".a231").hide()
    }
    if(e == a230){
      if(e.name == "a"){
        $(".imga230").hide()
        e.fill('transparent');
      }
      $(".a230").hide()
    }
    if(e == a229){
      if(e.name == "a"){
        $(".imga229").hide()
        e.fill('transparent');
      }
      $(".a229").hide()
    }
    if(e == a228){
      if(e.name == "a"){
        $(".imga228").hide()
        e.fill('transparent');
      }
      $(".a228").hide()
    }
    if(e == a227){
      if(e.name == "a"){
        $(".imga227").hide()
        e.fill('transparent');
      }
      $(".a227").hide()
    }
    if(e == a226){
      if(e.name == "a"){
        $(".imga226").hide()
        e.fill('transparent');
      }
      $(".a226").hide()
    }
    if(e == a225){
      if(e.name == "a"){
        $(".imga225").hide()
        e.fill('transparent');
      }
      $(".a225").hide()
    }
    if(e == a224){
      if(e.name == "a"){
        $(".imga224").hide()
        e.fill('transparent');
      }
      $(".a224").hide()
    }
    if(e == a222){
      if(e.name == "a"){
        $(".imga222").hide()
        e.fill('transparent');
      }
      $(".a222").hide()
    }
    if(e == a221){
      if(e.name == "a"){
        $(".imga221").hide()
        e.fill('transparent');
      }
      $(".a221").hide()
    }
    if(e == a220){
      if(e.name == "a"){
        $(".imga220").hide()
        e.fill('transparent');
      }
      $(".a220").hide()
    }
    if(e == a219){
      if(e.name == "a"){
        $(".imga219").hide()
        e.fill('transparent');
      }
      $(".a219").hide()
    }
    if(e == ws2){
      if(e.name == "a"){
        $(".imgws2").hide()
        e.fill('transparent');
      }
      $(".ws2").hide()
    }
    if(e == a218){
      if(e.name == "a"){
        $(".imga218").hide()
        e.fill('transparent');
      }
      $(".a218").hide()
    }
    if(e == a217){
      if(e.name == "a"){
        $(".imga217").hide()
        e.fill('transparent');
      }
      $(".a217").hide()
    }
    if(e == a215){
      if(e.name == "a"){
        $(".imga215").hide()
        e.fill('transparent');
      }
      $(".a215").hide()
    }
    if(e == a214){
      if(e.name == "a"){
        $(".imga214").hide()
        e.fill('transparent');
      }
      $(".a214").hide()
    }
    if(e == a213){
      if(e.name == "a"){
        $(".imga213").hide()
        e.fill('transparent');
      }
      $(".a213").hide()
    }
    if(e == a212){
      if(e.name == "a"){
        $(".imga212").hide()
        e.fill('transparent');
      }
      $(".a212").hide()
    }
    if(e == a211){
      if(e.name == "a"){
        $(".imga211").hide()
        e.fill('transparent');
      }
      $(".a211").hide()
    }
    if(e == a210){
      if(e.name == "a"){
        $(".imga210").hide()
        e.fill('transparent');
      }
      $(".a210").hide()
    }
    if(e == a209){
      if(e.name == "a"){
        $(".imga209").hide()
        e.fill('transparent');
      }
      $(".a209").hide()
    }
    if(e == a208){
      if(e.name == "a"){
        $(".imga208").hide()
        e.fill('transparent');
      }
      $(".a208").hide()
    }
    if(e == a207){
      if(e.name == "a"){
        $(".imga207").hide()
        e.fill('transparent');
      }
      $(".a207").hide()
    }
    if(e == a206){
      if(e.name == "a"){
        $(".imga206").hide()
        e.fill('transparent');
      }
      $(".a206").hide()
    }
    if(e == a205){
      if(e.name == "a"){
        $(".imga205").hide()
        e.fill('transparent');
      }
      $(".a205").hide()
    }
    if(e == a223){
      if(e.name == "a"){
        $(".imga223").hide()
        e.fill('transparent');
      }
      $(".a223").hide()
    }
    if(e == ws){
      if(e.name == "a"){
        $(".imgws").hide()
        e.fill('transparent');
      }
      $(".ws").hide()
    }
    if(e == k03){
      if(e.name == "a"){
        $(".imgk03").hide()
        e.fill('transparent');
      }
      $(".k03").hide()
    }
    if(e == k04){
      if(e.name == "a"){
        $(".imgk04").hide()
        e.fill('transparent');
      }
      $(".k04").hide()
    }
    if(e == k05){
      if(e.name == "a"){
        $(".imgk05").hide()
        e.fill('transparent');
      }
      $(".k05").hide()
    }
    if(e == a101){
      if(e.name == "a"){
        $(".imga101").hide()
        e.fill('transparent');
      }
      $(".a101").hide()
    }
    if(e == a102){
      if(e.name == "a"){
        $(".imga102").hide()
        e.fill('transparent');
      }
      $(".a102").hide()
    }
    if(e == s23220){
      if(e.name == "a"){
        $(".imgs23220").hide()
        e.fill('transparent');
      }
      $(".s23220").hide()
    }
    if(e == a103){
      if(e.name == "a"){
        $(".imga103").hide()
        e.fill('transparent');
      }
      $(".a103").hide()
    }
    if(e == a104){
      if(e.name == "a"){
        $(".imga104").hide()
        e.fill('transparent');
      }
      $(".a104").hide()
    }
    if(e == a105){
      if(e.name == "a"){
        $(".imga105").hide()
        e.fill('transparent');
      }
      $(".a105").hide()
    }
    if(e == a106){
      if(e.name == "a"){
        $(".imga106").hide()
        e.fill('transparent');
      }
      $(".a106").hide()
    }
    if(e == a107){
      if(e.name == "a"){
        $(".imga107").hide()
        e.fill('transparent');
      }
      $(".a107").hide()
    }
    if(e == a108){
      if(e.name == "a"){
        $(".imga108").hide()
        e.fill('transparent');
      }
      $(".a108").hide()
    }
    if(e == a109){
      if(e.name == "a"){
        $(".imga109").hide()
        e.fill('transparent');
      }
      $(".a109").hide()
    }
    if(e == a110){
      if(e.name == "a"){
        $(".imga110").hide()
        e.fill('transparent');
      }
      $(".a110").hide()
    }
    if(e == a111){
      if(e.name == "a"){
        $(".imga111").hide()
        e.fill('transparent');
      }
      $(".a111").hide()
    }
    if(e == a112){
      if(e.name == "a"){
        $(".imga112").hide()
        e.fill('transparent');
      }
      $(".a112").hide()
    }
    if(e == a113){
      if(e.name == "a"){
        $(".imga113").hide()
        e.fill('transparent');
      }
      $(".a113").hide()
    }
    if(e == a114){
      if(e.name == "a"){
        $(".imga114").hide()
        e.fill('transparent');
      }
      $(".a114").hide()
    }
    if(e == a115){
      if(e.name == "a"){
        $(".imga115").hide()
        e.fill('transparent');
      }
      $(".a115").hide()
    }
    if(e == a116){
      if(e.name == "a"){
        $(".imga116").hide()
        e.fill('transparent');
      }
      $(".a116").hide()
    }
    if(e == a117){
      if(e.name == "a"){
        $(".imga117").hide()
        e.fill('transparent');
      }
      $(".a117").hide()
    }
    if(e == a118){
      if(e.name == "a"){
        $(".imga118").hide()
        e.fill('transparent');
      }
      $(".a118").hide()
    }
    if(e == a119){
      if(e.name == "a"){
        $(".imga119").hide()
        e.fill('transparent');
      }
      $(".a119").hide()
    }
    if(e == a120){
      if(e.name == "a"){
        $(".imga120").hide()
        e.fill('transparent');
      }
      $(".a120").hide()
    }
    if(e == a121){
      if(e.name == "a"){
        $(".imga121").hide()
        e.fill('transparent');
      }
      $(".a121").hide()
    }
    if(e == a122){
      if(e.name == "a"){
        $(".imga122").hide()
        e.fill('transparent');
      }
      $(".a122").hide()
    }
    if(e == a123){
      if(e.name == "a"){
        $(".imga123").hide()
        e.fill('transparent');
      }
      $(".a123").hide()
    }
    if(e == a124){
      if(e.name == "a"){
        $(".imga124").hide()
        e.fill('transparent');
      }
      $(".a124").hide()
    }
    if(e == a125){
      if(e.name == "a"){
        $(".imga125").hide()
        e.fill('transparent');
      }
      $(".a125").hide()
    }
    if(e == a126){
      if(e.name == "a"){
        $(".imga126").hide()
        e.fill('transparent');
      }
      $(".a126").hide()
    }
    if(e == a127){
      if(e.name == "a"){
        $(".imga127").hide()
        e.fill('transparent');
      }
      $(".a127").hide()
    }
    if(e == a128){
      if(e.name == "a"){
        $(".imga128").hide()
        e.fill('transparent');
      }
      $(".a128").hide()
    }
    if(e == a129){
      if(e.name == "a"){
        $(".imga129").hide()
        e.fill('transparent');
      }
      $(".a129").hide()
    }
    if(e == a130){
      if(e.name == "a"){
        $(".imga130").hide()
        e.fill('transparent');
      }
      $(".a130").hide()
    }
    if(e == a131){
      if(e.name == "a"){
        $(".imga131").hide()
        e.fill('transparent');
      }
      $(".a131").hide()
    }
    if(e == a132){
      if(e.name == "a"){
        $(".imga132").hide()
        e.fill('transparent');
      }
      $(".a132").hide()
    }
    if(e == a133){
      if(e.name == "a"){
        $(".imga133").hide()
        e.fill('transparent');
      }
      $(".a133").hide()
    }
    if(e == a134){
      if(e.name == "a"){
        $(".imga134").hide()
        e.fill('transparent');
      }
      $(".a134").hide()
    }
    if(e == a135){
      if(e.name == "a"){
        $(".imga135").hide()
        e.fill('transparent');
      }
      $(".a135").hide()
    }
    if(e == a136){
      if(e.name == "a"){
        $(".imga136").hide()
        e.fill('transparent');
      }
      $(".a136").hide()
    }
    if(e == a137){
      if(e.name == "a"){
        $(".imga137").hide()
        e.fill('transparent');
      }
      $(".a137").hide()
    }
    if(e == a138){
      if(e.name == "a"){
        $(".imga138").hide()
        e.fill('transparent');
      }
      $(".a138").hide()
    }
    if(e == a139){
      if(e.name == "a"){
        $(".imga139").hide()
        e.fill('transparent');
      }
      $(".a139").hide()
    }
    if(e == a140){
      if(e.name == "a"){
        $(".imga140").hide()
        e.fill('transparent');
      }
      $(".a140").hide()
    }
    layer.draw();
    layer2.draw();
    document.body.style.cursor = 'default';
  }

  // b1300
  var b1300 = new Kinetic.Line({
      points: [ 48,269, 48,357, 6,357, 6,444, 43,444, 43,467, 55,467, 55,532, 330,532, 330,389, 301,312, 120,312, 120,269],
      closed: true
  });
  b1300.name = "a";
  linkHover(".link-b1300",b1300,".b1300",".imgb1300")
  linkClick(".link-b1300",b1300,".imgb1300")
  clicke(b1300)
  clickImg(".imgb1300",b1300)
  mes(".imgb1300",b1300)
  hover(b1300);

  // 216
  var a216 = new Kinetic.Rect({
      x: 533,
      y: 137,
      width:44,
      height:50
  });
  a216.name = "a";
  clicke(a216)
  linkHover(".link-a216",a216,".a216",".imga216")
  linkClick(".link-a216",a216,".imga216")
  mes(".imga216",a216)
  clickImg(".imga216",a216)
  hover(a216);

  // k02 
  var k02 = new Kinetic.Line({
    	points: [ 80, 151, 80, 180, 61, 180, 61, 210, 137, 210, 137, 151],
    	closed: true
  });
  k02.name = "a";
  clicke(k02)
  linkHover(".link-k02",k02,".k02",".imgk02");
  linkClick(".link-k02",k02,".imgk02");
  mes(".imgk02",k02)
  clickImg(".imgk02",k02)
  hover(k02);

  // k01
  var k01 = new Kinetic.Rect({
    	x: 61,
      y: 211,
      width:76,
      height:58
  });
  k01.name = "a";
  clicke(k01)
  linkHover(".link-k01",k01,".k01",".imgk01");
  linkClick(".link-k01",k01,".imgk01");
  mes(".imgk01",k01)
  clickImg(".imgk01",k01)
  hover(k01);

  // a237
  var a237 = new Kinetic.Line({
    	points: [ 138,267, 138,270, 120,270, 120,311, 235,311, 235,267],
    	closed: true
  });
  a237.name = "a";
  clicke(a237)
  linkHover(".link-a237",a237,".a237",".imga237");
  linkClick(".link-a237",a237,".imga237");
  mes(".imga237",a237)
  clickImg(".imga237",a237)
  hover(a237);

  // a237
  var a238 = new Kinetic.Line({
    	points: [ 236,267, 236,311, 300,311, 284,267],
    	closed: true
  });
  linkHover(".link-a238",a238,".a238",".imga238");
  linkClick(".link-a238",a238,".imga238");
  mes(".imga238",a238)
  clickImg(".imga238",a238)
  hover(a238);
  a238.name = "a";
  clicke(a238)

  // a204
  var a204 = new Kinetic.Rect({
    	x: 331,
      y: 390,
      width:69,
      height:55
  });
  linkHover(".link-a204",a204,".a204",".imga204");
  linkClick(".link-a204",a204,".imga204");
  mes(".imga204",a204)
  clickImg(".imga204",a204)
  hover(a204);
  a204.name = "a";
  clicke(a204)

  // a203
  var a203 = new Kinetic.Line({
    	points: [ 401,390, 401,446, 331,446,331,532, 448,532, 448,390],
    	closed: true
  });
  linkHover(".link-a203",a203,".a203",".imga203")
  linkClick(".link-a203",a203,".imga203")
  mes(".imga203",a203)
  clickImg(".imga203",a203)
  hover(a203);
  a203.name = "a";
  clicke(a203)

  // a201
  var a201 = new Kinetic.Line({
    	points: [ 489,390, 489,445, 515,445, 544,403, 538,390],
    	closed: true
  });
  linkHover(".link-a201",a201,".a201",".imga201");
  linkClick(".link-a201",a201,".imga201");
  mes(".imga201",a201)
  clickImg(".imga201",a201)
  hover(a201);
  a201.name = "a";
  clicke(a201)

  // a236
  var a236 = new Kinetic.Line({
    	points: [ 611,401, 588,434, 575,434, 575,453, 533,517, 533,532, 620,532, 620,502, 665,437, 665,401],
    	closed: true
  });
  linkHover(".link-a236",a236,".a236",".imga236");
  linkClick(".link-a236",a236,".imga236");
  mes(".imga236",a236)
  clickImg(".imga236",a236)
  hover(a236);
  a236.name = "a";
  clicke(a236)

  // a235
  var a235 = new Kinetic.Line({
    	points: [ 666,401, 666,437, 621,501, 621,532, 709,532, 709,401],
    	closed: true
  });
  linkHover(".link-a235",a235,".a235",".imga235")
  linkClick(".link-a235",a235,".imga235")
  mes(".imga235",a235)
  clickImg(".imga235",a235)
  hover(a235);
  a235.name = "a";
  clicke(a235)

  // a234
  var a234 = new Kinetic.Line({
    	points: [748,354, 748,490, 778,490, 778,503, 841,503, 841,489, 868,489, 867,397, 887,397, 887,354],
    	closed: true
  });
  linkHover(".link-a234",a234,".a234",".imga234")
  linkClick(".link-a234",a234,".imga234")
  mes(".imga234",a234)
  clickImg(".imga234",a234)
  hover(a234);
  a234.name = "a";
  clicke(a234)

  // ws
  var ws = new Kinetic.Line({
    	points: [269,6, 269,63, 298,63, 298,50, 331,50, 331,63, 357,63, 357,6],
    	closed: true
  });
  linkHover(".link-ws",ws,".ws",".imgws")
  linkClick(".link-ws",ws,".imgws")
  mes(".imgws",ws)
  clickImg(".imgws",ws)
  hover(ws);
  ws.name = "a";
  clicke(ws)

  // a224
  var a224 = new Kinetic.Line({
    	points: [441,6, 441,74, 477,97.6, 501,64, 501,6],
    	closed: true
  });
  linkHover(".link-a224",a224,".a224",".imga224")
  linkClick(".link-a224",a224,".imga224")
  mes(".imga224",a224)
  clickImg(".imga224",a224)
  hover(a224);
  a224.name = "a";
  clicke(a224)

  // a225
  var a225 = new Kinetic.Rect({
    	x: 502,
      y: 6,
      width:76,
      height:56
  });
  linkHover(".link-a225",a225,".a225",".imga225")
  linkClick(".link-a225",a225,".imga225")
  mes(".imga225",a225)
  clickImg(".imga225",a225)
  hover(a225);
  a225.name = "a";
  clicke(a225)

  // a226
  var a226 = new Kinetic.Rect({
    	x: 617,
      y: 6,
      width:48,
      height:56
  });
  linkHover(".link-a226",a226,".a226",".imga226")
  linkClick(".link-a226",a226,".imga226")
  mes(".imga226",a226)
  clickImg(".imga226",a226)
  hover(a226)
  a226.name = "a";
  clicke(a226)

  // a227
  var a227 = new Kinetic.Rect({
    	x: 666,
      y: 6,
      width:43,
      height:56
  });
  linkHover(".link-a227",a227,".a227",".imga227")
  linkClick(".link-a227",a227,".imga227")
  mes(".imga227",a227)
  clickImg(".imga227",a227)
  hover(a227)
  a227.name = "a";
  clicke(a227)

  // a228
  var a228 = new Kinetic.Line({
    	points: [754,6, 754,63, 747,63, 747,92, 797,92, 797,6],
    	closed: true
  });
  linkHover(".link-a228",a228,".a228",".imga228")
  linkClick(".link-a228",a228,".imga228")
  mes(".imga228",a228)
  clickImg(".imga228",a228)
  hover(a228)
  a228.name = "a";
  clicke(a228)

  // a229
  var a229 = new Kinetic.Line({
    	points: [798,6, 798,93, 747,93, 747,135, 887,135, 887,6],
    	closed: true
  });
  linkHover(".link-a229",a229,".a229",".imga229")
  linkClick(".link-a229",a229,".imga229")
  mes(".imga229",a229)
  clickImg(".imga229",a229)
  hover(a229)
  a229.name = "a";
  clicke(a229)

  // 230
  var a230 = new Kinetic.Rect({
    	x: 747,
      y: 136,
      width:140,
      height:46
  });
  linkHover(".link-a230",a230,".a230",".imga230")
  linkClick(".link-a230",a230,".imga230")
  mes(".imga230",a230)
  clickImg(".imga230",a230)
  hover(a230)
  a230.name = "a";
  clicke(a230)

  // 231
  var a231 = new Kinetic.Rect({
    	x: 747,
      y: 183,
      width:139.4,
      height:39.5
  });
  linkHover(".link-a231",a231,".a231",".imga231")
  linkClick(".link-a231",a231,".imga231")
  mes(".imga231",a231)
  clickImg(".imga231",a231)
  hover(a231)
  a231.name = "a";
  clicke(a231)

  // a232
  var a232 = new Kinetic.Line({
    	points: [748,223, 748,266, 760,267, 761,273, 771,273, 771,269, 887,269, 887,223],
    	closed: true
  });
  linkHover(".link-a232",a232,".a232",".imga232")
  linkClick(".link-a232",a232,".imga232")
  mes(".imga232",a232)
  clickImg(".imga232",a232)
  hover(a232)
  a232.name = "a";
  clicke(a232)

  // a233
  var a233 = new Kinetic.Line({
    	points: [772,269.5, 772,295, 767,295, 760,295, 760,301, 748,301, 748,354, 887,354, 887,269.5],
    	closed: true
  });
  linkHover(".link-a233",a233,".a233",".imga233")
  linkClick(".link-a233",a233,".imga233")
  mes(".imga233",a233)
  clickImg(".imga233",a233)
  hover(a233)
  a233.name = "a";
  clicke(a233)

  // 220
  var a220 = new Kinetic.Rect({
    	x: 578,
      y: 92,
      width:43,
      height:44
  });
  linkHover(".link-a220",a220,".a220",".imga220")
  linkClick(".link-a220",a220,".imga220")
  mes(".imga220",a220)
  clickImg(".imga220",a220)
  hover(a220)
  a220.name = "a";
  clicke(a220)

  // 217
  var a217 = new Kinetic.Rect({
    	x: 578,
      y: 137,
      width:43,
      height:50
  });
  linkHover(".link-a217",a217,".a217",".imga217")
  linkClick(".link-a217",a217,".imga217")
  mes(".imga217",a217)
  clickImg(".imga217",a217)
  hover(a217)
  a217.name = "a";
  clicke(a217)

  // a218
  var a218 = new Kinetic.Line({
    	points: [622,137, 622,187, 649,187, 682,137],
    	closed: true
  });
  linkHover(".link-a218",a218,".a218",".imga218")
  linkClick(".link-a218",a218,".imga218")
  mes(".imga218",a218)
  clickImg(".imga218",a218)
  hover(a218)
  a218.name = "a";
  clicke(a218)

  // 213
  var a213 = new Kinetic.Rect({
    	x: 533,
      y: 217,
      width:44,
      height:50
  });
  linkHover(".link-a213",a213,".a213",".imga213")
  linkClick(".link-a213",a213,".imga213")
  mes(".imga213",a213)
  clickImg(".imga213",a213)
  hover(a213)
  a213.name = "a";
  clicke(a213)

  // a211
  var a211 = new Kinetic.Line({
    	points: [533,268, 532,312, 565,312, 595,268],
    	closed: true
  });
  linkHover(".link-a211",a211,".a211",".imga211")
  linkClick(".link-a211",a211,".imga211")
  mes(".imga211",a211)
  clickImg(".imga211",a211)
  hover(a211)
  a211.name = "a";
  clicke(a211)

  // a210
  var a210 = new Kinetic.Line({
    	points: [533,312, 533,357, 536,357, 565,312],
    	closed: true
  });
  linkHover(".link-a210",a210,".a210",".imga210")
  linkClick(".link-a210",a210,".imga210")
  mes(".imga210",a210)
  clickImg(".imga210",a210)
  hover(a210)
  a210.name = "a";
  clicke(a210)

  // 206
  var a206 = new Kinetic.Rect({
    	x: 406,
      y: 313,
      width:35.5,
      height:43.3
  });
  linkHover(".link-a206",a206,".a206",".imga206")
  linkClick(".link-a206",a206,".imga206")
  mes(".imga206",a206)
  clickImg(".imga206",a206)
  hover(a206)
  a206.name = "a";
  clicke(a206)

  // 208
  var a208 = new Kinetic.Rect({
    	x: 442,
      y: 313,
      width:47,
      height:44
  });
  linkHover(".link-a208",a208,".a208",".imga208")
  linkClick(".link-a208",a208,".imga208")
  mes(".imga208",a208)
  clickImg(".imga208",a208)
  hover(a208)
  a208.name = "a";
  clicke(a208)

  // 209
  var a209 = new Kinetic.Rect({
    	x: 489.3,
      y: 268,
      width:42.5,
      height:89
  });
  linkHover(".link-a209",a209,".a209",".imga209")
  linkClick(".link-a209",a209,".imga209")
  mes(".imga209",a209)
  clickImg(".imga209",a209)
  hover(a209)
  a209.name = "a";
  clicke(a209)

  var a222 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(357,6);
        context.lineTo(357,119);
        context.quadraticCurveTo(380, 116, 406, 124);

        context.lineTo(440,74);
        context.lineTo(440,6);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a222",a222,".a222",".imga222")
  linkClick(".link-a222",a222,".imga222")
  mes(".imga222",a222)
  clickImg(".imga222",a222)
  hover(a222)
  a222.name = "a";
  clicke(a222)

  // a215
  var a215 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(488,137);
        context.lineTo(469,164);
        context.quadraticCurveTo(458, 182, 474, 188);

        context.lineTo(533,188);
        context.lineTo(533,137);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a215",a215,".a215",".imga215")
  linkClick(".link-a215",a215,".imga215")
  mes(".imga215",a215)
  clickImg(".imga215",a215)
  hover(a215)
  a215.name = "a";
  clicke(a215)

  // a219
  var a219 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(489,136);
        context.lineTo(577,136);
        context.lineTo(577,92);
        context.lineTo(534,92);
        context.quadraticCurveTo(517, 94, 507, 111);
        context.closePath();
        context.fillShape(this);
      }
    });
  linkHover(".link-a219",a219,".a219",".imga219")
  linkClick(".link-a219",a219,".imga219")
  mes(".imga219",a219)
  clickImg(".imga219",a219)
  hover(a219)
  a219.name = "a";
  clicke(a219)

  // a221
  var a221 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(622,93);
        context.lineTo(682,93);
        context.quadraticCurveTo(705, 97, 694,121);
        context.lineTo(682,136);
        context.lineTo(622,136);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a221",a221,".a221",".imga221")
  linkClick(".link-a221",a221,".imga221")
  mes(".imga221",a221)
  clickImg(".imga221",a221)
  hover(a221)
  a221.name = "a";
  clicke(a221)

  // a214
  var a214 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(577,217);
        context.lineTo(593,217);
        context.quadraticCurveTo(620, 220, 612,242);
        context.lineTo(595,268);
        context.lineTo(577,268);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a214",a214,".a214",".imga214")
  linkClick(".link-a214",a214,".imga214")
  mes(".imga214",a214)
  clickImg(".imga214",a214)
  hover(a214)
  a214.name = "a";
  clicke(a214)

  // a212
  var a212 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(464,217);
        context.lineTo(533,217);
        context.lineTo(533,267);
        context.lineTo(437,267);
        context.quadraticCurveTo(457, 244, 464,217);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a212",a212,".a212",".imga212")
  linkClick(".link-a212",a212,".imga212")
  mes(".imga212",a212)
  clickImg(".imga212",a212)
  hover(a212)
  a212.name = "a";
  clicke(a212)

  // a207
  var a207 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(436,268);
        context.lineTo(488,268);
        context.lineTo(488,313);
        context.lineTo(406,313);
        context.lineTo(406,286);
        context.quadraticCurveTo(420, 279, 436,268);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a207",a207,".a207",".imga207")
  linkClick(".link-a207",a207,".imga207")
  mes(".imga207",a207)
  clickImg(".imga207",a207)
  hover(a207)
  a207.name = "a";
  clicke(a207)

  // a205
  var a205 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(379,288);
        context.lineTo(379,357);
        context.lineTo(405,357);
        context.lineTo(405,286);
        context.quadraticCurveTo(393,290,380,289);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a205",a205,".a205",".imga205")
  linkClick(".link-a205",a205,".imga205")
  mes(".imga205",a205)
  clickImg(".imga205",a205)
  hover(a205)
  a205.name = "a";
  clicke(a205)

  // k03
  var k03 = new Kinetic.Rect({
      x: 93,
      y: 81,
      width:87,
      height:69
  });
  linkHover(".link-k03",k03,".k03",".imgk03")
  linkClick(".link-k03",k03,".imgk03")
  mes(".imgk03",k03)
  clickImg(".imgk03",k03)
  hover(k03)
  k03.name = "a";
  clicke(k03)

  // k04
  var k04 = new Kinetic.Rect({
      x: 181,
      y: 81,
      width:66,
      height:69
  });
  linkHover(".link-k04",k04,".k04",".imgk04")
  linkClick(".link-k04",k04,".imgk04")
  mes(".imgk04",k04)
  clickImg(".imgk04",k04)
  hover(k04)
  k04.name = "a";
  clicke(k04)

  // k05
  var k05 = new Kinetic.Rect({
      x: 248,
      y: 81,
      width:65,
      height:68
  });
  linkHover(".link-k05",k05,".k05",".imgk05")
  linkClick(".link-k05",k05,".imgk05")
  mes(".imgk05",k05)
  clickImg(".imgk05",k05)
  hover(k05)
  k05.name = "a";
  clicke(k05)

  // a223
  var a223 = new Kinetic.Shape({
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(441,75);
        context.lineTo(407,124);
        context.quadraticCurveTo(427,133,442.7,148);
        context.lineTo(477,99);
        context.closePath();
        context.fillShape(this);
      },
    });
  linkHover(".link-a223",a223,".a223",".imga223")
  linkClick(".link-a223",a223,".imga223")
  mes(".imga223",a223)
  clickImg(".imga223",a223)
  hover(a223)
  a223.name = "a";
  clicke(a223)


  layer.add(a216,k02,k01,a237,a238,b1300,a204,a203,a201,a236,a235,a234,ws,a224,a225,a226,a227,a228,a229,a230,a231,a232,a233,a220,a217,a218,a213,a211,a210,a206,a208,a209,a222,a215,a219,a221,a214,a212,a207,a205,k03,k04,k05,a223);
  stage.add(layer);

  // floor2
  // перемикач між етажами

  $(".floor2").on("click",function(){
    $(".floor1 div").removeClass("active-floor");
    $(".floor2 div").addClass("active-floor");
    $(".wrap-shemes").hide();
    $(".wrap-shemes2").show();
  });
  $(".floor1").on("click",function(){
    $(".floor2 div").removeClass("active-floor");
    $(".floor1 div").addClass("active-floor");
    $(".wrap-shemes2").hide();
    $(".wrap-shemes").show();
  });
  var stage2 = new Kinetic.Stage({
      container: 'canvas2',
      width: 980,
      height: 540
    });
  var layer2 = new Kinetic.Layer();

  // s23220
  var s23220 = new Kinetic.Line({
      points: [70,80, 71,137, 41,137, 41,147, 44,147, 44,175, 50,180, 50,343, 6,343, 6,443, 26,443, 26,462, 56,462, 56,531, 311,531, 310,80],
      closed: true
  });
  mes(".imgs23220",s23220);
  clickImg(".imgs23220",s23220);
  linkHover(".link-s23220",s23220,".s23220",".imgs23220");
  linkClick(".link-s23220",s23220,".imgs23220");
  hover(s23220);
  s23220.name = "a";
  clicke(s23220);

  // ws2
  var ws2 = new Kinetic.Rect({
      x: 267,
      y: 6,
      width:44,
      height:54
  });
  linkHover(".link-ws2",ws2,".ws2",".imgws2");
  linkClick(".link-ws2",ws2,".imgws2");
  mes(".imgws2",ws2);
  clickImg(".imgws2",ws2);
  hover(ws2);
  ws2.name = "a";
  clicke(ws2);

  // a120
  var a120 = new Kinetic.Line({
      points: [312,6, 312,59, 335,59, 335,138, 398,138, 398,6],
      closed: true
  });
  linkHover(".link-a120",a120,".a120",".imga120");
  linkClick(".link-a120",a120,".imga120");
  mes(".imga120",a120)
  clickImg(".imga120",a120)
  hover(a120);
  a120.name = "a";
  clicke(a120)

  // a121
  var a121 = new Kinetic.Rect({
      x: 399,
      y: 47,
      width:40,
      height:90
  });
  linkHover(".link-a121",a121,".a121",".imga121");
  linkClick(".link-a121",a121,".imga121");
  mes(".imga121",a121)
  clickImg(".imga121",a121)
  hover(a121);
  a121.name = "a";
  clicke(a121)

  // a122
  var a122 = new Kinetic.Line({
      points: [399,6, 399,46, 440,46, 440,137, 487,137, 487,6],
      closed: true
  });
  linkHover(".link-a122",a122,".a122",".imga122");
  linkClick(".link-a122",a122,".imga122");
  mes(".imga122",a122)
  clickImg(".imga122",a122)
  hover(a122);
  a122.name = "a";
  clicke(a122)

  // a123
  var a123 = new Kinetic.Rect({
      x: 487.5,
      y: 90.4,
      width:44,
      height:47
  });
  linkHover(".link-a123",a123,".a123",".imga123");
  linkClick(".link-a123",a123,".imga123");
  mes(".imga123",a123)
  clickImg(".imga123",a123)
  hover(a123);
  a123.name = "a";
  clicke(a123)

  // a124
  var a124 = new Kinetic.Line({
      points: [487.4,6, 487.4,89, 533,89, 533,137, 577,137, 577,6],
      closed: true
  });
  linkHover(".link-a124",a124,".a124",".imga124");
  linkClick(".link-a124",a124,".imga124");
  mes(".imga124",a124)
  clickImg(".imga124",a124)
  hover(a124);
  a124.name = "a";
  clicke(a124)

  // a125
  var a125 = new Kinetic.Line({
      points: [603,6, 603,55, 596,55, 596,69, 593,68, 593,137, 663,137, 663,6],
      closed: true
  });
  linkHover(".link-a125",a125,".a125",".imga125");
  linkClick(".link-a125",a125,".imga125");
  mes(".imga125",a125)
  clickImg(".imga125",a125)
  hover(a125);
  a125.name = "a";
  clicke(a125)

  // a126
  var a126 = new Kinetic.Line({
      points: [663,6, 663,137, 711,137, 711,77, 706,74, 706,6],
      closed: true
  });
  linkHover(".link-a126",a126,".a126",".imga126");
  linkClick(".link-a126",a126,".imga126");
  mes(".imga126",a126)
  clickImg(".imga126",a126)
  hover(a126);
  a126.name = "a";
  clicke(a126)

  // a127
  var a127 = new Kinetic.Line({
      points: [751,6, 751,75, 745,76, 745,93, 795,93, 795,6],
      closed: true
  });
  linkHover(".link-a127",a127,".a127",".imga127")
  linkClick(".link-a127",a127,".imga127")
  mes(".imga127",a127)
  clickImg(".imga127",a127)
  hover(a127);
  a127.name = "a";
  clicke(a127)

  // a128
  var a128 = new Kinetic.Rect({
      x: 796,
      y: 6,
      width:43,
      height:87
  });
  linkHover(".link-a128",a128,".a128",".imga128")
  linkClick(".link-a128",a128,".imga128")
  mes(".imga128",a128)
  clickImg(".imga128",a128)
  hover(a128);
  a128.name = "a";
  clicke(a128)

  // a129
  var a129 = new Kinetic.Rect({
      x: 840,
      y: 6,
      width:43,
      height:87
  });
  linkHover(".link-a129",a129,".a129",".imga129")
  linkClick(".link-a129",a129,".imga129")
  mes(".imga129",a129)
  clickImg(".imga129",a129)
  hover(a129);
  a129.name = "a";
  clicke(a129)

  // a131
  var a131 = new Kinetic.Line({
      points: [792,129, 884,130, 884,176.4, 759,176.4],
      closed: true
  });
  linkHover(".link-a131",a131,".a131",".imga131")
  linkClick(".link-a131",a131,".imga131")
  mes(".imga131",a131)
  clickImg(".imga131",a131)
  hover(a131);
  a131.name = "a";
  clicke(a131)

  // a132
  var a132 = new Kinetic.Line({
      points: [758,178, 883,178, 883,222, 751.5,222, 751.5,188],
      closed: true
  });
  linkHover(".link-a132",a132,".a132",".imga132")
  linkClick(".link-a132",a132,".imga132")
  mes(".imga132",a132)
  clickImg(".imga132",a132)
  hover(a132);
  a132.name = "a";
  clicke(a132)

  // a133
  var a133 = new Kinetic.Line({
      points: [752,223, 752,263, 760,263, 760,270, 772,269, 770,268, 883,268, 883,223],
      closed: true
  });
  linkHover(".link-a133",a133,".a133",".imga133")
  linkClick(".link-a133",a133,".imga133")
  mes(".imga133",a133)
  clickImg(".imga133",a133)
  hover(a133);
  a133.name = "a";
  clicke(a133)

  // a134
  var a134 = new Kinetic.Line({
      points: [771,269, 770,293, 760,294, 760,302, 752,302, 753,302, 753,332, 883,332, 883,269],
      closed: true
  });
  linkHover(".link-a134",a134,".a134",".imga134")
  linkClick(".link-a134",a134,".imga134")
  mes(".imga134",a134)
  clickImg(".imga134",a134)
  hover(a134);
  a134.name = "a";
  clicke(a134)

  // a135
  var a135 = new Kinetic.Line({
      points: [753,333, 753,392, 796,392, 796,457, 865,457, 865,400, 883,400, 883,333],
      closed: true
  });
  linkHover(".link-a135",a135,".a135",".imga135")
  linkClick(".link-a135",a135,".imga135")
  mes(".imga135",a135)
  clickImg(".imga135",a135)
  hover(a135);
  a135.name = "a";
  clicke(a135)

  // a130
  var a130 = new Kinetic.Rect({
      x: 885,
      y: 129,
      width:94.5,
      height:48
  });
  linkHover(".link-a130",a130,".a130",".imga130")
  linkClick(".link-a130",a130,".imga130")
  mes(".imga130",a130)
  clickImg(".imga130",a130)
  hover(a130);
  a130.name = "a";
  clicke(a130)

  // a136
  var a136 = new Kinetic.Line({
      points: [708.3,394, 753,394, 753,392, 795,392, 795,532, 761,532, 761,507, 708.3,507],
      closed: true
  });
  linkHover(".link-a136",a136,".a136",".imga136")
  linkClick(".link-a136",a136,".imga136")
  mes(".imga136",a136)
  clickImg(".imga136",a136)
  hover(a136);
  a136.name = "a";
  clicke(a136)

  // a137
  var a137 = new Kinetic.Rect({
      x: 664,
      y: 394,
      width:44,
      height:137
  });
  linkHover(".link-a137",a137,".a137",".imga137")
  linkClick(".link-a137",a137,".imga137")
  mes(".imga137",a137)
  clickImg(".imga137",a137)
  hover(a137);
  a137.name = "a";
  clicke(a137)

  // a138
  var a138 = new Kinetic.Line({
      points: [613,394, 583,440, 585,443, 663,443, 663,394],
      closed: true
  });
  linkHover(".link-a138",a138,".a138",".imga138")
  linkClick(".link-a138",a138,".imga138")
  mes(".imga138",a138)
  clickImg(".imga138",a138)
  hover(a138);
  a138.name = "a";
  clicke(a138)

  // a139
  var a139 = new Kinetic.Line({
      points: [582,440, 589,443, 663,443, 663,488, 577,488, 558,475],
      closed: true
  });
  linkHover(".link-a139",a139,".a139",".imga139")
  linkClick(".link-a139",a139,".imga139")
  mes(".imga139",a139)
  clickImg(".imga139",a139)
  hover(a139);
  a139.name = "a";
  clicke(a139)

  // a140
  var a140 = new Kinetic.Line({
      points: [558,475, 576,488, 663,488, 663,531, 533,531, 533,514],
      closed: true
  });
  linkHover(".link-a140",a140,".a140",".imga140")
  linkClick(".link-a140",a140,".imga140")
  mes(".imga140",a140)
  clickImg(".imga140",a140)
  hover(a140);
  a140.name = "a";
  clicke(a140)

  // a110
  var a110 = new Kinetic.Rect({
      x: 488,
      y: 223,
      width:43,
      height:98
  });
  linkHover(".link-a110",a110,".a110",".imga110")
  linkClick(".link-a110",a110,".imga110")
  mes(".imga110",a110)
  clickImg(".imga110",a110)
  hover(a110);
  a110.name = "a";
  clicke(a110)

  // a111
  var a111 = new Kinetic.Rect({
      x: 440,
      y: 267,
      width:47,
      height:54
  });
  linkHover(".link-a111",a111,".a111",".imga111")
  linkClick(".link-a111",a111,".imga111")
  mes(".imga111",a111)
  clickImg(".imga111",a111)
  hover(a111);
  a111.name = "a";
  clicke(a111)

  // a112
  var a112 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(419,267);
      context.lineTo(438.8,267);
      context.lineTo(438.8,321);
      context.lineTo(418,321);
      context.quadraticCurveTo(384,316,403,290);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a112",a112,".a112",".imga112")
  linkClick(".link-a112",a112,".imga112")
  mes(".imga112",a112)
  clickImg(".imga112",a112)
  hover(a112);
  a112.name = "a";
  clicke(a112)

  // a113
  var a113 = new Kinetic.Line({
      points: [446.8,223, 487,223, 487,266, 419,266],
      closed: true
  });
  linkHover(".link-a113",a113,".a113",".imga113")
  linkClick(".link-a113",a113,".imga113")
  mes(".imga113",a113)
  clickImg(".imga113",a113)
  hover(a113);
  a113.name = "a";
  clicke(a113)

  // a114
  var a114 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(487,176);
      context.lineTo(487,222);
      context.lineTo(448,222);
      context.lineTo(469,190);
      context.quadraticCurveTo(472,183,487,176);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a114",a114,".a114",".imga114")
  linkClick(".link-a114",a114,".imga114")
  mes(".imga114",a114)
  clickImg(".imga114",a114)
  hover(a114);
  a114.name = "a";
  clicke(a114)

  // a116
  var a116 = new Kinetic.Rect({
      x: 532,
      y: 173,
      width:44,
      height:49
  });
  linkHover(".link-a116",a116,".a116",".imga116")
  linkClick(".link-a116",a116,".imga116")
  mes(".imga116",a116)
  clickImg(".imga116",a116)
  hover(a116);
  a116.name = "a";
  clicke(a116)

  // a115
  var a115 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(503,173);
      context.lineTo(531,173);
      context.lineTo(531,222);
      context.lineTo(488,222);
      context.lineTo(488,176);
      context.quadraticCurveTo(486,175,503,173);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a115",a115,".a115",".imga115")
  linkClick(".link-a115",a115,".imga115")
  mes(".imga115",a115)
  clickImg(".imga115",a115)
  hover(a115);
  a115.name = "a";
  clicke(a115)

  // a117
  var a117 = new Kinetic.Rect({
      x: 576,
      y: 173,
      width:44,
      height:49
  });
  linkHover(".link-a117",a117,".a117",".imga117")
  linkClick(".link-a117",a117,".imga117")
  mes(".imga117",a117)
  clickImg(".imga117",a117)
  hover(a117);
  a117.name = "a";
  clicke(a117)

  // a118
  var a118 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(664,174);
      context.lineTo(620,174);
      context.lineTo(620,222);
      context.lineTo(659,222);
      context.lineTo(675,195);
      context.quadraticCurveTo(680,179,659,174);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a118",a118,".a118",".imga118")
  linkClick(".link-a118",a118,".imga118")
  mes(".imga118",a118)
  clickImg(".imga118",a118)
  hover(a118);
  a118.name = "a";
  clicke(a118)

  // a101
  var a101 = new Kinetic.Line({
      points: [313,488, 400,488, 440,443, 511,443, 452,531, 313,531],
      closed: true
  });
  linkHover(".link-a101",a101,".a101",".imga101")
  linkClick(".link-a101",a101,".imga101")
  mes(".imga101",a101);
  clickImg(".imga101",a101);
  hover(a101);
  a101.name = "a";
  clicke(a101);

  // // a102
  // var a102 = new Kinetic.Line({
  //     points: [313,488, 400,488, 440,443, 511,443, 452,531, 313,531],
  //     closed: true
  // });
  // mes(".imga102",a102);
  // clickImg(".imga102",a102);
  // hover(a102);
  // a102.name = "a";
  // clicke(a102);

  // a102
  var a102 = new Kinetic.Line({
      points: [440,399, 531,399, 537.3,403, 511,443, 440,444],
      closed: true
  });
  linkHover(".link-a102",a102,".a102",".imga102")
  linkClick(".link-a102",a102,".imga102")
  mes(".imga102",a102);
  clickImg(".imga102",a102);
  hover(a102);
  a102.name = "a";
  clicke(a102);

  // a103
  var a103 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(533,357);
      context.lineTo(488,357);
      context.lineTo(488,398);
      context.lineTo(531,398);
      context.lineTo(538,403);
      context.lineTo(545,393);
      context.quadraticCurveTo(560,365, 535,358);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a103",a103,".a103",".imga103")
  linkClick(".link-a103",a103,".imga103")
  mes(".imga103",a103);
  clickImg(".imga103",a103);
  hover(a103);
  a103.name = "a";
  clicke(a103);

  // a104
  var a104 = new Kinetic.Rect({
      x: 440,
      y: 357,
      width:47,
      height:41
  });
  linkHover(".link-a104",a104,".a104",".imga104")
  linkClick(".link-a104",a104,".imga104")
  mes(".imga104",a104);
  clickImg(".imga104",a104);
  hover(a104);
  a104.name = "a";
  clicke(a104);

  // a105
  var a105 = new Kinetic.Rect({
      x: 401,
      y: 357,
      width:38,
      height:42
  });
  linkHover(".link-a105",a105,".a105",".imga105")
  linkClick(".link-a105",a105,".imga105")
  mes(".imga105",a105);
  clickImg(".imga105",a105);
  hover(a105);
  a105.name = "a";
  clicke(a105);

  // a106
  var a106 = new Kinetic.Line({
      points: [355,357, 355,399, 313.5,398, 313.5,487, 400,487, 439,442, 439,399, 400,399, 400,357],
      closed: true
  });
  linkHover(".link-a106",a106,".a106",".imga106")
  linkClick(".link-a106",a106,".imga106")
  mes(".imga106",a106);
  clickImg(".imga106",a106);
  hover(a106);
  a106.name = "a";
  clicke(a106);

  // a107
  var a107 = new Kinetic.Rect({
      x: 313,
      y: 357,
      width:42,
      height:41
  });
  linkHover(".link-a107",a107,".a107",".imga107")
  linkClick(".link-a107",a107,".imga107")
  mes(".imga107",a107);
  clickImg(".imga107",a107);
  linkHover(".link-a107",a107,".a107",".imga107")
  linkClick(".link-a107",a107,".imga107")
  hover(a107);
  a107.name = "a";
  clicke(a107);

  // a108
  // var a108 = new Kinetic.Rect({
  //     x: 313,
  //     y: 357,
  //     width:42,
  //     height:41
  // });

  // a108
  var a108 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(602,308);
      context.lineTo(629,268);
      context.lineTo(576,268);
      context.lineTo(576,321);
      context.quadraticCurveTo(595,319, 603,307);
      context.closePath();
      context.fillStrokeShape(this);
    },
  });
  linkHover(".link-a108",a108,".a108",".imga108")
  linkClick(".link-a108",a108,".imga108")
  mes(".imga108",a108);
  clickImg(".imga108",a108);
  hover(a108);
  a108.name = "a";
  clicke(a108);

  // a109
  var a109 = new Kinetic.Rect({
      x: 532,
      y: 223,
      width:43,
      height:99
  });
  linkHover(".link-a109",a109,".a109",".imga109")
  linkClick(".link-a109",a109,".imga109")
  mes(".imga109",a109);
  clickImg(".imga109",a109);
  hover(a109);
  a109.name = "a";
  clicke(a109);

  // a119
  var a119 = new Kinetic.Line({
      points: [576,223, 659,223, 630,267, 576,266],
      closed: true
  });
  linkHover(".link-a119",a119,".a119",".imga119")
  linkClick(".link-a119",a119,".imga119")
  mes(".imga119",a119);
  clickImg(".imga119",a119);
  hover(a119);
  a119.name = "a";
  clicke(a119);

  layer2.add(s23220,ws2,a120,a121,a122,a123,a124,a125,a126,a127,a128,a129,a131,a132,a133,a134,a135,a130,a136,a137,a138,a139,a140,a110,a111,a112,a113,a114,a115,a116,a117,a118,a119,a101,a102,a103,a104,a105,a106,a107,a108,a109);
  stage2.add(layer2);
  });