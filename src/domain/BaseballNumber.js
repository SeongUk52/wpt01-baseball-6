class BaseballNumber {
    #eachNumbers = []

    constructor(number) {
        this.#eachNumbers = number;
    }

    numberAt(index) {
        return this.#eachNumbers[index]
    }

    contains(value) {
        return this.#eachNumbers.includes(value);
    }
    /**
     * @param {BaseballNumber} other
     * @returns {{strike: number, ball: number}}
     */
    countStrikesAndBalls(other) {
        let ball = 0
        let strike = 0
        this.#eachNumbers.forEach((value, index) => {
            if (value === other.numberAt(index)) {
                strike += 1;
                return
            }
            if (other.contains(value)) {
                ball += 1;
            }
        });

        return { strike, ball };
    }
}

export default BaseballNumber;