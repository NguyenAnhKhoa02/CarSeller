import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ColorTitle = () => {
    const record = useRecordContext();
    return <span>ID {record ? `"${record.id}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const ColorList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="color" />
        <TextField source="version_id" />
    </Datagrid>
</List>
);

// Component cho trang tạo mới
export const ColorCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="color" />
        <TextInput source="url" />
        <TextInput source="version_id" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const ColorShow = (props) => (
<Show title={<ColorTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="color" />
        <TextField source="url" />
        <TextField source="version_id" />
    </SimpleShowLayout>
</Show>
);