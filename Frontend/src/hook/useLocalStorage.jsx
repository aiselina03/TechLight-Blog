import { useEffect, useState } from "react"


function useLocalStorage(key , initialVal="") {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialVal
  )
  useEffect(() => {
    
  localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return (
    [value, setValue]
  )
}

export default useLocalStorage