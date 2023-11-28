import { Admin, Resource, defaultTheme, ListGuesser} from "react-admin";
import { dataProvider } from "./DataProvider";
import { authProvider } from "./AuthProvider";
import { Dashboard } from "./Data/Dashboard";
import { CarList } from "./Data/Car";
import { CarModelList } from "./Data/CarModel";
import { ServiceScheduleList } from "./Data/ServiceSchedule";
import { TestingRegisterList } from "./Data/TestingRegister";
import CarIcon from '@mui/icons-material/DirectionsCar';
import CarModelIcon from '@mui/icons-material/CarCrash';
import TestingRegissterIcon from '@mui/icons-material/CarRental';
import ServiceScheduleIcon from '@mui/icons-material/Construction';

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

function App () {
    return (
        <Admin basename="/admin" authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>


          <Resource name="model/all" icon={CarIcon} list={ListGuesser} /*show={} edit={} create={}*/ />
        </Admin>
      );
} 

export default App;
