import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { format } from "date-fns";

type EvolutionProps = {
  date: Date;
  first: string;
  second: string;
  thrid: string;
};

const Top3AtDate = (props: EvolutionProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-lg h-full">
      <h2 className="text-3xl font-bold text-white mb-4">
        {format(props.date, "dd/MM/yyyy")}
      </h2>
      <div className="max-w-md mx-auto">
        <div>
          <div className="space-y-2">
            <Label className="text-green-400" htmlFor="event1">
              1st - {props.first}
            </Label>
          </div>
          <div className="space-y-2">
            <Label className="text-blue-400" htmlFor="event2">
              2nd - {props.second}
            </Label>
          </div>
          <div className="space-y-2">
            <Label className="text-purple-400" htmlFor="event3">
              3rd - {props.thrid}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Evolution = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-4">Top 3 evolution</h1>
      <p className="text-gray-400 mb-8">
        This is how your mind has changed in the past
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-56">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1 h-full">
                <Card className="border-gray-400">
                  <CardContent className="p-0">
                    <Top3AtDate
                      date={new Date()}
                      first="AL"
                      second="EU"
                      thrid="MA"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};
