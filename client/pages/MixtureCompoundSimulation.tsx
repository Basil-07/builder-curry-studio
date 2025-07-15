import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeft,
  FlaskConical,
  Microscope,
  Loader2,
  Info,
  Beaker,
  Calculator,
} from "lucide-react";

const MixtureCompoundSimulation = () => {
  const [selectedDrug, setSelectedDrug] = useState<string>("");
  const [drugPercentage, setDrugPercentage] = useState<number>(50);
  const [selectedCuttingAgent, setSelectedCuttingAgent] = useState<string>("");
  const [cuttingAgentPercentage, setCuttingAgentPercentage] =
    useState<number>(50);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Sample drug options
  const drugs = [
    "cocaine",
    "heroin",
    "fentanyl",
    "methamphetamine",
    "mdma",
    "ketamine",
    "lsd",
    "cannabis",
  ];

  // Sample cutting agent options
  const cuttingAgents = [
    "lactose",
    "mannitol",
    "inositol",
    "cornstarch",
    "baking_soda",
    "talc",
    "creatine",
    "caffeine",
  ];

  const formatDrugName = (drug: string) => {
    return drug
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleDrugPercentageChange = (value: number) => {
    if (value < 1) value = 1;
    if (value > 100) value = 100;
    setDrugPercentage(value);

    // Auto-adjust cutting agent percentage
    const maxCuttingAgent = 100 - value;
    if (cuttingAgentPercentage > maxCuttingAgent) {
      setCuttingAgentPercentage(maxCuttingAgent);
    }
  };

  const handleCuttingAgentPercentageChange = (value: number) => {
    const maxAllowed = 100 - drugPercentage;
    if (value < 0) value = 0;
    if (value > maxAllowed) value = maxAllowed;
    setCuttingAgentPercentage(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!selectedDrug) {
      setError("Please select a drug");
      return;
    }

    if (!selectedCuttingAgent) {
      setError("Please select a cutting agent");
      return;
    }

    if (drugPercentage + cuttingAgentPercentage > 100) {
      setError("Total percentage cannot exceed 100%");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Navigate to results page with simulation data
      navigate("/mixture-compound/results", {
        state: {
          drug: selectedDrug,
          drugPercentage,
          cuttingAgent: selectedCuttingAgent,
          cuttingAgentPercentage,
          simulationTime: new Date().toISOString(),
        },
      });
    } catch (err) {
      setError("Simulation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const totalPercentage = drugPercentage + cuttingAgentPercentage;
  const remainingPercentage = 100 - totalPercentage;

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
            Mixture Compound Simulation
          </h2>
          <p className="text-white/80 text-lg">
            Configure drug mixtures to simulate real-world detection scenarios
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-detectraa border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-teal-emerald w-fit">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl text-detectraa-navy mb-2">
                Simulate Drug Mixture
              </CardTitle>
              <CardDescription className="text-lg">
                Configure the composition of your mixture for comprehensive
                analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Drug Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-detectraa-navy flex items-center gap-2">
                    <Beaker className="w-5 h-5" />
                    Primary Drug Component
                  </Label>
                  <Select value={selectedDrug} onValueChange={setSelectedDrug}>
                    <SelectTrigger className="h-14 text-lg">
                      <SelectValue placeholder="Select a drug for analysis" />
                    </SelectTrigger>
                    <SelectContent>
                      {drugs.map((drug) => (
                        <SelectItem key={drug} value={drug} className="text-lg">
                          {formatDrugName(drug)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Drug Percentage */}
                <div className="space-y-4">
                  <Label className="text-base font-medium text-detectraa-navy">
                    Drug Percentage (1-100%)
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      value={drugPercentage}
                      onChange={(e) =>
                        handleDrugPercentageChange(Number(e.target.value))
                      }
                      className="h-12 text-lg font-semibold"
                    />
                    <span className="text-lg font-medium text-detectraa-navy">
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-purple-blue h-3 rounded-full transition-all duration-300"
                      style={{ width: `${drugPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Cutting Agent Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-detectraa-navy flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Cutting Agent
                  </Label>
                  <Select
                    value={selectedCuttingAgent}
                    onValueChange={setSelectedCuttingAgent}
                  >
                    <SelectTrigger className="h-14 text-lg">
                      <SelectValue placeholder="Select cutting agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {cuttingAgents.map((agent) => (
                        <SelectItem
                          key={agent}
                          value={agent}
                          className="text-lg"
                        >
                          {formatDrugName(agent)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Cutting Agent Percentage */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium text-detectraa-navy">
                      Cutting Agent Percentage (0-{100 - drugPercentage}%)
                    </Label>
                    <span className="text-sm text-gray-600">
                      Max: {100 - drugPercentage}%
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="0"
                      max={100 - drugPercentage}
                      value={cuttingAgentPercentage}
                      onChange={(e) =>
                        handleCuttingAgentPercentageChange(
                          Number(e.target.value),
                        )
                      }
                      className="h-12 text-lg font-semibold"
                    />
                    <span className="text-lg font-medium text-detectraa-navy">
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-teal-emerald h-3 rounded-full transition-all duration-300"
                      style={{ width: `${cuttingAgentPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Mixture Summary */}
                <Card className="bg-blue-50/50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Mixture Composition Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">
                          {selectedDrug ? formatDrugName(selectedDrug) : "Drug"}
                          :
                        </span>
                        <span className="font-semibold text-blue-900">
                          {drugPercentage}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">
                          {selectedCuttingAgent
                            ? formatDrugName(selectedCuttingAgent)
                            : "Cutting Agent"}
                          :
                        </span>
                        <span className="font-semibold text-blue-900">
                          {cuttingAgentPercentage}%
                        </span>
                      </div>
                      {remainingPercentage > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-blue-800">Remaining:</span>
                          <span className="font-semibold text-blue-900">
                            {remainingPercentage}%
                          </span>
                        </div>
                      )}
                      <div className="border-t border-blue-300 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-blue-900">
                            Total:
                          </span>
                          <span
                            className={`font-bold text-lg ${
                              totalPercentage === 100
                                ? "text-emerald-600"
                                : "text-orange-600"
                            }`}
                          >
                            {totalPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Error Message */}
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-4">
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
                    className="flex-1 bg-gradient-teal-emerald hover:bg-gradient-teal-emerald/90 text-white py-6 text-lg"
                    disabled={
                      !selectedDrug || !selectedCuttingAgent || isLoading
                    }
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Running Simulation...
                      </>
                    ) : (
                      "Simulate Mixture"
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

export default MixtureCompoundSimulation;
