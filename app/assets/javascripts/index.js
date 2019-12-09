function initMap() {
  // マップの初期化
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 35.6263077, lng: 139.88505728},
    mapTypeId: 'satellite'
  });
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
