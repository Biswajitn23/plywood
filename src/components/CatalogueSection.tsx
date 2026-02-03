import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, Download } from "lucide-react";

const CatalogueSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setFileName(files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name || !email || !phone) return;

    setIsUploading(true);

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      alert("Cloudinary is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.");
      setIsUploading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      const fileUrl = data.secure_url as string;

      // Store submission in localStorage for admin page (link only)
      const submission = {
        id: Date.now(),
        name,
        email,
        phone,
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(2) + ' KB',
        fileUrl,
        timestamp: new Date().toISOString(),
      };

      const existingSubmissions = JSON.parse(localStorage.getItem('fileSubmissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('fileSubmissions', JSON.stringify(existingSubmissions));

      // Send webhook notification to Make.com
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      if (webhookUrl && webhookUrl !== 'your-make-webhook-url-here') {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              fileName: file.name,
              fileSize: (file.size / 1024).toFixed(2) + ' KB',
              fileUrl,
              timestamp: new Date().toLocaleString(),
            }),
          });
        } catch (error) {
          console.log('Webhook notification failed:', error);
        }
      }

      const emailAddress = "sales@plywoodhome.com";
      
      // Email notification
      const emailSubject = "New File Submission";
      const emailBody = `New file submission received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nFile: ${file.name}\nSize: ${(file.size / 1024).toFixed(2)} KB\nLink: ${fileUrl}\n\nPlease check the admin panel for details.`;
      
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      // Show success and reset
      setIsUploading(false);
      setUploadSuccess(true);
      
      setTimeout(() => {
        setFile(null);
        setFileName("");
        setName("");
        setEmail("");
        setPhone("");
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Upload failed. Please try again.");
      setIsUploading(false);
    }
  };

  return (
    <section id="catalogue" className="py-20 lg:py-28 bg-background">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6">
            {/* Download Section */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-bronze" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-black">Download Catalogues</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                Access our comprehensive catalogues featuring all our premium plywood collections, specifications, and finishes.
              </p>
              
              <div className="flex flex-col gap-4 md:gap-8">
                <a href="/cudecor_E_catlouge_.pdf" download className="block">
                  <Button className="w-full btn-luxury-solid text-sm py-4 h-auto flex flex-col items-center gap-2 touch-manipulation min-h-[60px]">
                    <span className="font-semibold">CU DECOR Catalogue</span>
                    <span className="text-xs opacity-90">55.21 MB</span>
                  </Button>
                </a>
                
                <a href="/CU DECOR DIGITAL CATALOGUE (1).pdf" download className="block">
                  <Button className="w-full btn-luxury-solid text-sm py-4 h-auto flex flex-col items-center gap-2 touch-manipulation min-h-[60px]">
                    <span className="font-semibold">CU DECOR Digital</span>
                    <span className="text-xs opacity-90">5.96 MB</span>
                  </Button>
                </a>
                
                <a href="/ULTIMO LAMX 2025-26.pdf" download className="block">
                  <Button className="w-full btn-luxury-solid text-sm py-4 h-auto flex flex-col items-center gap-2 touch-manipulation min-h-[60px]">
                    <span className="font-semibold">ULTIMO LAMX 2025-26</span>
                    <span className="text-xs opacity-90">1.04 MB</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Upload Section */}
            <div id="upload" className="bg-cream p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center">
                  <FileUp className="w-5 h-5 text-bronze" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-black">Upload Specifications</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                Share your project specifications or design files for personalized recommendations.
              </p>

              {uploadSuccess ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                  <p className="text-green-700 font-semibold mb-2">✓ Submission Successful!</p>
                  <p className="text-sm text-green-600">We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* User Details */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze text-black"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g., name@example.com)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze text-black"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      title="Please enter exactly 10 digits"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze text-black"
                      placeholder="Enter 10-digit phone number"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Upload File *
                    </label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center border-bronze/30 bg-gray-50">
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleFileSelect}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                        required
                      />
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <FileUp className="w-8 h-8 text-bronze mx-auto mb-2" />
                        <p className="text-black font-medium mb-1">
                          {fileName ? fileName : "Click to select file"}
                        </p>
                        <p className="text-xs text-gray-600">
                          PDF, Doc, Excel, Images
                        </p>
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isUploading || !file || !name || !email || !phone}
                    className="w-full btn-luxury-solid disabled:opacity-50 touch-manipulation min-h-[48px]"
                  >
                    {isUploading ? 'Submitting...' : 'Submit'}
                  </Button>
                  {isUploading && (
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <span className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-bronze animate-spin" />
                      <span>Uploading to Cloudinary... please wait.</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;
