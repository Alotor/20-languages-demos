from math import sqrt

def primes_set(to_number):
    """
    Returns the set of prime numbers from 1 until the input
    Example: primes_set(40)
      >> {2, 3, 5, 37, 7, 11, 13, 17, 19, 23, 29, 31}
    """
    if to_number == 0:
        return set()
    elif to_number == 1:
        return { to_number }
    else:
        sqr_primes = primes(int(sqrt(to_number)))
        no_primes = { j for i in sqr_primes for j in range(i * 2, to_number, i) }
        primes = { x for x in range(2, to_number) if x not in no_primes }
        return p

if __name__ == "__main__":
    print(primes(40))
