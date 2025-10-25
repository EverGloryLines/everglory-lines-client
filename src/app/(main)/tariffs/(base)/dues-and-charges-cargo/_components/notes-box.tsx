import { AlertCircle } from "lucide-react";

interface NotesBoxProps {
  notes: string[];
}

export function NotesBox({ notes }: NotesBoxProps) {
  return (
    <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-none">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-[#001a3d] flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-sans font-medium text-[#001a3d] text-[15px] mb-2">Important Notes</h4>
          <ul className="space-y-1">
            {notes.map((note, index) => (
              <li key={index} className="text-sm font-sans font-normal text-blue-800 flex gap-2">
                <span className="text-blue-800 font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
