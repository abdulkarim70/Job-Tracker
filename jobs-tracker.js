const totalCount= document.getElementById('total-count');
const allCards=document.getElementById('card-parent-id');
const availableJobsCount=document.getElementById('available-jobs-count');
const allBtn=document.getElementById('all-btn');
const interviewBtn=document.getElementById('interview-btn')
const rejectedBtn=document.getElementById('rejected-btn')
const cardInterviewBtn=document.querySelectorAll('#card-interview-btn')
const cardRejectedBtn=document.querySelectorAll('#card-rejected-btn')
const noJobNotification=document.getElementById('no-jobs-notification')
const deleteBtn=document.getElementsByClassName('delete-btn')


allCards.addEventListener('click', function(event){
    const deleteButton=event.target.closest('.delete-btn')
    if(deleteButton){

deleteButton.closest('.delete-btn').remove()
    }

})



totalCount.innerText=allCards.children.length
availableJobsCount.innerText=allCards.children.length

