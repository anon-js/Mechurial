export const MEAL_TIMES = [
  { value: 'breakfast', label: '아침' },
  { value: 'lunch', label: '점심' },
  { value: 'dinner', label: '저녁' },
  { value: 'lateNightSnack', label: '야식' },
  { value: 'snack', label: '간식' },
] as const;

export type MealTime = (typeof MEAL_TIMES)[number]['value'];

export function getDefaultMealTime(): MealTime {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === 'hour')?.value);

  if (hour >= 5 && hour < 11) return 'breakfast';
  if (hour >= 11 && hour < 15) return 'lunch';
  if (hour >= 15 && hour < 17) return 'snack';
  if (hour >= 17 && hour < 21) return 'dinner';
  return 'lateNightSnack';
}
