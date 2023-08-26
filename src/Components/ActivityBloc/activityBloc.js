import './activityBloc.css';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { getDepartmentOptions } from '../../Utilities/departmentOptions';
import { getLevelOptions } from '../../Utilities/levelOptions';
import { getTypeOptions } from '../../Utilities/typeOptions';
import GPMM_LOGO from '../../Assets/GPMM_logo.png';


/*
Bloc d'activité individuelle
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
props.acquitCreator
props.acquitDate
props.acquitHelp
props.acquitEquipment
props.acquitDescription
props.acquitResult
props.acquitObservation
props.acquitComments
*/


function ActivityBloc (props) {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#F6F6F6',
      padding: '10%',
      paddingTop: '5%',
      paddingBottom: '5%',
      fontSize: 12
    },
    section : {
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    leftSection: {
      width: '25%',
      borderColor: '#004638',
      borderWidth: 1,
      padding: 2,
    },
    rightSection: {
      borderColor: '#004638',
      borderWidth: 1,
      padding: 2,
      width: '75%'
    }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
      <Image 
        src={GPMM_LOGO}
        style={{width: '50%'}}
      />
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Titre de l'activité 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.title}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Description 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.description}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Site 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.site}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Niveau 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.level}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Type d'activité 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.type}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Système concerné
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.system}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Créé par 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {props.creator}
          </Text>
        </View>
        {props.employee.length &&
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Assigné à 
          </Text>
          {props.employee.map((emp) => 
            <Text
            style={styles.rightSection}
          >
            {emp}
          </Text>
          )}
        </View>
        }
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Activité cédulé 
          </Text>
          <Text
            style={styles.rightSection}
          >
            {new Date(props.activityDate).toLocaleDateString()} {new Date(props.activityDate).toLocaleTimeString().slice(0, 4)}{new Date(props.activityDate).toLocaleTimeString().slice(8)}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Activité créé
          </Text>
          <Text
            style={styles.rightSection}
          >
            {new Date(props.dateCreated).toLocaleDateString()} {new Date(props.dateCreated).toLocaleTimeString().slice(0, 4)}{new Date(props.dateCreated).toLocaleTimeString().slice(8)}
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={styles.leftSection}
          >
            Département
          </Text>
          <Text
            style={styles.rightSection}
          >
            {getDepartmentOptions(props.department)}
          </Text>
        </View>
        {props.acquit &&
          <>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >

            </Text>
            <Text
              style={styles.rightSection}
            >

            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              -
            </Text>
            <Text
              style={styles.rightSection}
            >
              Cette activité a été acquitté
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >

            </Text>
            <Text
              style={styles.rightSection}
            >

            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Acquitté le 
            </Text>
            <Text
              style={styles.rightSection}
            >
              {new Date(props.acquitDate).toLocaleDateString()} {new Date(props.acquitDate).toLocaleTimeString().slice(0, 4)}{new Date(props.acquitDate).toLocaleTimeString().slice(8)}
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Acquitté par 
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitCreator}
            </Text>
          </View>
          {props.acquitHelp.length && 
            <View style={styles.section}>
              <Text
                style={styles.leftSection}
              >
                Avec l'aide de  
              </Text>
              {props.acquitHelp.map((emp) => 
                <Text
                style={styles.rightSection}
              >
                {emp}
              </Text>
              )}
            </View>
          }
          {props.type === 'intervention' &&
          <>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Description
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitDescriptions}
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Equipement
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitEquipment}
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Resultat
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitResult}
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Observation
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitObservation}
            </Text>
          </View>
          </>
          }
          {props.type === 'general' &&
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Commentaires
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitComments}
            </Text>
          </View>
          }
          {props.type === 'routine' &&
          <View style={styles.section}>
            <Text
              style={styles.leftSection}
            >
              Commentaires
            </Text>
            <Text
              style={styles.rightSection}
            >
              {props.acquitComments}
            </Text>
          </View>
          }
          </>
        }
      </Page>
    </Document>
  );


  return (
    <div className='Activity'>
      <div className='ActivityInfo'>
        <div className='Top'>
          <div className='TopLeft'>
            <b>{props.title}</b>
          </div>
          <div className='TopRight'>
            Cédulé : <b>{new Date(props.activityDate).toLocaleDateString()}</b> {new Date(props.activityDate).toLocaleTimeString().slice(0, 4)}{new Date(props.activityDate).toLocaleTimeString().slice(8)}
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
      </div>
      <div className='DownloadPDF'>
        <PDFDownloadLink document={<MyDocument />} fileName={props._id + '.pdf'}>
          {({ blob, url, loading, error }) =>
            <FaFilePdf />
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default ActivityBloc;