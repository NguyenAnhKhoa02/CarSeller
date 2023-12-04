import { Admin, Resource, defaultTheme} from "react-admin";
import { dataProvider } from "./DataProvider";
import { authProvider } from "./AuthProvider";
import { Dashboard } from "./Data/Dashboard";
import { VersionList, VersionCreate, VersionEdit } from "./Data/Version";
import { ColorList, ColorCreate, ColorShow} from "./Data/Color";
import { CarModelList, CarModelCreate, CarModelEdit, CarModelShow } from "./Data/CarModel";
import { ServiceList, ServiceCreate, ServiceEdit, ServiceShow} from "./Data/Service";
import { UserList, UserCreate, UserEdit, UserShow} from "./Data/User";
import { TestingRegisterList, TestingRegisterEdit, TestingRegisterShow } from "./Data/TestingRegister";
import { ServicePlanList, ServicePlanEdit, ServicePlanShow } from "./Data/ServicePlan";
import VersionIcon from '@mui/icons-material/DirectionsCar';
import CarModelIcon from '@mui/icons-material/CarCrash';
import TestingRegissterIcon from '@mui/icons-material/CarRental';
import ServicePlanIcon from '@mui/icons-material/Construction';

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

function App () {
    return (
        <Admin basename="/admin" authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
          <Resource name="versions" icon={VersionIcon} list={VersionList} edit={VersionEdit} create={VersionCreate} recordRepresentation="nameVersion"/>
          <Resource name="colors" icon={VersionIcon} list={ColorList} show={ColorShow} create={ColorCreate} recordRepresentation="color"/>
          <Resource name="models" icon={CarModelIcon} list={CarModelList} show={CarModelShow} edit={CarModelEdit} create={CarModelCreate} recordRepresentation="nameModel"/>
          <Resource name="services" icon={CarModelIcon} list={ServiceList} show={ServiceShow} edit={ServiceEdit} create={ServiceCreate} recordRepresentation="nameService"/>
          <Resource name="users" icon={VersionIcon} list={UserList} show={UserShow} edit={UserEdit} create={UserCreate}/>
          <Resource name="testing_Registers" icon={TestingRegissterIcon} list={TestingRegisterList} show={TestingRegisterShow} edit={TestingRegisterEdit}/>
          <Resource name="service_Plans" icon={ServicePlanIcon} list={ServicePlanList} show={ServicePlanShow} edit={ServicePlanEdit}/>
        </Admin>
      );
} 

export default App;