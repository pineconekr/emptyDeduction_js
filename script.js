// 제목과 설명
const h1 = document.createElement("h1");
h1.textContent = "자연연역 연습장";

const p = document.createElement("p");
p.textContent = "자연연역을 연습할 수 있는 공간입니다. 아래에 문제를 입력하고 복합명제를 추가하세요.";

const textarea = document.createElement("textarea");
textarea.id = "problem-statements";
textarea.cols = 80;
textarea.rows = 5;
textarea.value = `아담이 백만장자라면, 가난은 이브가 그의 청혼을 거절한 이유가 아니다.
그런데 이브가 그의 청혼을 거절한 이유는 아담이 가난하다는 것 또는 그가 매력이 없다는 것 둘 중의 하나이다.
아담은 백만장자이다. 그러므로 매력이 없다는 것이 아담이 청혼을 거절당한 이유임에 틀림없다.`;

// 복합명제
const form1 = document.createElement("form");
form1.action = "#";

const newCompound = document.createElement("input");
newCompound.type = "text";
newCompound.id = "new-compound";
newCompound.placeholder = "복합명제를 입력하세요.";

const addCompoundBtn = document.createElement("button");
addCompoundBtn.type = "button";
addCompoundBtn.id = "add-compound-btn";
addCompoundBtn.textContent = "추가";

form1.appendChild(newCompound);
form1.appendChild(addCompoundBtn);

const compoundListDiv = document.createElement("div");
const compoundList = document.createElement("ol");
compoundList.type = "1";
compoundList.id = "compound-list";
compoundListDiv.appendChild(compoundList);

// 단순명제
const form2 = document.createElement("form");
form2.action = "#";

const newPrimary = document.createElement("input");
newPrimary.type = "text";
newPrimary.id = "new-primary";
newPrimary.placeholder = "단순명제를 입력하세요.";

const addPrimaryBtn = document.createElement("button");
addPrimaryBtn.type = "button";
addPrimaryBtn.id = "add-primary-btn";
addPrimaryBtn.textContent = "추가";

form2.appendChild(newPrimary);
form2.appendChild(addPrimaryBtn);

const primaryListDiv = document.createElement("div");
const primaryList = document.createElement("ol");
primaryList.type = "A";
primaryList.id = "primary-list";
primaryListDiv.appendChild(primaryList);

// 기호명제
const form3 = document.createElement("form");
form3.action = "#";

const symbolicInput = document.createElement("input");
symbolicInput.className = "input1";
symbolicInput.type = "text";
symbolicInput.id = "new-symbolic";
symbolicInput.placeholder = "기호명제를 입력하세요.";
symbolicInput.required = true;

const ns1 = document.createElement("input");
ns1.className = "input2";
ns1.type = "text";
ns1.id = "ns1";
ns1.required = true;

const ns2 = document.createElement("input");
ns2.className = "input2";
ns2.type = "text";
ns2.id = "ns2";

const ns3 = document.createElement("input");
ns3.className = "input2";
ns3.type = "text";
ns3.id = "ns3";

const select = document.createElement("select");
select.id = "natual-deduction-rule";

const options = [
    "전제", "결론", " → 제거", "∨ 제거", "∨ 도입", "→ 도입",
    "∧ 제거", "∧ 도입", "↔ 도입", "↔ 제거", "∼ 제거", "∼ 도입"
];

options.forEach(optText => {
    const option = document.createElement("option");
    option.value = optText;
    option.textContent = optText;
    select.appendChild(option);
});

const addSymbolicBtn = document.createElement("button");
addSymbolicBtn.type = "button";
addSymbolicBtn.id = "add-symbolic-btn";
addSymbolicBtn.textContent = "추가";

const openAssumptionBtn = document.createElement("button");
openAssumptionBtn.type = "button";
openAssumptionBtn.id = "open-assumption-btn";
openAssumptionBtn.textContent = "가정 [[";

const closeAssumptionBtn = document.createElement("button");
closeAssumptionBtn.type = "button";
closeAssumptionBtn.id = "close-assumption-btn";
closeAssumptionBtn.textContent = "]] 가정";

const notBtn = document.createElement("button");
notBtn.type = "button";
notBtn.id = "not-btn";
notBtn.textContent = "∼";

const andBtn = document.createElement("button");
andBtn.type = "button";
andBtn.id = "and-btn";
andBtn.textContent = "∧";

const orBtn = document.createElement("button");
orBtn.type = "button";
orBtn.id = "or-btn";
orBtn.textContent = "∨";

const impBtn = document.createElement("button");
impBtn.type = "button";
impBtn.id = "imp-btn";
impBtn.textContent = "→";

const biImpBtn = document.createElement("button");
biImpBtn.type = "button";
biImpBtn.id = "bi-imp-btn";
biImpBtn.textContent = "↔";

// 기호명제 폼 조립
form3.appendChild(symbolicInput);
form3.appendChild(ns1);
form3.appendChild(ns2);
form3.appendChild(ns3);
form3.appendChild(select);
form3.appendChild(document.createElement("br"));
form3.appendChild(addSymbolicBtn);
form3.appendChild(openAssumptionBtn);
form3.appendChild(closeAssumptionBtn);
form3.appendChild(notBtn);
form3.appendChild(andBtn);
form3.appendChild(orBtn);
form3.appendChild(impBtn);
form3.appendChild(biImpBtn);

const symbolicListDiv = document.createElement("div");
const symbolicList = document.createElement("ol");
symbolicList.type = "1";
symbolicList.id = "symbolic-list";
symbolicListDiv.appendChild(symbolicList);


const myInfo = document.createElement("p");
const github = document.createElement("a")
myInfo.innerHTML = "20243080 서솔빈";
github.href = "https://www.naver.com";
github.innerHTML = "Github 방문하기";
github.style.textDecoration = "solid underline purple 4px";

// 모든 요소를 body에 추가
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(textarea);
document.body.appendChild(form1);
document.body.appendChild(compoundListDiv);
document.body.appendChild(form2);
document.body.appendChild(primaryListDiv);
document.body.appendChild(form3);
document.body.appendChild(symbolicListDiv);
document.body.appendChild(studentInfo);
document.body.appendChild(github);