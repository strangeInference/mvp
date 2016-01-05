var stats = [[],[],[],[],[],[],[],[],[],[],[]];

// document.ready(function(){

//   $(".submit").on('click', function(){
//     stats[$('select').val()].push($('form :radio').val());
//     console.log(stats[$('select').val()]);
//   })
// })
console.log('hi');
$("form :submit").on('click', function(){
    console.log('hi');
    stats[$('select').val()].push($('form :radio').val());
    console.log(stats[$('select').val()]);
  })
