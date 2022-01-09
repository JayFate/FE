for (var i = 0; i < 10; i++) {
  ((j) => {
    setTimeout(function () {
      console.log(j)//1-10
    }, 1000)
  })(i)

}