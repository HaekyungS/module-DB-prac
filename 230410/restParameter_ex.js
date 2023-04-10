// 함수의 매개변수 자리에 ...매개변수명 을 하면 변수갯수 상관없이! 내가 함수를 호출할 때 원하는 만큼 변수를 넣을 수 있다.
const restParameter = (...p) => {
  let example = {
    id:"",
    name:"",
    password:"",
    email:""
  }
  // 요 예제에서는 example 이라는 객체에 4개의 키값이 있다. value 는 쓰지 않았다.

  for(let key in example){
    console.log(...p);
    example[key] = p.shift();
  }
  // for-in 문을 통해 위 객체의 key에 ...p로 추가할 값들을 value로 담아준다.
  //.shift() 는 배열의 첫번째 요소를 제거하고 제거된 요소를 반환한다고 한다.
  // 뭔 소린가 싶어 console.log를 찍어보니까 매개변수가 배열로 담기는 거였는지 매개변수가 앞에서 부터 한개씩 사라진다.

  return example;
}

console.log(restParameter("zoe","해경","zoeahe","zoehae95@gmail.com"));
// 결과값 : example 객체에 key값들에 순차적으로 value 가 들었다.