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

d3.json('/data', function(err, confData){
  if (err){
    console.log('failed to get data:' + err);
  }else{
    console.log(confData[0]);
    d3.selectAll('.bar').data(confData)
      .style('height', )
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
