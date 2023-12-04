import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField } from "react-admin";

const status = [
    { id:"waiting for contract", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
];

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
        <TextField source="fullName" />
        <ReferenceField label="Model" source="modelId" reference="models" />
        <ReferenceField label="Service" source="serviceId" reference="services" />
        <ChipField source="status" />
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
        <SelectInput source="status" choices={status} />
    </SimpleForm>
</Edit>
);

// Component cho trang hiển thị chi tiết
export const ServicePlanShow = (props) => (
<Show title={<ServicePlanTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="date" />
        <ReferenceField label="Model" source="modelId" reference="models" />
        <TextField source="licensePlate" />
        <ReferenceField label="Service" source="serviceId" reference="services" />
        <TextField source="distributionCenter" />
        <TextField source="fullName" />
        <TextField source="email" />
        <TextField source="numberPhone" />
        <TextField source="time" />
        <TextField source="status" />
    </SimpleShowLayout>
</Show>
);