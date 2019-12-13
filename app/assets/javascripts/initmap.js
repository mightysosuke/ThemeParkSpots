var marker = [];
var infoWindow = [];
var currentInfoWindow = null;

function initViewMap() {
  // マップの初期化
  var map = displayMap();
  // gonを使用してplaceの値を取得
  for (var i in gon.places) {
    var lat = Number(gon.places[i].latitude);
    var lng = Number(gon.places[i].longitude);
    var latLng = {lat, lng};
    var name = gon.places[i].name;
    var dsc = gon.places[i].description;
    var content = name +
                  '<br>' +
                  dsc;

    marker[i] = new google.maps.Marker({
      position: latLng,
      map: map
    });

    infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
      content: content // 名称と詳細
    });

    markerEvent(i); // マーカーにクリックイベントを追加
  }
  function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
      currentInfoWindow = infoWindow[i];
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

function initShowMap() {
  var lat = Number(gon.lat);
  var lng = Number(gon.lng);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: {lat: lat, lng: lng},
    mapTypeId: 'satellite'
  });

  var latLng = {lat, lng};

  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}
