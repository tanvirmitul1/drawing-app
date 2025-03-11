export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Left Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/profile" className="block py-2 px-4 hover:bg-gray-700">
            Profile
          </a>
        </li>
        <li>
          <a href="/settings" className="block py-2 px-4 hover:bg-gray-700">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
