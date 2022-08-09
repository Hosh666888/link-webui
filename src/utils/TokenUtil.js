
export default {
    save,
    clear,
    getLoginUser,
    getToken
}

function save(loginUser){
    localStorage.setItem("loginUser",loginUser);
}

function clear(){
    localStorage.clear()
}


function getLoginUser(){
    let item = localStorage.getItem("loginUser");

    return item!=null?JSON.parse(item):null;
}

function getToken(){
    let loginUser = getLoginUser();
    return loginUser==null?null:loginUser.token
}
