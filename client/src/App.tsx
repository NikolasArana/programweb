import { RouterProvider } from 'react-router'
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'





import { router } from './routes'

//const App = () => <RouterProvider router={router} />

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)

export default App