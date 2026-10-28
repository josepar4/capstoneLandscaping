import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main>
      <h1>Landscaping Business Manager</h1>
      {error && <p>Error: {error}</p>}
      {!health && !error && <p>Checking the backend...</p>}
      {health && (
        <>
          <p>Backend status: {health.status}</p>
          <p>Database: {health.database}</p>
        </>
      )}
    </main>
  )
}

export default App
