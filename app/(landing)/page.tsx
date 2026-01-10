"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Pencil,
  Share2,
  Zap,
  Lock,
  Globe,
  MousePointer2,
  Shapes,
  StickyNote,
  CheckCircle2,
} from "lucide-react";

const LandingPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  const features = [
    {
      icon: Users,
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time. See cursors, changes, and updates instantly.",
    },
    {
      icon: Shapes,
      title: "Infinite Canvas",
      description:
        "Never run out of space. Our infinite canvas grows with your ideas and creativity.",
    },
    {
      icon: StickyNote,
      title: "Sticky Notes & Text",
      description:
        "Add sticky notes, text, and annotations to capture every thought and idea.",
    },
    {
      icon: Pencil,
      title: "Freehand Drawing",
      description:
        "Sketch, draw, and illustrate with intuitive drawing tools and brushes.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "Share boards with anyone. Control permissions and collaborate securely.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "Enterprise-grade security keeps your work safe and private.",
    },
  ];

  const useCases = [
    {
      title: "Brainstorming",
      description: "Generate and organize ideas visually with your team",
      icon: Zap,
    },
    {
      title: "Project Planning",
      description: "Map out projects, timelines, and workflows",
      icon: MousePointer2,
    },
    {
      title: "Design Thinking",
      description: "Run design sprints and workshops effectively",
      icon: Shapes,
    },
    {
      title: "Remote Meetings",
      description: "Make virtual meetings more engaging and productive",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
              <span className="text-xl font-bold">WhiteBoard</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#use-cases"
                className="text-slate-300 hover:text-white transition"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-white transition"
              >
                Testimonials
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="text-slate-300 hover:text-black transition"
              >
                {isSignedIn ? "Dashboard" : "Sign In"}
              </Button>
              <Button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">
                Now with AI-powered features
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Where teams
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                idea, create,{" "}
              </span>
              and collaborate
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              The visual collaboration platform for teams of all sizes.
              Brainstorm, plan, and bring your ideas to life on an infinite
              canvas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg"
              >
                Start for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700  px-8 py-6 text-lg bg-white/5 text-white"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              No credit card required • Free forever for individuals
            </p>
          </div>

          {/* Hero Image/Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-4 shadow-2xl">
              <div className="bg-slate-900 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-8 left-8 w-32 h-24 bg-yellow-400/90 rounded-lg shadow-lg transform -rotate-2 flex items-center justify-center p-3">
                  <span className="text-slate-900 text-sm font-medium">
                    Brainstorm ideas here! 💡
                  </span>
                </div>
                <div className="absolute top-16 right-16 w-36 h-28 bg-pink-400/90 rounded-lg shadow-lg transform rotate-3 flex items-center justify-center p-3">
                  <span className="text-slate-900 text-sm font-medium">
                    Design mockups 🎨
                  </span>
                </div>
                <div className="absolute bottom-12 left-1/4 w-40 h-32 bg-blue-400/90 rounded-lg shadow-lg transform rotate-1 flex items-center justify-center p-3">
                  <span className="text-slate-900 text-sm font-medium">
                    Project roadmap 🚀
                  </span>
                </div>
                <div className="absolute bottom-8 right-1/4 w-28 h-20 bg-green-400/90 rounded-lg shadow-lg transform -rotate-2 flex items-center justify-center p-3">
                  <span className="text-slate-900 text-sm font-medium">
                    Tasks ✓
                  </span>
                </div>
                {/* Cursors */}
                <div className="absolute top-1/3 left-1/3 flex items-center gap-1">
                  <MousePointer2 className="w-5 h-5 text-purple-400 fill-purple-400" />
                  <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
                    Zahira
                  </span>
                </div>
                <div className="absolute top-1/2 right-1/3 flex items-center gap-1">
                  <MousePointer2 className="w-5 h-5 text-blue-400 fill-blue-400" />
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    John
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 mb-8">
            Trusted by teams at innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {[
              "Acme Corp",
              "LoremIpsum",
              "JohnDoe Inc.",
              "Consectetur",
              "Adipiscing",
              "Eiusmod",
            ].map((company) => (
              <span key={company} className="text-xl font-bold text-slate-400">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to collaborate
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features that help teams work together seamlessly, no
              matter where they are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for every team</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From startups to enterprises, teams use WhiteBoard to bring their
              best ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center hover:scale-105 transition duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See what our users have to say about their experience with
              WhiteBoard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "WhiteBoard has transformed how our design team collaborates. We can't imagine going back to traditional tools.",
                author: "Sarah Chen",
                role: "Design Lead at TechStart",
                avatar: "SC",
              },
              {
                quote:
                  "The real-time collaboration is incredible. Our remote team feels like we're in the same room brainstorming together.",
                author: "Michael Rodriguez",
                role: "Product Manager at InnovateCo",
                avatar: "MR",
              },
              {
                quote:
                  "Simple yet powerful. We use it for everything from sprint planning to customer journey mapping.",
                author: "Emily Watson",
                role: "Agile Coach at FutureLabs",
                avatar: "EW",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">
                Ready to transform how you work?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of teams who use WhiteBoard to bring their ideas
                to life.
              </p>
              <Button
                size="lg"
                onClick={handleLogin}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-6 mt-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Instant setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
                <span className="text-xl font-bold">WhiteBoard</span>
              </div>
              <p className="text-slate-400 text-sm">
                The visual collaboration platform for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    What&apos;s New
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 WhiteBoard. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
