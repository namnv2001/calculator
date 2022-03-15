import { createContext } from 'react'

const CalContext = createContext(true)

export const CalProvider = CalContext.Provider
export const CalConsumer = CalContext.Consumer
export default CalContext
