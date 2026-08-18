'use client';

import { useState, useSyncExternalStore } from 'react';

import { FoodRoulette } from '@/components/ui/food-roulette';
import { Select } from '@/components/ui/select';
import { FOODS, SNACKS } from '@/constants/foods';
import {
  MEAL_TIMES,
  getDefaultMealTime,
  type MealTime,
} from '@/constants/meal-times';

const emptySubscribe = () => () => {};

export default function MechuForm() {
  const mealTimeInitial = useSyncExternalStore(
    emptySubscribe,
    () => getDefaultMealTime(),
    () => 'breakfast' as MealTime,
  );
  const [mealTime, setMealTime] = useState<MealTime>(mealTimeInitial);

  const foods = mealTime === 'snack' ? SNACKS : FOODS;

  return (
    <form className="flex w-full max-w-md flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-base font-semibold">
        <span>오늘</span>
        <Select
          id="mealTime"
          name="mealTime"
          aria-label="식사 시간대를 선택해 주세요."
          value={mealTime}
          onChange={(e) => setMealTime(e.target.value as MealTime)}
        >
          {MEAL_TIMES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <span>은</span>
      </div>

      <FoodRoulette foods={foods} />
    </form>
  );
}
