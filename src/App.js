import styles from './style/App.module.scss';
import Dashboard from './pages/Dashboard';
import {QueryClient, QueryClientProvider} from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
  <>
    <div id={styles.background}>
      <QueryClientProvider client={queryClient}>
      <div id={styles.titleContainer}>
        <h1>Dog Breeds App</h1>
      </div>
        <Dashboard/>
      </QueryClientProvider>
    </div>
  </>
  )
}

export default App;
