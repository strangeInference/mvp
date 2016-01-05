var stats = [[],[],[],[],[],[],[],[],[],[],[]];

// $(document).ready(function(){

//   $(".submit").on('click', function(){
//     console.log("we can click")
//     stats[$('select').val()].push($('form :radio').val());
//     console.log(stats[$('select').val()]);
//   })
// })
// console.log('hi');
// $("form :submit").on('click', function(){
//     console.log('hi');
//     stats[$('select').val()].push($('form :radio').val());
//     console.log(stats[$('select').val()]);
//   })

$(document).ready(function(){
  $('.reality').submit(function(event){
    event.preventDefault();
    var $form = $(this);
    var perc = $form.find('select').val();
    var truth = $form.find('input[name=yn]:checked').val();
    truth = Number(truth);
    var url = $form.attr('action');
    console.log(perc + " " + truth + " " + url);
    stats[perc].push(truth);
    //console.log(stats);

    // d3.selectAll(".bar").data(stats).style('height', function(d){
    //   console.log("Dee Dee Dee")
    //   var corrects = 0;
    //   for (var i = 0; i < d.length; i++){
    //     if (d[i] == true){
    //       corrects++;
    //     }
    //   }
    //   return Math.floor((corrects / d.length) * 300) + 'px';
    // });
    var data = JSON.stringify({
      perc: perc,
      truth: truth
    });

    $.ajax('/data',{
      'data': data, 
      'type': 'POST',
      'processData': false,
      'contentType': 'application/json' 
    });
  });
});

var heightFromData = function(array){
  console.log("Dee Dee Dee func")
  var corrects = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] == true){
      corrects++;
    }
  }
  return Math.floor((corrects / array.length) * 300);
};

d3.json('/data', function(err, confData){
  if (err){
    console.log('failed to get data:' + err);
  }else{
    console.log(confData);
    d3.selectAll('.bar').data(confData)
      .style('height', function(d){
      
        return heightFromData(d) + 'px';
      })
      // .style('bottom', function(d){
      //   return -300 + heightFromData(d) + 'px';
      // });
  }
 // console.log(confData);
})

d3.selectAll(".bar").data(stats).style('height', function(d){
  console.log("Dee Dee Dee")
  var corrects = 0;
  for (var i = 0; i < d.length; i++){
    if (d[i] == true){
      corrects++;
    }
  }
  return Math.floor((corrects / d.length) * 300) + 'px';
});
