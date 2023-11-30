import { List,Datagrid,TextField,ReferenceField,EditButton,Edit,Create,SimpleForm,ReferenceInput,TextInput,useRecordContext, DeleteButton, Show, SimpleShowLayout} from "react-admin";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const ServiceScheduleTitle = () => {
    const record = useRecordContext();
    return <span>Id {record ? `"${record.id}"` : ''}</span>;
  };
  
// Tạo các bộ lọc cho danh sách
const ServiceScheduleFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];
  
// Component cho trang danh sách
export const ServiceScheduleList = (props) => (
<List {...props} filters={ServiceScheduleFilters}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const ServiceScheduleEdit = (props) => (
<Edit title={<ServiceScheduleTitle />} {...props}>
    <SimpleForm>
        <TextInput disabled source="id" />
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const ServiceScheduleCreate = (props) => (
<Create {...props}>
    <SimpleForm>
    </SimpleForm>
</Create>
);

// Component cho trang hiển thị chi tiết
export const ServiceScheduleShow = (props) => (
<Show title={<ServiceScheduleTitle />} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
    </SimpleShowLayout>
</Show>
);