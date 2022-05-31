import { v4 as uuidv4 } from 'uuid'

import { businessTypes } from "../data"
import { applyCarbonModel } from "../model"

test('calculate footprint from business type emission factor', () => {
  const supermarketBusinessType = businessTypes.find((bt) => bt.name === 'Supermarket')!
  const transaction = {
    id: uuidv4(),
    amount: 123.45,
    date: '2022-01-05',
    businessTypeId: supermarketBusinessType.id
  }
  const result = applyCarbonModel([transaction], businessTypes)

  expect(result.length).toEqual(1)
  expect(result[0].footprint).toEqual(transaction.amount * supermarketBusinessType.emissionFactor)
})

