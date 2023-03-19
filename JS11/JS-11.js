// 비동기함수 - 동기처리

setTimeout(() => {
  console.log("첫번째함수")
  setTimeout(() => {
    console.log("두번째함수")
    setTimeout(() => {
      console.log("세번째함수")
      setTimeout(() => {
        console.log("네번째함수")
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000);