// // 배경이미지 만들자 !!

// //const images = ["1.jpeg", "2.jpeg","3.jpeg"];
// const images = ["night.png", "right.png"];

// const chosenImage = images[[Math.floor(Math.random() * images.length)]];

// //console.log(chosenImage); // 콘솔에 임지 숫ㄷ자 뜸

// const bgImage = document.createElement("img");

// bgImage.src=`img/${chosenImage}`;

// // console.log(bgImage);  // 1,2,3 잘 나옴

// // 이제 바디내부에 ㅊ가 !!
// // 아직은 자바스크립트 내부에만 존재하지 도큐먼트에는 업다

// //document.body.appendChild(bgImage);

// //document.body.style.background ="linear-gradient(to right, blue, yellow)"; 



// document.body.style.background =`url(img/${chosenImage}) no-repeat center`;
// //appendChild는  바디에 html 추가
// //새로고침하면 추가되 !!
// const colors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34"
// ];

// const button = document.querySelector(".button");


//   const color1 = colors[Math.floor(Math.random() * colors.length)];
//   const color2 = colors[Math.floor(Math.random() * colors.length)];

//   document.body.style.background  = `linear-gradient(to right, ${color1}, ${color2})`;

