
import React,{Component} from 'react'
import styled from 'styled-components'
import urlObj from 'url'
import Wrapper from './common'

const H1 = styled.h1`

    color:tomato;
    background:#efefef;

`
const H2 = styled.h2`

    color:white;
    background:${props=>props.bg?'palevioletred':'tomato'}

`
const Input = styled.input.attrs({
    type: props => props.password ? 'password' : 'text'
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`



class Active extends Component {
    render () {
        let {location,match} = this.props
        let {name, age} = urlObj.parse(location.search, true).query
        return(
            <Wrapper>
                <H1>嘿嘿...欢迎来到活动页面</H1>
                <H2 bg>11111</H2>
                <H2>22222</H2>
                {this.props.children}
                <p>{match.params.id}</p>
                <p>{name}---{age}</p>
                <Input password/>
            </Wrapper>
        )
    }
}

export default Active