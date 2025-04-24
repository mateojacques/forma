import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ICardData } from "@/interfaces/card";

const SimpleCard = ({ title, media, description }: ICardData) => (
  <Card className="shadow px-7 py-5 h-full">
    <CardHeader className="p-0">
      <CardTitle className="text-2xl mb-3 font-semibold text-gray-800">
        {title}
      </CardTitle>
      <CardDescription className="text-gray-600 mb-4">
        {description}
      </CardDescription>
    </CardHeader>

    {media?.type === "image" && (
      <CardContent className="p-0 mt-auto">
        <div className="h-100 overflow-hidden mb-4 rounded">
          <img
            src={media.source_url}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </CardContent>
    )}
  </Card>
);

export default SimpleCard;
