export const mineSquare = (q, count) => {
  const array = Array(q).fill(0).map((_, index) => index)
  const result = []
  const copyArray = [... array]
  for(let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * copyArray.length)
      result.push(copyArray[randomIndex])
      copyArray.splice(randomIndex, 1)
  }
  return result
}
