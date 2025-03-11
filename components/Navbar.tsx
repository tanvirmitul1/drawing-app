"use client";

import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">MyApp</Link>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/settings" className="hover:underline">
            Settings
          </Link>
        </li>
      </ul>

      <div>
        (
        <Link
          href="/login"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </Link>
        )
      </div>
    </nav>
  );
}
