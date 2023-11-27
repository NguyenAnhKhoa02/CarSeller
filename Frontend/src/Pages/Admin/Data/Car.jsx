import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext } from "react-admin";

const CarTitle = () => {
    const record = useRecordContext();
    return <span>Xe {record ? `"${record.title}"` : ''}</span>;
};

const CarFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const CarList = () => (
    <List /* filter={CarFilters} */>
        <Datagrid>
            <TextField source="Mã" />
            <TextField source="Mẫu xe" />
            <TextField source="Phiên bản xe" />
            <TextField source="Số chỗ ngồi" />
            <TextField source="Dung Tích Nhiên liệu" />
            <TextField source="Hộp số" />
            <TextField source="Túi khí an toàn" />
        </Datagrid>
    </List>
);

/* export const CarEdit = () => (
    <Edit title={<CarTitle />}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const CarCreate = () => (
    <Create>
        <SimpleForm>
        </SimpleForm>
    </Create>
); */