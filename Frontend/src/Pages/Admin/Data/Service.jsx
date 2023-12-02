import { List,Datagrid,TextField,EditButton,Edit,Create,SimpleForm,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ServiceTitle = () => {
    const record = useRecordContext();
    return <span>Service {record ? `"${record.nameService}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const ServiceList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="nameService" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const ServiceEdit = (props) => (
<Edit title={<ServiceTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nameService" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const ServiceCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="nameService" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const ServiceShow = (props) => (
<Show title={<ServiceTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="nameService" />
    </SimpleShowLayout>
</Show>
);