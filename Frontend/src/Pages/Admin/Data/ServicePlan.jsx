import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField,FormDataConsumer, FunctionField, DateField, TimeInput } from "react-admin";
import { Box,Typography } from "@mui/material";

const status = [
    { id:"Waiting", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
]

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ServicePlanTitle = () => {
    const record = useRecordContext()
    return <span>ID Service Plan {record ? `"${record.id}"` : ''}</span>;
  };

// Component cho trang danh sách
export const ServicePlanList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <DateField source="date"></DateField>
        <TextField source="fullName"/>
        <TextField source="time" />
        <ReferenceField label="Model" source="modelId" reference="models"/>
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
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Change Status
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput disabled fullWidth source="id" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <SelectInput fullWidth required source="status" choices={status} />
            </Box>
        </Box>
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