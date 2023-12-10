import { Typography,Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, Create, TextInput, NumberInput, FormDataConsumer, ArrayInput, SimpleFormIterator, BooleanInput, useRecordContext, useDataProvider, useGetList, useGetOne, useInput, useStore, useStoreContext, useEditContext } from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const DistributionCenter = () =>{
    const record = useRecordContext();
    return <span>Distribution Center {record ? `"${record.id}"` : ''}</span>;
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
                    <TextInput fullWidth required source="nameDistributionCenter"></TextInput>
                </Box>

                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <NumberInput fullWidth required source="hotline"></NumberInput>
                </Box>
            </Box>

            <Typography variant="h5" gutterBottom>
                Addresses
            </Typography>
            <ArrayInput source="addresses">
                <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                    <TextInput required fullWidth source="address"></TextInput>
                    <BooleanInput fullWidth source="isService"></BooleanInput>
                    <BooleanInput fullWidth source="isSecondHand"></BooleanInput>
                    <BooleanInput fullWidth source="isSeller"></BooleanInput>
                    <BooleanInput fullWidth source="isReplacementParts"></BooleanInput>
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Create>
);

// edit distribution center
export const DistributionCenterEdit = ({props,response}) =>(
    <Edit title={<DistributionCenter/>} {...props}>
        <SimpleForm sx={{ maxWidth: 800 }}>
            <Typography variant="h5" gutterBottom> 
                Edit Distribution Center
            </Typography>

            <TextInput source="id" fullWidth disabled/>

            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput fullWidth required source="nameDistributionCenter"></TextInput>
                </Box>

                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                    <NumberInput fullWidth required source="hotline"></NumberInput>
                </Box>
            </Box>

            <ArrayInput source="addressDistributionCenters" >
                <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                {<FormDataConsumer>
                {({formData,...rest}) => (
                    console.log(rest.scopedFormData)
                )}
                </FormDataConsumer> }
                    <TextInput required fullWidth source="address"/>
                    <BooleanInput label="Is Service" source="isService"/>
                    <BooleanInput label="Is Second Hand" source="isSecondHand" />
                    <BooleanInput label="Is Seller" source="isSeller" />
                    <BooleanInput label="Is Replacement Parts" source="isReplacementParts" />
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>);