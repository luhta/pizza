import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="m-6 ">
      <Button size="sm"> <Link href="/">Перейти на главную</Link></Button>
    </div>
  );
}
