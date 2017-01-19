$(document).ready(function(){
  //get data
  // $.ajax({
  //   type: 'GET',
  //   dataType: "json",
  //   url: $('code').attr('people-list'),
  //   data: data,
  //   success: success
  // });

  peopleList = JSON.parse($('code').attr('people-list'));
  console.log(peopleList);

  //set up timeline
  var firstYear = peopleList[0].birth;
  var lastYear = new Date().getFullYear();
  var barLength = $('#line').width();
  var barTop = $('#line').offset().top;
  var increment = barLength/(lastYear-firstYear);
  var barStart = $('#line').offset().left-firstYear*increment;
  $('#begin-date').text(firstYear);
  $('#end-date').text(lastYear);

  for(var i = firstYear; i<=lastYear; i++){
    if (i % 10 === 0){
      var lineString = '<div id="line'+i+'" style="left: '+(i*increment+barStart)+'px" ';
      if (i%100 === 0){ lineString += 'class="century-line decade-line">' }
      else{ lineString += 'class="decade-line"></div>' }
      $('body').append(lineString);
      var dateString = '<div id="year'+i+'" class="years" style="left: '+(i*increment+barStart-$('.years').width()/2)+'px"><p>'+i+'</p><div>';
      $('body').append(dateString);
    }
  }


  var rows = [[peopleList[0]]];

  for (var i = 1; i < peopleList.length; i++) {
    var inserted = false;
    for (var k = 0; k < rows.length; k++) {
      if (!inserted &&rows[k][rows[k].length-1].death < peopleList[i].birth){
        rows[k].push(peopleList[i]);
        inserted = true;
      }
    }
    if (!inserted){
        rows.push([peopleList[i]]);
    }
  }

  for (var i = 0; i < rows.length; i++) {
    var tableString = '<table><tr><td>';
    var leftMargin = 0;
    for (var k = 0; k < rows[i].length; k++) {
      tableString += '<div id="life-span'+i+k+'" class="life-span" style="';
      if(rows[i][k].death === 2017){ tableString += 'border-radius:10px 0px 0px 10px; width:'+((rows[i][k].death-rows[i][k].birth)*increment)+'px; position: absolute; left:'+((rows[i][k].birth*increment)+barStart)+'px" >'+ rows[i][k].name+' '+rows[i][k].birth+'- </div><div id="summary'+i+k+'" class="summary"><p>'+rows[i][k].summary+'</p></div>'; }
      else{ tableString += 'width:'+((rows[i][k].death-rows[i][k].birth)*increment)+'px; position: absolute; left:'+((rows[i][k].birth*increment)+barStart)+'px" >'+ rows[i][k].name+' '+rows[i][k].birth+'-'+rows[i][k].death+'</div><div id="summary'+i+k+'" class="summary"><p>'+rows[i][k].summary+'</p></div>';}
    }
    tableString+'<td></tr></table>';
    $('#display-lifespan').append(tableString);
  }

  $('.decade-line').hover(function(){
    var id = $(this).attr('id').match(/\d+/)[0];
    $('#year'+id).show();
  },function(){
    var id = $(this).attr('id').match(/\d+/)[0];
    $('#year'+id).hide();
  })
})
