import { describe, it, expect, vi, afterEach } from 'vitest';

import { getDefaultMealTime } from './meal-times';

function mockTime(isoString: string) {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(isoString));
}

describe('getDefaultMealTime', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('아침 8시 → breakfast', () => {
    mockTime('2026-08-19T08:00:00+09:00');
    expect(getDefaultMealTime()).toBe('breakfast');
  });

  it('점심 12시 → lunch', () => {
    mockTime('2026-08-19T12:00:00+09:00');
    expect(getDefaultMealTime()).toBe('lunch');
  });

  it('오후 4시 → snack', () => {
    mockTime('2026-08-19T16:00:00+09:00');
    expect(getDefaultMealTime()).toBe('snack');
  });

  it('저녁 7시 → dinner', () => {
    mockTime('2026-08-19T19:00:00+09:00');
    expect(getDefaultMealTime()).toBe('dinner');
  });

  it('밤 11시 → lateNightSnack', () => {
    mockTime('2026-08-19T23:00:00+09:00');
    expect(getDefaultMealTime()).toBe('lateNightSnack');
  });
});
