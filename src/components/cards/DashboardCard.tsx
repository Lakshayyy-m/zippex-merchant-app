"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { Badge } from "@/components/ui/badge";
import { ComponentType } from "react";

interface DashboardCardProps {
  title: string;
  badgeVariant:
    | "default"
    | "brandPositive"
    | "brandNegative"
    | "secondary"
    | "destructive"
    | "outline"
    | null
    | undefined;
  progressValue: number;
  badgeValue: string;
  Icon: ComponentType;
  value: number;
  increase: boolean;
  currency: boolean;
  isNumerical?: boolean;
  timeFrame?: string;
}

export default function DashboardCard({
  title,
  badgeVariant,
  progressValue,
  badgeValue,
  value,
  timeFrame,
  increase,
  currency,
  isNumerical,
  Icon,
}: DashboardCardProps) {
  return (
    <Card className="w-full max-md:col-span-3 col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon />
      </CardHeader>

      <CardContent>
        {isNumerical ? (
          <>
            <div className="text-2xl md:text-3xl font-bold truncate">
              {value}
            </div>
          </>
        ) : currency ? (
          <div className="text-2xl md:text-3xl font-bold truncate">
            ${value}
          </div>
        ) : increase ? (
          <div className="text-2xl md:text-3xl font-bold truncate">
            +{value}
          </div>
        ) : (
          <div className="text-2xl md:text-3xl font-bold truncate">
            -{value}
          </div>
        )}

        {increase ? (
          <>
            <Badge variant={badgeVariant} className="mt-3">
              +{badgeValue} from last{" "}
              {timeFrame === "month"
                ? "month"
                : timeFrame === "week"
                ? "week"
                : "year"}
            </Badge>
          </>
        ) : (
          <>
            <Badge variant={badgeVariant} className="mt-3">
              -{badgeValue} from last{" "}
              {timeFrame === "month"
                ? "month"
                : timeFrame === "week"
                ? "week"
                : "year"}
            </Badge>
          </>
        )}

        <div className="w-full mt-6">
          <Progress value={progressValue} className="" />
        </div>
      </CardContent>
    </Card>
  );
}
