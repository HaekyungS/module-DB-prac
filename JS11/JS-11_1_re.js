// 비동기함수 동기처리 해결안1
// 실행해보면 동시에 실행됨을 확인 가능
// 구조 -> new Promise((resolve, reject)=>{함수})
// .then(()=>{return new Promise((resolve, reject)=>{함수})})
// 비동기 API를 제외한 모든 코드가 실행된 이후에 실행.
// setTimout 이 비동기API임

async function myFunction() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("첫번째 함수");
      resolve();
    }, 1000)
  })
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("두번째 함수");
      resolve();
    }, 1000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve();
    }, 1000);
  })
  new Promise((resolve, reject) => {
    console.log("네번째 함수");
    resolve();
  }, 1000);

}
myFunction();
console.log("나는 밖에 있지롱");

// 그래서 테스트를 해봄.
// 함수 외부로 콘솔을 찍어보니 외부 콘솔 먼저 실행되고 new Promise 가 실행됨.