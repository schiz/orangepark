	<?php include("_header.html"); ?>
		<script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&amp;lang=ru-RU" type="text/javascript"> </script>
		<div class="content">
	      <div class="print-contact">
	      	<button>Версия для печати</button>
	      </div>
	      <div class="maps clearfix">
	      	<img src="../images/map1.png" alt="">
	      	<img src="../images/map2.png" alt="">
	      	<div class="clear"></div>
	      </div>
	      <div class="left-blocks-drive">
	      	<div class="block-drive">
	      		<div class="title-drive">
	      			<div class="wrap-img-drive">
	      				<div class="car-drive"></div>
	      			</div>
	      			<span>На машине:</span>
	      		</div>
	      		<div class="desc-drive">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia </div>
	      	</div>
	      	<div class="block-drive">
	      		<div class="title-drive">
	      			<div class="wrap-img-drive">
	      				<div class="parking-drive"></div>
	      			</div>
	      			<span>Парковка:</span>
	      		</div>
	      		<div class="desc-drive">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro </div>
	      	</div>
	      </div>
	      <div class="right-blocks-drive">
	      	<div class="block-drive">
	      		<div class="title-drive">
	      			<div class="wrap-img-drive">
	      				<div class="public-transport-drive"></div>
	      			</div>
	      			<span>Общественным транспортом:</span>
	      		</div>
	      		<div class="desc-drive">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque quasi architecto beatae vitae dicta sunt, explicabo. </div>
	      		<div class="desc-drive">
	      		Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam 
	      		</div>
	      	</div>
	      	<div class="block-drive">
	      		<div class="title-drive">
	      			<div class="wrap-img-drive">
	      				<div class="time-transport-drive"></div>
	      			</div>
	      			<span>Время работы: </span><p>ежедневно с 10.00 до 22.00</p></div>
	      	</div>
	      </div>
	      <div class="clear"></div>
	      <div class="border-width-contact"></div>
	      <div class="get-directions">
	      	<button>Проложить маршрут</button>
	      </div>
	      	<script type="text/javascript">
		        var myMap;
		        ymaps.ready(function () {
		          myMap = new ymaps.Map("map", {
		            center: [55.712135,37.656811],
		            zoom: 16
		          });
		          var myPlacemark = new ymaps.Placemark([55.712135,37.656811], {}, {
		            iconImageHref: '../images/icoMap.png',
		            iconImageSize: [173, 56],
		            iconImageOffset: [-10, -40]
		          });
		          myMap.geoObjects.add(myPlacemark);
		        });
      		</script>
     	 <div id="map" style="width: 100%; height: 381px;"></div>
		</div> <!-- END CONTENT-->	
	<?php include("_footer.html"); ?>