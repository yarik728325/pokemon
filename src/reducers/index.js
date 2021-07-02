
const tmp ={
    menu:[],
    loading:false,
    error:false,
    label : "",
    tmp:[],
    detail:{},
    show:false,
    currentPage:1,
    perPage:10,
    totalCount:0,
    normal:false,
    fighting:false,
    flying:false,
    water:false,
    grass:false,
    electric:false,
    psychic:false,
    ice:false,
    dragon:false,
    dark:false,
    fairy:false,
    unknown:false,
    shadow:false,
    poison: false,
    ground: false,
    rock:false,
    bug:false,
    ghost:false,
    steel:false,
    fire:false,
    filters: []

},
reducer = (state= tmp,actions)=>{
    switch(actions.type){
       
        case "Request":
           
            return{
                
                ...state,
                menu:actions.menu.newarr,
                tmp:actions.menu.newarr,
                loading:false,
                error:false,
                totalCount :actions.menu.count
            }
        case "Loading":
            return{
                ...state,
                loading:true,
                error:false
            }
        case "PerPage":{
            return{
                ...state,
                perPage:actions.perPage

            }
        }
       
        case "CurrentPage":
            return{
                ...state,
                currentPage: actions.currentPage
            }
        case "Filters":
            let tmp = state.filters;
          
            switch(actions.e){
                             
                case "normal":
                    if(!state.normal){
                        tmp.push(actions.e);
                    } 
                    else{
                        let index = tmp.findIndex(e=>e === actions.e),
                                    before = tmp.slice(0,index),
                                    after  = tmp.slice(index+1);
                                    tmp    = [...before,...after];
                                
                    }
                    return{
                        ...state,
                        filters :tmp,
                        normal :!state.normal
                    }
                    
                    case "fighting":
                        if(!state.fighting){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        fighting  :!state.fighting 
                    }
                    case "flying": 
                    if(!state.flying){
                        tmp.push(actions.e);
                    } 
                    else{
                        let index = tmp.findIndex(e=>e === actions.e),
                                    before = tmp.slice(0,index),
                                    after  = tmp.slice(index+1);
                                    tmp    = [...before,...after];
                                
                    }
                    return{
                        ...state,
                        filters :tmp,
                        flying : !state.flying
                    }
                    case "poison":
                        if(!state.poison){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        poison :!state.poison
                    }
                    case "ground":
                        if(!state.ground){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        ground :!state.ground
                    }
                    case "rock":
                        if(!state.rock){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        rock :!state.rock
                    }
                    case "bug":
                        if(!state.bug){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        bug :!state.bug
                    }
                    case "ghost":
                        if(!state.ghost){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        ghost :!state.ghost
                    }
                    case "steel":
                        if(!state.steel){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        steel :!state.steel
                    }
                    case "fire":
                        if(!state.fire){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                    return{
                        ...state,
                        filters :tmp,
                        fire :!state.fire
                    }
                    case "water":
                        if(!state.water){
                            tmp.push(actions.e);
                        } 
                        else{
                            let index = tmp.findIndex(e=>e === actions.e),
                                        before = tmp.slice(0,index),
                                        after  = tmp.slice(index+1);
                                        tmp    = [...before,...after];
                                    
                        }
                        return{
                            ...state,
                            filters :tmp,
                            water  :!state.water 
                        }
                        case "grass":
                            if(!state.grass){
                                tmp.push(actions.e);
                            } 
                            else{
                                let index = tmp.findIndex(e=>e === actions.e),
                                            before = tmp.slice(0,index),
                                            after  = tmp.slice(index+1);
                                            tmp    = [...before,...after];
                                        
                            }
                            return{
                                ...state,
                                filters :tmp,
                                grass  :!state.grass 
                            }

                            case "electric":
                            if(!state.electric){
                                tmp.push(actions.e);
                            } 
                            else{
                                let index = tmp.findIndex(e=>e === actions.e),
                                            before = tmp.slice(0,index),
                                            after  = tmp.slice(index+1);
                                            tmp    = [...before,...after];
                                        
                            }
                            return{
                                ...state,
                                filters :tmp,
                                electric  :!state.electric 
                            }
                            case "psychic":
                            if(!state.psychic){
                                tmp.push(actions.e);
                            } 
                            else{
                                let index = tmp.findIndex(e=>e === actions.e),
                                            before = tmp.slice(0,index),
                                            after  = tmp.slice(index+1);
                                            tmp    = [...before,...after];
                                        
                            }
                            return{
                                ...state,
                                filters :tmp,
                                psychic  :!state.psychic 
                            }
                            case "ice":
                            if(!state.ice){
                                tmp.push(actions.e);
                            } 
                            else{
                                let index = tmp.findIndex(e=>e === actions.e),
                                            before = tmp.slice(0,index),
                                            after  = tmp.slice(index+1);
                                            tmp    = [...before,...after];
                                        
                            }
                            return{
                                ...state,
                                filters :tmp,
                                ice  :!state.ice 
                            }
                            case "dragon":
                            if(!state.dragon){
                                tmp.push(actions.e);
                            } 
                            else{
                                let index = tmp.findIndex(e=>e === actions.e),
                                            before = tmp.slice(0,index),
                                            after  = tmp.slice(index+1);
                                            tmp    = [...before,...after];
                                        
                            }
                            return{
                                ...state,
                                filters :tmp,
                                dragon  :!state.dragon 
                            }
                            case "dark":
                                if(!state.dark){
                                    tmp.push(actions.e);
                                } 
                                else{
                                    let index = tmp.findIndex(e=>e === actions.e),
                                                before = tmp.slice(0,index),
                                                after  = tmp.slice(index+1);
                                                tmp    = [...before,...after];
                                            
                                }
                                return{
                                    ...state,
                                    filters :tmp,
                                    dark  :!state.dark 
                                }
                                case "unknown":
                                    if(!state.unknown){
                                        tmp.push(actions.e);
                                    } 
                                    else{
                                        let index = tmp.findIndex(e=>e === actions.e),
                                                    before = tmp.slice(0,index),
                                                    after  = tmp.slice(index+1);
                                                    tmp    = [...before,...after];
                                                
                                    }
                                    return{
                                        ...state,
                                        filters :tmp,
                                        unknown  :!state.unknown 
                                    }
                                    case "shadow":
                                    if(!state.shadow){
                                        tmp.push(actions.e);
                                    } 
                                    else{
                                        let index = tmp.findIndex(e=>e === actions.e),
                                                    before = tmp.slice(0,index),
                                                    after  = tmp.slice(index+1);
                                                    tmp    = [...before,...after];
                                                
                                    }
                                    return{
                                        ...state,
                                        filters :tmp,
                                        shadow  :!state.shadow 
                                    }
                                    case "fairy":
                                    if(!state.fairy){
                                        tmp.push(actions.e);
                                    } 
                                    else{
                                        let index = tmp.findIndex(e=>e === actions.e),
                                                    before = tmp.slice(0,index),
                                                    after  = tmp.slice(index+1);
                                                    tmp    = [...before,...after];
                                                
                                    }
                                    return{
                                        ...state,
                                        filters :tmp,
                                        fairy  :!state.fairy 
                                    }
              
            }
        case "Search":
            return{
                ...state,
                tmp:state.menu.filter((e)=>{
                    return e.name.indexOf(actions.label) > -1
                  }),
            }
        case "Error":
            return{
                ...state,
                error:true,
                loading:false
            }  
        case "ShowDetail" :
            return{
                ...state,
                show:!state.show,
                loading:false
            }
        case "Detail":
            return{
                ...state,
                detail:actions.detail
            }        
        default:
            return state
        
    }
}
export default reducer