import React, { Component } from 'react'
import Card from './Card'
import './CardContainer.scss'
import Fade from 'react-reveal/Fade'
class CardContainer extends Component {

    state={
        list1:[],
        list2:[]
    }

    componentDidMount(){
        fetch('https://api.github.com/users/prathmeshkhandelwal1/repos')
        .then(res=>res.json())
        .then(data=>{
            data.sort((a,b)=>(a.size < b.size) ? 1 : ((b.size < a.size) ? -1 : 0));
            this.setState({
                list1:data
            })
        })

        fetch('https://api.github.com/orgs/cerebro-iiitv/repos')
        .then(res=>res.json())
        .then(d=>{
            console.log(d)
            this.setState({
                list2:d
            })
        })
    }

    

    render() {
        const projects = this.state.list1? this.state.list1.map(project=>{
            if(!project.fork){
                return <Fade left><Card name={project.name} description={project.description} stars = {project.stargazers_count}/></Fade>
            }else{
                return null
            }
            
        }):null

        const projects2 = this.state.list2? this.state.list2.map(project=>{
            if(project.name ==='cerebro-web-2020')
            return <Fade left><Card name={project.name} description={project.description} stars = {project.stargazers_count}/></Fade>
            else{
                return null
            }
        }):null

        return (
            <div className="Card_container">
                <ul className="Card_container__list">
                    {projects2}
                    {projects}
                </ul>
            </div>
        )
    }
}

export default CardContainer

