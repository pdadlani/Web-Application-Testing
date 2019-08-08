import { strike, ball, foul } from './Count.js';

describe('Count.js', () => {
  describe('strike()', () => {
    it('strike', () => {
      expect(strike(0)).toBe(1);
      expect(strike(1)).toBe(2);
      expect(strike(2)).toBe(0);
    });
  });

  describe('ball()', () => {
    it('ball', () => {
      expect(ball(0)).toBe(1);
      expect(ball(1)).toBe(2);
      expect(ball(2)).toBe(3);
      expect(ball(3)).toBe(0);
    });
  });

  describe('foul()', () => {
    it('foul', () => {
      expect(foul(0)).toBe(1);
      expect(foul(1)).toBe(2);
      expect(foul(2)).toBe(2);
    })
  })
})