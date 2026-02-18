import React, { useState } from "react";
import ContCard from "../Components/ContCard";
import { Document, Page, pdfjs } from "react-pdf";
import ViewPdf from "../Features/ViewPdf";
import { useNavigate } from "react-router-dom";

import { useFiles } from "../Context/FileContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Library = () => {
  const { selectFile, selectedFile2, addFile, files, getProgress } = useFiles();
  const navigate = useNavigate();

  const [textContent, setTextContent] = useState("");
  const [pdfContent, setPdfContent] = useState(null);
  const [bookProgress, setBookProgress] = useState("");

  const [fileType, setFileType] = useState(null);
  const [fileName, setFileName] = useState("");

  const [numPages, setNumPages] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [showPdf, setShowPdf] = useState(false);

  const handleFileSElect = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;
    setFileName(selectedFile.name);

    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.name.endsWith(".pdf")
    ) {
      handlePdf(selectedFile);
    } else if (
      selectedFile.type.startsWith("text/") ||
      selectedFile.name.endsWith(".txt") ||
      selectedFile.name.endsWith(".md")
    ) {
      handleTextFile(selectedFile);
    } else {
      alert("Unsupported file type. Please upload .txt, .md, or .pdf files.");
    }
  };

  const handlePdf = async (file) => {
    setFileType("pdf");

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument(arrayBuffer).promise;

      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = {
          id: Date.now().toString(),
          name: file.name,
          type: "pdf",
          file: e.target.result,
          numPages: pdf.numPages,
          currentPage: 0,
          uploadedAt: new Date().toISOString(),
        };

        addFile(fileData);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error reading file:", error);
      alert("Failed to read pdf file");
    }
  };

  const handleTextFile = (file) => {
    setFileType("text");

    setFiles((prevFiles) => [...prevFiles, file]);
    const reader = new FileReader();

    reader.onload = (e) => {
      setTextContent(e.target.result);
    };

    reader.readAsText(file);
  };

  const openPdf = (file) => {
    selectFile(file);
    navigate(`/viewpdf/${file.id}`);
  };

  return (
    <div className="px-[16px] pt-[40px] overflow-hidden pb-15">
      <div className="flex justify-between mb-8 items-center">
        <p className="text-black text-tittle_Large">Library</p>
        <span className="flex w-[40px] h-[40px] rounded-[8.04] bg-white"></span>
      </div>

      <div className="bg-white h-[46px] w-full flex rounded-[11px] mb-4">
        <img src="/Variant3.svg" alt="search" className="w-[24px] mx-4" />
        <input
          type="text"
          placeholder="Search books..."
          className="outline-0 w-full"
        />
      </div>

      <div className="flex justify-between text-body_Small font-medium mb-4">
        <label
          htmlFor="fileselect"
          className="h-[38px] xsm:w-[160px] w-[171px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center"
        >
          <input
            type="file"
            accept=".txt,.pdf"
            id="fileselect"
            onChange={handleFileSElect}
            className="hidden"
          />
          <img src="/Variant3c.svg" alt="icon" className="w-[24px]" />
          <p>Upload file</p>
        </label>
        <div className="h-[38px] w-[171px] xsm:w-[160px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center">
          <img src="/Variant3b.svg" alt="icon" className="w-[24px]" />
          <p>Scan Cover</p>
        </div>
      </div>

      <div className="text-body_Small flex gap-4 w-full mb-8 overflow-scroll">
        <div className="flex justify-between w-200 gap-4">
          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>

          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Reading(2)
          </div>
          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Completed(0)
          </div>

          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>
        </div>
      </div>

      <div>
        {files.map((file) => (
          <ContCard
            key={file.id}
            fileName={file.name}
            page={file.currentPage || 0}
            totalPage={file.numPages || 0}
            progress={getProgress(file)}
            onOpen={() => openPdf(file)}
            progPercent={getProgress(file) + "%"}
            continueRead={
              file.currentPage < 1 ? "Start Reading" : "Continue Reading"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
