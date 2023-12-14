import { List,Datagrid,TextField,EditButton,Edit,SimpleForm,TextInput,useRecordContext,DeleteButton,Show,SimpleShowLayout,ReferenceField,SelectInput,ChipField,FormDataConsumer, FunctionField, DateField, TimeInput, EmailField } from "react-admin";
import { Box,Typography } from "@mui/material";

const status = [
    { id:"Waiting", name:"Waiting For Contract"}, 
    { id:"contracted", name:"Contracted"}, 
    { id:"completed", name:"Completed"}
]

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const NewspaperRegister = () => {
    const record = useRecordContext()
    return <span>ID Service Plan {record ? `"${record.id}"` : ''}</span>;
  };

// Component cho trang danh sách
export const NewspaperRegisterList = (props) => (
<List {...props}>
    <Datagrid rowClick="show">
        <TextField source="id" />
        <EmailField source="email"/>
        <DeleteButton />
    </Datagrid>
</List>
);