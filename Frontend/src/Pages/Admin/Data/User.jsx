import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,PasswordInput } from "react-admin";
import { Box,Typography } from "@mui/material";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const UserTitle = () => {
    const record = useRecordContext();
    return <span>Username {record ? `"${record.username}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const UserList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const UserEdit = (props) => (
<Edit title={<UserTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
                <TextInput disabled fullWidth source="id" />
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth required source="username" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <PasswordInput fullWidth required source="password" />
            </Box>
        </Box>
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const UserCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create User
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth required source="username" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <PasswordInput fullWidth required source="password" />
            </Box>
        </Box>
    </SimpleForm>
</Create>
);