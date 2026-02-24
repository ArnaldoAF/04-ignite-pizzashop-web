import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableRow, TableCell } from '@/components/ui/table'
import { Search, ArrowRight, X } from 'lucide-react'
import React from 'react'
import OrderDetails from './order-details'

export default function OrderTableRow() {
    return (
        <TableRow >
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs" >
                            <Search className='h-3 w-3' />
                            <span className='sr-only'>Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails />
                </Dialog>
            </TableCell>
            <TableCell className='font-mono text-sm font-medium'>123456789</TableCell>
            <TableCell className='text-muted-foreground'>10 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span>Pendente</span>
                </div>
            </TableCell>
            <TableCell className='font-medium'>João da Silva</TableCell>
            <TableCell className='font-medium'>R$ 59,90</TableCell>
            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight className='mr-2 h-3 w-3' />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className='mr-2 h-3 w-3' />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
