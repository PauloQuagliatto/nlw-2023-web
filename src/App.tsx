import { Habit } from './components/Habit'

import './styles/global.css'

export function App() {

  return (
    <div>
      <Habit completed={23} />
      <Habit completed={15} />
      <Habit completed={8} />
    </div>
  )
}
