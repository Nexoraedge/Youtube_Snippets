"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  img: string;
  techstack: string[];
  description: string;
  link: string;
  cover: string;
  links: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
  ytvidlink: string;
  share_link: string;
}

export default function UploadPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [techStackInput, setTechStackInput] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });
  const [id, setId] = useState(1);


// Update your handleTextChange function

const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  
  let updatedFormData = { ...formData, [name]: value };
  
  // If updating the link field, extract ID from it
  if (name === "link" && value.includes("localhost:3000/")) {
    const extractedId = value.replace("http://localhost:3000/", "").replace("https://localhost:3000/", "");
    const numericId = parseInt(extractedId);
    
    if (!isNaN(numericId)) {
      updatedFormData.id = numericId;
      setId(numericId);
    }
  }
  
  setFormData(updatedFormData);
  console.log("Updated form data:", updatedFormData);
};

// Alternative: Use auto-generated IDs instead of extracting from link
const generateUniqueId = () => {
  return Date.now(); // Simple timestamp-based ID
};

// Initialize form with proper ID
const [formData, setFormData] = useState<CardData>({
  id: generateUniqueId(),
  title: "",
  img: "",
  techstack: [],
  description: "",
  link: "",
  cover: "",
  links: [
    {
      id: 1,
      img: "/icons/link.png",
      link: "",
      title: "Link",
    },
  ],
  ytvidlink: "",
  share_link: "",
});

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>, fieldName: "img" | "cover") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview for UI
    const reader = new FileReader();
    reader.onload = (event) => {
      if (fieldName === "img") {
        setPreviewImage(event.target?.result as string);
      } else {
        setCoverPreview(event.target?.result as string);
      }
    };
    reader.readAsDataURL(file);

    try {
      setUploading(true);
      // Prepare form data for file upload
      const formDataForUpload = new FormData();
      formDataForUpload.append("file", file);

      // Upload file to Supabase Storage
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload`, {
        method: "POST",
        body: formDataForUpload,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const data = await response.json();
      setFormData({ ...formData, [fieldName]: data.fileUrl });
      setMessage({ type: "success", content: `${fieldName} uploaded successfully!` });
    } catch (error) {
      console.error("Upload error:", error);
      setMessage({ type: "error", content: "Failed to upload file" });
    } finally {
      setUploading(false);
    }
  };

  const addTechStack = () => {
    if (techStackInput.trim()) {
      setFormData({
        ...formData,
        techstack: [...formData.techstack, techStackInput.trim()],
      });
      setTechStackInput("");
    }
  };

  const removeTechItem = (index: number) => {
    const updatedTechStack = [...formData.techstack];
    updatedTechStack.splice(index, 1);
    setFormData({ ...formData, techstack: updatedTechStack });
  };

  const addLinkItem = () => {
    const newId = formData.links.length > 0
      ? Math.max(...formData.links.map(link => link.id)) + 1
      : 1;

    setFormData({
      ...formData,
      links: [
        ...formData.links,
        {
          id: newId,
          img: "/icons/link.png",
          link: "",
          title: "New Link",
        },
      ],
    });
  };

  const removeLinkItem = (id: number) => {
    if (formData.links.length <= 1) {
      setMessage({ type: "warning", content: "You need at least one link" });
      return;
    }

    const updatedLinks = formData.links.filter(link => link.id !== id);
    setFormData({ ...formData, links: updatedLinks });
  };

  const updateLinkItem = (id: number, field: string, value: string) => {
    const updatedLinks = formData.links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    );
    

    setFormData({ ...formData, links: updatedLinks });
  };

  const handleSubmit = async (e: FormEvent) => {
    console.log("Form data before submit:", formData);
    e.preventDefault();
    console.log("Form data being sent:", formData);
  
    if (!formData.img || !formData.title || !formData.description) {
      setMessage({ type: "error", content: "Please fill all required fields" });
      return;
    }
  
    try {
      // Ensure ID is properly set before sending
      const dataToSend = {
        ...formData,
        id: formData.id || Date.now(), // Use timestamp as fallback if ID is not set
      };
  
      console.log("Data being sent to API:", dataToSend);
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.error || "Failed to submit data");
      }
  
      const result = await response.json();
      setMessage({ type: "success", content: "Project added successfully!" });
  
      // Reset form after successful submission
      const newId = Date.now(); // Generate new ID for next project
      setFormData({
        id: newId,
        title: "",
        img: "",
        techstack: [],
        description: "",
        link: "",
        cover: "",
        links: [
          {
            id: 1,
            img: "/icons/link.png",
            link: "",
            title: "Link",
          },
        ],
        ytvidlink: "",
        share_link: "",
      });
      setId(newId);
      setPreviewImage(null);
      setCoverPreview(null);
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({ type: "error", content: "Failed to save project data" });
    }
  };
  

  return (
    <div className="p-6 max-w-4xl mx-auto bg-neutral-600 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Upload New Project</h1>

      {message.content && (
        <div className={`p-4 mb-4 rounded ${message.type === "error" ? "bg-red-200 text-red-700" :
            message.type === "success" ? "bg-green-200 text-green-700" :
              "bg-yellow-100 text-yellow-700"
          }`}>
          {message.content}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Project Title*
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleTextChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Main Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Main Image*
          </label>
          <div className="mt-1 flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "img")}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {previewImage && (
              <div className="relative h-16 w-16">
                <Image
                  src={previewImage}
                  alt="Preview"
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Cover Image
          </label>
          <div className="mt-1 flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "cover")}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {coverPreview && (
              <div className="relative h-16 w-16">
                <Image
                  src={coverPreview}
                  alt="Cover Preview"
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Description*
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleTextChange}
            required
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Tech Stack
          </label>
          <div className="mt-1 flex">
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              placeholder="Enter tech stack item"
              className="block w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={addTechStack}
              className="px-4 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
          {formData.techstack.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.techstack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center"
                >
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => removeTechItem(index)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Link */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Project Link
          </label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleTextChange}
            placeholder="https://example.com"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* YouTube Video Link */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            YouTube Video Link
          </label>
          <input
            type="url"
            name="ytvidlink"
            value={formData.ytvidlink}
            onChange={handleTextChange}
            placeholder="https://www.youtube.com/embed/..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Share Link */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            share Link
          </label>
          <input
            type="url"
            name="share_link"
            value={formData.share_link}
            onChange={handleTextChange}
            placeholder="https://..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Links Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-300">
              External Links
            </label>
            <button
              type="button"
              onClick={addLinkItem}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
            >
              + Add Link
            </button>
          </div>

          {formData.links.map((link) => (
            <div key={link.id} className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-600">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Link #{link.id}</h4>
                <button
                  type="button"
                  onClick={() => removeLinkItem(link.id)}
                  className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500">Title</label>
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) => updateLinkItem(link.id, "title", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500">URL</label>
                  <input
                    type="url"
                    value={link.link}
                    onChange={(e) => updateLinkItem(link.id, "link", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="block text-xs font-medium text-gray-500">Icon</label>
                <select
                  value={link.img}
                  onChange={(e) => updateLinkItem(link.id, "img", e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="/icons/link.png">Default Link</option>
                  <option value="/icons/github.png">GitHub</option>
                  <option value="/icons/snippet.png">Snippet</option>
                  <option value="/icons/reddit.png">Reddit</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${uploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {uploading ? "Uploading..." : "Submit Project"}
          </button>
        </div>
      </form>
    </div>
  );
}