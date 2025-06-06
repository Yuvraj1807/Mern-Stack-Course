function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  const output = document.getElementById("output");
  let primes = [];

  if (isNaN(start) || isNaN(end) || start > end) {
    output.value = "Please enter valid range values.";
    return;
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }

  output.value = primes.length > 0 ? primes.join(", ") : "No prime numbers in this range.";
}
