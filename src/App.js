import "react-toastify/dist/ReactToastify.css"
import { Toast } from './components'
import AppNavigator from './navigation/AppNavigator'

const App = (props) => {
  return <div className="App">
    <Toast/>
    <AppNavigator/>
  </div>
}

export default App