import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Model {record ? `"${record.nameModel}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const CarModelList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="nameModel" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const CarModelEdit = (props) => (
<Edit title={<CarModelTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nameModel" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const CarModelCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="nameModel" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const CarModelShow = (props) => (
<Show title={<CarModelTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="nameModel" />
    </SimpleShowLayout>
</Show>
);