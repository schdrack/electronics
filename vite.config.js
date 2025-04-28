/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 28/04/2025 - 16:20:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
   include: ['**/*.jsx', '**/*.js'],
  plugins: [react(), tailwindcss(),],
})
