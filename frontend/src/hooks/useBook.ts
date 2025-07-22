"use client"

import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

export const usePost = () => {
  const context = useContext(BookContext)

  if (!context) {
    throw new Error("usePost must be used within an PostProvider")
  }

  return context
}