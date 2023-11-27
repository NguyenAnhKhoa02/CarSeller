import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext } from "react-admin";

const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Xe {record ? `"${record.title}"` : ''}</span>;
};

const CarModelFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const CarModelList = () => (
    <List /* filter={CarModelFilters} */>
        <Datagrid>
            <TextField source="Mã" />
            <TextField source="Phiên bản xe" />
        </Datagrid>
    </List>
);

/* export const CarModelEdit = () => (
    <Edit title={<CarModelTitle />}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const CarModelCreate = () => (
    <Create>
        <SimpleForm>
        </SimpleForm>
    </Create>
); */