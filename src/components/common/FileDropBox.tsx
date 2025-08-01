"use client";
import React, { useState, useRef } from "react";
import {
  BlueFileIcon,
  CompleteFileIcon,
  DeleteIcon,
  FileIcon,
} from "../../../public";

interface FileDropBoxProps {
  accept: string;
  maxSizeMB: number;
  description: string;
  placeholder: string;
  onFileChange: (file: File | null) => void;
  required?: boolean;
  errorMessage?: string;
  maxWidth?: number;
  maxHeight?: number;
}

const FileDropBox = ({
  accept,
  maxSizeMB,
  description,
  placeholder,
  onFileChange,
  maxWidth,
  maxHeight,
}: FileDropBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    validateAndSetFile(dropped);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    validateAndSetFile(uploaded);
  };

  const validateAndSetFile = (uploaded?: File) => {
    if (!uploaded) return;

    const fileSizeBytes = uploaded.size;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    const allowedTypes = accept
      ?.split(",")
      .map((type) => type.trim().toLowerCase());
    const uploadedType = uploaded.type.toLowerCase();
    const uploadedExt = uploaded.name.split(".").pop()?.toLowerCase();

    const isValidType = allowedTypes.some((type) => {
      const cleaned = type.replace(".", "");
      return uploadedExt === cleaned || uploadedType.endsWith(`/${cleaned}`);
    });

    const isValidSize = fileSizeBytes <= maxSizeBytes;

    if (!isValidType || !isValidSize) {
      setError(
        `파일은 ${maxSizeMB}MB 이내의 ${accept.replaceAll(
          ",",
          ", "
        )} 파일만 업로드할 수 있어요`
      );
      resetFile();
      return;
    }

    if (uploaded.type.startsWith("image/") && (maxWidth || maxHeight)) {
      const img = new Image();
      img.onload = () => {
        const tooBig =
          (maxWidth && img.width > maxWidth) ||
          (maxHeight && img.height > maxHeight);

        if (tooBig) {
          setError(
            `이미지 크기는 최대 ${maxWidth}x${maxHeight} 픽셀 이하만 가능해요`
          );
          resetFile();
        } else {
          setError(null);
          setFile(uploaded);
          onFileChange(uploaded);
        }
      };
      img.onerror = () => {
        setError("이미지 파일을 불러올 수 없습니다.");
        resetFile();
      };
      img.src = URL.createObjectURL(uploaded);
    } else {
      setError(null);
      setFile(uploaded);
      onFileChange(uploaded);
    }
  };

  const resetFile = () => {
    setFile(null);
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDelete = () => {
    resetFile();
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-center w-full h-[314px] rounded-[10px] border-2 border-dashed transition-colors cursor-pointer ${
          error
            ? "border-orange-point"
            : isDragging
            ? "border-blue-main bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {isDragging ? <BlueFileIcon /> : <FileIcon />}
          <div className="mt-[27px] text-gray-500 font-B01-M text-center">
            {placeholder}
          </div>
          <div className="text-gray-300 font-C01-M text-center">
            {description}
          </div>
        </div>
      </div>

      {file && (
        <div className="mt-[22px] h-[72px] w-full px-6 py-4 border border-gray-200 rounded-[10px] flex justify-between items-center">
          <div className="flex flex-row items-center justify-center gap-[14px]">
            <CompleteFileIcon />
            <div className="flex flex-col text-gray-900 font-B03-M">
              <span>{file.name}</span>
              <span className="text-gray-300 font-C01-R">
                {(file.size / (1024 * 1024)).toFixed(1)} MB
              </span>
            </div>
          </div>
          <button onClick={handleDelete} className="cursor-pointer">
            <DeleteIcon />
          </button>
        </div>
      )}

      {error && (
        <div className="text-orange-point mt-3 font-C01-R">{error}</div>
      )}

      <input
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <span className="hidden border-orange-point bg-blue-50" />
    </div>
  );
};

export default FileDropBox;
