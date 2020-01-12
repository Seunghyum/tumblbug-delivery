import * as express from 'express';
import * as addressesJson from './data/addresses.json';
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(addressesJson);
});
app.listen(4000, () => console.log('start'));
