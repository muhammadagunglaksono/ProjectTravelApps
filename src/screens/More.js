import * as React from 'react';
import {StyleSheet,View, Text, Image, Linking} from "react-native";
import { DataTable } from 'react-native-paper';
// import { color } from 'react-native-reanimated';

// Screen More
const More = ({ navigation }) => {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1.5,justifyContent:'space-between',width:'100%',flexDirection:'row',alignItems:'center', marginTop:20 }}>
          <Image style={{width: 125, height: 125, resizeMode: 'contain',margin:20, 
          borderRadius:20 }} source={require('../images/Logo.png')} />
          <Image style={{width: 75, height: 75, resizeMode: 'contain',margin:20 }} 
          source={require('../images/BLogo.png')} />
        </View>
        <View style={{ flex: 4,justifyContent:'center',
        width:'100%', alignItems:'stretch', flexDirection:'column' }}>
        <DataTable style={{flex:1}}>
          <DataTable.Row style={styles.TableRow}>
            <DataTable.Cell onPress={() => navigation.navigate('Tentang')}>
            <Text style={styles.MoreText}>Tentang</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.TableRow}>
            <DataTable.Cell onPress={() => navigation.navigate('Favorit Destinasi')}>
            <Text style={styles.MoreText}>Favorit Destinasi</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.TableRow}>
            <DataTable.Cell>
            <Text style={styles.MoreText}>Kritik dan Saran</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.TableRow}>
            <DataTable.Cell>
            <Text style={styles.MoreText}>Nilai Aplikasi</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        </View>
        <View style={{ flex: 3, paddingTop:20 ,width:'100%' }}>
          <Text style={styles.MoreFooterText}>App Version 1.0 {"\n"}</Text>
            <Text style={styles.MoreFooterText}>Hak Cipta © 2021 {"\n"}
              <Text style={styles.innerText}>Dinas Kebudayaan Dan Pariwista Provinsi Banten {"\n"}</Text>
            </Text>
            <Text style={styles.MoreFooterText,styles.LinkText}
              onPress={() => Linking.openURL('https://dispar.bantenprov.go.id/')}>
              www.dispar.bantenprov.go.id
            </Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    MoreText: {
      fontFamily: 'Poppins',
      fontSize: 16, 
      fontWeight: 'bold',
      color: '#1F2937',
      lineHeight:21,
    },
    MoreFooterText: {
      fontFamily:'Roboto',
      fontStyle:'normal',
      lineHeight:14,
      fontWeight:'400',
      textAlign:'center',
      color:'#4B5563',
      justifyContent:'space-around',
    },
    TableRow: {
      flex:0,
      flexGrow:2,
      margin:10,
      borderBottomWidth:1, 
      borderBottomColor:'white',
    },
    innerText: {
      color: 'black',
      fontWeight:'bold',
    },
    LinkText: {
      fontFamily:'Roboto',
      fontStyle:'normal',
      lineHeight:14,
      fontWeight:'400',
      textAlign:'center',
      justifyContent:'space-around',
      color: 'blue',
    }
  });

export default More;