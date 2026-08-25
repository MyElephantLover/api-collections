// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
export const digitalRoot = (n:number):number => {
    function sumOfDigits(n: number): number {
        if (n < 10) {
            return n;
        }
        let sum = 0;
        while (n > 0){
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sumOfDigits(sum);
    }
    return sumOfDigits(n);
}

