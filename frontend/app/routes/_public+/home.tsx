import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix NestJS!!!</h1>
<div className="flex flex-col gap-3">
<Button variant="primary">Creer un compte</Button>
      <Button variant="secondary">Creer un compte</Button>
      <Button variant="greenOutline">Creer un compte</Button>

      <Button variant="redOutline">Creer un compte</Button>
      <Button variant="blueOutline">Creer un compte</Button>
      <Button variant="oauth">Creer un compte</Button>
</div>
    </div>
  );
}
