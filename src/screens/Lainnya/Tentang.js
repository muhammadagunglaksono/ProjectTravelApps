import * as React from 'react';
import {View, Text, StyleSheet} from "react-native";


// Screen AboutContent
const Tentang = ({ navigation }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.HeaderText}>
          Inspiring Province of Banten, The land of maritimes Spices route
        </Text>
        <Text style={styles.BaseText}>
          Aplikasi Exciting Banten, memudahkan untuk menemukan wisata-wisata di Provinsi Banten. {"\n\n"}
          Sistem Informasi dan Konten Promosi Multimedia Dinas Pariwisata Provinsi Banten 2022
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
HeaderText: {
  marginTop:20,
  marginLeft:16,
  width:327,
  height:96,
  fontFamily: 'Poppins',
  fontSize: 25, 
  fontWeight: 'bold',
  color: '#1F2937',
  lineHeight:32,
},
BaseText: {
  marginTop:10,
  marginLeft:16,
  width:326,
  height:126,
  fontFamily:'Roboto',
  fontStyle:'normal',
  fontSize:16,
  lineHeight:18,
  fontWeight:'400',
  textAlign:'justify',
  color:'#1F2937',
  justifyContent:'space-around',
}
})  

export default Tentang;