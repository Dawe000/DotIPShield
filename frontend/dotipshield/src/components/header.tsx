import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="bg-blue-300 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="/" passHref>
                        <span className="cursor-pointer rounded-full bg-blue-500 px-5 py-2 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                            Home
                        </span>
                    </Link>
                    <Link href="/View" passHref>
                        <span className="cursor-pointer rounded-full bg-blue-500 px-5 py-2 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                            View
                        </span>
                    </Link>
                    <Link href="/Create" passHref>
                        <span className="cursor-pointer rounded-full bg-blue-500 px-5 py-2 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                            Create
                        </span>
                    </Link>
                    <Link href="/Transfer" passHref>
                        <span className="cursor-pointer rounded-full bg-blue-500 px-5 py-2 text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                            Transfer
                        </span>
                    </Link>
                </div>
                <div className="ml-4">
                    <ConnectButton />
                </div>
            </div>
        </div>
    );
}
