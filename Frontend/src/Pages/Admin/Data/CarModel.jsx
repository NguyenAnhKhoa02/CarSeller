import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout } from "react-admin";
import { Box,Typography } from "@mui/material";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Model {record ? `"${record.nameModel}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const CarModelList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="nameModel" />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const CarModelEdit = (props) => (
<Edit title={<CarModelTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput disabled fullWidth source="id" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth required source="nameModel" />
            </Box>
        </Box>
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const CarModelCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Car Model
        </Typography>
        <TextInput fullWidth required source="nameModel" />
    </SimpleForm>
</Create>
);