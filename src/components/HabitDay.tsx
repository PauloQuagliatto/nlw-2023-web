import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'

import { Progressbar } from './Progressbar'

interface HabitDayProps {
  completedAmount: number
  amount: number
}

export function HabitDay({ completedAmount, amount }: HabitDayProps) {
  const progress = Math.round((completedAmount / amount) / 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': progress === 0,
          'bg-violet-900 border-violet-800': progress > 0 && progress < 20,
          'bg-violet-800 border-violet-700': progress >= 20 && progress < 40,
          'bg-violet-700 border-violet-600': progress >= 40 && progress < 60,
          'bg-violet-600 border-violet-500': progress >= 60 && progress < 80,
          'bg-violet-500 border-violet-400': progress >= 80
        })}
      />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'></span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'></span>

          <Progressbar progress={progress} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />

        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
