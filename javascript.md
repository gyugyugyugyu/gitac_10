# Javascript

- 알고리듬(algorithm)

- 문법
- 활용 => 알고리듬
  - 자바스크립트의 활용 범위
    - Front end 개발
    - Node js => Back end 개발
  - 활용 방향
    - Libray, Framework
    - API, Component 개념

## Javascript 문법

- javascript : 웹 브라우저에서 효과를 실행하기 위해 사용된 언어
- version

  - ES5
  - ES6

- JS 작성방식

  - External, Internal, Inline
  - JS가 실행되는 시점에서 필요한 HTML Element가 로딩(렌더링)돼 있어야 함.
    - JS의 실행순서를 HTML 렌더링 시점 이후로 배치.
  - JS가 실행되는 시점에 상관없이 HTML Element가 로딩(렌더링)이 완료될 때까지 기다림.
    - script 시작태그에 defer attribute를 사용함
    - External 방식에서만 사용 가능

- ES6에서 추가된 내용
  - 변수 개념 확장
  - class 개념 추가
  - 함수 사용 방식 확장
  - 프레임워크/라이브러리(node.js/ react / vue.js) 사용됨

### 문법 내용

- 변수 / 데이터 / 연산자
- 명령문(구문)
  - 프로그래밍 언어 실행 흐름에 변화를 주는 구문
- 함수
- 배열 / 객체 / class
- 추가 문법

### Js variable (변수)

https://www.w3schools.com/js/js_variables.asp

- 변하는 수
- 수(값:데이터/ value)가 저장되는 공간
- 변수를 사용하기 위해서 선언(declaration)해야 함

```
변수선언키워드 변수이름 [= 초기값];

** 키워드 : 예약어
** [] : 생략 가능

var a = 0;

** var(variable) : 변수 선언 키워드, ES5
```

```
Naming 표기법
- 가독성 : 여러 단어를 사용해서 Naming을 할 때 단어와 단어 사이를 구분

car-person-name : kebab case
car_person_name : snake case
carPersonName : camel case
CarPersonName : Pascal case
```

### Js let, const

https://www.w3schools.com/js/js_let.asp
https://www.w3schools.com/js/js_const.asp

- ES6에서 추가된 변수 선언 키워드

```
let a = 0;
const b = 'abc';
```

- let

  - 변수 적용 범위의 변화
  - 변수 값을 변경 가능

- const(constant-상수)
  - 변수 적용 범위의 변화
  - 변수 값 변경 불가능

### JS Data Types

https://www.w3schools.com/js/js_datatypes.asp

- 숫자

  - 숫자 데이터 : 정수, 실수

- 문자

  - 문자 데이터 : 문자(character), 문자열(string)

- 불리언(boolean - 논리데이터)

  - 참(True), 거짓(false)의 두 가지 결과값

- 배열(array)

  - 데이터가 여러개 나열된 집합

- 객체(object)

  - 데이터 집합

- javascript 데이터의 타입을 구분하지 않음
  - 변수 선언 시 데이터 타입을 구분하지 않음
  - 데이터 상세 타입을 구분하지 않음

```
java

int a = 0; // 정수 형태의 데이터, 1byte 크기
short b = 0; // 정수 형태의 데이터, 2byte 크기
float c = 1.5; // 실수 형태의 데이터
String d = "Hello" // 문자열 데이터

** 변수가 데이터 타입을 구분
- int 변수에 문재데이터를 저장할 수 없음

javascript

var a = 1;
var b = "Hello";
let c = 1;
let d = "Hello";

** 변수가 데이터 타입을 구분하지 않음
** typescript 언어 - javascript + 데이터 type을 구분
```

### 연산자(operator)

https://www.w3schools.com/js/js_operators.asp

- 할당(assignment) 연산자

```
=
```

- 산술(arithmetic) 연산자

```
+, -, *, / (사칙연산자)
% : 나머지 연산자

Ex)
5 % 3 = 2;
```

- 할당 연산자 + 산술연살자 축약 표현

```
a = a + 3;
a += 3;

a = a + 1;
=> a += 1;
=> a++; (증가연산 increment)

a = a - 1;
=> a -= 1;
=> a--; (감소연산 decrement)
```

- 문자열 연산(연결연산)

```
"a" + "b" = "ab"

let text1 = "a"
let text2 = "b"
text1 + " " + text2 = "a b"

5 + "a" = "5a"
```

- 비교 연산자
  - 비교연산의 결과는 참(true)/ 거짓(false)의 boolean 데이터

```
>, <, >=, <=

== : 같다
=== : 같다(data type check)
Ex)
"5" == 5 => true
"5" === 5 => false


!= : 다르다
!== : 다르다(data type check)
```

- 논리(logical) 연산자
  - 결과값이 true/ false인 연산을 연결

```
&(ampersand)
&& : and - 연결되는 식/값이 하나라도 false가 있으면 전체 결과가 false

|(pipe)
|| : or - 연결되는 식/값이 모두 false일 때 전체 결과가 false

! : not - boolean 데이터의 값을 반대로 만들어줌

Ex)
5>3 && 3>2
=> t && t
=> true

!true => false
!false => true
!(5>3) => false
```

### JS Condition

https://www.w3schools.com/js/js_if_else.asp

- if(조건문, 분기문)
  - 식의 결과값이 true일 때 코드블럭을 실행, false일 때는 실행하지 않음
  - true, 0이 아닌 정수
  - false, 0

```
if(condition){
  코드블럭
}
** condition이 true이면 코드블럭 실행, false 실행하지 않음

Ex)
if(a<3){}
if(a+1){}
if(true){}

if(condition){
  코드블럭1
} else {
  코드블럭2
}

** condition이 true일 때는 코드블럭1을 실행, false일 때는 코드블럭2를 실행

if(condition1){

} else if(condition2){

}

** condition1 값이 false일 때 condition2를 다시 비교

if(condition){
  코드블럭1
} else if(condition2){
  코드블럭2
} else {
  코드블럭3
}
```

### JS For Loop

https://www.w3schools.com/js/js_loop_for.asp

- 반복문
  - 반복 횟수를 정해서 원하는 횟수만큼 반복

```
for(let i=0;i<5;i++){

}

** 각각의 명령문 부분을 조절해서 반복횟수를 조정할 수 있음
```

### JS Function

https://www.w3schools.com/js/js_functions.asp

- 함수(function)

  - 여러 실행 코드들을 하나로 패키징하는 역할
  - 독립된 특정 기능을 할 수 있는 코드블럭 단위로 패키징
  - 특정 기능을 재사용하기 위해 함수 블럭으로 패키징해서 사용
  - 함수는 정의(선언) 후 특정 위치에서 함수를 호출(call)해서 사용

- 매개변수(parameter)

  - 데이터 값을 받아서 함수 코드에서 사용하기 위해 선언하는 변수

- 반환값(return)
  - 함수의 코드를 실행한 후에 결과값을 되돌려 주는 것

```
함수선언
function 함수이름([매개변수]){
  코드블럭

  [return 반환값]
}

** [] : 생략 가능
```

- 함수 선언 방식

```
function 함수이름(){
  코드블럭
}

let(const) 변수이름(함수이름) = function(){
  코드블럭
}

<!-- 익명(anonymous 함수) -->
function(){
  코드블럭
}
** 함수이름을 정의할 필요 없이 바로 사용할 때
```

### JS Scope

https://www.w3schools.com/js/js_scope.asp

- 변수 적용(인식)되는 범위

  - 프로그래밍 전체영역에서 선언된 변수 : Global Variable(전역 변수)
  - 함수, 코드블럭의 영역에서 선언된 변수 : Local Variable(지역 변수)

- 전체영역 : Global Scope
- 함수영역 : Function Scope
- 블럭영역 : Block Scope

Global Scope - Global Variable
Function Scope - Local Variable
Block Scope - Local Variable

### JS Arrow Function

https://www.w3schools.com/js/js_arrow_function.asp

```
let hello = function(){
  return 'Hello World';
}

let hello = () => {
  return 'Hello World';
}
```

- this 객체의 의미가 변경

### JS Array(배열)

https://www.w3schools.com/js/js_arrays.asp

- 여러개의 데이터를 하나의 대표이름 변수로 저장할 때 사용하는 데이터 타입
- 변수이름[인덱스번호]
- 배열도 객체 데이터

```
배열 선언
const cars = ['volvo', 'bmw', 'saab'];

cars[0] = 'volvo';
cars[1] = 'bmw';
cars[2] = 'saab';

배열 접근(access)
- 변경 / 추가 / 삭제

- 변경
cars[0] = 'hyundai';

- 추가
cars.push('kia'); => 마지막 위치에 원소(element)를 추가

- 삭제
cars.pop() => 마지막 원소를 삭제
```

- 배열 데이터를 const로 선언하는 의미
  - 배열 데이터와 배열 변수는 각각 따로 생성되며, 배열변수에 배열 데이터가 있는 위치 주소가 저장됨.
  - const로 선언된 배열 변수는 배열 데이터의 위치 주소가 변경될 수 없음.
  - 배열 데이터는 배열 변수와 따로 생성되었기 때문에 원소(element)의 변경, 추가, 삭제가 가능
  - 같은 원소로 구성되는 배열 데이터를 여러개 생성했을 때, 한 개의 배열데이터를 여러 개의 배열 변수가 가리킴.
  - const로 선언된 배열 변수는 다른 배열 데이터로 변경이 될 수 없음.

```
const a = [1,2,3];
const b = [1,2,3];
const c = [1,2,3];

const array = ['a', 'b', 'c'];

array[0] = 'z'; (O)
array = ['x', 'y', 'z']; (X)

array[0] = 'x';
array[1] = 'y';
array[2] = 'z';
```

### JS Object(객체)

- Object
  - 대상을 객관적인 데이터로 표현한 것
  - Property, Method로 구분
  - 소속이 정해짐

```
const person = {
  firstName : 'John',
  lastName : 'Doe',
  age : 20,
  weight : 70,
  fullName : function(){}
  }

person.age = 22;
person.fullName() // 메소드 호출
```

- 객체 데이터에서 this의 의미

  - method에서 property를 사용할 때 property가 소속된 객체를 의미

- 내장 객체(bulit-in object)
  - javascript API
    - String, Number, Array, Math ...

```
let a = 3.5;
Math.floor(3.5) => 3
```

- HTML 5 API / Browser API

  - HTML5 API : DOM(Document Object Model)
  - Browser API : BOM(Browser Object Model)

- API(Application Programming Interface)
  - 컴퓨터 또는 프로그램 사이의 연결을 할 수 있게 해주는 인터페이스

### Class

- 객체 데이터를 생성할 수 있게 해주는 설계도
- 클래스를 사용해서 여러 개의 객체 데이터를 생성할 수 있음
- constructor : 생성자 함수 - property를 생성

```
class Car {
  construnctor () {
    this.name = 'John';
    this.year = 2021;
  }
  method이름(){
    // 실행 코드
  }
}

let car1 = new Car();
=> car1 객체 데이터가 생성
```

## Javascript 활용

- HTML Element 제어
- Event 제어

### HTML Element 제어 => DOM

- DOM(Document Object Model)

  - HTML Element를 Javascript에서 제어할 수 있도록 객체로 만든 것
  - DOM Property와 Method를 사용

- HTML Element 접근(Access), widget
- 효과(Effect) : Animation(Motion)
- 데이터, 노드(Data, Node) : CRUD(Create, Read, Update, Delete)

### Event(변화 -> 신호)

- HTML Document에서 발생되는 변화/신호
  Ex) 마우스클릭, 키보드입력, HTML 렌더링(로딩) 완료 ...

- Event가 발생하면, 발생한 이벤트를 감지해서 원하는 동작(기능) 실행

```
element.addEventListener('click', function(){});

Ex) click
```
