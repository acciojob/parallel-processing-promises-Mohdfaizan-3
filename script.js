//your JS code here. If required.
const images = [
  { url: 'https://via.placeholder.com/150', alt: 'Image 1' },
  { url: 'https://via.placeholder.com/200', alt: 'Image 2' },
  { url: 'https://via.placeholder.com/250', alt: 'Image 3' },
  { url: 'https://via.placeholder.com/300', alt: 'Image 4' }
];

function downloadImages(images) {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;
      img.alt = image.alt;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  Promise.all(promises)
    .then(imgs => {
      const output = document.getElementById('output');
      imgs.forEach(img => {
        output.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

const button = document.getElementById('download-images-button');
button.addEventListener('click', () => {
  downloadImages(images);
});
