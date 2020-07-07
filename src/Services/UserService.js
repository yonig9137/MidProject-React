import UserUtiles from '../Utiles/UserUtiles'
import PostUtiles from '../Utiles/PostUtiles'
import TodoUtiles from '../Utiles/TodoUtiles'


async function GetAllUsers(){
    let users =await UserUtiles.getAll()
    let posts= await PostUtiles.getAll()
    let todos= await TodoUtiles.getAll()

   
    return users.map(user=>{
        let userTodos=todos.filter(todo=>todo.userId===user.id)
        let userPosts=posts.filter(post=>post.userId===user.id)

        return {...user,'todos':userTodos,'posts':userPosts}
    })

}

export default {GetAllUsers}