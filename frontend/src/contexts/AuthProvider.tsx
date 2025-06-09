"use client"

import { useState, useEffect, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { mockUsers } from "../mocks/UserMock"
import type { UserProps } from "../types/UserType"

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(
          (u) => u.email === email && u.password === password
        )

        if (user) {
          const { password, ...userWithoutPassword } = user
          setCurrentUser(userWithoutPassword)
          localStorage.setItem(
            "currentUser",
            JSON.stringify(userWithoutPassword)
          )
          resolve()
        } else {
          reject(new Error("Email ou senha inválidos"))
        }
      }, 500)
    })
  }

  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find((u) => u.email === email)

        if (existingUser) {
          reject(new Error("Email já cadastrado"))
        } else {
          const newUser: UserProps = {
            id: `user-${Date.now()}`,
            name,
            email,
            password,
            role: "user",
            nascimento: "",
            endereco: "",
            celular: "",
            idioma: "",
          }

          mockUsers.push(newUser)

          const { password: _, ...userWithoutPassword } = newUser
          setCurrentUser(userWithoutPassword)
          localStorage.setItem(
            "currentUser",
            JSON.stringify(userWithoutPassword)
          )
          resolve()
        }
      }, 500)
    })
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, isLoading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
