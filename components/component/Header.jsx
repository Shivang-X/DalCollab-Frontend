"use client"
import Link from "next/link"

export function Header() {
  return (
    (<div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b">
        <Link className="mr-6 flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Login
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Register
          </Link>
        </nav>
      </header>
    </div>)
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
