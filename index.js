import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/basic.css';

// https://stackoverflow.com/a/48008916
Dropzone.options.fileUpload = {
  url: 'blackHole.php',
  addRemoveLinks: true,
  accept: function (file) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onloadend = function () {
      const content = fileReader.result;
      document.querySelector('#file').value = content;
      file.previewElement.classList.add('dz-success');
    };
    file.previewElement.classList.add('dz-complete');
  },
};
