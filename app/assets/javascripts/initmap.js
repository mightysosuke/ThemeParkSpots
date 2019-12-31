var marker = [];
var infoWindow = [];
var currentInfoWindow = null;

// マーカーが一覧として表示されるマップを表示
function initViewMap() {
  var map = displayMap();

  // gonを使用してplaceの値を取得
  for (var i in gon.places) {
    var lat = Number(gon.places[i].latitude);
    var lng = Number(gon.places[i].longitude);
    var latLng = {lat, lng};
    var name = gon.places[i].name;
    var dsc = gon.places[i].description;

    // イメージが登録されていない場合、ウインドウに表示しない
    if (gon.url[i] == null) {
      var content = '<div class="window-box"><h5 class="under">' + name + '</h5>' +
                    '<div class="border rounded m-2 p-2"><p>' +
                    dsc +
                    '</p></div>' +
                    '</div>';
    } else {
      var content = '<div class="window-box"><h5 class="under">' + name + '</h5>' +
                    '<div class="border rounded m-2 p-2"><p>' +
                    dsc +
                    '</p></div>' +
                    '<img src="'+gon.url[i]+'" class="window-image" /></div>'; // イメージのURLを取得して代入
    }

    // マーカーの追加
    marker[i] = new google.maps.Marker({
      position: latLng,
      map: map
    });

    // 吹き出しの追加
    infoWindow[i] = new google.maps.InfoWindow({
      content: content,
      width: 250
    });
    markerEvent(i);
  }

  // マーカーのクリックイベント
  function markerEvent(i) {
    // マーカーをクリックしたとき
    marker[i].addListener('click', function() {
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }
      // 吹き出しを表示する
      infoWindow[i].open(map, marker[i]);
      currentInfoWindow = infoWindow[i];
    });
  }
}

// 新規投稿を追加する時のマップを表示
function initNewMap() {
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

// 投稿を編集する時のマップを表示
function initEditMap() {
  var map = displayMap();

  var lat = Number(gon.lat);
  var lng = Number(gon.lng);
  var latLng = {lat, lng};

  marker = new google.maps.Marker({
    position: latLng,
    map: map
  });

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

// クリックした箇所の座標に合わせて中心をずらす
function getClickLatLng(lat_lng, map) {

  // 座標を表示
  document.getElementById('lat').value = lat_lng.lat();
  document.getElementById('lng').value = lat_lng.lng();

  // 座標の中心をずらす
  map.panTo(lat_lng);
}

// マップを表示するだけ
function displayMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 35.6263164, lng: 139.8852073},
    mapTypeId: 'satellite'
  });
  return map;
}

// 投稿詳細画面のマップを表示
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
