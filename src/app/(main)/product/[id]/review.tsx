import { Button } from "@/@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/@/components/ui/card";
import { Input } from "@/@/components/ui/input";
import { Label } from "@/@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui_shadcn/table-custom";

export default function Review(): JSX.Element {
  return (
    <div className="w-full h-fit flex flex-row sm:flex-col justify-center gap-4 sm:pb-4">
      <div className="w-[600px] xl:w-1/2 sm:w-full h-[410px] overflow-auto px-4 py-2 border rounded-lg border-[#E5E7EB] bg-[#FCFCFC]">
        <Table className="w-fit h-fit mx-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="w-28 text-black text-lg text-left">
                Name
              </TableHead>
              <TableHead className="w-60 text-black text-lg">Review</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-fit max-h-[300px]">
            <TableRow>
              <TableCell>
                <p className="w-20 break-words line-clamp-1 text-left text-base ">
                  Sang le
                </p>
                <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                  <button>
                    <img
                      className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                      src="/assets/like.png"
                    ></img>
                  </button>
                  <button>
                    <img className="w-4 h-4" src="/assets/dislike.png"></img>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                  Ultra nice wfbhjerfh jerfhergfh jerhfehgfrrfgref kjwrhfjkerhf
                  jkfkherhv hgerfjvhersjvfbherhjvbjkebfvjhdbvhjdbvg
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="w-20 break-words line-clamp-1 text-left text-base ">
                  Sang le
                </p>
                <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                  <img
                    className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                    src="/assets/like.png"
                  ></img>{" "}
                  <img className="w-4 h-4" src="/assets/dislike.png"></img>
                </div>
              </TableCell>
              <TableCell>
                <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                  Ultra nice wfbhjerfh jerfhergfh
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="w-20 break-words line-clamp-1 text-left text-base ">
                  Sang le
                </p>
                <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                  <button>
                    <img
                      className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                      src="/assets/like.png"
                    ></img>
                  </button>
                  <button>
                    <img className="w-4 h-4" src="/assets/dislike.png"></img>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                  Ultra nice wfbhjerfh jerfhergfh jerhfehgfrrfgref kjwrhfjkerhf
                  jkfkherhv hgerfjvhersjvfbherhjvbjkebfvjhdbvhjdbvg
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="w-20 break-words line-clamp-1 text-left text-base ">
                  Sang le
                </p>
                <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                  <img
                    className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                    src="/assets/like.png"
                  ></img>{" "}
                  <img className="w-4 h-4" src="/assets/dislike.png"></img>
                </div>
              </TableCell>
              <TableCell>
                <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                  Ultra nice wfbhjerfh jerfhergfh
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Card className="w-[350px] sm:w-full xl:w-1/2 h-[410px] bg-[#FCFCFC]">
        <CardHeader>
          <CardTitle>Send us</CardTitle>
          <CardDescription>
            Do you have any feedback for us? We would love to hear from.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input className="h-9" id="name" placeholder="Your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="review">Your review</Label>
                <Input className="h-9" id="name" placeholder="Content" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-[40%] h-9" variant="outline">
            Cancel
          </Button>
          <Button className="bg-primary w-[40%] h-9">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
