<?php include("_header.html"); ?>
		<div class="content">
			<div class="top-content">
		      	<div class="content-title">
		        	<h1>Как добраться</h1>
		      	</div>    
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
     	 <div class="left-blocks-drive">
	      	<div class="block-drive">
	      		<div class="title-drive">
	      			<div class="wrap-img-drive">
	      				<div class="car-drive"></div>
	      			</div>
	      			<span>На машине:</span>
	      		</div>
	      		<div class="desc-drive">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat </div>
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
	      		<div class="desc-drive">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed</div>
	      		<div class="desc-drive">
	      		adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse
	      		</div>
	      	</div>
	      </div>
	      <div class="clear"></div>
		</div> <!-- END CONTENT-->	
<?php include("_footer.html"); ?>