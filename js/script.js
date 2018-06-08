let pictures = [
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "fourth.jpg"
    ],
mainPicture = document.images[0],
index = 0;

let timer = setInterval(function autoChanger() {
  main.src = "images/" + pictures[index];
  index++;
  if (index === pictures.length) {
    index = 0;
  }
},1000);


document.images[1].addEventListener("click",function() {
  mainPicture.src = "images/" + pictures[0];
  clearInterval(timer);
});
document.images[2].addEventListener("click",function() {
  mainPicture.src = "images/" + pictures[1];
  clearInterval(timer);
});
document.images[3].addEventListener("click",function() {
  mainPicture.src = "images/" + pictures[2];
  clearInterval(timer);
});
document.images[4].addEventListener("click",function() {
  mainPicture.src = "images/" + pictures[3];
  clearInterval(timer);
});
