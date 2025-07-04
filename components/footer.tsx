import Link from "next/link";
import { appConfig } from "@/lib/config/app";

export const Footer = () => {
    return (
        <footer className="border-t-2 border-border">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <p><Link href="/">{appConfig.appName}</Link></p>
                    <p className="flex items-center gap-2 pl-2">by michael hurhangee •
                        <Link href="mailto:m.hurhangee@me.com" className="lowercase">
                            email
                        </Link>
                        •
                        <Link href="https://github.com/mhurhangee" className="lowercase">
                            github
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};