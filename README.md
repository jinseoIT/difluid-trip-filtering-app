# 🗺️ Tourist Destination Filter Website

React 19, TypeScript, TailwindCSS를 기반으로 구현된 관광지 필터링 웹사이트입니다.
임의 프로필 카드, picsum API 기반의 풀블리드 배경 이미지, 필터 기능이 포함된 여행 카드 목록 등을 제공합니다.

---

## ✅ 구현 요구사항

- ✔️ **마크업 및 스타일**: TailwindCSS로 전체 UI 스타일링
- ✔️ **지정된 폰트 적용**: 모든 텍스트에 WebFont와 텍스트 속성 적용
- ✔️ **랜덤 프로필 카드**: 첫 번째 섹션의 3개 프로필 카드 순서가 매 페이지 로드시 무작위로 배치됨
- ✔️ **풀블리드 배경 이미지**: Unsplash API를 활용해 무작위 이미지 삽입
- ✔️ **이미지 캐싱**: 동일 브라우저에서는 새로고침해도 같은 이미지 유지
- ✔️ **이메일 유효성 검사**: 뉴스레터 구독 양식에 유효한 이메일 형식만 제출 가능
- ✔️ **여행 카드 필터 기능**: 지역, 연도 필터 구현 및 결과 없음 화면 대응

---

## 🛠 기술 스택

| 항목           | 내용                    |
| -------------- | ----------------------- |
| **Frontend**   | React 19, TypeScript    |
| **Styling**    | Tailwind CSS            |
| **State**      | React Hooks             |
| **API**        | Unsplash API            |
| **Build Tool** | Vite                    |
| **Package**    | npm                     |
| **Testing**    | Vitest, Testing Library |

---

## 🧪 테스트

### 테스트 실행 방법

```bash
# 모든 테스트 실행 (watch 모드)
npm test

# 테스트 UI 모드로 실행
npm run test:ui

# 테스트 한 번 실행 (CI/CD용)
npm run test:run
```

### 테스트 구조

```
src/
├── components/
│ ├── FullBleed.test.tsx
│ ├── NewsletterForm.test.tsx
│ ├── ProfileCardList.test.tsx
│ └── trip/
│     ├── TripList.test.tsx
│     └── TripSection.test.tsx
├── utils/
│ └── shuffle.test.ts
└── test/
    └── setup.ts
```

### 테스트 커버리지

- **컴포넌트 테스트**: React Testing Library를 사용한 컴포넌트 렌더링 및 사용자 상호작용 테스트
- **유틸리티 테스트**: 순수 함수들의 로직 테스트
- **통합 테스트**: 컴포넌트 간 상호작용 및 데이터 플로우 테스트

---

## 📁 프로젝트 구조

```
src/
├── components/
│ ├── trip/
│ │ ├── TripCard.tsx
│ │ ├── TripList.tsx
│ │ ├── TripSection.tsx
│ │ ├── TripAreaFilter.tsx
│ │ ├── TripYearFilter.tsx
│ │ └── TripEmpty.tsx
│ ├── FullBleed.tsx
│ ├── Header.tsx
│ ├── NewsletterForm.tsx
│ ├── ProfileCard.tsx
│ ├── ProfileCardList.tsx
│ └── Title.tsx
├── constants/
│ ├── config.ts
│ └── storage.ts
├── dummy/
│ ├── profiles.ts
│ └── trip.ts
├── services/
│ └── profile.ts
├── types/
│ ├── profile.ts
│ └── trip.ts
└── assets/
└── images/
```
