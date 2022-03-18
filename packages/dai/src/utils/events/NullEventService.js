import { LocalService } from '@yodaplus/services-core';

const _ = () => {};

export default class NullEventService extends LocalService {
  /**
   * @param {string} name
   */
  constructor(name = 'event') {
    super(name);
  }

  on() {}
  emit() {}
  ping() {}
  removeListener() {}
  registerPollEvents() {}
  buildEmitter() {
    return {
      emit: _,
      on: _,
      removeListener: _,
      registerPollEvents: _,
      ping: _,
      dispose: _
    };
  }
}
