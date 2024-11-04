# 영화 앱 만들기

-   [x] 코드 초기화
-   [x] 메인 기초 작업, 데미데이터 연동
-   [x] 상세, 메인 리스트 API 연동
-   [x] 영화 서브페이지 타입별 목록 API 연동
-   [x] 테일윈드CSS 도입
-   [x] 메인 슬라이드, 스타일 작업, 네비바 스타일 작업
-   [x] 상세페이지 스타일 작업
-   [x] 서브페이지 카드 컴포넌트, 스타일 작업
-   [x] 검색기능
-   [x] 검색 스타일 작업
-   [x] 카드 컴포넌트 분리

## 테일윈드 적용

-   [vite + tailwindcss](https://tailwindcss.com/docs/guides/vite)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
})
```
