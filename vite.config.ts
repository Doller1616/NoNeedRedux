import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),
    tsconfigPaths() 
    /*
    step 1: npm install vite-tsconfig-paths
    step 2: 'tsconfigPaths()' add in plugins 
    step 3: create 'tsconfig.json' file
    setp 4: add "compilerOptions": {
                        "baseUrl": ".",
                        "paths": {
                              "@Pages/*" : ["src/Pages/*"],
                            }
                      }
              in 'tsconfig.json' file.
    step 5: Use it something like
            'const DashboardModule = lazy(() => import('@Pages/Dashboard/dashboard.routing'));'
    */
  ] 
})
