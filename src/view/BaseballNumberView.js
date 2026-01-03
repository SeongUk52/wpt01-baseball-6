import {MissionUtils} from "@woowacourse/mission-utils/src";
import {formatBaseballNumberPrompt} from "../utility/Formatters.js";

class BaseballNumberView{

    async inputBaseballNumber() {
        return MissionUtils.Console.readLineAsync(formatBaseballNumberPrompt());
    }

}

export default BaseballNumberView