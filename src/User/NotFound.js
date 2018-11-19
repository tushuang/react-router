import React,{Component} from 'react'
import Wrapper from 'styled-components'
import {OwnNavLink,OwnActiveNavLink} from '../utils'





class NotFound extends Component {
    render () {
        return(
            <>
                <h1>页面不小心走丢了</h1>
                {this.props.children}
                <OwnActiveNavLink tag = 'span' to = '/todoList'>点击这里回到首页哦</OwnActiveNavLink>
                {console.log(this.props,'biubiubiu')}
            </>
        )
    }
}

export default NotFound