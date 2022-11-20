import Palette from './Palette'
import seedColors from './seedColors'

function App() {
  return (
    <div>
      <Palette colors={seedColors[2].colors} />
    </div>
  )
}

export default App
