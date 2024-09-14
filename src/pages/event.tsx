import { SecondaryFooterMenu } from "@/components/secondary-footer-menu";
import SecondaryHeaderMenu from "@/components/secondary-header-menu";
import SampleEvent from "../assets/sample-event.jpg";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Event() {
  return (
    <div className="container min-h-screen md:w-2/4 mx-auto py-4 md:px-0 px-4 flex flex-col gap-2">
      <SecondaryHeaderMenu />
      <div className="flex flex-grow flex-col items-start gap-4">
        <img
          src={SampleEvent}
          alt="Image"
          loading="lazy"
          className="aspect-video rounded-md object-cover"
        />
        <Badge variant="secondary">Technology</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Convex Hackathon
        </h1>
        <p className=" flex h-5 items-center space-x-2 text-muted-foreground">
          <span>Mon, 10 Mar 2024</span>
          <Separator orientation="vertical" />
          <span>2:10 pm - 3:30 pm</span>
        </p>
        <p className=" flex h-5 items-center space-x-2 text-muted-foreground">
          <span>2.5 km away</span>
          <Separator orientation="vertical" />
          <span>45 mins</span>
        </p>
        <p className=" flex flex-col space-y-2 text-muted-foreground">
          <span>3-B Apartment</span>
          <span>ABC Alley Street,</span>
          <span>City, State, Country 000000</span>
        </p>
        <p className="leading-7 my-6">
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:w-full to apply the w-full utility at only medium
          screen sizes and above. You can also use variant modifiers to target
          media queries like You can also use variant modifiers to target media
          queries like responsive breakpoints, dark mode,
          prefers-reduced-motion, and more. For example, use md:w-full to apply
          the w-full utility at only medium screen sizes and above. responsive
          breakpoints, dark mode, prefers-reduced-motion, and more. For example,
          use md:w-full to apply the w-full utility at only medium screen sizes
          and above.
        </p>

        <div className="flex">
          <div className="flex -space-x-6">
            <Avatar>
              <AvatarImage src="https://github.com/prajesheleven.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/prajesheleven.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm text-muted-foreground">
            +398
          </div>
        </div>
      </div>
      <SecondaryFooterMenu />
    </div>
  );
}
