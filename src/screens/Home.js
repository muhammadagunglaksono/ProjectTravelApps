import * as React from 'react';
import {StyleSheet,View,Image, Text,SafeAreaView,ScrollView} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FlatGrid } from 'react-native-super-grid';

//Function Grid
function GridView(){
  const [items, setItems] = React.useState([
    { name: 'Saung Kiray Sadang',code: 'Wisata Saung Kiray Sadang',src:require('../images/WisataSaungKiraySadang.jpg') },
    { name: 'Pulau Cangkir',code: 'Wisata Religi ke Pulau Cangkir',src:require('../images/WisataPulauCangkir.jpg') },
    { name: 'Telaga Biru Cigaru',code: 'Wisata Telaga Biru Cigaru',src:require('../images/WisataTelagaBiruCigaru.jpg') },
    { name: 'Pantai Carita',code: 'Wisata Pantai Carita',src:require('../images/WisataPantaiCarita.jpg') },
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

// Screen Home
const Home = ({ navigation }) => {
    return (
  <SafeAreaView>
    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex:1, height:60, flexDirection:'row', marginTop:10, borderBottomWidth:1, borderColor:'#E0E0E0' }}>
          <View style={{flex:3,justifyContent:'center'}}>
            <Image source={require('../images/BLogo.png')} style={{height:40,width:40,resizeMode:'contain', marginLeft:20}}/>
          </View>
          <View style={{flex:8, justifyContent:'center'}}>
            <View style={{ height:35,alignItems:'center', flexDirection:'row', borderWidth:0.5, borderRadius:40,borderColor:'grey'}}>
              <AntDesign name="search1" color={'grey'} size={20} style={{marginRight:30,marginLeft:15}}/>
              <Text style={{ color:'grey'}}>Cari Wisata</Text>
            </View>
          </View>
          <View style={{flex:3, justifyContent:'center',flexDirection:'row', margin:15}}>
            <AntDesign name="hearto" size={30} color="grey" style={{marginRight:15}}/>
          </View>
        </View>
        <View style={{flex:1,width:'100%',height:450,backgroundColor:'red',marginTop:10, borderBottomWidth:1, borderColor:'#E0E0E0'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../images/Beranda1.png')} style={{height:450,width:450,resizeMode:'contain'}}/>
          </View>
        </View>
        <View style={{flex:1,width:'100%',height:470,marginTop:10, borderBottomWidth:1, borderColor:'#E0E0E0'}}>
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.DestinationText}>Destinasi Wisata</Text>
            <Text style={styles.SubText}>Pilihan Terbaik</Text>
          </View>
          <View style={{flex:9,flexDirection:'row'}}>
            <GridView/>
          </View>
          <View style={styles.SubText,{flex:1.5,justifyContent:'center',alignItems:'center', fontWeight:'bold'}}>
            <Text onPress={() => navigation.navigate('Destination')}>Lihat Lainnya</Text>
          </View>
        </View>
        <View style={{flex:1,width:'100%',height:550,marginTop:10}}>
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.DestinationText}>Jelajahi Sekarang</Text>
            <Text style={styles.SubText}>Pilihan kategori yang diminati</Text>
          </View>
          <View style={{flex:2,flexDirection:'row'}}>
            <Image source={require('../images/Beranda2.png')} style={{height:450,width:450,resizeMode:'contain'}}/>
          </View>
          <View style={styles.SubText,{flex:1.5,justifyContent:'center',alignItems:'center', fontWeight:'bold'}}>
            <Text onPress={() => navigation.navigate('Destination')}>Lihat Lainnya</Text>
          </View>
        </View>
        <View style={{flex:1,width:'100%',height:400,marginTop:10, borderBottomWidth:1, borderColor:'#E0E0E0'}}>
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.DestinationText}>Informasi dan Berita</Text>
            <Text style={styles.SubText}>Seputar Banten</Text>
          </View>
          <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
            <View style={{flex:3,justifyContent:'center'}}>
              <Image source={require("../images/Tinju.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
            </View>
            <View style={{flex:7, justifyContent:'flex-start'}}>
              <Text style={{fontSize:16,marginTop:30, marginRight:10}}>
                Banten Adakan PORKAB Tinju 2022
              </Text>
              <Text style={{fontSize:12,color:'#9096A0'}}>02 Desember 2022</Text>
            </View>
          </View>
          <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/akli.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  AKLI Buat Proyek Pemerintah Jadi Lebih Terpantau
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>10 November 2022</Text>
              </View>
            </View>
            <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/Tinju.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  Banten Adakan PORKAB Tinju 2022
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>30 Oktober 2022</Text>
              </View>
            </View>
          <View style={{flex:0.8,fontFamily:'Poppins', justifyContent:'center',alignItems:'center', fontWeight:'bold',fontSize:50, color:'#0085CC',lineHeight:14}}>
            <Text onPress={() => navigation.navigate('Information')}>Informasi Lainnya</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
  DestinationText: {
    marginTop:15,
    fontFamily: 'Poppins',
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#4B5563',
    lineHeight:30,
  },
  SubText: {
    marginTop:2,
    fontFamily: 'Roboto',
    fontSize: 12, 
    fontWeight: '400',
    color: '#9096A0',
    lineHeight:17,
  },
  
  gridView: {
    marginTop: 15,
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

export default Home;