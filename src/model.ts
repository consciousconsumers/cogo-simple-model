import { BusinessType, Transaction } from "./types"

type OutputTransaction = Transaction & {
  footprint: number
}

export const applyCarbonModel = (
  transactions: Transaction[],
  businessTypes: BusinessType[]
): OutputTransaction[] => {
  const outputTransactions: OutputTransaction[] = []
  for (const transaction of transactions) {
    const businessType = businessTypes.find(bt => bt.id === transaction.businessTypeId)
    if (!businessType) {
      throw new Error('Business Type Not Found')
    }
    outputTransactions.push({
      ...transaction,
      footprint: transaction.amount * businessType.emissionFactor
    })
  }
  return outputTransactions
}

