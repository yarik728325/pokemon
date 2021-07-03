import React,{Component} from 'react';
import {ListGroup,Modal } from 'react-bootstrap';
import {connect} from "react-redux";
import {Request,Loading,Filters,ShowFilter} from "../../actions";
import WithRestoService from "../hoc";
import "./filter.scss"
class Filter extends Component{
    Check = (e)=>{
        
        this.props.Filters(e.target.getAttribute('name'))
    }
    render(){
        const {normal,showfilter,fighting,flying,poison,ground,rock,bug,ghost,steel,fire, water,grass,electric,psychic,ice,dragon,dark,fairy,unknown,shadow,show} = this.props;
       if(show){
           return(
               <div></div>
           )
       }
       if(!showfilter){
           return(
            <div className = "fix">
                     <button onClick = {()=>this.props.ShowFilter()}>Закрыть/открыть</button>
            </div>
           )
       }
        return(
          <>
                <div className = "fix">
                <button onClick = {()=>this.props.ShowFilter()}>Закрыть/открыть</button>
                    <div className = "my">
                            
                            <ListGroup as="ul" >
                                <ListGroup.Item as="li" className = {normal? "active":"li"} onClick ={this.Check} name="normal">normal</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {fighting? "active":"li"}  onClick ={this.Check}  name="fighting" >fighting</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {flying? "active":"li"}  onClick ={this.Check} name="flying">flying</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {poison? "active":"li"}  onClick ={this.Check} name="poison" >poison</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {ground? "active":"li"}  onClick ={this.Check} name="ground" >ground</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {rock? "active":"li"}  onClick ={this.Check} name="rock" >rock</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {bug? "active":"li"}  onClick ={this.Check} name="bug" >bug</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {ghost? "active":"li"}  onClick ={this.Check} name="ghost" >ghost</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {steel? "active":"li"}  onClick ={this.Check} name="steel" >steel</ListGroup.Item>
                                <ListGroup.Item as="li"  className = {fire? "active":"li"} onClick ={this.Check} name="fire" >fire</ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ul" >
                                <ListGroup.Item as="li" className = {water? "active":"li"} onClick ={this.Check} name="water">water</ListGroup.Item>
                                <ListGroup.Item as="li" className = {grass? "active":"li"} onClick ={this.Check} name="grass">grass</ListGroup.Item>
                                <ListGroup.Item as="li" className = {electric? "active":"li"} onClick ={this.Check} name="electric">electric</ListGroup.Item>
                                <ListGroup.Item as="li" className = {psychic? "active":"li"} onClick ={this.Check} name="psychic">psychic</ListGroup.Item>
                                <ListGroup.Item as="li" className = {ice? "active":"li"} onClick ={this.Check} name="ice">ice</ListGroup.Item>
                                <ListGroup.Item as="li" className = {dragon? "active":"li"} onClick ={this.Check} name="dragon">dragon</ListGroup.Item>
                                <ListGroup.Item as="li" className = {dark? "active":"li"} onClick ={this.Check} name="dark">dark</ListGroup.Item>
                                <ListGroup.Item as="li" className = {fairy? "active":"li"} onClick ={this.Check} name="fairy">fairy</ListGroup.Item>
                                <ListGroup.Item as="li" className = {unknown? "active":"li"} onClick ={this.Check} name="unknown">unknown</ListGroup.Item>
                                <ListGroup.Item as="li" className = {shadow? "active":"li"} onClick ={this.Check} name="shadow">shadow</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
          </>
          
        )
    }
}
const FromReducerToState = (state)=>{
    
    return{
        perPage:state.perPage,
        menu:state,
        normal :state.normal,
        flying:state.flying,
        poison: state.poison,
        ground: state.ground,
        rock:state.rock,
        bug:state.bug,
        ghost:state.ghost,
        steel:state.steel,
        fire:state.fire,
        fighting :state.fighting,
        filters:state.filters,
        water:state.water,
        grass:state.grass,
        electric:state.electric,
        psychic:state.psychic,
        ice:state.ice,
        dragon:state.dragon,
        dark:state.dark,
        fairy:state.fairy,
        unknown:state.unknown,
        shadow:state.shadow,
        show:state.show,
        showfilter:state.showfilter
    }
}
const FromServiceToActions = {
    Loading,
    ShowFilter,
    Request,
    Filters
}
export default WithRestoService() (connect(FromReducerToState,FromServiceToActions) (Filter));