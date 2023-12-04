import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout } from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const UserTitle = () => {
    const record = useRecordContext();
    return <span>Username {record ? `"${record.username}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const UserList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="username" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const UserEdit = (props) => (
<Edit title={<UserTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="username" />
        <TextInput source="password" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const UserCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="username" />
        <TextInput source="password" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const UserShow = (props) => (
<Show title={<UserTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="password" />
    </SimpleShowLayout>
</Show>
);