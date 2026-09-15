// 반복문
// for문 구성요소: 초기화, 반복 조건식, 증감식
let i;
for (i = 0; i < 5; i++) {
  // 반복 실행될 로직
  console.log(`${i + 1}번째 실행중`);
  // 예상되는 실행 횟수: 5회    ✅
  // 예상되는 마지막 i의 값: 4  ✅

  console.log(`${i + 1}번째 실행중`);
}
console.log("🚀 ~ i:", i);
console.log("반복문 끝!");

const resceneMembers = ["woni", "liv", "minami", "may", "zena"];
// 옛날 방식의 반복문
for (let rsn_i = 0; rsn_i < resceneMembers.length; rsn_i++) {
  console.log(`${rsn_i + 1}번째 멤버: ${resceneMembers[rsn_i].toUpperCase()}`);
}
// 배열-반복문: 배열의 매서드 제공 forEach
resceneMembers.forEach((member, inedx) => {
  // 배열의 요소들을 순회하면서 반복 실행할 로직
  console.log(`${inedx}번째 멤버: ${member.toUpperCase()}`);
});


// return 축약 - return만 한다면 축약 가능
const add1 = (num1, num2) => {
  return num1 + num2;
}
const add2 = (num1, num2) => num1 + num2;


// 자주 사용되는 배열 함수
// map: 기존 배열을 조작하여 새로운 배열을 리턴
const resceneKoreanMembers = ["원이", "리브", "미나미", "메이", "제나"];
const emojiMembers1 = resceneKoreanMembers.map((member) => {
  return `❤️${member}❤️`
})
console.log("🚀 ~ emojiMembers:", emojiMembers1);
const emojiMembers2 = resceneKoreanMembers.map((member) => `⭐${member}⭐`);
console.log("🚀 ~ emojiMembers:", emojiMembers2);

// filter: 배열안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴
// 조건: 이름이 세글자 이상인 멤버만 리턴
const filterMembers = resceneKoreanMembers.filter((member) => member.length >= 3);
console.log("🚀 ~ filterMembers:", filterMembers);

// find: 배열안의 요소들 중 특정 조건을 만족하는 요소를 리턴 / 조건을 만족하는 요소가 없으면 undefined 리턴
const findMember = resceneKoreanMembers.find((member) => member.length >= 2);
console.log("🚀 ~ findMember:", findMember); // 1개만 찾는거라서 바로 찾고 끝남, 여러 요소 선택 안함

// every/some: 배열안의 요소들 중 특정 조건을 만족하는 요소가 있는지 여부 리턴
// some: 배열의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false
// every: 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false
const someMembers = resceneKoreanMembers.some((member) => member.length >= 3);
console.log("🚀 ~ someMembers:", someMembers);
const everyMembers = resceneKoreanMembers.every((member) => member.length >= 3);
console.log("🚀 ~ everyMembers:", everyMembers);