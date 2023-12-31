import {db} from "@/src/db";
import {notFound} from "next/navigation";
import Link from "next/link";
import * as actions from "@/src/actions";

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

    const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id)

    return (
        <div>
            <div className={'flex m-4 justify-between items-center'}>
                <h1 className={'text-xl font-bold'}>{snippet.title}</h1>
                <div className={'flex gap-4'}>
                    <Link href={`/snippets/${snippet.id}/edit`} className={'p-2 border rounded'}>Edit</Link>
                    <form action={deleteSnippetActions}>
                        <button className={'p-2 border rounded'}>Delete</button>
                    </form>
                </div>
            </div>
            <pre className={'border rounded p-3 bg-gray-200 border-gray-200'}>
               <code>
                   {snippet.code}
               </code>
            </pre>
        </div>
    )
}

export async function generateStaticParams() {
    const snippets = await db.snippet.findMany()

    return snippets.map(snippet => {
        return {
            id: snippet.id.toString()
        }
    })
}