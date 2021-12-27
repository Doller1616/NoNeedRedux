# ViteAndHooks-NoRedux-

# This project contains

# how to create centralise state/state management without any third party
# how to create dynamic 'Refs' and use them
# css Grid ('grid-area', 'grid-template-area')
# use of useReducer and context API

# Add path Alias
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
