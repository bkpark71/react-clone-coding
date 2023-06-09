import React from "react";

class Detail extends React.Component{

    componentDidMount(){
        console.log("componentDidmount 호출됨");
        const { location, history } = this.props;
        if(location.state == undefined) {
            history.push("/");
        }
    }

    render() {
        console.log("render 호출됨");
        const { location } = this.props;
        // state 가 없으면 state 참조에서 nullpointer 와 유사하게 오류가 발생하므로 조건을 추가함
        if(location.state){
            return <span>{location.state.title}</span>;          
        } else {
            return null;
        }
        
    }
}

export default Detail;