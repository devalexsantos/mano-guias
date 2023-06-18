import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full m-auto flex justify-center text-sm mt-10 mb-10 p-4">
            <p className="text-center">©Copyright - Todos os direitos reservados ao Mano_Imp. Este site é Open Source e foi criado por <span><Link href="https://devalexsantos.com" target="_blank" className="text-yellow-500 underline">um fã</Link></span> que curte o trampo do Mano_Imp. Se você é desenvolvedor e deseja contribuir com este projeto, acesse o <Link href="https://github.com/devalexsantos/mano-guias" target="_blank" className="text-yellow-500 underline">código fonte</Link>.</p>
        </footer>
    )
}