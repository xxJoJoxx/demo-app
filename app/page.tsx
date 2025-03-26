import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Cloud, Zap, Users, Boxes } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Deploy Faster Than Ever
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Deploy Your Apps with <span className="text-blue-600">One Click</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Staxa simplifies cloud deployment for everyone. Choose your preferred cloud provider,
            click once, and watch your application go live. No complex configurations required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Deploy Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">AWS</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Azure</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">Google Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Staxa?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>One-Click Deployment</CardTitle>
                <CardDescription>
                  Deploy your applications to any major cloud provider with just a single click. No technical expertise required.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>For Everyone</CardTitle>
                <CardDescription>
                  Whether you're a developer or business owner, our platform makes cloud deployment accessible to all.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Boxes className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Multi-Cloud Support</CardTitle>
                <CardDescription>
                  Choose from AWS, Azure, Google Cloud, and more. Switch providers anytime without hassle.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Start Deploying Today</CardTitle>
              <CardDescription className="text-center">
                Join thousands of users who've simplified their deployment process with Staxa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Company Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Work Email" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started for Free
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  No credit card required • Free tier available
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-4">Supported Cloud Providers: AWS • Azure • Google Cloud • Digital Ocean</p>
          <p>© 2024 Staxa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
