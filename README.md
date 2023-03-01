<div align='center'>
<img src="https://user-images.githubusercontent.com/90181028/218138454-4a90af76-170d-464c-b31b-0235301dbda1.png" height="200px" />
</div>

# 2023 wanted-pre-onboarding-frontend

2023 wanted-pre-onboarding-frontend 선발 과제를 통한 개인 공부 레파지토리

이 프로젝트는 CRA + TypeScript 템플릿으로 제작되었습니다.

참고 : https://github.com/walking-sunset/selection-task

---

## 1. 사용한 기술 스택

- TypeScript
- React
- React Router
- Axios
- Styled Components
- Scss
- Recoil
- React-hook-form

## 2. 기능 구현 정도

### 로그인 / 회원가입 페이지

- [x] `/signin` 경로 내 로그인 / `/signup` 경로 내 회원가입 기능 개발
  - [x] 페이지 내 이메일 input, 비밀번호 input, 제출 button 구성

**Assignment1**

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: @ 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

**Assignment2**

- [x] 회원가입 API 호출 및 올바른 응답 시 `/signin` 경로로 이동

**Assignment3**

- [x] 로그인 API 호출 및 올바른 응답 시 `/todo` 경로로 이동
  - [x] 로컬 스토리지에 응답받은 JWT 저장

**Assignment4**

- [x] 로그인 여부에 따른 리다이렉트 처리
  - [x] 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지 접속 시 `/todo` 경로로 리다이렉트
  - [x] 토큰 없이 `/todo`페이지 접속 시 `/signin` 경로로 리다이렉트

### 투두 리스트 페이지

**Assignment5**

- [x] `/todo`경로에 접속 시 투두 리스트의 목록 확인
- [x] 목록에서는 TODO의 내용, 완료 여부 표시시
- [x] TODO의 완료 여부는 checkbox를 통해 표현

**Assignment6**

- [x] 리스트 페이지 내 TODO input, 추가 button 설정
- [x] 추가 버튼 클릭 시 입력창 내용이 새로운 TODO로 추가

**Assignment7**

- [x] TODO의 체크박스를 통해 완료 여부 수정 기능 구현

**Assignment8, 9, 10**

- [x] TODO 우측에 수정, 삭제 버튼 구현
  - [x] TODO 리스트 개별 아이템 우측에 수정 버튼 생성 및 버튼 클릭 시 수정모드 활성화
  - [x] 수정모드에선 TODO의 우측에 제출, 취소 버튼 표기
  - [x] 제출 버튼 클릭 시 수정 내용 제출 및 내용 업데이트
  - [x] 취소 버튼 클릭 시 수정 내용 초기화, 수정모드 비활성화
  - [x] 투두 리스트의 TODO 우측에 삭제버튼 생성 및 버튼 클릭 시 해당 아이템 삭제

## 3. 폴더 구조

```sh
📦src
├── 📂api
│ ├── 📜api.ts
│ ├── 📜auth.ts
│ ├── 📜todo.ts
│ └── 📜token.ts
├── 📂components
│ ├── 📂css
│ ├── 📂Navigation
│ │ ├── 📜Navigation.scss
│ │ ├── 📜Navigation.tsx
│ │ ├── 📜NavItem.tsx
│ │ ├── 📜package.json
│ ├── 📂Todo
│ │ ├── 📜package.json
│ │ ├── 📜Todo.scss
│ │ └── 📜Todo.tsx
│ └── 📜CreateTodo.tsx
├── 📂const
│ └── 📜const.ts
├── 📂hooks
│ └── 📜useInput.tsx
├── 📂image
│ └── 📜background.jpg
├── 📂pages
│ ├── 📂css
│ ├── 📂Home
│ │ ├── 📜HomePage.scss
│ │ ├── 📜HomePage.tsx
│ │ └── 📜package.json
│ ├── 📂Sign
│ │ ├── 📂SignIn
│ │ │ ├── 📜package.json
│ │ │ └── 📜SignInPage.tsx
│ │ ├── 📂SignUp
│ │ │ ├── 📜package.json
│ │ │ └── 📜SignUpPage.tsx
│ │ └── 📜Sign.scss
│ └── 📂Todo
│ │ ├── 📜package.json
│ │ ├── 📜TodoPage.scss
│ │ └── 📜TodoPage.tsx
├── 📂style
│ ├── 📂css
│ ├── 📂scss
│ │ └── 📜App.scss
├── 📜App.tsx
├── 📜atom.ts
├── 📜index.tsx
├── 📜Router.tsx
├── 📜styled.d.ts
└── 📜theme.ts
```
