import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis,
} from 'recharts'
import colors, { violet } from 'tailwindcss/colors'

const data = [
    { date: '10/12', revenue: 400 },
    { date: '11/12', revenue: 300 },
    { date: '12/12', revenue: 200 },
    { date: '13/12', revenue: 278 },
    { date: '14/12', revenue: 189 },
    { date: '15/12', revenue: 239 },
    { date: '16/12', revenue: 349 },
]

export default function RevenueChart() {
    return (
        <Card className='col-span-6'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
                <div className="space-y-1">

                    <CardTitle className='text-base font-medium'>Receita no período</CardTitle>
                    <CardDescription className='text-sm text-muted-foreground'>Receita diaria do período atual</CardDescription>
                </div>
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
                <ResponsiveContainer width="100%" height={248}>
                    <LineChart
                        style={{
                            fontSize: 12
                        }}
                        data={data}>
                        <CartesianGrid vertical={false} className='stroke-muted' />
                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value: number) => value.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            dy={16}
                            stroke={colors.violet[500]}
                        />
                        <Tooltip />
                        <Line type="linear" dataKey="revenue" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
