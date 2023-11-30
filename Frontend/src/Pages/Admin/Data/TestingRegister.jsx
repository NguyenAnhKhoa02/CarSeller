import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const TestingRegisterTitle = () => {
    const record = useRecordContext();
    return <span>ID {record ? `"${record.id}"` : ''}</span>;
  };
  
// Tạo các bộ lọc cho danh sách
const TestingRegisterFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
  
// Component cho trang danh sách
export const TestingRegisterList = (props) => (
<List {...props} filters={TestingRegisterFilters}>
    <Datagrid rowClick="show">
        <TextField source="id" />
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
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const TestingRegisterCreate = (props) => (
<Create {...props}>
    <SimpleForm>
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const TestingRegisterShow = (props) => (
<Show title={<TestingRegisterTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
    </SimpleShowLayout>
</Show>
);