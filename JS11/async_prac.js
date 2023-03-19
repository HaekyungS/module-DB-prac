let x;
let y; 
let result;

async function test(){
  await new Promise((resolve, reject)=>{
    console.log("아무 말")
    resolve();
    if(error) throw error;
  })

  x=10;
  console.log(x);

  y=11;
  console.log(y)

  console.log(result)

  await new Promise((resolve,reject)=>{
    result = x+y;
    resolve(result);
    if(error) throw error
  })
  
  console.log(result)

}

test();