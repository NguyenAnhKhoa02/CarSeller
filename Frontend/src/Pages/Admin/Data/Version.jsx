import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,ReferenceField,ReferenceInput,SelectInput,NumberField,NumberInput } from "react-admin";
import { Box,Typography } from "@mui/material";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const VersionTitle = () => {
    const record = useRecordContext();
    return <span>Version {record ? `"${record.nameVersion}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const VersionList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="nameVersion" />
        <NumberField source="price" />
        <ReferenceField source="modelId" reference="models" />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const VersionEdit = (props) => (
<Edit title={<VersionTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <TextInput fullWidth source="id" disabled required/>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="nameVersion" required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <ReferenceInput source="modelId" reference="models">
                    <SelectInput fullWidth disabled required/>
                </ReferenceInput>
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth source="numCarSeat" disabled required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth source="price" required/>
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Detail
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="airBag" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="antiTheft" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="autoLock" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="backCamera" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="doorHandle" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontFogLight" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="gasCap" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="rearBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="seatMaterial" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wiperBlade" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wswandgl" />
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Info
        </Typography>
        <TextInput fullWidth source="info" multiline rows={5} />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const VersionCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="nameVersion" required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <ReferenceInput source="modelId" reference="models">
                    <SelectInput fullWidth required/>
                </ReferenceInput>
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth source="numCarSeat" required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth source="price" required/>
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Detail
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="airBag" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="antiTheft" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="autoLock" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="backCamera" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="doorHandle" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontFogLight" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="gasCap" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="rearBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="seatMaterial" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wiperBlade" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wswandgl" />
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Info
        </Typography>
        <TextInput fullWidth source="info" multiline rows={5} />
    </SimpleForm>
</Create>
);