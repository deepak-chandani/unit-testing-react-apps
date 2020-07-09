import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return (
    <div>
      <div>Current count: {count}</div>
      <button type="button" className="btn btn-outline-secondary btn-sm" onClick={increment}>Increment</button>
      <button type="button" className="btn btn-outline-secondary btn-sm" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
