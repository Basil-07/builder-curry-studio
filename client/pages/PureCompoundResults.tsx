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
import {
  ArrowLeft,
  Download,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  FileText,
  Microscope,
  TrendingUp,
} from "lucide-react";

const PureCompoundResults = () => {
  const location = useLocation();
  const data = location.state;

  // Mock analysis results
  const mockResults = {
    isDrugDetected: true,
    drugProbability: 94.7,
    predictedDrugType: "Cocaine",
    confidence: 89.3,
    matchedPeaks: 12,
    totalPeaks: 15,
    fileName: data?.fileName || "spectrum_analysis.csv",
    fileSize: data?.fileSize || 2048,
    analysisTime: data?.analysisTime || new Date().toISOString(),
    peakMatches: [
      { expected: 1720, detected: 1722, match: true },
      { expected: 1600, detected: 1598, match: true },
      { expected: 1450, detected: 1453, match: true },
      { expected: 1280, detected: 1281, match: true },
      { expected: 1100, detected: null, match: false },
      { expected: 950, detected: 948, match: true },
    ],
    drugInfo: {
      chemical_name: "Cocaine Hydrochloride",
      molecular_formula: "C17H21NO4·HCl",
      classification: "Stimulant Narcotic",
      controlled_substance: "Schedule II",
      detection_method: "IR Spectroscopy",
    },
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return "text-emerald-600";
    if (confidence >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 85) return "bg-emerald-100 text-emerald-800";
    if (confidence >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-gradient-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/pure-compound">
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
          <h2 className="text-2xl font-semibold mb-2">Analysis Results</h2>
          <p className="text-white/80 text-lg">
            Pure compound detection analysis complete
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
                  {mockResults.isDrugDetected ? (
                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Drug Detection
                    </h3>
                    <p
                      className={`text-2xl font-bold ${
                        mockResults.isDrugDetected
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {mockResults.isDrugDetected ? "Positive" : "Negative"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12 text-blue-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Probability
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {mockResults.drugProbability}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-12 h-12 text-purple-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-detectraa-navy">
                      Confidence
                    </h3>
                    <p
                      className={`text-2xl font-bold ${getConfidenceColor(
                        mockResults.confidence,
                      )}`}
                    >
                      {mockResults.confidence}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detection Results */}
          {mockResults.isDrugDetected && (
            <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-detectraa-navy">
                  Detection Summary
                </CardTitle>
                <CardDescription className="text-lg">
                  Detailed analysis of the detected substance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-detectraa-navy">
                        Predicted Drug Type:
                      </span>
                      <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">
                        {mockResults.predictedDrugType}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                      <span className="font-medium text-detectraa-navy">
                        Confidence Level:
                      </span>
                      <Badge
                        className={`${getConfidenceBadge(
                          mockResults.confidence,
                        )} text-lg px-3 py-1`}
                      >
                        {mockResults.confidence}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-detectraa-navy">
                        Matched Peaks:
                      </span>
                      <span className="text-lg font-semibold text-purple-800">
                        {mockResults.matchedPeaks} / {mockResults.totalPeaks}
                      </span>
                    </div>
                  </div>

                  {/* Drug Information */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-detectraa-navy text-lg">
                      Substance Information:
                    </h4>
                    {Object.entries(mockResults.drugInfo).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-gray-200"
                        >
                          <span className="text-gray-600 capitalize">
                            {key.replace("_", " ")}:
                          </span>
                          <span className="font-medium text-detectraa-navy">
                            {value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Peak Matching Analysis */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                Peak Matching Analysis
              </CardTitle>
              <CardDescription className="text-lg">
                Detailed comparison of expected vs detected spectral peaks
                (Tolerance: ±20 cm⁻¹)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-detectraa-navy">
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Expected Peak (cm⁻¹)
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Detected Peak (cm⁻¹)
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-detectraa-navy">
                        Match Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockResults.peakMatches.map((peak, index) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          peak.match ? "bg-emerald-50/50" : "bg-red-50/50"
                        }`}
                      >
                        <td className="py-3 px-4 font-medium">
                          {peak.expected}
                        </td>
                        <td className="py-3 px-4">{peak.detected || "N/A"}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              peak.match
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {peak.match ? "✓ Match" : "✗ No Match"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Spectrum Visualization Placeholder */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                IR Spectrum Graph
              </CardTitle>
              <CardDescription className="text-lg">
                Visual representation of the analyzed spectrum with key peaks
                highlighted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-subtle h-80 rounded-lg flex items-center justify-center border-2 border-dashed border-detectraa-navy/30">
                <div className="text-center space-y-4">
                  <BarChart3 className="w-16 h-16 text-detectraa-navy/50 mx-auto" />
                  <p className="text-detectraa-navy/70 text-lg">
                    Spectrum visualization would appear here
                  </p>
                  <p className="text-detectraa-navy/50">
                    Interactive chart showing wavenumber vs absorbance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Information */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-detectraa border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-detectraa-navy">
                Analysis Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      File Name:
                    </span>
                    <span className="text-gray-700">
                      {mockResults.fileName}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      File Size:
                    </span>
                    <span className="text-gray-700">
                      {(mockResults.fileSize / 1024).toFixed(2)} KB
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Analysis Date:
                    </span>
                    <span className="text-gray-700">
                      {formatTimestamp(mockResults.analysisTime)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-detectraa-navy">
                      Processing Time:
                    </span>
                    <span className="text-gray-700">2.34 seconds</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-gradient-navy hover:bg-gradient-navy/90 text-white px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Report
            </Button>
            <Button className="bg-gradient-purple-blue hover:bg-gradient-purple-blue/90 text-white px-8 py-6 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Export Data
            </Button>
            <Link to="/pure-compound">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-detectraa-navy text-detectraa-navy"
              >
                New Analysis
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

export default PureCompoundResults;
