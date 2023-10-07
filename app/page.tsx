'use client'
import { useContext } from "react"
import { ContextGeral } from "./context/GeralContext"

export default function Home() {

  const { pessoa, setPessoa } = useContext(ContextGeral)

  return (
    <div>{pessoa.nome} {pessoa.idade}</div>
  )
}
