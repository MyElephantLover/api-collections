// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
export function descendingOrder(n: number): number {
    return parseInt(n.toString()
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join(''));
}