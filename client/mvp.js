var stats = [[true],[],[],[],[],[],[],[],[],[],[]];

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
    var truth = $form.find('input').val();
    var url = $form.attr('action');
    console.log(perc + " " + truth + " " + url);

    $.post(url, {
      perc: perc,
      truth: truth
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
    //console.log(confData[0]);
    d3.selectAll('.bar').data(confData)
      .style('height', function(d){
        
        // var corrects = 0;
        // for (var i = 0; i < d.length; i++){
        //   if (d[i] == true){
        //     corrects++;
        //   }
        // }
        // return Math.floor((corrects / d.length) * 300) + 'px';
        return heightFromData(d) + 'px';
      })
      // .style('bottom', function(d){
      //   return -300 + heightFromData(d) + 'px';
      // });
  }
  console.log(confData);
})

d3.selectAll("div.bar").data(stats).style('height', function(d){
  console.log("Dee Dee Dee")
  var corrects = 0;
  for (var i = 0; i < d.length; i++){
    if (d[i] == true){
      corrects++;
    }
  }
  return Math.floor((corrects / d.length) * 300) + 'px';
});
