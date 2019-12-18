$(document).ready(function(){
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	    mapOption = {
	        center: new kakao.maps.LatLng(37.503123, 127.024302), // 지도의 중심좌표
	        level: 3, // 지도의 확대 레벨
	        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
	    };
	// 지도를 생성한다
	var map = new kakao.maps.Map(mapContainer, mapOption);
	// 지도에 마커를 생성하고 표시한다
	var marker = new kakao.maps.Marker({
	    position: new kakao.maps.LatLng(37.503123, 127.024302), // 마커의 좌표
	    map: map // 마커를 표시할 지도 객체
	});
    var infowindow = new kakao.maps.InfoWindow({
		    content : '<div style="padding:3px; width ">점프투코딩</div>' // 인포윈도우에 표시할 내용
		});

		// 인포윈도우를 지도에 표시한다
		infowindow.open(map, marker);

});
