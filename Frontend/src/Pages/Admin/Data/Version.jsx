import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout, ReferenceInput} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const VersionTitle = () => {
    const record = useRecordContext();
    return <span>Name Version {record ? `"${record.nameVersion}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const VersionList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="nameVersion" />
        <TextField source="modelId" />
        <TextField source="air_bag" />
        <TextField source="anti_theft" />
        <TextField source="auto_lock" />
        <TextField source="back_camera" />
        <TextField source="door_handle" />
        <TextField source="front_brakes" />
        <TextField source="front_fog_light" />
        <TextField source="gas_cap" />
        <TextField source="info" />
        <TextField source="num_car_seat" />
        <TextField source="price" />
        <TextField source="rear_brakes" />
        <TextField source="seat_material" />
        <TextField source="wiper_blade" />
        <TextField source="wswandgl" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const VersionEdit = (props) => (
<Edit title={<VersionTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nameVersion" />
        <ReferenceInput source="modelId" reference="models" />
        <TextInput source="air_bag" />
        <TextInput source="anti_theft" />
        <TextInput source="auto_lock" />
        <TextInput source="back_camera" />
        <TextInput source="door_handle" />
        <TextInput source="front_brakes" />
        <TextInput source="front_fog_light" />
        <TextInput source="gas_cap" />
        <TextInput source="info" />
        <TextInput source="num_car_seat" />
        <TextInput source="price" />
        <TextInput source="rear_brakes" />
        <TextInput source="seat_material" />
        <TextInput source="wiper_blade" />
        <TextInput source="wswandgl" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const VersionCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="nameVersion" />
        <ReferenceInput source="modelId" reference="models" />
        <TextInput source="air_bag" />
        <TextInput source="anti_theft" />
        <TextInput source="auto_lock" />
        <TextInput source="back_camera" />
        <TextInput source="door_handle" />
        <TextInput source="front_brakes" />
        <TextInput source="front_fog_light" />
        <TextInput source="gas_cap" />
        <TextInput source="info" />
        <TextInput source="num_car_seat" />
        <TextInput source="price" />
        <TextInput source="rear_brakes" />
        <TextInput source="seat_material" />
        <TextInput source="wiper_blade" />
        <TextInput source="wswandgl" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const VersionShow = (props) => (
<Show title={<VersionTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="nameVersion" />
        <TextField source="modelId" />
        <TextField source="air_bag" />
        <TextField source="anti_theft" />
        <TextField source="auto_lock" />
        <TextField source="back_camera" />
        <TextField source="door_handle" />
        <TextField source="front_brakes" />
        <TextField source="front_fog_light" />
        <TextField source="gas_cap" />
        <TextField source="info" />
        <TextField source="num_car_seat" />
        <TextField source="price" />
        <TextField source="rear_brakes" />
        <TextField source="seat_material" />
        <TextField source="wiper_blade" />
        <TextField source="wswandgl" />
    </SimpleShowLayout>
</Show>
);