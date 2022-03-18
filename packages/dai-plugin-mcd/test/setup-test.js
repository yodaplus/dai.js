import { takeSnapshot, restoreSnapshot } from '@yodaplus/test-helpers';
import fetch from 'jest-fetch-mock';

beforeEach(() => {
  jest.setTimeout(10000);
});

let snapshotData;

beforeAll(async () => {
  // Mock eth gas station response
  fetch.mockIf(/^https?:\/\/ethgasstation.info.*$/, async () =>
    JSON.stringify({ fast: 1, fastWait: 1 })
  );
  snapshotData = await takeSnapshot();
});

afterAll(async () => {
  await restoreSnapshot(snapshotData);
});
