import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, X } from 'lucide-react'
import React from 'react'

export default function OrderTableFilter() {
    return (
        <form action="" className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros</span>
            <Input type="text" placeholder="Id do pedido" className='h-8 w-auto' />
            <Input type="text" placeholder="Nome do cliente" className='h-8 w-[320px]' />
            <Select defaultValue='all'>
                <SelectTrigger className='h-8 w-[180px]'>
                    <SelectValue placeholder="Status do pedido" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="approved">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>

                <Button variant="secondary" size="xs" type="submit">
                    <Search className='mr-2 h-4 w-4' />
                    Filtrar
                </Button>

                <Button variant="outline" size="xs" type="submit">
                    <X className='mr-2 h-4 w-4' />
                    Remover filtros
                </Button>
            </Select>
        </form>
    )
}
