import { List,Datagrid,TextField,Create,SimpleForm,TextInput,useRecordContext,Show,SimpleShowLayout,ReferenceField,ReferenceInput,SelectInput } from "react-admin";
import { Box,Typography } from "@mui/material";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ColorTitle = () => {
    const record = useRecordContext();
    return <span>ID Color {record ? `"${record.id}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const ColorList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="color" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
    </Datagrid>
</List>
);

// Component cho trang tạo mới
export const ColorCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Car Color
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth required source="color" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <ReferenceInput label="Version" source="versionId" reference="versions">
                    <SelectInput fullWidth required/>
                </ReferenceInput>
            </Box>
        </Box>
        <TextInput fullWidth required source="url" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const ColorShow = (props) => (
<Show title={<ColorTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="color" />
        <TextField source="url" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
    </SimpleShowLayout>
</Show>
);