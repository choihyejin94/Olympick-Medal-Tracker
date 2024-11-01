<H1>24.10.29~24.11.01</H1>
<p>👼🏻멤버 구성👼🏻</p>
<li>팀장 🙋🏻‍♀️ : 최혜진 - 과제 목표 명확화와 목표 달성, 업무 분장, 팀원들의 사기 북돋음 및 보상, 팀 분위기 활성화, Github 준비, 최종 확인 및 코드 정리</li>
<li>팀원1🙋🏻 : 최혜진 - css 담당, 로드맵 파악, 프로젝트 셋업, 분위기메이커 담당</li>
<li>팀원2🙋🏻‍♂️ : 최혜진 - 프로젝트 셋업, 기본 레이아웃 구성, 컴포넌트 구조 분리</li>
<li>팀원3🙋🏼‍♀️ : 최혜진 - 입력 폼 UI 구현, CRUD 기능 구현, 중복 국가 처리</li>
<li>팀원4🙋🏼 : 최혜진 - 메달 집계 리스트 출력, 집계 업데이트 기능 구현, 메달 집계 삭제 기능 구현</li>

---

<p>⚙️개발 환경</p>
<li>JavaScript: ES6+</li>
<li>Node.js: 14.x 이상</li>
<li>IDE: Visual Studio Code</li>
<li>Framework: React (17.x 이상)</li>
<li>Package Manager: npm (또는 Yarn)</li>
<li>Build Tool: Webpack (또는 Create React App)</li>
<li>State Management: Redux (또는 Context API)</li>

---

<h2>📌주요 구현사항</h2>
<p>🐥입력 폼 UI 구현</p>
<li>각 나라별 메달 입력 필드 추가</li>
<li>onSubmit 이벤트 핸들러 설정</li>
<li>useState훅으로 초기 상태 설정</li>
<br> 
<br>
<p>🐥메달 집계 리스트 출력</p>
<li>메달 집계 표시 리스트 추가</li>
<li>useState로 국가 데이터 저장</li>
<li>map메서드 사용하어 데이터 반복 출력</li>
<li>금->은->동 수 기준으로 내림차순 정렬</li>
<li>국가명 미입력 시, 경고 메시지 표시</li>
<br> 
<br>
<p>🐥CRUD 기능 구현</p>
<li>버튼 클릭 시 새로운 국가, 메달 정보 리스트 추가 화면 표시</li>
<li>리스트에 표시된 국가별 메달 집계 확인 UI 반영</li>
<br> 
<br>
<p>🐥메달 집계 삭제 및 업데이트</p>
<li>이미 추가된 국가 메달 수 수정 기능</li>
<li>리스트에 중복 국가 있을 시, 경고 메시지 표시</li>
<li>filter메서드 사용하여 추가된 국가 메달 집계 제거 기능</li>
<br> 
<br>
<p>🐥컴포넌트 구조 분리 및 CSS 스타일링, 최종 코드 정리</p>
<li>리스트 항목과 폼을 별도의 컴포넌트로 분리</li>
<li>CSS 스타일링 - 표 그리기 및 input, button 등 스타일링</li>
<li>최종 확인 및 불필요한 코드, 중복코드 정리</li>

---
<h2>📌컴포넌트 구조 분리 방법</h2>
<p>🐤App.jsx</p>
<li>상태관리와 주요 로직 담당</li>
<li>각 컴포넌트를 렌더링</li>
<br>
<br>
<p>🐤MedalForm</p>
<li>입력 받는 폼 구성</li>
<br>
<br>
<p>🐤MedalList</p>
<li>추가된 국가, 메달 정보 표시</li>
<br>
<br>
<p>🐤Footer</p>
<li>저작권 정보 표시</li>

---
### [🔍배포용링크]("https://olympick-medal-tracker.vercel.app")
<img width="1228" alt="스크린샷 2024-11-01 오후 2 18 57" src="https://github.com/user-attachments/assets/9902ec25-126a-4489-9ea0-1ff672d79324">


