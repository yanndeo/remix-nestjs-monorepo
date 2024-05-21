import { LoaderFunctionArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";

export const loader = ({context}: LoaderFunctionArgs) => {
    const data = context.remixService.getHello();
    return json(data)
}

export default function Page() {
   const data = useLoaderData<typeof loader>()
    return <h1>{data}</h1>
}