# HTML

## HTML introduction(소개)
https://www.w3schools.com/html/html_intro.asp

> HTML : Hyper Text Markup Language
>
> 버전: HTML5(HTML 5.2) - 표준화 2014
>
> - 웹페이지의 콘텐츠 표시
> - 웹페이지 구조 표시

## HTML Elements(요소)
https://www.w3schools.com/html/html_elements.asp

- 콘텐츠를 표시하는 언어 : 태그
- 시작 태그 + 콘텐츠 + 종료태그 : Elements(요소)

```
문법
<tagname>Contents</tagname>

콘텐츠, 종료태그가 없는 요소 : 빈요소(Empty Element)
<br>
```

> Nested Element(중첩, 포함관계)

```
<section>
 <div>
  <p>텍스트</p>
 </div>
</section>

1. p 태그 기준
- 포함하는 요소
   - div : 부모요소(parent)
   - section : 조상요소(ancestor)

2. div 태그 기준
- 포함하는 요소 : section - 부모요소
- 포함되는 요소 : p - 자식요소 (children)

3. section 태그 기준
- 포함되는 요소
   - div : 자식요소
   - p : 자손요소 (descendant)
```

## HTML 기본 구조
```
<!DOCTYPE html> : 웹 문서 종류 표시
<html> : html 문서 영역을 표시
  <head> : 웹 페이지 관련 정보, 파일 정보 등 내용이 표시되는 영역
  </head>
  <body> : 웹 피이지, 콘텐츠 구조 표시되는 영역
  </body>
</html>
```

## HTML Attribute(속성)
https://www.w3schools.com/html/html_attributes.asp

- HTML Elements에 추가 정보를 제공
- 시작태그에 작성
- name="value" 형식으로 구성

## HTML Contents 표시 Elements

> Text Contents
>  - 제목, 단락, 목록, 링크, 테이블(표) 등
> Multimedia Contents
>  - 이미지, 비디오, 오디오  

### HTML Heading
https://www.w3schools.com/html/html_headings.asp

- h : (h)eading : 제목 표시 태그 
- h1 ~ h6 : h1 - 가장 큰 제목

### HTML Paragraph
https://www.w3schools.com/html/html_paragraphs.asp

- p : (p)aragraph : 단락 표시 태그
- br : line (br)eak : 강제 줄바꿈 태그 / 빈 요소(Empty Element)
- &nbsp; : (N)on-(B)reak (Sp)ace - Entity code
- hr : (H)orizontal (R)ule - 수평선 / 빈 요소 (Empty Eliment)

### HTML Link
https://www.w3schools.com/html/html_links.asp

- 다른 페이지로 연결
- a : (a)nchor
- href : Hypertext Reference : 웹페이지 참조주소

```
<a href="이동할웹페이지의url" target="_blank">링크이름</a>

target="_blank" : 새 창(탭) 열기
```

### HTML List
https://www.w3schools.com/html/html_lists.asp

- 순서 없는 목록 : ul - (u)nordered (l)ist
- 순서 있는 목록 : ol - (o)rdered (l)ist
- 목록 항목 : li - (L)ist (I)tem
- 설명 목록
  - dl : (D)escription (L)ist
  - dt : (D)escription (T)itle
  - dd : (D)escription (D)ata
- 원하는 목록의 형태가 있으면, 직접 입력해서 사용

```
<ul>
  <li>항목 내용</li>
</ul>

<ol>
  <li>항목 내용</li>
</ol>

<dl>
  <dt>목록 주제(제목)</dt>
  <dd>주제에 대한 설명</dd>
</dl>

```