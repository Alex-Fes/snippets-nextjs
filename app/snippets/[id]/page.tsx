import {db} from "@/src/db";
import {notFound} from "next/navigation";

interface SnippetPageProps {
    params: {
        id: string
    }
}

export default async function SnippetPage(props: SnippetPageProps) {
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    })

    if (!snippet) {
        return notFound()
    }


    return (
        <div>
            <h3>{snippet.title}</h3>
        </div>
    )
}