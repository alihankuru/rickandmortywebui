import React from 'react'

const InputGroup = ({total, setID}) => {
  return (
    <div className="input-group mb-3 mx-5">
  <select
    onChange={(e) => setID(e.target.value)}
    className="custom-select bg-dark text-white"
    id="inputGroupSelect01"
  >
    <option selected>Choose Episode</option>
    {[...Array(total).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
        {x + 1}
      </option>
    ))}
  </select>
</div>
  )
}

export default InputGroup
