import React,{Component} from "react"
import "./index.scss"

//组件
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            formType:"login"
        }
    }
     switchForm=(value)=>{
         //接收子组件传过来的参数
        this.setState({
            formType:value
        })
     }
    render(){
        return (
            <div className="form-wrap"> 
               {this.state.formType==="login" 
               ? <LoginForm switchForm={this.switchForm}></LoginForm>
               :<RegisterForm switchForm={this.switchForm}></RegisterForm>} 
              
                  
            </div>
        )
    }
}
export default Login