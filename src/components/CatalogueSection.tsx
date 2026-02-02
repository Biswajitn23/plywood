import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, Download } from "lucide-react";

const CatalogueSection = () => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
      setFileName(files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setFileName(files[0].name);
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setFileName("");
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleUpload = () => {
    if (!file) return;

    const subject = "Project Specifications Submission";
    const body = `Hello,\n\nI am submitting the following file for your review:\n\nFile Name: ${file.name}\nFile Size: ${(file.size / 1024).toFixed(2)} KB\n\nPlease find the attached file and let me know your recommendations.\n\nThank you,\nBest regards`;

    const mailtoLink = `mailto:sales@plywoodhome.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-bronze mb-4">
              Download & Upload
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-6">
              Catalogue & Specifications
            </h2>
            <div className="divider-gold-wide mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download our complete catalogue or upload your project specifications for a personalized consultation
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Download Section */}
            <div className="bg-cream p-8 lg:p-10 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-black">Download Catalogue</h3>
              </div>
              <p className="text-gray-700 mb-8">
                Access our comprehensive catalogue featuring all our premium plywood collections, specifications, and finishes.
              </p>
              <a href="/cudecor_E_catlouge_.pdf" download>
                <Button className="w-full btn-luxury-solid">
                  Download PDF (55.2 MB)
                </Button>
              </a>
            </div>

            {/* Upload Section */}
            <div id="upload" className="bg-cream p-8 lg:p-10 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                  <FileUp className="w-5 h-5 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-black">Upload Specifications</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Share your project specifications or design files for personalized recommendations.
              </p>

              {/* Drag and Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging
                    ? "border-bronze bg-bronze/5"
                    : "border-bronze/30 bg-gray-50"
                }`}
              >
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <FileUp className="w-8 h-8 text-bronze mx-auto mb-3" />
                  <p className="text-black font-medium mb-1">
                    {fileName ? fileName : "Drop files here or click to select"}
                  </p>
                  <p className="text-xs text-gray-600">
                    Supported: PDF, Doc, Excel, Images
                  </p>
                </label>
              </div>

              <p className="text-[10px] text-gray-500 mt-3 text-center">
                Note: Upload will open your email client to submit the file
              </p>

              {file ? (
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button 
                    onClick={handleClearFile}
                    variant="outline"
                    className="w-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleUpload}
                    className="w-full btn-luxury-solid"
                  >
                    Upload File
                  </Button>
                </div>
              ) : (
                <Button 
                  disabled
                  className="w-full btn-luxury-solid mt-6 opacity-50"
                >
                  Select File
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;
