export default {
    getMyTimeStyle
}


/**
 *     刚刚
 *     n分钟前
 *     n小时前
 *     n天前
 *     n月前
 *     n年前
 * @param createTime  timestamp
 */
function getMyTimeStyle(createTime){
    let date = new Date(createTime);
    let now = new Date();
    let interval = 0;
    if (now-date < 60 *1000){
        return "刚刚"
    }else if (now - date < 60*60*1000){
         interval = now.getMinutes()-date.getMinutes();
        return interval+"分钟前"
    }else if (now - date < 24*60*60*1000){
         interval = now.getHours()-date.getHours();
        return interval+"小时前"
    }else if (now-date < 30*24*60*60*1000){
         interval = now.getDay() - date.getDay();
        return interval+"天前"
    }else if (now-date < 12*30*24*60*60*1000){
        interval = now.getMonth() - date.getMonth();
        return interval+"月前"
    }else{
        interval = now.getFullYear()-date.getFullYear();
        return interval+"年前"
    }
}