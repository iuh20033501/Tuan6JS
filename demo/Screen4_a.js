        import { StatusBar } from 'expo-status-bar';
        import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
        import { NavigationContainer } from '@react-navigation/native';
        import { createNativeStackNavigator } from '@react-navigation/native-stack';
        
        export default function Screen4_a({navigation}) {
  
            const [data, setData] = useState([
                {
                  id: 1,
                  name: 'Ca nấu lẩu, nấu mì mini...',
                  shop: 'Devang',
                  image: require('../demo/img/ly.png'),
                },
                {
                  id: 2,
                  name: '1KG KHÔ GÀ BƠ TỎI ...',
                  shop: 'LTD Food',
                  image: require('../demo/img/khoga.png'),
                },
                {
                  id: 3,
                  name: 'Xe cần cẩu đa năng',
                  shop: 'Thế giới đồ chơi',
                  image: require('../demo/img/xedochoi.png'),
                  
                },
                {
                  id: 4,
                  name: 'Đồ chơi dạng mô hình',
                  shop: 'Thế giới đồ chơi',
                  image: require('../demo/img/dochoi.png'),
               
                },
                {
                  id: 5,
                  name: 'Lãnh đạo giản đơn',
                  shop: 'Minh Long Book',
                  image: require('../demo/img/lanhdao.png'),
                  
                },
                {
                  id: 6,
                  name: 'Hiểu lòng con trẻ',
                  shop: 'Minh Long Book',
                  image: require('../demo/img/hieulong.png'),
                 
                },
                {
                  id: 7,
                  name: 'Donald Trump Thiên tài lãnh đạo',
                  shop: 'Minh Long Book',
                  image: require('../demo/img/dolantrum.jpg'),
                  
                },
              ])
              const [hoveredItemId, setHoveredItemId] = useState(null);
          return (
            <SafeAreaView style={styles.container}>
              <View>
                <Text style={{paddingLeft:20,backgroundColor:"#8c8c8c"}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại<br/>chat với shop</Text>
              </View>
           
              <ScrollView style={{height:'100%' }}>
              {data.map((item, index) => (
                  <TouchableOpacity style={styles.Tou} key={index}  onMouseEnter={() => setHoveredItemId(item.id)}  onMouseLeave={() => setHoveredItemId(null)}>
                    <View style={{backgroundColor: hoveredItemId === item.id ? 'gray':'white',justifyContent:'space-around',flexDirection:'row',alignItems:'center',height:'100%'}} >
                        <Image source={item.image} style={styles.Img}></Image>
                        <View style={{flexDirection:'column',width:230}}>
                            <Text >{item.name}</Text>
                            <Text style={{color:item.id == 1 ? 'red' : '#7d5b5b',}}>{item.shop}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Screen4_b')}} style={{backgroundColor:"red",height:50,width:50,justifyContent:'center',borderRadius:5,alignItems:'center',}}  >
                          <Text style={{color:'white'}}>CHAT </Text>
                        </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
                
              </ScrollView>
              <View style={styles.Menu}>
               <Icon name="bars" size={30} color="black" />
                <Icon name="home" size={30} color="black" />
                <Image source={require('../demo/img/vector.png')} style={{height:30,width:30}}></Image>
                {/* <Image source={require('../demo/img/vector.png')}></Image> */}
              </View>
             
            </SafeAreaView>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'flex-end',
          },
          header:{
            height:50,
            backgroundColor:'gray',
            justifyContent:'flex-start',
            alignItems:'center',
          
          },
          Tou:{
            height:100,
            
          },
          View:{
            height: 600,
            width: '100%',
            flexWrap:'wrap',
            backgroundColor: 'rgba(45,45,45,0.2)',
          },
          Viewsmall:{
            height: 200,
            width: '100%',
            // backgroundColor: isHovered?'#fff':'gray'
          },
          Img:{
            height:50,
            width:50,
            paddingLeft:10,
          },
          Menu:{
            height:50,
            width:"100%",
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'blue',
            position: 'absolute',
            bottom:0,
            flexDirection:'row'
          }
        });