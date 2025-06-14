import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Youtube, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with J3 RAS Aquafarm for inquiries, orders, or farm visits
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="tel:+919048856639">+91 9048856639</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick chat and instant responses</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/9048856639">Chat on WhatsApp</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us detailed inquiries</p>
                <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="mailto:j3aquafarm@gmail.com">j3aquafarm@gmail.com</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Address and Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Visit Our Farm</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">
                      J3 RAS Aquafarm
                      <br />
                      KIZHAKKE MAVADI, THONDIYIL
                      <br />
                      PERAVOOR, KERALA
                      <br />
                      India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Farm Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="https://maps.app.goo.gl/uaxXL8kXxQtRoiRs8">Get Directions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Aquafarm+(J3%20RAS%20Aquafarm)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">Click the map to open in Google Maps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Follow Us</h2>
          <p className="text-gray-600 mb-8">
            Stay connected with our latest updates, farm tours, and educational content
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Youtube className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">YouTube Channel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Watch our farm tours, educational videos, and behind-the-scenes content
                </p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="https://www.youtube.com/@j3rasaquafarm478">Subscribe to Channel</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-pink-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-600">Instagram</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Daily updates, photos of our fish and plants, and farming tips</p>
                <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                  <Link href="https://www.instagram.com/j3_aquafarm?igsh=MWpiaWdqdWkycG83Zw==">Follow Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">
            Whether you're interested in our fish, want to visit our farm, or have questions about our sustainable
            practices, we'd love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="tel:+919048856639">Call Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="https://wa.me/9048856639">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
