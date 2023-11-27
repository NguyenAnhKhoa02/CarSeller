import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext } from "react-admin";

const ServiceScheduleTitle = () => {
    const record = useRecordContext();
    return <span>Xe {record ? `"${record.title}"` : ''}</span>;
};

const ServiceScheduleFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const ServiceScheduleList = () => (
    <List /* filter={ServiceScheduleFilters} */>
        <Datagrid>
            <TextField source="Mã" />
            <TextField source="Mẫu xe" />
            <TextField source="Phiên bản xe" />
            <TextField source="Ngày đặt lịch" />
        </Datagrid>
    </List>
);

/* export const ServiceScheduleEdit = () => (
    <Edit title={<ServiceScheduleTitle />}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export const ServiceScheduleCreate = () => (
    <Create>
        <SimpleForm>
        </SimpleForm>
    </Create>
); */