export default function Footer() {
    return (
      <footer
        className="py-8 mt-24"
        style={{ backgroundColor: '#FFF5EE' }}
      >
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Blog Website</h2>
              <p className="text-gray-600 mt-2">
                Sharing thoughts, insights, and stories.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-500 hover:underline mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <hr className="border-t border-gray-300 mb-6" />
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Blog Website. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-blue-400 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-blue-500 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-pink-500 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  