export default {
    insertSearchRecord,
    getSearchRecord
}

/**
 *  持久化搜索输入数据
 * @param searchType  explore：【navibar搜索框、explore页面搜索框】 mine: HomePage搜索自己的文章记录
 * @param content 搜索内容
 */
function insertSearchRecord(searchType,content){
    let searchRecord = localStorage.getItem("searchRecord");
    if (searchRecord == null){
        localStorage.setItem("searchRecord",JSON.stringify({
            explore:[],
            mine:[],
            other:[]
        }))
    }

    let item = JSON.parse(localStorage.getItem("searchRecord"));
    if (searchType==="explore"){
        item.explore.push(content)
    }else if (searchType==="mine"){
        item.mine.push(content)
    }else{
        item.other.push(content)
    }
}


function getSearchRecord(searchType){
    let item =JSON.parse( localStorage.getItem("searchRecord"));
    if (item != null){
        if (searchType==="explore"){
            return item.explore
        }else if (searchType==="mine"){
            return item.mine
        }else{
            return item.other
        }
    }

}