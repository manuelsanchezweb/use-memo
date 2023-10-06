import { useState } from 'react'
import './App.css'
import Case1 from './components/Case1'
import Case2 from './components/Case2'
import Case3 from './components/Case3'

function App() {
  const [shownCase, setShownCase] = useState(1)

  return (
    <>
      <h1>useMemo</h1>
      <div>
        <button onClick={() => setShownCase(1)}>Case 1</button>
        <button onClick={() => setShownCase(2)}>Case 2</button>
        <button onClick={() => setShownCase(3)}>Case 3</button>
      </div>
      <hr />
      <div style={{ minHeight: '50vh' }}>
        {/* // Filter from a list by a query */}
        {shownCase === 1 && <Case1 />}

        {/* // Filter from a list by multiple queries */}
        {shownCase === 2 && <Case2 />}

        {/* // Calculate total price */}
        {shownCase === 3 && <Case3 />}
      </div>
    </>
  )
}

export default App
