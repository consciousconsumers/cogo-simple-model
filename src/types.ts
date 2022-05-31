export type BusinessType = {
  id: string
  name: string
  emissionFactor: number
}

export type Transaction = {
  id: string
  amount: number
  date: string // In YYYY-MM-DD format
  businessTypeId: string
}
