import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Droplets, Leaf, Sprout, Apple, BellIcon as Pepper } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Features & Products</h1>
          <p className="text-xl text-gray-600">
            Discover our sustainable aquaculture systems and the variety of products we offer
          </p>
        </div>
      </section>

      {/* Fish Types */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Premium Fish</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Fish className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Tilapia</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">Premium quality Tilapia raised in our RAS system</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Fresh
                    </Badge>
                    <span className="text-2xl font-bold text-blue-600">₹200</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High protein content</li>
                    <li>• Sustainably raised</li>
                    <li>• Chemical-free environment</li>
                    <li>• Available year-round</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm Features */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Farm Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Eco-Friendly RAS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our Recirculating Aquaculture System uses 95% less water than traditional fish farming methods.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Water recycling technology</li>
                  <li>• Biological filtration</li>
                  <li>• Temperature control</li>
                  <li>• Oxygen optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Aquaponics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated system where fish waste provides nutrients for plants, creating a sustainable ecosystem.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Natural fertilization</li>
                  <li>• Zero chemical inputs</li>
                  <li>• Symbiotic relationship</li>
                  <li>• Maximum efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Hydroponics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Soilless cultivation system for growing fresh vegetables and herbs with precise nutrient control.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faster growth rates</li>
                  <li>• Higher yields</li>
                  <li>• Pest-free environment</li>
                  <li>• Year-round production</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plants & Vegetables */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fresh Produce</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Apple className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Grapes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Sweet, juicy grapes grown in our hydroponic system</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Seasonal
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Pepper className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Chilli</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Spicy chillis with intense flavor and heat</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Year-round
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Leafy Greens</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Fresh lettuce, spinach, and other leafy vegetables</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Year-round
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sprout className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Herbs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Basil, mint, cilantro, and other aromatic herbs</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  Year-round
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Products?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sustainable</h3>
              <p className="text-blue-100">Environmentally responsible farming practices</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
                <Fish className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fresh Quality</h3>
              <p className="text-blue-100">Farm-to-table freshness guaranteed</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Chemical-Free</h3>
              <p className="text-blue-100">No harmful chemicals or antibiotics used</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
