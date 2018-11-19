import React, { Component } from 'react';
import './App.css';
import {Link,Route,Redirect,Switch} from 'react-router-dom'
import TodoList from './todoList/TodoList'
import User from './User/user'
import NotFound from './User/NotFound'
import Active from './User/active'
import {ActiveNavLink} from './utils'
import {OwnNavLink,OwnActiveNavLink} from './utils'

import qs from 'querystring'


class App extends Component {
  render() {
    let query = { name: 'Alice', age: 16 }  
    return (
      <div className="App">
        {/* to 不能写 '/' 不然会一直匹配 */}
        <OwnActiveNavLink  tag = 'li' to = '/todoList'>TodoList</OwnActiveNavLink>  
        <OwnActiveNavLink activeClassName = 'ok' tag = 'li' second to = '/user'>User</OwnActiveNavLink>
        {/* params 只能配置一个参数 可以用match.params.id 取到 */}
        {/* search 的值用location.search 取得 */}
        <OwnActiveNavLink toObj tag = 'li' to = {{pathname : '/active/6199',search : '?'+ qs.stringify(query)} } >Active</OwnActiveNavLink>
        <Switch>
          <Route path = '/' exact render = {()=>{
            return <Redirect to = '/todoList' />
          }} />
          <Route path = '/todoList' component = {TodoList} />
          <Route path = '/user' render = {({match})=>{  // 由于User 是一个路由组件 使用接收的参数是一个路由对象 有match history location
          // 做二级路由时 为了方便维护 应该把路径名换成变量
            return (
              <User>
                <p>
                  type:
                  <ActiveNavLink to = {`${match.path}/my`}> my </ActiveNavLink>
                  <ActiveNavLink to = {`${match.path}/login`}> login </ActiveNavLink>
                </p>
              <Switch>    
                  {/* 配置二级路由时 使用switch 只匹配到1项 并给重定向加exact */}
                  <Redirect from = {`${match.path}`} exact to = {`${match.path}/my`} />

                  <Route  path = {`${match.path}/my`} render = {()=>{return (<h1>欢迎回来</h1>)}}/>
                  <Route path ={`${match.path}/login`} render = {()=>{return (<h1>还没有登录请登录</h1>)}}/>
              </Switch>
              </User>
            )
          }}/>
          <Route path = '/active/:id'  component = {Active} />
          <Route path = '/not-found'  component = {NotFound} />
          <Redirect to = "/not-found" /> 
        </Switch>

      </div>
    );
  }
}

export default App;
