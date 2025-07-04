import Link from "next/link";
import { appConfig } from "@/lib/config/app";

export const Header = () => {
    return (
        <nav className="border-b-2 border-black">
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">
                            {appConfig.emojiFavicon}
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/#about" className="text-xl font-bold">
                            about
                        </Link>
                        <Link href="/#posts" className="text-xl font-bold">
                            posts
                        </Link>
                        <Link href="/experiments" className="text-xl font-bold">
                            experiments
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};