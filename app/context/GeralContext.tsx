'use client'
import { createContext, useState } from "react";

type pessoaType = {
  nome?: string,
  idade?: number
}

type contextType = {
  pessoa: pessoaType,
  setPessoa: (pessoa: pessoaType) => void
}

const inicialValue = {
  pessoa: {},
  setPessoa: (pessoa: pessoaType) => pessoa
}

export const ContextGeral = createContext<contextType>(inicialValue)

export function GeralContext({ children }: { children: React.ReactNode }) {

  const [pessoa, setPessoa] = useState<pessoaType>({})

  return (
    <ContextGeral.Provider
      value={{
        pessoa,
        setPessoa
      }}
    >
      {children}
    </ContextGeral.Provider>
  )
}