import { Admin, Resource, defaultTheme} from "react-admin";
import { dataProvider } from "./DataProvider";
import { authProvider } from "./AuthProvider";
import { Dashboard } from "./Data/Dashboard";
import { VersionList, VersionCreate, VersionEdit } from "./Data/Version";
import { CarModelList, CarModelCreate, CarModelEdit } from "./Data/CarModel";
import { ServiceList, ServiceCreate, ServiceEdit} from "./Data/Service";
import { UserList, UserCreate, UserEdit} from "./Data/User";
import { TestingRegisterList, TestingRegisterEdit, TestingRegisterShow } from "./Data/TestingRegister";
import { ServicePlanList, ServicePlanEdit, ServicePlanShow } from "./Data/ServicePlan";
import { PromotionList, PromotionCreate, PromotionEdit } from "./Data/Promotions";
import { DistributionCenterList,DistributionCenterCreate, DistributionCenterEdit } from "./Data/DistributionCenter";
import { TypeSparePartList,TypeSparePartCreate,TypeSparePartEdit } from "./Data/TypeSparePart";
import { NewspaperList, NewspaperCreate, NewspaperEdit } from "./Data/NewsPaper";
import VersionIcon from '@mui/icons-material/DirectionsCar';
import CarModelIcon from '@mui/icons-material/CarCrash';
import ServiceIcon from '@mui/icons-material/CarRepair';
import UserIcon from '@mui/icons-material/AccountBox';
import ServicePlanIcon from '@mui/icons-material/CalendarMonth';
import TestingRegissterIcon from '@mui/icons-material/CarRental';
import PromotionIcon from '@mui/icons-material/Celebration';
import DistributionCenterIcon from '@mui/icons-material/EmojiTransportation';
import ShowroomAndTesting from '@mui/icons-material/Grading';
import TypeSparePartIcon from '@mui/icons-material/Construction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FleetSaleIcon from '@mui/icons-material/RequestQuote';
import { FleetSaleEdit, FleetSaleList, FleetSaleShow } from "./Data/FleetSale";
const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: "dark" } };

function App () {
    return (
        <Admin basename="/admin" authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
          {permissions => [
              permissions === 'admin'
                  ? <>
                      <Resource name="users" icon={UserIcon} list={UserList} edit={UserEdit} create={UserCreate}/>
                      <Resource name="models" icon={CarModelIcon} list={CarModelList} edit={CarModelEdit} create={CarModelCreate} recordRepresentation="nameModel"/>
                      <Resource name="promotions" icon={PromotionIcon} list={PromotionList} edit={PromotionEdit} create={PromotionCreate} />
                      <Resource name="services" icon={ServiceIcon} list={ServiceList} edit={ServiceEdit} create={ServiceCreate} recordRepresentation="nameService"/>
                      <Resource name="distributionCenters" icon={DistributionCenterIcon} list={DistributionCenterList} edit={DistributionCenterEdit} create={DistributionCenterCreate} recordRepresentation="nameDistributionCenter"/>
                    </>
                  : null, 
          ]}
          <Resource name="fleetSales" icon={FleetSaleIcon} list={FleetSaleList} edit={FleetSaleEdit} show={FleetSaleShow}/>
          <Resource name="addressDistributionCenters" recordRepresentation="address"/>
          <Resource name="versions" icon={VersionIcon} list={VersionList} edit={VersionEdit} create={VersionCreate} recordRepresentation="nameVersion"/>
          <Resource name="testing_Registers" icon={TestingRegissterIcon} list={TestingRegisterList} show={TestingRegisterShow} edit={TestingRegisterEdit}/>
          <Resource name="service_Plans" icon={ServicePlanIcon} list={ServicePlanList} show={ServicePlanShow} edit={ServicePlanEdit}/>
          <Resource name="type_Spare_Parts" icon={TypeSparePartIcon} list={TypeSparePartList} edit={TypeSparePartEdit} create={TypeSparePartCreate} recordRepresentation="nameTypeSparePart"/>
          <Resource name="newspapers" icon={NewspaperIcon} list={NewspaperList} edit={NewspaperEdit} create={NewspaperCreate}/>
        </Admin>
      );
} 

export default App;