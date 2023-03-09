import styles from './style/App.module.scss';
import Dashboard from './pages/Dashboard';
import {QueryClient, QueryClientProvider} from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
  <>
    <QueryClientProvider client={queryClient}>
      <div id={styles.background}>
        <header id={styles.header}>
          <h1><a href="https://dog-breeds-app.pages.dev/">Dog Breeds App</a></h1>
        </header>
        <div id={styles.dash}>
          <Dashboard />
        </div>
        <footer id={styles.footer}>
          <p>By <a target='_blank' rel="noreferrer" href="https://github.com/tjdarosa26">Tiago José da Rosa</a> with <a rel="noreferrer" target='_blank' href="https://thedogapi.com/">The Dog API</a></p>
        </footer>
      </div>
    </QueryClientProvider>
  </>
  )
}

export default App;
