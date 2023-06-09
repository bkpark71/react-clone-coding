import { useEffect, useState } from "react";

function dbAccess(){
    console.log("dbAccess 호출됨");
    return ["홍길동"];
}

function Test() {

    const [input, setInput] = useState("");
    // dbAccess 일때와 dbAccess() 일때의 차이, dbAccess()가 굉장히 오래 걸리는 일이라면???
    // 반복호출을 막기 위해 dbAccess 만 넘기기
    const [names, setNames] = useState(dbAccess); 

    const inputValueChange=(e)=>{
        console.log(e.target.value);
        // setname을 해서 state 값을 바꿔줘야만 렌더링이 다시 일어나서 바뀐값이 반영되게 된다.
        setInput(e.target.value); // 데이터를 직접 변경
    }

    const buttonHandler = () => {
        setNames((currentNames)=>{
            return [...currentNames, input]; // 기존배열 내용 가져와서 새로 입력된 값 합해서 배열만들어서 리턴
        }); // 데이터 직접 변경보다 좋은게 화살표 함수로 받아와서 변경하는 것이다.
    }
    // dependency array가 [] 인 경우에는 처음 단 한번만 수행된다. 없으면 매 렌더링마다 수행된다.
    // [input] 이라고 넣으면 버튼이벤트에만 호출되지 않고 변경이 있을때마다 호출된다.

    useEffect(()=>{
        console.log("useEffect 호출됨");
        return () => {
            console.log("자원 해제됨");
        };
    }, [input]);

    console.log("렌더링됨");

    return (
        <div>
            <input value={input} onChange={inputValueChange}/>
            <button onClick={buttonHandler}>
                입력
            </button>
            
            {names.map((name, index)=>{
                return <p key={index}>{name}</p>
            })}
            
        </div>
    );
    
}

export default Test;