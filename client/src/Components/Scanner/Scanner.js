import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";
const style = {
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flex:1

}

// Creates the configuration object for Html5QrcodeScanner.
// const createConfig = (props) => {
//     let config = {};
//     if (props.fps) {
//         config.fps = props.fps;
//     }
//     if (props.qrbox) {
//         config.qrbox = props.qrbox;
//     }
//     if (props.aspectRatio) {scan
//         config.aspectRatio = props.aspectRatio;
//     }
//     if (props.disableFlip !== undefined) {
//         config.disableFlip = props.disableFlip;
//     }
//     return config;
// };

const Scanner = (props) => {


    useEffect(() => {
      
        function success(result){
            console.log(result)
            document.getElementById(qrcodeRegionId).innerHTML = `
                <h2>Success</h2>
                <p><a href = "${result}">${result}</a></p>
            `;
            html5QrcodeScanner.clear()
            document.getElementById(qrcodeRegionId).remove();
            html5QrcodeScanner.stop().then((ignore) => {
                // QR Code scanning is stopped.
              }).catch((err) => {
                console.log(err)
              });
        }
        function error(e){
            console.log(e);
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId,{
            qrbox:{
                width:400,
                height:400
            },
            fps:20,
        });
        html5QrcodeScanner.render(success,error);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);
    console.log("scanner")
    return (
        <div style={style} className=''>
            <div  id={qrcodeRegionId} />
        </div>
    );
};

export default Scanner;