import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField, NumberField } from "react-admin";
import { Box,Typography } from "@mui/material";

const status = [
    { id:"Waiting", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
]

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const FleetSaleTitle = () => {
    const record = useRecordContext()
    return <span>Fleet Sale ID {record ? `"${record.id}"` : ''}</span>;
  };

// Component cho trang danh sách
export const FleetSaleList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName"/>
        <TextField source="companyAddress"/>
        <TextField source="contactName"/>
        <TextField source="quantity"/>
        <ChipField source="status"/>
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const FleetSaleEdit = (props) => (
<Edit title={<FleetSaleTitle />} {...props}>
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
export const FleetSaleShow = (props) => (
<Show title={<FleetSaleTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <ChipField source="status" />
        <TextField source="contactName"/>
        <ReferenceField label="Model" source="modelId" reference="models" />
        <TextField source="fullName" />
        <TextField source="email" />
        <TextField source="phoneNumber"/>
        <TextField source="companyAddress"/>
        <TextField source="companyPhone"/>
        <NumberField source="quantity" />
    </SimpleShowLayout>
</Show>
);