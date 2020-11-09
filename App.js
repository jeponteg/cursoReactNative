import React, { Fragment } from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

const App = () => (
  
  <View style={styles.container}>

    <View style={styles.container2}>
      <View>
        <Text style={styles.nombre}>Julio Orellana</Text>
        <Text style={styles.edad}>31</Text>  
      </View>   
      <View style={styles.logo}>
        <Image  style={styles.tinyLogo}
          source={{uri: 'https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA'}}
        />
      </View>
    </View>

    <View style={styles.container3}>
      <Text style={styles.title}> Bio: </Text>
      <Text style={styles.cargo}> Desarrollador Informatico </Text>
      <Text style={styles.title2}> Descripción: </Text>
    </View>

    <View style={styles.container4}>
      <View style={styles.text1}>
        <Text style={styles.contenido}>Lorem ipsum dolor sit amet consectetur adipiscing elit justo, tincidunt porttitor maecenas nibh taciti accumsan ac nam viverra, ullamcorper dignissim consequat facilisi suspendisse sed interdum. Fermentum porta vel penatibus dignissim at sem egestas vulputate mattis netus quam, sapien montes porttitor cum pulvinar proin taciti arcu vestibulum velit semper, habitasse vehicula suspendisse neque malesuada justo praesent vitae est euismod. </Text>
      </View>
      <View style={styles.text2}>
        <Text style={styles.contenido2}>Mattis lobortis gravida volutpat sagittis venenatis eleifend suspendisse iaculis facilisis integer ullamcorper tempus, penatibus mus nam ultricies posuere etiam sapien aenean torquent cum netus. Curae mus et arcu ornare diam ligula hac potenti varius, luctus massa elementum primis enim vivamus conubia dignissim aliquet tellus, id ac torquent habitasse cubilia posuere fusce himenaeos. Semper porta iaculis tristique enim sociosqu torquent pellentesque odio non sem massa ad, dis malesuada vivamus proin fames cum natoque arcu nisi diam.</Text>
      </View> 
    </View>
 
  </View>
  
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#95A6A6',
  },
  container2: {
    flex: 2,
    flexDirection:'row',
  },
  container3: {
    flex: 1,
  },
  container4: {
    flex: 4, 
    flexDirection:'row',
    marginTop:15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginLeft:70,
    borderRadius:150,
  },
  
  text1:{
    flex:1,
    padding:5,
  },
  text2:{
    flex:1,
    padding:5,
  },

  nombre:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
    paddingTop:30,
    marginLeft:10,
  },
  edad:{
    fontSize:20,
    color:'white',
    marginLeft:10,
  },

  logo:{
    paddingTop:20,
  },

  cargo:{
    fontSize:15,
    color:'black',
    marginLeft:10,
    marginTop:15,
  },
  title:{
    fontSize:15,
    color:'#838585',
    marginLeft:10,
  },
  title2:{
    fontSize:15,
    color:'#838585',
    marginLeft:10,
    marginTop:15,
  },

  contenido:{
    marginLeft:10,
    textAlign:'justify',
    fontSize:14,
  },
  contenido2:{
    marginRight:10,
    textAlign:'justify',
    fontSize:14,
  }

});

