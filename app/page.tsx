import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Fish, Droplets, Leaf, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Fish className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to J3 RAS Aquafarm</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sustainable aquaculture meets modern technology. Experience the future of fish farming with our eco-friendly
            Recirculating Aquaculture System.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/features">Explore Features</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Farm Description */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Farm</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                J3 RAS Aquafarm is a pioneering sustainable aquaculture facility that combines cutting-edge
                Recirculating Aquaculture System (RAS) technology with integrated aquaponics and hydroponics systems.
                Our mission is to produce high-quality fish while maintaining environmental responsibility.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in raising premium Tilapia in a controlled, eco-friendly environment that maximizes fish
                health and minimizes environmental impact. Our integrated approach allows us to grow fresh vegetables
                and herbs alongside our fish production.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <Droplets className="h-5 w-5" />
                  <span className="font-medium">Water Efficient</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Leaf className="h-5 w-5" />
                  <span className="font-medium">Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/y_zgkR5qhJ8"
                  title="J3 RAS Aquafarm Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 text-center">Take a virtual tour of our aquafarm facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose J3 RAS Aquafarm?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Fish className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Fish</h3>
                <p className="text-gray-600">
                  High-quality Tilapia raised in optimal conditions for the best taste and nutrition.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">RAS Technology</h3>
                <p className="text-gray-600">
                  Advanced recirculating systems that conserve water and maintain perfect conditions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrated Growing</h3>
                <p className="text-gray-600">
                  Aquaponics and hydroponics systems producing fresh vegetables and herbs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h2>
          <p className="text-blue-100 mb-8">Stay updated with our latest developments and behind-the-scenes content</p>
          <div className="flex gap-6 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="https://youtube.com/@j3rasaquafarm" className="flex items-center gap-2">
                <Youtube className="h-5 w-5" />
                YouTube Channel
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="https://instagram.com/j3rasaquafarm" className="flex items-center gap-2">
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
