import { Routes } from "./routes"
import { NativeBaseProvider} from "native-base"


const App = () => {

  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  )
}


export default App