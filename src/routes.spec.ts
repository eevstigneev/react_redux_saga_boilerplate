import {createPath, ROUTES} from './routes';

describe('Check route create function', () => {
  test('should returns url with id', () => {
    const id = '1';
    const path = createPath({path: ROUTES.MEMBER_UPDATE, params: {memberId: id}});
    expect(path).toBe(ROUTES.MEMBER_UPDATE.replace(':memberId', id));
  });
  test('should returns without id', () => {
    const path = createPath({path: ROUTES.MEMBER_CREATE});
    expect(path).toBe(ROUTES.MEMBER_CREATE);
  });
});
