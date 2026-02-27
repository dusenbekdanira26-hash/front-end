import StepCounter from "./StepCounter";

export default function CounterApp() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}