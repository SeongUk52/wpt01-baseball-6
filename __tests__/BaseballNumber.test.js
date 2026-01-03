import BaseballNumber from "../src/domain/BaseballNumber.js";

describe('BaseballNumber 클래스', () => {
    test('스트라이크, 볼 개수 계산', () => {
        const userNumbers = [1,2,3];
        const computerNumbers = [2,4,3];

        const user = new BaseballNumber(userNumbers);
        const computer = new BaseballNumber(computerNumbers);

        expect(user.countStrikesAndBalls(computer)).toEqual({strike: 1, ball: 1})
    })
})