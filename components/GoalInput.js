import { TextInput,View,StyleSheet,Button,Modal,ImageBackground} from "react-native"
import { useState } from "react"
const image1={uri:'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200'}
const GoalInput = ({setTodo,onAdd,isAddMode,setIsAddMode})=>{
const [goalTodo,setGoalTodo] = useState('')

  const onPressHandler = ()=>{
    setTodo(goalTodo)
    onAdd(goalTodo) 
    setIsAddMode(false)
  }

return <Modal visible={isAddMode} animationType="slide">
<ImageBackground source={image1} resizeMode="cover" style={styles.image1}></ImageBackground>
<View style={styles.container}>
<TextInput placeholder="Enter Your Task......" onChangeText={task => setGoalTodo(task)} style={styles.containerText}/>
<Button title="Add Text" onPress={onPressHandler}/>
</View>
</Modal>
}
export default GoalInput

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    containerText:{
        borderWidth:2,
        borderColor:"black"
      },
      image1:{
        flex:1,
        allignItems:'center',
        justifyContent: 'center',
        padding:20
      }
})

