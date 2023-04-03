import {View,StyleSheet,FlatList,SafeAreaView,Button,ImageBackground  } from "react-native"
import { useState } from "react"
import GoalInput from "./components/GoalInput"
import GoalList from "./components/GoalList"
const image = {uri: 'https://cdn.create.vista.com/downloads/a9e23c13-cd92-4ca5-804d-faed9f7a520a_1024.jpeg'};
const App = () => {
  const [isAddMode,setIsAddMode]= useState(false)
const [todo,setTodo]=useState('')
const [taskList,setTaskList]=useState([])

const onPressHandler =(todo)=>{
let newArr=[...taskList]
newArr.push({id:Math.random()*100+"--"+Math.random()*20,value:todo})
setTaskList(newArr)
}

const onDeleteHandler = (id)=>{
const newTaskList=taskList.filter((mytask)=> mytask.id !==id)
setTaskList(newTaskList)
}
 
  return <SafeAreaView style={styles.screen}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Button title="Add new goal" onPress={()=> setIsAddMode(true)}/>
    
    <GoalInput setTodo={setTodo} onAdd={onPressHandler} isAddMode={isAddMode} setIsAddMode={setIsAddMode}/>
    <FlatList
    data={taskList}
    renderItem={({item})=><GoalList val={item.value} id={item.id} onDelete={onDeleteHandler}/>}
    keyExtractor={item=>item.id}
    />
    </ImageBackground>
    </SafeAreaView>
    
}

export default App

const styles = StyleSheet.create({
  screen:{
    padding:40,
    flex:1
  },
  image:{
    flex: 1,
    allignItems: 'center',
    padding:10
  },

})