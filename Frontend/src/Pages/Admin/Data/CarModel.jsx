import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,ImageInput,ImageField,FormDataConsumer,NumberInput,SelectInput } from "react-admin";
import { Box,Typography } from "@mui/material";
import { useState,useEffect } from "react";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const CarModelTitle = () => {
    const record = useRecordContext();
    return <span>Model {record ? `"${record.nameModel}"` : ''}</span>;
  };
  
// Component cho trang danh sách
export const CarModelList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="nameModel" />
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
export const CarModelEdit = (props) => (
<Edit title={<CarModelTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput disabled fullWidth source="id" />
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth required source="nameModel" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth required min={0} source="numCarSeat"></NumberInput>
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <SelectInput fullWidth required source="fuel" choices={[
                    {id:'gasoline',name:'Xăng'},
                    {id:'dieselFuel',name:'Dầu diesel'}
                ]}/>
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="info" multiline rows={5}/>
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <ImageInput source="imageName" label="Related pictures" accept="image/*" id="image">
                    {<FormDataConsumer>
                        {({formData,...rest}) => (
                        <ImageFieldCus url={formData.imageName}></ImageFieldCus>
                    )}
                    </FormDataConsumer> }

                </ImageInput>
            </Box>
        </Box>
    </SimpleForm>
</Edit>
);

// Component cho trang tạo mới
export const CarModelCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Create Car Model
        </Typography>
        <TextInput fullWidth required source="nameModel" />
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <NumberInput fullWidth required min={0} source="numCarSeat"></NumberInput>
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <SelectInput fullWidth required source="fuel" choices={[
                    {id:'gasoline',name:'Xăng'},
                    {id:'dieselFuel',name:'Dầu diesel'}
                ]}/>
            </Box>
        </Box>
        <TextInput fullWidth multiline rows={5} source="info" />
        <ImageInput source="imageFile" label="Related pictures" accept="image/*" id="image">
            <ImageField source="src"></ImageField>
        </ImageInput>
    </SimpleForm>
</Create>
);