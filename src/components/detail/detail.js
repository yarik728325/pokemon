import React,{Component} from 'react';
import {connect} from "react-redux";
import {ShowDetail} from '../../actions';
import {Modal,Card,ListGroup} from "react-bootstrap";
import Spinner from "../spinner";
import './detail.scss';
class Details extends Component{
    
    
    render(){
        if(this.props.loading || Object.keys(this.props.detail).length === 0){
            return <Spinner/>
        }
        
        const {back_default,back_shiny,front_default,front_shiny} = this.props.detail.sprites;
        console.log(this.props);
        const {stats} = this.props.detail;
        const arr = stats.map(el => {
            const {base_stat} = el,
                {name} = el.stat
            return ({name,base_stat})
           })
        return(
           <>
               
                <div className = "Modal">
                    <Modal.Header closeButton onClick = {()=>this.props.ShowDetail()}>
                        <Modal.Title id="example-custom-modal-styling-title">
                        Name, {this.props.detail.name}
                        </Modal.Title>
                    </Modal.Header>
                    <div className = "wrapper">
                        <Card.Img variant="top" src = {back_default} className = "size" />
                        <Card.Img variant="top" src = {front_shiny} className = "size" />
                        <Card.Img variant="top" src = {back_shiny} className = "size" />
                        <Card.Img variant="top" src = {front_default} className = "size" />
                    </div>
                    <Modal.Body>
                    <ListGroup>
                       {
                           arr.map((value,index)=>{
                               return <ListGroup.Item key = {index}>{value.name}: {value.base_stat}</ListGroup.Item>
                           })
                       }
                        </ListGroup>
                    </Modal.Body>
                </div>
                
           </>
        )      
    }
}
const FromReducerToState = (state)=>{
    return{
        menu:state,
        loading:state.loading,
        error:state.error,
        detail : state.detail,
        show:state.show
    }
}
const FromServiceToActions = {
    ShowDetail
}
export default connect(FromReducerToState,FromServiceToActions) (Details);