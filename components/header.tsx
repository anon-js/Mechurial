import { EggIcon } from '@/components/egg-icon';

export default function Header() {
  return (
    <header className="flex justify-center pt-8 pb-3">
      <div className="flex items-center gap-2">
        <EggIcon className="h-6 w-6" />
        <h1 className="text-xl font-bold text-brand">메추리알</h1>
      </div>
    </header>
  );
}
