import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileSearch,
  FlaskConical,
  Microscope,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-detectraa relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20 pattern-dots pattern-bg-transparent pattern-white/10 pattern-size-6"></div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-6 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Microscope className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
            Detectraa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Advanced IR Spectrum Drug Detection Platform
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Medical Grade Accuracy
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Real-time Analysis
            </span>
            <span className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Comprehensive Reports
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          {/* Detection Methods Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Choose Detection Method
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Select the appropriate analysis method for your IR spectrum data
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Pure Compound Detection */}
              <Card className="group hover:shadow-detectraa-xl transition-all duration-300 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-purple-blue group-hover:scale-110 transition-transform duration-300">
                    <FileSearch className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    Pure Compound Detection
                  </CardTitle>
                  <CardDescription className="text-white/70 text-base">
                    Analyze single compound IR spectra for precise drug
                    identification and classification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 text-white/80">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span>Upload CSV spectrum files</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span>AI-powered peak analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span>Detailed confidence reports</span>
                    </div>
                  </div>
                  <Link to="/pure-compound" className="block">
                    <Button className="w-full bg-gradient-purple-blue hover:bg-gradient-purple-blue/90 text-white font-semibold py-6 text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Pure Analysis
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Mixture Compound Simulation */}
              <Card className="group hover:shadow-detectraa-xl transition-all duration-300 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-teal-emerald group-hover:scale-110 transition-transform duration-300">
                    <FlaskConical className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    Mixture Compound Simulation
                  </CardTitle>
                  <CardDescription className="text-white/70 text-base">
                    Simulate and analyze drug mixtures with cutting agents for
                    comprehensive detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6 text-white/80">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span>Configure mixture percentages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span>Advanced mixture modeling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span>Comparative analysis tools</span>
                    </div>
                  </div>
                  <Link to="/mixture-compound" className="block">
                    <Button className="w-full bg-gradient-teal-emerald hover:bg-gradient-teal-emerald/90 text-white font-semibold py-6 text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Mixture Simulation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features Section */}
          <section className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose Detectraa?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Medical Grade Accuracy
                </h4>
                <p className="text-white/70">
                  Clinically validated algorithms ensure precise detection
                  results
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Lightning Fast
                </h4>
                <p className="text-white/70">
                  Get comprehensive analysis results in seconds, not hours
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Detailed Reports
                </h4>
                <p className="text-white/70">
                  Professional PDF reports with comprehensive analysis data
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
