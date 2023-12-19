import {db} from "@/src/db";
import {notFound} from "next/navigation";
import SnippetEditForm from "@/src/components/snippet-edit-form";

interface EditSnippetPageProps {
    params: {
        id: string
    }
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
    const snippetId = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where: {
            id: snippetId
        }
    })

    if (!snippet) {
        return notFound()
    }

    return <div>
        <SnippetEditForm snippet={snippet}/>
    </div>
}