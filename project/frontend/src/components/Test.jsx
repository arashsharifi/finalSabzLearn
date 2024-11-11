import React, { useState } from 'react';
import axios from 'axios'; // برای ارسال درخواست HTTP

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // نام فایل اصلی را ذخیره می‌کند
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName); // ارسال نام فایل به عنوان فیلد جداگانه

      try {
        const response = await axios.post('https://your-backend-url.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".png,.jpg,.jpeg,.svg" onChange={handleFileChange} />
      <button onClick={handleSubmit}>ارسال فایل</button>
      {fileName && <p>نام فایل: {fileName}</p>}
    </div>
  );
};

export default FileUpload;