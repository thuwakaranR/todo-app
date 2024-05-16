import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

const ChartComponent = () => {
    return (
        <Card>
            <CardHeader
                title="Task Priorities"
                style={{ borderBottom: "1px solid #ccc" }}
            />
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'LOW' },
                                    { id: 1, value: 15, label: 'MEDIUM' },
                                    { id: 2, value: 20, label: 'HIGH' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default ChartComponent;
