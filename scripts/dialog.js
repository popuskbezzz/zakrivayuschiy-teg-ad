const saveButton = document.querySelector('.save-button');
const memoryDialog = document.querySelector('#dialog-id');
const dialogCloseButton = memoryDialog?.querySelector('.dialog__button');

saveButton?.addEventListener('click', (event) => {
  event.preventDefault();

  if (!memoryDialog.open) {
    memoryDialog.showModal();
  }
});

dialogCloseButton?.addEventListener('click', (event) => {
  event.preventDefault();

  if (memoryDialog.open) {
    memoryDialog.close();
  }
});
