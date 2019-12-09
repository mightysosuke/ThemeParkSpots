function initViewMap() {
  // マップの初期化
  var map = displayMap();
  // gonを使用してplaceの値を取得

  for (var i in gon.places) {
    var lat = Number(gon.places[i].latitude);
    var lng = Number(gon.places[i].longitude);

    var latLng = {lat, lng};

    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

}

function initNewMap() {
    // マップの初期化
    var map = displayMap();

    // クリックイベントを追加
    map.addListener('click', function(e) {
      getClickLatLng(e.latLng, map);
    });

    var marker;

    // マーカーを設置
    function placeMarker(lat_lng) {
      if ( marker ) {
        marker.setPosition(lat_lng);
      } else {
        marker = new google.maps.Marker({
          position: lat_lng,
          map: map
        });
      }
    }

    google.maps.event.addListener(map, 'click', function(e) {
      placeMarker(e.latLng);
    });
  }

  function getClickLatLng(lat_lng, map) {

    // 座標を表示
    document.getElementById('lat').value = lat_lng.lat();
    document.getElementById('lng').value = lat_lng.lng();

    // 座標の中心をずらす
    // http://syncer.jp/google-maps-javascript-api-matome/map/method/panTo/
    map.panTo(lat_lng);
  }

function displayMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 35.6263164, lng: 139.8852073},
    mapTypeId: 'satellite'
  });
  return map;
}
