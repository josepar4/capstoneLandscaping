const TABS = ['Today', 'Clients', 'Calendar', 'Invoices', 'Route']

function App() {
  const currentTab = 'Today'

  return (
    <div className="stage">
      <div className="phone">
        <div className="app">
          <div className="status" aria-hidden="true"></div>
          <main id="view" tabIndex={-1} className="blank">
            <header className="top">
              <h1>{currentTab}</h1>
            </header>
          </main>
          <nav className="tabs" aria-label="Main">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className="tab"
                aria-current={tab === currentTab ? 'page' : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App
