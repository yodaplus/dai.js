import Web3ServiceList from '../src/utils/Web3ServiceList';
import { takeSnapshot, restoreSnapshot } from '@yodaplus/test-helpers';
import fetch from 'jest-fetch-mock';

beforeEach(() => {
  jest.setTimeout(10000);
});

afterEach(() => {
  return Web3ServiceList.disconnectAll();
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
