'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

const ITEM_HEIGHT = 48;
const SPIN_ITEMS = 30;
const SPIN_SECONDS = 4;

type Props = {
  foods: readonly string[];
};

export function FoodRoulette({ foods }: Props) {
  const [reel, setReel] = useState<string[]>(['']);
  const [offset, setOffset] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [duration, setDuration] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const spin = () => {
    if (spinning || foods.length === 0) return;
    setSpinning(true);

    const target = foods[Math.floor(Math.random() * foods.length)];

    const passing = Array.from(
      { length: SPIN_ITEMS },
      () => foods[Math.floor(Math.random() * foods.length)],
    );
    const nextReel = ['', ...passing, target];

    const finalIndex = nextReel.length - 1;
    const finalOffset = finalIndex * ITEM_HEIGHT;

    setReel(nextReel);
    setDuration(0);
    setOffset(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDuration(SPIN_SECONDS);
        setOffset(finalOffset);
      });
    });

    timerRef.current = setTimeout(() => {
      setSpinning(false);
    }, SPIN_SECONDS * 1000);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-base font-semibold">
        <div
          className="relative overflow-hidden rounded-xl border border-gray-200"
          style={{ height: ITEM_HEIGHT, width: 200 }}
        >
          <div
            className="flex flex-col"
            style={{
              transform: `translateY(-${offset}px)`,
              transition: duration
                ? `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`
                : 'none',
            }}
          >
            {reel.map((food, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center justify-center text-lg"
                style={{ height: ITEM_HEIGHT }}
              >
                {food}
              </div>
            ))}
          </div>
        </div>
        <span>어때?</span>
      </div>

      <Button type="button" onClick={spin} disabled={spinning}>
        {spinning ? '고르는 중...' : '메뉴 추천받기'}
      </Button>
    </div>
  );
}
