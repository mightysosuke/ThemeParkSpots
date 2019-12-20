// データベースに登録されているエリアが選択されている状態にする

// 初期表示時に、エリア選択を不可にする
$('.edit-area').prop('disabled', true);

var $area = $('.edit-park'); //パークの要素を変数に入れる
var options = $('.edit-area').find('option');

$('.edit-park').change(function() {

    //エリアセレクトの初期化
  $.each(options,function(index,value){
    $(value).removeAttr('selected');
    if($(value).data('val') == 'default'){
        $(value).prop('selected', true);
    }
    $(value).show();
  });

  //選択されたパークのvalueを取得し変数に入れる
  var val1 = $(this).val();

  //エリア選択肢カウンタ
  var option_count = 0;
  //エリア選択肢が１つだったとき用の保存変数
  var option_select = '';

    //エリア選択肢の表示切り替え
  $.each(options,function(index,value){
    var area_option = $(value);

    // if (index == 0) {
    //   $(area_option[3]).prop('selected', true);
    // }

    if(area_option.data('val') == 'default'){
      //初期値選択肢用（-- エリア --）
      area_option.prop('selected', true);
    }else if(area_option.data('val') == val1){
      //選択されたパークに当てはまる場合はカウントを増やし、option_selectに格納
      option_count++;
      option_select = area_option;
    }else{
      //選択されたパークにあてはまらない場合は、隠す
      area_option.hide();
    }

    if(option_count == 1){
      option_select.prop('selected', true);
    }

  });

  //エリアセレクトを選択可能に
  $('.edit-area').prop('disabled', false);

});
