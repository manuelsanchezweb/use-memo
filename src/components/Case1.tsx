import React, { useMemo, useState } from 'react'

const Case1 = () => {
  const [query, setQuery] = useState('')
  // const [filteredItems, setFilteredItems] = useState<string[]>([])

  const items = [
    "Harry Potter and the Philosopher's Stone",
    'The Lord of the Rings',
    'To Kill a Mockingbird',
    'Pride and Prejudice',
    'The Great Gatsby',
    'Moby Dick',
    '1984',
    'The Catcher in the Rye',
    'War and Peace',
    'Ulysses',
    'The Odyssey',
    // ... more items ...
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  // Sin useMemo
  // useEffect(() => {
  //   setFilteredItems(
  //     items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  //   )
  // }, [items, query])

  // Con useMemo
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    )
  }, [items, query])

  return (
    <>
      <h2>Caso 1: Filtrar elementos de una lista</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Case1
