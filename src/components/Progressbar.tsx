interface ProgressbarProps {
  progress: number
}

export function Progressbar({ progress }: ProgressbarProps) {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div
        role='progressbar'
        aria-label='Progresso de hábitos diário'
        arias-valuenow={progress}
        className='h-3 rounded-xl bg-violet-600'
        style={{
          width: `${progress}%`
        }}
      >

      </div>
    </div>
  )
}
