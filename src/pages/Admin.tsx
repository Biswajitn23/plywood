import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2, Download, Eye, EyeOff, FileText } from "lucide-react";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  timestamp: string;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [previewSubmission, setPreviewSubmission] = useState<Submission | null>(null);

  const ADMIN_PASSWORD = "admin123"; // Change this to your desired password

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const loadSubmissions = () => {
    const data = JSON.parse(localStorage.getItem('fileSubmissions') || '[]');
    setSubmissions(data.reverse()); // Show newest first
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      const updated = submissions.filter(s => s.id !== id);
      localStorage.setItem('fileSubmissions', JSON.stringify(updated.reverse()));
      setSubmissions(updated);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete ALL submissions?")) {
      localStorage.removeItem('fileSubmissions');
      setSubmissions([]);
    }
  };

  const handleExport = () => {
    const csv = [
      ['Name', 'Email', 'Phone', 'File Name', 'File Size', 'Date & Time'],
      ...submissions.map(s => [
        s.name,
        s.email,
        s.phone,
        s.fileName,
        s.fileSize,
        new Date(s.timestamp).toLocaleString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleViewFile = (submission: Submission) => {
    setPreviewSubmission(submission);
  };

  const handleClosePreview = () => {
    setPreviewSubmission(null);
  };

  const handleDownloadFile = async (submission: Submission) => {
    try {
      const response = await fetch(submission.fileUrl);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = submission.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Download failed. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-cream p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-serif text-black mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze text-black"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full btn-luxury-solid">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-bronze hover:text-bronze/80">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-3xl font-serif text-white">File Submissions Dashboard</h1>
          </div>
          <div className="flex gap-3">
            {submissions.length > 0 && (
              <>
                <Button
                  onClick={handleExport}
                  variant="outline"
                  className="border-bronze text-bronze hover:bg-bronze/10"
                >
                  <Download size={16} className="mr-2" />
                  Export CSV
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-cream p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">Total Submissions</p>
            <p className="text-3xl font-bold text-black">{submissions.length}</p>
          </div>
          <div className="bg-cream p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">Today</p>
            <p className="text-3xl font-bold text-black">
              {submissions.filter(s => 
                new Date(s.timestamp).toDateString() === new Date().toDateString()
              ).length}
            </p>
          </div>
          <div className="bg-cream p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">This Week</p>
            <p className="text-3xl font-bold text-black">
              {submissions.filter(s => {
                const submissionDate = new Date(s.timestamp);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return submissionDate >= weekAgo;
              }).length}
            </p>
          </div>
        </div>

        {/* Submissions Table */}
        {submissions.length === 0 ? (
          <div className="bg-cream p-12 rounded-lg shadow text-center">
            <p className="text-gray-500">No submissions yet</p>
          </div>
        ) : (
          <div className="bg-cream rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-bronze/10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">File Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-black uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(submission.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-black">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <a href={`mailto:${submission.email}`} className="text-bronze hover:underline">
                          {submission.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <a href={`tel:${submission.phone}`} className="text-bronze hover:underline">
                          {submission.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {submission.fileName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {submission.fileSize}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-3">
                          <Button
                            onClick={() => handleViewFile(submission)}
                            className="btn-luxury-solid py-1 px-3 text-xs"
                          >
                            <FileText size={14} className="mr-1" />
                            View
                          </Button>
                          <button
                            onClick={() => handleDownloadFile(submission)}
                            className="text-green-500 hover:text-green-700"
                            title="Download file"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {previewSubmission && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div>
                  <p className="text-sm font-semibold text-black">{previewSubmission.fileName}</p>
                  <p className="text-xs text-gray-600">
                    Uploaded: {new Date(previewSubmission.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleDownloadFile(previewSubmission)}
                    className="btn-luxury-solid py-1 px-3 text-xs"
                  >
                    <Download size={14} className="mr-1" />
                    Download
                  </Button>
                  <button
                    onClick={handleClosePreview}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="h-[70vh] bg-gray-50">
                <iframe
                  src={previewSubmission.fileUrl}
                  title={previewSubmission.fileName}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
