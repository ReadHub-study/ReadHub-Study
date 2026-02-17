import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const base64ToArrayBuffer = (base64) => {
  const base64String = base64.includes(",") ? base64.split(",")[1] : base64;

  const binaryString = window.atob(base64String);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
};

export const extractTextWithLayout = async (fileOrBase64) => {
  try {
    let arrayBuffer;
    // checkn if its a file object or a base64 string
    if (typeof fileOrBase64 === "string") {
      arrayBuffer = base64ToArrayBuffer(fileOrBase64);
    } else if (fileOrBase64 instanceof File) {
      arrayBuffer = await fileOrBase64.arrayBuffer();
    } else {
      throw new Error(
        "Invalid input: expected a File object or a base64 string",
      );
    }

    const pdf = await pdfjs.getDocument(arrayBuffer).promise;

    const allpages = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Get text items with position
      const textItems = textContent.items.map((item) => ({
        text: item.str,
      }));
      allpages.push({
        pageNumber: pageNum,
        textItems: textItems,
      });
    }
    return allpages;
  } catch (error) {
    console.error("Error extracting text with layout:", error);
    throw error;
  }
};
