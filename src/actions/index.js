const Request = (newMenu)=>{
    return{
        type:"Request",
        menu:newMenu,
    }
}
const Loading = ()=>{
    return{
        type :"Loading"
    }
}
const menuError = ()=>{
    return{
        type:"Error"
    }
}
const Search = (label)=>{
    return{
        type: "Search",
        label
    }

}
const Detail = (newdetail)=>{
    return{
        type: "Detail",
        detail:newdetail
    }
}
const ShowDetail =() =>{
    return{
        type:"ShowDetail"
    }
}
const CurrentPage = (currentPage) =>{
    return{
        type:"CurrentPage",
        currentPage

    }
}
const PerPage = (perPage) =>{
    return{
        type : "PerPage",
        perPage
    }
}
const Filters = (e)=>{
  return{
      type: "Filters",
      e
  }
}
const ShowFilter = ()=>{
    return{
        type:"ShowFilter"
    }
}
export{
    Filters,
    ShowFilter,
    PerPage,
    ShowDetail,
    Detail,
    Search,
    Request,
    Loading,
    menuError,
    CurrentPage
}