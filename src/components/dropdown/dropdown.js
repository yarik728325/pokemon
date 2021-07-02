import React,{Component} from 'react';
import {Dropdown } from 'react-bootstrap';
import WithRestoService from "../hoc";
import  "./dropdown.scss";
import {connect} from "react-redux";
import {PerPage,Request,Loading,CurrentPage} from "../../actions";
import {createPages} from "../../utils/pagesCreator";
class DropDown extends Component {
    render(){

        const Paginate = (e,perPage)=>{
            this.props.PerPage(perPage)
            this.props.CurrentPage(1);
            this.props.Loading();
            const {RestoService} = this.props;
            RestoService.getMenuItems(e,perPage).then(e=>this.props.Request(e));
        }
        const {currentPage,perPage,totalCount} = this.props;
        console.log(this.props)
        const pagesCount = Math.ceil(totalCount/perPage);
        const pages = []
        createPages(pages, pagesCount, currentPage)
        return(
            <Dropdown className = "right" >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {perPage}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick = {()=>Paginate(currentPage,10)} >10</Dropdown.Item>
                    <Dropdown.Item href="#" onClick = {()=>Paginate(currentPage,20)} >20</Dropdown.Item>
                    <Dropdown.Item href="#" onClick = {()=>Paginate(currentPage,50)} >50</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        )
    }
}

const FromReducerToState = (state)=>{
    return{
        perPage:state.perPage,
    }
}
const FromServiceToActions = {
    PerPage,
    Loading,
    Request,
    CurrentPage
}
export default WithRestoService() (connect(FromReducerToState,FromServiceToActions) (DropDown));