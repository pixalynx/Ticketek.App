import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import MainClientPage from "./mainClientPage";
import { getCoreApiUrl } from "./api";
import axios from "axios";
import { VenuDto } from "@/models/VenuDto";

async function GetVenues(): Promise<VenuDto[]> {
  const baseUrl = getCoreApiUrl();
  console.log(baseUrl);

  const res = axios.get(`${baseUrl}/api/event/venues`);

  if ((await res).status !== 200) throw new Error("Failed to fetch data");

  return (await res).data.venues;
}

export default async function Home() {
  const venues = await GetVenues();
  // const venues = undefined;
  return (
    <main className="flex max-w-6xl flex-col items-center gap-6 sm sm:p-24 lg:p-24 mx-auto ">
      <MainClientPage venues={venues} />
    </main>
  );
}

export const dynamic = "force-dynamic";
