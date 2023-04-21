import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";
const style = {
    width:"200px",

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
//     if (props.aspectRatio) {
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
                width:250,
                height:250
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

    return (
        <div id={qrcodeRegionId} />
    );
};

export default Scanner;