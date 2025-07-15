import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Download,
  FlaskConical,
  BarChart3,
  FileText,
  Microscope,
  PieChart,
  TrendingUp,
  Layers,
} from "lucide-react";

const MixtureCompoundResults = () => {
  const location = useLocation();
  const data = location.state;

  // Mock simulation results
  const mockResults = {
    drug: data?.drug || "cocaine",
    drugPercentage: data?.drugPercentage || 60,
    cuttingAgent: data?.cuttingAgent || "lactose",
    cuttingAgentPercentage: data?.cuttingAgentPercentage || 40,
    predictedDominantDrug: data?.drug || "cocaine",
    matchPercentage: 87.3,
    simulationTime: data?.simulationTime || new Date().toISOString(),
    foundPeaks: [
      { target: 1720, detected: 1722, intensity: 0.89 },
      { target: 1600, detected: 1598, intensity: 0.76 },
      { target: 1450, detected: 1453, intensity: 0.82 },
      { target: 1280, detected: 1281, intensity: 0.67 },
      { target: 950, detected: 948, intensity: 0.73 },
    ],
    mixtureAnalysis: {
      purity: 85.2,
      contamination: 14.8,
      signal_strength: "Strong",
      interference: "Low",
      reliability: "High",
    },
  };

  const formatDrugName = (drug: string) => {
    return drug
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return "text-emerald-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getMatchBadgeColor = (percentage: number) => {
    if (percentage >= 80) return "bg-emerald-100 text-emerald-800";
    if (percentage >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-gradient-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/mixture-compound">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="p-2 rounded-lg bg-white/10">
              <Microscope className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">Detectraa</h1>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Simulation Results</h2>
          <p className="text-white/80 text-lg">
            Mixture compound simulation analysis complete
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <FlaskConical className="w-12 h-12 text-blue-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Dominant Drug
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatDrugName(mockResults.predictedDominantDrug)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12 text-emerald-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Peak Match
                    </h3>
                    <p
                      className={`text-2xl font-bold ${getMatchColor(
                        mockResults.matchPercentage,
                      )}`}
                    >
                      {mockResults.matchPercentage}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Layers className="w-12 h-12 text-purple-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Components
                    </h3>
                    <p className="text-2xl font-bold text-purple-600">
                      {mockResults.foundPeaks.length} Detected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mixture Composition */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy flex items-center gap-3">
                <PieChart className="w-8 h-8" />
                Simulated Mixture Composition
              </CardTitle>
              <CardDescription className="text-lg">
                Configured composition of the simulated drug mixture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-detectraa-navy">
                        Primary Drug: {formatDrugName(mockResults.drug)}
                      </span>
                      <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                        {mockResults.drugPercentage}%
                      </Badge>
                    </div>
                    <Progress
                      value={mockResults.drugPercentage}
                      className="h-3"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-detectraa-navy">
                        Cutting Agent:{" "}
                        {formatDrugName(mockResults.cuttingAgent)}
                      </span>
                      <Badge className="bg-teal-100 text-teal-800 text-lg px-3 py-1">
                        {mockResults.cuttingAgentPercentage}%
                      </Badge>
                    </div>
                    <Progress
                      value={mockResults.cuttingAgentPercentage}
                      className="h-3"
                    />
                  </div>

                  {mockResults.drugPercentage +
                    mockResults.cuttingAgentPercentage <
                    100 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-detectraa-navy">
                          Remaining Components
                        </span>
                        <Badge className="bg-gray-100 text-gray-800 text-lg px-3 py-1">
                          {100 -
                            mockResults.drugPercentage -
                            mockResults.cuttingAgentPercentage}
                          %
                        </Badge>
                      </div>
                      <Progress
                        value={
                          100 -
                          mockResults.drugPercentage -
                          mockResults.cuttingAgentPercentage
                        }
                        className="h-3"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-detectraa-navy text-lg">
                    Mixture Analysis:
                  </h4>
                  {Object.entries(mockResults.mixtureAnalysis).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-200"
                      >
                        <span className="text-gray-600 capitalize">
                          {key.replace("_", " ")}:
                        </span>
                        <span className="font-medium text-detectraa-navy">
                          {typeof value === "number" ? `${value}%` : value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detection Results */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                Identification Results
              </CardTitle>
              <CardDescription className="text-lg">
                Analysis of characteristic peaks and drug identification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-detectraa-navy">
                      Predicted Dominant Drug:
                    </span>
                    <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                      {formatDrugName(mockResults.predictedDominantDrug)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                    <span className="font-medium text-detectraa-navy">
                      Peak Match Percentage:
                    </span>
                    <Badge
                      className={`${getMatchBadgeColor(
                        mockResults.matchPercentage,
                      )} text-lg px-3 py-1`}
                    >
                      {mockResults.matchPercentage}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-detectraa-navy">
                      Characteristic Peaks Found:
                    </span>
                    <span className="text-lg font-semibold text-purple-800">
                      {mockResults.foundPeaks.length}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-subtle p-6 rounded-lg">
                  <h4 className="font-semibold text-detectraa-navy text-lg mb-4">
                    Analysis Summary:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The mixture simulation successfully identified{" "}
                    <strong>{formatDrugName(mockResults.drug)}</strong> as the
                    dominant compound with{" "}
                    <strong>{mockResults.matchPercentage}%</strong> peak
                    matching confidence. The presence of{" "}
                    <strong>{formatDrugName(mockResults.cuttingAgent)}</strong>{" "}
                    as a cutting agent was confirmed through spectral analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Peak Analysis Table */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                Characteristic Peaks Found in Mixture
              </CardTitle>
              <CardDescription className="text-lg">
                Detailed peak analysis showing target vs detected wavenumbers
                and intensities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-detectraa-navy">
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Target (cm⁻¹)
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Detected (cm⁻¹)
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Intensity
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Signal Strength
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockResults.foundPeaks.map((peak, index) => (
                      <tr key={index} className="border-b bg-emerald-50/30">
                        <td className="py-3 px-4 font-medium">{peak.target}</td>
                        <td className="py-3 px-4">{peak.detected}</td>
                        <td className="py-3 px-4 font-medium">
                          {peak.intensity.toFixed(3)}
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              peak.intensity > 0.8
                                ? "bg-emerald-100 text-emerald-800"
                                : peak.intensity > 0.6
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }
                          >
                            {peak.intensity > 0.8
                              ? "Strong"
                              : peak.intensity > 0.6
                                ? "Medium"
                                : "Weak"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Spectrum Visualization Placeholders */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardHeader>
                <CardTitle className="text-xl text-detectraa-navy">
                  Mixture Spectrum Graph
                </CardTitle>
                <CardDescription>
                  Simulated IR spectrum of the drug mixture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-subtle h-64 rounded-lg flex items-center justify-center border-2 border-dashed border-detectraa-navy/30">
                  <div className="text-center space-y-2">
                    <BarChart3 className="w-12 h-12 text-detectraa-navy/50 mx-auto" />
                    <p className="text-detectraa-navy/70">
                      Mixture spectrum visualization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardHeader>
                <CardTitle className="text-xl text-detectraa-navy">
                  Pure Drug Reference
                </CardTitle>
                <CardDescription>
                  Reference spectrum for {formatDrugName(mockResults.drug)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-subtle h-64 rounded-lg flex items-center justify-center border-2 border-dashed border-detectraa-navy/30">
                  <div className="text-center space-y-2">
                    <BarChart3 className="w-12 h-12 text-detectraa-navy/50 mx-auto" />
                    <p className="text-detectraa-navy/70">
                      Reference spectrum visualization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simulation Information */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                Simulation Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Simulation Date:
                    </span>
                    <span className="text-gray-700">
                      {formatTimestamp(mockResults.simulationTime)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Processing Time:
                    </span>
                    <span className="text-gray-700">1.87 seconds</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Algorithm Version:
                    </span>
                    <span className="text-gray-700">Detectraa v2.1.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Model Accuracy:
                    </span>
                    <span className="text-gray-700">94.8%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-gradient-teal-emerald hover:bg-gradient-teal-emerald/90 text-white px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Report
            </Button>
            <Button className="bg-gradient-purple-blue hover:bg-gradient-purple-blue/90 text-white px-8 py-6 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Export Simulation Data
            </Button>
            <Link to="/mixture-compound">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-detectraa-navy text-detectraa-navy"
              >
                New Simulation
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-detectraa-navy text-detectraa-navy"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MixtureCompoundResults;
