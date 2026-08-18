export const FOODS = [
  '김치찌개',
  '제육볶음',
  '비빔밥',
  '냉면',
  '돈까스',
  '초밥',
  '파스타',
  '떡볶이',
  '샐러드',
  '순댓국',
] as const;

export const SNACKS = [
  '떡볶이',
  '핫도그',
  '붕어빵',
  '떡꼬치',
  '토스트',
  '와플',
  '호떡',
  '군고구마',
  '어묵',
  '아이스크림',
] as const;

export type Food = (typeof FOODS)[number];

export type Snack = (typeof SNACKS)[number];
