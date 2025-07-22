import { createContext, useState, useEffect, type ReactNode } from "react"
import type { BookProps } from "../types/BookType"
//import { mockBooks } from "../mocks/BookMock"
import { apiBook } from "../services/intex"

interface BookContextType {
  books: BookProps[]
  isLoading: boolean
  getBooks: (id: string) => BookProps | undefined
}

export const BookContext = createContext<BookContextType>({
  books: [],
  isLoading: true,
  getBooks: () => undefined
})

interface BookProviderProps {
  children: ReactNode
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<BookProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula chamada de API
    setTimeout(async () => {
      const response = await apiBook.getAll()
      setBooks(response.data)
      setIsLoading(false)
    }, 500)
  }, [])

  const getBooks = (id: string) => {
    return books.find((book) => book.id === id)
  }



  return (
    <BookContext.Provider
      value={{
        books,
        isLoading,
        getBooks
      }}
    >
      {children}
    </BookContext.Provider>
  )
}