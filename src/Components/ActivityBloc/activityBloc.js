import './activityBloc.css';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { getDepartmentOptions } from '../../Utilities/departmentOptions';
import { getLevelOptions } from '../../Utilities/levelOptions';
import { getTypeOptions } from '../../Utilities/typeOptions';


/*
List all the devices on screen and fetch the live data of all of them.
*/

/*
props.acquit 
props.activityDate 
props.dateCreated
props.department
props.description
props.employee
props.level
props.site
props.system
props.title
props.type
*/


function ActivityBloc (props) {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );


  return (
    <div className='Activity'>
      <div className='Top'>
        <div className='TopLeft'>
          <b>{props.title}</b>
        </div>
        <div className='TopRight'>
          Créé : <b>{new Date(props.activityDate).toLocaleDateString()}</b> {new Date(props.activityDate).toLocaleTimeString().slice(0, 4)}{new Date(props.activityDate).toLocaleTimeString().slice(8)}
        </div>
      </div>
      <div className='Middle'>
        <div className='MiddleLeft'>
          Département : <b>{getDepartmentOptions(props.department)}</b>
        </div>
        <div className='MiddleRight'>
          {getTypeOptions(props.type)}
        </div>
      </div>
      <div className='Bottom'>
        <div className='BottomLeft'>
          Site de travail : <b>{props.site}</b>
        </div>
        <div className='BottomRight'>
          <b>{getLevelOptions(props.level)}</b>
        </div>
      </div>
      <PDFDownloadLink document={<MyDocument />} fileName={props.title + '.pdf'}>
        {({ blob, url, loading, error }) =>
          <FaFilePdf />
        }
      </PDFDownloadLink>
    </div>
  );
}

export default ActivityBloc;