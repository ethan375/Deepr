
$(document).ready(()=>{
  $('.upvote').on('click', function(){
    console.log("button run and loggin this");
    console.log(this);
    $(this).attr('src', 'https://i.imgur.com/gSqfwcG.png')
    console.log("up arrow being run")
    runAjaxCall(this.id)
  })
})

const runAjaxCall = (id) => {

  $.ajax({
    url: '/home/vote/' + id,
    method: 'POST',
    success: (votes) => {
      console.log(votes)
      // $(div).putthenumberinthere
    }, 
    error: (err) => {
      console.log(err)
    } 
  })


}

$(document).ready(()=>{
  $('.downvote').on('click', function(){
    console.log("down arrow being run")
    $(this).attr('src', 'https://i.imgur.com/gSqfwcG.png')
    runAjaxCall(this.id)
  })
})

const ajaxCall = (id)=>{

  $.ajax({
    url: '/home/downvote/' + id,
    method: 'POST',
    success: (votes) => {
      console.log(votes)
      // $(div).putthenumberinthere
    }, 
    error: (err) => {
      console.log(err)
    } 
  })
}

