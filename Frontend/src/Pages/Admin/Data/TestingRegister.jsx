import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

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
        <TextField source="full_name" />
        <TextField source="email" />
        <TextField source="number_phone" />
        <TextField source="version_id" />
        <TextField source="status" />
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
        <TextInput source="status" />
    </SimpleForm>
</Edit>
);

// Component cho trang hiển thị chi tiết
export const TestingRegisterShow = (props) => (
<Show title={<TestingRegisterTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="carpd" />
        <TextField source="distribution_center" />
        <TextField source="email" />
        <TextField source="full_name" />
        <TextField source="number_phone" />
        <TextField source="status" />
        <TextField source="version_id" />
    </SimpleShowLayout>
</Show>
);