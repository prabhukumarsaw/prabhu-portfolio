export default function Footer() {
  return (
    <footer className="bg-black/80 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}