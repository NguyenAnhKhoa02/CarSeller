import { List,Datagrid,TextField,Edit,Create,SimpleForm,TextInput,useRecordContext,DeleteButton,ReferenceField,ReferenceInput,SelectInput,NumberField,NumberInput, ArrayInput, SimpleFormIterator, ImageInput, FormDataConsumer, ImageField } from "react-admin";
import { Box,Typography } from "@mui/material";
import { useEffect,useState } from "react";

// Tạo một thành phần để hiển thị tiêu đề của trang chỉnh sửa
const VersionTitle = () => {
    const record = useRecordContext();
    return <span>Version {record ? `"${record.nameVersion}"` : ''}</span>;
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
export const VersionList = (props) => (
<List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="nameVersion" />
        <NumberField source="price" />
        <ReferenceField source="modelId" reference="models" />
        <DeleteButton />
    </Datagrid>
</List>
);

// Component cho trang chỉnh sửa
export const VersionEdit = (props) => (
<Edit title={<VersionTitle />} {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <TextInput fullWidth source="id" disabled required/>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="nameVersion" required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <ReferenceInput source="modelId" reference="models">
                    <SelectInput fullWidth disabled required/>
                </ReferenceInput>
            </Box>
        </Box>
        <NumberInput fullWidth min={0} source="price" required/>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Detail
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="airBag" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="antiTheft" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="autoLock" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="backCamera" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="doorHandle" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontFogLight" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="gasCap" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="rearBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="seatMaterial" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wiperBlade" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wswandgl" />
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Info
        </Typography>
        <TextInput fullWidth source="info" multiline rows={5} />
        <br/>
        <ArrayInput source="colors">
            <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                <TextInput fullWidth required source="color" type="Color"></TextInput>
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
export const VersionCreate = (props) => (
<Create {...props}>
    <SimpleForm sx={{ maxWidth: 800 }}>
        <Typography variant="h5" gutterBottom> 
            Summary
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="nameVersion" required/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <ReferenceInput source="modelId" reference="models">
                    <SelectInput fullWidth required/>
                </ReferenceInput>
            </Box>
        </Box>
        <NumberInput fullWidth source="price" required/>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Detail
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="airBag" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="antiTheft" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="autoLock" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="backCamera" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="doorHandle" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="frontFogLight" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="gasCap" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="rearBrakes" />
            </Box>
        </Box>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="seatMaterial" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wiperBlade" />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                <TextInput fullWidth source="wswandgl" />
            </Box>
        </Box>
        <br/>
        <Typography variant="h5" gutterBottom> 
            Info
        </Typography>
        <TextInput fullWidth source="info" multiline rows={5} />
        <br/>
        <ArrayInput source="colors" >
            <SimpleFormIterator getItemLabel={index => `#${index + 1}`}>
                <TextInput fullWidth required source="color" type="color" value="#c48b9b"></TextInput>
                <ImageInput fullWidth source="imageFile">
                    <ImageField source="src"></ImageField>
                </ImageInput>
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
</Create>
);