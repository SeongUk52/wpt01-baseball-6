import BaseballNumberService from "../service/BaseballNumberService.js";
import BaseballNumberView from "../view/BaseballNumberView.js";

class BaseballNumberController {
    #baseballNumberService;
    #baseballNumberView;

    constructor(view = new BaseballNumberView()) {
        this.#baseballNumberService = null;
        this.#baseballNumberView = view;
    }

    async runOneGame () {
        try {
            this.#baseballNumberService = new BaseballNumberService();
            const userBallNumber = await this.#baseballNumberView.inputBaseballNumber();
        } catch (error) {

            throw error
        }
    }

    async run () {
        await this.runOneGame();
    }
}

export default BaseballNumberController