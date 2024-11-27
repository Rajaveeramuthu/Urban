export default function Footer() {
    return (
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl text-white font-bold mb-4">Urban Maintanence Notifier</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis scelerisque convallis.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-white  font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="/aboutus" className="text-white hover:text-white">About us</a></li>
                <li><a href="/report" className="text-white hover:text-white">Report</a></li>
                <li><a href="/contactus" className="text-white hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl  text-white font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-white">
                <li>police no: 1234567890</li>
                <li>Telephone: 1234-1234-1234</li>
                <li>Gmail: abc053@gmail.com</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="text-white pt-9 text-center">
            <p>@copy right Trio-Triumph</p>
          </div>
      </footer>
    )
  }