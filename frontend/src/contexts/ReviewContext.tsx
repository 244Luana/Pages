"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { ReviewProps } from "../types/ReviewType"
// import { mockReviews } from "../mocks/ReviewMock"
//import type { UserProps } from "../types/UserType"
// import { mockUsers } from "../mocks/UserMock"
import { apiReview } from "../services/intex"

interface ReviewContextType {
  Reviews: ReviewProps[]
  isLoading: boolean
  getReviewsByPost: (post_id: string) => Promise<ReviewProps[]>
  getReviewsByUser: () => Promise<ReviewProps[]>
  addReview: (Review: Omit<ReviewProps, "id" | "date">) => Promise<ReviewProps>
  deleteReview: (id: string) => Promise<void>
}

export const ReviewContext = createContext<ReviewContextType>({
  Reviews: [],
  isLoading: true,
  getReviewsByPost: async () => [],
  getReviewsByUser: async () => [],
  addReview: async () => ({ id: "", post_id: "", user_id: "", comment:"", Review: "", date: `${new Date()}` }),
  deleteReview: async () => { },
})

interface ReviewProviderProps {
  children: ReactNode
}

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
  const [Reviews, setReviews] = useState<ReviewProps[]>([])
  //const [users, setUsers] = useState<UserProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula chamada de API
    setTimeout(() => {
      //setReviews(mockReviews)
      setIsLoading(false)
      //setUsers(mockUsers)
    }, 500)
  }, [])

  const getReviewsByPost = async (post_id: string) => {
    /*
    return Reviews.filter((Review) => Review.post_id === post_id).map((p) => ({
      ...p,
      autor: users.filter(u => u.id === p.user_id)[0].name
    }))*/
    try {
      setIsLoading(true)
      const response = await apiReview.getByPost(post_id)
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getReviewsByUser = async () => {
    // return Reviews.filter((Review) => Review.user_id === user_id)
    try {
      setIsLoading(true)
      const response = await apiReview.getByUser()
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const addReview = async (ReviewData: Omit<ReviewProps, "id" | "date">) => {
    // Simula chamada de API
    /*
    return new Promise<ReviewProps>((resolve) => {
      setTimeout(() => {
        const newReview: ReviewProps = {
          id: `Review-${Date.now()}`,
          ...ReviewData,
          date: `${new Date().toLocaleDateString()}`,
        }

        setReviews((prevReviews) => [...prevReviews, newReview])
        resolve(newReview)
      }, 500)
    })*/
    const response = await apiReview.create(ReviewData)
    return response.data
  }

  const deleteReview = async (id: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const ReviewIndex = Reviews.findIndex((Review) => Review.id === id)

        if (ReviewIndex === -1) {
          reject(new Error("Review not found"))
          return
        }

        const updatedReviews = Reviews.filter((Review) => Review.id !== id)
        setReviews(updatedReviews)
        resolve()
      }, 500)
    })
  }

  return (
    <ReviewContext.Provider
      value={{
        Reviews,
        isLoading,
        getReviewsByPost,
        getReviewsByUser,
        addReview,
        deleteReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}