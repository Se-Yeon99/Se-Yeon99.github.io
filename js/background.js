const images = [ "PC2.jpg","PC1.jpg"];

const chosenImage = images[[Math.floor(Math.random() * images.length)]];
const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;
document.body.style.background =`url(img/${chosenImage}) no-repeat center`;
document.body.style.backgroundSize = "cover";
document.body.style.height = "98vh";

