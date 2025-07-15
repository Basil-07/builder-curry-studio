import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Microscope,
} from "lucide-react";

const PureCompoundDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setError(null);
      setSuccess(null);

      // Validate file type
      if (!file.name.toLowerCase().endsWith(".csv")) {
        setError("Please select a CSV file");
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }

      setSelectedFile(file);
      setSuccess("File selected successfully");
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (!file.name.toLowerCase().endsWith(".csv")) {
        setError("Please select a CSV file");
        return;
      }
      setSelectedFile(file);
      setSuccess("File selected successfully");
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // Navigate to results page with mock data
      navigate("/pure-compound/results", {
        state: {
          fileName: selectedFile.name,
          fileSize: selectedFile.size,
          analysisTime: new Date().toISOString(),
        },
      });
    } catch (err) {
      setError("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setError(null);
    setSuccess(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-gradient-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
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
          <h2 className="text-2xl font-semibold mb-2">
            Pure Compound Detection
          </h2>
          <p className="text-white/80 text-lg">
            Upload your IR spectrum CSV file for advanced drug analysis
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-detectraa border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-detectraa-navy mb-2">
                Upload IR Spectrum
              </CardTitle>
              <CardDescription className="text-lg">
                Select a CSV file containing your infrared spectrum data for
                analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* File Upload Area */}
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                    selectedFile
                      ? "border-emerald-400 bg-emerald-50/50"
                      : "border-detectraa-navy/30 hover:border-detectraa-navy/50 bg-gradient-subtle"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isLoading}
                  />

                  <div className="text-center">
                    {selectedFile ? (
                      <div className="space-y-4">
                        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                        <div>
                          <h3 className="text-lg font-semibold text-detectraa-navy">
                            File Selected
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {(selectedFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={clearFile}
                          disabled={isLoading}
                          className="mt-4"
                        >
                          Choose Different File
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-16 h-16 text-detectraa-navy/60 mx-auto" />
                        <div>
                          <h3 className="text-lg font-semibold text-detectraa-navy">
                            Drop your CSV file here
                          </h3>
                          <p className="text-gray-600">
                            or click to browse files
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Supports CSV files up to 10MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* File Format Info */}
                <Card className="bg-blue-50/50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">
                          CSV Format Requirements
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>
                            • Two columns: Wavenumber (cm⁻¹) and Absorbance
                          </li>
                          <li>• Header row optional</li>
                          <li>• Decimal values supported</li>
                          <li>• Range: 400-4000 cm⁻¹ recommended</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Error/Success Messages */}
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="border-emerald-200 bg-emerald-50">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <AlertDescription className="text-emerald-800">
                      {success}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Link to="/" className="flex-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full py-6 text-lg"
                      disabled={isLoading}
                    >
                      Back to Home
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-navy hover:bg-gradient-navy/90 text-white py-6 text-lg"
                    disabled={!selectedFile || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing Spectrum...
                      </>
                    ) : (
                      "Analyze Spectrum"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PureCompoundDetection;
