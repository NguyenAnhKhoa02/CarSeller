import { Admin, Resource, defaultTheme} from "react-admin";
import { dataProvider } from "./DataProvider";
import { authProvider } from "./AuthProvider";
import { Dashboard } from "./Data/Dashboard";
import { CarList, CarCreate, CarEdit, CarShow } from "./Data/Car";
import { CarModelList, CarModelCreate, CarModelEdit, CarModelShow } from "./Data/CarModel";
import { TestingRegisterList, TestingRegisterCreate, TestingRegisterEdit, TestingRegisterShow } from "./Data/TestingRegister";
import { ServiceScheduleList, ServiceScheduleCreate, ServiceScheduleEdit, ServiceScheduleShow } from "./Data/ServiceSchedule";
import CarIcon from '@mui/icons-material/DirectionsCar';
import CarModelIcon from '@mui/icons-material/CarCrash';
import TestingRegissterIcon from '@mui/icons-material/CarRental';
import ServiceScheduleIcon from '@mui/icons-material/Construction';

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

function App () {
    return (
        <Admin basename="/admin" authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
          <Resource name="cars" icon={CarIcon} list={CarList} show={CarShow} edit={CarEdit} create={CarCreate}/>
          <Resource name="models" icon={CarModelIcon} list={CarModelList} show={CarModelShow} edit={CarModelEdit} create={CarModelCreate}/>
          <Resource name="testing registers" icon={TestingRegissterIcon} list={TestingRegisterList} show={TestingRegisterShow} edit={TestingRegisterEdit} create={TestingRegisterCreate}/>
          <Resource name="service schedules" icon={ServiceScheduleIcon} list={ServiceScheduleList} show={ServiceScheduleShow} edit={ServiceScheduleEdit} create={ServiceScheduleCreate}/>
        </Admin>
      );
} 

export default App;