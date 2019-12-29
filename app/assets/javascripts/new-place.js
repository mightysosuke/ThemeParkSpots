// 初期表示時に、エリア選択を不可に(disabledの付加)
$('.new-area').prop('disabled', true);

// パークの要素を変数に入れる
var $area = $('.new-park');
var options = $('.new-area').find('option');

$('.new-park').change(function() {

    // エリアセレクトの初期化
  $.each(options,function(index,value){
    $(value).removeAttr('selected');
    if($(value).data('val') == 'default'){
        $(value).prop('selected', true);
    }
    $(value).show();
  });

  // 選択されたパークのvalueを取得し変数に入れる
  var val1 = $(this).val();

  // エリア選択肢カウンタ
  var option_count = 0;
  // エリア選択肢が1つだったとき用の保存変数
  var option_select = '';

  // エリア選択肢の表示切り替え
  $.each(options,function(index,value){
    var area_option = $(value);

    if(area_option.data('val') == 'default'){
      // 初期値選択肢用（-- エリア --）
      area_option.prop('selected', true);
    }else if(area_option.data('val') == val1){
      // 選択されたパークに当てはまる場合はカウントを増やし、option_selectに格納
      option_count++;
      option_select = area_option;
    }else{
      // 選択されたパークにあてはまらない場合は、隠す
      area_option.hide();
    }
  });

  // エリアの選択肢が１つしかない場合は、自動的に選択された状態に変更
  if(option_count == 1){
    option_select.prop('selected', true);
  }

  // エリアセレクトを選択可能に(disabledの削除)
  $('.new-area').prop('disabled', false);

});

$('.custom-file-input').on('change', handleFileSelect);
function handleFileSelect(evt) {
        $('#preview').remove();// 繰り返し実行時の処理
        $(this).parents('.input-photo').after('<div id="preview" class="row"><div class="offset-md-1"></div></div>');

    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                if (theFile.type.match('image.*')) {
                    var $html = ['<div class="d-inline-block mr-1 mt-1"><img class="img-thumbnail mx-auto d-block" src="', e.target.result,'" title="', escape(theFile.name), '" style="height:100px;" /><div class="small text-muted text-center">', escape(theFile.name),'</div></div>'].join('');// 画像では画像のプレビューとファイル名の表示
                } else {
                    var $html = ['<div class="d-inline-block mr-1"><span class="small">', escape(theFile.name),'</span></div>'].join('');//画像以外はファイル名のみの表示
                }

                $('#preview').append($html);
            };
        })(f);

        reader.readAsDataURL(f);
    }
    $(this).next('.custom-file-label').html(+ files.length + '個のファイルを選択しました');
}

// ファイルの取消
$('.reset').click(function(){
    $(this).parent().prev().children('.custom-file-label').html('ファイル選択...');
    $('#preview').remove();
    $('.custom-file-input').val('');
})
