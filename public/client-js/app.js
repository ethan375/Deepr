
$(document).ready(()=>{
  $('.up-vote').on('click', function(){
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
      $('#diplayVotes').html(<%=posts[i].votes%>)
    }, 
    error: (err) => {
      console.log(err)
    } 
  })


}

$(document).ready(()=>{
  $('.downvote').on('click', function(){
    console.log("down arrow being run")
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

