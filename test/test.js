const assert = require('assert'); // Node.js의 기본 assert 모듈 사용

describe('Basic Test', function() {
  it('should return true for 1 + 1 = 2', function() {
    assert.strictEqual(1 + 1, 2);
  });

  it('should return false for 1 + 1 = 3', function() {
    assert.notStrictEqual(1 + 1, 3);
  });
});
