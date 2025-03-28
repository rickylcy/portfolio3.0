"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";

export default function ProjectDetails({
  open,
  onClose,
  title,
  status,
  introduction,
  technologies,
  tasks,
  screenshots,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90%] md:w-[70%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <Button variant="outline" onClick={onClose} className="p-1">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <p className="mb-2 text-sm text-gray-600">Status: {status}</p>
        <p className="mb-4 text-sm text-gray-600">
          <strong>Introduction:</strong> {introduction}
        </p>
        {technologies && technologies.length > 0 && (
          <>
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Technologies Used:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </>
        )}
        {tasks && tasks.length > 0 && (
          <>
            <p className="mb-2 text-sm font-semibold text-gray-700">Tasks:</p>
            <ul className="space-y-2 mb-4">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-sm text-gray-600">{task}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        {screenshots && screenshots.length > 0 && (
          <>
            <p className="mb-2 text-sm font-semibold text-gray-700">
              Screenshots:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full max-h-60 object-contain rounded-lg shadow"
                />
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
