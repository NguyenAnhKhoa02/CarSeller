import { Card, CardContent, CardHeader } from "@mui/material";
import {Row, Col} from "react-bootstrap";
import Chart from 'react-apexcharts'

const chartOptions={
    series:[{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60,95,80]
    }, {
        name: 'Store Customers',
        data: [40,30,80,90,36,40,10,16,20,51,13]
    }],
    options:{
        color:  ['#6ab04c', '#2980b9'],
        chart:  {
            background: 'transparent'
        },
        datalabels:{
            enabled: false
        },
        stroke:{
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
        },
        lengend:    {
            position: 'top'
        },
        grid:{
            show:false
        }

}
}

export const Dashboard = () => (
    <Card>
        <Row style={{margin:"5px"}}>
            <Col className="box mg-right" style={{backgroundColor:"rgb(50,31,219)"}}>
                <div className="line">
                    <CardHeader title="10k" />
                    <CardHeader title="10k" />
                </div>
                <CardContent>Tại đây chúng ta có thể thoải mái quản lý website</CardContent>
            </Col>
            <Col className="box mg-right" style={{backgroundColor:"rgb(51,153,254)"}}>
                <CardHeader title="10k" />
                <CardContent>Tại đây chúng ta có thể thoải mái quản lý website</CardContent>
            </Col>
            <Col className="box mg-right" style={{backgroundColor:"rgb(250,177,22)"}}>
                <CardHeader title="10k" />
                <CardContent>Tại đây chúng ta có thể thoải mái quản lý website</CardContent>
            </Col>
            <Col className="box" style={{backgroundColor:"rgb(229,83,83)"}}>
                <CardHeader title="10k" />
                <CardContent>Tại đây chúng ta có thể thoải mái quản lý website</CardContent>
            </Col>
        </Row>
        <Row style={{margin:"5px", marginTop:"20px"}}>
            <Col>
                <h4>Top customer</h4>
            </Col>
            
            <Col>
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
               />
            </Col>
        </Row>
    </Card>
    
);
