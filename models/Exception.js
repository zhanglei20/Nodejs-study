/**
 * Created by 小马哥 on 2017/2/16.
 */
module.exports={
    expfun:function(flag){
        if(flag==0){
            throw  '我是例外';
        }
        return  "success";
    }
}