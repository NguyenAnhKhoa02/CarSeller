import { List,Datagrid,TextField,DeleteButton,EmailField } from "react-admin";

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