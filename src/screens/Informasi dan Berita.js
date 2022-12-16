import * as React from 'react';
import {View,SafeAreaView, ScrollView, Text, StyleSheet, Image} from "react-native";
// import { DataTable } from 'react-native-paper';

// Screen Information
const Information = ({ navigation }) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/Tinju.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  Banten Adakan PORKAB Tinju 2022
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>02 Desember 2022</Text>
              </View>
            </View>
            <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey'}}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/jobfair.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  WaBup Banten Apresiasi Job Fair Banten
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>25 November 2022</Text>
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
            <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/jobfair.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  WaBup Banten Apresiasi Job Fair Banten
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>29 Oktober 2022</Text>
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
                <Text style={{fontSize:12,color:'#9096A0'}}>28 Oktober 2022</Text>
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
                <Text style={{fontSize:12,color:'#9096A0'}}>27 Oktober 2022</Text>
              </View>
            </View>
            <View style={{ flex:1, height:100, flexDirection:'row', marginTop:10, borderBottomWidth:0.5, borderColor:'grey' }}>
              <View style={{flex:3,justifyContent:'center'}}>
                <Image source={require("../images/jobfair.png")} style={{marginLeft:20, width:64, height:64, borderRadius:10}} />
              </View>
              <View style={{flex:7, justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,marginTop:15, marginRight:10}}>
                  WaBup Banten Apresiasi Job Fair Banten
                </Text>
                <Text style={{fontSize:12,color:'#9096A0'}}>26 Oktober 2022</Text>
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
                <Text style={{fontSize:12,color:'#9096A0'}}>25 Oktober 2022</Text>
              </View>
            </View>

          </View>
        </ScrollView>
       </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
  MoreText: {
    flex:1,
    fontFamily: 'Poppins',
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#1F2937',
    lineHeight:21,
  },
})
export default Information;