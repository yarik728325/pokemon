import React,{Component} from 'react';
import {InputGroup,FormControl} from "react-bootstrap";
import {connect} from "react-redux";
import {Search} from '../../actions';
import "./search-pannel.scss"
class Searchpannel extends Component{
    ChangeTerm = (e)=>{
        this.props.Search(e.target.value);
    }
    render(){
            return(
                <>
                    <InputGroup size="sm" className="mb-3 absolute">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Find by name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange = {this.ChangeTerm} />
                    </InputGroup>
                </>
            )
        
    }
} 
const FromReducerToState = (state)=>{
    return{
        menu:state,
        label :state.label
    }
}
const FromServiceToActions = {
    Search
}
export default (connect(FromReducerToState,FromServiceToActions) (Searchpannel));