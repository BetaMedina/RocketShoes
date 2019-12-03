import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure({ host: '192.168.0.108' }) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = tron;

tron.clear();
export default tron;
