// Many of these utilities are from the `big-integer` library,
// but adjusted to only work with native BigInt type
// Ref https://github.com/peterolson/BigInteger.js/blob/e5d2154d3c417069c51e7116bafc3b91d0b9fe41/BigInteger.js
// Originally licensed The Unlicense

function compare(a: bigint, b: bigint): number {
  return a === b ? 0 : a > b ? 1 : -1;
}

function square(n: bigint): bigint {
  return n * n;
}

function isOdd(n: bigint): boolean {
  return n % 2n !== 0n;
}

function isEven(n: bigint): boolean {
  return n % 2n === 0n;
}

function isNegative(n: bigint): boolean {
  return n < 0n;
}

function isPositive(n: bigint): boolean {
  return n > 0n;
}

function abs(n: bigint): bigint {
  return n < 0n ? -n : n;
}

function isUnit(n: bigint): boolean {
  return abs(n) === 1n;
}

function modInv(a: bigint, n: bigint): bigint {
  var t = 0n,
    newT = 1n,
    r = n,
    newR = abs(a),
    q,
    lastT,
    lastR;
  while (newR !== 0n) {
    q = r / newR;
    lastT = t;
    lastR = r;
    t = newT;
    r = newR;
    newT = lastT - q * newT;
    newR = lastR - q * newR;
  }
  if (!isUnit(r)) throw new Error(a.toString() + " and " + n.toString() + " are not co-prime");
  if (compare(t, 0n) === -1) {
    t = t + n;
  }
  if (isNegative(a)) {
    return -t;
  }
  return t;
}

export function modPow(n: bigint, exp: bigint, mod: bigint): bigint {
  if (mod === 0n) throw new Error("Cannot take modPow with modulus 0");
  var r = 1n,
    base = n % mod;
  if (isNegative(exp)) {
    exp = exp * -1n;
    base = modInv(base, mod);
  }
  while (isPositive(exp)) {
    if (base === 0n) return 0n;
    if (isOdd(exp)) r = (r * base) % mod;
    exp = exp / 2n;
    base = square(base) % mod;
  }
  return r;
}

var LOBMASK_I = 1 << 30;
function roughLOB(n: bigint): bigint {
  // get lowestOneBit (rough)
  // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
  // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
  var v = n,
    x = v | BigInt(LOBMASK_I);
  return x & -x;
}

function min(a: bigint, b: bigint): bigint {
  return a < b ? a : b;
}

function gcd(a: bigint, b: bigint): bigint {
  a = abs(a);
  b = abs(b);
  if (a === b) return a;
  if (a === 0n) return b;
  if (b === 0n) return a;
  var c = 0n,
    d,
    t;
  while (isEven(a) && isEven(b)) {
    d = min(roughLOB(a), roughLOB(b));
    a = a / d;
    b = b / d;
    c = c * d;
  }
  while (isEven(a)) {
    a = a / roughLOB(a);
  }
  do {
    while (isEven(b)) {
      b = b / roughLOB(b);
    }
    if (a > b) {
      t = b;
      b = a;
      a = t;
    }
    b = b - a;
  } while (b !== 0n);
  return isUnit(c) ? a : a * c;
}

export function lcm(a: bigint, b: bigint): bigint {
  a = abs(a);
  b = abs(b);
  return (a / gcd(a, b)) * b;
}
