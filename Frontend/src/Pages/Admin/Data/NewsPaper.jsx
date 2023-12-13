import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,ImageInput,ImageField,FormDataConsumer } from "react-admin";
import { Typography } from "@mui/material";
import { useState,useEffect } from "react";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const NewspaperTitle = () => {
    const record = useRecordContext();
    return <span>Newspaper Title {record ? `"${record.title}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const NewspaperList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <DeleteButton />
    </Datagrid>
</List>
);
const ImageFieldCus = ({ url }) => {
    if(url == 'empty'){
        return null;
    }

    if(url instanceof Object){
        const imageUrl = url && url.src;
        return imageUrl ? <img height={300} width={300} src={imageUrl} alt="Image" id="image"/> : null;
    }else{
        const [imageUrl, setImageUrl] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/image/${url}`)
                    if(response.ok){
                        const blob = await response.blob()
                        const imageURL = URL.createObjectURL(blob)
                        setImageUrl(imageURL)
                    }
                } catch (error) {
                    console.log("Error fetch data" , error);     
                }
            };
            fetchData()
        },[])

        return imageUrl ? <img style={{width:"100%", height:"100%"}} src={imageUrl} alt="Image" id="image"/> : null;
    }
  };
  
// Component cho trang chỉnh sửa
export const NewspaperEdit = (props) => (
<Edit title={<NewspaperTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Edit Newspaper
        </Typography>
        <TextInput disabled fullWidth source="id" />
        <TextInput fullWidth required source="title" />
        <TextInput fullWidth source="content" multiline rows={10}/>
        <ImageInput source="imageName" label="Related pictures" accept="image/*" id="image">
            {<FormDataConsumer>
                {({formData,...rest}) => (
                <ImageFieldCus url={formData.imageName}></ImageFieldCus>
            )}
            </FormDataConsumer> }
        </ImageInput>
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const NewspaperCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Newspaper
        </Typography>
        <TextInput fullWidth required source="title" />
        <TextInput fullWidth source="content" multiline rows={10}/>
        <ImageInput source="imageFile" label="Related pictures" accept="image/*" id="image">
            <ImageField source="src"></ImageField>
        </ImageInput>
    </SimpleForm>
</Create>
);