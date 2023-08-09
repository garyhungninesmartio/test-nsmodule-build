import { DevServer } from 'ns-module-framework/dist/server/index';
import { TestModule} from '~/index';

const testModule = new TestModule();
const server = new DevServer();

server.mount(testModule.mountingPoint);
server.start();