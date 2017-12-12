$(()=>{
    $('.header').load('search.html')//,()=>{
//        $(".head").on('click','[data-trigger=search]',function(){
//            var $input=$(this).prev("input")
//            if($input.val().trim()!=='')
//                location='products.html?kw='+$input.val().trim()
//            else
//                location='products.html'
//        })
//        $(".head").on('keyup','.txtSearch',e=>{
//            var $tar=$(e.target),
//                $shelper=$tar.prev()
//           $(".head input").val($tar.val())
//            switch(e.keyCode){
//                case 13:
//                    $tar.next().click()
//                    break;
//                case 38:
//                    if(!shelper.is(':has(.focus)'))
//                    $shelper.children().last().addClass('focus')
//                    else if($shelper.children().first().is('.focus'))
//                    $shelper.children().removeClass('focus')
//                        .last().addClass('focus')
//                    else
//                    $shelper.children('.focus').removeClass('focus')
//                        .prev().addClass('focus')
//                    $(".head input").val(
//                        $shelper.children('.focus').children().first().html())
//                    break;
//                case 40:
//                    if(!shelper.is(':has(.focus)'))
//                    $shelper.children().first().addClass('focus')
//                    else if($shelper.children().last().is('.focus')
//                    $shelper.children().removeClass()
//                        .first().addClass('focus')
//                    else
//                        $shelper.children('.focus').removeClass()
//                            .next().addClass('focus')
//                    $("head input").val(
//                        $shelper.children('.focus').children().first().html())
//                    break;
//                default:
//                  if($tar.val.trim()!==''){
//                      $.get(
//                          'data/autocomplete.php',
//                          {term:$tar.val().trim()}
//                      ).then(data=>{
//                              if(data.length!==0) {
//                                  var html = ''
//                                  for (var p of data) {
//                                      html += `<li title="${p.label}">
//		              			<div class="search-item" title="${p.label}">${p.label}</div></li>`;
//                                  }
//                                  $shelper.html(html).show()
//                              }else{$shelper.hide()}
//                          })
//                  }else{
//                      $('.head .shelper').hide()
//                  }
//            }
//        })
//        var search=location.search
//        if(search.indexOf('kw')!=-1)
//            $("head input").val(decodeURL(search.split('=')[1]))
//    })
})
