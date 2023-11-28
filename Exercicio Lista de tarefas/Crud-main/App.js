
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import DrawerRouter from './src/routes/DrawerRouter';


export default function App() {
  return (
   <PaperProvider>
     {/* <Router></Router> */}
     <DrawerRouter></DrawerRouter>
     {/* <Routes></Routes> */}

   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});