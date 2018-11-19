import React,{Component} from 'react'
import styled from 'styled-components'

const Link = (props)=>{
    return (
        <a href = {props.to} {...props}>
            <i></i>
            <span>{props.children}</span>
        </a>
    )
}

const StyleLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`

class User extends Component {
    render () {
        let {match} = this.props
        return(
            
            <>
                <h1>欢迎来到User</h1>
                <Link to = 'https://www.baidu.com'>biubiubiu....</Link>
                <StyleLink to = 'https://www.baidu.com' >heiheihie....</StyleLink>
                {/* <Switch>
                    <Route path = {`${match.path}/my`} render = {()=>{return (<h1>欢迎回来</h1>)}}/>
                    <Route path = {`${match.path}/login`} render = {()=>{return (<h1>还没有登录请登录</h1>)}}/>
                </Switch> */}

                {this.props.children}
            </>
        )
    }
}

export default User