$( document ).ready(function() {
  var stage = new Kinetic.Stage({
      container: 'canvas',
      width: 989,
      height: 539
    });
  var layer = new Kinetic.Layer();

  function clicks(classBlock,block,title){
    $(classBlock).on("click",function(){
      block.fill("#ee2e24");
      $(title).show();
      hover(block);
      layer.draw();
    });
    $(".close-popup").on("click",function(){
      block.fill("transparent");
      document.body.style.cursor = 'default';
      $(title).hide();
      layer.draw();
    });
  }
      function hover(element){
            element.on('mouseover', function() {
                  mouseover(this);
            });
            element.on('mouseout', function() {
                  mouseout(this);
            });
      }
      function mouseover(e){
            layer.draw();
            document.body.style.cursor = 'pointer';
      }
      function mouseout(e) {
            layer.draw();
            document.body.style.cursor = 'default';
      }

  // b1300
  var b1300 = new Kinetic.Line({
      points: [ 48,269, 48,357, 6,357, 6,444, 43,444, 43,467, 55,467, 55,532, 330,532, 330,389, 301,312, 120,312, 120,269],
      closed: true
  });
  clicks(".click-b1300",b1300,".imgb1300");
  // 216
  var a216 = new Kinetic.Rect({
      x: 533,
      y: 137,
      width:44,
      height:50
  });
  clicks(".click-a216",a216,".imga216");
  // k02 
  var k02 = new Kinetic.Line({
      points: [ 80, 151, 80, 180, 61, 180, 61, 210, 137, 210, 137, 151],
      closed: true
  });
  clicks(".click-k02",k02,".imgk02");
  // k01
  var k01 = new Kinetic.Rect({
      x: 61,
      y: 211,
      width:76,
      height:58
  });
  clicks(".click-k01",k01,".imgk01");
  // a237
  var a237 = new Kinetic.Line({
      points: [ 138,267, 138,270, 120,270, 120,311, 235,311, 235,267],
      closed: true
  });
  clicks(".click-a237",a237,".imga237");
  // a237
  var a238 = new Kinetic.Line({
      points: [ 236,267, 236,311, 300,311, 284,267],
      closed: true
  });
  clicks(".click-a238",a238,".imga238");
  // a204
  var a204 = new Kinetic.Rect({
      x: 331,
      y: 390,
      width:69,
      height:55
  });
  clicks(".click-a204",a204,".imga204");
  // a203
  var a203 = new Kinetic.Line({
      points: [ 401,390, 401,446, 331,446,331,532, 448,532, 448,390],
      closed: true
  });
  clicks(".click-a203",a203,".imga203");
  // a201
  var a201 = new Kinetic.Line({
      points: [ 489,390, 489,445, 515,445, 544,403, 538,390],
      closed: true
  });
  clicks(".click-a201",a201,".imga201");
  // a236
  var a236 = new Kinetic.Line({
      points: [ 611,401, 588,434, 575,434, 575,453, 533,517, 533,532, 620,532, 620,502, 665,437, 665,401],
      closed: true
  });
  clicks(".click-a236",a236,".imga236");
  // a235
  var a235 = new Kinetic.Line({
      points: [ 666,401, 666,437, 621,501, 621,532, 709,532, 709,401],
      closed: true
  });
  clicks(".click-a235",a235,".imga235");
  // a234
  var a234 = new Kinetic.Line({
      points: [748,354, 748,490, 778,490, 778,503, 841,503, 841,489, 868,489, 867,397, 887,397, 887,354],
      closed: true
  });
  clicks(".click-a234",a234,".imga234");
  // ws
  var ws = new Kinetic.Line({
      points: [269,6, 269,63, 298,63, 298,50, 331,50, 331,63, 357,63, 357,6],
      closed: true
  });
  clicks(".click-ws",ws,".imgws");
  // a224
  var a224 = new Kinetic.Line({
      points: [441,6, 441,74, 477,97.6, 501,64, 501,6],
      closed: true
  });
  clicks(".click-a224",a224,".imga224");
  // a225
  var a225 = new Kinetic.Rect({
      x: 502,
      y: 6,
      width:76,
      height:56
  });
  clicks(".click-a225",a225,".imga225");
  // a226
  var a226 = new Kinetic.Rect({
      x: 617,
      y: 6,
      width:48,
      height:56
  });
  clicks(".click-a226",a226,".imga226");
  // a227
  var a227 = new Kinetic.Rect({
      x: 666,
      y: 6,
      width:43,
      height:56
  });
  clicks(".click-a227",a227,".imga227");
  // a228
  var a228 = new Kinetic.Line({
      points: [754,6, 754,63, 747,63, 747,92, 797,92, 797,6],
      closed: true
  });
  clicks(".click-a228",a228,".imga228");
  // a229
  var a229 = new Kinetic.Line({
      points: [798,6, 798,93, 747,93, 747,135, 887,135, 887,6],
      closed: true
  });
  clicks(".click-a229",a229,".imga229");
  // 230
  var a230 = new Kinetic.Rect({
      x: 747,
      y: 136,
      width:140,
      height:46
  });
  clicks(".click-a230",a230,".imga230");
  // 231
  var a231 = new Kinetic.Rect({
      x: 747,
      y: 183,
      width:139.4,
      height:39.5
  });
  clicks(".click-a231",a231,".imga231");
  // a232
  var a232 = new Kinetic.Line({
      points: [748,223, 748,266, 760,267, 761,273, 771,273, 771,269, 887,269, 887,223],
      closed: true
  });
  clicks(".click-a232",a232,".imga232");
  // a233
  var a233 = new Kinetic.Line({
      points: [772,269.5, 772,295, 767,295, 760,295, 760,301, 748,301, 748,354, 887,354, 887,269.5],
      closed: true
  });
  clicks(".click-a233",a233,".imga233");
  // 220
  var a220 = new Kinetic.Rect({
      x: 578,
      y: 92,
      width:43,
      height:44
  });
  clicks(".click-a220",a220,".imga220");
  // 217
  var a217 = new Kinetic.Rect({
      x: 578,
      y: 137,
      width:43,
      height:50
  });
  clicks(".click-a217",a217,".imga217");
  // a218
  var a218 = new Kinetic.Line({
      points: [622,137, 622,187, 649,187, 682,137],
      closed: true
  });
  clicks(".click-a218",a218,".imga218");
  // 213
  var a213 = new Kinetic.Rect({
      x: 533,
      y: 217,
      width:44,
      height:50
  });
  clicks(".click-a213",a213,".imga213");
  // a211
  var a211 = new Kinetic.Line({
      points: [533,268, 532,312, 565,312, 595,268],
      closed: true
  });
  clicks(".click-a211",a211,".imga211");
  // a210
  var a210 = new Kinetic.Line({
      points: [533,312, 533,357, 536,357, 565,312],
      closed: true
  });
  clicks(".click-a210",a210,".imga210");
  // 206
  var a206 = new Kinetic.Rect({
      x: 406,
      y: 313,
      width:35.5,
      height:43.3
  });
  clicks(".click-a206",a206,".imga206");
  // 208
  var a208 = new Kinetic.Rect({
      x: 442,
      y: 313,
      width:47,
      height:44
  });
  clicks(".click-a208",a208,".imga208");
  // 209
  var a209 = new Kinetic.Rect({
      x: 489.3,
      y: 268,
      width:42.5,
      height:89
  });
  clicks(".click-a209",a209,".imga209");
  //a222
  var a222 = new Kinetic.Shape({
      stroke:"red",
      strokeWidth:3,
      drawFunc: function(context) {
        context.beginPath();
        context.moveTo(357,6);
        context.lineTo(357,119);
        context.quadraticCurveTo(380, 116, 406, 124);

        context.lineTo(440,74);
        context.lineTo(440,6);
        context.strokeStyle = "blue";
        context.closePath();
        context.fillShape(this);
      },
    });
  clicks(".click-a222",a222,".imga222");
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
  clicks(".click-a215",a215,".imga215");
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
  clicks(".click-a219",a219,".imga219");
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
  clicks(".click-a221",a221,".imga221");
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
  clicks(".click-a214",a214,".imga214");
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
  clicks(".click-a212",a212,".imga212");
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
  clicks(".click-a207",a207,".imga207");
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
  clicks(".click-a205",a205,".imga205");
  // k03
  var k03 = new Kinetic.Rect({
      x: 93,
      y: 81,
      width:87,
      height:69
  });
  clicks(".click-k03",k03,".imgk03");
  // k04
  var k04 = new Kinetic.Rect({
      x: 181,
      y: 81,
      width:66,
      height:69
  });
  clicks(".click-k04",k04,".imgk04");
  // k05
  var k05 = new Kinetic.Rect({
      x: 248,
      y: 81,
      width:65,
      height:68
  });
  clicks(".click-k05",k05,".imgk05");
  // a223
  var a223 = new Kinetic.Shape({
      stroke: "red",
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
  clicks(".click-a223",a223,".imga223");
  layer.add(a216,k02,k01,a237,a238,b1300,a204,a203,a201,a236,a235,a234,ws,a224,a225,a226,a227,a228,a229,a230,a231,a232,a233,a220,a217,a218,a213,a211,a210,a206,a208,a209,a222,a215,a219,a221,a214,a212,a207,a205,k03,k04,k05,a223);
  stage.add(layer);
  });