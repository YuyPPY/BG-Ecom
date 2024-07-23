const { generateUploadButton, generateUploadDropzone } = require('@uploadthing/react');
const { OurFileRouter } = require('@/app/api/uploadthing/core'); // Assuming core.js is in the same directory

exports.UploadButton = generateUploadButton(OurFileRouter);
exports.UploadDropzone = generateUploadDropzone(OurFileRouter);
