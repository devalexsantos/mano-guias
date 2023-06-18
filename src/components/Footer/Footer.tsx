import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full m-auto flex justify-center text-sm mt-10 mb-10 p-4 bg-gray-900">
            <p className="text-center">©Copyright - Todos os direitos reservados ao Mano_Imp. Este site não tem fins lucrativos e foi criado por um fã. Conheça o <Link href="https://d4guias.com" className="font-bold underline text-yellow-500" target="_blank">D4 Guias</Link>.</p>
        </footer>
    )
}