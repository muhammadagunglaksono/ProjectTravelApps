import * as React from 'react';
import {ScrollView,SafeAreaView,View,Text,StyleSheet,Image} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function GridView(){
  const [items, setItems] = React.useState([
    { name: 'Saung Kiray Sadang',code: 'Wisata Saung Kiray Sadang',src:require('../images/WisataSaungKiraySadang.jpg') },
    { name: 'Pulau Cangkir',code: 'Wisata Religi ke Pulau Cangkir',src:require('../images/WisataPulauCangkir.jpg') },
    { name: 'Telaga Biru Cigaru',code: 'Wisata Telaga Biru Cigaru',src:require('../images/WisataTelagaBiruCigaru.jpg') },
    { name: 'Pantai Carita',code: 'Wisata Pantai Carita',src:require('../images/WisataPantaiCarita.jpg') },
    { name: 'Makam Hasanudin',code: 'Wisata Makam Hasanudin',src:require('../images/WisataMakamHasannudin.jpg') },
    { name: 'Curug Goong',code: 'Wisata Curug Goong',src:require('../images/WisataCurugGoong.jpg') },
    { name: 'Saung Kiray Sadang',code: 'Wisata Saung Kiray Sadang',src:require('../images/WisataSaungKiraySadang.jpg') },
    { name: 'Pulau Cangkir',code: 'Wisata Religi ke Pulau Cangkir',src:require('../images/WisataPulauCangkir.jpg') },
    { name: 'Telaga Biru Cigaru',code: 'Wisata Telaga Biru Cigaru',src:require('../images/WisataTelagaBiruCigaru.jpg') },
    { name: 'Pantai Carita',code: 'Wisata Pantai Carita',src:require('../images/WisataPantaiCarita.jpg') },
    { name: 'Makam Hasanudin',code: 'Wisata Makam Hasanudin',src:require('../images/WisataMakamHasannudin.jpg') },
    { name: 'Curug Goong',code: 'Wisata Curug Goong',src:require('../images/WisataCurugGoong.jpg') },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: '#2193b0' }]}>
          <Image source={item.src} style={styles.itemSrc}/>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  );
}

// Screen Destination
const Destination = ({ navigation }) => {
return (
    <SafeAreaView>
      <ScrollView>
      <View style={{alignItems:'center', justifyContent:'center'}}>
            <View style={{ flex:1, height:60, flexDirection:'row', marginTop:10, borderBottomWidth:1, borderColor:'#E0E0E0' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Text style={styles.DestinationText}>Destinasi</Text>
              </View>
              <View style={{flex:3, justifyContent:'flex-end',flexDirection:'row', margin:10}}>
              <AntDesign name="search1" color={'grey'} size={30} style={{marginRight:15}}/>
              <Ionicons name="map-outline" size={30} color="grey" style={{ marginRight:20}}/>
              </View>
            </View>
            <View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginTop:20,width:60,height:30,borderRadius:10, backgroundColor:'#2193b0',justifyContent:'center', alignItems:'center'}}><Text>Semua</Text></View>
                <View style={{marginLeft:20,marginTop:20,height:30,borderRadius:10,justifyContent:'center', alignItems:'center'}}><Text>Wisata Alam</Text></View>
                <View style={{marginLeft:20,marginTop:20,height:30,borderRadius:10,justifyContent:'center', alignItems:'center'}}><Text>Wisata Air</Text></View>
                <View style={{marginLeft:20,marginTop:20,height:30,borderRadius:10,justifyContent:'center', alignItems:'center'}}><Text>Wisata Kuliner</Text></View>
              </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <GridView/>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  DestinationText: {
    marginLeft:20,
    fontFamily: 'Poppins',
    fontSize: 22, 
    fontWeight: '500',
    color: '#4B5563',
    lineHeight:27,
  },
  gridView: {
    marginTop: 20,
    // flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItem:'center',
    borderRadius: 5,
    padding:0,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemSrc: {
    flex:1,
    width:182,
    height:150,
    resizeMode:'contain',
    justifyContent: 'center',
    borderRadius: 5,
  }
});

export default Destination;