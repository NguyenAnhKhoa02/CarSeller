import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,NumberField, ArrayInput, SimpleFormIterator, ImageInput, FormDataConsumer, ImageField } from "react-admin";
import { Box,Typography } from "@mui/material";
import { useEffect,useState } from "react";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const TypeSparePartTitle = () => {
    const record = useRecordContext();
    return <span>TypeSparePart {record ? `"${record.nameTypeSparePart}"` : ''}</span>;
  };

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

        return imageUrl ? <img style={{width:"100%", height:"100%"}}  src={imageUrl} alt="Image" id="image"/> : null;
    }
  };


// Component cho trang danh sách
export const TypeSparePartList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="nameTypeSparePart" />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const TypeSparePartEdit = (props) => (
<Edit title={<TypeSparePartTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Edit Type Accessory
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="id" disabled required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="nameTypeSparePart" required/>
            </Box>
        </Box>
        <ArrayInput source="spareParts">
            <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                <TextInput fullWidth required source="nameSparePart"></TextInput>
                <br/>
                {<FormDataConsumer>
                {({formData,...rest}) => (
                    <ImageFieldCus url={rest.scopedFormData.imageName}></ImageFieldCus>
                )}
                </FormDataConsumer> }
                <p>Current Image</p>,
                <ImageInput source="imageFile" fullWidth>
                    <ImageField source="src"></ImageField>
                </ImageInput>
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const TypeSparePartCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Type Accessory
        </Typography>
        <TextInput fullWidth source="nameTypeSparePart" required/>
        <ArrayInput source="spareParts" >
            <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                <TextInput fullWidth required source="nameSparePart"></TextInput>
                <ImageInput fullWidth source="imageFile">
                    <ImageField source="src"></ImageField>
                </ImageInput>
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
</Create>
);