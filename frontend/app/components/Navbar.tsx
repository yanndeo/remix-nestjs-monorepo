import { Link } from "@remix-run/react";
import { ReceiptEuro, BellDot, UserRound} from "lucide-react";

export const Navbar = ({logo}) => {
    return (
        <nav className="px-6 py-8 bg-bleu text-white flex justify-between items-center " >
          <img src={logo} className="w-full h-auto max-w-[180px]" />
          <div className="flex gap-2">
            <Link to='/'> <ReceiptEuro className="flex-shrink-0" /></Link>
            <Link to='/'><BellDot className="flex-shrink-0 fill-white" /></Link>
            <Link to='/' className="flex-shrink-0"><UserRound className="flex-shrink-0" /></Link>
          </div>
        </nav>
    );
}
