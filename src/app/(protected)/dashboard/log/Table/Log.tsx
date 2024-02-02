"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import { useQuery } from "@tanstack/react-query";
import { readLogs } from "@app/_actions/log";
import formatReadableTime from "@utils/formatReadableTime";
import createSupabaseBrowserClient from "@supabase/client";

export default function Log() {
  const {
    data: logs,
    isSuccess,
    error,
    refetch,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
    refetch: any;
  } = useQuery({
    queryKey: [`logs-dashboard`],
    queryFn: async () => await readLogs("all"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  const supabase = createSupabaseBrowserClient();

  const handleChanges = () => {
    refetch();
  };

  supabase
    .channel("logs")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "logs" },
      handleChanges
    )
    .subscribe();

  const logsData = logs;

  return (
    <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Action</TableHead>
            <TableHead className="text-center">Actor</TableHead>
            <TableHead className="text-left sm:hidden">Created at</TableHead>
            <TableHead className="text-center">Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            logsData.map((log: any, index: any) => (
              <TableRow key={index}>
                <TableCell className="text-left max-w-[350px]">
                  {log.action}
                  <p className="hidden sm:block text-[#6B7280]">
                    {formatReadableTime(log.created_at)}
                  </p>
                </TableCell>
                <TableCell className="text-center">{log.name}</TableCell>
                <TableCell className="text-left sm:hidden">
                  {formatReadableTime(log.created_at)}
                </TableCell>
                <TableCell className="text-center">{log.result}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
