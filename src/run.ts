import { transactions, businessTypes } from './data'
import { applyCarbonModel } from './model'

const outputTransactions = applyCarbonModel(transactions, businessTypes)
console.table(outputTransactions)
