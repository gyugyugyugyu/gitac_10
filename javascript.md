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

** var(variable) : 변수 선언 키워드
```