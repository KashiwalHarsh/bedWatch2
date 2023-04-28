import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const qrcodeRegionId = "html5qr-code-full-region";
const style = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

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

const Scanner = ({ target, id }) => {
  console.log(target);
  const params = useParams();
  const [result, setResult] = useState();

  useEffect(() => {
    const updateoccupyData = async (result) => {
      const response = await fetch(
        `http://localhost:4001/ocupiedBed/${result}`
      );
      const data = await response.json();
      console.log(data);
      window.location.href = "/patients";
    };
    const updateUnoccupyData = async (result) => {
      const response = await fetch(
        `http://localhost:4001/unocupiedBed /${result}`
      );
      const data = await response.json();
      console.log(data);
      window.location.href = "/patients";
    };
    function success(result) {
      console.log(result);
      if (target === "occupy") {
        updateoccupyData(result);
      }
      if (target === "unoccupy") {
        updateUnoccupyData(result);
      }
      document.getElementById(qrcodeRegionId).innerHTML = `
                <h2>Success</h2>
                <p><a href = "${result}">${result}</a></p>
            `;
      html5QrcodeScanner.clear();
      document.getElementById(qrcodeRegionId).remove();
      html5QrcodeScanner
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function error(e) {
      console.log(e);
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, {
      qrbox: {
        width: 1000,
        height: 1000,
      },
      fps: 10,
    });
    html5QrcodeScanner.render(success, error);

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  console.log("scanner");
  return (
    <div style={style} className="">
      <div style={{ width: "290px", height: "290px" }} id={qrcodeRegionId} />
    </div>
  );
};

export default Scanner;