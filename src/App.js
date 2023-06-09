import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('custructor() 호출됨');
  }
  // data - {} json
  state={
    count : 0, // property
    name : 'kate',
  }
  //button의 event handler method
  //값이 함수인 것을 add 데이터에 할당받아서, 같은 클래스의 메서드에 데이터를 바인딩하는 방식으로 처리
  //state는 직접 변경할 수 없고 상속받은 메서드인 setState(첫번째인자가 state임)를 통해 변경할 수 있음
  add=()=>{
    this.setState(current=>
      ({count : current.count+1}));  // count를 리턴하는 함수
  }
  //button의 event handler method
  minus=()=>{
   //console.log("minus 호출됨");
   this.setState(current=>
    ({count : current.count-1}));
  }
  componentDidMount(){ // 루트에 컴포넌트가 붙은것을 mount라고 함
    console.log("CompenentDidmount 호출됨");
  }
  componentDidUpdate(){
    console.log("CompenentUpdate 호출됨");  
  }
  componentWillUnmount(){
    console.log("Compenent will unmount 호출됨");
  }
  // method override
  render(){
    console.log('render() 호출됨');
    //  onclick은 js의 attr 이므로, JSX의 onClick 대문자로 줘야 함.
    return (
      <div>
        <h1>{this.state.name}의 계좌 is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
