import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,ImageInput,ImageField,FileInput,FormDataConsumer, NumberInput, SelectInput } from "react-admin";
import { Box,Typography } from "@mui/material";
import { useState,useEffect } from "react";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const PromotionTitle = () => {
    const record = useRecordContext();
    return <span>Promotion Title {record ? `"${record.title}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const PromotionList = (props) => (
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
export const PromotionEdit = (props) => (
<Edit title={<PromotionTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Edit Promotion
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
export const PromotionCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Promotion
        </Typography>
        <TextInput fullWidth required source="title" />
        <TextInput fullWidth source="content" multiline rows={10}/>
        <ImageInput source="imageFile" label="Related pictures" accept="image/*" id="image">
            <ImageField source="src"></ImageField>
        </ImageInput>
    </SimpleForm>
</Create>
);