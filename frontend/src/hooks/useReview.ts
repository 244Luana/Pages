"use client"

import { useContext } from "react"
import { ReviewContext } from "../contexts/ReviewContext"

export const useReview = () => {
  const context = useContext(ReviewContext)

  if (!context) {
    throw new Error("useComments must be used within a CommentProvider")
  }

  return context
}