import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  input: 'index.html',
  plugins: [react()],
  base:'/clinical-course-editor/',
  build: {
    license: {
      fileName: 'ThirdPartyNotices.md'
    }
  }
})
