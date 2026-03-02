import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'

export default function MonthCancelOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold"> Cancelamentos no mês</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    24
                </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">
                        -5.67%
                    </span>{' '}
                    em relação a ontem
                </p>

            </CardContent>
        </Card>
    )
}
