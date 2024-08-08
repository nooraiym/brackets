module.exports = function check(str, bracketsConfig) {
  let stack = []

  let bracketsMap = new Map(bracketsConfig)
  for (let char of str) {
    const last = stack[stack.length - 1]
    if (bracketsMap.has(char) && char !== bracketsMap.get(last)) {
      stack.push(char)
    } else if (last && char === bracketsMap.get(last)) {
      stack.pop(char)
    } else {
      return false
    }
  }

  return stack.length === 0
}