import React from 'react'

function DisplayNumber({min = 1, max = 9}) {
  const [number, setNumber] = React.useState(0)
  const [numberEntered, setNumberEntered] = React.useState(false)

  function handleChange(event) {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }

  const isValid = !numberEntered || (number >= min && number <= max)
  return (
    <div>
      <label htmlFor="display-number">Enter Number</label>
      <input
        id="display-number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div className="alert alert-warning" role="alert">The number is invalid</div>}
    </div>
  )
}

export default DisplayNumber
