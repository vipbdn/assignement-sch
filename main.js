let parentFormEl = document.getElementById('parentLogin')
let studentFormEl = document.getElementById('studentLogIn')
let schoolEl = document.getElementById("school")
let competetiveEl = document.getElementById("competetive")
let enteranceEl = document.getElementById("enterance")
let tutorEl = document.getElementById("tutor")
let schoolBtnEl = document.getElementById('schoolBtn')
let competetiveBtnEl = document.getElementById('competetiveBtn')
let enteranceBtnEl = document.getElementById('enteranceBtn')
let tutorBtnEl = document.getElementById('tutorBtn')


function showStudentLogin(){
    parentFormEl.style.display="none"
   studentFormEl.style.display ='block'

}


function showParentLogin(){
   parentFormEl.style.display="block"
   studentFormEl.style.display ='none'
    
}



function school(){
    schoolEl.style.display='block'
    tutorEl.style.display='none'
    competetiveEl.style.display='none'
    enteranceEl.style.display='none'

    schoolBtnEl.classList.add('active')
    competetiveBtnEl.classList.remove('active')
    enteranceBtnEl.classList.remove('active')
    tutorBtnEl.classList.remove('active')

}

function competetive(){
    schoolEl.style.display='none'
    tutorEl.style.display='none'
    competetiveEl.style.display='block'
    enteranceEl.style.display='none'

    schoolBtnEl.classList.remove('active-btn')
    competetiveBtnEl.classList.add('active-btn')
    enteranceBtnEl.classList.remove('active-btn')
    tutorBtnEl.classList.remove('active-btn')
    
}

function enterance(){
    schoolEl.style.display='none'
    tutorEl.style.display='none'
    competetiveEl.style.display='none'
    enteranceEl.style.display='block'

    schoolBtnEl.classList.remove('active-btn')
    competetiveBtnEl.classList.remove('active-btn')
    enteranceBtnEl.classList.add('active-btn')
    tutorBtnEl.classList.remove('active-btn')
}

function tutors(){
    schoolEl.style.display='none'
    tutorEl.style.display='block'
    competetiveEl.style.display='none'
    enteranceEl.style.display='none'

    schoolBtnEl.classList.remove('active-btn')
    competetiveBtnEl.classList.remove('active-btn')
    enteranceBtnEl.classList.remove('active-btn')
    tutorBtnEl.classList.add('active-btn')
}   