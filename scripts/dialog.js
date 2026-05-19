const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#memory-dialog');
const dialogCloseButton = memoryDialog?.querySelector('.dialog__button');

saveButton?.addEventListener('click', (event) => {
  event.preventDefault();
  memoryDialog.showModal();
});

dialogCloseButton?.addEventListener('click', (event) => {
  event.preventDefault();
  memoryDialog.close();
});
