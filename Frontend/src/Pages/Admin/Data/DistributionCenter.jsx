import { Typography,Box, Alert, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, Create, TextInput, NumberInput, FormDataConsumer, ArrayInput, SimpleFormIterator, BooleanInput, useRecordContext, useDataProvider, useGetList, useGetOne, useInput, useStore, useStoreContext, useEditContext, SelectInput, DateInput, TimeInput, Toolbar, SaveButton, useNotify, useRedirect } from "react-admin";

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
            <TextField source="nameDistributionCenter" />
            <TextField source="hotline" />
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
                    <NumberInput fullWidth required min={0} source="hotline"></NumberInput>
                </Box>
            </Box>

            <Typography variant="h5" gutterBottom>
                Addresses
            </Typography>
            <ArrayInput source="addresses">
                <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                    <TextInput required fullWidth source="address"></TextInput>
                    <SelectInput source="isService" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isSecondHand" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isSeller" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isReplacementParts" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Create>
);

// edit distribution center
export const DistributionCenterEdit = ({props,response,id}) =>(
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
                    <NumberInput fullWidth required min={0} source="hotline"></NumberInput>
                </Box>
            </Box>

            <ArrayInput source="addressDistributionCenters" >
                <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>

                    <TextInput required fullWidth source="address"/>
                    <SelectInput source="isService" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isSecondHand" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isSeller" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>
                    <SelectInput source="isReplacementParts" choices={[
                        {id:"true",name:"Infrastructure is well"},
                        {id:"false",name:"Lack condition"}
                    ]}/>

                    <ArrayInput source="showroomAndTestings">
                        <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                            <DateInput required source="date"/>

                            <TimeInput required source="begin" />
                            <TimeInput required source="end" />
                        </SimpleFormIterator>
                    </ArrayInput>

                </SimpleFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>);