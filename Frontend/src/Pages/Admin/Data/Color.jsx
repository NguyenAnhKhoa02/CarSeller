import { List,Datagrid,TextField,Create,SimpleForm,TextInput,useRecordContext, Show, SimpleShowLayout, ReferenceField, ReferenceInput} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ColorTitle = () => {
    const record = useRecordContext();
    return <span>ID Color {record ? `"${record.id}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const ColorList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="color" />
        <ReferenceField label="Version" source="versionId" reference="versions" />
    </Datagrid>
</List>
);

// Component cho trang tạo mới
export const ColorCreate = (props) => (
<Create {...props}>
    <SimpleForm>
        <TextInput source="color" />
        <TextInput source="url" />
        <ReferenceInput label="Version" source="versionId" reference="versions" />
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
        <ReferenceField label="Version" source="versionId" reference="versions" />
    </SimpleShowLayout>
</Show>
);