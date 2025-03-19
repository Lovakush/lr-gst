// src/components/PDFExport.jsx
import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PDFExport = ({ targetRef, filename = 'lr-beverages-gst-report.pdf' }) => {
  const handleDownload = async () => {
    if (!targetRef.current) return;
    
    // Display loading state
    const button = document.getElementById('download-pdf-button');
    const originalText = button.innerHTML;
    button.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> Generating PDF...`;
    button.disabled = true;

    try {
      const element = targetRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#fff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // Determine if landscape or portrait is better
      const orientation = canvas.width > canvas.height ? 'l' : 'p';
      
      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'mm',
      });
      
      const imgWidth = orientation === 'l' ? 280 : 190;
      const pageHeight = orientation === 'l' ? 190 : 280;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      // Add more pages if content doesn't fit on first page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      // Reset button state
      button.innerHTML = originalText;
      button.disabled = false;
    }
  };

  return (
    <button 
      id="download-pdf-button"
      className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px]"
      onClick={handleDownload}
    >
      <Download className="mr-2" /> Download Full Audit Report (PDF)
    </button>
  );
};

export default PDFExport;