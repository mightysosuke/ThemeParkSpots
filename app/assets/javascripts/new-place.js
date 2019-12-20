// 初期表示時に、エリア選択を不可にする
$('.new-area').prop('disabled', true);

var $area = $('.new-park'); //パークの要素を変数に入れる
var options = $('.new-area').find('option');

$('.new-park').change(function() {

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
  });

  //エリアの選択肢が１つしかない場合は、自動的に選択された状態に変更
  if(option_count == 1){
    option_select.prop('selected', true);
  }

  //エリアセレクトを選択可能に
  $('.new-area').prop('disabled', false);

});
