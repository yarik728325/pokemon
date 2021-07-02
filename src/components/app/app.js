import React,{Component} from 'react';
import CartTable from '../cart-table';
import Searchpannel from "../search-pannel";
import Paginations from "../pagination";
import DropDown from "../dropdown";
import Filter from '../filters';
class App extends Component{
    render(){
        return(
            <>
                <Filter/>
                <DropDown/>
                <Searchpannel/>
                <CartTable/>
                <Paginations/>
            </>
        )
    }
}
export default App;