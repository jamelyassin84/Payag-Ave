import { HTMLSanitizerPipe } from './htmlsanitizer.pipe';

describe('HTMLSanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new HTMLSanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
