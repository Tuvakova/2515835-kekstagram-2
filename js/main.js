import { generatePhotos } from './photos.js';

// Генерация массива фотографий
const photosArray = generatePhotos();
console.log(photosArray);

import { renderPhotos } from './renderPhoto.js';
renderPhotos(photosArray);
