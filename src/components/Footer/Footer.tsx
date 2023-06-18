import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full m-auto flex justify-center text-sm mt-10 mb-10 p-4 bg-gray-900">
            <p className="text-center">©Copyright - Todos os direitos reservados ao Mano_Imp. 
            Este site foi criado por <span><Link href="https://guia.gg" target="_blank" className="text-yellow-500 underline">GUIA.GG, crie um você também.</Link></span>.</p>
        </footer>
    )
}