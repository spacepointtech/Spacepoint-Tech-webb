import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your digital transformation? Contact us today and let's bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            href="tel:7020343268"
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              Phone
            </h3>
            <p className="text-gray-600">
              7020343268
            </p>
          </a>

          <a
            href="mailto:spacepointtech@gmail.com"
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              Email
            </h3>
            <p className="text-gray-600 break-all">
              spacepointtech@gmail.com
            </p>
          </a>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              Location
            </h3>
            <p className="text-gray-600">
              India
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
            onClick={() => window.location.href = 'mailto:spacepointtech@gmail.com'}
          >
            Send us a Message
          </Button>
        </div>
      </div>
    </section>
  );
}
