// 비동기방식 - 동기처리 해결안2
// async 함수선언 - 선언문 내에 await new Promise (){}
// 함수 선언을 통해 호출을 하는 방식.
// 하기에 호출 기준으로 위 아래에 콘솔 찍어보니 함수호출 이전/이후 찍어봤는데 함수가 나중에 나오는 것 확인됨.


async function myFunction() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("첫번째 함수");
      resolve();
    }, 1000);
  });

  setTimeout(() => {
    console.log("두번째 함수");
  }, 1000);


  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve();
    }, 1000);
  });

  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("네번째 함수");
      resolve();
    }, 1000);
  });
}

console.log("함수 호출 전");

myFunction();

console.log("함수 호출 후");
