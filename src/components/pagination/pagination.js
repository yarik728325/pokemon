import React,{Component} from 'react';
import {connect} from "react-redux";
import {CurrentPage,Loading,Request} from '../../actions';
import "./paginations.scss"
import {createPages} from "../../utils/pagesCreator";
import WithRestoService from "../hoc";
class Paginations extends Component {
    
    render(){
        const Paginate = (e,perPage)=>{
            this.props.CurrentPage(e);
            this.props.Loading();
            const {RestoService} = this.props;
            RestoService.getMenuItems(e,perPage).then(e=>this.props.Request(e));
        }
        
        const {currentPage,perPage,totalCount} = this.props;
        const pagesCount = Math.ceil(totalCount/perPage);
        const pages = []
        createPages(pages, pagesCount, currentPage)
        return(
            <>
                <div className = "pages">
                    {
                        pages.map((e,index)=> <span 
                         key = {index}
                         className={currentPage == e ? "current-page" : "page"}
                         onClick = {()=>{Paginate(e,perPage)}}
                         >{e}</span>)
                    }
                </div>
            </>
        )
    }
}
const FromReducerToState = (state)=>{
    return{
        currentPage:state.currentPage,
        perPage:state.perPage,
        totalCount:state.totalCount
    }
}
const FromServiceToActions = {
    CurrentPage,
    Loading,
    Request
}
export default WithRestoService() (connect(FromReducerToState,FromServiceToActions) (Paginations));