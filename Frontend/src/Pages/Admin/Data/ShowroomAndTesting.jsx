import { Typography,Box, Autocomplete } from "@mui/material";
import { List, Datagrid, TextField, Edit, SimpleForm, Create, TextInput, NumberInput, FormDataConsumer, ArrayInput, SimpleFormIterator, BooleanInput, useRecordContext, useDataProvider, useGetList, useGetOne, useInput, useStore, useStoreContext, useEditContext, SelectInput, DateInput, TimeInput, ReferenceArrayInput, ReferenceInput, AutocompleteInput } from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ShowroomAndTesting = () =>{
    const record = useRecordContext();
    return <span>Showroom & Testing {record ? `"${record.address}"` : ''}</span>;
};

// Display list distribution center
export const ShowroomAndTestingList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
        </Datagrid>
    </List>
    );

// create new distribution center
export const ShowroomAndTestingCreate = (props) =>(
    <Create {...props}>
        <SimpleForm sx={{ maxWidth: 800 }}>
            <Typography variant="h5" gutterBottom>
                Showingroom And Testing
            </Typography>

            <DateInput required style={{width:300}} source="date" />
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box marginRight={5}>
                    <TimeInput required source="begin"></TimeInput>
                </Box>

                <Box>
                    <TimeInput required source="end"></TimeInput>
                </Box>
            </Box>

            <ReferenceInput source="addressId" reference="addressDistributionCenters">
                <SelectInput style={{width:300}} required/>
            </ReferenceInput>

        </SimpleForm>
    </Create>
);

// edit distribution center
export const ShowroomAndTestingEdit = ({props,response,id}) =>(
    <Edit title={<ShowroomAndTesting/>} {...props}>
        <SimpleForm sx={{ maxWidth: 800 }}>
            <Typography variant="h5" gutterBottom> 
                Edit Distribution Center
            </Typography>


        </SimpleForm>
    </Edit>);