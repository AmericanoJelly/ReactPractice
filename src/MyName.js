import React, {Component } from 'react';

class MyName extends Component{
    // static defaultProps = {
    //     name:'defaultname'
    //   }
    render(){
        return(
            <div>
                안녕하세요 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        );
    }
}
    MyName.defaultProps = {
        name: '기본이름'
    };

//props 함수형태로 작성
// const MyName = ({ name }) => {
//     return(
//         <div>
//             안녕하세요! 제이름은 {name} 입니다.
//         </div>
//     );
// };

 export default  MyName;