console.log("Hello JS");


// 변수: 값을 저장하는 이름을 가진 공간
// const username = "조은지";
let username = "조은지";
username = "홍길동";
console.log("username", username);


// 데이터타입
const num = 10; // 숫자
console.log("🚀 ~ num:", num, "num type", typeof num);

const text = "안녕하세요"; // 문자
console.log("🚀 ~ text:", text, "text type", typeof text);

const isDarkMode = false; // boolean
// const isDarkMode = "false"; // 문자열
console.log("🚀 ~ isDarkMode:", isDarkMode);
console.log("🚀 ~ text:", isDarkMode, "isDarkMode type", typeof isDarkMode);

const empty = null; // 초기화 할 때 사용
console.log("🚀 ~ empty:", empty, "empty type", typeof empty); // object - 기본적으로 변수는 객체로 되어있음

let userage; // 번수 선언만
console.log("🚀 ~ userage:", userage, "userage type", typeof userage);


// 함수: 특정 기능을 수행하도록 만든 코드 조각
// 정의: 함수를 정의한다, 선언한다
/*
function greeting() {
  // 실행할 로직
  // console.log("???님, 반갑습니다!");
  // console.log(username + "님, 반갑습니다!");
  console.log(`${username}님, 반갑습니다!`);
}
*/

// 화살표 함수 변환
/*
// v1
const greeting = () => {
  console.log(`${username}님, 반갑습니다!`);
}
*/
// v2
const greeting = (studentname, usermbti) => { // 파라미터: 값을 받아주는 변수
  // console.log(`${username}님, 반갑습니다!`);
  console.log(`${studentname}님, 반갑습니다!`);
  console.log(`MBTI는 ${usermbti}이시군요!`);
}


// 실행: 함수를 실행한다, 호출한다
/*
// v1
greeting();
*/
// v2
greeting("뭉뭉이", "CUTE");
greeting("조은지", "ISFJ"); // 인자: 실제 넣어주는 값

// 미션: 문자열이 콘솔에 찍히는 화살표 함수 만들고 실행하기
// 프론트엔드부터 만드는 AI챗봇 수강생 ???입니다.
const introduce = () => {
  console.log(`프론트엔드부터 만드는 AI챗봇 수강생 ${username}입니다.`);
}
introduce();

// 결과값 반환
const add = (num1, num2) => {
  return num1 + num2;
}
const doubleSum = (num) => {
  console.log("🚀 ~ doubleSum ~ num:", num);
  return num * 2;
}

// 함수 실행과 결과 확인
// 방법 1
const sum = add(10, 20);
console.log("🚀 ~ sum:", sum);
// 방법 1
console.log("doubleSum", doubleSum(sum));