import React from 'react';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import { DocumentPDF } from '.';

interface DownloadButtonProps {
  printData?: any[];
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ printData }) => {
  const [instance, updateInstance] = usePDF({
    document: <DocumentPDF title='Sample Download' printData={printData} />,
  });
  return (
    <>
      <a
        href={instance.url || '#'}
        download='download.pdf'
        style={{
          textDecoration: 'none',
          padding: '10px',
          height: '42px',
          color: '#2f2f2f',
          backgroundColor: '#f2f2f2',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Download PDF
      </a>
    </>
  );
};

export default DownloadButton;
