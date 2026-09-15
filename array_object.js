// 배열: 순서를 가진 데이터들의 집합
const dayOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
console.log("🚀 ~ dayOfWeek:", dayOfWeek);

const today = dayOfWeek[1];
console.log("🚀 ~ today:", today);

// 미션: 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍기
const favoriteDay = dayOfWeek[5];
console.log("🚀 ~ favoriteDay:", favoriteDay);


// 객체: key-value로 이루어진 속성들의 묶음
const student = {
  name: "홍길동",
  mbti: "ENTJ",
  isMale: false,
  useAi: ["Chat GPT", "Gemini"]
}
console.log("🚀 ~ student:", student);

// const studentName = student["name"];
const studentName = student.name;
console.log("🚀 ~ studentName:", studentName);

// 미션: ["Chat GPT", "Gemini"] 값 뽑아와서 콘솔에 찍기
// const studentUseAi = student["useAi"];
const studentUseAi = student.useAi;
console.log("🚀 ~ studentUseAi:", studentUseAi, typeof studentUseAi, Array.isArray(studentUseAi));

// 키값을 고정해서 쓰지않고 변수화해서 사용하는 경우에 대괄호로 사용
// 키값을 변경하게 되는 경우, 키값을 변수로 저장해서 사용
// BUT! 변수명.키값 형식으로 주로 사용