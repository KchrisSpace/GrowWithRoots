document.querySelector('footer').addEventListener('wheel', function (event) {
  event.preventDefault();
  this.scrollLeft += event.deltaY;
});
