import { Button } from "./button";
import { cn } from "@/lib/utils";

export function SideBar() {
  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">

        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            </svg>
            Inbox
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Contacts
          </Button>
        </div>
        
      
      
        </div>
    </div>
  );
}
