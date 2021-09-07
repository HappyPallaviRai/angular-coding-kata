import { ReversPipe } from './reverse.pipe';

describe('UserComponent', () => {
  it('should test the pipe', () => {
    let app = new ReversPipe();
    expect(app.transform('hello')).toEqual('olleh');
  });
});
