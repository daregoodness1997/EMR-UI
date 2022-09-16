import { Box } from '@mui/material';
import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  Font,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import { clientsList, reportList } from '../../utils/data';
import ClientReportTable from './ClientPDFTable';
import ReportTable from './PdfTable';

interface DocumentProps {
  title?: string;
  printData?: any[];
}

export const DocumentPDF: React.FC<DocumentProps> = ({ title, printData }) => (
  <Document>
    <Page size='A4' style={styles.body}>
      <Text style={styles.header} fixed>
        <Text style={styles.subtitle}>HCI Healthcare Limited</Text>
      </Text>
      <View style={styles.flex}>
        <Text style={styles.subtitle}>HCI Healthcare Limited</Text>
        <Text>Lagos, Nigeria</Text>
      </View>

      <View>
        {/* <ReportTable data={reportList} /> */}
        <ClientReportTable data={clientsList} />
      </View>
    </Page>
  </Document>
);

Font.register({
  family: 'Helvetica',
  src: '',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 8,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  subtitle: {
    fontSize: 14,
    margin: 12,
    fontFamily: 'Helvetica',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },

  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
});
