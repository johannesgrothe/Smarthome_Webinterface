import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { store } from "./src/store/store";
import { Provider } from "react-redux";
// import { UserManager } from "./src/services/UserManager";

// export const userManager = new UserManager({ username: '', password: '' })

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation
            colorScheme={colorScheme}/>
          <StatusBar/>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
