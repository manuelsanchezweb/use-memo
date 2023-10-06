import { useState, useMemo } from 'react'

const Case2 = () => {
  const [textSearch, setTextSearch] = useState('')
  const [lengthSearch, setLengthSearch] = useState(0)
  const [list, _] = useState(['apple', 'banana', 'orange', 'grape'])

  const filteredList = useMemo(() => {
    return list
      .filter((item) => item.includes(textSearch))
      .filter((item) => item.length >= lengthSearch)
  }, [list, textSearch, lengthSearch])

  return (
    <div>
      <h2>
        Caso 2: Filtrar elementos de una lista con dos inputs: nombre y max de
        caracteres
      </h2>
      <input
        type="text"
        value={textSearch}
        placeholder="Search by text"
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <input
        min={1}
        type="number"
        value={lengthSearch}
        placeholder="Minimum length"
        onChange={(e) => setLengthSearch(parseInt(e.target.value))}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Case2
