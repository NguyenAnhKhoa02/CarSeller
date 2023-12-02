import { Admin, Resource, defaultTheme} from "react-admin";
import { dataProvider } from "./DataProvider";
import { authProvider } from "./AuthProvider";
import { Dashboard } from "./Data/Dashboard";
import { VersionList, VersionCreate, VersionEdit, VersionShow } from "./Data/Version";
import { ColorList, ColorCreate, ColorShow} from "./Data/Color";
import { UserList, UserCreate, UserEdit, UserShow} from "./Data/User";
import { CarModelList, CarModelCreate, CarModelEdit, CarModelShow } from "./Data/CarModel";
import { TestingRegisterList, TestingRegisterEdit, TestingRegisterShow } from "./Data/TestingRegister";
import { ServiceScheduleList, ServiceScheduleEdit, ServiceScheduleShow } from "./Data/ServiceSchedule";
import CarIcon from '@mui/icons-material/DirectionsCar';
import CarModelIcon from '@mui/icons-material/CarCrash';
import TestingRegissterIcon from '@mui/icons-material/CarRental';
import ServiceScheduleIcon from '@mui/icons-material/Construction';

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

function App () {

    return (

        <Admin basename="/admin" authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
          <Resource name="versions" icon={CarIcon} list={VersionList} show={VersionShow} edit={VersionEdit} create={VersionCreate} recordRepresentation="nameVersion"/>
          <Resource name="colors" icon={CarIcon} list={ColorList} show={ColorShow} create={ColorCreate}/>
          <Resource name="users" icon={CarIcon} list={UserList} show={UserShow} edit={UserEdit} create={UserCreate}/>
          <Resource name="models" icon={CarModelIcon} list={CarModelList} show={CarModelShow} edit={CarModelEdit} create={CarModelCreate} recordRepresentation="nameModel"/>
          <Resource name="testing_Registers" icon={TestingRegissterIcon} list={TestingRegisterList} show={TestingRegisterShow} edit={TestingRegisterEdit}/>
          <Resource name="service_Plan" icon={ServiceScheduleIcon} list={ServiceScheduleList} show={ServiceScheduleShow} edit={ServiceScheduleEdit}/>
        </Admin>
      );
} 

export default App;