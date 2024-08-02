const openModalButtons = document.querySelectorAll('[data-modal-target]')//1.all 3
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {//2.full
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)//this is targeting the #model in html
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {//6.everything except the modal is overlay.so if we click outside 
  //the modal anywhere in the page. the model will be closed.
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {//5.full
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {//3.full
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {//4.full
  modal.classList.remove('active')
  overlay.classList.remove('active')
}