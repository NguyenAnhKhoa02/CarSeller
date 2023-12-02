import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ServiceScheduleTitle = () => {
    const record = useRecordContext();
    return <span>ID {record ? `"${record.id}"` : ''}</span>;
  };

// Component cho trang danh sách
export const ServiceScheduleList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="distribution_center" />
        <TextField source="email" />
        <TextField source="full_name" />
        <TextField source="license_plate" />
        <TextField source="number_phone" />
        <TextField source="status" />
        <TextField source="time" />
        <TextField source="model_id" />
        <TextField source="service_id" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const ServiceScheduleEdit = (props) => (
<Edit title={<ServiceScheduleTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="status" />
    </SimpleForm>
</Edit>
);

// Component cho trang hiển thị chi tiết
export const ServiceScheduleShow = (props) => (
<Show title={<ServiceScheduleTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="distribution_center" />
        <TextField source="email" />
        <TextField source="full_name" />
        <TextField source="license_plate" />
        <TextField source="number_phone" />
        <TextField source="status" />
        <TextField source="time" />
        <TextField source="model_id" />
        <TextField source="service_id" />
    </SimpleShowLayout>
</Show>
);