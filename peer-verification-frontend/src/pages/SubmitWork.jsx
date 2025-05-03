import React, { useState } from 'react';

const SubmitWork = () => {
  const [file, setFile] = useState(null);
  const [client, setClient] = useState("");
  const [previewType, setPreviewType] = useState("blur");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to backend here (formData)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Submit Your Work</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full border p-2 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Client Email or Username"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="block w-full border p-2 rounded-md"
            required
          />
          <select
            value={previewType}
            onChange={(e) => setPreviewType(e.target.value)}
            className="block w-full border p-2 rounded-md"
          >
            <option value="blur">Blurred Preview</option>
            <option value="snippet">Code Snippet Only</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Work
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitWork;
