import { AuthProvider } from "context"
import Routes from "core/Routes/Routes"



const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
