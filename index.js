export default filters => {
  const f = Object.entries(filters).map(f => `${f[0]}(${f[1]})`)
  return f.toString().replace(/,/g, ' ')
}
