// console.log("This is a log from the client app file in public folder")

// $(document).ready(()=>{
//   $('.up-vote').on('click', function(){
//       url:'/home/vote/:id',
//       method:'GET'
//   })
// })

$(document).ready(()=>{
  $('.up-vote').on('click', function(){
    console.log("the ajax call is being run")
    url:'/home/vote/:id'
    // method: 'GET'
  })
})