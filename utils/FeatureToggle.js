export const isFlashSale = () => {
  const startDate = new Date('2018-12-20T00:00:00+07:00')
  const currentDate = new Date()
  const endDate = new Date('2018-12-21T23:59:59+07:00')
  if (currentDate <= endDate && currentDate >= startDate) {
    return true
  }
  return false
}

export const isYear2019 = () => {
  const year2019 = new Date('2019-01-01T00:00:00+07:00')
  const currentDate = new Date()

  return currentDate >= year2019
}
