import {View,StyleSheet,Pressable,Text} from "react-native"
const GoalList = ({val,id,onDelete}) => {
  return <Pressable onPress={()=>onDelete(id)}><View style={styles.textContainer}><Text>{val}</Text></View></Pressable>
}

export default GoalList
const styles = StyleSheet.create({
    textContainer:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        marginVertical:7,
        borderWidth:1
      }
})