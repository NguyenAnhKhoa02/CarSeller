import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext } from "react-admin";

const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Xe {record ? `"${record.title}"` : ''}</span>;
};

const CarModelFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const CarModelList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nameModel" />
        </Datagrid>
    </List>
)