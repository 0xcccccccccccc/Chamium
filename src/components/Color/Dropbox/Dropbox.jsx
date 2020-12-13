import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import emitter from '../../../lib/ev'
import "./Dropbox.css"
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
    const onDropAccepted=useCallback(_=>{
        document.getElementById("DropBox").hidden=true
        // document.getElementById("AfterDropBox").hidden=false
    })
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop:onDrop,onDropAccepted:onDropAccepted})


    return (
        <div>
            {/*<div id={"AfterDropBox"} hidden={true}>*/}
            {/*    <h1>Welcome to Chamium</h1>*/}
            {/*</div>*/}
            <div id={"DropBox"} {...getRootProps()}>
                <input {...getInputProps()}  />
                {
                    isDragActive ?
                        <div>
                            <p style={{opacity:decrease}}>try drag a picture</p>
                            <p style={{opacity:decrease}}>try drag a picture</p>
                            <p style={{opacity:decrease}}>try drag a picture</p>
                            <h1>Welcome to Chamium!!!!</h1>
                            <h2></h2>
                            <p style={{opacity:0.6}}>try drag a picture</p>
                            <p style={{opacity:0.4}}>try drag a picture</p>
                            <p style={{opacity:0.2}}>try drag a picture</p>
                            <p style={{opacity:0.1}}>try drag a picture</p>
                            <p style={{opacity:0.05}}>try drag a picture</p>
                        </div>
                        :
                        <div>
                            <p style={{opacity:0.2}}>try drag a picture</p>
                            <p style={{opacity:0.4}}>try drag a picture</p>
                            <p style={{opacity:0.6}}>try drag a picture</p>
                            <h1>Welcome to Chamium</h1>
                            <h2></h2>
                            <p style={{opacity:0.6}}>try drag a picture</p>
                            <p style={{opacity:0.4}}>try drag a picture</p>
                            <p style={{opacity:0.2}}>try drag a picture</p>
                            <p style={{opacity:0.1}}>try drag a picture</p>
                            <p style={{opacity:0.05}}>try drag a picture</p>
                        </div>
                }s
            </div>

        </div>

    )
}
export default Dropbox;
