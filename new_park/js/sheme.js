$(document).ready(function(){
	var stage = new Kinetic.Stage({
        container: 'canvas',
        width: 990,
        height: 540
      });
    var layer = new Kinetic.Layer();

    function mouseover(e){
    	e.fill("#ff0000");
        layer.draw();
        document.body.style.cursor = 'pointer';
    }
    function mouseout(e) {
        e.fill('transparent');
        layer.draw();
        document.body.style.cursor = 'default';
    }

	// 216
	var a216 = new Kinetic.Rect({
        x: 533,
        y: 137,
        width:44,
        height:51
    });
    a216.on('mouseover', function() {
        mouseover(this);
    });
    a216.on('mouseout', function() {
        mouseout(this);
    });

    // k02 
    var k02 = new Kinetic.Line({
      	points: [ 80, 151, 80, 180, 61, 180, 61, 210, 137, 210, 137, 151],
      	closed: true
    });
    k02.on('mouseover', function() {
        mouseover(this);
    });
    k02.on('mouseout', function() {
        mouseout(this);
    });

    // k01
    var k01 = new Kinetic.Rect({
      	x: 61,
        y: 211,
        width:76,
        height:58
    });
    k01.on('mouseover', function() {
    	mouseover(this);
    });
    k01.on('mouseout', function() {
       mouseout(this);
    });

	layer.add(a216,k02,k01);
    stage.add(layer);

	// // к 01
	// c.beginPath();
	// c.fillRect(60,209,77,60);  		
	// c.strokeRect(60,209,77,60); 		
	// c.stroke();

	// //237
	// c.beginPath();
	// c.moveTo(138,266);		
	// c.lineTo(138,270);
	// c.lineTo(119,270);
	// c.lineTo(119,311);
	// c.lineTo(235,311);
	// c.lineTo(235,266);
	// c.fill();  
	// c.closePath(); 
	// c.stroke();

	// //237
	// c.beginPath();
	// c.moveTo(236,266);		
	// c.lineTo(236,311);
	// c.lineTo(301,311);
	// c.lineTo(283,266);
	// c.fill();  
	// c.closePath(); 
	// c.stroke();

	// //1300
	// c.beginPath();
	// c.moveTo(48,269);		
	// c.lineTo(48,357); 
	// c.lineTo(48,357); 
	// c.lineTo(6,357); 
	// c.lineTo(6,445); 
	// c.lineTo(43,445); 
	// c.lineTo(43,468); 
	// c.lineTo(55,468); 
	// c.lineTo(55,534); 
	// c.lineTo(330,534); 
	// c.lineTo(330,389); 
	// c.lineTo(301,312); 
	// c.lineTo(120,312); 
	// c.lineTo(120,269);
	// c.fill();  
	// c.closePath(); 
	// c.stroke();

	// // 204
	// c.beginPath();
	// c.fillRect(331,390,70,56);  		
	// c.strokeRect(331,390,70,56); 		
	// c.stroke();

	// // 203
	// c.beginPath();
	// c.moveTo(401,390);
	// c.lineTo(401,446);		
	// c.lineTo(331,446);		
	// c.lineTo(331,532);		
	// c.lineTo(448,532);		
	// c.lineTo(448,390);
	// c.fill();   				  		 	
	// c.closePath();	
	// c.stroke();

	// // 201
	// c.beginPath();
	// c.moveTo(489,390);
	// c.lineTo(489,445);	
	// c.lineTo(515,445);			
	// c.lineTo(544,403);			
	// c.lineTo(538,390);
	// c.fill(); 		 	
	// c.closePath();	
	// c.stroke();

	// // 236
	// c.beginPath();
	// c.moveTo(611,401);
	// c.lineTo(588,434);		
	// c.lineTo(575,434);		
	// c.lineTo(575,453);		
	// c.lineTo(533,517);		
	// c.lineTo(533,532);		
	// c.lineTo(622,532);		
	// c.lineTo(622,501);		
	// c.lineTo(666,437);		
	// c.lineTo(666,401);
	// c.fill();  		 	
	// c.closePath();	
	// c.stroke();

	// // 235
	// c.beginPath();
	// c.moveTo(666,401);
	// c.lineTo(666,437);
	// c.lineTo(622,501);			
	// c.lineTo(622,532);			
	// c.lineTo(709,532);			
	// c.lineTo(709,401);
	// c.fill();   		 	
	// c.closePath();	
	// c.stroke();

	// // 234
	// c.beginPath();
	// c.moveTo(747,354);
	// c.lineTo(747,489);		
	// c.lineTo(778,489);		
	// c.lineTo(778,503);		
	// c.lineTo(841,503);		
	// c.lineTo(841,489);		
	// c.lineTo(868,489);		
	// c.lineTo(868,397);		
	// c.lineTo(887,397);		
	// c.lineTo(887,354);
	// c.fill();  		 	
	// c.closePath();	
	// c.stroke();

	// // wc
	// c.beginPath();
	// c.moveTo(269,5);
	// c.lineTo(269,63);		
	// c.lineTo(298,63);		
	// c.lineTo(298,50);	
	// c.lineTo(331,50);		
	// c.lineTo(331,63);		
	// c.lineTo(357,63);		
	// c.lineTo(357,5);
	// c.fill();  		 	
	// c.closePath();	
	// c.stroke();

	// // 224
	// c.beginPath();
	// c.moveTo(441,5);
	// c.lineTo(441,75);				
	// c.lineTo(477,100);				
	// c.lineTo(502,64);				
	// c.lineTo(502,5);
	// c.fill();  		 	
	// c.closePath();	
	// c.stroke();

	// // 225
	// c.beginPath();
	// c.fillRect(502,5,78,58);  		
	// c.strokeRect(502,5,78,58); 		
	// c.stroke();

	// // 226
	// c.beginPath();
	// c.fillRect(617,5,49,58);  		
	// c.strokeRect(617,5,49,58); 		
	// c.stroke();

	// // 227
	// c.beginPath();
	// c.fillRect(665,5,45,58);  		
	// c.strokeRect(665,5,45,58); 		
	// c.stroke();

	// // 228
	// c.beginPath();
	// c.moveTo(754,5);
	// c.lineTo(754,63);							
	// c.lineTo(747,63);							
	// c.lineTo(747,92);							
	// c.lineTo(797,92);							
	// c.lineTo(797,5);  				
	// c.fill(); 		 	
	// c.closePath();	
	// c.stroke();

	// // 229
	// c.beginPath();
	// c.moveTo(797,5);							
	// c.lineTo(797,92);							
	// c.lineTo(747,92);							
	// c.lineTo(747,136);
	// c.lineTo(887,136);							
	// c.lineTo(887,5);
	// c.fill();   				  		 	
	// c.closePath();	
	// c.stroke();

	// // 230
	// c.beginPath();						
	// c.fillRect(747,136,140,46);  		
	// c.strokeRect(747,136,140,46);
	// c.stroke();

	// // 231
	// c.beginPath();						
	// c.fillRect(747,182,140,41);  		
	// c.strokeRect(747,182,140,41);
	// c.stroke();

	// // 232
	// c.beginPath();
	// c.moveTo(747,223);
	// c.lineTo(747,266);
	// c.lineTo(760,266);				
	// c.lineTo(760,273);	
	// c.lineTo(771,273);	
	// c.lineTo(771,269);	
	// c.lineTo(887,269);
	// c.lineTo(887,223);
	// c.fill();  	 	
	// c.closePath();	
	// c.stroke();

	// // 233
	// c.beginPath();
	// c.moveTo(772,268);		
	// c.lineTo(772,295);								
	// c.lineTo(767,295);								
	// c.lineTo(760,295);								
	// c.lineTo(760,300);								
	// c.lineTo(747,300);								
	// c.lineTo(747,355);								
	// c.lineTo(887,355);							
	// c.lineTo(887,268);			
	// c.fill();   						 	
	// c.closePath();	
	// c.stroke();

	// // 220
	// c.beginPath();						
	// c.fillRect(577,92,45,45);  		
	// c.strokeRect(577,92,45,45);
	// c.stroke();

	// // 217
	// c.beginPath();						
	// c.fillRect(577,137,45,51);  		
	// c.strokeRect(577,137,45,51); 		 	
	// c.stroke();

	// // 218
	// c.beginPath();						
	// c.moveTo(622,137);
	// c.lineTo(622,188); 								
	// c.lineTo(650,188); 
	// c.lineTo(683,137);								
	// c.fill(); 				 		 	
	// c.closePath();	
	// c.stroke();

	// // 213
	// c.beginPath();							
	// c.fillRect(533,217,44,51);  		
	// c.strokeRect(533,217,44,51); 		 	
	// c.stroke();

	// // 211
	// c.beginPath();						
	// c.moveTo(533,268);
	// c.lineTo(533,312); 								
	// c.lineTo(566,312); 
	// c.lineTo(596,268);	 				
	// c.fill();		 	
	// c.closePath();	
	// c.stroke();

	// // 210
	// c.beginPath();							
	// c.moveTo(533,312);
	// c.lineTo(533,357); 								
	// c.lineTo(537,357); 
	// c.lineTo(566,312);				
	// c.fill(); 		 	
	// c.closePath();	
	// c.stroke();

	// // 206
	// c.beginPath();							
	// c.fillRect(406,313,36,44);  		
	// c.strokeRect(406,313,36,44);   		 	
	// c.stroke();

	// // 208
	// c.beginPath();							
	// c.fillRect(442,313,47,44);  		
	// c.strokeRect(442,313,47,44);  		 	
	// c.stroke();

	// // 209
	// c.beginPath();							
	// c.fillRect(489,268,43,89);  		
	// c.strokeRect(489,268,43,89);  		 	
	// c.stroke();

	// // 222
	// c.beginPath();							
	// c.moveTo(357,6);
	// c.lineTo(357,119);
	// c.quadraticCurveTo(380, 116, 406, 124);
	// c.lineTo(440,74);				
	// c.lineTo(440,6);				
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 223
	// c.beginPath();							
	// c.moveTo(441,74);
	// c.lineTo(406,125);
	// c.quadraticCurveTo(428, 133, 442, 151);	
	// c.lineTo(476,99);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 215
	// c.beginPath();							
	// c.moveTo(488,137);
	// c.lineTo(469,164);
	// c.quadraticCurveTo(455, 182, 474, 188);	
	// c.lineTo(533,188);
	// c.lineTo(533,137);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 219
	// c.beginPath();							
	// c.moveTo(488,137);
	// c.lineTo(577,137);
	// c.lineTo(577,92);
	// c.lineTo(534,92);
	// c.quadraticCurveTo(516, 93, 506, 111);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 221
	// c.beginPath();							
	// c.moveTo(621,93);
	// c.lineTo(682,93);
	// c.quadraticCurveTo(705, 97, 693,121);
	// c.lineTo(681,137);
	// c.lineTo(621,137);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 214
	// c.beginPath();							
	// c.moveTo(577,217);
	// c.lineTo(593,217);
	// c.quadraticCurveTo(620, 220, 612,243);
	// c.lineTo(595,268);
	// c.lineTo(577,268);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 212
	// c.beginPath();							
	// c.moveTo(464,217);
	// c.lineTo(533,217);
	// c.lineTo(533,267);
	// c.lineTo(437,267);
	// c.quadraticCurveTo(457, 244, 464,217);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 207
	// c.beginPath();							
	// c.moveTo(436,268);
	// c.lineTo(488,268);
	// c.lineTo(488,313);
	// c.lineTo(406,313);
	// c.lineTo(406,286);
	// c.quadraticCurveTo(420, 279, 436,268);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

	// // 205
	// c.beginPath();							
	// c.moveTo(378,288);
	// c.lineTo(378,357);
	// c.lineTo(405,357);
	// c.lineTo(405,286);
	// c.quadraticCurveTo(393,290,380,289);
	// c.fill(); 		 
	// c.closePath();	
	// c.stroke();

		// c.beginPath();
	// c.fillStyle = "rgba(255,255,255,.7)";   			
	// c.fillRect(545,152,20,20);  		 
	// c.stroke();

	// c.beginPath();
	// c.fillStyle = "rgba(255,0,0,.7)";   				 
	// c.strokeStyle = "black";   		 	 
	// c.lineWidth = 0.4;
	// c.fillRect(93,81,87,69);  		 
	// c.strokeRect(93,81,87,69); 		 
	// c.stroke();

	// c.beginPath();
	// c.fillRect(181,81,66,69);  		
	// c.strokeRect(181,81,66,69); 		
	// c.stroke();

	// c.beginPath();
	// c.fillRect(248,81,66,69);  		
	// c.strokeRect(248,81,66,69); 		
	// c.stroke();

	// c.beginPath();
	// c.fillStyle = "rgba(255,0,0,.7)";   		
	// c.strokeStyle = "black";   		
	// c.lineWidth = 1;
	// c.fillRect(533,137,44,51);  
	// c.strokeRect(533,137,44,51); 
	// c.stroke();

    });