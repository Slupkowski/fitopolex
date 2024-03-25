import { createTheme} from '@mui/material/styles';
import { createComponents } from './components';


const theme = createTheme({
  components: createComponents()
});

export default theme;
