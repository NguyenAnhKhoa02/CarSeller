import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Model {record ? `"${record.nameModel}"` : ''}</span>;
  };
  
// Tạo các bộ lọc cho danh sách
const CarModelFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
  
// Component cho trang danh sách
export const CarModelList = () => (
<List filters={CarModelFilters}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="nameModel" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const CarModelEdit = () => (
<Edit title={<CarModelTitle />} >
    <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nameModel" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const CarModelCreate = () => (
<Create>
    <SimpleForm>
        <TextInput source="nameModel" />
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const CarModelShow = () => (
<Show title={<CarModelTitle />}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="nameModel" />
    </SimpleShowLayout>
</Show>
);