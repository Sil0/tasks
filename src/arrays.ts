/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const cloneNumbers = [numbers[0], numbers[0]];
        return cloneNumbers;
    } else {
        const cloneNumbers = [numbers[0], numbers[numbers.length - 1]];
        return cloneNumbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map((num: number): number => 3 * num);
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((str: string): number =>
        isNaN(Number(str)) ? 0 : Number(str)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollarSign = (price: string): string =>
        price[0] === "$" ? price.substring(1) : price;
    const toNumber = (price: string): number =>
        isNaN(Number(price)) ? 0 : Number(price);
    const out = amounts.map(removeDollarSign).map(toNumber);
    return out;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const questionRemoved = messages.filter(
        (str) => str.charAt(str.length - 1) !== "?"
    );
    const upperCased = questionRemoved.map((str: string): string =>
        str.charAt(str.length - 1) === "!" ? str.toUpperCase() : str
    );
    return upperCased;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((str) => str.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const isEveryRGB = colors.every(
        (str: string): boolean =>
            str === "red" || str === "blue" || str === "green"
    );
    return isEveryRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */

export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((acc, num) => acc + num, 0);
    const addedNumbers = addends.join("+");
    return `${sum}=${addedNumbers}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex((num: number): boolean => num < 0);
    if (firstNegative === -1) {
        const sum = values.reduce((acc, num) => acc + num, 0);
        return [...values, sum];
    } else {
        const positiveValues = values.slice(0, firstNegative);
        const sum = positiveValues.reduce((acc, num) => acc + num, 0);
        return [
            ...values.slice(0, firstNegative + 1),
            sum,
            ...values.slice(firstNegative + 1)
        ];
    }
}
