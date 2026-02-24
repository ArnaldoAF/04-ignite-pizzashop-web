import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
}

export default function Pagination(props: PaginationProps) {
    const { pageIndex, totalCount, perPage } = props

    const pagesCount = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de <strong>{totalCount}</strong> pedidos
            </span>
            <span className="text-sm text-muted-foreground">
                Página <strong>{pageIndex}</strong> de <strong>{pagesCount}</strong>
            </span>

            <div className="items-center gap-6 lg:gap-8">
                <div className='text-sm font-medium' >Página {pageIndex + 1} de {pagesCount}</div>
                <div className="flex items-center gap-2">
                    <Button className='h-8 w-8 p-0' variant="outline" size="sm" disabled={pageIndex === 0}>
                        <ChevronsLeft className='h-4 w-4' />
                        <span className="sr-only">Primeira Página</span>
                    </Button>
                    <Button className='h-8 w-8 p-0' variant="outline" size="sm" disabled={pageIndex === 0}>
                        <ChevronLeft className='h-4 w-4' />
                        <span className="sr-only">Página Anterior</span>
                    </Button>
                    <Button className='h-8 w-8 p-0' variant="outline" size="sm" disabled={pageIndex === 0}>
                        <ChevronRight className='h-4 w-4' />
                        <span className="sr-only">Próxima Página</span>
                    </Button>
                    <Button className='h-8 w-8 p-0' variant="outline" size="sm" disabled={pageIndex === 0}>
                        <ChevronsRight className='h-4 w-4' />
                        <span className="sr-only">Última Página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
