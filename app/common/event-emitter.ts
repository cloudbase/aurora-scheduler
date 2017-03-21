import events = require('events');
import { Logger, LoggerFactory } from '../common';

export class APIEvents {
  public eventEmitter: events.EventEmitter;
  public events = {
  };

  private static LOGGER: Logger = LoggerFactory.getLogger();

  constructor() {
    this.eventEmitter = new events.EventEmitter();
  }
}
export let EventEmitter = new APIEvents();
