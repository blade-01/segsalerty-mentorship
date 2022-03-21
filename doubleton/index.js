function doubleton(n) {
  const numberSize = new Set(`${++n}`.split("")).size
  if (numberSize == 2) return n
  else return doubleton(n)
}

let answer = doubleton(120)
console.log(answer)
