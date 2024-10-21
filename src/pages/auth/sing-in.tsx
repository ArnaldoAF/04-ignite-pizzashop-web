import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { z } from 'zod';
import { Toaster, toast } from 'sonner'
import { Link } from "react-router-dom";


const singInForm = z.object({
    email: z.string().email()
})

type SingInForm = z.infer<typeof singInForm>

export function SingIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SingInForm>()

    async function handleSingIn(data: SingInForm) {
        await new Promise((resolve) => setTimeout(resolve, 200))
        toast.success("link enviado ", {
            action: {
                label: "reenviar",
                onClick: () =>
                    handleSingIn(data)
            }
        })
    }


    return (
        <>
            <Helmet title="Login" />
            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">

                    <Link to="/sing-up" >
                        Novo estabelecimento
                    </Link>
                </Button>
                <div className="w-{350px} flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tighter">Acessar Painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
                    </div>

                    <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>

                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            Acessar Painel
                        </Button>

                    </form>
                </div>
            </div>
        </>
    )
}