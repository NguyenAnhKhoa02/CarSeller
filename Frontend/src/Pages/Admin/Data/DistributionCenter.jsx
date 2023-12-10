import { Typography,Box } from "@mui/material";
import { List, Datagrid, TextField, Edit, SimpleForm, Create, TextInput, NumberInput, ArrayInput, SimpleFormIterator, BooleanInput } from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const DistributionCenter = () =>{
    const record = useRecordContext();
    return <span>distributionCenter {record ? `"${record.distributionCenter}"` : ''}</span>;
};

// Display list distribution center
export const DistributionCenterList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
        </Datagrid>
    </List>
    );

// create new distribution center
export const DistributionCenterCreate = (props) =>(
    <Create {...props}>
        <SimpleForm sx={{ maxWidth: 800 }}>
            <Typography variant="h5" gutterBottom>
                Distribution Information
            </Typography>

            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput fullWidth source="nameDistributionCenter"></TextInput>
                </Box>

                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <NumberInput fullWidth source="hotline"></NumberInput>
                </Box>
            </Box>

            <Typography variant="h5" gutterBottom>
                Addresses
            </Typography>
            <ArrayInput source="addresses">
                <SimpleFormIterator>
                    <TextInput fullWidth source="address"></TextInput>
                    <BooleanInput fullWidth source="isService"></BooleanInput>
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Create>
);

// create new distribution center
export const DistributionCenterEdit = (props) =>{
    <Edit title={<DistributionCenter/>} {...props}>
        <SimpleForm>

        </SimpleForm>
    </Edit>
};