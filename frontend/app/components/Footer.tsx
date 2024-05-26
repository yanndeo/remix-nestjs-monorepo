import { Link, NavLink } from "@remix-run/react";

import { Mail, Plus, Search, Star, Users2 } from "lucide-react";


export  const Footer = () => {
    return (
        <footer className="mt-auto overflow-x-auto bg-lightTurquoise p-4 flex items-center justify-between gap-3">
          <FooterLinkItem href='/' icon={<Search />} label="Recherche" />
          <FooterLinkItem href='/home' icon={<Users2 />} label="Offreurs" />
          <FooterLinkItem  href='/' icon={ <Plus />} label="Demandes" />
          <FooterLinkItem href='/' icon={<Star />} label="Favoris " />
          <FooterLinkItem href='/' icon={<Mail/>} label=" Message" />
        </footer>
    );
}

const FooterLinkItem = ({icon, label, href}: {icon: React.ReactNode, label: string, href: string}) => {
    return(
    <NavLink className={({ isActive }) =>
        `flex flex-col items-center text-sm ${isActive ? 'text-vert' : 'text-bleu'}`
    } to={href}>
    {icon} <span className="text-bleu">{label}</span>
</NavLink>
)
}