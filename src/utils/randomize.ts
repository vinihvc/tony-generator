const randomize = (min = 1, max = 80) => {
  const randomizedNumber = Math.random() * (max - min) + min

  return randomizedNumber.toFixed(1)
}

export default randomize
