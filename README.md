  
# Node.js 버전관리
<ul>
<li>제어판에서 기존의 Node.js 모두 삭제</li>
<li>C:\Users\<사용자이름>\AppData\Roaming\npm 폴더 지우기</li>
<li>https://github.com/coreybutler/nvm-windows/releases 접속</li>
<li>nvm-setup.zip 파일 저장 후 실행</li>
<li>nvm version //nvm 버전확인</li>
<li>nvm install 10.15.0 //원하는 버전 설치</li></li>
<li>nvm list 명령어로 확인</li>
<li>nvm use 10.15.0 //사용할 버전 선택</li>
<ul>

 <h3> 리엑트 new환경 만들기 </h3>
<ul>   
<li>새로운 파일을 만들어준다</li>
<li>터미널 창을 열고 npx create-react-app blog</li>
<li>만들어진 파일로 다시 오픈</li>
<li>npm start</li>
</ul>

<h3>컴포넌트를 만드는 두가지 방법</h3>
<ul>
<li>클래스를 통해 만드는 방법(꼭 render함수가 있어야 하고, 내부에서는 JSX를 return해주어야 한다.)</li>
<li>함수를 통하여 컴포넌트를 만드는 방법</li>
</ul>
  
<h3>JSX안에 자바스트립트 값 사용하기</h3>
const - 한번 선언하고 바뀌지 않는 값을 설정할 때 사용
let -  바뀌게 될 수 있는 값

리엑트에서 class=""를 넣고 싶으면 className=""이라고 사용해야함
(className 이라고 써야 css파일의 class명을 넣을 수 있다.)

데이터 바인딩 - 자바스크립트 데이터를 HTML에 꽃아 넣는 작업

import React, { useState } from 'react';
useState() 함수는 state를 하나 만들어 주는 함수이다.
let [a,b] = useState('저장할 데이터') 
a라는 변수엔 실제 저장할 데이터가 들어 있고 
b라는 변수엔 저장할 데이터를 변경 시킬 함수가 들어있다.

destructuring 문법
array안에 있는 데이터들을 변수로 쉽게 저장하고 싶을 때 쓰는 신문법
옛날 자바스크립트
var array = ['Kim', 20];
var name = array[0];
var age = array[1];
요즘 자바스크립트
var [name, age] = ['Kim', 20]


state의 가장 큰 장범은 state가 변경될 때마다 자동으로 state와 관련된 HTML이 재렌더링 된다는 것
state는 상품명, 글제목 가격 이런 자주 변하는 데이터들을 저장

터미널 / 브라우저 콘솔창에 warning이 뜨는 이유
eslint가 잘못된 코딩관습 교정
이걸 안보고 싶으면 최상단에 /*eslint-disable*/ 추가

자바스크립트 내에서 array나 object 자료형은 = 등호로 복사하시면 각각 별개의 자료형이 생성되는게 아니라 값을 공유

var data1 = [1,2,3];
var data2 = [...data1] ...은 중괄호나 대괄호를 벗기는 연산자


Component의 특징

1. Component 이름지으실 땐 영어대문자로 보통 시작합니다.

2. return () 안엔 태그들이 평행하게 여러개 들어갈 수 없습니다.

평행하게 여러개의 태그를 쓰고 싶으면 <div>로 묶으셔야합니다.

아니면 의미없는 div를 쓰기 싫으시면 <> </> 이걸로 묶으셔도 됩니다.
function 예시컴포넌트(){
  return (
    <>
      <div>안녕</div>
      <div>안녕</div>
      <div>안녕</div>
    </>
  )
}
▲ fragments라는 문법입니다. 의미없는 <div>쓰기 싫을 때 사용가능합니다.

삼항연산자는 if문이랑 똑같은 용도로 사용하실 수 있는 쌩자바스크립트 문법
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
리액트에서 텅빈 HTML을 의미하는 코드는 null이라는 자료형

자바스크립트 map함수 쓰는 법
JSX {}중괄호 안에서 쓸 수 있는 map이라는 반복문 이용
array에 붙일 수 있는 일종의 내장함수

var 어레이 = [2,3,4];
어레이.map(function(a){
  return a * 10
});

var 어레이 = [2,3,4];
var newArray = 어레이.map(function(a){
  return a * 10
});
위처럼 작성하면 newArray에는 [20,30,40]이 담겨져있다

원래 어레이에는 [2,3,4]

일반 for 반복문을 쓰고싶다면

 

그냥 따로 함수를 만들어서 쓰셔야합니다.

1. 따로 일반 함수를 만들고 

2. 함수안에 HTML을 담을 array 자료를 하나 생성합니다. 

3. 함수안에서 for 반복문을 이용해 array내에 HTML을 추가해줍니다.

4. 완성된 array를 return 해줍니다. 

5. 그리고 함수를 원하는 곳에 { 함수명() } 데이터바인딩 해주시면 됩니다. 

function App (){

  function 반복된UI(){
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  return (
    <div>
      HTML 잔뜩있는 곳
      
      { 반복된UI() }
    </div>
  )
}


Ajax(Asynchronous JavaScript and XML, 에이잭스)는 비동기적인 웹 애플리케이션의 제작을 위해 아래와 같은 조합을 이용하는 웹 개발 기법이다.
