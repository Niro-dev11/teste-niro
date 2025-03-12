import { CircleCheck, CircleX, TriangleAlert } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Notificacao({ tipo, texto }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (tipo === "sucesso") {
      setTimeout(() => setShowSuccess(true), 1000);
    }
    if (tipo === "erro") {
      setTimeout(() => setShowError(true), 2000);
    }
    if (tipo === "aviso") {
      setTimeout(() => setShowWarning(true), 3000);
    }
  }, []);

  useEffect(() => {
    if (showSuccess) setTimeout(() => setShowSuccess(false), 5000);
    if (showError) setTimeout(() => setShowError(false), 5000);
    if (showWarning) setTimeout(() => setShowWarning(false), 5000);
  }, [showSuccess, showError, showWarning]);

  return (
    <>
      {showSuccess && (
        <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 motion-preset-slide-up">
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <CircleCheck />
          </div>
          <div className="ms-3 text-sm font-normal">{texto}</div>
        </div>
      )}

      {showError && (
        <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 motion-preset-slide-up">
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <CircleX />
          </div>
          <div className="ms-3 text-sm font-normal"> {texto}</div>
        </div>
      )}

      {showWarning && (
        <div className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 motion-preset-slide-up">
          <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <TriangleAlert />
          </div>
          <div className="ms-3 text-sm font-normal">{texto}</div>
        </div>
      )}
    </>
  );
}
