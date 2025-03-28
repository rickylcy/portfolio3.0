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

export default function ServiceDetails({ open, onClose, title, details }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[90%] md:w-[60%] max-h-[80vh] overflow-auto p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Services with more than 3 years of experience. Providing quality work
          to clients and companies.
        </p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
