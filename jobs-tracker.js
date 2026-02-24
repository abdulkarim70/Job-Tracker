const totalCount= document.getElementById('total-count');
const allCards=document.getElementById('card-parent-id');
const availableJobsCount=document.getElementById('available-jobs-count');
const allBtn=document.getElementById('all-btn');
const interviewBtn=document.getElementById('interview-btn')
const rejectedBtn=document.getElementById('rejected-btn')
const cardInterviewBtn=document.querySelectorAll('#card-interview-btn')
const cardRejectedBtn=document.querySelectorAll('#card-rejected-btn')
const noJobNotification=document.getElementById('no-jobs-notification')
console.log(noJobNotification)


totalCount.innerText=allCards.children.length
availableJobsCount.innerText=allCards.children.length

