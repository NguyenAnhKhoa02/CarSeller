import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField } from "react-admin";
import { Box,Typography } from "@mui/material";

const status = [
    { id:"waiting for contract", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
];

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const TestingRegisterTitle = () => {
    const record = useRecordContext();
    return <span>ID Testing Register{record ? `"${record.id}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const TestingRegisterList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
        <ChipField source="status" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const TestingRegisterEdit = (props) => (
<Edit title={<TestingRegisterTitle />} {...props}>
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
export const TestingRegisterShow = (props) => (
<Show title={<TestingRegisterTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="carpd" />
        <TextField source="distributionCenter" />
        <TextField source="fullName" />
        <TextField source="email" />
        <TextField source="numberPhone" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
        <TextField source="status" />
    </SimpleShowLayout>
</Show>
);