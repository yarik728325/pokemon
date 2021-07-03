import React,{Component} from 'react';
import {connect} from "react-redux";
import {Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./cart-table.scss";
import WithRestoService from "../hoc";
import {Request,Loading,menuError,Detail,ShowDetail} from '../../actions';
import Spinner from "../spinner";
import Error from "../error";
import Details from "../detail";
class CartTable extends Component {

    componentDidMount(){
        
        this.props.Loading();
        const {RestoService} = this.props;
        RestoService.getMenuItems().then(e=>this.props.Request(e));
       
    }
    componentDidCatch(){
        this.props.menuError()
    }
    render(){
        
         const GetOneItem = (e)=>{
                const {RestoService} = this.props;
                this.props.Loading();
                RestoService.getOneItem(e).then(e=>this.props.Detail(e));  
                this.props.ShowDetail();
                
       }
        if(this.props.loading){
            return <Spinner/>
        }
        if(this.props.error){
            return <Error/>
        }
        if(this.props.show){
            return <Details/>
        }
        const {tmp,filters} = this.props.menu;
        const {showfilter} = this.props;
        if(showfilter){
            return(
                <div></div>
            )
        }
        return(
            <>
               <div className = "wrapper">
                     {
                         tmp.map(function some(value,index){
                            
                             const check = value.types;
                             const tmp_arr = [];
                             check.map(e=>{
                                 const {name} = e.type; 
                                 tmp_arr.push(name);
                                 
                             })
                             let bool = false;
                             for(let i=0;i<filters.length;i++){
                                bool = tmp_arr.includes(filters[i]);
                                 if(bool){
                                     break
                                 }
                             };
                             if(filters.length == 0){
                                 bool = true;
                             }
                             
                             const {name} = value;
                             const {front_default} = value.sprites;
                                if(bool){
                                    return(
                                        <Card style={{ width: '18rem'}} className = {"Left"} key = {index}>
                                            <Card.Img variant="top" src= {front_default} />
                                            <Card.Body>
                                                <Card.Title>{name}</Card.Title>
                                                <Card.Text>
                                                
                                                </Card.Text>
                                                <Button onClick = {()=>GetOneItem(name)}>Detail</Button>
                                            </Card.Body>
                                           
                                        </Card>
                                    )
                                }
                                
                        })
                     }     
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
        show:state.show,
        filters:state.filters,
        showfilter:state.showfilter
    }
}
const FromServiceToActions = {
    Request,
    Loading,
    menuError,
    Detail,
    ShowDetail
}
export default WithRestoService() (connect(FromReducerToState,FromServiceToActions) (CartTable));
