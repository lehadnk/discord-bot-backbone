import {CommandService} from "./src";
import TestServiceContainer from "./test/app/TestServiceContainer";
import TestCommandsLoader from "./test/app/Commands/TestCommandsLoader";

TestServiceContainer.init();
TestServiceContainer.start().then(() => {
    let commandService = new CommandService(new TestCommandsLoader());
    commandService.run();
});