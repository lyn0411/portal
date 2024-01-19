import { ElMessage , ElMessageBox } from 'element-plus'
/**
 * @param {string} title 标题
 * @param {string} message 消息正文内容
 * @param {Object} config 其他 参照官网其他参数
 */
export const MessageBox = (message : string =' 确定执行此操作吗',title : string = '提示', config : object = {type:'success'}) => {
    return ElMessageBox.confirm(message,title,
      config
    )
}
/**
 * @param {string} title 消息正文内容
 * @param {Object} object 其他 参照官网其他参数
 */
type types = 'success' | 'warning' | 'info' | 'error'
interface MessageType extends Object{
    type:types
}
export const Message = (title : string = 'Congrats, this is a success message.' , object:MessageType = {type:'success'}) => {
    return ElMessage(
        Object.assign({
            message:title
        },object)
    )
}
