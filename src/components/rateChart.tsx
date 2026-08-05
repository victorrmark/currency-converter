import { AreaSeries, createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function ChartComponent() {
  const colors = {
    backgroundColor: "#171719",
    lineColor: "#cef739",
    textColor: "#9d9d9d",
    areaTopColor: "rgba(216,255,57,.45)",
    areaBottomColor: "rgba(216,255,57,0)",
    // areaTopColor: "#cef739",
    // areaBottomColor: "rgba(206, 247, 57, 0.18)",
  };

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor },
        textColor: colors.textColor,
        fontSize: 12,
      },
      rightPriceScale: {
        visible: false,
      },

      leftPriceScale: {
        visible: true,
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          color: "#2B2B2B",
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(AreaSeries, {
      lineColor: colors.lineColor,
      topColor: colors.areaTopColor,
      bottomColor: colors.areaBottomColor,
      lineWidth: 2,
    });
    newSeries.setData([
      { time: "2026-05-01", value: 0.85 },
      { time: "2026-05-02", value: 0.853 },
      { time: "2026-05-03", value: 0.848 },
      { time: "2026-05-04", value: 0.857 },
      { time: "2026-05-05", value: 0.861 },
    ]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    colors.backgroundColor,
    colors.lineColor,
    colors.textColor,
    colors.areaTopColor,
    colors.areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
}
