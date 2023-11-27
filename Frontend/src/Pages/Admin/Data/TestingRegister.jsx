import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext } from "react-admin";

const TestingRegisterTitle = () => {
    const record = useRecordContext();
    return <span>Xe {record ? `"${record.title}"` : ''}</span>;
};

const TestingRegisterFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const TestingRegisterList = () => (
    <List /* filter={TestingRegisterFilters} */>
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

/* export const TestingRegisterEdit = () => (
    <Edit title={<TestingRegisterTitle />}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const TestingRegisterCreate = () => (
    <Create>
        <SimpleForm>
        </SimpleForm>
    </Create>
); */