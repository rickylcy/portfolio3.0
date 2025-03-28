"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BackgroundModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90%] md:w-[60%] max-h-[80vh] overflow-auto p-4 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            My Background
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column: Text */}
            <div className="space-y-4 text-gray-700">
              <p>
                Originally from Hong Kong, my Australian adventure kicked off in
                2016 when I landed here on a working holiday visa at 19. I
                embraced life on the farm, explored new places, and spent six
                unforgettable months in Brisbane—an experience that reshaped my
                outlook and ignited my passion for the Aussie way of life.
              </p>
              <p>
                I returned to Hong Kong in 2017 to reconnect with family, but
                Australia’s allure was irresistible. In 2018, I enrolled in
                Computer Science at Queensland University of Technology (QUT),
                marking the beginning of a transformative journey that would
                redefine my future in tech.
              </p>
            </div>
            {/* Right Column: Images */}
            <div className="flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Background Image 1"
                className="w-full rounded-lg"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Background Image 2"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 text-gray-700">
            <p>
              My time at QUT was truly inspiring. Immersed in technology and web
              development, I discovered a deep passion for crafting innovative
              digital experiences. Every step—from farm work to academic
              breakthroughs—has fueled my growth, and I’m excited to keep
              pushing forward in my journey as a developer.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
