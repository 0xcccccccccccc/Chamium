import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import emitter from '../../lib/ev'
function Dropbox() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles[0]);
        var reader=new FileReader();
        reader.onloadend=function(event){
            emitter.emit("updateImg",event.target.result);
        }
        reader.readAsDataURL(acceptedFiles[0])



    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <h1>对喽！就是这～</h1> :
                    <div style={{paddingTop:"calc(40vh)"}}>
                        <h1>欢迎使用 图片主题分析功能 ！</h1>
                        <p>来拖张图片试试～</p>
                    </div>
            }
        </div>
    )
}
export default Dropbox;
