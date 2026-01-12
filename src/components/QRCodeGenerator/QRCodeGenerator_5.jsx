import QRCode from "react-qr-code";
import { Button } from "../ui/button";
import { QrCode } from "lucide-react";
import { useState } from "react";



function QRCodeGenerator() {

  const [input, setInput] = useState('');
  const [qr, setQr] = useState('');
  function handleGenerateQRCode() {
    if (!input.trim()) {
      alert("Please enter some text")
      return;
    }
    setQr(input);
    setInput("")
  }


  function handleRefresh() {
    window.location.reload();
  }
  return (
    <div className=" flex flex-col  items-center h-screen w-full ">

      <div className=" flex flex-col sm:flex-row justify-center items-center mt-10 gap-5 border p-5 rounded-2xl shadow-lg bg-white">
        <input type="text" placeholder="Enter text to generate QR Code" value={input} onChange={(e => setInput(e.target.value))}
          className=" w-72 h-10 rounded-md p-4 border-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <Button disabled={!input.trim()} onClick={handleGenerateQRCode}
          className=" disabled:opacity-50 w-30 h-10 "
        >Generate</Button>
        <Button onClick={handleRefresh} className=" bg-red-700 w-30 h-10 hover:bg-red-800" >Refresh</Button>
      </div>

      {
        qr && (
          <div className="  flex flex-col  justify-center items-center mt-15  p-10 border rounded-xl shadow-2xl bg-white ">
            <QRCode value={qr} size={300} />
            
          </div>
        )
      }

    </div>
  )
}
export default QRCodeGenerator;