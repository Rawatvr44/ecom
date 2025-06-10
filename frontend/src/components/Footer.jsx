function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to bringing you the best shopping experience with top-quality products.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/category/all" className="text-gray-400 hover:text-emerald-400 transition">
                Shop All
              </a>
            </li>
            <li>
              <a href="/cart" className="text-gray-400 hover:text-emerald-400 transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/login" className="text-gray-400 hover:text-emerald-400 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="text-gray-400 hover:text-emerald-400 transition">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email: support@shop.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.94 13.94 0 01-10.12-5.14 4.916 4.916 0 001.523 6.557 4.902 4.902 0 01-2.229-.616v.061a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.586 3.414 9.867 9.867 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.069a13.936 13.936 0 007.548 2.213c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.95 3.62 9.04 8.36 9.79v-6.92h-2.52v-2.87h2.52v-2.18c0-2.49 1.49-3.85 3.76-3.85 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.87h-2.33v6.92c4.74-.75 8.36-4.84 8.36-9.79 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Shop. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;