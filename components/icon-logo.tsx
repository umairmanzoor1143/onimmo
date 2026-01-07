import { cn } from "@/lib/utils";

export const IconLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-10 w-auto", className)}
        >
            {/* Chimney */}
            <rect x="155" y="10" width="15" height="40" fill="#932A12" />

            {/* Roof */}
            <path
                d="M20 100 L150 20 L280 100"
                stroke="#34435E"
                strokeWidth="15"
                strokeLinecap="square"
            />

            {/* Text "ONIMMO" - Placing text manually for better control or using SVG text */}
            {/* For simplicity and font match, we might want to use HTML text next to it, 
          but if we want it self contained: */}
            {/* Note: In a real scenario, we'd use paths for text to guarantee look. 
          Here we'll rely on the usage context for text or just the icon mark 
          if the user wants the full logo. 
          
          Update: The user wants the logo like the image.
          Let's try to draw the text or just the icon and put text in HTML.
          The prompt says "We need landing page... Name of company is onimmo".
          Let's make this just the graphical mark (Roof + Chimney) 
          and handle text in HTML to ensure font consistency (Frutiger/Source Sans).
      */}
        </svg>
    );
};
