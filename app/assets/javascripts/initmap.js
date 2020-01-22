let marker = [];
let infoWindow = [];
let currentInfoWindow = null;

// マーカーが一覧として表示されるマップを表示
function initViewMap() {
  let map = displayMap();

  // gonを使用してplaceの値を取得
  for (let i in gon.places) {
    let lat = Number(gon.places[i].latitude);
    let lng = Number(gon.places[i].longitude);
    let latLng = {lat, lng};
    let name = gon.places[i].name;
    let dsc = gon.places[i].description;

    // ウィンドウに表示するコンテンツ
    let content = '<div class="window-box"><h5 class="under">' + name + '</h5>' +
                  '<img src="'+gon.url[i]+'" class="window-image" /></div>'; // イメージのURLを取得して代入


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
  let map = displayMap();

  // クリックイベントを追加
  map.addListener('click', function(e) {
    getClickLatLng(e.latLng, map);
  });

  let marker;

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
  let map = displayMap();

  let lat = Number(gon.lat);
  let lng = Number(gon.lng);
  let latLng = {lat, lng};

  marker = new google.maps.Marker({
    position: latLng,
    map: map
  });

  // クリックイベントを追加
  map.addListener('click', function(e) {
    getClickLatLng(e.latLng, map);
  });

  let marker;

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
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 35.6263164, lng: 139.8852073},
    mapTypeId: 'satellite'
  });
  return map;
}

// 投稿詳細画面のマップを表示
function initShowMap() {
  let lat = Number(gon.lat);
  let lng = Number(gon.lng);
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: {lat: lat, lng: lng},
    mapTypeId: 'satellite'
  });

  let latLng = {lat, lng};

  let marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}
