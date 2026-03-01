# Next.js 마이그레이션 가이드

## 1. 프로젝트 폴더 구조 (Domain-Driven)

```
src/
├── app/                        # Next.js App Router (도메인 중심 라우팅)
│   ├── (auth)/                 # Route Group - 인증 관련 페이지
│   ├── (main)/                 # Route Group - 메인 레이아웃 공유 페이지
│   │   └── @modal/             # Parallel Route - URL 기반 모달 슬롯
│   │       └── (.)project/     # Intercepting Route - 프로젝트 모달
│   └── layout.tsx              # 루트 레이아웃 (ClerkProvider 등)
├── components/                 # 순수 UI 디자인 시스템 (버튼, 인풋 등)
├── features/                   # DDD 도메인별 기능 (비즈니스 로직 핵심)
│   └── [domain_name]/          # 예: auth, project, matching, member, report
│       ├── api/                # 해당 도메인 서버 API 호출 (fetch)
│       ├── actions/            # 해당 도메인 Server Actions (mutation)
│       ├── hooks/              # 해당 도메인 클라이언트 훅
│       └── components/         # 해당 도메인 전용 UI 컴포넌트
├── lib/                        # 외부 라이브러리 설정 (fetch 래퍼, query-client 등)
├── store/                      # 전역 Zustand 스토어 (auth, filter, theme 등)
├── constants/                  # 전역 공유 상수 (endpoints, position-tech-stack 등)
├── utils/                      # 공유 유틸리티 함수 (cn, mappers, queryString 등)
├── styles/                     # 전역 CSS (@theme, reset, font 등)
└── types/                      # 전역 공통 타입 정의
```

---

## 2. 통합 마이그레이션 체크리스트

### 1단계: 프로젝트 환경 및 인프라 세팅

- [x] **스타일링/폰트:** Tailwind v4 CSS `@theme` 디렉티브 기반 설정 유지 및 `next/font/local` 최적화 적용
  - `pretendard` npm 패키지 설치 후 woff2 파일 9개를 `src/styles/fonts/`에 복사
  - `src/app/layout.tsx`에서 `localFont()`로 `--font-pretendard` CSS 변수 등록
  - `globals.css`에서 `font-family: var(--font-pretendard)` 사용

- [x] **pxr 유틸리티:** px 값을 rem으로 자동 변환하는 Tailwind v4 플러그인 구현
  - 기준: `font-size: 62.5%` (html에만 적용) → 1rem = 10px, 변환식: `px / 10 = rem`
  - 사용 예시: `p-16pxr` → `padding: 1.6rem`, `w-160pxr` → `width: 16rem`
  - 구현: `src/styles/plugins/pxr.js` (0~2400px 범위)
  - `globals.css`에 `@plugin '../styles/plugins/pxr.js'` 추가 (`@import` 이후)
  - 지원 속성: `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`, `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`, `w`, `h`, `min-w`, `max-w`, `min-h`, `max-h`, `gap`, `gap-x`, `gap-y`, `top`, `right`, `bottom`, `left`, `rounded`, `text`, `inset`

- [x] **SVGR/에셋:** `next.config.ts`에 Turbopack SVGR 설정 및 `images.remotePatterns` 설정
  - `dev.devine.kr`, `img.clerk.com` 허용

- [x] **도구 설정:** Storybook `@storybook/nextjs` v9 설치 및 `.storybook/` 설정

- [x] **Biome 설정:** `biome.json` 생성
  - `files.includes`로 스캔 범위 명시 (`src/**`, `.storybook/**` 등)
  - `experimentalScannerIgnores`로 `.next/**`, `storybook-static/**` 제외
  - `noUnknownAtRules: "off"` (Tailwind v4 `@theme`, `@plugin` 대응)

- [x] **개발 환경:** `tsconfig.json` 경로 별칭(`@/*`) 설정

- [ ] **환경변수:** `.env` 변수 prefix 전체 변경 (`VITE_` → `NEXT_PUBLIC_`) 및 `import.meta.env.*` 사용처 전수 수정

### 2단계: 렌더링 및 구조 최적화

- [ ] CSR에서 SSR/RSC(Server Components)로 전환
- [ ] SEO 최적화 (Next.js Metadata API 활용)
- [ ] OG 태그 설정 (Open Graph 이미지 및 메타데이터 구성)
- [ ] 컴포넌트 분리 (`'use client'` 활용하여 서버/클라이언트 컴포넌트 분리)
- [ ] App Router 특수 파일 구성 (`error.tsx`, `loading.tsx`, `not-found.tsx`)
- [ ] `Suspense` 경계 설계 (스켈레톤 UI 연동 포함)

### 3단계: 데이터 페칭 및 로직 통합

- [ ] axios 제거 및 Next.js `fetch` API 기반으로 데이터 페칭 로직 통일
- [ ] `fetch` 옵션 전략 수립 (`cache: 'no-store'` / `next: { revalidate }` 구분)
- [ ] 서버 컴포넌트에서 직접 데이터 페칭 (`async/await`)으로 초기 로딩 상태 제거
- [ ] TanStack Query 전략 결정: 유지 시 `dehydrate` / `HydrationBoundary` 서버 prefetch 패턴 적용
- [ ] Server Actions 설계 — 모달 폼, 지원, 북마크 등 일반 mutation에 적용 여부 결정

### 4단계: UI 및 라우팅 고도화

- [ ] **모달 아키텍처 재설계:** Parallel Routes (`@modal`)와 Intercepting Routes (`(.)`) 패턴으로 URL 기반 모달 구현
- [ ] Zustand 모달 스토어 제거
- [ ] 나머지 Zustand 스토어 처리 결정
  - [ ] `filter`, `projectCreate` → URL `searchParams` 이전 검토
  - [ ] `auth` → Clerk 서버사이드 세션으로 대체 여부 결정
  - [ ] `notification`, `theme` → 존속 또는 대안 결정

### 5단계: 이미지 최적화

- [ ] 네이티브 `<img>` 태그 → `next/image` 컴포넌트로 교체하여 성능 및 CLS(Cumulative Layout Shift) 최적화
- [ ] SVG 처리 전략 확인 (SVGR 웹팩 설정과 `next/image` 충돌 여부 검토)

### 6단계: 보안 및 미들웨어 통합

- [x] **Clerk 패키지 교체:** `@clerk/clerk-react` → `@clerk/nextjs` 설치

- [x] **미들웨어 설정:** Next.js 16 규약에 따라 `src/proxy.ts` 파일로 `clerkMiddleware()` 구현
  - 공개 라우트: `/`, `/login(.*)`, `/signup(.*)`, `/api/webhooks(.*)`
  - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup`

- [ ] `useEffect` 기반 클라이언트 인증 로직 삭제

- [ ] `localStorage` 제거 (`shared/utils/storage.ts`) 및 쿠키 기반 세션 관리로 전환

### 7단계: 미래를 위한 채팅 아키텍처 준비

- [ ] **실시간 인프라 결정:** 직접 웹소켓 서버 vs Pusher/Ably 등 외부 서비스 기술 스택 결정
- [ ] **인증 토큰 공유:** Next.js와 백엔드 간 Clerk JWT 기반 인증 연동 확인
- [ ] **데이터 페칭 구조화:** 초기 채팅 리스트 페칭을 서버 컴포넌트에서 호출하도록 구조 설계
- [ ] **Server Action 테스트:** 메시지 전송 로직을 Server Action으로 구현하여 데이터 저장 및 브로드캐스트 테스트
