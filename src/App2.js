import React from 'react';
// react 16.8 부터는 함수형 컴포넌트에서 state 사용할 수 있다.
function App2(){
  // count의 초기값을 0으로 설정, 두번째는 메서드
  // class와 달리 함수에서는 데이터를 const나 let을 붙여줘야 한다.
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('kate');

  //button의 event handler method
  //값이 함수인 것을 add 데이터에 할당받아서, 같은 클래스의 메서드에 데이터를 바인딩하는 방식으로 처리
  //state는 직접 변경할 수 없고 함수 setCount(첫번째인자가 count 임)를 통해 변경할 수 있음
  const add=()=>setCount(currentCount=> currentCount+1);  // count를 리턴하는 함수
  
  //button의 event handler method
  const minus=()=>setCount(currentCount => currentCount-1);
  

  //  onclick은 js의 attr 이므로, JSX의 onClick 대문자로 줘야 함.
  return (
    <div>
      <h1>{name}의 계좌는 : {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  );

}

export default App2;
