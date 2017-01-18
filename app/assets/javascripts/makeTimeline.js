$(document).ready(function(){
  //get data
  peopleList = JSON.parse($('code').attr('people-list'));
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
      var dateString = '<div id="year'+i+'" class="years" style="left: '+(i*increment+barStart-16)+'px"><p>'+i+'</p><div>';
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
      if(rows[i][k].death !== 2017){
        tableString += '<div content="'+rows[i][k].summary+'"; class="life-span" style="width:'+((rows[i][k].death-rows[i][k].birth)*increment)+'px; position: absolute; left:'+((rows[i][k].birth*increment)+barStart)+'px" >'+ rows[i][k].name+' '+rows[i][k].birth+'-'+rows[i][k].death+'</div>';
      }else{
        tableString += '<div content="'+rows[i][k].sumary+'"; class="life-span" style="border-radius:10px 0px 0px 10px; width:'+((rows[i][k].death-rows[i][k].birth)*increment)+'px; position: absolute; left:'+((rows[i][k].birth*increment)+barStart)+'px" >'+ rows[i][k].name+' '+rows[i][k].birth+'-'+rows[i][k].death+'</div>';
      }
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
  // for (var i = 0; i < rows.length; i++) {
  //   var tableString = '<table><tr>';
  //   var leftMargin = 0;
  //   for (var k = 0; k < rows[i].length; k++) {
  //     leftMargin+=(rows[i][k].birth*increment+barLeft);
  //     tableString += '<td style="width:'+(rows[i][k].death-rows[i][k].birth*increment/barLength)+'px; margin-left:'+leftMargin+'px">'+rows[i][k].name+' '+ rows[i][k].birth+'-'+rows[i][k].death+'<td>';
  //     leftMargin-=(rows[i][k].birth*increment+barLeft)+(rows[i][k].death-rows[i][k].birth*increment/barLength);
  //   }
  //   tableString+'</tr></table>';
  //   $('#display-lifespan').append(tableString);
  // }

  // $('#rows').append(entries);
  // var entries = document.createDocumentFragment();
  // var count = 0;
  // for (var i = 0; i < 1; i++) {
  //   for (var k = 0; k < rows[i].length; k++) {
  //     count ++;
  //     var timelineEntry = document.createElement('div')
  //     timelineEntry.className = 'entryDiv';
  //     timelineEntry.id = 'entryDiv'+count;
  //     $('#entryDiv'+count).css({
  //       width: (rows[i][k].death-rows[i][k].birth*increment/barLength)+'px',
  //       left: (rows[i][k].birth*increment+barLeft)+'px',
  //       top: (barTop+50+50*i)+'px'
  //     })
  //     console.log($('entryDiv'+count).css)
  //     $('#entryDiv'+count).text('<div>'+rows[i][k].name+' '+ rows[i][k].birth+'-'+rows[i][k].death+'</div>')
  //     entries.appendChild(timelineEntry);
  //   }
  // }
  // $('#rows').append(entries);

  // for (var i = 0; i < rows.length; i++) {
  //   var testString = '<li>';
  //   for (var k = 0; k < rows[i].length; k++) {
  //     testString += rows[i][k].name+' '+rows[i][k].birth+' '+rows[i][k].death+' '
  //   }
  //   testString += '</li>'
  //   $('#entries').append(testString);
  // }
  // console.log(increment);

})
