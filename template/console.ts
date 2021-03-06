import {CommandService} from "nergal";
import AppServiceContainer from "./src/AppServiceContainer";
import AppCommandsLoader from "./src/Commands/AppCommandsLoader";

AppServiceContainer.init();
AppServiceContainer.start().then(() => {
    let commandService = new CommandService(new AppCommandsLoader());
    commandService.run();
});