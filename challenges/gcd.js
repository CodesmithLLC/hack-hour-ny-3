
function gcd(a, b, i = Math.max(a, b)) {
  if ( a % i === 0 && b % i === 0 ) return i
  else if ( i === 1) return i
  else return gcd(a, b, i -= 1)
}

module.exports = gcd;