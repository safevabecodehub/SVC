import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            SVC
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="#whitepaper"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Whitepaper
            </Link>
            <Link
              href="#docs"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © SafeVibeCode Community, 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
