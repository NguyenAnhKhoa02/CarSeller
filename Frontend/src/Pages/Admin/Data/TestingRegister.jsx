import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField } from "react-admin";

const status = [
    { id:"saiting for contract", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
];

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const TestingRegisterTitle = () => {
    const record = useRecordContext();
    return <span>ID {record ? `"${record.id}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const TestingRegisterList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="fullName" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
        <ChipField source="status" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const TestingRegisterEdit = (props) => (
<Edit title={<TestingRegisterTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <SelectInput source="status" choices={status} />
    </SimpleForm>
</Edit>
);

// Component cho trang hiển thị chi tiết
export const TestingRegisterShow = (props) => (
<Show title={<TestingRegisterTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="carpd" />
        <TextField source="distributionCenter" />
        <TextField source="fullName" />
        <TextField source="email" />
        <TextField source="numberPhone" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
        <TextField source="status" />
    </SimpleShowLayout>
</Show>
);