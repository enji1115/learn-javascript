// 조건문: 특정 조건에 따라 다르게 실행하는 구문
const score = 60;

if (score >= 60) {
  // 조건식이 true인 경우 실행될 로직
  console.log("✅합격");
} else {
  // 조건식이 false인 경우 실행될 로직
  console.log("❎불합격");
}

// 삼항 연산자
(score >= 60) ? console.log("✅합격") : console.log("❎불합격");
console.log(score >= 60 ? "✅합격" : "❎불합격");

let grade; // 등급
if (score >= 90) grade = "A"; // 90점 이상인 경우
else if (score >= 80) grade = "B"; // 80점 이상인 경우
else if (score >= 70) grade = "C"; // 70점 이상인 경우
else grade = "D"; // 70점 미만인 경우
console.log("🚀 ~ grade:", grade);

console.log("끝!!");

const userInput = "";
/*
// 사용자가 입력한 값이 있는 경우
if (userInput) {
  console.log('입력되었습니다.');
}
  */
// 사용자 입력이 없는 경우
if (!userInput) {
  console.log("값이 비어있습니다. 입력해 주세요.");
}