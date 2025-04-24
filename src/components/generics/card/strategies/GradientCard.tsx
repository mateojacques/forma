import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ICardData } from "@/interfaces/card";

const GradientCard = ({ title, media, description, cta }: ICardData) => {
  return (
    <Card className="py-0 overflow-hidden relative group transition-all duration-300 hover:scale-[1.02] min-h-[480px] h-full">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-indigo-600/80 to-blue-700/80 opacity-80 group-hover:opacity-90 transition-opacity z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Text content area - taking full width but leaving space for image */}
        <div className="flex flex-col h-full pr-[30%]">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold text-white mb-3 drop-shadow-md">
              {title}
            </CardTitle>
            <CardDescription className="text-white/90 font-medium text-base">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-0 mt-6 flex-grow"></CardContent>
          
          {cta && (
            <CardFooter className="p-0 mt-auto mb-4">
              <a
                href={cta.href}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-colors duration-300 inline-flex items-center"
              >
                {cta.content}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </CardFooter>
          )}
        </div>
        
        {/* Media section positioned at bottom right with hover effect */}
        {media?.type === "image" && (
          <div className="rounded-tl-xl absolute bottom-0 right-0 w-[40%] h-[65%] overflow-hidden z-5">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-purple-700/90 z-10"></div>
            
            {/* Image with hover effect */}
            <img
              src={media.source_url}
              alt={title}
              className="w-full h-full object-cover object-center origin-bottom-right transition-all duration-500 ease-out group-hover:scale-110"
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default GradientCard;