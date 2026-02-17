import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export default function AccountMenu() {
  return (
    <>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button 
            className='flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/80 select-none' 
            variant="outline" 
            >
                Pizza Shop
                <ChevronDown className='h-4 w-4' />
            </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel className='flex flex-col'>
                <span>Arnaldo Assis</span>
                <span className="text-xs font-normal text-muted-foreground">arnaldo@pizzashop.com</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
                <Building className='w-4 h-4 mr-2'/>
                <span>Perfil da loja</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
                <LogOut className='w-4 h-4 mr-2'/>
                <span>Sair</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
        
    </DropdownMenu>
    </>
  )
}
