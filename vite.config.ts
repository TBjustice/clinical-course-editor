import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/clinical-course-editor/',
  build: {
    license: {
      fileName: 'ThirdPartyNotices.md' // 出力されるファイル名を指定
    }
  }
})
