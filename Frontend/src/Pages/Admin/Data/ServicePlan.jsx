import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ServicePlanTitle = () => {
    const record = useRecordContext();
    return <span>ID Service Plan {record ? `"${record.id}"` : ''}</span>;
  };

// Component cho trang danh sách
export const ServicePlanList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="distributionCenter" />
        <TextField source="email" />
        <TextField source="fullName" />
        <TextField source="licensePlate" />
        <TextField source="numberPhone" />
        <TextField source="status" />
        <TextField source="time" />
        <TextField source="modelId" />
        <TextField source="serviceId" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const ServicePlanEdit = (props) => (
<Edit title={<ServicePlanTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="status" />
    </SimpleForm>
</Edit>
);

// Component cho trang hiển thị chi tiết
export const ServicePlanShow = (props) => (
<Show title={<ServicePlanTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="distributionCenter" />
        <TextField source="email" />
        <TextField source="fullName" />
        <TextField source="licensePlate" />
        <TextField source="numberPhone" />
        <TextField source="status" />
        <TextField source="time" />
        <TextField source="modelId" />
        <TextField source="serviceId" />
    </SimpleShowLayout>
</Show>
);