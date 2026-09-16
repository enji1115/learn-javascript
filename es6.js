// 논리연산자 - Logical operators

// 관리자 페이지 접근 조건
const user = {
  isLoggedin: true, // 로그인 여부
  role: "user" // 다른 값 ["guest", "user", "admin"]
}

// 관리자 페이지 접근 체크
// 조건1: 로그인된 상태 ***AND*** 조건2: role 권한이 admin 관리자
if (user.isLoggedin && user.role === "admin") {
  // 관리자 페이지 접근 가능한 상태
  console.log("✅ 관리자 페이지에 접근 가능");
} else {
  // 관리자 페이지 접근 불가능한 상태
  console.log("❎ 관리자 페이지에 접근 불가능");
}

// 회원만 접근 가능한 페이지 체크
// 조건1: 로그인된 상태인 경우 ***OR*** 조건2: role이 admin인 경우
if (user.isLoggedin || user.role === "admin") {
  // 페이지 접근 가능
  console.log("✅ 회원 페이지에 접근 가능");
} else {
  // 페이지 접근 불가능
  console.log("❎ 회원 페이지에 접근 불가능");
}

if (!user.isLoggedin) {
  // 로그인 되지 않은 상태인 경우
}

// 응용 - 삼항 연산자 + 논리 연산자
const userAge = 33;
const isLoggedin = false;

// v1
let message;
if (userAge >= 18) {
  message = "성인입니다.";
} else {
  message = "미성년자입니다.";
}
console.log("🚀 ~ message:", message);

// v2
const message1 = userAge >= 18 ? "성인입니다." : "미성년자입니다.";
console.log("🚀 ~ message1:", message1);
const message2 = isLoggedin && "환영합니다.";
console.log("🚀 ~ message2:", message2);


// Spread Syntax
// 배열
const resceneMembers = ["원이", "리브", "미나미", "메이", "제나"];
resceneMembers.push("홍길동");
resceneMembers.unshift("김길동");
console.log("🚀 ~ resceneMembers:", resceneMembers); // 원본

const copyMembers = ["김씨", ...resceneMembers, "홍씨"];
console.log("🚀 ~ copyMembers:", copyMembers); // 복사본

// 객체
console.log("🚀 ~ user:", user); // 원본
const copyUser = {
  ...user,
  age: 34, // 신규는 추가
  isLoggedin: false // 기존 값을 수정
};
console.log("🚀 ~ copyUser:", copyUser); // 복사본
